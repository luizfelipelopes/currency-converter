import type { MouseEventHandler } from "react";

interface ButtonProps {
    title: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}


export function Button({ title, handleClick }: ButtonProps) {
    return (
        <button className='convert-btn
            w-full
            p-5
            border-none
            rounded-xl
            text-white
            text-lg
            font-bold
            cursor-pointer' type='submit'

            onClick={handleClick}>{title}</button>
    );
}