import React, { useEffect } from 'react'
import api from '../../rest-countries-api-with-color-theme-switcher-master/data.json'
import { useState } from 'react';





const useCountry = () => {

    const [totalCountries, setTotalCountries] = useState()


    const callApi = async () => {
        const res = api;

        console.log(res);
        setTotalCountries(res)
        //  setCountries(res)
    }

    useEffect(() => {
        callApi()
    }, [])

    return (
        <div>

        </div>
    )
}

export default useCountry
