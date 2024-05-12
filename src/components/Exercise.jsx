import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Loader } from "../Loader/Loader";
function Exercise() {
  const [allExcercise, setAllExcercise] = useState([]);
  const fetchData = async () => {
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=10";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setAllExcercise(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    console.log("card Clicked");
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold my-5 tracking-wide">All Excercises</h1>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {allExcercise.length > 0 ? allExcercise.map((item) => (
            <div className="flex flex-col justify-center items-center border rounded-xl shadow-md cursor-pointer" key={item.name} onClick={handleClick}>
              <img src={item.gifUrl} alt="Animated GIF" />
              <div>
                <span className="bg-[#EBC57D] text-black rounded-xl px-2 mx-2">{item.bodyPart} </span>
                <span className="bg-[#7CEB7C] text-black rounded-xl px-2 mx-2">{item.target} </span>
                <span className="bg-[#7CDBEA] text-black rounded-xl px-2 mx-2">{item.equipment} </span>
              </div>
                <h1 className="font-bold tracking-wide py-1 text-lg">{item.name} </h1>
            </div>
          )) : <Loader/>}
        </div>
      </div>
    </>
  );
}

export default Exercise;
