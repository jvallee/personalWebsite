import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

type HomePageProps = {
  setQueryInfo?: Function;
};

/**
 * A component representing the "Home" page or the landing page. Very barebones right now
 * has a login button if the user is not logged in (Requires no validation to login and
 *  doesn't allow specification of  said user. Also contains a link to the all jobs page
 * @param client - the user that is currently logged in
 * @param setClient - how to set the user that is logged in
 * @param apiService - how we communicate with the backend
 *
 * @returns a react functional component
 *
 * @beta
 */
const HomePage: React.FC<HomePageProps> = (props) => {
  // const { client, setClient, apiService } = props;
  // TODO: implement login logic && allow user to be created
  // const login = () => {
  //   apiService?.getClient(1).then((value) => {
  //     setClient(value.data);
  //   });
  // };
  // const loginButton = <Button onClick={login}>Click to login</Button>;
  return <div className={"homePage__root"}></div>;
};

export default HomePage;
