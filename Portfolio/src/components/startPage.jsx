import React, {useEffect, useState} from "react";


 const StartPage = () => {

     return (
         <div className="container h-500  mx-auto  bg-blue-100 ">
             <nav className="bg-blue-200">
                 <div className="container items-center grid grid-cols-2 gap-4 h-15 text-white text-lg font-sans">
                     <a className="ms-10 w-10" href="/">LOGO</a>
                     <div className="container items-center grid grid-cols-3 gap-4 ms-25 ">
                         <a className="w-25" href='/'>ABOUT ME</a>
                         <a className="w-10">PORTFOLIO</a>
                         <div className="container flex items-center  h-10 w-25 bg-linear-50 from-blue-300 to-blue-500 rounded-lg hover:border-1  hover:border-black hover:cursor-pointer">
                            <a className="w-10 ms-2">CONTACT</a>
                         </div>
                     </div>
                 </div>
             </nav>
             <div className="container grid grid-rows-3 text-center mt-13">
                 <span className="text-5xl font-bold text-gray-500">I'm a</span>
                 <span className="text-7xl mt-2 text-white" style={{ fontFamily: "'Gravitas One', serif;\n" + "  font-weight: 400;\n" + "  font-style: normal;" }}>FUll STACK DEVELOPER</span>
             </div>
         </div>
     )
 }
 export default StartPage;