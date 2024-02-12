// ImageComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, selectImages } from '../../reduxe/Imageslice';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';

const ImageComponent: React.FC = () => {

  const collection_slug = useParams()

  const dispatch = useDispatch();
  const nft: any = useSelector(selectImages);
  console.log(nft);



  useEffect(() => {
    dispatch(fetchImages() as any);
  }, [dispatch]);



  if (nft.length === 0) {
    return <div>
      <span className="loader"></span>
    </div>
  }
  return (
    <div>
      <Navbar />

      <div className=" py-4 text-white text-4xl sm:text-5xl font-semibold font-['Work Sans'] capitalize"></div>
      <div className=" py-3 text-white text-lg sm:text-xl font-normal font-['Work Sans']">Browse through more than 50k NFTs on the NFT Marketplace.</div>
      <div className=" w-full py-5">
        <div className=" border-1 rounded-2xl border border-neutral-700 py-3 px-5 flex flex-row justify-between items-center">
          <input placeholder="Search your favourite NFTs" className="w-full text-zinc-500 " />

        </div>
      </div>
      <main className=' mt-20  md:ml-36' >
        <div className="flex flex-col sm:flex-row md:flex-row md:ms-4 "><div className="m-2">
          <div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(81, 82).map((items: any) => (

                <a href="/detail">
                  <img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt={items.collections} />
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
        </div>
          {/*  */}
          <div className="m-2 hidden md:block">
            <div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
              <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
                {nft.collections && nft.collections.slice(83, 84).map((items: any) => (

                  <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
          {/*  */}
          <div className="m-2 hidden md:block"><div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(85, 86).map((items: any) => (

                <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
        </div>
        <div>
        </div>
      </main>

      {/* New Row */}
      <main className='mx-20  mt-96 md:ml-36' >
        <div className="flex flex-col sm:flex-row md:flex-row md:ms-4 "><div className="m-2">
          <div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(87, 88).map((items: any) => (

                <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
        </div>
          {/*  */}
          <div className="m-2 hidden md:block"><div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(90, 91).map((items: any) => (

                <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
          {/*  */}
          <div className="m-2 hidden md:block"><div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(92, 93).map((items: any) => (

                <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
        </div>
        <div>
        </div>
      </main>
      {/* new row */}
      <main className='mx-20  my-96 md:ml-36' >
        <div className="flex flex-col sm:flex-row md:flex-row md:ms-4 "><div className="m-2">
          <div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(94, 95).map((items: any) => (

                <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
        </div>
          {/*  */}
          <div className="m-2 hidden md:block"><div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(96, 97).map((items: any) => (

                <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
          {/*  */}
          <div className="m-2 hidden md:block"><div className="w-[330px] h-[150px] bg-neutral-500 rounded-[20px] flex-col justify-center items-center mb-3">
            <div className="self-stretch h-[296px] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
              {nft.collections && nft.collections.slice(70, 71).map((items: any) => (

                <a href="/detail"><img className="w-[330px] h-[296px] rounded-tl-[20px] rounded-tr-[20px]" src={items.image_url} alt="image" />
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
        </div>
        <div>
        </div>
      </main>
      <Footer />
    </div>
    // 

  );
};
export default ImageComponent;


