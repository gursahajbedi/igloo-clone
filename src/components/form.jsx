import "./form.css"
export default function Form(){
    return(
        <>
            <div className="flex justify-center flex-col mb-10" id="enroll">
                <div className="">
                    <div className="xl:container lg:container mx-auto p-7 ps-5">
                        <div className="grid grid-cols-2 grid-rows-2">
                            <div className="p-5 ps-3" style={{color: "#341A84"}}>
                                <h1 className="xl:text-4xl text-3xl">DISCOVER MORE</h1>
                                <h3 className="xl:text-3xl text-2xl">Join the Igloo Family Today!</h3>
                                <h3 className="xl:text-3xl text-2xl" style={{color:"#f68826"}}>Just say <span style={{color: "#341A84"}}>'Yes'</span> and we do the <span style={{color: "#341A84"}}>'Rest'</span></h3>
                                <p className="xl:text-xl text lg mt-3">
                                    Embrace the chance to lead in the revolution of learning and personal growth. As an Igloo
                                    franchise owner, you're not just starting a business; you're igniting a movement. All it
                                    takes is your 'Yes' to begin this
                                    transformative journey.
                                </p>
                            </div>
                            <div className="row-span-2 col-span-1">
                                <div className="rounded-3xl p-10 contact border border-2">
                                    <h1 className=" xl:text-3xl text-2xl font-bold" style={{color: "#341A84"}}>
                                        Become a Franchise!
                                    </h1>
                                    <div className="mt-3 w-3/6 h-2 rounded-full" style={{backgroundColor:"#f68826"}}></div>
                                    <form className="p-2 mt-3">
                                        <div className="mt-5">
                                            <input className="w-full p-4 rounded-3xl border  border-gray-300 placeholder-black" type="text" placeholder="Name"></input>
                                        </div>                                    
                                        <div className="mt-5">
                                            <input className="w-full p-4 rounded-3xl border  border-gray-300 placeholder-black" type="text" placeholder="Phone"></input>
                                        </div>
                                        <div className="mt-5">
                                            <input className="w-full p-4 rounded-3xl border border-gray-300 placeholder-black" type="text" placeholder="Email"></input>
                                        </div>
                                        <div className="mt-5">
                                            <input className="w-full p-4 rounded-3xl border border-gray-300 placeholder-black" type="text" placeholder="Andaman & Nicobar Islands"></input>
                                        </div>
                                        <div className="mt-5 flex justify-center w-full">
                                            <button className="transition ease-in bg-orange-400 hover:bg-white w-5/12 py-2.5 rounded-full text-white hover:text-orange-400 font-bold text-lg">Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div>
                            <img className="absolute w-6/12 object-contain -left-20" src="/src/assets/img-arrow.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}