
import { useState ,useEffect } from "react";


const images = [
  "https://lays.ru/uploads/images/sliders/a080476a03728f8183f0cda44defb991.png",
  "https://lays.ru/uploads/images/sliders/521a8adb4c489869390bd51a716188b9.png",
  "https://lays.ru/uploads/images/sliders/5a9563200a3370ba594c1a6a9ca6c0af.png",
  "https://lays.ru/uploads/images/sliders/8cf5f3351a386dcbe746aee88c4f0e03.png",
  "https://lays.ru/uploads/images/sliders/27ac4468e5a130f377a6e746229bd583.png",
  "https://lays.ru/uploads/images/sliders/93a85d63a7ab87024eabda55c54ee811.png",
  "https://lays.ru/uploads/images/sliders/2019e4127cb94eaf01d53483c25aab34.png",

];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000); // 3 soniyada o'zgaradi

      return () => clearInterval(interval);
    }
  }, [isPaused, setIndex.length]);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);



  return (
    <div className="w-[1366px] mx-auto relative overflow-hidden">
            <div 
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}  // Sichqoncha ustiga kelganda to'xtaydi
        onMouseLeave={() => setIsPaused(false)} // Sichqoncha ketganda davom etadi
      ></div>
      {/* Image */}
      <img
        src={images[index]}
        className="w-full h-[550px] select-none"
        alt=""
      />

      {/* Left button */}
      <button
        onClick={prev}
        className="absolute left-[70px] top-[450px] -translate-y-1/2 bg-[#E52529] text-white  w-10 h-10 rounded-full"
      >
        <p className="font-bold text-[48px] top-[-22px] left-[10px]  absolute">‹</p>
      </button>

      {/* Right button */}
      <button
        onClick={next}
        className="absolute right-[1200px] top-[450px] -translate-y-1/2 bg-[#E52529] text-white w-10 h-10 rounded-full"
      >
        
        <p className="font-bold text-[48px] top-[-22px] left-[12px]  absolute">›</p>
              </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition `}
            />
          ))}
        </div>

<div className='flex gap-10 justify-center items-center    m-auto  mt-[-120px] relative z-99999999 top-[50px]'>
        {/* 1-ustun */} 
        <div className=''>
          <div className='arrow arrow-0'></div>
          <div className='arrow arrow-1'></div>
          <div className='arrow arrow-2'></div>
        </div>
        
        {/* 2-ustun */}
        <div>
          <div className='arrow arrow-3'></div>
          <div className='arrow arrow-4'></div>
          <div className='arrow arrow-5'></div>
        </div>
        
        {/* 3-ustun */}
        <div>
          <div className='arrow arrow-6'></div>
          <div className='arrow arrow-7'></div>
          <div className='arrow arrow-8'></div>
        </div>
      </div>



    </div>
  );
}
