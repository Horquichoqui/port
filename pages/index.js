import { div } from "prelude-ls";
import { useState } from "react";
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [number, addNumber] = useState(1);
    function sumNumber(number) {
        addNumber(number + 1);
    }
    return (
        <div>
            <h1>Contador: {number}</h1>
            <button onClick={() => sumNumber(number)}>Add more one</button>
        </div>
    );
}

export default Home;