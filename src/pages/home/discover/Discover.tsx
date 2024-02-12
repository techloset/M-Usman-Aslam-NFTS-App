// import magicMushroom from '../../../assets/images/MagicMushroom.png'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../reduxe/Hooks';
import { fetchImages, selectImages } from '../../../reduxe/Imageslice';
import astrogist from '../../../assets/images/AstrolginImage.jpg'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Discover: React.FC = () => {
  const dispatch = useAppDispatch();
  const response: any = useAppSelector(selectImages);
  useEffect(() => {
    dispatch(fetchImages() as any);
  }, [dispatch]);
  const collection_slug = useParams()

  return (
    <div>
      <main className=' mb-96 mt-10' >
        <div className='mb-9 w-px-763  font-semibold  font-sans text-3xl   ml-28 text-left'>
          Discover More Nfts
        </div>
        <div className=' text-left ml-28 mb-9 w-px-763  font-thin  font-sans text-xl'>
          Explore new trending NFTs
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row md:ml-36 ">
          <div className="m-2">
            <div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
              <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
                {response.collections && response.collections.slice(59, 60).map((items: any) => (

                  <a href={`collection/${items.collection}`}>
                    <img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
                  </a>
                ))}
              </div>
              <div className="self-stretch h-[173px] px-[30px] bg-neutral-700 pt-5 pb-[25px] rounded-bl-[20px] rounded-br-[20px] flex-col justify-start items-start gap-[25px] flex">
                <div className=" bg-neutral-700 self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
                  <div className=" bg-neutral-700 self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Name</div>
                  <div className="  bg-neutral-700 self-stretch justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                    </div>
                    <div className="  bg-neutral-700 grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">Name</div>
                  </div>
                </div>
                <div className="  bg-neutral-700 self-stretch justify-start items-start inline-flex">
                  <div className="  bg-neutral-700 grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="  bg-neutral-700 self-stretch text-zinc-700 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Price</div>
                    <div className="  bg-neutral-700 self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">1.63 ETH</div>
                  </div>
                  <div className=" bg-neutral-700 grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex"><div className=" bg-neutral-700 self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Highest Bid</div>
                    <div className=" bg-neutral-700 self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="m-2 hidden md:block">
            <div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
              <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
                {response.collections && response.collections.slice(51, 52).map((items: any) => (

                  <a href={`collection/${items.collection}`}>
                    <img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
                  </a>
                ))}
              </div>
              <div className="self-stretch h-[173px] px-[30px] bg-neutral-700 pt-5 pb-[25px] rounded-bl-[20px] rounded-br-[20px] flex-col justify-start items-start gap-[25px] flex">
                <div className="bg-neutral-700 self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex"><div className="bg-neutral-700 self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Name</div>
                  <div className="bg-neutral-700 self-stretch justify-start items-start gap-3 inline-flex">
                    <div className="bg-neutral-700 justify-start items-start gap-2.5 flex">
                      <div className="bg-neutral-700 w-6 h-6 justify-center items-center flex">
                      </div>
                    </div>
                    {/* <div className="bg-neutral-700  grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">Name</div> */}
                  </div>
                </div>
                <div className="bg-neutral-700 self-stretch justify-start items-start inline-flex"><div className=" bg-neutral-700 grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                  <div className="bg-neutral-700 self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Price</div><div className=" bg-neutral-700 self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">1.63 ETH</div>
                </div>
                  <div className="bg-neutral-700 grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
                    <div className="bg-neutral-700 self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Highest Bid</div>
                    <div className="bg-neutral-700 self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*   */}
          <div className="m-2 hidden lg:block">
            <div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
              <div className=" self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
                {response.collections && response.collections.slice(65, 66).map((items: any) => (
                  <a href={`collection/${items.collection}`}>

                    <img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
                  </a>
                ))}
              </div>
              <div className=" self-stretch h-[173px] px-[30px] bg-neutral-700 pt-5 pb-[25px] rounded-bl-[20px] rounded-br-[20px] flex-col justify-start items-start gap-[25px] flex">
                <div className="bg-neutral-700 self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
                  <div className=" bg-neutral-700 self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Name</div>
                  <div className="bg-neutral-700 self-stretch justify-start items-start gap-3 inline-flex">
                    <div className="bg-neutral-700 justify-start items-start gap-2.5 flex"><div className=" bg-neutral-700 w-6 h-6 justify-center items-center flex">
                    </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-neutral-700 self-stretch justify-start items-start inline-flex">
                  <div className=" bg-neutral-700 grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className=" bg-neutral-700 self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Price</div>
                    <div className=" bg-neutral-700 self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">1.63 ETH</div>
                  </div>
                  <div className=" bg-neutral-700 grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
                    <div className=" bg-neutral-700 self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Highest Bid</div>
                    <div className=" bg-neutral-700 self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer className='py-2 '>
        <div className=" mt- md:w-full sm:w-[280px] lg:w-[950px] p-[50px] flex justify-center flex-col sm:flex-row mx-auto rounded-3xl bg-neutral-700">
          <div className=" bg-neutral-700">
            <img src={astrogist} className="h-[310px] w-[425px] flex justify-center items-center rounded-3xl   " />
          </div>
          <div className="bg-neutral-700 ms-10  flex flex-col flex-wrap  ">
            <div className="bg-neutral-700 w-full text-white text-2xl font-bold capitalize leading-[45.60px]">Join our weekly <br /> digest</div>
            <div className="bg-neutral-700 w-full text-white font-normal font-['Work Sans'] capitalize leading-9 mt-3">Get exclusive promotions &amp; updates straight to your inbox.</div>
            <div className="bg-neutral-700 justify-center mt-3 items-end gap-3 lg:gap-0 flex flex-wrap lg:flex-nowrap w-full">
              <input className="bg-white p-4 ps-6 rounded-[20px] w-full justify-center items-center text-base font-normal font-['Work Sans'] leading-snug" placeholder="Enter your email here" />
              <div className=" bg-purple-500 py-4 px-[34px] w-full relative lg:left-[-32px] lg:w-2/5 rounded-[20px] justify-center items-center  text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">Subscribe</div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}


export default Discover;
