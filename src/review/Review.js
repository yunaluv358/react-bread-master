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
        boxShadow : "5px 5px 5px 5px gray"
    },
    margin : {
        margin : '5%'
    },
    size : {
        width : '200px',
        height :'200%'
    },
    numberStyle : {
        margin :'2'
    }

}));
export const Review = () => {
    const [category, setCategory] = useState("");
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const classes = useStyles()
    const history = useHistory()
    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1)
    const [data,setData] = useState([])
    const [userData,setUserData]= useState(JSON.parse(sessionStorage.getItem("user")))

    useEffect(() => {
        axios
            .get('http://localhost:8080/review/postlist')
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                throw err;
            })
        setPageSize(6)
        setCurrentPage(1)
    }, [])
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    }
    const subdata = Paginate(data, currentPage, pageSize);

    const reviewSearch = data => {
        alert('리뷰 제목'+data.title)
        history.push('/reviewSearch')
        sessionStorage.setItem('reviewData', JSON.stringify(data))
    }
    return (
        <>
            <PageTemplate>
            <section className={classes.paper}>
                <h2>리뷰 게시판</h2>

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
                                <a onClick={()=>reviewSearch(i)}>
                                    {i.title}
                                </a>
                            </td>
                            <td> {i.userId}</td>
                            <td>{i.date}</td>
                        </tr>
                    ))}

                    <Pagination className={classes.numberStyle}
                        pageSize={pageSize}
                        itemsCount={data.length}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                    </tbody>
                </Table>
                <Container fluid>
                    <Row noGutters>
                        <Col>
                            {" "}
                            <Link to="/reviewWrite">
                                <Button variant="primary" id="button-right">
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