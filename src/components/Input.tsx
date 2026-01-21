import type { Ref } from "react";

interface InputProps {
    label: string;
    type: string;
    ref: Ref<HTMLInputElement>;
}

export function Input({ label, type, ref }: InputProps) {
    return (
        <div className='input-group mb-6'>
            <label className='input-label
                block
                text-sm
                text-left
                font-semibold
                mb-2.5
                uppercase'>{label}</label>
            <input className='input-field
                w-full
                py-4
                px-5
                border-2
                border-solid
                border-transparent
                rounded-xl
                text-lg'
                ref={ref}
                type={type}
                name='amount' />
        </div>
    );
}