import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Countries = ({ setCountries, countries, continen, totalCountries, search }) => {





    useEffect(() => {

        if (countries != undefined) {

            const newCountries = totalCountries.filter((count) => count.region == continen);

            setCountries(newCountries)

        }
    }, [continen])


    useEffect(() => {


        if (totalCountries != undefined && search != "") {
            console.log(totalCountries)
            console.log(search)
            console.log(search.length)
            console.log(search.slice(0, search.length))
            const newCountries = totalCountries.filter((sear) => sear.name.slice(0, search.length) == search);

            setCountries(newCountries)
        } else if (search === "") {

            setCountries(totalCountries)
        }

    }, [search])



    return (

        <div className="grid grid-cols-4 gap-4">

            {
                countries
                &&
                countries.map(count => (
                    <Link href={count.name}>
                        <div className='border border-gray-200 rounded-lg shadow dark:bg-gray-800' >

                            <img className="rounded-t-lg max-h-25 max-w-30" src={count.flag} alt="" />

                            <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white ">{count.name}</h5>
                            <h5 className=" text-base font-bold tracking-tight text-gray-900 dark:text-white  " >Population:</h5> <p className='inline-block'>{count.population}</p>
                            <h5 className=" text-base font-bold tracking-tight text-gray-900 dark:text-white  " >Region:</h5> <p className='inline-block'>{count.region}</p>
                            <h5 className=" text-base font-bold tracking-tight text-gray-900 dark:text-white  " >Capital:</h5> <p className='inline-block'>{count.capital}</p>
                        </div>
                    </Link>
                ))

            }

        </div >

    )
}

export default Countries
