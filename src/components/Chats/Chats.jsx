import ChatMessage from "./ChatMessage";
import styles from "./Chats.module.css"
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import PinnedUser from "./PinnedUsers";
import { useEffect, useState } from "react";
import { usersRepo } from "../../data/repos/usersRepos";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";



export default function Chats() {
  const[chats,setChats]=useState([]);
  const getDatalive=()=>{
    onSnapshot(collection(db, "users"), (users) => {
      let final=[];

         
          users.forEach((user) => {
            let user_obj={ ... user.data(),documentId:user.id,}
          
            final.push(user_obj);
           
          });
          setChats(final);
         });


  }
  
 
  //useEffect((()=>{ usersRepo.get_all_users().then(setChats) }),[])
  useEffect((()=>{ 
    getDatalive();

   }),[])










  return (
    <div className="col-12  p-3 h-100 d-flex flex-column gap-2">
       <h5>Chats</h5>

       <div className="col-12 d-flex position-relative">
           <CiSearch  className=" position-absolute " id={styles.search_icon}/> 
            <input id={styles.search} type="text" placeholder="search for user" />
           
       </div>

       <div className="col-12 d-flex flex-row  align-items-center">
            <Swiper
                            spaceBetween={20}
                            loop={true}
                            slidesPerView={4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}  >
                            <SwiperSlide><PinnedUser/></SwiperSlide>
                            <SwiperSlide><PinnedUser/></SwiperSlide>
                            <SwiperSlide><PinnedUser/></SwiperSlide>
                            <SwiperSlide><PinnedUser/></SwiperSlide>
                            <SwiperSlide><PinnedUser/></SwiperSlide>
                            <SwiperSlide><PinnedUser/></SwiperSlide>
                            <SwiperSlide><PinnedUser/></SwiperSlide>
            </Swiper>

       </div>
       <div className="col-12  h-25 overflow-auto flex-grow-1 " id={styles.chatContainer}>
           
           {
            chats.map((el)=>(
              <ChatMessage  key={el.documentId} statusColor={'yellow'} username={el.name}/>

            ))
           }
         
       </div>
       
        
     </div>
  )
}
