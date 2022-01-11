import React from 'react'
import temp from '../../assets/home/a1_images/temp_home_img.png'
import bgc from '../../assets/home/a1_images/Bgc.svg'
import './home.css'
import { a1 ,homepins} from './constants'

export const Home = () => {
    return (
        <div className="home_cnt">
            <div id="atop">
                <h1> We are an <span style={{color:'#FFC046'}}>Orphanage</span> striving to <br /> shape young mind for <br /> excellence.</h1>
                <div style={{backgroundImage:`url(${bgc})`}}>
                <img src={temp} alt="" />
                </div>

            </div>
            <div id="a1">
                {a1.map(e=>(
                    <div key={e.desc}>
                    <span>
                    <img src={e.icon} alt="" />
                    <h6>{e.no}</h6>
                    </span>
                    <p>{e.desc}</p>
                </div>
                ))}
            </div>   
            {homepins.map(e=>(
                <div key={e.key}>
                <HomePins 
                    title={e.title}
                    tp={e.tp}
                    img={e.img}
                    desc={e.desc}
                    link={e.link}
                    pins={e.pins}
                    founder={e.founder}
                    founders={e.founders}
                    review={e.review}
                    reviews={e.reviews}
                    /> 
            </div>
            ))} 
        </div>

    )
}

const HomePins= ({title,tp,img,desc,link,founder,founders,pins,review,reviews,}) => {
    const overlay = (n)=>{
        
        if(n%2===0)return "linear-gradient(180deg, rgba(149, 0, 36, 0.3) 33.85%, rgba(0, 0, 0, 0.87) 100%)"
        else return "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 33.85%, rgba(0, 0, 0, 0.87) 100%)"
    }
    return(
        <div>
        {pins&&
            <div id="a2">
            {title && <h4>{title}</h4>}
            {tp && <p style={{color: 'black',fontSize:"18px",marginBottom:"7px"}}>{tp}</p>}
            {img && <img src={img} alt="" />}
            {desc && <p >{desc}</p>}
            <div style={{marginTop:"50px"}}>
            {link && <a href={link}>Know more</a>}
            </div>
        </div>}
        {founder && 
        <div id="a3">
            <h4>Meet Our Founders</h4>
            <div id = "a3_a">
            {founders.map(e=>(
                <div key={e.key}>
                <img src={e.img} alt="" />
                <div id="overlay" style={{background:overlay(e.key)}}></div>
                <span>
                <h5>{e.name}</h5>
                <p>{e.position} <br /> sample </p>
                </span>
                </div>
            ))}
            </div>
        </div>
        }
        {review&& 
         <div id='a3_b'>
             <h4>What people are saying...</h4>
             <div>
             {reviews.map(e=>(
                 <span key={e.key}>
                <h6>{e.content}</h6>
                <p>{e.author}</p>
               </span>
            ))}
            </div>
         </div> 
        }
    </div>
    )
}



