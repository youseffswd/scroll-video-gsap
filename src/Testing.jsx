import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testing = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".box1",
            { x: -200, opacity: 0 },
            {
                x: 200,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".box1",
                    start: "top 80%",
                    end: "top 20%",
                    // scrub: 1,
                    markers: true,
                },
            }
        );
        gsap.fromTo(
            ".box2",
            { x: -200, opacity: 0 },
            {
                x: 200,
                rotate: 360,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".box2",
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                    pin:true,
                    markers: true,
                    toggleActions: "play pause resume reset"
                },
            }
        );
        gsap.fromTo(
            ".box3",
            { x: -200, opacity: 0 },
            {
                x: 200,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".box3",
                    start: "top 80%",
                    end: "top 20%",
                    // scrub: 1,
                    markers: true,
                },
            }
        );
    });
    return (
        <>
            <div className="bg-blue-500 h-screen flex items-center justify-center">
                <div className="box1 h-20 w-20 rounded bg-white">BOX 1</div>
            </div>
            <div className="bg-violet-500 h-screen flex items-center justify-center">
                <div className="box2 h-20 w-20 rounded bg-white">BOX 2</div>
            </div>
            <div className="bg-yellow-500 h-screen flex items-center justify-center">
                <div className="box3 h-20 w-20 rounded bg-white">BOX 3</div>
            </div>
        </>
    );
}

export default Testing