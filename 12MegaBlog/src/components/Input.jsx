import { useId } from "react"
import React from "react";

// When you need to pass a ref from a parent component to a 
// child functional component’s DOM node.
const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
}, ref){
    const id = useId();
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1" htmlFor={id}>
                {label}
            </label>
            }
            <input type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
            ref={ref} // For reference value from parent and then pass state access to the parent otherwise the onClick event can't be done
            id={id}
            {...props}
            />
        </div>
    )
})
export default Input