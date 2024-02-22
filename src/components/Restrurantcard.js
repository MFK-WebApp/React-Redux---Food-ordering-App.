import { IMG_CDN_URL} from "./constant";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="cardimg"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
      </div>
    );
  };

  export default RestrauntCard;