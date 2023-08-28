import hexToRgb from "./hexToRgb"
import { useState } from "react"

export default function Hex2rgb() {
    const [rgbValue, setRgbValue] = useState("");

    const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        console.log(value)
        if (value.length >= 7) {
            const rgb = hexToRgb(value)
            if (rgb === null) {
                setRgbValue('Ошибка!')
                return
            }
            document.body.style.backgroundColor = `${value}`;
            setRgbValue(`${rgb}`)
            
        }
    }
    return (
        <form>
            <input 
            className="hex" 
            id="hex" 
            placeholder="Введите HEX"
            onInput={handlerInput}
            defaultValue="#"
            >
            </input>
            <div className="rgb">{rgbValue}</div>
        </form>
    )
}
