import React from 'react'
import { AiOutlineCamera, AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai'
import Chats from './chats'

function ChatsLayout() {
    return (
        <div className='hidden lg:block relative h-[95vh] w-[27vw]'>
            <div className='w-full bg-white relative h-[95vh]'>
                {/* header */}
                <div className="h-[20%] w-full  relative">
                    <div className="flex w-full justify-between items-center p-3 bg-header_col">
                        {/* avatar section */}
                        <div className='rounded-full h-[40px] w-[40px] overflow-hidden'>
                            <img src='assets/avatar.jpg' />
                        </div>
                        <ul className='flex gap-5'>
                            <li><AiOutlineMessage className='text-2xl  text-font-color' /></li>
                            <li><AiOutlineCamera className='text-2xl text-font-color' /></li>
                        </ul>
                    </div>
                    {/* input section */}
                    <div className='relative  p-2 rounded-md bg-light_gy'>
                        <input type='text' placeholder='Search chat or start new' className='w-full h-full px-2 py-2 border-none outline-none' />
                        <AiOutlineSearch className='absolute top-4 right-2 text-xl' />
                    </div>
                </div>
                {/* chats div section */}
                <div className='h-[80%] relative overflow-y-auto w-full'>

                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />
                    <Chats />

                </div>
            </div>
        </div>
    )
}

export default ChatsLayout