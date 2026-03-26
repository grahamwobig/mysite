import { useEffect, useState } from "react";
import "../styles/FadingTypewriter.css";

interface FadingTypewriterProps {
    strings: string[];
    typeDelay: number; //how fast to type out chars
    stringDelay: number; //how fast to change to next string
    cursorFade: number; //how long until cursor should fade
    textFade: number; //how long until text should fade
}

function FadingTypewriter({ 
    strings, 
    typeDelay, 
    stringDelay,
    cursorFade,
    textFade
}: FadingTypewriterProps) {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [fadeCursor, setFadeCursor] = useState(false);
    const [fadeText, setFadeText] = useState(false );
    const typingEffect = (
        text: string,
        delay: number
    ) => {
        const [currentCharIndex, setCurrentCharIndex] = useState(0);

        //When the text is changed, reset our character index to zero
        useEffect(() => {
            setCurrentCharIndex(0);
        }, [text]);

        //setup hook to print characters of text until we reach end
        useEffect(() => {
            if (currentCharIndex == text.length) {
                return;
            }

            const intervalId = setTimeout(() => {
                setCurrentCharIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => {
                clearTimeout(intervalId);
            };
        }, [currentCharIndex]);

        return text.slice(0, currentCharIndex);
    }

    const displayText = typingEffect(
        strings[currentStringIndex],
        typeDelay
    );
    const timeToType = strings[currentStringIndex].length * typeDelay;

    //setup text fade, switch to next string and text fade
    useEffect(() => {
        //fade the cursor after
        const cursorFadeId = setTimeout(() => {
            setFadeCursor(true);
        }, timeToType + cursorFade)

        const textTimeoutId = setTimeout(() => {
            setFadeText(true);
            
            setTimeout(() => {
                setCurrentStringIndex(prevIndex => 
                    prevIndex == strings.length - 1 ? 0 : prevIndex + 1
                );
                setFadeCursor(false);
                setFadeText(false);
            }, textFade);
        }, stringDelay);

        return () => {
            clearTimeout(cursorFadeId);
            clearTimeout(textTimeoutId);
        }
    }, [currentStringIndex]); 

    return (
        <span className={`typewriter-text ${fadeText ? 'fade': ''}`}>
            {displayText}{" "}
            <div className={`typwriter-cursor ${fadeCursor ? 'fade': ''}`}></div>
        </span>
    );
}

export default FadingTypewriter;