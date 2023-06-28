import nodeSVG from "../assets/nodejs-icon.svg";
import cssSVG from "../assets/css-3.svg";
import graphqlSVG from "../assets/graphql.svg";
import htmlSVG from "../assets/html-5.svg";
import javascriptSVG from "../assets/javascript.svg";
import mongodbSVG from "../assets/mongodb-icon.svg";
import reactSVG from "../assets/react.svg";
import tailwindSVG from "../assets/tailwindcss-icon.svg";

function Skills() {
   const technologies = [
      {
         id: 1,
         src: javascriptSVG,
         title: "Javascript",
         style: "shadow-yellow-500",
      },
      {
         id: 2,
         src: htmlSVG,
         title: "HTML",
         style: "shadow-orange-500",
      },
      {
         id: 3,
         src: cssSVG,
         title: "CSS",
         style: "shadow-blue-500",
      },
      {
         id: 4,
         src: tailwindSVG,
         title: "Tailwind CSS",
         style: "shadow-cyan-500",
      },
      {
         id: 5,
         src: reactSVG,
         title: "React",
         style: "shadow-[#61dbfb]",
      },
      {
         id: 6,
         src: graphqlSVG,
         title: "GraphQL",
         style: "shadow-pink-400",
      },
      {
         id: 7,
         src: mongodbSVG,
         title: "MongoDB",
         style: "shadow-green-500",
      },
      {
         id: 8,
         src: nodeSVG,
         title: "NodeJS",
         style: "shadow-[#3c873a]",
      },
   ];
   return (
      <div name="skills" className="bg-[#DFDFDF] text-[#343434] md:h-screen">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 flex flex-row justify-center">
               <p className="text-5xl font-bold inline border-gray-500">Skills</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
               {technologies.map(({ id, src, title, style }) => (
                  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                     <img src={src} alt="" className="w-20 mx-auto" />
                     <p className="mt-4">{title}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Skills;
