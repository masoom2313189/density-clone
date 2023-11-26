import React from "react"
import Hero from "./Hero"
import Trade from "./Trade"
import Explore from "./Explore"
import Unlock from "./Unlock"
import Start from "./Start"
import Derivates from "./Derivates"

const Home = () => {
  return (
    <main className="bg-black w-full text-white text-center">
      <Hero />
      <Trade />
      <Explore />
      <Unlock />
      <Start />
      {/* <Derivates /> */}
    </main>
  )
}

export default Home
