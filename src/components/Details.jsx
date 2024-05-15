import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/costants";

function Details() {
  const [productTitle, setProductTitle] = useState({});
  const { id } = useParams();
  const currId = id;
  const [data, loading, error] = useFetch({
    method: "get",
    url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${currId}`,
  });

  useEffect(() => {
    if (data) {
      setProductTitle(data.name);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
        <h1 className="text-4xl font-semibold tracking-widest py-4 ml-32">Exercise Detail</h1>
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-4 grid grid-cols-1 cursor-pointer">
          <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
            <img
              src={data.gifUrl}
              alt={productTitle}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading tracking-wider mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
            {data.name
                      .split(" ")
                      .map(
                        (word) =>
                          `${word.charAt(0).toUpperCase()}${word.slice(1)}`
                      )
                      .join(" ")}
            </h2>
            <p className="text-body text-sm leading-6 lg:text-base lg:leading-8">
              {data.instructions && data.instructions.join("\n")}
            </p>
            
          </div>
          <div className="shadow-sm ">
            
            <div>
              <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                <h3 className="font-semibold">Body Part:</h3> {data.bodyPart}<br />
                <h3 className="font-semibold">Equipment:</h3> {data.equipment}<br />
                <h3 className="font-semibold">Target Muscles:</h3> {data.target}<br />
                <h3 className="font-semibold">Secondary Muscles:</h3> {data.secondaryMuscles && data.secondaryMuscles.join(", ")}<br />
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Details;
