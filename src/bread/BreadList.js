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
        color : 'black',
    },
    fontPrice : {
        fontSize : '20px',
        color:'brown'
    },
    description : {
        fontSize : '5px',
        color:'gray'
    },
    size : {
        marginTop : '150px'
    }
}))
export const BreadList = () => {
    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
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
        setPageSize(7)
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
            <center>
                <div className={classes.size}  >
                    <div>
                        <div>
                            {subdata.map((i, index) => (
                                <div key={index} style={{display: "inline-block"}} >
                                    <a rel="history" href="breadItem" className="image-link" onClick={()=>passDetail(i)}>
                                        <img src={i.breadImage} style={{width: '400px', height: '400px' }} /></a>
                                    <a rel="history" href="breadItem"  onClick={()=>passDetail(i)}>
                                        <div className={classes.font} >{i.breadName}</div></a>
                                    <a rel="history" href="breadItem" onClick={()=>passDetail(i)}>
                                        <div  className={classes.fontPrice} >{i.breadPrice}원</div></a>
                                    <a rel="history" href="breadItem"  onClick={()=>passDetail(i)}>
                                        <div className={classes.description}>{i.breadDescription}</div></a>
                                </div>
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
            </center>

            {/*</div>*/}
        </>
    )
}