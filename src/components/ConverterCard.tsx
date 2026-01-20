import type { ReactNode } from "react";

interface ConverterCardProps {
    children: ReactNode;
}

export function ConverterCard({ children }: ConverterCardProps) {
    return (
        <div className='converter-card rounded-3xl p-10 w-full max-w-lg'>
            {children}
        </div>
    );
}