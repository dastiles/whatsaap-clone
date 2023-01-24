export default function Message() {
    return (
        <div className='flex items-center justify-between gap-3 border-b-2 border-gray-300 pb-5'>
            <div className='w-20 h-20 rounded-full shadow-lg text-center flex items-center justify-center'>
                <p className=' text-sm text-center '>avatar</p>
            </div>
            <div className=''>
                <p className='font-poppins text-sm'>we are the new WhatsApp web proffessional with next js</p>
            </div>
            <div>
                <p className="text-sm">16:16</p>
            </div>
        </div>
    )
}