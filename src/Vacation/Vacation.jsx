import './Vacation.css'
import { useState } from "react"
import img1 from './Bonn.jpg';
import img2 from './Paris.jpg';

export function Vacation () {
 
   
    const [ImageClicked, setImageClicked ] = useState("bonn");
    
     
    const pickedBonn = () => {
        setImageClicked(img1)
    }
    const pickedParis = () => {
        setImageClicked(img2)
    }
    return (
    <div>
        <div className='Vacation-title'>
            <h2>Choose your Destination!</h2> 
        </div>
        <div className='Vac-Button'>
    <button onClick={pickedBonn}>Bonn</button>
    <button onClick={pickedParis}>Paris</button>
        </div>
        <div>
    {ImageClicked && <img src={ImageClicked} alt='Selected Destination' className='Image' />}
        </div>
        </div>
    );
}