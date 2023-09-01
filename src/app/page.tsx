"use client"

import api from '../../rest-countries-api-with-color-theme-switcher-master/data.json'
import NavBar from './components/navBar';
import From from './components/From';
import { useEffect, useState } from 'react';
import Countries from './components/countries';
import useCountry from '@/hooks/useCountry';


export default function Home() {

  const [countries, setCountries] = useState()

  const [continen, setContinen] = useState()

  const [totalCountries, setTotalCountries] = useState()

  const [search, setSearch] = useState()

  // const { totalCountries } = useCountry()
  const callApi = async () => {
    const res = api;

    console.log(res);
    setTotalCountries(res)
    setCountries(res)
  }

  useEffect(() => {
    callApi()
  }, [])

  const test = () => {
    console.log(continen)
  }


  return (
    <>
      <button onClick={test}>TEST</button>
      <NavBar />
      <From setContinen={setContinen} setSearch={setSearch} />
      <Countries countries={countries} continen={continen} setCountries={setCountries} totalCountries={totalCountries} search={search} />

    </>
  )
}
