import { useState, useEffect } from "react";
import { useRef } from "react";

const Input = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [isRequired, setIsRequired] = useState("");
    const {
        id,
        wrapperClassName = "",
        regex,
        textArea,
        placeholder = "",
        label = "",
        type = "text",
        error = false,
        errorText = "",
        required,
        rows = "5",
        lastOne,
        ...rest
    } = props;

    const inputRef = useRef();

    useEffect(() => {
        required && setIsRequired("required");
    }, [required]);

    function checkValue(value) {
        let regX = /[^a-zA-Z\u00C0-\u024F ]/;
        //Regex to check special characters
        if (!regX.test(value)) {
            setInputValue(value);
        }
    }

    function resetValue() {
        setTimeout(() => setInputValue(""), 200);
    }

    return (
        <div className={`m-2 ${wrapperClassName}`}>
            <div
                className={`border-4 bg-white rounded-md transition duration-500 ease-in-out ${
                    error ? "focus-within:border-red-600 border-red-600" : "focus-within:border-green-500 border-gray-500"
                }`}
                onClick={() => inputRef.current.focus()}
            >
                <label htmlFor={id} className="text-sm blackops text-black font-light placeholder-gray-400 px-2 pt-1.5">
                    {label} {required && <span className="text-red-600">*</span>}
                </label>
                {textArea ? (
                    <textarea
                        rows={rows}
                        required={isRequired}
                        name={label}
                        value={inputValue}
                        onChange={(e) => (regex ? checkValue(e.target.value) : setInputValue(e.target.value))}
                        ref={inputRef}
                        className="w-full px-2 pb-1.5 text-gray-900 outline-none text-base font-light rounded-md blackops"
                        id={id}
                        placeholder={placeholder}
                        {...rest}
                    />
                ) : (
                    <input
                        value={inputValue}
                        required={isRequired}
                        name={label}
                        onChange={(e) => (regex ? checkValue(e.target.value) : setInputValue(e.target.value))}
                        ref={inputRef}
                        type={type}
                        className="w-full px-2 pb-1.5 text-gray-900 outline-none text-base font-light rounded-md blackops"
                        id={id}
                        placeholder={placeholder}
                        {...rest}
                    />
                )}
            </div>
            {errorText && <p className="text-xs pl-2 text-red-600 mb-4">{errorText}</p>}
            {lastOne && (
                <div className="flex flex-col p-4 bg-black">
                    <button
                        onClick={() => {
                            resetValue();
                        }}
                        className="w-full px-3 py-4 text-white border-2 border-red-500 bg-red-700 rounded-md focus:bg-red-800 focus:outline-none blackops"
                        type="submit"
                    >
                        ENVOYER
                    </button>
                </div>
            )}
        </div>
    );
};

export default Input;
