import { useEffect, useState } from "react";

function Typewriter(strings: string[], delay: number, backspaceDelay: number) {
    const [currentText, setCurrentText] = useState('');
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        let timeout;
        let currentString = strings[currentStringIndex];
        //iterate over the list of strings
        if (currentStringIndex < strings.length) {
            let backspace = false;
            //type out each character in the strings
            if (currentCharIndex < currentText.length && !backspace) {
                timeout = setTimeout(() => {
                    setCurrentCharIndex((prevIndex) => {
                        prevIndex++;
                        if
                        return prevIndex;
                    });
                    setCurrentText(currentString.substring(0, currentCharIndex));
                }, delay);
            }
            else if (currentCharIndex == currentText.length && backspace) {
                timeout = setTimeout(() => {
                    setCurrentCharIndex(prevIndex => prevIndex--);
                    setCurrentText(currentString.substring(0, currentCharIndex));
                })
            }
            //advance to next string
            else {
                setCurrentStringIndex(prevIndex => prevIndex++);
                currentString = strings[currentStringIndex];
            }
        }
        //wrap back to beginning of strings
        else {
            setCurrentStringIndex(0);
        }
        
        return clearTimeout(timeout);
    })

    return <span className="typewriter">{currentText}</span>;
}

export default Typewriter;