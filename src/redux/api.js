import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

const getCsrfToken = () => {
  // Logic to retrieve CSRF token from your application's storage or context
  return "your_csrf_token_here";
};

export const letualApi = createApi({
  reducerPath: "letualApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7160/" }),
  endpoints: (builder) => ({
    getCartByUserId: builder.query({
      query: (userId) => `Cart/${userId}`,
    }),
    getProduct: builder.query({
      query: (path) => `${path}?_limit=2`,
    }),

    getProductById: builder.query({
      query: ({ id, path }) => `${path}/${id}`,
    }),
    getUsers: builder.query({
      query: () => "Auth",
    }),
    getUserById: builder.query({
      query: (userId) => `Auth/${userId}`,
    }),
    addUser: builder.mutation({
      query(body) {
        return {
          url: `Auth`,
          method: "POST",
          body,
        };
      },
    }),
    deleteCartById: builder.mutation({
      query(id) {
        return {
          url: `Cart/${id}`,
          method: "DELETE",
        };
      },
    }),
    deleteCartByUserId: builder.mutation({
      query(userId) {
        return {
          url: `DeleteCart/${userId}`,
          method: "DELETE",
        };
      },
    }),
    addToCart: builder.mutation({
      query(body) {
        return {
          url: `Cart`,
          method: "POST",
          body,
        };
      },
    }),
    updateProductCount: builder.mutation({
      query: ({ id, item }) => {
        return {
          url: `Cart/${id}`,
          method: "PUT",
          body: item,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCartByUserIdQuery,
  useGetProductQuery,
  useGetProductByIdQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useDeleteCartByIdMutation,
  useDeleteCartByUserIdMutation,
  useAddToCartMutation,
  useUpdateProductCountMutation,
  useAddUserMutation,
} = letualApi;
