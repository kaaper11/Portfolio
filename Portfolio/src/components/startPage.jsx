import React, {useRef} from "react";


 const StartPage = () => {

     const scroll = useRef(null);

     const scrollToAbout = () => {
         scroll.current.scrollIntoView({behavior: "smooth"});
     }

     return (
         <div className="container  mx-auto bg-blue-100 h-1000 scroll-smooth ">
             <nav className="bg-blue-200">
                 <div className="flex items-center justify-between h-15 text-white text-lg font-sans px-4">
                     <a className="" href="/">LOGO</a>
                     <div className="flex items-center gap-40">
                         <button className="cursor-pointer " onClick={scrollToAbout}>ABOUT ME</button>
                         <a className=" ">PORTFOLIO</a>
                         <div className=" container flex items-center justify-center  h-10 w-25 bg-linear-50 from-blue-300 to-blue-500 rounded-lg hover:border-2  hover:border-white hover:cursor-pointer">
                            <a className="">CONTACT</a>
                         </div>
                     </div>
                 </div>
             </nav>
             <div className="container grid grid-cols-2  text-center mt-13 ">
                 <div className=" flex items-center justify-center grid grid-rows-[70px_auto_0px_auto] gap-7 ">
                     <span className="text-5xl font-bold text-gray-500 h-10">I'm a </span>
                     <span className="text-7xl  text-white" >FUll STACK DEVELOPER </span>
                     <span className="ml-125 transform -translate-9">🟦</span>
                     <div className="flex justify-center">
                         <div className=" flex items-center justify-center  h-17 w-70 bg-linear-50 from-blue-300 to-blue-500 rounded-lg hover:border-3  hover:border-white hover:cursor-pointer">
                             <a className=" text-xl font-bold text-white">PROJECTS</a>
                         </div>
                     </div>
                 </div>
                 <div className=" flex items-center justify-center">
                    <div className=" flex items-center justify-center bg-blue-100 w-80 h-80 border-8 border-blue-200 rounded-lg">
                        <img className="transform -translate-6 rounded-lg" src={"./public/photos/zdj1 (1).jpg"}/>
                    </div>

                 </div>
             </div>
             <section ref={scroll} id={"aboutme"} className="container h-150  flex items-center justify-center grid grid-cols-2 ">
                 <h1 className="text-7xl font-bold text-gray-500 h-10 text-center">ABOUT ME</h1>
                 <div className=" w-140 text-xl bg-blue-200 flex items-center justify-center h-70 rounded-lg border-8 border-white ">
                     <span className=" m-8 text-white">Computer Science student at UWB. Full stack mostly with Node.js and React, but open to other technologies. Passionate about web apps and open-source projects.
                     </span>
                 </div>
             </section>
             <div className="flex items-center justify-center">
                 <div className=" bg-blue-200 text-white text-2xl font-bold flex items-center justify-center transform -translate-y-25 border-4 border-white rounded-lg w-60 h-20 cursor-pointer hover:bg-linear-50 from-blue-300 to-blue-500 ">
                     <a href="./public/files/CV_01 (2).pdf" target="_blank" rel="noopener noreferrer">CV</a>
                 </div>
             </div>

             <section className="container  flex items-center justify-center grid grid-cols-2 ">
                 <div className="grid grid-rows-2">
                     <div className="flex items-center justify-center">
                        <h2 className="text-7xl font-bold text-gray-500 h-10 text-center">PORTFOLIO</h2>
                     </div>
                     <div>
                         <div className="flex items-center justify-center">
                            <span className="text-3xl font-bold text-gray-400 ">APPARTMENT</span>
                         </div>
                         <div className="flex items-center justify-center transform translate-y-5">
                             <div className=" w-140 text-lg bg-blue-200 flex items-center justify-center h-70 rounded-lg border-8 border-white ">
                                <p className="m-8 text-white">The project assumes the creation of a web application for renting apartments and commercial premises from private individuals. The application allows users to browse available offers using a search engine or by viewing suggested listings. Users can reserve a chosen place for a specific period if it is available, and after their stay, they can rate the property.</p>
                             </div>
                         </div>
                     </div>

                 </div>
                 <div className="grid grid-rows-[auto_0px] ">
                         <div className="  transform translate-y-20 flex items-center justify-center bg-blue-100 w-140 h-67 border-8 border-blue-200 rounded-lg">
                             <img className="transform -translate-6 rounded-lg" src={"./public/photos/appartment.png"}  />
                         </div>
                     <div className="transform translate-y-30 grid grid-cols-[70px_auto] ">
                         <div className="transform -translate-y-2">
                             <img src="./public/photos/arrow.png" />
                         </div>
                         <div>
                             <a href={"/"} className="text-white text-2xl font-bold hover:text-gray-400">READ MORE</a>
                         </div>
                     </div>
                 </div>
             </section>
             <div className="flex items-center justify-center grid grid-cols-[20px_20px_20px] mt-12 text-2xl font-bold text-white">
                 <div className="flex items-center justify-center cursor-pointer hover:text-gray-400 ">
                     <a >1</a>
                 </div>
                 <div className="flex items-center justify-center">
                     <span>|</span>
                 </div>
                 <div className="flex items-center justify-center cursor-pointer hover:text-gray-400">
                     <a>2</a>
                 </div>
             </div>
         </div>
     )
 }
 export default StartPage;