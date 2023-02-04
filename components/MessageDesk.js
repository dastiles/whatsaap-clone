const { AiOutlineSmile, AiOutlineFileGif, AiOutlineSend } = require("react-icons/ai");

export default function MessageDesk() {
    return (
        <div className="hidden lg:block h-[95vh] relative w-[63vw]">
            <div className=" w-full bg-white relative h-[95vh]">
                <div className="flex w-full items-center p-2 bg-header_col">
                    {/* avatar section */}
                    <div className='rounded-full h-[40px] w-[40px] overflow-hidden mr-5'>
                        <img src='assets/avatar.jpg' />
                    </div>
                    <div>
                        <h4 className='font-semibold'>Stiles</h4>
                        <span className='text-[0.75em] text-[#555]'>Online</span>
                    </div>
                </div>
                <div className='bg-[#e5ddd5] h-[80%] relative w-full overflow-y-auto py-1'>
                    <div className='relative w-full p-2 flex  justify-end'>
                        <p className='max-w-[65%] bg-[#dcf8c6] p-2 rounded-md text-sm text-right '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus odio id optio
                            dignissimos tenetur saepe ut aperiam placeat. Dolorum error inventore, eveniet magni excepturi
                            odio unde a iusto possimus! <br /> <span className=' block opacity-20 mt-1'>12:45</span></p>
                    </div>
                    <div className='relative w-full p-2 flex  justify-end'>
                        <p className='max-w-[65%] bg-[#dcf8c6] p-2 rounded-md text-sm text-right '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus odio id optio
                            dignissimos tenetur saepe ut aperiam placeat. Dolorum error inventore, eveniet magni excepturi
                            odio unde a iusto possimus! <br /> <span className=' block opacity-20 mt-1'>12:45</span></p>
                    </div>

                    <div className='relative w-full p-2 flex  justify-start'>
                        <p className='max-w-[65%] bg-[#fff] p-2 rounded-md text-sm text-right '>Lorem ipsum  <br /> <span className=' block opacity-20 mt-1'>12:45</span></p>
                    </div>
                    <div className='relative w-full p-2 flex  justify-start'>
                        <p className='max-w-[65%] bg-[#fff] p-2 rounded-md text-sm text-right '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus odio id optio
                            dignissimos tenetur saepe ut aperiam placeat. Dolorum error inventore, eveniet magni excepturi
                            odio unde a iusto possimus! <br /> <span className=' block opacity-20 mt-1'>12:45</span></p>
                    </div>
                </div>

                <div className='flex items-center relative p-2 bg-light_gy'>
                    <AiOutlineSmile className='text-2xl text-font-color mr-2' />
                    <AiOutlineFileGif className='text-2xl text-font-color mr-2' />
                    <input type='text' placeholder='Type a message' className='w-full outline-none border-none bg-white p-2 rounded-md' />
                    <AiOutlineSend className='text-2xl text-font-color ml-2' />
                </div>
            </div>
        </div>
    )
}