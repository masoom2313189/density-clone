import React from "react"
import DensityLogo from "../images/density.png"
import DeltaLogo from "../images/delta.png"

const Trade = () => {
  return (
    <section className="py-10 w-8/12 md:w-9/12 mx-auto">
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold">
          Trade More.
          <span className="text-yellow-300 block md:inline"> Pay Less.</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-3">
          Our low Fees Supercharge You Profits.
        </p>
      </div>
      <div className="mt-20 font-bold grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
        <div className="text-center p-20 bg-[#3d3b39] rounded-lg max-w-[300px] mx-auto">
          <h1 className="flex gap-2 text-3xl justify-center mb-10">
            <img
              src="https://blog.coindcx.com/wp-content/uploads/2021/09/ProfilePic.svg"
              alt=""
              width={"40px"}
            />
            <span>CoinDCX</span>
          </h1>
          <span>
            <h1 className="text-2xl">0.025</h1>
            <p className="mb-10">Maker Fees</p>
          </span>
          <span>
            <h1 className="text-2xl">0.07</h1>
            <p>Taker Fees</p>
          </span>
        </div>
        <div className="text-center text-black p-24 bg-gradient-to-b from-yellow-300 to-green-400 rounded-lg max-w-[300px] mx-auto">
          <h1 className="flex gap-2 text-3xl justify-center mb-10">
            <img src={DensityLogo} alt="" width={"40px"} />
            <span>density</span>
          </h1>
          <span>
            <h1 className="text-2xl">0.02</h1>
            <p className="mb-10">Maker Fees</p>
          </span>
          <span>
            <h1 className="text-2xl">0.04</h1>
            <p>Taker Fees</p>
          </span>
        </div>
        <div className="text-center p-20 bg-[#3d3b39] rounded-lg max-w-[300px] mx-auto">
          <h1 className="flex gap-2 text-3xl justify-center mb-10">
            <img src={DeltaLogo} alt="" width={"180px"} />
          </h1>
          <span>
            <h1 className="text-2xl">0.02</h1>
            <p className="mb-10">Maker Fees</p>
          </span>
          <span>
            <h1 className="text-2xl">0.05</h1>
            <p>Taker Fees</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Trade
