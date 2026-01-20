import './App.css'
import { Input } from './components/Input'
import { Select } from './components/Select';
import { Button } from './components/Button';
import { ResultCard } from './components/ResultCard';
import { Header } from './components/Header';
import { ConverterCard } from './components/ConverterCard';
import { LayoutPreview } from './components/LayoutPreview';

function App() {

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
        subtitle='Convert BRL to global currencies instantly' />

      <div className='container'>

        <ConverterCard>
          <form method="POST">
            <Input label='AMOUNT (BRL)' type='number' />
            <Select label='CONVERT TO' currencies={currencies} />
            <Button title='Convert Currency' />
          </form>
          <ResultCard value={19.61} />
        </ConverterCard>

      </div>
    </LayoutPreview>
  )
}

export default App
