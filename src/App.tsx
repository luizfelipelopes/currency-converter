import './App.css'
import { Input } from './components/Input'
import { Select } from './components/Select';
import { Button } from './components/Button';
import { ResultCard } from './components/ResultCard';
import { Header } from './components/Header';
import { ConverterCard } from './components/ConverterCard';
import { LayoutPreview } from './components/LayoutPreview';
import { useRef, useState, type MouseEvent } from 'react';

interface DataProps {
  amount: number;
  convert: string;
}

function App() {

  const amountRef = useRef<HTMLInputElement>(null);
  const convertRef = useRef<HTMLSelectElement>(null);
  const [convertedValue, setConvertedValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const convertCurrency = async ({ amount, convert }: DataProps) => {

    const response = await fetch(`${import.meta.env.VITE_BASE_URL_BACKEND}/conversion?currency=${convert}&value=${amount}`)
      .then(async (res) => {
        const response = await res.json();
        return response;
      })

    return response;
  }

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const params = {
      amount: Number(amountRef.current!.value),
      convert: convertRef.current!.value,
    }

    setLoading(true);
    const response = await convertCurrency(params);
    setConvertedValue(response.value);
    setLoading(false);

  }

  const currencies = [
    {
      value: 'usd',
      text: 'USD - US Dollar'
    },
    {
      value: 'eur',
      text: 'EUR - Euro'
    },
    {
      value: 'ars',
      text: 'ARS - Argentine Peso'
    },
    {
      value: 'clp',
      text: 'CLP - Chilean Peso'
    },
    {
      value: 'uyu',
      text: 'UYU - Uruguayan Peso'
    },
  ];

  return (
    <LayoutPreview>

      <Header
        title='Currency Converter'
        subtitle='Convert global currencies to BRL instantly' />

      <div className='container'>

        <ConverterCard>
          <form method="POST">
            <Input ref={amountRef} label='AMOUNT' type='number' />
            <Select ref={convertRef} label='CONVERT FROM' currencies={currencies} />
            <Button handleClick={handleClick} title='Convert Currency' isLoading={loading} />
          </form>
          <ResultCard value={convertedValue} currencySymbol={'R$'} />
        </ConverterCard>

      </div>
    </LayoutPreview>
  )
}

export default App
