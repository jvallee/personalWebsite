import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import JasonPic from "../../common/Icons/JasonPic.jpg";
import Welcome from "../../common/Icons/Welcome.png";

type HomePageProps = {
  setQueryInfo?: Function;
};

/**
 * A component representing the "Home" page or the landing page. Very barebones right now
 *  contains a link to the all jobs page
 * @param client - the user that is currently logged in
 * @param setClient - how to set the user that is logged in
 * @param apiService - how we communicate with the backend
 *
 * @returns a react functional component
 *
 * @beta
 */
const HomePage: React.FC<HomePageProps> = (props) => {
  const textToDisplay = `This is the virtual Jason Vallee Experience,
   where you will hopefully get all the info you would get from the real Jason Vallee
  at lower a Volume.`;

  const textToDisplayMiddle = `I would not say I am a role Model.
  Of course many many people say that about me, but that's neither here nor there. 
  I love creating things (especially with friends). Be it a solution to a problem, an interesting story, or even dinner
  nothing makes me happier than that feeling you get\n when you just made something new`;
  return (
    <div className={"homePage__root"}>
      <img src={Welcome} className="welcome__image" alt={"Welcome"}></img>
      <div className={"toptext"}>{textToDisplay}</div>
      <div>
        <img
          className={"profile_mage_container"}
          src={JasonPic}
          alt={"JasonPic"}
        ></img>
      </div>
      <div className={"toptext"}>{textToDisplayMiddle}</div>
    </div>
  );
};

export default HomePage;
