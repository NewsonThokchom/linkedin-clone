import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1654892807~hmac=6e6fb30aab9147902b2643fcb92dde23" alt="linkedin icon" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={SmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption title="Me" avatar="https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1654896621~hmac=82e7eda7b3e3596aa0f9d1c83406b33e" />
            </div>

        </div>
    )
}

export default Header