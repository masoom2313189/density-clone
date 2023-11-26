import React from "react"
import DensityLogo from "../images/density.png"

const Footer = () => {
  return (
    <footer className="p-10 mx-auto bg-green-700 text-white text-center">
      <div className="flex gap-5 justify-center">
        <img src={DensityLogo} alt="" width={"30px"} />
        <h1 className="text-3xl font-bold">density</h1>
      </div>
      <div className="mt-10 md:px-36">
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Trading Policy</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Cookie Policy</a>
          </li>
          <li>
            <a href="">KYC-AML Policy</a>
          </li>
          <li>
            <a href="">Risk disclosure</a>
          </li>
          <li>
            <a href="">Research Disclaimer</a>
          </li>
        </ul>
        <p className="md:px-48 mt-10">
          Density was started with the vision of democratising money for
          everyone. With the idea of derivatives made simple, use Density to
          maximise profits and a hassle free experience.
        </p>
      </div>
    </footer>
  )
}

export default Footer
