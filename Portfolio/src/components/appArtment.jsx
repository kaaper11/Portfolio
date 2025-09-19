import React, {useState} from "react";

const appArtment = () => {

    const [photo, setPhoto] = useState(1);
    const [changing, setChanging] = useState(false);


    const photos = ["./public/photos/a1.png", "./public/photos/a2.png" ];

    const handlePhotoPlus = () => {
        setChanging(true);
        setTimeout(() => {photo === 2 ? setPhoto(1) : setPhoto(photo+1), setChanging(false);}, 400);
    }
    const handlePhotoMinus = () => {
        setChanging(true);
        setTimeout(() => {photo === 1 ? setPhoto(2) : setPhoto(photo-1), setChanging(false);}, 400);
    }

    return (
        <div className=" container mx-auto bg-blue-100 h-1500">
            <nav className={"bg-blue-200 h-15 flex items-center justify-between px-4 "}>

                    <a className="" href="/">
                        <img src={"./public/photos/logo.png"}/>
                    </a>

            </nav>

            <section className={"mt-20"}>
                <div className={"flex items-center justify-center"}>
                    <h1 className={"text-8xl font-bold text-gray-500"}>APPARTMENT</h1>
                </div>

                <div className={"flex items-center justify-center pt-10"}>
                    <div className={"relative overflow-hidden"}>
                        <img className={changing === true ? " absolute h-120 w-250 transform translate-x-full opacity-0 transition-all duration-500 ease-in-out z-0" : "  h-120 w-250 transform translate-x-0 opacity-100 transition-all duration-500 ease-in-out z-10 "} src={photos[photo-1]}/>
                        <img className={changing === true ? " h-120 w-250 transform translate-x-0 opacity-100 transition-all duration-500 ease-in-out z-10" : "absolute h-120 w-250 transform translate-x-full opacity-0 transition-all duration-500 ease-in-out z-0"} src={photos[photo-1]}/>
                        <button className={"absolute top-60 left-4 cursor-pointer"} onClick={handlePhotoMinus}> <img className={"rotate-180 "} src={"./public/photos/next.png"}/></button>
                        <button className={"absolute top-60 right-4 cursor-pointer"} onClick={handlePhotoPlus}><img className={""} src={"./public/photos/next.png"}/></button>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default appArtment;