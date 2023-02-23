import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  const getTutorials = async () => {
    try{
  const { data } = await axios(BASE_URL);
    setTutorials(data);
    console.log(data);
    }catch(err){
      console.log(err)
    }
  
  };

  //? componentDidMount
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
