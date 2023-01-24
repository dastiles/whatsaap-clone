import { Button } from "@material-tailwind/react";
import { AiOutlinePhone, AiOutlineSearch, AiOutlineSend } from "react-icons/ai";

export default function Messaging() {
    return (
        <section className="bg-white">
            <div className="max-w-md md:max-w-lg mx-auto h-screen relative clear-both bg-white">
                <div className="bg-whatsApp_blue shadow-md  flex items-center py-5 justify-center gap-5 text-white font-poppins sticky top-0 z-50">
                    <div> avatar</div>
                    <div>
                        <h2 className="">Stiles</h2>
                        <p className="text-xs font-thin">Last seen today</p>
                    </div>
                </div>
                <div className=" mt-10 max-w-md  flex flex-col gap-5 bg-white ">
                    <div className=" flex  justify-end  w-full  ">
                        <div className="w-56 bg-whatsapp_teal py-2 px-4 rounded-md">
                            <p className="font-thin font-poppins text-md">
                                morning how are u hjhjhj hjhjhjh hjhjhjh ghjkjghjg jghkgj hjghjkg jgjhkg hgjkghkj hjgjhkg </p>

                        </div>


                    </div>
                    <div className=" flex  justify-start  w-full  ">
                        <div className="w-56 bg-whatsApp_gray py-2 px-4 rounded-md">
                            <p className="font-thin font-poppins text-md">
                                morning how are u hjhjhj hjhjhjh hjhjhjh</p>

                        </div>


                    </div>
                    <div className=" flex  justify-start  w-full  ">
                        <div className="w-56 bg-white py-2 px-4 rounded-md">
                            <p className="font-thin font-poppins text-md">
                                morning how are u hjhjhj hjhjhjh hjhjhjh</p>

                        </div>


                    </div>
                    <div className=" flex  justify-start  w-full  ">
                        <div className="w-56 bg-white py-2 px-4 rounded-md">
                            <p className="font-thin font-poppins text-md">
                                morning how are u hjhjhj hjhjhjh hjhjhjh</p>

                        </div>


                    </div>
                    <div className=" flex  justify-start  w-full  ">
                        <div className="w-56 bg-white py-2 px-4 rounded-md">
                            <p className="font-thin font-poppins text-md">
                                morning how are u hjhjhj hjhjhjh hjhjhjh</p>

                        </div>


                    </div>
                    <div className=" flex  justify-start  w-full  ">
                        <div className="w-56 bg-white py-2 px-4 rounded-md">
                            <p className="font-thin font-poppins text-md">
                                morning how are u hjhjhj hjhjhjh hjhjhjh</p>

                        </div>


                    </div>
                </div>
                <div className=" sticky bottom-0 py-5 w-full bg-whatsApp_gray">
                    <div className="sticky bottom-0 right-0 z-50 flex items-center justify-center bg-white px-5 py-2 rounded-full gap-2">
                        <AiOutlineSearch />

                        <textarea

                            className="flex-grow resize-none  outline-none scrollbar-hide" />
                        <Button ripple={true} color='white'>
                            <AiOutlineSend color="gray" size={30} />
                        </Button>



                    </div></div>
            </div>
        </section>

    )
}