import TopHeader from "./TopHeader.jsx";

export default function Footer() {
  return (
    <div className="text-hemautoLightGreen ">
      <div>Footer top</div>
      <>Services listed again as links</>
      <></>
      <div className="bg-gradient-to-t from-hemautoGray via-hemautoBlack text-hemautoWhite py-4 px-[10%]">
        <nav className="flex justify-evenly text-lg font-hemautoFontTiltWarp">
          <div className="flex flex-1 justify-evenly">
            <button href="#">
              <span className="hover:text-hemautoGreen text-3xl p-4">
                SERVICES
              </span>
            </button>
            <button href="#">
              <span className="hover:text-hemautoGreen text-3xl p-4">FAQ</span>
            </button>
            <button href="#">
              <span className="hover:text-hemautoGreen text-3xl p-4">
                CONTACT
              </span>
            </button>
          </div>
          <div className="max-h-[300px]">
            <div className="flex flex-col">
              <button href="#">
                <img
                  type="xml/svg"
                  src="./src/assets/Images/Logo/HEM-Auto-Logo-Lime-Green.svg"
                ></img>
              </button>
              <span className="font-hemautoFontRoadRage text-balance text-5xl text-center">
                BREAK DOWNS WONT BREAK YOU DOWN
              </span>
            </div>
          </div>
          <div className="flex flex-1 justify-evenly">
            <button href="#">
              <span className="hover:text-hemautoGreen text-3xl p-4">
                FINANCING
              </span>
            </button>
            <button href="#">
              <span className="hover:text-hemautoGreen text-3xl p-4">BLOG</span>
            </button>
            <div className="flex flex-col justify-center p-4">
              <button href="#">
                <span className="hover:text-hemautoGreen text-3xl">
                  ACCOUNT
                </span>
              </button>
              <button href="#">
                <span className="hover:text-hemautoGreen text-xl text-hemautoLightGray">
                  REGISTER
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <TopHeader />
      </div>
    </div>
  );
}
