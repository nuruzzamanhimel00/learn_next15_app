'use client'; // MUST be first

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Welcome in Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
