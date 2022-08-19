import React from "react";
import Header from "./Header";
import Input from "./Input";
// import Meme from "./Meme";

export default function MemeCard() {
    return (
        <div className="meme-card">
            <Header/>
            <Input/>
            {/* <Meme/> */}
        </div>
    )
}