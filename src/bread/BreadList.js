import React, { useEffect, useState} from "react";
import axios from "axios";
import './bread.css'
import {Navigation} from "../common/HomeMain";
export const BreadList = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/bread/findAll`)
            .then((response) => {
                    setData(response.data)
                }
            ).catch((error => {
                alert("실패")
                throw (error)
            }
        ))
    },[])
    return (
        <>
            <Navigation/>
            <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
                <div grid-col="4" grid-pad="1.5" className="bread-title"><h1>B r e a d</h1><br/>
                    <blockquote><i>No eggs, No milk, and No butter.</i><br/>The Bread Blue<br/>using all-natural
                        ingredients only.</blockquote>
                    <br/>
                    <blockquote>The Bread Blue is for everyone;<br/>Locals, Visitors, and those who are Vegan
                    </blockquote>
                </div>
                <div grid-col="8" grid-pad="1.5" className="">
                    <div className="image-gallery" gid="6">
                        {data.map((i, index) => (
                            <span key={index}>
                                <a rel="history" href="Bread01" className="image-link">
                                    <img style={{width: '400px', height: '400px' }} src={i.breadImage} /></a>
                            </span>
                        ))}
                    </div>
                    {/*<br/><br/><a href="Page-Index" rel="history">︎ Index</a>*/}
                </div>
            </div>
        </>
    )
}