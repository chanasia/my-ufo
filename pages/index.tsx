import Link from "next/link"
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/home/home"
import Bubbles from '../components/home/Bubbles'


const home:NextPage = () => {
  return(
    <div className="home">
      <Head>
        <title>Portfolio - Chanasia</title>
      </Head>
      <Navbar />
      <Home />
      <Bubbles />
    </div>
  )
}

export default home