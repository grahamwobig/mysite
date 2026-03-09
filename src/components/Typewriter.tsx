import { useEffect, useState } from "react";

interface TypewriterProps {
    strings: string[];
    delay: number;
    backspaceDelay?: number;
}

function Typewriter({ strings, delay, backspaceDelay }: TypewriterProps) {
    const [currentText, setCurrentText] = useState('');
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentString, setCurrentString] = useState(strings[0]);
    //const [backspace, setBackspace] = useState(false);

    // const typingAnimation = (): number | undefined => {
    //     let timeout;
    //     //typing out the current string
    //     if (currentCharIndex < currentString.length && !backspace) {
    //         timeout = setTimeout(() => {
    //             setCurrentText(currentString.substring(0, currentCharIndex));
    //             setCurrentCharIndex(prevIndex => prevIndex++);
    //         }, delay);
    //     }
    //     //pause after fully typing out the current string
    //     else if (currentCharIndex == currentString.length && !backspace) {
    //         timeout = setTimeout(() => {
    //             setCurrentText(currentString);
    //             setCurrentCharIndex(prevIndex => prevIndex--);
    //         }, backspaceDelay);
    //         setBackspace(true);
    //     }
    //     //backspacing the current string
    //     else if (currentCharIndex > 0 && backspace) {
    //         timeout = setTimeout(() => {
    //             setCurrentText(currentString.substring(0, currentCharIndex));
    //             setCurrentCharIndex(prevIndex => prevIndex--);
    //         }, delay);
    //     }
    //     //fully backspaced the current string
    //     else if (currentCharIndex == 0 && backspace) {
    //         timeout = setTimeout(() => {
    //             setCurrentText('');
    //             setCurrent
    //         }, delay);
    //         setCurrentStringIndex(prevIndex => prevIndex++);
    //         setCurrentString(strings[currentStringIndex]);
    //     }
    //     return timeout;
    // }

    useEffect(() => {
        let timeout;
        //iterate over the list of strings
        if (currentStringIndex <= strings.length) {
            if (currentCharIndex <= currentString.length) {
                timeout = setTimeout(() => {
                    setCurrentText(currentString.substring(0, currentCharIndex));
                    setCurrentCharIndex(prevIndex => prevIndex++);
                }, delay);
            }
            else {
                setCurrentStringIndex(prevIndex => prevIndex++);
                setCurrentString(strings[currentStringIndex]);
                setCurrentCharIndex(0);
                setCurrentText('');
            }
        }
        //wrap back to beginning of strings
        else {
            setCurrentStringIndex(0);
        }
        
        return clearTimeout(timeout);
    }, [strings, delay, currentString, currentStringIndex, currentText, currentCharIndex]);

    return <span className="typewriter">{currentText}</span>;
}

export default Typewriter;