import React from "react"
import Hero1 from "../images/hero1.png"
import Hero2 from "../images/hero2.png"
import Hero3 from "../images/hero3.png"

const Hero = () => {
  return (
    <>
      {/* First Section  */}
      <section className="py-10 w-8/12 md:w-7/12 mx-auto">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
            It’s time to trade, the{" "}
            <span className="text-yellow-300">future.</span>
          </h1>
          <p className="text-2xl mt-3">
            Trade Bitcoin, Ethereum Futures With 125x Leverage And Earn Rewards.
          </p>
        </div>
        <div className="mt-12 mb-12">
          <img
            src="https://framerusercontent.com/images/0my50nFrGdmVZAUYY1g4vRi0VY.png"
            alt=""
          />
        </div>
      </section>

      {/* Second Section  */}
      <section className="w-8/12 lg:w-10/12 mx-auto">
        <div className="border-solid border-2 border-yellow-200 rounded-[30px] p-10 lg:flex gap-10 justify-evenly">
          <span>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-green-400">
              00%
            </h1>
            <p className="mb-5">Conversion Fee</p>
          </span>
          <hr
            className="hidden lg:block"
            style={{ borderLeft: "1px solid yellow", height: "70px" }}
          />
          <span>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-green-400">
              500 Mn+
            </h1>
            <p className="mb-5">Lifetime Volume traded</p>
          </span>
          <hr
            className="hidden lg:block"
            style={{ borderLeft: "1px solid yellow", height: "70px" }}
          />
          <span>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-green-400">
              250+
            </h1>
            <p className="mb-5">Total Tradable Pairs</p>
          </span>
          <hr
            className="hidden lg:block"
            style={{ borderLeft: "1px solid yellow", height: "70px" }}
          />
          <span>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-green-400">
              15000+
            </h1>
            <p className="mb-5">Traders</p>
          </span>
        </div>
      </section>

      {/* Third Section  */}
      <section className="py-10 w-8/12 md:w-7/12 mx-auto">
        <div className="py-40 px-5 sm:w-96 border-yellow-400 border-2 mx-auto text-center rounded-[40px] mb-10">
          <img src={Hero1} alt="" className="block mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl">
            One App. Endless Possibilities
          </h1>
        </div>
        <div className="py-40 px-5 sm:w-96 border-yellow-400 border-2 mx-auto text-center rounded-[40px] mb-10">
          <img src={Hero2} alt="" className="block mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl">Future of Derivative Trading</h1>
        </div>
        <div className="py-40 px-10 sm:w-96 border-yellow-400 border-2 mx-auto text-center rounded-[40px] mb-10">
          <img src={Hero3} alt="" className="block mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl">In now here, for you</h1>
        </div>
      </section>
    </>
  )
}

export default Hero
