import React from "react";
import { useRef } from "react";
import useOnScreen from "../Hooks/useOnScreen";

export default function Contact(props){
    const contactRef = useRef(null);
    const isVisible = useOnScreen(contactRef);
    
    if(isVisible){
        props.setVisibleSection(contactRef);  
    }

    return(
        <section ref={contactRef} className="contact" style={{height: "100vh", backgroundColor: "yellow"}}>
            Contact section
        </section>
    )
}