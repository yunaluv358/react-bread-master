import React, { useEffect, useState} from "react";
import  { Pagination, Paginate } from '../common/Pagination';
import axios from "axios";
import './bread.css'
import {Navigation} from "../common/HomeMain";


export const BreadList = () => {

    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1)
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/bread/findAll`)
            .then((response) => {
                alert('성공')
                    setData(response.data)
                sessionStorage.setItem("bread", JSON.stringify(response.data))
                alert("성공")
                }
            ).catch((error => {
                alert("실패")
                throw (error)
            }
        ))
        setPageSize(6)
        setCurrentPage(1)
    },[])
<<<<<<< HEAD
    const imgClick = e => {

    }

=======



    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    }

    const countHandler = e => {
        if (count === 0)
            return <p>There are no movies in the database.</p>
    }

    const subdata = Paginate(data, currentPage, pageSize);

    const passDetail = bread => {
        alert('소비자 선택 후 ...'+bread.breadName)
        localStorage.setItem('selectedBread', JSON.stringify(bread))
    }
>>>>>>> master
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
<<<<<<< HEAD
                                <a rel="history" href="Bread01" className="image-link">
                                    <img style={{width: '400px', height: '400px' }} onClick={imgClick} src={i.breadImage}/></a>
=======
                                <a rel="history" href="Bread01" className="image-link" onClick={()=>passDetail(i)}>
                                    <img src={i.breadImage} style={{width: '400px', height: '400px' }} /></a>
>>>>>>> master
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