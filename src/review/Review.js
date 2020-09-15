import React, { useEffect, useState } from "react";
import {Button, Table, Container, Row, Col, Pagination} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import 'react-quill/dist/quill.snow.css';

export const Review = () => {
    const [categorySelect, setCategorySelect] = useState("");
    const [postList, setPostList] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = postList.slice(indexOfFirstPost,indexOfLastPost);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            .get('http://localhost:8080/review/posts/postlist')
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
    return (
        <>
            <h2 className="mt-4" style={{"text-align" : "center"}}>리뷰 게시판</h2>
            <div className="content-title">
                <div id="select-search-bar">
                    <select
                        className="form-control"
                        id="select"
                        value={categorySelect}
                        onChange={(e) => setCategorySelect(e.target.value)}
                    >
                        <option value="">카테고리</option>
                        <option value="지역">지역화폐</option>
                        <option value="사이트">사이트</option>
                    </select>
                </div>
            </div>

            <div>
                <Table responsive hover>
                    <thead style={{ "text-align": "center" }}>
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentPosts.map((info, i) => (
                        <tr key={i}>
                            <td style={{ "text-align": "center" }}>
                                { (postList.length -i)}
                            </td>

                            <td style={{ "text-align": "center" }}> {info.category}</td>

                            <td>
                                {" "}
                                <Link to={`/admin/notice-detail/${info.postTitle}`}>
                                    {info.postTitle}
                                </Link>
                            </td>

                            {info.category === "사이트" && (
                                <td style={{ "text-align": "center" }}>관리자</td>
                            )}

                            {info.category === "지역화폐" && (
                                <td style={{ "text-align": "center" }}>경기지역화폐</td>
                            )}

                            <td style={{ "text-align": "center" }}>{info.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <Container fluid>
                    <Row noGutters>
                        <Col>
                            {" "}
                            <Link to="/ReviewWrite">
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
            </div>
        </>
    );
};