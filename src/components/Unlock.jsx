import React from "react"

const Unlock = () => {
  return (
    <section className="py-10 w-9/12 md:w-8/12 mx-auto">
      {/* First  */}
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold">
          <span className="text-yellow-300">Unlock </span>
          New Frontiers.
        </h1>
        <p className="text-md md:text-xl lg:text-2xl mt-3">
          Are you a stock trader looking for new opportunities to make money? We
          got you covered!
        </p>
      </div>
      {/* Second  */}
      <div className="w-6/12 lg:w-10/12 mx-auto mt-10">
        <div className="border-solid border-2 border-yellow-200 rounded-[30px] p-10 lg:flex gap-10 justify-evenly">
          <span>
            <p className="font-bold text-xl">Same</p>
            <p className="font-bold text-xl mb-5">Strategies</p>
          </span>

          <hr
            className="hidden lg:block"
            style={{ borderLeft: "1px solid yellow", height: "70px" }}
          />
          <span>
            <p className="font-bold text-xl">Same</p>
            <p className="font-bold text-xl mb-5">Indicators</p>
          </span>
          <hr
            className="hidden lg:block"
            style={{ borderLeft: "1px solid yellow", height: "70px" }}
          />
          <span>
            <p className="font-bold text-xl">Same</p>
            <p className="font-bold text-xl mb-5">Leverage</p>
          </span>

          <hr
            className="hidden lg:block"
            style={{ borderLeft: "1px solid yellow", height: "70px" }}
          />
          <span>
            <p className="font-bold text-xl">Same</p>
            <p className="font-bold text-xl mb-5">24x7</p>
          </span>
        </div>
      </div>

      {/* Third  */}
      <div className="mt-10">
        <img
          src="https://framerusercontent.com/images/EeYVyBjcH2JDVQmq3YRQ6Ute0M.png"
          alt=""
          className="w-full"
        />
      </div>
    </section>
  )
}

export default Unlock
