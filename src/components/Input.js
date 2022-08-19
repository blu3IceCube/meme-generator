import React from "react";
import memesData from "../memesData";
import Pic1 from "../images/memeimg.png";

export default function Input() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: Pic1
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : memesArray[randomNum].url
        }))
    }

    return (
        <div className="main">
            <form className="form">
                <input 
                    type="text" 
                    id="top" 
                    name="topText" 
                    placeholder="Top Text"
                    value={meme.topText}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <input 
                    type="text" 
                    id="bottom" 
                    name="bottomText" 
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <input 
                    type="button" 
                    id="newImg" 
                    name="newImg" 
                    value="Get a new meme image" 
                    onClick={getMemeImage}
                />
            </form>
            <div className="meme-container">
                <img className="memeImg" src={meme.randomImage}/>
                <p className="topTxt">{meme.topText}</p>
                <p className="bottomTxt">{meme.bottomText}</p>
            </div>
        </div>
    )
}