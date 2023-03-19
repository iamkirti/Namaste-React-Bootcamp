import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

const Avenger = () => {
  const { login } = useParams();
  const [AvengerInfo, setAvengerInfo] = useState([]);
  useEffect(() => {
    fetchAvengerData();
  }, []);

  async function fetchAvengerData() {
    const data = await fetch(`https://api.github.com/users/${login}`);
    const json = await data.json();
    console.log("json", json);
    setAvengerInfo(json);
  }
  return <CardComponent details={AvengerInfo} />;
};
export default Avenger;
