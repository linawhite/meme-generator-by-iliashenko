import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        }
    );

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").
        then(response => response.json()).
        then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomMemeIdx = Math.floor(Math.random() * allMemeImages.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages[randomMemeIdx].url
            }
        });
    }

    function handleTextChanges(event) {
        const {name, value} = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }

    return (
        <main>
            <div className="form">
                <div className="inputs">
                    <div className="input-wrapper">
                        <label htmlFor="top-text">Top text</label>
                        <input 
                            name="topText"
                            onChange={handleTextChanges}
                            id="top-text"
                            type="text"
                            placeholder="Shut up" 
                            className="input-text"
                            value={meme.topText}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="bottom-text">Bottom text</label>
                        <input 
                            name="bottomText"
                            onChange={handleTextChanges}
                            id="bottom-text" 
                            type="text" 
                            placeholder="And take my money" 
                            className="input-text"
                            value={meme.bottomText}
                        />
                    </div> 
                </div>
                <button onClick={getMemeImage} type="submit" className="submit-btn">
                    <span>Get a new meme image</span>
                    <img src="./images/framed-picture.png" alt="button" />
                   
                </button>
            </div>
            <div className="meme-wrapper">
                <h1 id="top-text" className="meme-text">{meme.topText}</h1>
                <img src={meme.randomImage} alt="meme" className="meme-image"/>
                <h1 id="bottom-text" className="meme-text">{meme.bottomText}</h1>
            </div>
            
        </main>
    )
}