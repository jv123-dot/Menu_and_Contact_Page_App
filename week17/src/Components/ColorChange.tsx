import { useEffect, useState } from "react";
import '../index.css'

export default function ColorChange() {

    const [color, setColor] = useState('background1')

    const click = () => {
        setColor((color === 'background1' ? 'background2' : 'background1'))
    }

    useEffect(() => {
        document.body.className = color;
    }, [color]);

    return (
        <div className="App">
            <button className="btn btn-warning" onClick={click}>Change BG Color</button>
        </div>
    )
}