import { IMG_CDN_URL } from "./components/constant";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="bg-pink-50 flex m-4 flex-wrap w-52 border-2 p-2 overflow-auto hover:bg-gray-300 ease-in-out duration-200 shadow-2xl rounded-sm">
      <img
        className="h-56 w-full object-cover"
        src={IMG_CDN_URL + imageId}
        alt="cardimg"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-md font-bold mb-2 overflow-visible">{name}</h2>
          <h3 className="text-sm overflow-visible">{description}</h3>
        </div>
        <div className="text-sm">
          <h3 className="font-bold">Rupees: {price / 100}</h3>
        </div>
      </div>
    </div>
  );
};
export default FoodItem;
