import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './Components/Navbar';
import Corusel from './Components/Corusel';
import Corusel2 from './Components/Corusel2';
import Media from './Components/Media';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

       useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
      offset: 100,     
    });
  }, []);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }



  return (
    <div className=" h-[100%] bg-[#f5b900]">
      <div className='w-1366px h-full m-auto'>
              <motion.div
        className="h-[32px] w-[32px] z-9999999 rounded-4xl fixed top-0 left-0 pointer-events-none bg-cover bg-center bg-no-repeat bg-[url('https://lays.ru/svg/cursor.svg')]"
        variants={variants}
        animate={cursorVariant}
      />

       <Navbar/>
       <Corusel/>
       <Corusel2/>
       <Media/>
       <Main/>
       <Footer/>
      </div>
    </div>

   
  );
}
export default App;