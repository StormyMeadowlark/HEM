import CarFaxImg from "./carfaxbadge";

export default function ShoutOuts() {
    return (
      <div className="bg-hemautoBlack">
        <p className="text-center font-hemautoFontRoadRage text-9xl pb-8">
          We Are Proudly:
        </p>
        <div className="flex flex-1 justify-center bg-hemautoGreen">
          <div>
            <CarFaxImg />
          </div>
          <div>
            <p className="bg-hemautoWhite">A+ BBB</p>
          </div>
        </div>
      </div>
    );
}