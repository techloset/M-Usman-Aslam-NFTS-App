
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../reduxe/Hooks';
import { fetchImages, selectImages } from '../../../reduxe/Imageslice';
import { useParams } from 'react-router-dom';

export default function Browse_categoury() {
  const dispatch = useAppDispatch();
  const response: any = useAppSelector(selectImages);
  useEffect(() => {
    dispatch(fetchImages() as any);
  }, [dispatch]);
  const collection_slug = useParams()

  return (
    <>
      <main className=' mt-28'>
        <div>
          <h1 className=" text-left ml-16 md:ml-28 w-600  text-3xl font-semibold text-white py-5">Browse Categories</h1>
        </div>
        {/* First Row For Image*/}
        <div className=" grid sm:grid-cols-1 md:grid-cols-4  px-14 gap-4  ml-12 md:ml-0">
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative rounded-tl-[20px] rounded-tr-[20px]">
                {response.collections && response.collections.slice(40, 41).map((items: any) => (
                <a href={`collection/${items.collection}`}>

                    <img className=" relative rounded-tl-2xl rounded-tr-2xl rounded-tr-[20px w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative rounded-tl-[20px] rounded-tr-[20px]">
                {response.collections && response.collections.slice(42, 43).map((items: any) => (
                <a href={`collection/${items.collection}`}>

                    <img className=" relative rounded-tl-2xl rounded-tr-2xl rounded-tr-[20px w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                {response.collections && response.collections.slice(42, 43).map((items: any) => (
                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                ))}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative rounded-tl-[20px] rounded-tr-[20px]">
                {response.collections && response.collections.slice(44, 45).map((items: any) => (
                <a href={`collection/${items.collection}`}>

                    <img className=" relative rounded-tl-2xl rounded-tr-2xl rounded-tr-[20px w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative rounded-tl-[20px] rounded-tr-[20px]">
                {response.collections && response.collections.slice(45, 46).map((items: any) => (
                <a href={`collection/${items.collection}`}>

                    <img className=" relative rounded-tl-2xl rounded-tr-2xl rounded-tr-[20px w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*2nd Row For Img  */}
        <div className=" grid sm:grid-cols-1 md:grid-cols-4  px-14  gap-4 ml-12 md:ml-0">
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative rounded-3xl">
                {response.collections && response.collections.slice(47, 48).map((items: any) => (
                <a href={`collection/${items.collection}`}>

                    <img className=" relative  rounded-tl-2xl rounded-tr-2xl  rounded-tr-[2xl w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">

                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative  rounded-tl-[20px] rounded-tr-[20px]">
                {response.collections && response.collections.slice(49, 50).map((items: any) => (
                <a href={`collection/${items.collection}`}>

                    <img className=" relative rounded-tl-2xl rounded-tr-2xl   rounded-tr-[20px w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative rounded-tl-[20px] rounded-tr-[20px]">
                {response.collections && response.collections.slice(51, 52).map((items: any) => (
                <a href={`collection/${items.collection}`}>
                <img className=" relative rounded-tl-2xl rounded-tr-2xl rounded-tr-[20px w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-16 mx-2">
            <div className="flex flex-col w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60">
              <div className="relative rounded-tl-[20px] rounded-tr-[20px]">
                {response.collections && response.collections.slice(53, 54).map((items: any) => (
                <a href={`collection/${items.collection}`}>
                <img className=" relative rounded-tl-2xl rounded-tr-2xl rounded-tr-[20px w-[148px] h-[142px] md:w-[150px] md:h-[142px] lg:w-60 lg:h-60 ] " src={items.image_url} />
                  </a>
                ))}
              </div>
              <div className="bg-neutral-700 rounded-bl-[20px] rounded-br-[20px]">
                <div className="bg-neutral-700 h-[76px] p-5 pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="bg-neutral-700 text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px] justify-center">Name </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}
