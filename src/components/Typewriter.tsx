import { useEffect, useState, useMemo } from "react";

interface TypewriterProps {
    strings: string[];
    delay: number;
    backspaceDelay?: number;
}

function Typewriter({ strings, delay, backspaceDelay }: TypewriterProps) {
    console.log(`Strings Length: ${strings.length}`);
    const [currentText, setCurrentText] = useState('');
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentString, setCurrentString] = useState(strings[0]);
    const calculateDisplayText = (stringIdx: number, charIdx: number): string => {
        console.log(`String Index: ${stringIdx}`);
        console.log(`Character Index: ${charIdx}`);
        return strings[stringIdx].slice(0, charIdx);
    }
    const displayText = useMemo(() => calculateDisplayText(currentStringIndex, currentCharIndex), [currentStringIndex, currentCharIndex]);

    useEffect(() => {
        let timeoutId: number;
        if (currentCharIndex == strings[currentStringIndex].length) {
            setCurrentCharIndex(0);
            setCurrentStringIndex(prevIndex => prevIndex + 1);
        }
        if (currentStringIndex == strings.length) {
            setCurrentStringIndex(0);
            console.log("")
        }

        timeoutId = setTimeout(() => {
            setCurrentCharIndex(prevIndex => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [strings, delay, currentCharIndex, currentStringIndex]);

    return <span className="typewriter">{displayText}</span>;
}

export default Typewriter;