import { useEffect, useState } from "react"

export function Hooks() {
 const [selectedButton, setSelectButton] = useState();
 const [count, setCount] = useState(0);

 useEffect(() => {
    if (selectedButton) { setCount((count) => count + 1)}
 }, [selectedButton])
 return (
<div className="countButton">
    <button onClick={() => setSelectButton(1)}>1</button>
    <button onClick={() => setSelectButton(2)}>2</button>
    <button onClick={() => setSelectButton(3)}>3</button>

    <p>selectedButton: {selectedButton}</p>
    <p>count: {count}</p>
    </div>
 );
}