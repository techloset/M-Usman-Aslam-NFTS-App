import imageNavbar from '../../assets/images/Storefront.png'
export default function Footer() {
    return (
        <footer className=''>

            <div className='grid grid-cols-1 md:grid-cols-3 bg-neutral-700 mt-24'>
                <div className='bg-neutral-700 py-10'>
                    <div className="bg-neutral-700 h-8 relative ">
                        <div className=" ">
                            <ul className='flex  pl-10 bg-neutral-700'>
                                <li  >
                                    <img src={imageNavbar} className='bg-neutral-700 ' />
                                </li>
                                <li className=' mt-1 font-bold flex text-xl bg-neutral-700'  >
                                    NFT Markrtplace
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className=" bg-neutral-700 flex-col justify-start items-start gap-5 flex">
                        <div className="bg-neutral-700 self-stretch w-[238px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug pl-10 md:pl-0  mt-5">NFT marketplace UI created with Anima for Figma.</div>
                        <div className=" bg-neutral-700 flex-col justify-start items-start gap-[15px] flex">
                            <div className="bg-neutral-700 self-stretch w-[238px] h-[18px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug pl-10 md:pl-0 mt-3">Join our community</div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className=' bg-neutral-700 py-10'>
                    <div className="bg-neutral-700 flex-col justify-start items-start gap-[15px] mt-12 md:mt-14 lg:mt-0 inline-flex">
                        <div className="bg-neutral-700 text-white text-[22px] font-bold font-['Work Sans'] capitalize leading-9">Explore</div>
                        <div className="bg-neutral-700 flex-col justify-start items-start gap-5 flex">
                            <div className="bg-neutral-700 text-stone-300 font-normal font-['Work Sans'] leading-snug text-sm">Marketplace</div>
                            <div className="bg-neutral-700 text-stone-300 font-normal font-['Work Sans'] leading-snug">Rankings</div>
                            <div className="bg-neutral-700 text-stone-300 font-normal font-['Work Sans'] leading-snug">Connect a wallet</div>
                        </div>
                    </div>
                </div>
                <div className=' bg-neutral-700 py-10'>
                    <div className="bg-neutral-700 w-70 flex-col justify-start items-start gap-[15px] mt-12 md:mt-14 lg:mt-0 inline-flex">
                        <div className="bg-neutral-700 text-white text-[22px] font-bold font-['Work Sans'] capitalize leading-9">Join our weekly digest</div>
                        <div className="bg-neutral-700 w-60 flex-col justify-start items-start gap-5 flex">
                            <div className="bg-neutral-700 w-60 text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">Get exclusive promotions &amp; updates straight to your inbox.</div>
                            <div className="bg-neutral-700 justify-center mt-3 items-end gap-3 lg:gap-0 flex flex-wrap lg:flex-nowrap  w-[250px] sm:w-[320px]">
                                <input className=" bg-white p-3 ps-6 rounded-[20px] w-full text-zinc-800 justify-center items-center text-base font-normal font-['Work Sans'] leading-snug" placeholder="Enter your email here" />
                                <div className=" bg-purple-500 py-3 px-[34px] w-full relative lg:left-[-32px] lg:w-2/5 rounded-[20px] justify-center items-center  text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-neutral-700 border border-zinc-500 md:px-7 "></div>
            <div className="bg-neutral-700 items-start flex min-w-full  ">
                <div className="bg-neutral-700 text-stone-300 text-start font-normal font-['Work Sans'] leading-[17px]">
                    <p className='bg-neutral-700 pl-4'>&copy; NFT Market.</p>
                </div>
            </div>


        </footer>
    )
}



