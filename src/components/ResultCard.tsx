interface ResultCardProps {
    value: number;
}


export function ResultCard({ value }: ResultCardProps) {
    return (
        <div className='result-card mt-8 p-6 rounded text-center'>
            <p className='result-label text-sm mb-2'>CONVERTED VALUE</p>
            <p className='result-value text-4xl font-bold'>${value}</p>
        </div>
    );
}