import React, { useState } from "react"
import DensityLogo from "../images/density_yellow.png"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <nav class="flex sticky items-center justify-between flex-wrap bg-gray-900 p-6 md:px-48">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src={DensityLogo} alt="" width={"150px"} />
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={handleClick}
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {click ? (
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300"
            >
              Academy
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300"
            >
              Blogs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300"
            >
              Leaderboard
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300"
            >
              Fees
            </a>
          </div>
        </div>
      ) : (
        <div class="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex gap-10 justify-center ml-80 items-center">
            <a
              href="#responsive-header"
              class=" text-white hover:text-yellow-300"
            >
              Academy
            </a>
            <a
              href="#responsive-header"
              class=" text-white hover:text-yellow-300"
            >
              Blogs
            </a>
            <a
              href="#responsive-header"
              class=" text-white hover:text-yellow-300"
            >
              Leaderboard
            </a>
            <a
              href="#responsive-header"
              class=" text-white hover:text-yellow-300"
            >
              Fees
            </a>
            <button
              href="#"
              className="bg-gradient-to-r from-yellow-300 to-green-400 w-48 h-12 rounded-lg text-black font-bold text-xl"
            >
              TRADE NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
