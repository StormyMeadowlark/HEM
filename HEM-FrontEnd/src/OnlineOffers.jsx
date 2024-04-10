import { Carousel } from "flowbite-react";

export default function OnlineOffers() {
  return (
    <div className="p-10 w-full h-[1080px]">
      <Carousel pauseOnHover>
        <img className="ease-in-out" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." ></img>
        <img className="ease-in-out" src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." ></img>
        <img className="ease-in-out" src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." ></img>
      </Carousel>
    </div>
  )
}
