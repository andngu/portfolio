import nodeSVG from "../assets/nodejs-icon.svg";
import cssSVG from "../assets/css-3.svg";
import graphqlSVG from "../assets/graphql.svg";
import htmlSVG from "../assets/html-5.svg";
import javascriptSVG from "../assets/javascript.svg";
import mongodbSVG from "../assets/mongodb-icon.svg";
import reactSVG from "../assets/react.svg";
import tailwindSVG from "../assets/tailwindcss-icon.svg";
import typescriptSVG from "../assets/typescript.svg";
import javaSVG from "../assets/java.svg";
import cSVG from "../assets/c.svg";
import pythonSVG from "../assets/python.svg";
import muiSVG from "../assets/mui.svg";
import matlabSVG from "../assets/matlab.svg";

function Skills() {
   const technologies = [
      {
         id: 1,
         src: cssSVG,
         title: "CSS",
         style: "shadow-[#2162AF]",
      },
      {
         id: 2,
         src: cSVG,
         title: "C++",
         style: "shadow-[#5E97D0]",
      },
      {
         id: 3,
         src: javaSVG,
         title: "Java",
         style: "shadow-[#5382a1]",
      },
      {
         id: 4,
         src: tailwindSVG,
         title: "Tailwind",
         style: "shadow-[#15C2B8]",
      },
      {
         id: 5,
         src: reactSVG,
         title: "React",
         style: "shadow-[#61dbfb]",
      },
      {
         id: 6,
         src: typescriptSVG,
         title: "TypeScript",
         style: "shadow-[#007acc]",
      },
      {
         id: 7,
         src: muiSVG,
         title: "Material UI",
         style: "shadow-[#0081CB]",
      },
      {
         id: 8,
         src: nodeSVG,
         title: "NodeJS",
         style: "shadow-[#3c873a]",
      },
      {
         id: 9,
         src: htmlSVG,
         title: "HTML",
         style: "shadow-[#e4a125]",
      },
      {
         id: 10,
         src: javascriptSVG,
         title: "Javascript",
         style: "shadow-[#F7DF1E]",
      },
      {
         id: 11,
         src: mongodbSVG,
         title: "MongoDB",
         style: "shadow-green-500",
      },
      {
         id: 12,
         src: pythonSVG,
         title: "Python",
         style: "shadow-[#FFD242]",
      },
      {
         id: 13,
         src: graphqlSVG,
         title: "GraphQL",
         style: "shadow-[#E535AB]",
      },
      {
         id: 14,
         src: matlabSVG,
         title: "Matlab",
         style: "shadow-[#e86e05]",
      },
   ];

   const experiences = [
      {
         id: 1,
         company: "General Motors",
         position: "Software Developer",
         years: "Nov. 2020 -  Apr. 2023",
      },
      {
         id: 2,
         company: "Advanced Micro Devices",
         position: "Co-op Debug Engineer",
         years: "Jan. 2018 - May 2018",
      },
      {
         id: 3,
         company: "Best Buy",
         position: "Geek Squad Advanced Repair Agent",
         years: "Apr. 2015 – Oct. 2020",
      },
      {
         id: 4,
         company: "University of Oklahoma",
         position: "IT Services Specialist",
         years: "Apr. 2016 – Sept. 2017",
      },
   ];

   return (
      <div name="skills" className="bg-[#DFDFDF] text-[#343434] min-h-screen flex flex-col items-center">
         <div className="pb-12 mt-20">
            <h1 className="text-5xl font-bold">Skills & Experience</h1>
         </div>

         <div className="container max-w-screen-lg p-4 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-2/3 pr-4">
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                  {technologies.map(({ id, src, title, style }) => (
                     <div key={id} className={`card bg-white p-4 rounded-lg shadow-lg ${style} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200`}>
                        <div className="flex flex-col items-center text-center">
                           <img src={src} alt="" className="w-16 h-16 mb-4" />
                           <p className="text-lg font-semibold text-gray-700">{title}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="w-full md:w-1/3 m-8">
               <div className="p-15">
                  {experiences.map(({ id, company, position, years }) => (
                     <div key={id} className="mb-4">
                        <h3 className="text-2xl font-semibold">{company}</h3>
                        <p className="text-lg text-gray-700">{position}</p>
                        <p className="text-gray-500">{years}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
