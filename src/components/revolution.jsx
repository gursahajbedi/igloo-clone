import "./revolution.css"

export default function Revolution(){
    return(
        <div className="revolution flex justify-center flex-col py-10" id="signoff">
            <div className="xl:container lg:container mx-auto flex justify-center flex-col xl:text-5xl text-4xl text-white">
                <h1 className="text-center py-3.5 font-bold">
                    Join The Igloo Revolution - <span style={{color:"#f68826"}}>Be The Change!</span>
                </h1>
                <p className="xl:text-xl text-lg text-center pb-7 font-bold">
                Are you ready to take the leap and be part of something truly revolutionary?
                </p>
                <img src="/src/assets/loc-boy.png"></img>
            </div>
        </div>
    )
}