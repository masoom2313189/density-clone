import * as React from "react"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Footer from "../components/Footer"

const IndexPage = () => (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
