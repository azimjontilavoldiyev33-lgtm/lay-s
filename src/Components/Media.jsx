

function Media() {

  return (
    <div className='w-[1366px] h-[769px] overflow-hidden m-auto'>
   <div data-aos="fade-up">
      <video 
        className="absolute  w-[1366px] h-[769px] object-cover "
        autoPlay
        muted
        loop
        playsInline
        
      >
        <source src="https://lays.ru/video/PotatoFieldDesk.webm" type="video/webm"  />
        
      </video>
   </div>

     
      
      
      <div className='relative w-[900px] text-white '  data-aos="zoom-out">

         <img src="https://lays.ru/images/stamp/00015.png" alt="" />
 
      </div>
    </div>
  )
}


export default Media