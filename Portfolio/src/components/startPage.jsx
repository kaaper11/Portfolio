import React, {useRef, useState} from "react";


 const StartPage = () => {

     const scroll = useRef(null);
     const scroll2 = useRef(null);
     const [activeProject, setActiveProject] = useState(1);
     const [change, setChange] = useState(false);
     const [count, setCount] = useState(1);
     const [change2, setChange2] = useState(false);

     const projects = [
         {id: 1, title: "APPARTMENT", description: "The project assumes the creation of a web application for renting apartments and commercial premises from private individuals. The application allows users to browse available offers using a search engine or by viewing suggested listings. Users can reserve a chosen place for a specific period if it is available, and after their stay, they can rate the property.", image: "./public/photos/appartment.png"},
         {id: 2, title: "LITTLEPRICEGAMES", description: "A web application that uses an external API to search for computer game promotions. It allows users to browse current offers, search for games by name, display details, and redirect users to pages where they can purchase the product.", image: "./public/photos/LPG.png"}
     ]

     const technologies = [
         {id:1, name: "HTML", image: "./public/photos/html.png"},
         {id:2, name: "CSS", image: "./public/photos/css.png"},
         {id:3, name: "JAVASCRIPT", image: "./public/photos/js.png"},
         {id:4, name: "NODE JS", image: "./public/photos/node.png"},
         {id:5, name: "REACT JS", image: "./public/photos/react.png"},
         {id:6, name: "EXPRESS", image: "./public/photos/express.png"}
     ]

     const technology = technologies.find(t => t.id === count)

     const project = projects.find(p => p.id === activeProject);

     const scrollToAbout = () => {
         scroll.current.scrollIntoView({behavior: "smooth"});
     }
     const scrollToPortfolio = () => {
         scroll2.current.scrollIntoView({behavior: "smooth"});
     }
     const animations1 = () => {
         setChange(true)
         setTimeout(() => {setActiveProject(1), setChange(false)},400)
     }
     const animations2 = () => {
         setChange(true)
         setTimeout(() => {setActiveProject(2), setChange(false)},400)
     }

     // const coutSettingsRight = () => {
     //     count === 6 ? setCount(1) :
     //     setCount(count + 1)
     // }
     // const coutSettingsLeft = () => {
     //     count === 1 ? setCount(6) :
     //     setCount(count - 1)
     // }

     const left = () => {
         setChange2(true)
         setTimeout(() => {count === 1 ? setCount(6) : setCount(count - 1), setChange2(false)},200)
     }
     const right = () => {
         setChange2(true)
         setTimeout(() => {count === 6 ? setCount(1) : setCount(count + 1), setChange2(false)},200)
     }


     return (
         <div className="container  mx-auto bg-blue-100 h-1000  scroll-smooth ">
             <nav className="bg-blue-200">
                 <div className="flex items-center justify-between h-15 text-white text-lg font-sans px-4">
                     <a className="" href="/">LOGO</a>
                     <div className="flex items-center gap-40">
                         <button className="cursor-pointer " onClick={scrollToAbout}>ABOUT ME</button>
                         <a className="cursor-pointer " onClick={scrollToPortfolio}>PORTFOLIO</a>
                         <div className=" container flex items-center justify-center  h-10 w-25 bg-linear-50 from-blue-300 to-blue-500 rounded-lg hover:border-2  hover:border-white hover:cursor-pointer">
                            <a className="">CONTACT</a>
                         </div>
                     </div>
                 </div>
             </nav>
             <div className="container grid grid-cols-2   text-center mt-13 ">
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

             <section ref={scroll2}  className="container  flex items-center justify-center grid grid-cols-2 ">
                 <div  className="grid grid-rows-[180px_auto]">
                     <div  className="flex items-center justify-center">
                        <h2  className="text-7xl font-bold text-gray-500 h-10 text-center">PORTFOLIO</h2>
                     </div>
                     <div>
                         <div className="flex items-center justify-center">
                            <span className={change === false ? " transition-opacity opacity-100 duration-400 ease-in-out text-3xl font-bold text-gray-400 " : "transition-opacity opacity-0 duration-400 ease-in-out text-3xl font-bold text-gray-400"}>{project.title}</span>
                         </div>
                         <div className="flex items-center justify-center transform translate-y-5">
                             <div className=" w-140 text-lg bg-blue-200 flex items-center justify-center h-70 rounded-lg border-8 border-white ">
                                <p className={change === false ? "transition-opacity opacity-100 duration-400 ease-in-out m-8 text-white" : "transition-opacity opacity-0 duration-400 ease-in-out m-8 text-white"}>{project.description}</p>
                             </div>
                         </div>
                     </div>

                 </div>
                 <div className="grid grid-rows-[auto_0px] ">
                         <div className="  transform translate-y-20 flex items-center justify-center bg-blue-100 w-140 h-67 border-8 border-blue-200 rounded-lg">
                             <img className={change === false ? "transition-opacity opacity-100 duration-400 ease-in-out transform -translate-6 rounded-lg" : "transition-opacity opacity-0 duration-400 ease-in-out transform -translate-6 rounded-lg"} src={project.image}  />
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
             <div className="flex items-center justify-center grid grid-cols-[20px_20px_20px] mt-25 text-3xl font-bold text-white">
                 <div className="flex items-center justify-center  ">
                     <button className={activeProject === 1 ?  "text-gray-400 cursor-pointer hover:underline underline-offset-1" : "text-white cursor-pointer hover:underline underline-offset-1"}  onClick={animations1}>1</button>
                 </div>
                 <div className="flex items-center justify-center">
                     <span>|</span>
                 </div>
                 <div className="flex items-center justify-center  ">
                     <button className={activeProject === 2 ?  "text-gray-400 cursor-pointer hover:underline underline-offset-1" : "text-white cursor-pointer hover:underline underline-offset-1"}  onClick={animations2}>2</button>
                 </div>
             </div>

             <section>
                 <div className="container grid grid-cols-2 h-100">
                     <div className="flex justify-center items-center">
                         <h3 className="text-7xl font-bold text-gray-500 h-10 text-center" >TECHNOLOGIES</h3>
                     </div>
                     <div className="flex justify-center items-center grid grid-cols-[auto_400px_auto]">
                         <div className="flex items-center justify-center  ">
                             <button className="cursor-pointer" onClick={left}>
                                <img className="rotate-180" src="./public/photos/arrow.png"/>
                             </button>
                         </div>
                         <div className="flex items-center justify-center grid grid-rows-[450px_auto]  ">
                             <img className={change2 === false ? "transition-opacity opacity-100 duration-200 ease-in-out" : "transition-opacity opacity-0 duration-200 ease-in-out"} src={technology.image} />
                             <span className={change2 === false ? "text-center text-4xl font-bold text-white transition-opacity opacity-100 duration-200 ease-in-out" : "text-center text-4xl font-bold text-white transition-opacity opacity-0 duration-200 ease-in-out"}>{technology.name}</span>

                         </div>
                         <div className="flex items-center justify-center  ">
                             <button className={"cursor-pointer"} onClick={right}>
                                 <img  src="./public/photos/arrow.png"/>
                             </button>
                         </div>
                     </div>
                 </div>
             </section>

             <section className="h-180 bg-linear-50 from-blue-300 to-blue-500 rounded-t-[100px] mt-65">
                 <div className="flex items-center justify-center ">
                     <span className="mt-10 text-white text-4xl font-bold ">CONTACT</span>
                 </div>
                 <div className="grid grid-cols-2 ">
                        <div className="grid grid-rows-4 flex items-center justify-center  mt-10">
                            <p className="text-2xl text-white font-bold">MESSAGE ME</p>
                            <div></div>
                        </div>
                 </div>
             </section>

         </div>
     )
 }
 export default StartPage;