import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import financeDashboard from "../assets/financeDashboard.png";
import pathfinding from "../assets/pathfinding.png";

function Projects() {
   const projects = [
      {
         id: 1,
         imgSrc: financeDashboard,
         site: "https://finance-dashboard-lac.vercel.app/",
         code: "https://github.com/andngu/finance-dashboard",
         title: "Finance Dashboard",
         description: <p>A full-stack interactive finance dashboard application with real-time data visualization and machine learning predictions for financial analysis and forecasting.</p>,
         technologiesUsed: ["React", "Typescript", "Material UI", "Node.js", "Express.js", "MongoDB"],
      },
      {
         id: 2,
         imgSrc: pathfinding,
         site: "https://andngu.github.io/pathfinder-visualizer/",
         code: "https://github.com/andngu/pathfinder-visualizer/tree/master",
         title: "Pathfinder Visualizer",
         description: <p>Application to help users visualize pathfinding algorithms like Breadth-First Search, Depth-First Search, Dijkstra&apos;s, and A* (in progress). With an interactive grid, users can add walls and observe algorithms in action.</p>,
         technologiesUsed: ["React", "Material UI"],
      },
   ];

   return (
      <div name="projects" className="bg-[#DFDFDF] text-[#343434] md:h-screen">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-12 flex flex-row justify-center">
               <p className="text-5xl font-bold inline border-black">Projects</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0 ">
               {projects.map(({ id, imgSrc, site, code, title, description, technologiesUsed }) => (
                  <div
                     key={id}
                     className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
                     style={{
                        position: "relative",
                     }}
                  >
                     <div
                        className="hover-effect-container"
                        style={{
                           position: "relative",
                           overflow: "hidden",
                           borderRadius: "0.375rem",
                        }}
                     >
                        <img
                           src={imgSrc}
                           alt=""
                           className="rounded-md"
                           style={{
                              transition: "opacity 0.3s ease-in-out",
                              opacity: 1,
                           }}
                           onMouseOver={(e) => {
                              e.currentTarget.style.opacity = 0.5;
                              e.currentTarget.style.filter = "blur(5px)";
                           }}
                           onMouseOut={(e) => {
                              e.currentTarget.style.opacity = 1;
                              e.currentTarget.style.filter = "none";
                           }}
                           onFocus={(e) => {
                              e.currentTarget.style.opacity = 0.5;
                              e.currentTarget.style.filter = "blur(5px)";
                           }}
                           onBlur={(e) => {
                              e.currentTarget.style.opacity = 1;
                              e.currentTarget.style.filter = "none";
                           }}
                        />
                        <div
                           className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                           style={{
                              background: "rgba(255, 255, 255, 0.5)",
                           }}
                        >
                           <div className="flex justify-center">
                              {site && (
                                 <a href={site} target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="flex items-center justify-center px-6 py-3 m-4 hover:scale-105">
                                       <BsEyeFill size={30} />
                                    </button>
                                 </a>
                              )}
                              {code && (
                                 <a href={code} target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="flex items-center justify-center px-6 py-3 m-4 hover:scale-105">
                                       <FaGithub size={30} />
                                    </button>
                                 </a>
                              )}
                           </div>
                        </div>
                     </div>
                     <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-500">{description}</p>
                        <div className="mt-2">
                           <div className="flex flex-wrap mt-1">
                              {technologiesUsed.map((technology) => (
                                 <span key={technology} className="text-white text-sm px-2 py-1 m-0.5 bg-[#2F3061] rounded-full">
                                    {technology}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Projects;
