import React from "react";
import { useRef } from "react";
import useOnScreen from "../Hooks/useOnScreen";

export default function AboutMe(props){
    const aboutMeRef = useRef(null);
    const isVisible = useOnScreen(aboutMeRef);
    
    if(isVisible){
        props.setVisibleSection(aboutMeRef);  
    }

    return(
        <section ref={aboutMeRef} className="aboutMe" style={{height: "100vh", backgroundColor: "blue"}}>
            Section about me
        </section>
    )
}