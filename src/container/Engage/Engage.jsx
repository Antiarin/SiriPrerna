import React,{useState} from 'react';
import s from "./Engage.module.scss";
import {INDIVIDUALS,CORPORATES} from "./constant";
import v1 from "../../assets/Engage/Vector (1).svg";
import b1 from "../../assets/Engage/Donate illustration.svg";
import d1 from "../../assets/Engage/Vector.svg";
import d2 from "../../assets/Engage/Message.svg";
import clsx from 'clsx';



export const Engage = () => {
    const [individual,setIndividual]=useState(true);

    function onIndividualClick(){
        setIndividual(true);
    }
    function onCorporateClick(){
        setIndividual(false);
    }
    return (
        <div className={s.engage}>
            
            <h1 className={s.heading}>Get Involved With Us!</h1> 
            <div className={s.contact_container_mobile}>
                <Contact img={d1} details="+91 94419 22022" link="https://wa.me/919441922022"/>
                <Contact img={d2} details="siri.nonprofit@gmail.com" link="mailto:siri.nonprofit@gmail.com"/>
                </div>
                
            <div className={s.engage__subheadings}>
            <p onClick={onIndividualClick} className={individual?clsx(s.subheading,s.active_subheading):s.subheading}>Individuals</p>
            <p onClick={onCorporateClick} className={!individual?clsx(s.subheading,s.active_subheading):s.subheading}>Corporates</p>
            </div>
           
            <div className={s.grid}>
            { individual ? 
            INDIVIDUALS.map((props)=>( 

                <Donate key={props.head} {...props} />
            ))
            :
            CORPORATES.map((props)=>( 

                <Donate key={props.head} {...props} />
            ))
            
            }
            </div>
            <div className={s.eng_contact}>
                <h2>Contact Us</h2>
                <div className={s.contact_container}>
                <Contact img={d1} details="+91 94419 22022" link="https://wa.me/919441922022"/>
                <Contact img={d2} details="siri.nonprofit@gmail.com" link="mailto:siri.nonprofit@gmail.com"/>
                </div>
            </div>
            <div className={s.bottom_image}>
                <img src={b1} alt="" />
            </div>
            </div>
    )
}


function Donate({head,desc,rs,img,don}){

    return(

        <div className={don?s.donate:clsx(s.donat,s.donate)}>
            
            <img className={s.mainimg} src={img} alt="" />
           <div className={s.desc_don}> 
           <h6>{head}</h6>
            <p className="">{desc}</p>
            {rs && <p>{rs} </p>}
            </div>
            {don && <div >
                <button className={s.d_btn} type="button">
                    Donate
                    <img src={v1} alt="" />
                </button>
            </div>}
        </div>

    )
}

function Contact({img,details,link}) {
    return (
            <div className={s.contact_details}>
            <a  href={link}>
            <img src={img} alt="" />
            <span>{details}</span>
            </a>
            </div>
    )
}

