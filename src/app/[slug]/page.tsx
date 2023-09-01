"use client"
import 'flowbite';
import React, { useEffect, useState } from 'react'
import api from '../../../rest-countries-api-with-color-theme-switcher-master/data.json'
import Link from 'next/link';



const page = ({ params }) => {
    const countryActual = params.slug.replace(/\s+/g, '')
    console.log(countryActual)
    const [country, setCountry] = useState(params.slug)
    console.log(country)

    const res = api;

    console.log(res);

    const finalCountry = res.filter((resp) => resp.name == country);
    console.log(finalCountry)

    return (


        <>
            {
                finalCountry
                &&
                <>

                    <Link href={"/"}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
                    </Link>
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-2xl max-h-2xl  max-h-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={finalCountry[0].flag} alt=""></img>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{finalCountry[0].name}</h5>

                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <p className="inline-flex items-center   text-xl font-medium text-center text-gray-900 font-bold  ">Region:</p>
                                <p className="inline-flex items-center   text-xl font-medium text-center text-gray-900 ">{finalCountry[0].region}</p>
                            </div>

                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <p className="inline-flex items-center   text-xl font-medium text-center text-gray-900 font-bold  ">Capital:</p>
                                <p className="inline-flex items-center   text-xl font-medium text-center text-gray-900 ">{finalCountry[0].capital}</p>
                            </div>

                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <p className="inline-flex items-center   text-xl font-medium text-center text-gray-900 font-bold  ">Sub region:</p>
                                <p className="inline-flex items-center   text-xl font-medium text-center text-gray-900 ">{finalCountry[0].subregion}</p>
                            </div>
                        </div>
                    </a>

                </>

            }




        </>
    )
}

export default page
