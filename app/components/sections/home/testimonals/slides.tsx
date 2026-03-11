'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';


import testimonal01 from "@/app/assets/testimonal-person-01.png";
import iconNovaTech from "@/app/assets/icons/icon-novaTech.png";
import { ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { NavigationOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';



const slidesInfo = [
    {
        imgSrc:testimonal01,
        imgAlt:"Person",
        title:"The integrations and analytics give us a clear edge over competitors.",
        description:"Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
        name:"Anna Roberts",
        job:"HR Manager at BrightPath Solutions",
        enterprise:"NovaTech"
    },
    {
        imgSrc:testimonal01,
        imgAlt:"Person",
        title:"The integrations and analytics give us a clear edge over competitors.",
        description:"Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
        name:"Anna Roberts",
        job:"HR Manager at BrightPath Solutions",
        enterprise:"NovaTech"
    },
    {
        imgSrc:testimonal01,
        imgAlt:"Person",
        title:"The integrations and analytics give us a clear edge over competitors.",
        description:"Having all the tools in one place makes our hiring process easier, more organized, and helps our team feel confident in every data-driven decision.",
        name:"Anna Roberts",
        job:"HR Manager at BrightPath Solutions",
        enterprise:"NovaTech"
    }
]


export function Slides(){
     
    const[isBeginning, setIsBeginning] = useState(true);
    const[isEnd, setIsEnd] = useState(false);

    const previousBtn = useRef(null);
    const nextBtn = useRef(null);
    return(
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className='w-full max-w-270 mx-auto mt-5 tablet:mt-10 laptop:mt-14'
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    const swiperParams = swiper.params.navigation as NavigationOptions;
                    swiperParams.prevEl = previousBtn.current;
                    swiperParams.nextEl = nextBtn.current;
                }}
                onSlideChange={(e) => {
                    setIsBeginning(e.isBeginning);
                    setIsEnd(e.isEnd)
                }}
                >

                {
                    slidesInfo.map(({imgSrc,imgAlt,description,name,job,enterprise, title}, index) =>(
                    <SwiperSlide className='w-full h-auto! flex-col gap-4 cursor-pointer bg-white flex! items-center justify-between laptop:h-105.75! laptop:flex-row laptop:gap-0 ' key={index}>
                    <div className="w-full laptop:max-w-92 h-110.5 laptop:h-full flex items-center justify-center bg-blue-300 rounded-3xl overflow-hidden">
                        <Image
                            src={imgSrc}
                            alt={imgAlt}
                            title={imgAlt}
                            className='w-full relative top-10.5 h-[128%] laptop:h-full object-scale-down laptop:object-cover laptop:static'
                        />
                    </div>
                    <div className='w-full laptop:max-w-170 laptop:h-full py-8 px-10 bg-blue-300 rounded-3xl'>
                        <div className='inline-flex items-center gap-2 px-4 py-2.5 rounded-4xl border border-grey-400'>
                                <Image
                                src={iconNovaTech}
                                alt='Icon NovaTech'
                                title='Icon NovaTech'
                                />
                                <span className='text-sm opacity-95'>{enterprise}</span>
                        </div>
                        
                        <div className='space-y-6 mt-10 mb-14 laptop:mb-20'>
                                <h3 className='font-lato text-2xl laptop:text-3xl text-black-500'>{title}</h3>
                                <p className='text-sm tablet:text-base opacity-95'>{description}</p>
                        </div>

                        <div className='border-l border-blue-500 pl-6'>
                                <strong className='block text-sm tablet:text-base font-semibold text-black-500 mb-1'>{name}</strong>
                                <span className='opacity-90 text-sm tablet:text-base'>{job}</span>
                        </div>
                    </div>
                    </SwiperSlide>
                    ))
                }

                <div className='flex items-center gap-2.5 w-full max-w-27.5 ml-auto mt-12.5'>
                     <button ref={previousBtn} aria-label='previous-slide' className={`size-12.5 ${isBeginning ? 'opacity-50 pointer-events-none' : ''} rotate-180 flex items-center justify-center rounded-full border transition-all ease-linear border-gray-400 [&:hover,&:focus]:bg-lime [&:hover,&:focus]:border-transparent`}>
                           <ArrowRight color="#222222" size={18} />
                     </button>
                     <button ref={nextBtn} aria-label='next-slide' className={`size-12.5 ${isEnd ? 'opacity-50 pointer-events-none' : ''} flex items-center justify-center rounded-full border transition-all ease-linear border-gray-400 [&:hover,&:focus]:bg-lime [&:hover,&:focus]:border-transparent`}>
                         <ArrowRight color="#222222" size={18} />
                     </button>
                </div>
            </Swiper>
    )
}