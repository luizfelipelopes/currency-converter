interface ButtonProps {
    title: string;

}


export function Button({ title }: ButtonProps) {
    return (
        <button className='convert-btn
            w-full
            p-5
            border-none
            rounded-xl
            text-white
            text-lg
            font-bold
            cursor-pointer' type='submit'>{title}</button>
    );
}