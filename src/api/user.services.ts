import { UserCreateModel, UserQueryModel, UserUpdateModel } from "@/models";
import { http, queryStringify } from "./interceptors";

// 增删改查
export const UserService = {
  getUsers: (query?: UserQueryModel) => http.get(`/users?${queryStringify(query)}`),
  createUser: (body: UserCreateModel) => http.post(`/user`, body),
  updateUser: (userId: string, body: UserUpdateModel) => http.patch(`/user/${userId}`, body),
  deleteUser: (userId: string) => http.delete(`/user/${userId}`),
}