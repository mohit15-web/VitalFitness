import { Dumbbell } from "lucide-react";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import useFetch from "../utils/costants";

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
      
      const[filterExercise,setFilterExercise] = useState([])
      const[text , setText] = useState([])
    
      const  [data] = useFetch({
        method: "get",
         url : "https://exercisedb.p.rapidapi.com/exercises",
      });

      const handleSearch = () => {
        const filterArr = data.filter((item) => item.bodyPart.toLowerCase().includes(text.toLowerCase()))
        setFilterExercise(filterArr)
        setText("")
      }

      useEffect(() => {
      setFilterExercise(data)
      },[data])      

      
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="flex w-full items-center space-x-2 md:w-1/3">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Search Exercise"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="w-[78%] mt-10 m-auto flex justify-center items-center flex-wrap p-7 shadow-lg">
        {workouts.map((workout) => (
            <div key={workout} className="flex mx-5 my-5 rounded-lg flex-col justify-center items-center p-7 shadow-lg w-60 gap-3 cursor-pointer"
            onClick={() => setFilterExercise(data.filter((item) => item.bodyPart.toLowerCase() === workout.toLowerCase()))}
            >
          <span className="text-red-500"><Dumbbell /></span>
          <p className="font-bold text-lg">{workout}</p>
          
            </div>
        ))}
      </div>

      
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-wrap gap-8 mt-10">
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
