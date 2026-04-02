import "../styles/Button.css";

interface ButtonProps {
    buttonText: string;
}

function Button({
    buttonText
}: ButtonProps) {
    return(
        <button className="button">{buttonText}</button>
    );
}

export default Button;