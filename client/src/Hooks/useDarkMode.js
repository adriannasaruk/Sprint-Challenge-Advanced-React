import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [value, setValue] = useState()

    useEffect(() => {
        if (value === true) {
            document.querySelector("body").classList.add("dark-mode")
        }
        else {
            document.querySelector('body').classList.remove("dark-mode");
        }

    }, [value])

    const setTheValue = (value) => {
        setValue (value)
    }
    return [value, setTheValue]
    
}
export default useDarkMode