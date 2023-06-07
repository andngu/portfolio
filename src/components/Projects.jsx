import test from "../assets/test.png";

function Projects() {
   const projects = [
      {
         id: 1,
         src: test,
      },
      {
         id: 2,
         src: test,
      },
      {
         id: 3,
         src: test,
      },
      {
         id: 4,
         src: test,
      },
      {
         id: 5,
         src: test,
      },
      {
         id: 6,
         src: test,
      },
   ];

   return (
      <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 flex flex-row justify-center">
               <p className="text-5xl font-bold inline border-gray-500">Projects</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
               {projects.map(({ id, src }) => (
                  <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110">
                     <img src={src} alt="" className="rounded-md " />
                     <div className="flex items-center justify-center">
                        <button type="button" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-b">
                           Demo
                        </button>
                        <button type="button" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-b">
                           Code
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Projects;
