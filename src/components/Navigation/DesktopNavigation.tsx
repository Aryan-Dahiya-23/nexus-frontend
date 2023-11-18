import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md"
import { IoLogOutOutline } from "react-icons/io5"
// import OnlineAvatar from "../Avatar/OnlineAvatar";
import RingAvatar from "../Avatar/RingAvatar";
import { queryClient } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../api/auth";
import { fetchPeople } from "../../api/user";

const DesktopNavigation = () => {

    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext);

    const { mutate } = useMutation({
        mutationFn: logout,
        onSuccess: async () => {
            queryClient.invalidateQueries();
            setUser({});
        },
        onSettled: async () => {
            navigate("/login");
        },
    })

    const navigateHome = () => {
        navigate("/");
    }

    const navigatePeople = () => {
        navigate("/people");
    }

    const handleLogout = () => {
        mutate();
    };

    const prefetch = () => {
        queryClient.prefetchQuery({
            queryKey: ['people'],
            queryFn: () => fetchPeople(user._id),
            staleTime: 60000,
        })
    }

    return (
        <div className="md:flex md:flex-col hidden justify-between items-center border-r-2 border-gray-200 md:w-[8%] lg:w-[5%] py-4">

            <div className="space-y-3 cursor-pointer">
                <div className="hover:bg-gray-200 rounded-md p-2.5" onClick={navigateHome}>
                    <BsFillChatDotsFill className="icons" />
                </div>

                <div className="hover:bg-gray-200 rounded-md p-2.5" onClick={navigatePeople} onMouseEnter={prefetch} onTouchMove={prefetch} onFocus={prefetch} >
                    <MdPeopleAlt className="icons" />
                </div>

                <div className="hover:bg-gray-200 rounded-md p-2.5" onClick={handleLogout}>
                    <IoLogOutOutline className="icons" />
                </div>

            </div>

            <div className="cursor-pointer p-2">
                <RingAvatar
                    imgSrc={user && user.picture}
                />
            </div>
        </div>
    )
}

export default DesktopNavigation;