import OffersCarousel from "./OffersCarousel";
export default function OnlineOffers() {
    return (
      <div className="mx-[10%] py-8">
        <div>
          <h2 className="text-center font-hemautoFontPlay text-8xl font-extrabold text-hemautoGreen">
            EXCLUSIVE<br></br>
            <span className="text-hemautoWhite">ONLINE OFFERS</span>
          </h2>
        </div>
        <div className="flex justify-center">
          <OffersCarousel />
        </div>
      </div>
    );
}
