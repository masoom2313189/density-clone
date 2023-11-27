import React from "react"
import { FaLinkedin } from "react-icons/fa"
const UserDetails = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/rpNXycRYwOL2fZ6QsuITaxNCvPo.png?scale-down-to=512",
    name: "Aakash Neeraj",
    position: "CEO, Density",
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/4n8TnsDzZ83qgQQ4T8ls6EicHE.png?scale-down-to=512",
    name: "Bhupendra Bule",

    position: "CEO, Density",
  },
  {
    id: 3,
    image:
      "https://framerusercontent.com/images/5Sox37z0hcHue5OfRbADcxNU0w.png?scale-down-to=512",
    name: "Deepak Vasman",
    position: "CEO, Density",
  },
]

const Meet = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-10 lg:px-20 mx-auto">
      <h1 className="text-5xl lg:text-6xl font-bold lg:w-6/12 mx-auto">
        Meet the{" "}
        <span className="text-yellow-300 block sm:inline">Visionaries</span>{" "}
        behind Density.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center lg:p-20 py-10">
        {UserDetails.map(item => (
          <div
            className="bg-gray-700 rounded-lg pl-10 pt-10 text-start max-w-[300px] mx-auto"
            key={item.id}
          >
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p className="font-bold mt-3">{item.position}</p>
            <div className="flex gap-10 mt-10">
              <div>
                <FaLinkedin className="mt-32 text-3xl" />
              </div>
              <img
                src={item.image}
                alt=""
                className="object-fill h-48"
                width={"75%"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Meet
