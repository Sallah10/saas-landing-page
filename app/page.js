// import Image from "next/image";
import Hero from "../components/hero"
import  About from "../components/about"
import Features from "../components/features"
import Testimonials from "../components/testimonials"
import Blog from "../components/blog"

export default function Home() {
  return (
    <>
      <div>
        <Hero/>
        <About/>
        <Features/>
        <Testimonials/>
        <Blog/>
      </div>
    </>
  );
}
