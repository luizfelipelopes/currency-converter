
interface SelectOptions {
    value: string;
    text: string;
}

interface SelectProps {
    label: string;
    currencies: SelectOptions[];
}


export function Select({ label, currencies }: SelectProps) {
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
                text-lg'>

                {currencies
                    && currencies.map((currency, key) =>
                        <option key={key} value={currency.value}>{currency.text}</option>)}
            </select>
        </div>
    );
}