export default function Footer(){
    return(
        <div className="flex justify-center flex-col py-5" style={{backgroundColor:"#f68826"}}>
            <div className="xl:container lg:container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        <p className="text-md leading-5 font-bold" style={{color:"#341a84"}}>2024 ©️ Copyright Spherion Solutions Private Limited. All Rights Reserved</p>
                    </div>
                    <div className="col-span-6 flex justify-end flex-row gap-7">
                        <a>
                            <img src="/igloo-clone/assets/instagram-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/igloo-clone/assets/facebook-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/igloo-clone/assets/twitter-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/igloo-clone/assets/linkedin-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/igloo-clone/assets/youtube-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}