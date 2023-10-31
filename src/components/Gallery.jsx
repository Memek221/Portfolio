import React from "react";
import { useRef } from "react";
import useOnScreen from "../Hooks/useOnScreen";

export default function Gallery(props){
    const galleryRef = useRef(null);
    const isVisible = useOnScreen(galleryRef);
    
    if(isVisible){
        props.setVisibleSection(galleryRef);  
    }
    
    return(
        <section ref={galleryRef} className="gallery" style={{height: "100vh", backgroundColor: "green"}}>
            Gallery section
        </section>
    )
}