import "./pioneering.css"
export default function Pioneering(){
    return(
        <div className="pioneering flex justify-center flex-col py-8">
            <div className="xl:conatiner lg:container mx-auto flex justify-center">
                <h1 className="xl:text-5xl text-4xl font-bold" style={{color:"#f68826"}}>
                    Pioneering Education <span style={{color:"#341a84"}}>with Proven Success</span>
                </h1>
            </div>
            <img src="/src/assets/logo-img.png" className="w-full mt-5"></img>
            <div className="xl:container lg:container mx-auto flex justify-center">
                <p className="text-lg text-center xl:w-10/12 w-9/12 leading-6">
                At the heart of Igloo is a legacy of educational innovation. Our journey began with groundbreaking ventures, each a testament to our commitment to transforming education. These initiatives have laid a strong foundation for what Igloo promises today: a future of learning, growth, and community impact.
                </p>
            </div>
            <div className="xl:container lg:container mx-auto flex justify-center my-10 items-center">
                <img style={{height:"20px"}}  src="/src/assets/double-arrow.png"></img>
                <p style={{color:"#341a84"}}className="xl:text-2xl text-xl font-bold pb-1 ps-2">Take a First Step. Call us at <span style={{color:"#f68826"}}>+91 880 041 5189</span></p>
            </div>
        </div>
    )
}