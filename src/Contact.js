const contact = () => {
  const name = "Mohd Fahad khan";
  const location = "Aligarh, Uttar Pradesh";
  const email = "fahadkhan95482@gmail.com";
  const linkedin =
    "https://www.linkedin.com/in/mohd-fahad-khan-538857190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  const handleClick = () => {
    window.open(linkedin, "_blank");
  };

  return (
    <div className="1font-Roboto flex-col m-28 ml-52">
      <h1 className="text-3xl font-Roboto font-bold -mx-2">{name}</h1>
      <h2 className="text-xl ">{location}</h2>
      <div>
        <button className="">{email}</button>
      </div>
      <button className="text-black font-thin" onClick={handleClick}>
        LinkedIn Profile - click here to view my LinkedIn Profile
      </button>
      <p className="font-medium">
        {
          "Specialising in Frontend development. Worked on developing responsive web applications of various scales & complexities. Expertised mostly in JavaScript. Skilled in HTML, CSS, SASS, Bootstrap, Tailwind CSS, JavaScript, React, Redux, GIT, Adobe Premiere Pro."
        }
      </p>
    </div>
  );
};
export default contact;
