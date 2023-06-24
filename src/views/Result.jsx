import React from 'react'
import style from '../assets/styles/result.module.css';

const Result = ({result}) => {
   

    const {address, city, country, country_code, is_valid, isp, lat, lon, region, region_code, timezone, zip } = result;
return <section className={style.body}>

        <div className={style.loaderContainer}>
            <div className = {style.loader}></div>
        </div>
<div className={style.container}>
    
<div className={style.contentContainer}>
        <p className={style.data}><span>Address : </span>{address}</p>
        <p className={style.data}><span>Valid : </span>{is_valid? "True": "False"}</p>
        <p className={style.data}><span>Country : </span>{country}</p>
        <p className={style.data}><span>Country Code : </span>{country_code}</p>
        <p className={style.data}><span>City : </span>{city}</p>
        <p className={style.data}><span>Region : </span>{region}</p>
        <p className={style.data}><span>Region Code : </span>{region_code}</p>
        <p className={style.data}><span>Latitude : </span>{lat}</p>
        <p className={style.data}><span>Longitude : </span>{lon}</p>
        <p className={style.data}><span>Timezone : </span>{timezone}</p>
        <p className={style.data}><span>Internet Service Provider : </span>{isp}</p>
        <p className={style.data}><span>Zip Code : </span>{zip? zip : "Unavailable"}</p>
    </div>

</div>

</section>

}

export default Result