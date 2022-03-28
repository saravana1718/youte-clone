import React from 'react';
import "./_sidebar.scss";
import {MdHome,MdSubscriptions,MdThumbUp,MdHistory,MdLibraryBooks,MdExitToApp} from "react-icons/md";
function Sidebar({value}) {
    return (
        <nav className={value?"sidebarOpen":"sidebar"}>
            <li> 
                <MdHome size={23}/>
                <span>Home</span>

            </li>
            <li> 
                <MdSubscriptions size={23}/>
                <span>Subscriptions</span>

            </li>
            <li> 
                <MdThumbUp size={23}/>
                <span>Likedvideos</span>

            </li>
            <li> 
                <MdHistory size={23}/>
                <span>History</span>

            </li>
            <li> 
                <MdLibraryBooks  size={23}/>
                <span>Library</span>

            </li>
<hr/>
            <li > 
                <MdExitToApp size={23}/>
                <span>Logout</span>

            </li>
            <hr/>
        </nav>
    );
}

export default Sidebar;