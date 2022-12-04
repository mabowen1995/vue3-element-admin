import { MetaQueryModel } from "."

// 查询结果
export interface UserModel {
    id: number,
    name?: string
}

// 查询参数
export interface UserQueryModel extends MetaQueryModel {
    name?: string
}

// 创建参数
export interface UserCreateModel {
    name?: string
}

// 更新参数
export interface UserUpdateModel {
    name?: string
}