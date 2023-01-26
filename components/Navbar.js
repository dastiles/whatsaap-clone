import Link from "next/link"
import { Button, IconButton } from "@material-tailwind/react"
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'
import useAuth from "@/hook/auth"


function Nav() {
    const { user } = useAuth()
    console.log(user.photoURL)
    return (
        <nav className="bg-whatsApp_blue px-10 shadow-sm sticky top-0">
            <div className=" flex items-center justify-between font-white font-poppins py-8 ">
                <h1 className="text-xl text-white   font-thin">WhatsApp</h1>
                <div className=" hidden md:flex text-white  items-center justify-between gap-5 md:gap-20">
                    <Link href={'/'}>
                        <p>Chats</p>
                    </Link>
                    <Link href={'/status'}>
                        <p>Status</p>
                    </Link>
                    <Link href={'/calls'}>
                        <p>Call</p>
                    </Link>
                </div>
                <div className=" block gap-5 flex items-center justify-center">
                    <Button ripple={true} className="mr-5">
                        <AiOutlineCamera size={30} color='white' />
                    </Button>
                    <Button ripple={true} >
                        <AiOutlineSearch size={30} color='white' />
                    </Button>
                    <div className=" w-10 rounded-full">
                        <img className="rounded-full w-full " src={`${user.photoURL}`} alt='user profile image' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav