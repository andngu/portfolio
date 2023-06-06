import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full mr-10">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm Andrew Nguyen
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have 2 years of experience building and designing software. Currently, I love to work on web applications using technologies like React, Tailwind, NextJS, and GraphQL
                    </p>

                    <div>
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                            Projects
                            <span className="group-hover:rotate-90 duration-300 ml-2">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home