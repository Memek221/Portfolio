import React, { useRef } from "react"
import useOnScreen from "../Hooks/useOnScreen";

export default function Home(props){

    const homeRef = useRef(null);
    const isVisible = useOnScreen(homeRef);
    
    if(isVisible){
        props.setVisibleSection(homeRef);  
    }

    return(
        <section ref={homeRef} className="home" style={{backgroundColor: 'red', scrollMarginTop: '8.4rem', height: "100vh"}}>
            Home section
        </section>
    )
}