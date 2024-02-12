import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../reduxe/Hooks';
import { fetchImages, selectImages } from '../../../reduxe/Imageslice';
import { useParams } from 'react-router-dom';

const OurCollection: React.FC = () => {
  const dispatch = useAppDispatch();
  const nft: any = useAppSelector(selectImages);
  useEffect(() => {
    dispatch(fetchImages() as any);
  }, [dispatch]);

  const collection_slug = useParams()

  return (
    <>
      <header className=' mt-36 overflow-auto '>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='ml-1 md:ml-20 '>
            <div className="w-[310px] items-center justify-center flex md:w-[330px] lg:w-[450px] mb-5 text-white text-[30px] lg:text-[67px] font-semibold leading-[45.60px] lg:leading-[73.70px]">Discover Digital Art &amp; Collect NFTs</div>
            <div className="md:max-w-[330px] w-[320px] mb-4 ml-0 md:ml-16 text-white text-base font-normal leading-snug">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</div>
          </div>
          {/*  */}
          <div className="flex flex-col">
            <div className=" bg-neutral-700 rounded-[20px] mr-20 md:mr-36 mb-5 md:mb-0  ml-14">
              {nft.collections && nft.collections.slice(1, 2).map((items: any) => (
                <a href={`collection/${items.collection}`}>
                  <img className=" w-[300px] sm:w-[330px] h-[221px] lg:w-[480px] lg:h-[390px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="funky-beings-1" />
                </a>
              ))}
              <div className="bg-neutral-700 m-5">
                <div className="bg-neutral-700 max-w-[290px] mb-2.5 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">Funky B</div>
                <div className="bg-neutral-700 flex">
                  {nft.collections && nft.collections.slice(1, 2).map((items: any) => (
                    <img className="bg-neutral-700 w-6 h-6 me-3 rounded-[120px]" src={items.image_url} alt="image" />
                  ))}
                  <div className="bg-neutral-700 max-w-[254px] text-white text-base font-normal font-['Work Sans'] leading-snug">Animakid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='grid grid-cols-1 '>
          <button type="button" className="w-40 md:w-48 ml-28 md:ml-56  text-white bg-[#A259FF] focus:ring-4 focus:outline-none font-medium  text-sm px-4 py-2 text-center  rounded-2xl">Get Started</button>
        </div>
        <div className='grid grid-cols-1 px-4 lg:pl-16'>
          <ul className='  inline-flex  mt-6 text-white pl-16 lg:pl-36'>
            <li className='font-semibold pl-6'>240k+</li>
            <li className='font-semibold pl-10'>100k+ </li>
            <li className='font-semibold pl-12'>240k+</li>
          </ul>
        </div>
        <div className=' grid grid-cols-1 px-4 lg:pl-16'>
          <ul className='  inline-flex  text-white pl-14 lg:pl-32 '>
            <li className='font-thin pl-6'>Total Scale</li>
            <li className='font-thin pl-8'>Auction</li>
            <li className='font-thin pl-9'>Artists</li>
          </ul>
        </div>
      </header>
      <main className='mt-24 '>
        {/* img */}
        <section>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col lg:w-[1046px] md:w-[768px] sm:w-[375px]">
              <div className="text-white py-5 text-[28px] font-semibold capitalize leading-[39.20px] ms-5 md:ms-10 text-left">Trending Collection</div>
              <div className="text-white text-base font-normal font-['Work Sans'] leading-snug ms-5 md:ms-10 text-left">Checkout our weekly updated trending collection.</div>
            </div>
            <div className="flex flex-wrap items-center justify-center "><div>
              <div className="m-2"><div className="mx-2 py-14 flex flex-wrap justify-center  ">
                <div className="max-w-[330px] bg-zinc-800 rounded-[20px] flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className=" h-[445px] flex-col justify-start items-start gap-[15px] flex">
                    <div className="max-w-[375px]">
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
              {/*iamge  */}
              <div>
                <div className="m-2">
                  <div className="mx-2 py-14 flex flex-wrap justify-center  ">
                    <div className="max-w-[330px] bg-zinc-800 rounded-[20px] flex-col justify-start items-start gap-[15px] inline-flex">
                      <div className=" h-[445px] flex-col justify-start items-start gap-[15px] flex">
                        <div className="max-w-[375px]">
                          <a href="/collection/pin-up-canvas-1">
                            {nft.collections && nft.collections.slice(35, 36).map((items: any) => (
                              <a href={`collection/${items.collection}`}>
                                <img className=" h-[300px] mx-2 my-5 rounded-[20px]" src={items.image_url} alt="" />
                              </a>
                            ))}
                          </a>
                          <div className="items-center justify-between gap-[15px] inline-flex">
                            {nft.collections && nft.collections.slice(35, 36).map((items: any) => (
                              <a href={`collection/${items.collection}`}>

                                <img className=" basis-0 h-[100px] max-w-[100px] rounded-[20px]" src={items.image_url} alt="img" />
                              </a>
                            ))}
                            {nft.collections && nft.collections.slice(35, 36).map((items: any) => (

                              <img className=" basis-0 h-[100px] max-w-[100px] rounded-[20px]" src={items.image_url} alt="img" />
                            ))}
                            <div className=" basis-0 h-[100px] px-[14px] py-8 bg-purple-500 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                              <div className=" bg-purple-500 text-center text-white text-[22px] font-bold font-['Work Sans'] capitalize leading-9">1025+</div>
                            </div>
                          </div>
                        </div>
                        <div className=" h-[65px] flex-col justify-start items-start gap-2.5 flex">
                          {nft.collections && nft.collections.slice(35, 36).map((items: any) => (
                            <div className=" text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">{items.name} </div>
                          ))}                          <div className=" rounded-[20px] justify-start items-start gap-3 inline-flex">
                            <div className="justify-start items-start gap-2.5 flex"><div className="w-6 h-6 justify-center items-center flex">
                            </div>
                            </div>
                            <div className=" basis-0 text-white text-base font-normal font-['Work Sans']"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* image */}
              <div>
                <div className="m-2">
                  <div className="mx-2 py-14 flex flex-wrap justify-center  ">
                    <div className="max-w-[330px] bg-zinc-800 rounded-[20px] flex-col justify-start items-start gap-[15px] inline-flex">
                      <div className=" h-[445px] flex-col justify-start items-start gap-[15px] flex">
                        <div className="max-w-[375px]">
                          {nft.collections && nft.collections.slice(27, 28).map((items: any) => (
                            <a href={`collection/${items.collection}`}>

                              <img className=" h-[300px] mx-2 my-5 rounded-[20px]" src={items.image_url} alt="" />

                            </a>
                          ))}
                          <div className="items-center justify-between gap-[15px] inline-flex">
                            {nft.collections && nft.collections.slice(27, 28).map((items: any) => (
                              <a href={`collection/${items.collection}`}>

                                <img className=" basis-0 h-[100px] max-w-[100px] rounded-[20px]" src={items.image_url} alt="" />
                              </a>
                            ))}
                            {nft.collections && nft.collections.slice(27, 28).map((items: any) => (
                              <a href={`collection/${items.collection}`}>
                                <img className=" basis-0 h-[100px] max-w-[100px] rounded-[20px]" src={items.image_url} alt="" />
                              </a>
                            ))}
                            <div className=" basis-0 h-[100px] px-[14px] py-8 bg-purple-500 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                              <div className="bg-purple-500 text-center text-white text-[22px] font-bold font-['Work Sans'] capitalize leading-9">1025+</div>
                            </div>
                          </div>
                        </div>
                        <div className=" h-[65px] flex-col justify-start items-start gap-2.5 flex">
                          {nft.collections && nft.collections.slice(27, 28).map((items: any) => (

                            <div className=" text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">{items.name} </div>
                          ))}
                          <div className=" rounded-[20px] justify-start items-start gap-3 inline-flex">
                            <div className="justify-start items-start gap-2.5 flex"><div className="w-6 h-6 justify-center items-center flex">
                            </div>
                            </div>
                            <div className=" basis-0 text-white text-base font-normal font-['Work Sans']"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}
export default OurCollection;