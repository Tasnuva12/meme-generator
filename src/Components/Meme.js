import React from "react";
import memesData from "../memesData";
import { useState } from "react";
export default function Meme() {
 // const [memeImage, setmemeImage] = useState("https://i.imgflip.com/1bh3.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage:"https://i.imgflip.com/1bh3.jpg",
  });

  const [allMeme,setAllMeme]=useState([]);
 
  React.useEffect(()=>{
   fetch("https://api.imgflip.com/get_memes")
   .then(res=>res.json())
   .then(data=> setAllMeme(data.data.memes))
  },[])


  function getMemeImage(e) {
    e.preventDefault();

   
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    console.log(url);
    setMeme(prevMeme=>(
      {
        ...prevMeme,
        randomImage:url

      }
    )

    );
  }

  function handleChange(event){
     const {name,value}=event.target
     setMeme(prevMeme=>({
      ...prevMeme,
      [name]:value
     }))
  }

  return (
    <main>
      <div className="form">
        
          <input
            type="text"
            className="form--input"
            placeholder="Enter Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
      
        
          <input
            type="text"
            className="form--input"
            placeholder="Enter Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
