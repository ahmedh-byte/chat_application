import styles from "./Chats.module.css"
import userImg from "../../assets/avatr.jpg"

export default function ChatMessage(props) {
  return (
    <div className={styles.chatMessage + ` ${props.isActive ? styles.active : null}`}>
       <div className="d-flex position-relative">
                <img src={userImg} />
                <b style={{ background: props.statusColor ? props.statusColor : 'green' }}></b>
            </div>
        <div className="d-flex flex-column flex-grow-1">
            <h5 className="m-0" >Name</h5>
            <p className="m-0">The Last Message</p>

        </div>
        <div className="d-flex flex-column align-items-center g-2">
            <h6 className="m-0">6:00 PM</h6>
            <span>02</span>
           

        </div>

        

        
    </div>
  )
}
