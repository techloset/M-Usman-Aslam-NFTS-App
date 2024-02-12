import globalimg from '../../assets/images/Globe.jpg'
import React, { useEffect } from 'react';
import placeholder from '../../assets/images/Image PlaceHolder.jpg'
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
const detail: React.FC = () => {

  return (
    <div>
      <Navbar />
      <main >
        <div>
          <img className="w-full h-[70vh] inset-0 object-cover" alt="" src={placeholder} />
        </div>
        <div className="w-full px-5 md:px-16 py-10  flex-col justify-between inline-flex">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="py-4">
              <div className="  text-white text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold font-Sans capitalize">The Orbitain</div>
              <div className="text-start  text-zinc-400 text-xl md:text-lg font-normal font-Sans capitalize leading-9">Minted on Feb 2024</div>
            </div>
            <div className="hidden sm:block justiy-center w-80 h-60 pt-4 pb-6 md:py-0 relative border-white-1 border-1">
              <img className="w-[60vw] h-[45vh] md:h-[60vh] rounded-[20px]" src={placeholder} alt="bluecollaredwhale" />
            </div>
          </div>
          <div className="py-6 sm:mt-16 md:mt-[-120px] top-0 flex-col justify-start items-start gap-2.5 flex">
            <div className=" text-start self-stretch text-zinc-500 text-xl font-bold font-Sans capitalize leading-9">Created By</div>
            <div className="rounded-2xl justify-start items-center gap-3 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <img className="w-6 h-6 rounded-full" alt="" src={placeholder} />
              </div>
              <div className="text-start text-white text-lg font-semibold font-Sans capitalize leading-loose">Orbitain</div>
            </div>
          </div>
          <div className="flex-wrap w-[80vw] lg:w-[50vw] xl:w-[60vw] py-5 flex-col justify-start items-start gap-2.5 flex">
            <div className=" text-start w-96 text-zinc-500 text-xl font-bold font-Sans capitalize leading-9">Description</div>
            <div className="text-start w-[80vw] md:[60vw] lg:w-[50vw] xl:w-[60vw] text-white text-xl font-normal font-Sans leading-9">
            </div>
            </div>
            <div className=" text-start md:max-w-[350px] w-[320px] mb-4 ml-0  text-white text-base font-normal leading-snug">The Orbtain <br />
            is a collection of 10,000u nique NFTs of the Ethereum block chain 
          </div>
          <div className="py-5 flex-col justify-start items-start gap-2.5 flex">
            <div className="text-zinc-500 text-xl font-bold font-Sans capitalize leading-9">Detail</div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="w-8 h-8 relative">
                <img src={globalimg} alt="" className=' rounded-full bg-neutral-700' />
              </div>
              <div className="grow shrink basis-0 text-white  font-normal font-Sans leading-9">View on Etherscan</div>
            </div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="w-8 h-8 relative ">
                <img src={globalimg} alt="" className=' rounded-full  bg-transparent' />
              </div>
              <div className="grow shrink basis-0 text-white  font-normal font-Sans leading-9">View Original</div>
            </div>
          </div>
          <div className="py-5 flex-col justify-start items-start gap-5 flex">
            <div className="text-zinc-500 text-2xl font-semibold font-Sans capitalize leading-loose">Tags</div>
            <div className="justify-start items-start inline-flex gap-5">
              <div className="flex-col md:flex-row text-center text-white text-base font-Sans uppercase gap-5">
                <button type="button" className="bg-zinc-700 rounded-full py-3 px-5 me-2">Animation</button>
                <button type="button" className="bg-zinc-700 rounded-full py-3 px-5 mx-2">illustration</button>
                <button type="button" className="bg-zinc-700 rounded-full py-3 px-5 ms-2 hidden">moon</button>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


export default detail