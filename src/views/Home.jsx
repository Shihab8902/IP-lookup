import React, { useState } from 'react'
import style from '../assets/styles/home.module.css';
import { Link } from 'react-router-dom';


const Home = () => {



    const [ip, setIp] = useState('');

  
 

  return <main className={style.body}>
        <h1 className={style.heading}>IP lookup</h1>

        <form className={style.form} >
            <input className={style.input} type="text" name="ip" id="ip" placeholder='Provide your ip...' onChange={(e)=> setIp(e.target.value)} value={ip} required />
            <Link to="/result" state= {{ip:ip}}><button className={style.button}>Lookup</button></Link>
        </form>
  </main>
}

export default Home