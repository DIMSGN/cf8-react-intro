import {useState} from "react";

const FunctionalComponentWithState = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1 className="text-center my-16">Count is <strong>{count}</strong></h1>
            <div className="text-center">
                <button className="bg-cf-dark-red text-white px-4 py-2 rounded"
                onClick={increaseCount}>
                    Increase
                </button>
            </div>
        </>
    )
}

export default FunctionalComponentWithState;