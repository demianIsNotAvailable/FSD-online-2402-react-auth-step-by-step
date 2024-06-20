import { useState } from "react"
import "./CustomInput.css"

export function CustomInput ({type, name, placeholder, value, onChange}) {
    const [focused, setFocused] = useState(false)

    return (
        <input 
            className={`custom-input ${focused ? 'focused' : ''}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        />
    )
}