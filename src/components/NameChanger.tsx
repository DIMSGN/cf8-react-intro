import {useState} from "react";
import * as React from "react";


const NameChanger = () => {
    const [name, setName] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    return (
        <>
            <h1 className="text-center text-2xl ">Hello, {name || "Stranger"}</h1>
            <div className="text-center">
                <input
                    type="text"
                    value={name}
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded-md px-4 py-2 "
                    onChange={handleChange}/>
            </div>
        </>
    )
}

export default NameChanger;