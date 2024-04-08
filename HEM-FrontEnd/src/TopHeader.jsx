export default function TopHeader() {
    return (
      <div>
        <ul>
          <li>
            <a>FOLLOW @HEMautomotive</a>
            <div className="Dropdown">
              <a
                alt="Facebook Icon"
                href="https://www.facebook.com/hemautomotive">
              </a>
              <a
                alt="Instagram Icon"
                href="https://www.instagram.com/hemautomotive">
              </a>
              <a alt="X Icon"
                 href="https://www.x.com/hemautomotive">
              </a>
              <a
                alt="youtube Icon"
                href="https://www.youtube.com/hemautomotive">
                </a>
              <a
                alt="Tiktok Icon"
                href="https://www.tiktok.com/hemautomotive">
              </a>
            </div>
          </li>
          <li>
            <img src="/" alt="Clock Icon"></img>
            <h2>Monday to Friday 8:00am - 4:00pm</h2>
          </li>
          <li>
            <img src="/" alt="Phone Icon"></img>
            <address>
              <a href="tel:7852203723">
                <h2>&#40;785&#41; 730-2900</h2>
              </a>
            </address>
          </li>
          <li>
            <img src="/" alt="Location Icon"></img>
            <address>
              <a href="address:315 SW 32nd Ter. Topeka, KS 66611">
                <h2>315 SW 32nd Ter., Topeka, KS 66611</h2>
              </a>
            </address>
          </li>
          <li>
            <a>LEAVE US A REVIEW</a>
            <div className="Dropdown">
              <a alt="BBB" href="https://www.bbb.org">
                <image src="/"></image>
              </a>
              <a alt="Google Icon" href="https://www.google.com">
                <image src="/"></image>
              </a>
              <a alt="Yelp Icon" href="https://www.yelp.com">
                <image src="/"></image>
              </a>
              <a alt="Bing Icon" href="https://www.bing.com">
                <image src="/"></image>
              </a>
              <a alt="Yahoo Icon" href="https://www.yahoo.com">
                <image src="/"></image>
              </a>
              <a alt="CarFax Icon" href="https://www.carfax.com">
                <image src="/"></image>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
}
