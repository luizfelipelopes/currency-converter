import type { ReactNode } from "react";

interface LayoutPreviewProps {
    children: ReactNode;
}


export function LayoutPreview({ children }: LayoutPreviewProps) {
    return (
        <div className='layout-preview
        rounded-2xl
        py-16
        relative
        min-h-96
        flex
        flex-col
        items-center
        justify-center'>
            {children}
        </div>

    );
}