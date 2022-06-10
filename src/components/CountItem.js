import { useState } from "react";


const CountItem = () => {

    const [counter, setCounter] = useState(0);

    return (
        <section>
            <div>
                <button onClick={() => setCounter(counter - 1)}> - </button>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter + 1)}> + </button>
            </div>
            <button onClick={() => setCounter(counter - counter)}>restart</button>
        </section>
    );
}

export default CountItem;