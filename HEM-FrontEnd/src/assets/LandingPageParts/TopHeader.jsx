export default function TopHeader() {
  return (
    <div className="bg-gradient-to-b from-hemautoBlack via-hemautoGray to-hemautoBlack shadow-inner shadow-hemautoGray px-[10%] py-6">
      <ul className="flex flex-row items-center justify-around text-hemautoWhite px-5">
        <li className="group relative dropdown font-hemautoFontRoadRage text-lg tracking-wide hover:text-hemautoGreen">
          <a className="text-3xl">FOLLOW @HEMautomotive</a>
          <div className="group-hover:flex flex-row dropdown-menu absolute justify-evenly hidden silverbg py-2 px-2 rounded-full shadow-inner shadow-hemautoBlack w-[300px]">
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="Facebook Icon"
              href="https://www.facebook.com/hemautomotive"
            >
              <img src="src/assets/Images/Icons/FacebookIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="Instagram Icon"
              href="https://www.instagram.com/hemautomotive"
            >
              <img src="src/assets/Images/Icons/InstagramIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="X Icon"
              href="https://www.x.com/hemautomotive"
            >
              <img src="src/assets/Images/Icons/TwitterIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="youtube Icon"
              href="https://www.youtube.com/@hemautomotive"
            >
              <img src="src/assets/Images/Icons/YouTubeIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="Tiktok Icon"
              href="https://www.tiktok.com/@hemautomotive"
            >
              <img src="src/assets/Images/Icons/TikTokIcon.png"></img>
            </a>
          </div>
        </li>
        <li className="inline-flex items-center text-lg">
          <img
            className="max-h-10"
            src="src/assets/Images/Icons/HoursIcon.png"
            alt="Clock Icon"
          ></img>
          <h2 className="px-2 font-bold font-hemautoFontPlay text-balance text-xl">
            Monday to Friday 8:00am - 4:00pm
          </h2>
        </li>
        <li className="inline-flex items-center text-lg">
          <img
            className="max-h-10"
            src="src/assets/Images/Icons/PhoneIcon.png"
            alt="Phone Icon"
          ></img>
          <address>
            <a href="tel:7852203723">
              <h2 className="px-2 font-bold font-hemautoFontPlay text-xl not-italic text-balance">
                &#40;785&#41; 730-2900
              </h2>
            </a>
          </address>
        </li>
        <li className="inline-flex items-center">
          <img
            className="max-h-10"
            src="src/assets/Images/Icons/LocationIcon.png"
            alt="Location Icon"
          ></img>
          <address>
            <a href="address:315 SW 32nd Ter. Topeka, KS 66611">
              <h2 className="px-2 font-bold font-hemautoFontPlay text-xl not-italic text-balance">
                315 SW 32nd Terrace, Topeka, KS 66611
              </h2>
            </a>
          </address>
        </li>
        <li className="group relative dropdown font-hemautoFontRoadRage text-3xl hover:text-hemautoGreen tracking-wide">
          <a>LEAVE US A REVIEW</a>
          <div className="group-hover:flex flex-1 dropdown-menu absolute justify-evenly hidden silverbg py-2 px-2 rounded-full shadow-inner shadow-hemautoBlack w-[300px]">
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="BBB"
              href="https://www.bbb.org/us/ks/topeka/profile/auto-repair/hem-auto-0714-1000057650"
            >
              <img src="src/assets/Images/Icons/BBBIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="Google Icon"
              href="https://www.google.com/search?q=HEM+Automotive"
            >
              <img src="src/assets/Images/Icons/GoogleIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="Yelp Icon"
              href="https://www.yelp.com/biz/hem-automotive-topeka"
            >
              <img src="src/assets/Images/Icons/YelpIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="Bing Icon"
              href="https://www.bing.com/search?q=hem+automotive"
            >
              <img src="src/assets/Images/Icons/BingIcon.png"></img>
            </a>
            <a
              className="text-hemautoGreen m-2 hover:text-hemautoLightGreen"
              alt="CarFax Icon"
              href="https://www.carfax.com/Reviews-HEM-Automotive-Topeka-KS_AUBYLTNNVJ"
            >
              <img src="src/assets/Images/Icons/CarFaxIcon.png"></img>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}