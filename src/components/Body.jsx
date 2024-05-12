/* eslint-disable react/no-unescaped-entities */
import Navbar from "./Navbar"; // Import the Navbar component

const Body = () => {
  return (
    <div className="relative w-full">
      <Navbar /> {/* Render the Navbar component */}
      <div className="bg-photo relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            {/* Your SVG background */}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-wide text-white sm:text-6xl">
              FASTER, STRONGER FIGHT TO THE END
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              "Exercise is a celebration of what your body can do. Not a punishment for what you ate." - Women's Health UK
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get All Exercises
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
