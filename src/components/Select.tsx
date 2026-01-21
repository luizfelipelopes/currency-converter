import type { Ref } from "react";

interface SelectOptions {
    value: string;
    text: string;
}

interface SelectProps {
    label: string;
    currencies: SelectOptions[]
    ref: Ref<HTMLSelectElement>;
}


export function Select({ label, currencies, ref }: SelectProps) {

    return (
        <div className='input-group mb-6'>
            <label className='input-label
                block
                text-sm
                text-left
                font-semibold
                mb-2.5
                uppercase'>{label}</label>
            <select className='currency-select
                w-full
                py-4
                px-5
                border-2
                border-solid
                border-transparent
                rounded-xl
                cursor-pointer
                text-lg'
                ref={ref}
            >

                {currencies
                    && currencies.map((currency, key) =>
                        <option key={key} value={currency.value}>{currency.text}</option>)}
            </select>
        </div>
    );
}