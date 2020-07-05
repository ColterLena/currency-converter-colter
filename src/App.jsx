import React, { useState, useEffect } from 'react'

function App() {
  const [conversionRates, setConversionRates] = useState({})

  const [dollarAmount, setDollarAmount] = useState(0)

  const [audAmount, setAudAmount] = useState()

  const [bgnAmount, setBgnAmount] = useState()

  const [brlAmount, setBrlAmount] = useState()

  const [cadAmount, setCadAmount] = useState()

  const [chfAmount, setChfAmount] = useState()

  const [cnyAmount, setCnyAmount] = useState()

  const [czkAmount, setCzkAmount] = useState()

  const [dkkAmount, setDkkAmount] = useState()

  const [eurAmount, setEurAmount] = useState()

  const [gbpAmount, setGbpAmount] = useState()

  const convertToAUD = () => {
    const newValue = dollarAmount * conversionRates.AUD

    setAudAmount(newValue)
  }

  const convertToBgn = () => {
    const newValue = dollarAmount * conversionRates.BGN

    setBgnAmount(newValue)
  }

  const convertToBrl = () => {
    const newValue = dollarAmount * conversionRates.BRL

    setBrlAmount(newValue)
  }

  const convertToCad = () => {
    const newValue = dollarAmount * conversionRates.CAD

    setCadAmount(newValue)
  }

  const convertToChf = () => {
    const newValue = dollarAmount * conversionRates.CHF

    setChfAmount(newValue)
  }

  const convertToCny = () => {
    const newValue = dollarAmount * conversionRates.CNY

    setCnyAmount(newValue)
  }

  const convertToCzk = () => {
    const newValue = dollarAmount * conversionRates.CZK

    setCzkAmount(newValue)
  }

  const convertToDkk = () => {
    const newValue = dollarAmount * conversionRates.DKK

    setDkkAmount(newValue)
  }

  const convertToEur = () => {
    const newValue = dollarAmount * conversionRates.EUR

    setEurAmount(newValue)
  }

  const convertToGbp = () => {
    const newValue = dollarAmount * conversionRates.GBP

    setGbpAmount(newValue)
  }

  const loadConversionRatesFromApi = () => {
    const url = 'https://api.ratesapi.io/api/latest?base=USD'
    console.log(`Loading from ${url}`)

    // Fetch the URL (get)
    fetch(url)
      // Then we turn the response into JSON
      .then((response) => response.json())
      // Then we have the API data as an object
      .then((apiData) => {
        setConversionRates(apiData.rates)
      })
  }

  useEffect(loadConversionRatesFromApi, [])

  useEffect(convertToAUD, [dollarAmount])

  useEffect(convertToBgn, [dollarAmount])

  useEffect(convertToBrl, [dollarAmount])

  useEffect(convertToCad, [dollarAmount])

  useEffect(convertToChf, [dollarAmount])

  useEffect(convertToCny, [dollarAmount])

  useEffect(convertToCzk, [dollarAmount])

  useEffect(convertToDkk, [dollarAmount])

  useEffect(convertToEur, [dollarAmount])

  useEffect(convertToGbp, [dollarAmount])

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Currency Converter</h1>
        <p className="lead"></p>
      </div>
      <div className="col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type USD Amount"
            onChange={(event) => {
              setDollarAmount(event.target.value)
            }}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Today's Conversion Rate</th>
            <th scope="col">Calculated Conversion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{conversionRates.USD}</td>
            <td>{dollarAmount}</td>
          </tr>
          <tr>
            <td>AUD</td>
            <td>{conversionRates.AUD}</td>
            <td>{audAmount}</td>
          </tr>
          <tr>
            <td>BGN</td>
            <td>{conversionRates.BGN}</td>
            <td>{bgnAmount}</td>
          </tr>
          <tr>
            <td>BRL</td>
            <td>{conversionRates.BRL}</td>
            <td>{brlAmount}</td>
          </tr>
          <tr>
            <td>CAD</td>
            <td>{conversionRates.CAD}</td>
            <td>{cadAmount}</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>{conversionRates.CHF}</td>
            <td>{chfAmount}</td>
          </tr>
          <tr>
            <td>CNY</td>
            <td>{conversionRates.CNY}</td>
            <td>{cnyAmount}</td>
          </tr>
          <tr>
            <td>CZK</td>
            <td>{conversionRates.CZK}</td>
            <td>{czkAmount}</td>
          </tr>
          <tr>
            <td>DKK</td>
            <td>{conversionRates.DKK}</td>
            <td>{dkkAmount}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{conversionRates.EUR}</td>
            <td>{eurAmount}</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{conversionRates.GBP}</td>
            <td>{gbpAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
