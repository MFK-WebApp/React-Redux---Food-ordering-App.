import "./App.css";
import cross from "./components/SVG/cross.svg";
import { useState } from "react";
const Footer = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };
  return (
    <div className="footer">
      <>
        {!isImageClicked && (
          <div className="flex upperFooter bg-purple-600 h-16 w-full justify-between items-center">
            <h1 className="text-white text-xl text-center ml-8">
              For better experience, Add Allow CORS: Access-Control-Allow-Origin
              on chrome web store
            </h1>
            <img
              className="mr-5 invert cursor-pointer"
              onClick={handleImageClick}
              src={cross}
              alt="cross"
            />
          </div>
        )}
      </>
      <div className="holeFooter flex flex-wrap lowerFooter bg-purple-400	 w-full h-96 ">
        <div>
          <img
            className="w-16 mt-12 ml-40 rounded-lg mb-5"
            src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
            alt="flogo"
          />
          <h1 className="ml-16 font-thin">
            {" "}
            NO &#169; Here : Feel Free to copy & explore
          </h1>
        </div>
        <div className="things m-10 flex flex-row md:*:mx-12 leading-[30px] ">
          <div className="company-list">
            <h1 className="text-white  text-xl ">Company</h1>
            <h2>About</h2>
            <h2>Careers</h2>
            <h2>Team</h2>
            <h2>Instamart</h2>
          </div>
          <div className="contactUs-list">
            <h1 className="text-white text-xl ">Contact us</h1>
            <h2>Help & Support</h2>
            <h2>Partner with us</h2>
            <h2>Ride with us</h2>
          </div>
          <div className="legal-list">
            <h1 className="text-white text-xl">Legal</h1>
            <h2>Terms & Conditions</h2>
            <h2>Cookie Policy</h2>
            <h2>Privacy Policy</h2>
          </div>
          <div className="deliver-list">
            <h1 className="text-white text-xl">We deliver to:</h1>
            <h2>Delhi</h2>
            <h2>Noida</h2>
            <h2>Gurgaon</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
