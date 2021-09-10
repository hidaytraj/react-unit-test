import { useState } from "react";
import Output from "../output/Output";

const Greeting = () => {

    const [changedText, setChangedText] = useState(false);
    return (
        <>
            <h1>Hello</h1>

            {!changedText && <Output>Its' good to see you</Output>}
            {changedText && <Output>changed</Output>}

            <button onClick={() => setChangedText(true)}>Change Text !</button>
        </>
    );
}

export default Greeting;