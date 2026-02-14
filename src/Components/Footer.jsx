
function Footer() {
  return (
    <div className="w-[1366px] mx-auto relative overflow-hidden" data-aos="fade-up">

      <img
        src="https://lays.ru/images/info-image/bg.jpg"
        alt=""
        className="w-[1366px] h-[769px] block"
      />

   
      <img
        src="https://lays.ru/images/stamp/00034.png"
        alt=""
        className="absolute top-[400px] left-[630px] w-[900px]"
      />

     
      <div className="w-[1366px] h-[136px] bg-yellow-300 flex flex-col justify-center px-8">

        <div className="flex items-center justify-between text-sm text-yellow-900">

          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Lay%27s_logo_2019.svg/960px-Lay%27s_logo_2019.svg.png"
              alt="Lay's"
              className="w-[90px]"
            />

            <p>
              Телефон горячей линии:{" "}
              <span className="font-bold">
                8 (800) 600 95 05
              </span>
              . Звонки по России бесплатно, понедельник–пятница
              <span className="font-bold">с 9:00 до 18:00</span> (время московское).
            </p>
          </div>

          <a href="#" className="font-bold mt-[60px]">
            Обратная связь
          </a>
        </div>

        
        <p className="text-xs text-yellow-900 font-semibold ml-[100px] mt-[-19px]">
          © 2026 ООО «Пепсико Холдингс». Все права защищены.
        </p>
      </div>
    </div>
  );
}

export default Footer;
