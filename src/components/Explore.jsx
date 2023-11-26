import React from "react"

const Explore = () => {
  return (
    <section className="py-10 w-9/12 md:w-8/12 mx-auto">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold">
          Explore the Markets like it is your
          <span className="text-yellow-300"> Playground.</span>
        </h1>
        <p className="text-md md:text-xl lg:text-2xl mt-3">
          Search for your favorite coins and stay ahead of the market
        </p>
      </div>
      <div className="mt-10">
        <img
          src="https://framerusercontent.com/images/ZUq27rij30rWKD5jwP4U3m3q0c.png?scale-down-to=1024"
          alt=""
          className="w-full"
        />
      </div>
      <button
        type="button"
        className="bg-gradient-to-r from-yellow-300 to-green-400 w-64 h-12 rounded-lg text-black font-bold text-xl mt-10 mb-32"
      >
        EXPLORE MARKETS
      </button>
    </section>
  )
}

export default Explore
