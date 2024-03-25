const Shimmer = () => {
  return (
    <div className="restaurent-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="circle"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
