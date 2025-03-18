import React from 'react'
import styles from "./Chats.module.css";
import imgUrl from "../../assets/avatr.jpg";

export default function PinnedUser() {
    return (
        <div className='col-12 pt-3'>
            <div className={styles.pinnedUser}>
                <img src={imgUrl} />
                <h5>User Name</h5>
            </div>

        </div>
    )
}