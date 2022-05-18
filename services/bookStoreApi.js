// Need to use the React-specific entry point to import createApi
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
  tagTypes: ["Books", "Users", "Orders", "Customers", "Sales"],
  endpoints: (builder) => ({
    //Books
    getAllBooks: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category, search } = options;
        const qParams = { Size, Sort, Page, category };
        if (search != null && search != "") {
          qParams.search = search;
        }
        return {
          url: "book/getAll/",
          params: qParams,
        };
      },
      transformResponse: (response, meta, arg) => {
        const books = response.books["$values"];
        const filteredBooks = books.map((book) => ({
          ...book.book,
          categoryId: book.categoryId,
          categoryName: book.categoryName,
          authorId: book.authorId,
          authorName: book.authorName,
        }));
        const totalPages = response.totalPages;
        return { rows: filteredBooks, totalPages };
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.rows.map((book) => ({
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
        const filteredBook = {
          ...response.book,
          categoryId: response.categoryId,
          categoryName: response.categoryName,
          authorId: response.authorId,
          authorName: response.authorName,
        };
        return filteredBook;
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
      invalidatesTags: (result) => [
        { type: "Books", id: result.Id },
        { type: "Books", id: "LIST" },
      ],
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
        url: "user/login/admin",
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
        const { Size, Sort, Page, category, search, start, end } = options;
        const qParams = { Size, Sort, Page, category };
        if (search != null && search != "") {
          qParams.search = search;
        }
        if (start && end) {
          qParams.Start = start;
          qParams.End = end;
        }
        return {
          url: "user/customer/getAll/",
          params: qParams,
        };
      },
      providesTags: (results) => {
        return results
          ? [
              ...results.rows.map((user) => ({
                type: "Customers",
                id: user.id,
              })),
              { type: "Customers", id: "LIST" },
            ]
          : [{ type: "Customers", id: "LIST" }];
      },
      transformResponse: (response) => {
        return { rows: response["$values"] };
      },
    }),
    getNoOfCustomersRegistered: builder.query({
      query: ({ start, end }) => {
        const qParams = {};
        if (start != null && end != null) {
          qParams.start = start;
          qParams.end = end;
        }
        return {
          url: "stats/customers",
          params: qParams,
        };
      },
      providesTags: (result) => [{ type: "Customers", id: "LIST" }],
    }),
    // Orders
    getAllOrders: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category, search, start, end } = options;
        const qParams = { Size, Sort, Page, category };
        if (search != null && search != "") {
          qParams.search = search;
        }
        if (start && end) {
          qParams.Start = start;
          qParams.End = end;
        }
        return {
          url: "order/getAll/",
          params: qParams,
        };
      },
      transformResponse: (result) => {
        const orders = result.orders["$values"];
        const ordersTransformed = orders.map((order) => {
          const userId = order.user.id;
          const cartProducts = order.cartProducts["$values"];
          const cartProductsTransformed = cartProducts.map((cartProduct) => {
            return {
              ...cartProduct.product,
              quantity: cartProduct.quantity,
              totalPrice: cartProduct.totalPrice,
            };
          });
          return { ...order, cartProducts: cartProductsTransformed, userId };
        });
        return { rows: ordersTransformed };
      },
      providesTags: (results) => {
        return results
          ? [
              ...results.rows.map((order) => ({
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
      transformResponse: (response) => {
        const cartProducts = response.cartProducts["$values"];
        const filteredCartProducts = cartProducts.map((item) => ({
          ...item,
          id: item.product.id,
        }));
        return {
          ...response,
          cartProducts: filteredCartProducts,
        };
      },
    }),
    changeOrderStatus: builder.mutation({
      query: (body) => ({
        url: `order/put/${body.id}`,
        method: "PUT",
        params: {
          status: body.status,
        },
      }),
      invalidatesTags: (order) => ["Orders"],
    }),

    //sales
    getAllSales: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category, start, end } = options;
        const qParams = { Size, Sort, Page, category };
        if (start != "" && end != "") {
          qParams.Start = start;
          qParams.End = end;
        }
        return {
          url: "sales/getAll/",
          params: qParams,
        };
      },
      providesTags: (result) => [{ type: "Sales", id: "LIST" }],
      transformResponse: (result) => {
        const rows = result.sales["$values"];
        const transformedRows = rows.map((i) => {
          const date = new Date(`${i.year}/${i.month}/${i.day}`);
          let obj = { ...i };
          obj.orders = i.orders["$values"];
          const orders = i.orders["$values"];
          const totalSales = orders.reduce(
            (val, i) => val + Number(i.totalSales),
            0
          );
          const totalIncome = orders.reduce(
            (val, i) => val + Number(i.totalPrice),
            0
          );
          return {
            date,
            ...obj,
            totalSales,
            totalIncome,
          };
        });

        return {
          rows: transformedRows,
          totalPages: result,
        };
      },
    }),
    getSalesByCategory: builder.query({
      query: (options) => "stats/sales/categories",
      transformResponse: (result) => {
        return result.map((i) => ({
          sales: Number(i.sales),
          category: i.category,
        }));
      },
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
  useGetAllSalesQuery,
  useGetSalesByCategoryQuery,
  useGetNoOfCustomersRegisteredQuery,
} = bookStoreApi;
