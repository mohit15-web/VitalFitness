import Navbar from "./Navbar";
import { Loader } from "../Loader/Loader";
import useFetch from "../utils/costants";
function Exercise() {
  const  [data] = useFetch({
    method: "get",
     url : "https://exercisedb.p.rapidapi.com/exercises",
  });
  
  const handleClick = () => {
    console.log("card Clicked");
  }

  console.log(data);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold my-5 tracking-wide">All Excercises</h1>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {data.length > 0 ? data.map((item) => (
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
