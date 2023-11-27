import React from "react"
import { FaXTwitter } from "react-icons/fa6"

const UserDetails = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/HFO5RiLQIk984cVAGpFe100c7eI.png",
    name: "Prakash Jamatia.",
    desc: "As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations.",
    position: "Founder, Tradeshala",
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/2aZdbECOn8sY9OsWRVid17zHrjA.png",
    name: "Soumen Das.",
    desc: "I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.",
    position: "Crypto Trader",
  },
  {
    id: 3,
    image:
      "https://framerusercontent.com/images/2kLZqGNEtNElxbI6UgaTc3vEDho.png",
    name: "Arjun Naik.",
    desc: "I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange.",
    position: "Equity Trader",
  },
]

const DontTake = () => {
  return (
    <section className="bg-white text-black py-10 px-10 lg:px-20 mx-auto">
      <h1 className="text-5xl lg:text-6xl font-bold">
        Don’t take our word for it.
      </h1>
      <p className="text-xl lg:text-2xl md:w-6/12 mx-auto">
        Hear it from our expert community of traders who have made insane
        amounts in a short amount of time
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center lg:p-10 py-10">
        {UserDetails.map(item => (
          <div
            className="bg-gray-100 rounded-lg pl-10 pt-10 text-start max-w-[350px] mx-auto"
            key={item.id}
          >
            <p className="w-8/12">{item.desc}</p>
            <div className="flex gap-10 mt-10">
              <div>
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <p className="font-bold mt-3">{item.position}</p>
                <FaXTwitter className="mt-3 text-2xl" />
              </div>
              <img src={item.image} alt="" className="object-fill w-32 md:42" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DontTake
