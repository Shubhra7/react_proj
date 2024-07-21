import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    let url =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    let [data, setData] = useState({})
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data[currency]))
        console.log(data);
    }, [])
}