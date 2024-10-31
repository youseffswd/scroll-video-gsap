import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
// import Testing from "./Testing";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
    const [duration,setDuration] = useState(0);
    const videoRef = useRef(null);
    useGSAP(() => {
        // console.log(duration)
        if(duration){
            console.log("duration",duration);
            // videoRef.current.currentTime = 0;
            gsap.fromTo(
                ".video",
                { currentTime:0 },
                {
                    currentTime:duration,
                    ease:"none",
                    // duration: 1,
                    scrollTrigger: {
                        trigger: ".video",
                        start: "top top",
                        end: "+=200%",
                        scrub: .5,
                        pin:true,
                        // pinSpacing:false,
                        anticipatePin: 2,
                        markers: true,
                    },
                }
            );
        }
    },[duration]);
    return (
        <div className="bg-blue-500 overflow-hidden" key={duration}>
            <video ref={videoRef} onLoadedMetadata={e => setDuration(e.target.duration)} src="/Watermelon.mp4" className="video min-h-screen object-cover" />
            <div className="absolute top-0 h-[300vh] w-full z-50 flex flex-col items-center">
                <div className="w-fit h-[100vh] flex items-center">
                    <div className="border-2 border-red-700 translate-x-[-200px] bg-white rounded p-5">
                        <h1>Hello Wael</h1>
                    </div>
                </div>
                <div className="w-fit h-[100vh] flex items-center">
                    <div className="border-2 border-red-700 translate-x-[-200px] bg-white rounded p-5">
                        <h1>I hope You Like it</h1>
                    </div>
                </div>
                <div className="w-fit h-[100vh] flex items-center">
                    <div className="border-2 border-red-700 translate-x-[-200px] bg-white rounded p-5">
                        <h1>Bye</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
