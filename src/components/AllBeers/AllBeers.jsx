import React, { useEffect, useState } from 'react'

function AllBeers({ sessionToken }) {

    const [ beers, setBeers ] = useState([])

    const fetchBeers = () => {
        const url = "http://127.0.0.1:4000/api/"

        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application.json",
                "authorization": sessionToken
            })
        })
        .then(res => res.json())
        .then(data => setBeers(data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchBeers()
    }, [])

    const renderBeers = () => {
        return beers.length === 0
        ? <h1>Loading...</h1> 
        : beers.forEach((b, i) => {
            <div key={i}>
                <h1>{b.name}</h1>
                <h1>{b.abv}</h1>
                <h1>{b.country}</h1>
                <h1>{b.brewery}</h1>
                <h1>{b.brand}</h1>
            </div>
        })
    }

  return (
    <>{renderBeers()}</>
  )
}

export default AllBeers