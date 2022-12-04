import { UserService } from "@/api";
import { MetaModel, UserModel, UserQueryModel } from "@/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const UserStore = defineStore('user', {
    state: () => {
        const users = ref<{
            list: UserModel[],
            loading: boolean,
            meta: MetaModel
          }>({
            list: [],
            loading: false,
            meta: {
              pageNo: 1,
              pageSize: 10,
              total: 0
            }
        });
        return {
            users: users.value
        }
    },
    actions: {
        async getList(query?: UserQueryModel) {
            this.users.loading = true;
            const result = await UserService.getUsers(query);
            this.users.list = result.data.items;
            this.users.meta.pageNo = result.data.pageNo;
            this.users.meta.pageSize = result.data.pageSize;
            this.users.meta.total = result.data.total;
            this.users.loading = false;
        }
    }
})