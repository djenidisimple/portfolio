"use client"
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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
              <a href="#" className="border-b-2 border-blue-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 border-transparent hover:border-blue-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 border-transparent hover:border-blue-900">
                Stack
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 border-transparent hover:border-blue-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 border-transparent hover:border-blue-900">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <section id="home" className="flex justify-around items-center p-8">
          <div className="w-xl p-4">
            <p>Hello, I'm</p>
            <h1 className="text-6xl font-bold text-blue-900 my-4">Full Stack <br /> Developer</h1>
            <p className="text-lg text-gray-600 my-4">I build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
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
        <section>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">About Me</h2>
            <p className="text-lg text-gray-600 mb-4">
              I'm a passionate full stack developer with experience in building web applications using modern technologies. I enjoy creating efficient and scalable solutions that provide great user experiences.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              My expertise includes JavaScript, React, Node.js, and databases. I have a strong background in both frontend and backend development, allowing me to create seamless and responsive applications.
            </p>
        </section>
        <section>
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
        <section>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Services</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
              <li>Web Application Development</li>
              <li>API Development</li>
              <li>Database Design</li>
              <li>Performance Optimization</li>
              <li>Responsive Design</li>
            </ul>
        </section>
        <section>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Contact Me</h2>
            <p className="text-lg text-gray-600 mb-4">
              Feel free to reach out to me for any inquiries or collaborations. You can contact me via email at <a href="mailto:example@example.com" className="text-blue-900 hover:underline">
                example@example.com
              </a>
            </p>
        </section>
      </main>
      <footer>
        <p className="text-center text-gray-600 py-4">
          &copy; 2026 Your Name. All rights reserved.
        </p>
      </footer>
    </>
  );
}