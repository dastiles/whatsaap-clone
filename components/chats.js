export default function Chats() {

    return (
        <div className='flex items-center border-op_black border-b  p-2 hover:bg-op_black'>
            <div className=' w-[50px] rounded-full overflow-hidden relative mr-2'>
                <img src='assets/avatar.jpg' className='w-full h-full object-cover' />
            </div>
            <div className='w-full'>
                <div className='flex justify-between'>
                    <h4 className='font-semibold text-md text-chat_head'>Charles Madhuku</h4>
                    <p className='text-[0.75em] text-[#aaa]'>20:36</p>
                </div>
                <div className=''>
                    <p className='text-ellipsis message_p'>even get it get raindrops u make jik born cydle register to vote!</p>
                </div>
            </div>
        </div>
    )
}