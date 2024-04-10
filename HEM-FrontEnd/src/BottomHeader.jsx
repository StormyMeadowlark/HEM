export default function BottomHeader() {
    return (
      <div className="bg-gradient-to-b from-hemautoGray via-hemautoBlack to-hemautoGray shadow-inner shadow-hemautoGreen text-hemautoWhite py-4">
        <nav className="mx-auto flex items-center justify-between text-lg font-hemautoFontTiltWarp">
          <div className="flex flex-1 items-center">
            <div className="flex flex-1 justify-start mb-20">
              <div className="flex flex-1 justify-around">
                <button href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    SERVICES
                  </span>
                </button>
                <button href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    FAQ
                  </span>
                </button>
                <button href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    ABOUT
                  </span>
                </button>
                <button href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    BLOG
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-1 basis-1/3 justify-center">
              <div className="flex flex-col ">
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
            <div className="flex flex-1 justify-end mb-20">
              <div className="flex flex-1 justify-around">
                <button href="#" className="text-3xl">
                  Account
                </button>
              </div>
              <div className="flex flex-1 justify-around">
                <button href="#" className="text-3xl">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}
