import React from 'react'
import s from './ourkids.module.css'
import bg1 from '../../assets/Ourkids/bg1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { kidsdb } from './constants'
import { Slide } from 'react-reveal';

export const Ourkids = () => {
    return (
        <div className={s.container} style={{ backgroundImage:`url(${bg1})`}}>
            <div className={s.heading}>
                <h1>Let's meet our kids</h1>
                <p>Our kids are in the 8-14 year age range. </p>
            </div>
            <div className={s.list}>
                {kidsdb.map(kid=>(
                    <Kids
                    key={kid.key}
                    name={kid.name}
                    age={kid.age}
                    about={kid.about}
                    img={kid.img}
                    />
                ))}
            </div> 
                        
        </div>
    )
}

const Kids = ({name,age,about,img}) =>{
    return (
        <Slide bottom>
        <div className={s.kidprofile}>
        <LazyLoadImage src={img} alt="" />
        <span>
            <h6>{name}, {age}</h6>
            <p>{about}</p>
        </span>
    </div>
    </Slide>
    )
}

