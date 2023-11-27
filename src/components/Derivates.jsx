import React from "react"
import AddFundImg from "../images/add_fund.png"

const Derivates = () => {
  return (
    <section className="py-10 w-8/12 md:w-7/12 mx-auto">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Derivates made simple in
          <span className="text-yellow-300"> 3 Easy</span> Steps
        </h1>
      </div>
      <div className="mt-10">
        <div className="block lg:flex gap-10 mt-10">
          <div>
            <img
              src="https://framerusercontent.com/images/JOp5o95H8N6rcRdm2ihCJpcoawc.png?scale-down-to=1024"
              alt=""
            />
          </div>
          <div className="text-center lg:text-start">
            <img
              src="https://framerusercontent.com/images/Eirp07s7Wsvd04ENgTUIQE6RGkc.png"
              alt=""
              width={"150px"}
              className="mx-auto lg:mx-0"
            />
            <h1 className="text-2xl lg:text-4xl">Create an Account</h1>
            <p className="text-xl lg:text-2xl mt-5 text-gray-300">
              Register & Complete your Verification in less than 2 minutes
            </p>
            <button
              href="#"
              className="bg-gradient-to-r from-yellow-300 to-green-400 w-48 h-12 rounded-lg text-black font-bold text-xl mt-10"
            >
              TRADE NOW
            </button>
          </div>
        </div>
        <hr
          className="text-yellow-500 mt-10"
          style={{
            backgroundColor: "yellow",
            height: "1px",
          }}
        />
        <div className="block lg:flex gap-10 mt-10">
          <div>
            <img
              src="https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png?scale-down-to=1024"
              alt=""
            />
          </div>
          <div className="text-center lg:text-start">
            <img
              src={AddFundImg}
              alt=""
              width={"120px"}
              className="mx-auto lg:mx-0"
            />
            <h1 className="text-2xl lg:text-4xl">Add Funds Seamlessly</h1>
            <p className="text-xl lg:text-2xl mt-5 text-gray-300">
              Add funds quickly using a variety of payment methods
            </p>
            <button
              href="#"
              className="bg-gradient-to-r from-yellow-300 to-green-400 w-48 h-12 rounded-lg text-black font-bold text-xl mt-10"
            >
              TRADE NOW
            </button>
          </div>
        </div>
        <hr
          className="mt-10"
          style={{
            backgroundColor: "yellow",
            height: "1px",
          }}
        />
        <div className="block lg:flex gap-10 mt-10">
          <div>
            <img
              src="https://framerusercontent.com/images/yT2IeAMzpz2zotDCFRXIz6bngLA.png?scale-down-to=1024"
              alt=""
            />
          </div>
          <div className="text-center lg:text-start">
            <img
              src="https://framerusercontent.com/images/MuGoyAYXtzuANxB4L6sjutODqss.png"
              alt=""
              width={"150px"}
              className="mx-auto lg:mx-0"
            />
            <h1 className="text-2xl lg:text-4xl">Start your Trading Journey</h1>
            <p className="text-xl lg:text-2xl mt-5 text-gray-300">
              Choose Your Trading Pair & Trade Seamlessly
            </p>
            <button
              href="#"
              className="bg-gradient-to-r from-yellow-300 to-green-400 w-48 h-12 rounded-lg text-black font-bold text-xl mt-10"
            >
              TRADE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Derivates
