import { AiFillSwitcher } from "react-icons/ai";
import { MdSpaceDashboard, MdNotifications, MdUpgrade } from "react-icons/md";
import { FaUserAlt, FaClipboardList, FaIcons, FaGlobe } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si"; 


export const SidebarItems= [
    {
        icon: <MdSpaceDashboard/>,
        text:"Dashboard",
        link:"/"

    },
    {
        icon: <FaUserAlt/>,
        text:"User Profile",
        link:"/UserProfile"
    },
    {
        icon: <FaClipboardList/>,
        text:"Table List",
        link:"/TableList"
    },
    {
        icon: <AiFillSwitcher/>,
        text:"Typography",
        link:"/Typography"
    },
    {
        icon: <FaIcons/>,
        text:"Icons",
        link:"/Icons"
    },
    {
        icon: <SiGooglemaps/>,
        text:"Maps",
        link:"/Maps"
    },
    {
        icon: <MdNotifications/>,
        text:"Notifications",
        link:"/Notifications"
    },
    {
        icon: <FaGlobe/>,
        text:"RTL Support",
        link:"/RTLSupport"
    },
    {
        icon: <MdUpgrade/>,
        text:"Upgrade To PRO",
        link:"/UpgradeToPRO"
    }
]