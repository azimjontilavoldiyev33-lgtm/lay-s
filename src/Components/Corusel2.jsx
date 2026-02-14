import { useState, useEffect } from "react";


const products = [
  {
    id: 1,
    image: "https://lays.ru/uploads/images/product-showcase/categories/388eef53207e3987b8e465bd663666f0.png",
    title: "LAY'S®",
    subtitle: "MAXX",
    buttonText: "Подробнее",
    bgColor: "bg-[#1da853]"
  },
  {
    id: 2,
    image: "https://lays.ru/uploads/images/product-showcase/categories/1e0d011dbb7b66756eb817929734aaf8.png",
    title: "LAY'S®",
    subtitle: "STAX",
    buttonText: "Подробнее",
    bgColor: "bg-[#7c4199]"
  },
  {
    id: 3,
    image: "https://lays.ru/uploads/images/product-showcase/categories/0008e07c60bc6a6f2ee13a454bd01b75.png",
    title: "LAY'S®",
    subtitle: "Из печи",
    buttonText: "Подробнее",
    bgColor: "bg-[#ff4d6d]"
  },
  {
    id: 4,
    image: "https://lays.ru/uploads/images/product-showcase/categories/dc2fa1809d6100eef811df2c38d18206.png",
    title: "LAY'S®",
    
    buttonText: "Подробнее",
    bgColor: "bg-[#c92a2a]"
  },
  {
    id: 5,
    image: "https://lays.ru/uploads/images/product-showcase/categories/f061034277e1525531b964dd80f64ff7.png",
    title: "LAY'S®",
    subtitle: "Рифленые",
    buttonText: "Подробнее",
    bgColor: "bg-[#2d8659]"
  },
  {
    id: 6,
    image: "https://lays.ru/uploads/images/product-showcase/categories/39ba9069504e414fb0f0fc8b330883c6.png",
    title: "LAY'S®",
    subtitle: "STIX",
    buttonText: "Подробнее",
    bgColor: "bg-[#7c4199]"
  }
];


function Corusel2() {
     const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const next = () => {
    setCurrentIndex((prev) => 
      prev >= products.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? products.length - itemsPerView : prev - 1
    );
  };


  return (
    <div className='  w-[1366px] h-[769px]  bg-[#1da853] m-auto'>
            <div className=' w-[1366px] h-[769px] absolute  overflow-hidden '>
                <div className='w-[px] h-[px] rounded-full bg-[#0a9548] flex items-center justify-center '>
                    <div className='w-[2000px] h-[2000px] rounded-r-full bg-[#08A253] inset-y-0 top-0    absolute flex items-center justify-center  '>
                        <div className='w-[1800px] h-[1800px] rounded-full bg-[#0a9548] inset-y-0 inset-x-0 left-0 top-0 absolute flex items-center justify-center '>
                            <div className='w-[1600px] h-[1600px] rounded-full bg-[#08A253] inset-y-0   left-0 top-0 absolute flex items-center justify-center '>
                                <div className='w-[1400px] h-[1400px] rounded-full bg-[#0a9548] inset-y-0   left-0 top-0 absolute flex items-center justify-center  '>
                                    <div className='w-[1200px] h-[1200px] rounded-full bg-[#08A253]  inset-x-0  left-0 top-0 absolute flex items-center justify-center  '> 
                                        <div className='w-[1000px] h-[1000px] rounded-full bg-[#0a9548] inset-y-0   left-0 bottom-0 absolute flex items-center justify-center '>   
                                            <div className='w-[900px] h-[900px] rounded-full bg-[#08A253]  inset-x-0  left-0 top-0 absolute flex items-center justify-center  '>   
                                                <div className='w-[700px] h-[700px] rounded-full bg-[#0a9548] inset-y-15 left-0  absolute flex items-center justify-center ml-[120px]'>
                                                    <div className='w-[500px] h-[500px] rounded-full bg-[#08A253] inset-y-0  flex items-center justify-center ml-[50px] '>
                                                        <div className='w-[400px] h-[400px] rounded-full bg-[#0a9548] flex items-center inset-y-0  justify-center ml-[-150px]'>
                                                            <div className='w-[300px] h-[300px] rounded-full bg-[#08A253] ml-[-100px] '>
                                                                <img src="https://lays.ru/images/main/products_bowl_crisps@2x.png" alt="" />
                                                                    <div className="top-[250px] absolute   left-[200px]">
                                                                         <img src="https://lays.ru/images/main/onion@2x.png" alt="" className="w-[450px]" />
                                                                    </div>  
                                                                    <div className="left-[1000px] top-[90px] relative">
                                                                        <img src="https://lays.ru/images/main/products_crisps_2@2x.png" alt="" className="w-[250px]" />
                                                                        <img src="https://lays.ru/images/main/products_crisps_1@2x.png" alt="" className="relative left-[-90px] top-[-300px] w-[150px]" />
                                                                    </div>
                                                                    <div >
                                                                        
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <>
                <div className="w-full max-w-7xl  mx-auto px-4 py-8">
      <div 
        className="relative overflow-hidden mt-[70px] ml-[150px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <div 
          className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView + (itemsPerView > 1 ? 2 : 0))}%)` 
          }}
        >
          {products.map((product) => (
            <div data-aos="fade-up"
              key={product.id}
              className={`flex-shrink-0 w-[295px] h-[522px]  shadow-2xl overflow-hidden flex flex-col`}
            >
            
              <div className="h-[348px] bg-[#2d8659]/80 backdrop-blur-sm flex items-center justify-center px-4 pt-4">
                <img 
                  src={product.image}
                  alt={product.subtitle}
                  className="w-[340px] h-[347px] mt-[-16px] object-cover scale-x-115 drop-shadow-2xl"
                />
              </div>

           
              <div className={`h-[175px] ${product.bgColor} flex flex-col items-center justify-between p-4`}>
                
                <div className="text-white text-center">
                  <p className="text-xs font-bold mb-1">{product.title}</p>
                  <h2 className="text-3xl font-bold">{product.subtitle}</h2>
                </div>

                
                <button className="w-full bg-[#E52529] hover:bg-[#c91f23] text-white font-bold py-3 px-6 rounded-full text-base transition-all transform hover:scale-105 shadow-lg">
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>

  
    </div>
            <div>
                  <button
          onClick={prev}
          className="absolute ml-[440px] top-[1350px] sm:left-4 top-1/2 -translate-y-1/2     sm:p-3  z-9999"
        >
          <span className="text-[100px]  text-[#f5b900] z-9999">←</span>
        </button>

        <button
          onClick={next}
          className="absolute top-[1350px] mr-[1250px] sm:right-4 top-1/2 -translate-y-1/2  hover:text-gray-500 rounded-full p-2 sm:p-3  transition-all z-10"

        >

         <span className="text-[100px] text-[#f5b900]">→</span>
        </button>
            </div>
            </>
        </div>
  )
}

export default Corusel2