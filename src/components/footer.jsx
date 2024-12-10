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
                            <img src="/src/assets/instagram-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/src/assets/facebook-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/src/assets/twitter-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/src/assets/linkedin-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                        <a>
                            <img src="/src/assets/youtube-dark.svg" style={{height:"20px",width:"20px"}} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}