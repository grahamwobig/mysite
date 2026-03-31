import { useEffect, useState } from "react";
import "../styles/FadingTypewriter.css";

interface FadingTypewriterProps {
    strings: string[]; //strings to type out
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
    //TODO: possible future improvement to not cram the svg paths into the typewriter implementation
    const iconPaths = [
        "M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z",
        "m234-480-12-60q-12-5-22.5-10.5T178-564l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T222-820l12-60h80l12 60q12 5 22.5 10.5T370-796l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T326-540l-12 60h-80Zm96.5-143.5Q354-647 354-680t-23.5-56.5Q307-760 274-760t-56.5 23.5Q194-713 194-680t23.5 56.5Q241-600 274-600t56.5-23.5ZM592-40l-18-84q-17-6-31.5-14.5T514-158l-80 26-56-96 64-56q-2-18-2-36t2-36l-64-56 56-96 80 26q14-11 28.5-19.5T574-516l18-84h112l18 84q17 6 31.5 14.5T782-482l80-26 56 96-64 56q2 18 2 36t-2 36l64 56-56 96-80-26q-14 11-28.5 19.5T722-124l-18 84H592Zm56-160q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z",
        "M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z",
        "M609-389q-29-29-29-71t29-71q29-29 71-29t71 29q29 29 29 71t-29 71q-29 29-71 29t-71-29ZM480-160v-56q0-24 12.5-44.5T528-290q36-15 74.5-22.5T680-320q39 0 77.5 7.5T832-290q23 9 35.5 29.5T880-216v56H480ZM287-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm113-113ZM80-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q35 0 70 6t70 14l-34 34-34 34q-18-5-36-6.5t-36-1.5q-58 0-113.5 14T180-306q-10 5-15 14t-5 20v32h240v80H80Zm320-80Zm56.5-343.5Q480-607 480-640t-23.5-56.5Q433-720 400-720t-56.5 23.5Q320-673 320-640t23.5 56.5Q367-560 400-560t56.5-23.5Z"
    ];
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

    //<span className={`material-symbols-outlined ${fadeCursor ? 'fade': ''}`}>{displayIcon}</span>
    return (
        <span className={`typewriter-text ${fadeText ? 'fade': ''}`}>
            {displayText}{" "}
            <svg className={`typewriter-icon ${fadeCursor ? 'fade': ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d={`${iconPaths[currentStringIndex]}`}/>
            </svg>
        </span>     
    );
}

export default FadingTypewriter;