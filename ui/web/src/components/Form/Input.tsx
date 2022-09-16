import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLElement> {}

export const Input = (props: Props) => {
    return (
        <input
            {...props}
            className="bg-zinc-900 py-4 px-4 rounded text-sm placeholdee:text-zync-500"
        />
    )
} 

