import React, { useEffect, useState} from "react";
import  { Pagination, Paginate } from '../common/Pagination';
import axios from "axios";
import './bread.css'
import {Navigation} from "../common/HomeMain";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(()=>({
    font : {
        fontSize : '20px',
        color : 'black'
    }
}))
export const BreadList = () => {
    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1)
    const [data,setData] = useState([])
    const classes = useStyle()

    const history = useHistory()
    useEffect(()=>{
        axios.get(`http://localhost:8080/bread/findAll`)
            .then((response) => {
                    setData(response.data)
                }
            ).catch((error => {
                throw (error)
            }
        ))
        setPageSize(5)
        setCurrentPage(1)
    },[])
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    }
    const subdata = Paginate(data, currentPage, pageSize);

    const passDetail = bread => {
        localStorage.setItem('selectedBread', JSON.stringify(bread))
    }
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
                            {subdata.map((i, index) => (
                            <span key={index}>
                                <a rel="history" href="breadItem" className="image-link" onClick={()=>passDetail(i)}>
                                    <img src={i.breadImage} style={{width: '400px', height: '400px' }} /></a>
                                 <a rel="history" href="breadItem" className={classes.font} onClick={()=>passDetail(i)}>
                                    <div>{i.breadName}</div></a>
                                 <a rel="history" href="breadItem" className={classes.font}  onClick={()=>passDetail(i)}>
                                    <div>{i.breadPrice}원</div></a>
                                 <a lassName={classes.font} rel="history" href="breadItem"  onClick={()=>passDetail(i)}>
                                    <div style={{overflow:'hidden',color:'gray'}}>{i.breadDescription}</div></a>
                            </span>
                        ))}
                        <Pagination
                            pageSize={pageSize}
                            itemsCount={data.length}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}