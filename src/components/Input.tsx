interface InputProps {
    label: string;
    type: string;
}

export function Input({ label, type }: InputProps) {
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
                type={type} name='amount' />
        </div>
    );
}