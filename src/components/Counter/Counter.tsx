import React, { useState } from "react";
import { Button } from "..";

const Counter = () => {
    const [count, setCount] = useState(0);

    const counterFunction = (inst:string) => {
        if(inst === 'add'){
            setCount( count + 1);
        } else {
            setCount( count - 1);
        }
    }
    return (
        <>
            <p>count = {count}</p>
            <Button onClick={() => counterFunction('add')} label="add"></Button>
            <Button onClick={() => counterFunction('sub')} label="sub"></Button>

        </>
    )
}

export default Counter;