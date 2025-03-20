import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";
import { useChats } from "../../store";

  export const indexUsersLive = ()=>{

     onSnapshot(collection(db, "users"), (users) => {
      let final=[];
      users.forEach((user) => {
        let user_obj={ ... user.data(),documentId:user.id,}
      
        final.push(user_obj);
       
      });
   return final;
     });

  }