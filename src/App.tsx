import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='layout-preview rounded-2xl py-16 px-16 relative min-h-96 flex flex-col items-center justify-center'>
        <header className='mb-8'>
          <h1 className='app-title text-5xl font-bold mb-2'>Currency Converter</h1>
          <p className='app-subtitle text-base'>Convert BRL to global currencies instantly</p>
        </header>

        <div className='container'>

          <div className='converter-card rounded-3xl p-10 w-full max-w-lg'>

            <form action="POST">

              <div className='input-group mb-6'>
                <label className='input-label block text-sm font-semibold mb-2.5 uppercase'>AMOUNT (BRL)</label><br />
                <input className='input-field w-full py-4 px-5 border-2 border-solid border-transparent rounded-xl text-2xl' type='number' name='amount' />
              </div>


              <div className='input-group mb-6'>
                <label className='input-label block text-sm font-semibold mb-2.5 uppercase'>CONVERT TO</label><br />
                <select className='currency-select w-full py-4 px-5 border-2 border-solid border-transparent rounded-xl cursor-pointer text-2xl'>
                  <option value="usd">USD - US Dollar</option>
                  <option value="eur">EUR - Euro</option>
                  <option value="ars">ARS - Argentine Peso</option>
                  <option value="clp">CLP - Chilean Peso</option>
                  <option value="uyu">UYU - Uruguayan Peso</option>
                </select>
              </div>

              <button className='convert-btn w-full p-60 border-none rounded-xl text-white text-2xl font-bold cursor-pointer' type='submit'>Convert Currency</button>

            </form>

            <div className='result-card'>
              <p className='result-label'>CONVERTED VALUE</p>
              <p className='result-value'>$19.61</p>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
