export default function BottomHeader() {
    return (
      <div className="bg-gradient-to-b from-hemautoGray via-hemautoBlack to-hemautoGray shadow-inner shadow-hemautoGreen text-hemautoWhite py-4">
        <nav className="mx-auto flex items-center justify-between text-lg font-hemautoFontTiltWarp">
          <div className="flex flex-1 items-center">
            <div className="flex flex-1 justify-start mb-20">
              <div className="flex flex-1 justify-around">
                <a href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    SERVICES
                  </span>
                </a>
                <a href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    FAQ
                  </span>
                </a>
                <a href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    ABOUT
                  </span>
                </a>
                <a href="#">
                  <span className="hover:text-hemautoLightGreen text-3xl">
                    BLOG
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-1 basis-1/3 justify-center">
              <div className="flex flex-col ">
                <a href="#">
                  <img
                    type="xml/svg"
                    src="./src/assets/Images/Logo/HEM-Auto-Logo-Lime-Green.svg"
                  ></img>
                </a>
                <span className="font-hemautoFontRoadRage text-balance text-5xl text-center">
                  BREAK DOWNS WONT BREAK YOU DOWN
                </span>
              </div>
            </div>
            <div className="flex flex-1 justify-end mb-20">
              <div className="flex flex-1 justify-around">
                <a href="#" className="text-3xl">
                  Account
                </a>
              </div>
              <div className="flex flex-1 justify-around">
                <a href="#" className="text-3xl">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}
