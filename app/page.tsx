"use client"
import { useEffect, useState } from "react";
import Loading from "./loading";
import { Card } from "@/components/Card";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [year, setYear] = useState(new Date().getFullYear());
  const [name, setName] = useState("Djenidi");
  const [email, setEmail] = useState("djenidigauss@gmail.com");
  useEffect(()=> {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <header className="bg-blue-100">
        <nav className="p-4 flex justify-end pr-14">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="border-b-2 border-blue-900 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 py-2 border-transparent hover:border-blue-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 py-2 border-transparent hover:border-blue-900">
                Stack
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 py-2 border-transparent hover:border-blue-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 py-2 border-transparent hover:border-blue-900">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <section id="home" className="flex justify-around items-center p-8">
          <div className="w-xl p-4">
            <p>Hello, I'm</p>
            <div className="flex flex-col text-6xl font-bold text-blue-900 mb-2 leading-snug">
              <div className="w-98">
                <p className="text-left">Full Stack</p>
                <p className="text-right">Developer</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 my-6">I build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
            <div className="flex gap-8">
              <button type="button" 
                className="
                  bg-blue-900 hover:bg-blue-700 
                  text-white font-bold 
                  py-3 px-6 rounded-3xl
                  cursor-pointer
                ">
                Contact Me
              </button>
              <button type="button" 
                className="
                  border-2 border-blue-900 
                  text-blue-900 font-bold 
                  hover:bg-blue-900 hover:text-white 
                  py-3 px-8 rounded-3xl
                  cursor-pointer
                ">
                  Portfolio
              </button>
            </div>
          </div>
          <div className="w-xl"></div>
        </section>
      </header>
      <main>
        <div className="flex flex-col items-end mb-10">
          <div className="w-md">
          </div>
          <section className="w-md">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">About Me</h2>
              <p className="text-lg text-gray-600 mb-4">
                I'm a passionate full stack developer with experience in building web applications using modern technologies. I enjoy creating efficient and scalable solutions that provide great user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                My expertise includes JavaScript, React, Node.js, and databases. I have a strong background in both frontend and backend development, allowing me to create seamless and responsive applications.
              </p>
          </section>
          <section className="w-md">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">My Stack</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>HTML & CSS</li>
              </ul>
          </section>
        </div>
        <section>
            <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Services</h2>
            <div className="flex justify-center">
              <p className="w-md text-lg text-gray-800 mb-8 text-center">
                I offer a range of services to help you build and maintain your web presence.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                  <Card 
                      title="Responsive WebSite Development" 
                      description="I create responsive websites that look great on all devices, ensuring a seamless user experience." 
                      img="./img/responsive-design.svg" 
                  />
                  <Card 
                      title="SINGLE-PAGE APPLICATIONS" 
                      description="I design and develop single-page applications that provide a smooth and interactive user experience." 
                      img="/img/landing-page.svg" 
                  />
                  <Card 
                      title="Website maintenance" 
                      description="I provide ongoing support and maintenance for your website to ensure it runs smoothly." 
                      img="/img/web-maintenance.svg" 
                  />
                  <Card 
                      title="UI/UX Design" 
                      description="I create intuitive and visually appealing user interfaces that enhance the overall user experience." 
                      img="/img/programming.svg" 
                  />
                  <Card 
                      title="Static Site Generation" 
                      description="I create fast and secure static websites that are easy to deploy and maintain." 
                      img="/img/statique.svg" 
                  />
                  <Card 
                      title="Server Side Rendering" 
                      description="I develop server-rendered applications that provide improved performance and SEO benefits." 
                      img="/img/dynamique.svg" 
                  />
              </div>
            </div>
        </section>
        <section>
            <h2 className="text-4xl font-bold text-blue-900 text-center my-8">Contact Me</h2>
            <div className="flex justify-center mb-4">
              <p className="w-md text-center text-lg text-gray-600 mb-4">
                Feel free to reach out to me for any inquiries or collaborations. You can contact me via email at <a href={`mailto:${email}`} className="text-blue-900 hover:underline">
                  {email}
                </a>
              </p>
            </div>
        </section>
      </main>
      <footer className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-8 pt-12 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">About</h3>
                <p className="text-gray-300">Full stack developer passionate about creating exceptional digital experiences.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#home" className="hover:text-white">Home</a></li>
                  <li><a href="#about" className="hover:text-white">About</a></li>
                  <li><a href="#services" className="hover:text-white">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-300">Email: <a href="mailto:example@example.com" className="hover:text-white">djenidigauss@gmail.com</a></p>
              </div>
          </div>
          <hr className="border-white mb-4" />
          <p className="text-center text-gray-300">
          &copy; {year} {name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}