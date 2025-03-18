import { create } from "zustand";
import { RiContactsLine, RiGroupLine, RiMessage3Line, RiSettings2Line, RiUser2Line ,RiMoonLine } from "react-icons/ri";

export const usePaths = create(() => ({
    paths: [
        { path: "/profile", icon: <RiUser2Line />, element: <h1>Profile</h1> },
        { path: "/chats", icon: <RiMessage3Line />, element: <h1>chats</h1>},
        { path: "/groups", icon: <RiGroupLine />, element: <h1>Groups</h1> },
        { path: "/contacts", icon: <RiContactsLine />, element: <h1>Contacts</h1> },
        { path: "/settigns", icon: <RiSettings2Line />, element: <h1>Settigns</h1> },
    ]
}));