import React, {useState, useEffect} from 'react'
import '../Meme/Meme.css';


function Meme() {

    // const [memeImage, setMemeImage] = useState('')

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

   

    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    


    
    
    

    function getRandomItem() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)

        const url = allMemes[randomNumber].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
        
    }

    function handleChange(evt){
        const {name, value} = evt.target;
        setMeme({
            ...meme, [name]: value
        })
    }




    

    return (
        <main>
        <div className='formContainer'>
            
                <input 
                className='input' 
                placeholder='Top text'
                name='topText'
                onChange={handleChange}
                value={meme.topText}
                />
                
                
                <input 
                className='input' 
                placeholder='Bottom text'
                name='bottomText'
                onChange={handleChange}
                value={meme.bottomText}
                />
                
                
                <br />
                <button onClick={getRandomItem} className='memeBtn'>Get a new meme image!</button>
            
        </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        
        </main>
    )
}

export default Meme
