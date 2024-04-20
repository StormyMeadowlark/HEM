import OffersCarousel from "./OffersCarousel";
export default function OnlineOffers() {
    return (
      <div className="bg-mainmiddleBackground bg-cover bg-top h-[1700px]">
        <div>
          <h2 className="text-center font-hemautoFontPlay text-8xl font-semibold pt-[10rem]  text-hemautoWhite">
            EXCLUSIVE<br></br>ONLINE OFFERS
          </h2>
        </div>
        <div className="flex justify-center">
          <OffersCarousel />
        </div>
      </div>
    );
}
