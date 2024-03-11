import "./App.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="flex upperFooter  bg-purple-600 h-16 w-full justify-center items-center">
        <h1 className="text-white text-xl">
          !For better experience, Add Allow CORS: Access-Control-Allow-Origin on
          chorome web store
        </h1>
      </div>
      <div className="holeFooter flex flex-wrap lowerFooter bg-purple-400	 w-full h-96">
        <div>
          <img
            className="w-16 mt-12 ml-40 rounded-lg mb-5"
            src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
            alt="flogo"
          />
          <h1 className="ml-8">&#169; 2024 fahadkhan95482@gmail.com Pvt. Ltd</h1>
        </div>
        <div className="things m-10 flex flex-row md:*:mx-12 leading-[30px]">
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
