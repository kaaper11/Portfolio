import React, {useState} from "react";

const appArtment = () => {

    const [photo, setPhoto] = useState(1);


    const photos = ["./public/photos/a1.png", "./public/photos/a2.png" ];

    const handlePhotoPlus = () => {
        console.log(photo);
        photo === 2 ? setPhoto(1) :
                setPhoto(photo+1)

        console.log(photo)

    }
    const handlePhotoMinus = () => {
        console.log(photo);
        photo === 1 ? setPhoto(2) :
        setPhoto(photo-1);

        console.log(photo)
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
                    <p className={"text-8xl font-bold text-gray-500"}>APPARTMENT</p>
                </div>

                <div className={"flex items-center justify-center pt-10"}>
                    <div className={"relative"}>
                        <img src={photos[photo-1]}/>
                        <button className={"absolute top-60 left-4 cursor-pointer"} onClick={handlePhotoMinus}> <img src={"./public/photos/next.png"}/></button>
                        <button className={"absolute top-60 right-4 cursor-pointer"} onClick={handlePhotoPlus}><img className={"rotate-180"} src={"./public/photos/next.png"}/></button>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default appArtment;