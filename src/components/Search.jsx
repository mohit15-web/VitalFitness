import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";

function Search() {
    const workouts = [
        'BACK',
        'CARDIO',
        'CHEST',
        'LOWER ARMS',
        'LOWER LEGS',
        'NECK',
        'SHOULDERS',
        'UPPER ARMS',
        'UPPER LEGS',
        'WAIST'
      ];
      
      const[searchExercise,setSearchExercise] = useState([])
      const[filterExercise,setFilterExercise] = useState([])
      const fetchData = async () => {
        const url = "https://exercisedb.p.rapidapi.com/exercises?";
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
          setSearchExercise(result);
          setFilterExercise(result);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="flex w-full items-center space-x-2 md:w-1/3">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Search Exercise"
        ></input>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Submit
        </button>
      </div>
      <div className="w-[78%] mt-10 m-auto flex justify-center items-center flex-wrap p-7 shadow-lg">
        {workouts.map((workout) => (
            <div key={workout} className="flex mx-5 my-5 rounded-lg flex-col justify-center items-center p-7 shadow-lg w-60 gap-3 cursor-pointer"
            onClick={() => setFilterExercise(searchExercise.filter((item) => item.bodyPart.toLowerCase() === workout.toLowerCase()))}
            >
          <span className="text-red-500"><Dumbbell /></span>
          <p className="font-bold text-lg">{workout}</p>
          
            </div>
        ))}
      </div>

      
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold my-5 tracking-wide">All Excercises</h1>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {filterExercise.length > 0 ? filterExercise.map((item) => (
            <div className="flex flex-col justify-center items-center border rounded-xl shadow-md cursor-pointer" key={item.name}>
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
    </div>
  );
}

export default Search;
