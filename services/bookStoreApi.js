// Need to use the React-specific entry point to import createApi
import { AirlineSeatIndividualSuiteTwoTone } from "@mui/icons-material";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookStoreApi = createApi({
  reducerPath: "bookStoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Books", "Users", "Orders", "Customers"],
  endpoints: (builder) => ({
    //Books
    getAllBooks: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category } = options;
        return {
          url: "book/getAll/",
          params: { Size, Sort, Page, category, search },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response;
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.books["$values"].map((book) => ({
                type: "Books",
                id: book.id,
              })),
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }];
      },
    }),
    getBook: builder.query({
      query: (id) => `book/get/${id}`,
      transformResponse: (response, meta, arg) => {
        return response;
      },
      providesTags: (result) => [{ type: "Books", id: result.id }],
    }),
    getAllCategories: builder.query({
      query: () => "category/getAll",
      transformResponse: (response, meta, arg) => response["$values"],
      providesTags: (result) => [{ type: "Books", id: "LIST" }],
    }),
    editBook: builder.mutation({
      query: (body) => ({
        url: "book/put",
        method: "PUT",
        body: body,
      }),
      invalidatesTags: (result) => [{ type: "Books", id: result.Id }],
    }),
    createBook: builder.mutation({
      query: (body) => ({
        url: "book/create",
        method: "POST",
        body: body,
      }),
      invalidatesTags: (result) => [{ type: "Books", id: "LIST" }],
    }),
    deleteBook: builder.mutation({
      query: (param) => ({
        url: `book/delete/${param}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    //Users
    login: builder.mutation({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body: body,
      }),
      transformResponse: (result, meta, args) => {
        return result;
      },
      invalidatesTags: (result) => [{ type: "Users", id: result.id }],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "user/create/admin",
        method: "POST",
        body: body,
      }),
      transformResponse: (result, meta, arg) => {
        return result;
      },
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    getUser: builder.query({
      query: "user/get",
      providesTags: (result) => [{ type: "Users", id: result.id }],
      transformResponse: (result, meta, arg) => {
        return result;
      },
    }),
    getAllUsers: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category } = options;
        return {
          url: "user/admin/getAll/",
          params: { Size, Sort, Page, category, search },
        };
      },
      providesTags: (results) => {
        return results
          ? [
              ...results.users["$values"].map((user) => ({
                type: "Users",
                id: user.id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }];
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => `user/delete/${id}`,
      invalidatesTags: (result) => [{ type: "Users", id: "LIST" }],
    }),
    //Customers
    getAllCustomers: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category } = options;
        return {
          url: "user/customer/getAll/",
          params: { Size, Sort, Page, category, search },
        };
      },
      providesTags: (results) => {
        return results
          ? [
              ...results.users["$values"].map((user) => ({
                type: "Customers",
                id: user.id,
              })),
              { type: "Customers", id: "LIST" },
            ]
          : [{ type: "Customers", id: "LIST" }];
      },
    }),
    // Orders
    getAllOrders: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category } = options;
        return {
          url: "order/getAll/",
          params: { Size, Sort, Page, category, search },
        };
      },
      providesTags: (results) => {
        return results
          ? [
              ...results.orders["$values"].map((order) => ({
                type: "Orders",
                id: order.id,
              })),
              { type: "Orders", id: "LIST" },
            ]
          : [{ type: "Orders", id: "LIST" }];
      },
    }),
    getOrder: builder.query({
      query: (id) => `order/get/${id}`,
      providesTags: (result) => [{ type: "Orders", id: result.id }],
    }),
    changeOrderStatus: builder.mutation({
      query: (body) => ({
        url: `order/put/${body.id}`,
        method: "PUT",
        body: {
          status: body.status,
        },
      }),
      invalidatesTags: (order) => [{ type: "Orders", id: order.id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllBooksQuery,
  useGetBookQuery,
  useGetAllCategoriesQuery,
  useEditBookMutation,
  useCreateBookMutation,
  useDeleteBookMutation,
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useGetAllCustomersQuery,
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useChangeOrderStatusMutation,
} = bookStoreApi;
