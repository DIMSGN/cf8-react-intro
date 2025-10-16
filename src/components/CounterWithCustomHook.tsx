import CounterButton from "./CounterButton.tsx";
import {useCounter} from "../Hooks/useCounter.ts";

const CounterWithCustomHook = () => {

    const {count, lastAction, time, increase, decrease, reset} = useCounter();
    return (
        <>
            <h1 className="text-center text-2xl my-12">Count is <strong>{count}</strong></h1>

            <div className="text-center space-x-4">

                <CounterButton onClick={increase}
                               label={"Increase"}
                />

                <CounterButton onClick={decrease}
                               label={"Decrease"}
                               disabled={count === 0}
                />
                <CounterButton onClick={reset}
                               label={"Reset"}
                               disabled={count === 0}
                               addClass={"bg-cf-dark-red disabled:bg-red-500"}
                />
            </div>
            <div className="text-center text-cf-gray pt-8">
                <p>Last Change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
            </div>
        </>
    )
}

export default CounterWithCustomHook;