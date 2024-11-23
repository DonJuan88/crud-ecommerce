import { Carousel } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingButton from "../modals/FloatingButton";


function Home() {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
   };
  return (
    <div>
      <div className="flex mx-60  w-520px py-5 px-5 h-360px max-w-lg sm:max-w-xl lg:max-w-4xl">
        <Carousel className="rounded-xl  transition={{ duration: 2 }}">
          <img
            src="https://www.lifeproductions.in/img/event-promotion.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i0.wp.com/articles.connectnigeria.com/wp-content/uploads/2022/01/Promotional-Marketing-Strategies-to-Boost-Sales.jpg?fit=769%2C445&ssl=1"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://letsbuildmomentum.com/cms-data/gallery/hipwig/event-promo-li.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      <div className="mt-4 bg-amber-500">
        <div className="w-3/4 m-auto mt-2">
          <Slider {...settings}>
            {data.map((d) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                <div className="bg-white h-[250px] text-black rounded-xl mt-3">
                  <div className="h-56 flex justify-center items-center">
                    <img src={d.imageUrl} alt="" className="h-40" />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4 text-white">
                  <p>{d.title}</p>
                  <button className=""></button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex space-x-4 items-left">
          <FloatingButton />
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Promo Minggu Ini",
    link: "",
    imageUrl:
      "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2021/07/22/little-bathijpg-20210722053450.jpg",
  },
  {
    title: "Promo Pakaian Anak",
    link: "",
    imageUrl:
      "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2021/07/22/boho-panna-baju-anak-brand-lokal-20210722053450.jpg",
  },
  {
    title: "Jangan Sampai Kelewatan",
    link: "",
    imageUrl:
      "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2021/07/22/mahika-kidsjpg-20210722053450.jpg",
  },
  {
    title: "Super Promo Akhir Bulan",
    link: "",
    imageUrl:
      "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2021/07/22/booyah-kidsjpg-20210722053450.jpg",
  },
];


export default Home