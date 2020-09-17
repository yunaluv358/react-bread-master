import React, {useEffect, useState} from 'react';
import axios from "axios";
import {PageTemplate} from "../common/PageTemplate";
import { makeStyles } from "@material-ui/core/styles"
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from "@material-ui/core/Paper";
import  { Pagination, Paginate } from '../common/Pagination';
import {ShopFooter} from "../shop/ShopFooter";
// import  '../../public/css/style.css'

const UserShipping = () => {
    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [data,setData] = useState([])
    const [user,setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const useStyles = makeStyles({
        root: {
            width: "100%",
            height:"100%",
            position:"relative",
            top:"70px",
            overflowX: "auto",
            marginTop:"3%"
        },
        table: {
            minWidth: 1080,

        },
        headFont : {
            fontSize:'30px',
            fontFamily : "Raleway"
        },
        font : {
            fontSize:'15px'
        }
    })
    useEffect(()=>{
        const shippingName = user.name
        localStorage.clear()
        axios.get(`http://localhost:8080/shipping/${shippingName}`)
            .then((res)=>{
                setData(res.data)
            })
            .catch(() =>{
            })
    },[])
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    }
    const classes = useStyles()
    const subdata = Paginate(data, currentPage, pageSize);
    return (
        <>
            <PageTemplate/>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.headFont}>주문날짜</TableCell>
                            <TableCell className={classes.headFont}>주문상품정보</TableCell>
                            <TableCell className={classes.headFont}>상품이미지</TableCell>
                            <TableCell className={classes.headFont}>상품금액</TableCell>
                            <TableCell className={classes.headFont}>주문상태</TableCell>
                            <TableCell className={classes.headFont}>배송주소</TableCell>
                        </TableRow>
                    </TableHead>
                        {subdata.map((i,index) => (
                            <TableBody key={index}>
                            <TableCell className={classes.font}>{i.shippingDate}</TableCell>
                            <TableCell className={classes.font}>{i.shippingBreadName}</TableCell>
                            <TableCell>
                            <img src={i.shippingBreadImg} style={{width:"60px",height:"60px"}}  alt="이미지가 없습니다"/></TableCell>
                            <TableCell className={classes.font}>{i.shippingPrice}</TableCell>
                            <TableCell className={classes.font}>{i.shippingStatus}</TableCell>
                            <TableCell className={classes.font}>{i.shippingAddr}</TableCell>
                            </TableBody>
                        ))
                        }
                </Table>
                <Pagination
                    pageSize={pageSize}
                    itemsCount={data.length}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </Paper>
            <div style={{"margin-top": "100px"}}></div>
            <ShopFooter/>
        </>

    );
};

export default UserShipping;