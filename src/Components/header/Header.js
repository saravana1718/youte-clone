import React from 'react';
import "./_header.scss"
import { FaBars, FaMicrophone } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdOutlineVideoCall } from "react-icons/md";

function Header({ value, setvalue }) {

    return (
        <div className=' header'>
            <FaBars className="header_menu" size={26}
                onClick={() => { setvalue(value => !value) }}
            />
            <div
                className='header_logo'></div>
            <form>
                <input type="text" placeholder='search' style={{ borderColor: "#c6c6c6" }} />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
                <div className='header_mic'>
                    <FaMicrophone size={28} />
                </div>
            </form>
            <div className="header_icons">
                <MdOutlineVideoCall size={28} />
                <MdApps size={28} />
                <MdNotifications size={28} />

                <img
                    src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" />
            </div>
        </div>
    );
}

export default Header;