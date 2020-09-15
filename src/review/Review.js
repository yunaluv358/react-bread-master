import React, { useEffect, useState } from "react";
import {Button, Table, Container, Row, Col, Pagination, Form} from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import {PageTemplate} from "../common/PageTemplate";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
    }

}));
export const Review = () => {
    const [categorySelect, setCategorySelect] = useState("");
    const [postList, setPostList] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = postList.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const classes = useStyles()
    const history = useHistory()

    const nextPage = () =>{
        if(currentPage<currentPosts.length){
            setCurrentPage(currentPage+1)}
        else if(postPerPage<currentPosts.length){
            setCurrentPage(currentPage+1)
        } else{
            setCurrentPage(currentPage)
        }
    }
    const prevPage = () => {
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    };
    useEffect(() => {
        axios
            .get('http://localhost:8080/review/postlist')
            .then((res)=>{
                setPostList(res.data)
            })
            .catch((err)=>{
                throw err;
            })
    }, [])

    const handleSearch = (searchWord) => {
        axios
            .get(`http://localhost:8080/review/posts/notice/create`,{
                params:{
                    searchWord:searchWord,
                    categorySelect:categorySelect
                }
            })
            .then((res)=>{
                setPostList(res.data)
            })
            .catch((err)=>{
                throw err;
            })

    }
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
                    <select
                        id="select"
                        value={categorySelect}
                        onChange={(e) => setCategorySelect(e.target.value)}
                    >
                        <option value="맛">맛</option>
                        <option value="배송만족도">배송만족도</option>
                        <option value="기타">기타</option>
                    </select>
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
                    {currentPosts.map((i, index) => (
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
                <div>
                    <Pagination
                        postPerPage={postPerPage}
                        TotalPostList={postList.length}
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                    />
                </div>
            </section>
            </PageTemplate>
        </>
    );
};