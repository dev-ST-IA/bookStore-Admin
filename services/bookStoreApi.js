// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookStoreApi = createApi({
  reducerPath: "bookStoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getAllBooks: builder.query({
      query: (options) => {
        const { Size, Sort, Page, category } = options;
        return {
          url: "book/getAll/",
          params: { Size, Sort, Page, category },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response;
      },
      providesTags: (result) => [{ type: "Books", id: "LIST" }],
    }),
    getBook: builder.query({
      query: (id) => `book/get/${id}`,
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    getAllCategories: builder.query({
      query: () => "category/getAll",
      transformResponse: (response, meta, arg) => response["$values"],
    }),
    getAllBooksSearch: builder.query({
      query: (search) => {
        return {
          url: "book/getAll/",
          params: { search },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response.books["$values"];
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetAllBooksQuery,
  useGetBookQuery,
  useGetAllCategoriesQuery,
  useGetAllBooksSearchQuery,
} = bookStoreApi;
