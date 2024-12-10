import { Link } from "react-router-dom"
import Footer from "./footer"
import Form from "./form"
import "./home.css"
import Igloo from "./igloo"
import Pioneering from "./pioneering"
import Revolution from "./revolution"
export default function Home(){
    const scrollhome=()=>{
        const home=document.getElementById("home")
        home.scrollIntoView({behavior:"smooth"})
    }

    const scrollexplore=()=>{
        const explore=document.getElementById("explore")
        explore.scrollIntoView({behavior:"smooth"})
    }

    const scrollenroll=()=>{
        const enroll=document.getElementById("enroll")
        enroll.scrollIntoView({behavior:"smooth"})
    }

    const scrollsignoff=()=>{
        const signoff=document.getElementById('signoff')
        signoff.scrollIntoView({behavior:"smooth"})
    }

    const scrolligloo=()=>{
        const igloo=document.getElementById("igloo")
        igloo.scrollIntoView({behavior:"smooth"})
    }

    return (
        <div className="main">
            <div className="flex justify-center" style={{backgroundColor:"#341A84"}}>
                <div className="relative container-out xl:container lg:container text-white grid grid-cols-5">
                    <div className="flex col-span-3 m-5 gap-7">
                        <div className="flex flex-row">
                            <img src="src/assets/call.svg"></img>
                            <h1 className="pe-5 ps-2 text-md" style={{color:"#f68826"}}>+91 880 041 5189</h1>
                        </div>
                        <div className="flex flex-row">
                            <img src="src/assets/mail.svg"></img>
                            <h1 className="ps-2" style={{color:"#f68826"}}>hey@igloo.study</h1>
                        </div>
                        
                    </div>
                    <div className="flex col-span-2 m-5 justify-end gap-9">
                        <a>
                            <img src="src/assets/facebook.svg" style={{height:"20px",width:"20px"}}></img>
                        </a>
                        <a>
                            <img src="src/assets/instagram.svg" style={{height:"20px",width:"20px"}}></img>
                        </a>
                        <a>
                            <img src="src/assets/linkedin.svg" style={{height:"20px",width:"20px"}}></img>
                        </a>
                        <a>
                            <img src="src/assets/twitter.svg" style={{height:"20px",width:"20px"}}></img>
                        </a>
                        <a>
                            <img src="src/assets/youtube.svg" style={{height:"20px",width:"20px"}}></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center" id="home">
                    <div className="xl:container lg:container mx-auto">
                        <div className="grid grid-cols-12 text-white">
                            <div className="col-span-2 m-5 ">
                                <a>
                                    <img src="/src/assets/logo.svg"></img>
                                </a>
                            </div>
                            <div className="col-span-10 m-5 justify-end flex gap-12 items-center text-xl">
                                <button onClick={scrollhome}><h1 className="hover:text-orange-400">Home</h1></button>
                                <button onClick={scrolligloo}><h1 className="hover:text-orange-400">Igloo</h1></button>
                                <button onClick={scrollexplore}><h1 className="hover:text-orange-400">Franchise</h1></button>
                                <button onClick={scrollenroll}><h1 className="hover:text-orange-400">Enroll</h1></button>
                                <button onClick={scrollsignoff}><h1 className="border border-white py-2 px-6 hover:bg-white hover:text-black">Sign-off</h1></button>
                            </div>
                        </div>
                    </div> 
            </div>
            <div className="banner flex justify-center">
                <div className="xl:container lg:container mx-auto container-out grid grid-cols-12 flex items-center px-5">
                    <div className="col-span-7 text-white">
                        <div>
                            <h1 className="xl:text-6xl text-5xl mb-5">IDEAL SPACE FOR SELF <br/> STUDY <span style={{color:"#f68826"}}>@ Igloo</span></h1>
                            <h3 className="text-2xl">START YOUR GENIUS JOURNEY AT <br/> IGLOO WITH COMMUNITY</h3>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img className="hero__text" style={{height:"20px"}} src="/src/assets/double-arrow.png"></img>
                            <p className="lg:text-2xl text-xl hero__text font-bold" style={{color:"#341b85"}}>Take a First Step. Call us at <span style={{color:"#f68826"}}>+91 880 041 5189</span></p>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="container">
                            <img src="src/assets/girl-img.png" className="girlImg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute container-out handler">
                <Igloo/>
                <Form/>
                <Pioneering/>
                <Revolution/>
                <Footer/>
            </div>
        </div>
    )
}