import React from "react"

const UserImg = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/S7gnqIa5oO1wJjpwWYQqFJ9uSk.png?scale-down-to=512",
    name: "Utsav Somani",
    position: "Ex-partner, AngelList India",
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/cnwgdmpSC4igd5roNpnIxEjHVc.png?scale-down-to=512",
    name: "Aditya Nagarsheth",
    position: "Partner, Perpetual Value Partners",
  },
  {
    id: 3,
    image:
      "https://framerusercontent.com/images/QuYqjHWGeAou3q2hUEQgwc4SrI8.png?scale-down-to=512",
    name: "Gokul Rajaram",
    position: "Ex-board director, Coinbase | Ex-Google",
  },
  {
    id: 4,
    image:
      "https://framerusercontent.com/images/jp0bxVAav0WU12Nb3W6DmlerX0.png?scale-down-to=512",
    name: "Sajid Rehman",
    position: "Managing Partner, My Asia VC",
  },
  {
    id: 5,
    image:
      "https://framerusercontent.com/images/okGvdVlM57X1Fxp3ww1dU8CQ.png?scale-down-to=512",
    name: "Arjun Sethi",
    position: "Cofounder, Tribe Capital",
  },
  {
    id: 6,
    image:
      "https://framerusercontent.com/images/29OS9pGoo6swnRGUemIZb4gBU.png?scale-down-to=512",
    name: "Kunal Shah",
    position: "Founder, Cred",
  },
  {
    id: 7,
    image:
      "https://framerusercontent.com/images/Q9di6CxfLs3k8dj4oZxFA8k3s.png?scale-down-to=512",
    name: "Sandeep Nailawal",
    position: "Cofounder, Polygon Labs",
  },
  {
    id: 8,
    image:
      "https://framerusercontent.com/images/66Wk0yqKpU6iBv6LQqEYZugTrM.png?scale-down-to=512",
    name: "Karn Vivek Nagpal",
    position: "Investor at CoinDCX, Dealshare, Oye Rickshaw!",
  },
]

const Backed = () => {
  return (
    <section className="py-10 w-10/12 lg:w-8/12 mx-auto">
      <div>
        <hr
          className="mb-16"
          style={{
            backgroundColor: "yellow",
            height: "1px",
          }}
        />
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Backed by the Best.
        </h1>
        <hr
          className="mt-16"
          style={{
            backgroundColor: "yellow",
            height: "1px",
          }}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center items-center text-center mt-20">
        <img
          src="https://framerusercontent.com/images/gdlQdW3N8eoDMSSre2YDBWlb0k.png?scale-down-to=512"
          alt=""
          width={"150px"}
        />
        <img
          src="https://framerusercontent.com/images/nGrdP5qcSxm5D1dyznCdkBdzIOg.png"
          alt=""
          width={"150px"}
        />
        <img
          src="https://framerusercontent.com/images/JOYn0YM4rICx1E6hEDjwkcrMvE.png"
          alt=""
          width={"150px"}
        />
        <img
          src="https://framerusercontent.com/images/GMRDilBf7HwOCLQf2DZ9Sto2Odw.png?scale-down-to=512"
          alt=""
          width={"150px"}
        />
        <img
          src="https://framerusercontent.com/images/D5tHrcjvRYsqPnKQXfnI5OGhuqg.png"
          alt=""
          width={"100px"}
        />
        <img
          src="https://framerusercontent.com/images/R1yd7FnjlGT4CXTnOwsrjuB2FIg.png?scale-down-to=512"
          alt=""
          width={"150px"}
        />
        <img
          src="https://framerusercontent.com/images/BbH8fkqxc8qzbaxXPGS41JL6aM.png?scale-down-to=512"
          alt=""
          width={"150px"}
        />
      </div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {UserImg.map(item => (
          <div className="text-center" key={item.id}>
            <img src={item.image} alt="" width={"150px"} className="mx-auto" />
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p className="text-gray-500">{item.position}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Backed
