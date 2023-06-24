import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Result from '../views/Result';

const FetchData = () => {
  const location = useLocation();

  const ip = location.state.ip;

  const API_URL = `https://api.api-ninjas.com/v1/iplookup?address=${ip}`;

  const [result, setResult] = useState({});

  //get data
  useEffect(()=>{
        axios.get(API_URL, {
        headers: { 'X-Api-Key': "lN3EqDu1vEJ049k098Expw==hcqqqIUoS5lhjCcb"},
        contentType: 'application/json'
      })
      .then((res)=> res.data && setResult(res.data))
      .catch((error)=> setResult(error.message));
  }, [ip])

  return <>

{result && <Result result = {result} />}
  </>
}

export default FetchData