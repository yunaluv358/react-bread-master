import React, { useEffect, useState } from "react";
import {Button, Table, Container, Row, Col, Form} from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import {PageTemplate} from "../common/PageTemplate";
import makeStyles from "@material-ui/core/styles/makeStyles";
import  { Pagination, Paginate } from '../common/Pagination';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
    },
    margin : {
        margin : '5%'
    },
    size : {
        width : '200px',
        height :'200%'
    },
    writeButton : {
       textAlign :'center',
        marginBottom : '9'
    },
    font : {
        fontSize : '20px',
        color : 'black',
        cursor:'hand'
    }

}));
export const Review = () => {
    const [category, setCategory] = useState("");
    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [data,setData] = useState([])
    const [title,setTitle] = useState('')
    const classes = useStyles()
    const history = useHistory()

    useEffect(() => {
        axios
            .get('http://localhost:8080/review/postlist')
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                throw err;
            })
        setPageSize(5)
        setCurrentPage(1)
    }, [])

    function enterKey (){
        if (window.event.keyCode == 13) {
            titleSearch()
        }
    }
    const titleSearch = e => {
        axios
            .get(`http://localhost:8080/review/title/${title}`)
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                throw err;
            })
    }
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    }
    const subdata = Paginate(data, currentPage, pageSize);

    const reviewDetail = data => {
        history.push('/reviewDetail')
        sessionStorage.setItem('reviewData', JSON.stringify(data))
    }
    return (
        <>
            <PageTemplate>
            <section className={classes.paper}>
                <h2>리뷰 게시판</h2>
                <input type="text" onChange={e => setTitle(e.target.value)}/>
                <input type="button" onkeyup={enterKey} onClick={titleSearch} value={"제목검색"}/>
                <Table responsive hover>
                    <thead >
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {subdata.map((i, index) => (
                        <tr key={index}>
                            <td >
                                {i.reviewId}
                            </td>
                            <td> {i.category}</td>
                            <td>
                                <a rel="history"  className={classes.font} onClick={()=>reviewDetail(i)}>
                                    {i.title}
                                </a>
                            </td>
                            <td> {i.userId}</td>
                            <td>{i.date}</td>
                        </tr>
                    ))}
                        <Pagination
                                    pageSize={pageSize}
                                    itemsCount={data.length}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                        />

                    </tbody>
                </Table>
                <Container fluid>
                    <Row noGutters>
                        <Col className={classes.writeButton}>
                            {" "}
                            <Link to="/reviewWrite">
                                <Button variant="primary" id="button-right" >
                                    글쓰기
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            </PageTemplate>
        </>
    );
};