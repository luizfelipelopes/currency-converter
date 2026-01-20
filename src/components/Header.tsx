interface HeaderProps {
    title: string;
    subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
    return (
        <header className='mb-8'>
            <h1 className='app-title text-5xl font-bold mb-2'>{title}</h1>
            <p className='app-subtitle text-base'>{subtitle}</p>
        </header>
    );
}