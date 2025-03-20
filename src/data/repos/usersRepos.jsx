import { indexUsers } from "../apis/index_users";
import { indexUsersLive } from "../apis/index_users_live";

export const  usersRepo={
    get_all_users:async ()=>{
        return  await indexUsers();
    },
    get_all_users_live:()=>{
        return  indexUsersLive()
    }
}