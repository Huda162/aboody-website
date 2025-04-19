"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade, EffectFlip, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
export default function Products() {
    const products = [
        { name: 'بـهـار دجـاج خـاص', image: '/assets/images/jar1.png', bg: '/assets/images/Ellipse 4.png', corner: '/assets/images/crispy.png' },
        { name: 'بـهـار مسحب', image: '/assets/images/jar2.png', bg: '/assets/images/Ellipse 2.png', corner: '/assets/images/chicken.png' },
        { name: 'بـهـار بطاطس كرنشي', image: '/assets/images/jar3.png', bg: '/assets/images/Ellipse 1.png', corner: '/assets/images/fries.png' },
        { name: 'بـهـار شاورما دجاج', image: '/assets/images/jar4.png', bg: '/assets/images/Ellipse 3.png', corner: '/assets/images/image-5.png' },
    ]
    const [showImage, setShowImage] = useState(true);
    const [prevProduct, setPrevProduct] = useState(0);
    const [animating, setAnimating] = useState(false);


    const handleProductChange = (index: number) => {
        if (index === activeProduct) return;

        setPrevProduct(activeProduct);
        setActiveProduct(index);
        setAnimating(true);
        setShowImage(false)

        setTimeout(() => {
            setAnimating(false);
        }, 600);
        setTimeout(() => {
            setAnimating(false);
            setShowImage(true)
        }, 300);
    };
    const [activeProduct, setActiveProduct] = useState<number>(0)
    return (
        <section className='h-screen relative'>
            <button className="swiper-button-prev custom-prev-arrow"></button>
            <button className="swiper-button-next custom-next-arrow"></button>
            <div className="h-full w-full absolute overflow-hidden">
                <img
                    src={products[prevProduct].bg}
                    className="absolute h-full w-full object-cover"
                    alt="previous"
                />
                <img
                    src={products[activeProduct].bg}
                    className={`absolute h-full w-full object-cover ${animating ? 'animate-reveal' : 'clip-full'}`}
                    alt="active"
                />
            </div>
            <Image src="/assets/images/image-6.png" alt="spice chicken" width={150} height={150} className={`absolute bottom-10 left-0 transition-opacity duration-300  ${showImage ? 'opacity-100' : 'opacity-0'}`} />
            <Image src={products[activeProduct].corner} alt="spice chicken" width={180} height={180} className={`
    absolute top-20 right-0 transition-opacity duration-300 ${showImage ? 'opacity-100' : 'opacity-0'}`} />
            <Swiper
                className='h-[70%] mt-4'
                spaceBetween={30}
                effect='creative'
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: [0, '-100%', 0],
                    },
                    next: {
                        translate: [0, '100%', 0],
                    },
                }}
                slidesPerView={1}
                onSlideChange={(swiper) => handleProductChange(swiper.activeIndex)}
                pagination={{
                    clickable: true
                }}
                navigation={{
                    nextEl: '.custom-next-arrow',
                    prevEl: '.custom-prev-arrow'
                }}
                fadeEffect={{ crossFade: true }}
                modules={[Pagination, Navigation, EffectCreative]}
            >
                <SwiperSlide>
                    <article className='product-card1 flex flex-col items-center justify-center gap-5'>
                        <Image src='/assets/images/jar1.png' width={400} height={200} alt='product' />
                        {/* <h3 className='product-name'>بهار دجاج خاص</h3> */}
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Image src="/assets/images/chicken.png" alt="spice chicken" width={150} height={150} className="absolute top-20 right-0" /> */}
                    <article className='product-card2 flex flex-col items-center justify-center gap-5'>
                        <Image src='/assets/images/jar2.png' width={400} height={200} alt='product' />
                        {/* <h3 className='product-name'>بهار مسحب</h3> */}
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Image src="/assets/images/fries.png" alt="spice chicken" width={150} height={150} className="absolute top-20 right-0" /> */}
                    <article className='product-card3 flex flex-col items-center justify-center gap-5'>
                        <Image src='/assets/images/jar3.png' width={400} height={200} alt='product' />
                        {/* <h3 className='product-name'>بهار بطاطس كرشي</h3> */}
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Image src="/assets/images/image-5.png" alt="spice chicken" width={150} height={150} className="absolute top-20 right-0" /> */}
                    <article className='product-card4 flex flex-col items-center justify-center gap-5'>
                        <Image src='/assets/images/jar4.png' width={400} height={200} alt='product' />
                        {/* <h3 className='product-name'>بهار شاورما دجاج</h3> */}
                    </article>
                </SwiperSlide>
            </Swiper>
            <h3 className={`product-name text-center w-full absolute py-10 duration-300 ${showImage ? 'opacity-100' : 'opacity-0'}`}>{products[activeProduct].name}</h3>

        </section>
    )
}