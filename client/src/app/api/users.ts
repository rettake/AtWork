import { IUser } from "../../interfaces/IUser";
import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getUserById: builder.query<IUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
} = usersApi;

export const {
  endpoints: { getAllUsers, getUserById },
} = usersApi;
