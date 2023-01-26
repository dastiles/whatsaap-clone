import { Button } from '@material-tailwind/react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { signIn } from 'next-auth/react'

export default function Login() {
    return (
        <div className='bg-whatsApp_gray h-screen flex flex-col items-center justify-center gap-8'>
            <div>
                <IoLogoWhatsapp size={60} color='#008069' />
            </div>
            <Button onClick={() => signIn} className='py-2 px-20 rounded-md text-white font-poppins text-md font-bold bg-whatsApp_blue'>Sign In</Button>

        </div>
    )
}