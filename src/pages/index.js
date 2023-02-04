import { withProtected, withPublic } from '@/hook/route'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCamera, AiOutlineFileGif, AiOutlineMessage, AiOutlineSearch, AiOutlineSend, AiOutlineSmile, AiOutlineZoomIn } from 'react-icons/ai'
import Chats from 'components/chats'
import ChatsLayout from 'components/ChatsLayout'
import MobileChat from 'components/MobileChat'
import MessageDesk from 'components/MessageDesk'



export default function Home() {

  //const { user } = auth

  return (
    <>
      <Head>
        <title>Lets Chat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white min-h-screen relative flex justify-center items-center ">
        <div className=" bg-white w-[95vw] md:w-[90vw] shadow-lg rounded-sm  h-[95vh]  relative flex">
          <MobileChat />
          <ChatsLayout />

          <MessageDesk />
        </div>
      </main>
    </>
  )
}

//export default withPublic(Home)