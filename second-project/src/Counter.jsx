import { useState } from "react"

export default function Counter() {

    const [count, setcounter] = useState(0); /* here setcounter is a function which take useState's argument as it's own argument and return the value of count variable*/ 

    function handleIncrease() {
        const newCount =  count + 1;
        setcounter(newCount); /*here setcounter taking argument from newCount. initially it took argument from useState */
    }

    function handleDecrase() {
       if (count > 0) {
        const newCount = count - 1;
        setcounter(newCount);
       }
    }
    return (
        <div style={{border:'2px solid salmon'}}>
            <h1>Counter: {count} </h1>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrase}>decrease</button>
        </div>
    )
}