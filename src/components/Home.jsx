import React from "react"
import Hero from "./Hero"
import Trade from "./Trade"
import Explore from "./Explore"
import Unlock from "./Unlock"
import Start from "./Start"
import Derivates from "./Derivates"
import Backed from "./Backed"
import DontTake from "./DontTake"
import EarnMoney from "./EarnMoney"
import Meet from "./Meet"
import Fixed from "./Fixed"

const Home = () => {
  return (
    <main className="bg-black w-full text-white text-center">
      <Hero />
      <Trade />
      <Explore />
      <Unlock />
      <Start />
      <Derivates />
      <Backed />
      <DontTake />
      <EarnMoney />
      <Meet />
      <Fixed />
    </main>
  )
}

export default Home
