import { withPublic } from "@/hook/route";
import { Button } from "@material-tailwind/react";
import { IoLogoWhatsapp } from "react-icons/io";

function Login({ auth }) {
    const { user, loginWithGoogle, error } = auth
    return (


        <div className='bg-whatsApp_gray h-screen flex flex-col items-center justify-center gap-8'>
            <div>
                <IoLogoWhatsapp size={60} color='#008069' />
            </div>
            <Button onClick={loginWithGoogle} className='py-2 px-20 rounded-md text-white font-poppins text-md font-bold bg-whatsApp_blue'>Sign In</Button>

        </div>
    )
}

export default withPublic(Login)