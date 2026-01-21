import type { MouseEventHandler } from "react";

interface ButtonProps {
    title: string;
    isLoading: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}


export function Button({ title, isLoading, handleClick }: ButtonProps) {

    const messageButton = isLoading ? 'Converting...' : title;

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

            onClick={handleClick}>{messageButton}</button>
    );
}