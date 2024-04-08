export default function TopHeader() {
    return (
      <div className="bg-gradient-to-b from-hemautoBlack via-hemautoGray to-hemautoBlack shadow-inner shadow-hemautoGray px-8 py-6">
        <ul className="flex flex-row items-center justify-between text-hemautoWhite px-5">
          <li className="group relative dropdown font-hemautoFontRoadRage text-lg tracking-wide hover:text-hemautoGreen">
            <a className="text-3xl">FOLLOW @HEMautomotive</a>
            <div className="group-hover:flex flex-row dropdown-menu absolute justify-evenly hidden bg-hemautoMediumGray py-2 rounded-bl-lg rounded-tr-lg shadow-inner shadow-hemautoWhite">
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="Facebook Icon"
                href="https://www.facebook.com/hemautomotive"
              ></a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="Instagram Icon"
                href="https://www.instagram.com/hemautomotive"
              ></a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="X Icon"
                href="https://www.x.com/hemautomotive"
              ></a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="youtube Icon"
                href="https://www.youtube.com/hemautomotive"
              ></a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="Tiktok Icon"
                href="https://www.tiktok.com/hemautomotive"
              ></a>
            </div>
          </li>
          <li className="inline-flex items-center text-lg">
            <img src="/" alt="Clock Icon"></img>
            <h2 className="px-2 font-bold font-hemautoFontPlay text-balance text-xl">
              Monday to Friday 8:00am - 4:00pm
            </h2>
          </li>
          <li className="inline-flex items-center text-lg">
            <img src="/" alt="Phone Icon"></img>
            <address>
              <a href="tel:7852203723">
                <h2 className="px-2 font-bold font-hemautoFontPlay text-xl not-italic text-balance">
                  &#40;785&#41; 730-2900
                </h2>
              </a>
            </address>
          </li>
          <li className="inline-flex items-center">
            <img src="/" alt="Location Icon"></img>
            <address>
              <a href="address:315 SW 32nd Ter. Topeka, KS 66611">
                <h2 className="px-2 font-bold font-hemautoFontPlay text-xl not-italic text-balance">
                  315 SW 32nd Terrace,  Topeka, KS 66611
                </h2>
              </a>
            </address>
          </li>
          <li className="group relative dropdown font-hemautoFontRoadRage text-3xl tracking-wide hover:text-hemautoGreen">
            <a>LEAVE US A REVIEW</a>
            <div className="group-hover:flex flex-row dropdown-menu absolute justify-evenly hidden bg-hemautoMediumGray py-2 rounded-br-lg rounded-tl-lg shadow-inner shadow-hemautoWhite">
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="BBB"
                href="https://www.bbb.org"
              >
                <image src="/"></image>
              </a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="Google Icon"
                href="https://www.google.com"
              >
                <image src="/"></image>
              </a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="Yelp Icon"
                href="https://www.yelp.com"
              >
                <image src="/"></image>
              </a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="Bing Icon"
                href="https://www.bing.com"
              >
                <image src="/"></image>
              </a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="Yahoo Icon"
                href="https://www.yahoo.com"
              >
                <image src="/"></image>
              </a>
              <a
                className="text-hemautoGreen pl-2 hover:text-hemautoLightGreen"
                alt="CarFax Icon"
                href="https://www.carfax.com"
              >
                <image src="/"></image>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
}
