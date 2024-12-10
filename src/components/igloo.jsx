import "./igloo.css"
export default function Igloo(){
    return(
        <div className="discover flex justify-center flex-col" id="igloo">
            <div className="grid grid-cols-12 xl:my-10 mb-3">
                <div className="col-span-3"></div>
                <div className="col-span-9 rounded-s-full flex flex-row items-center" style={{backgroundColor:"#341A84"}}>
                    <h1 className="ps-5 ms-5 text-white p-5 rounded-s-full xl:text-5xl text-4xl">
                        Discover Igloo - <span style={{color:"#f68826"}}>Genius Are Here !</span>
                    </h1>
                    <img src="/src/assets/star-1.png" style={{height:"65px"}}></img>
                </div>
            </div>
            <div className="grid grid-cols-12 my-7 lg:w-11/12 xl:w-11/12 2xl:w-10/12">
                <div className="col-span-4 row-span-4">
                    <img src="src/assets/boy.png" className="object-fill w-auto h-full" ></img>
                </div>
                <div className="col-span-4 flex flex-row">
                    <div className="mt-5">
                        <h1 className="text-xl rounded-full px-5 py-3.5 text-white" style={{backgroundColor:"#341A84"}}>1.</h1>
                    </div>
                    <div className="my-5" style={{color:"#f68826"}}>
                        <h1 className="xl:text-4xl text-3xl ps-5 font-bold">Ideal Space for Study</h1>
                        <p style={{color: "#341A84"}} className="ps-5 mt-5 xl:text-2xl text-lg leading-5">
                        Explore Igloo's serene study environments, meticulously designed to foster focus and learning.
                        </p>
                    </div>
                </div>
                <div className="col-span-4 flex flex-row">
                    <div className="mt-5">
                        <h1 className="text-xl rounded-full px-5 py-3.5 text-white" style={{backgroundColor:"#341A84"}}>2.</h1>
                    </div>
                    <div className="my-5" style={{color:"#f68826"}}>
                        <h1 className="xl:text-4xl text-3xl ps-5  font-bold">Resource Library</h1>
                        <p style={{color: "#341A84"}} className="ps-5 pt-3 xl:text-2xl text-lg leading-5">
                        Dive into our comprehensive digital library at Igloo, offering a wealth of academic resources. Whether you're researching, learning, or exploring new ideas.
                        </p>
                    </div>
                </div>
                <div className="col-start-5 col-span-8">
                    <img src="src/assets/artwork-1.png" className="" style={{width:"100%"}}></img>
                </div>
                <div className="col-span-4 flex flex-row">
                    <div className="mt-5">
                        <h1 className="text-xl rounded-full px-5 py-3.5 text-white" style={{backgroundColor:"#341A84"}}>3.</h1>
                    </div>
                    <div className="my-5" style={{color:"#f68826"}}>
                        <h1 className="xl:text-4xl text-3xl ps-5 font-bold">Counselling Session</h1>
                        <p style={{color: "#341A84"}} className="ps-5 pt-3 xl:text-2xl text-lg leading-5">
                        Benefit from Igloo's personalized counseling sessions. Our expert counselors are dedicated to helping you navigate your academic journey and personal growth.
                        </p>
                    </div>
                </div>
                <div className="col-span-4 flex flex-row">
                    <div className="mt-5">
                        <h1 className="text-xl rounded-full px-5 py-3.5 text-white" style={{backgroundColor:"#341A84"}}>4.</h1>
                    </div>
                    <div className="my-5" style={{color:"#f68826"}}>
                        <h1 className="xl:text-4xl text-3xl ps-5 font-bold">Igloo Club</h1>
                        <p style={{color: "#341A84"}} className="ps-5 pt-3 xl:text-2xl text-lg leading-5">
                        Become a part of the Igloo Club community, a dynamic network focused on mentorship, part of social development, and meaningful impact.
                        </p>
                    </div>
                </div>
                <img src="src/assets/artwork-2.png" className="col-span-8"></img>
            </div>
            <div className="explore-container mt-8" id="explore">
                <div className="xl:container lg:container mx-auto grid grid-cols-12 grid-rows-4 mb-8">
                    <div className="col-span-7 w-full">
                        <div className=" w-1/2 absolute p-5 xl:py-10 py-7 rounded-e-full xl:text-5xl sm:text-4xl" style={{backgroundColor:"#341A84",color:"#341A84",left:"-20px",zIndex:-1}}>Hey</div>
                        <div className="flex flex-row container bg-purple-900 rounded-e-full"  style={{backgroundColor:"#341A84"}}>
                            <img className="relative -left-14 xl:p-5 p-3" src="/src/assets/star-1.png"></img>
                            <h1 className="relative -left-16 xl:py-10 py-7 font-bold text-white p-5 ps-0 rounded-e-full xl:text-5xl sm:text-4xl">
                                Explore Our Franchise 
                            </h1>
                        </div>
                    </div>
                    <div className="col-span-5 row-span-4">
                        <img className="ps-10" src="/src/assets/explore-img.png" style={{height:"auto",width:"100%"}}></img>
                    </div>
                    <div className="col-span-7 xl:mt-10 mt-5">
                        <h1 className="font-bold p-3 pe-0 rounded-e-full xl:text-3xl sm:text-2xl border border-4 border-gray-300 w-full w-11/12 bg-white" style={{color:"#f68826"}}>
                            Turn <span style={{color: "#341A84"}}>`2-7 </span> lac into <span style={{color: "#341A84"}}>`40-90 </span> Lacs Annually! 
                        </h1>
                    </div>
                    <div className="col-span-7 xl:mt-10 mt-5">
                        <p className="font-bold p-3 rounded-e-full xl:text-3xl sm:text-2xl border border-4 border-gray-300 xl:w-4/6 sm:w-9/12 bg-white" style={{color:"#f68826"}}>
                                Fast Returns in <span style={{color: "#341A84"}}>2-3 Months.</span>
                        </p>
                    </div>
                    <div className="col-span-7 flex flex-row items-center">
                        <h1 className="xl:text-2xl text-lg font-bold" style={{color: "#341A84"}}>Your Gateway to Prosperity.</h1>
                        <div className="">
                            <div className="ms-4 text-white xl:text-2xl text-xl p-3 rounded-full font-bold flex flex-row" style={{backgroundColor:"#f68826"}}>
                                <img src="src/assets/call.svg" style={{height:"27px"}}></img>
                                <h1 className="ms-3">+91 880 041 5189</h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:container lg:container mx-auto grid grid-cols-12 gap-3 py-6 mb-6">
                    <div className="grid grid-cols-subgrid col-span-6">
                        <div className="xl:col-span-1 col-span-2 flex xl:mt-3 mt-5 flex justify-center">
                            <img className="object-contain" src="src/assets/icon-1.png" style={{height:"100px",width:"100px"}}></img>
                        </div>
                        <div className="xl:col-span-5 col-span-4 text-orange-500 my-3">
                            <h1 className="xl:ps-5 xl:text-3xl text-xl font-bold" style={{color: "#341A84"}}>MARKET POTENTIAL</h1>
                            <p className="xl:ps-5 mt-3 xl:text-xl text-md text-black">
                                Step into the rapidly growing educational sector with Igloo. Our unique focus on mindful self-study places us at the forefront of a burgeoning market.
                            </p>
                        </div>
                    </div>                               
                    <div className="grid grid-cols-subgrid col-span-6">
                        <div className="xl:col-span-1 col-span-2 flex xl:mt-3 mt-5 flex justify-center">
                            <img className="object-contain" src="src/assets/icon-2.png" style={{height:"100px",width:"100px"}}></img>
                        </div>
                        <div className="xl:col-span-5 col-span-4 text-orange-500 my-3">
                            <h1 className="xl:ps-5 xl:text-3xl text-xl font-bold" style={{color: "#341A84"}}>INVESTMENT AND RETURNS</h1>
                            <p className="xl:ps-5 mt-3 xl:text-xl text-md text-black">
                            With an investment as modest as 2-7 lakhs, embark on a profitable entrepreneurial journey. Our robust business model is tailored for quick returns, aiming for an ROI within just 2-4months.
                            </p>
                        </div>
                    </div> 
                    <div className="grid grid-cols-subgrid col-span-6">
                        <div className="xl:col-span-1 col-span-2 flex xl:mt-3 mt-5 flex justify-center">
                            <img className="object-contain" src="src/assets/icon-3.png" style={{height:"100px",width:"100px"}}></img>
                        </div>
                        <div className="xl:col-span-5 col-span-4 text-orange-500 my-3">
                            <h1 className="xl:ps-5 xl:text-3xl text-xl font-bold" style={{color: "#341A84"}}>REVENUE OPPORTUNITIES</h1>
                            <p className="xl:ps-5 mt-3 xl:text-xl text-md text-black">
                            As an Igloo franchise owner, tap into the potential to earn between ₹40-90 lakhs annually. Our diverse revenue streams and proven business strategies position you for success in the lucrative field of education.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-subgrid col-span-6">
                        <div className="xl:col-span-1 col-span-2 flex xl:mt-3 mt-5 flex justify-center">
                            <img className="object-contain" src="src/assets/icon-4.png" style={{height:"100px",width:"100px"}}></img>
                        </div>
                        <div className="xl:col-span-5 col-span-4 text-orange-500 my-3">
                            <h1 className="xl:ps-5 xl:text-3xl text-xl font-bold" style={{color: "#341A84"}}>FRANCHISE SUPPORT</h1>
                            <p className="xl:ps-5 mt-3 xl:text-xl text-md text-black">
                            Joining the Igloo family means continuous support in your venture. From comprehensive training to marketing and operational guidance, we ensure you have all the tools and resources to thrive.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="xl:container lg:container mx-auto flex justify-center items-center gap-2 p-6">
                    <img style={{height:"20px"}}  src="/src/assets/double-arrow.png"></img>
                    <p className="xl:text-2xl text-xl font-bold pb-1" style={{color: "#341A84"}}>Take a First Step. Call us at <span style={{color:"#f68826"}}>+91 880 041 5189</span></p>
            </div>
        </div>
    )
}