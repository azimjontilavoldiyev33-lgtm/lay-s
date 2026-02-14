import React from 'react'

function Navbar() {
  return (
    <div className='w-[1366px] h-[90px] bg-[#FCE500] m-auto flex items-center justify-between pl-[50px] pr-[50px] text-black'>
        <div>
            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lay%27s_logo_2019.svg/960px-Lay%27s_logo_2019.svg.png" alt="" className='w-[70px] h-[66px]'/></a>
        </div>
        <div>
            <a href=""><button className='w-[115px] h-[34px] hover:bg-red-700 rounded-4xl hover:text-white font-bold'>O LAY'S®</button></a>
            <a href=""><button className='w-[127px] h-[34px] hover:bg-red-700 rounded-4xl hover:text-white font-bold'>Продукты</button></a>
            <a href=""><button className='w-[134px] h-[34px] hover:bg-red-700 rounded-4xl hover:text-white font-bold'>Где купить</button></a>
            <a href=""><button className='w-[180px] h-[34px] hover:bg-red-700 rounded-4xl hover:text-white font-bold'>Обратная связь</button></a>
        </div>
    </div>
  )
}

export default Navbar