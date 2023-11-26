import React from "react"
import DedicatedImg from "../images/dedicated.png"
import DepositImg from "../images/deposit.png"

const Start = () => {
  return (
    <section className="bg-white text-black py-10 px-10 lg:px-20 mx-auto">
      <h1 className="text-5xl lg:text-6xl font-bold">
        Start Small.
        <span className="block md:inline"> Earn Big.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 mt-10">
        <div className="mx-auto w-[400px] bg-gray-200 py-10 px-20">
          <img
            src={DepositImg}
            alt=""
            width={"200px"}
            className="block mx-auto"
          />
          <h1 className="text-3xl lg:text-4xl font-bold">Deposit Bonus</h1>
        </div>
        <div className="mx-auto w-[400px] bg-gray-200 py-10 px-20">
          <img
            src={DedicatedImg}
            alt=""
            width={"150px"}
            className="block mx-auto"
          />
          <h1 className="text-3xl lg:text-4xl font-bold">
            Dedicated Relationship Manager
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Start
