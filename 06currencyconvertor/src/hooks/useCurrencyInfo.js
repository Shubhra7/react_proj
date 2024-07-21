import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    let [data, setData] = useState({})
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data[currency]))
        console.log(data);
    }, [currency])
    console.log("From inside useCUrrency");
    console.log(data);
    console.log(data['usd']);
    return data;
}

export default useCurrencyInfo;