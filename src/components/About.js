import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-5 p-3 border border-black">
      <h1 className="font-bold">{title}</h1>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="bg-gray-300 m-1 p-1 border border-black"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gray-300 m-1 p-1 border border-black"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const About = () => {
  const [visibleSection, SetVisibleSection] = useState();
  return (
    <div>
      <h1 className="text-3xl p-2 m-3 font-bold">About Meee!!!!!</h1>
      <Section
        title={"Click to know my skills"}
        description={
          "Hi! I am Fahad khan, I live in Aligarh, Uttarpradesh (Native). I am a Frontend Engineer | Actively working on my Skills from past 2 years | JavaScript/React Developer | Seeking new Role |  Immediate Joiner 🚀"
        }
        isVisible={visibleSection == "uss!!!"}
        setIsVisible={() => SetVisibleSection("uss!!!")}
      />

      <Section
        title={"Click to know my qualification"}
        description={
          "I have done my graduation and post-graduation diploma from Aligarh Muslim University, I have done my graduation in linguistics and post-graduation diploma in Computer Science"
        }
        isVisible={visibleSection == "skills"}
        setIsVisible={() => SetVisibleSection("skills")}
      />

      <Section
        title={"Click Here to see my resume"}
        description={
          "Working on working something really special will update it soon here"
        }
        isVisible={visibleSection == "love"}
        setIsVisible={() => SetVisibleSection("love")}
      />
    </div>
  );
};

export default About;
