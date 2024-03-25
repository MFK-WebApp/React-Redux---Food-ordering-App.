import { IMG_CDN_URL} from "./constant";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
  }) => {
    return (
      <div className=" bg-pink-50 flex m-4 flex-wrap w-52 border-2 p-2 h-80 overflow-hidden hover:bg-gray-300 ease-in-out duration-200 shadow-2xl rounded-sm">
      <img
        className="h-56 w-full object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="cardimg"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-md font-bold">{name}</h2>
          <h3 className="text-sm">{cuisines.join(", ")}</h3>
        </div>
        <div className="text-sm">
          {/* <h3>{avgRating}</h3> */}
        </div>
      </div>
    </div>
    );
  };

  export default RestrauntCard;