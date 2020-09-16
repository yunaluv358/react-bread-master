import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {PageTemplate} from "../common/PageTemplate";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        width: '70%',
        height: '70%',
        textAlign: 'center'
    },
    margin : {
        margin : '5%',
        marginTop : '14%'
    },
    titleSize : {
        width:'80%'
    },
    font : {
        fontSize : '21px'
    }
}));

export const ReviewInfo = () => {
    const [userId, setUserId] = useState("")
    const [contents, setContents] = useState(JSON.parse(sessionStorage.reviewData).contents);
    const [title, setTitle] = useState(JSON.parse(sessionStorage.reviewData).title);
    const [category, setCategory] =  useState(JSON.parse(sessionStorage.reviewData).category);
    const [date,setDate]= useState(JSON.parse(sessionStorage.reviewData).date)
    const [id, setId] = useState("");
    const classes = useStyles()
    const [accountDetail] = useState(
        JSON.parse(sessionStorage.getItem("user"))
    );
    const handleQuill = (value) => {
        setContents(value);
    };

    const newNotice = (e) => {
        e.preventDefault();
        const notice = {
            userId:accountDetail.userId,
            title: title,
            contents: contents,
            category:category,
            date: date,
        };
        if (
            category === "" ||
            title === "" ||
            contents === "" ||
            category === "카테고리"
        ) {
        } else {
            axios
                .patch(`http://localhost:8080/review/info`, notice)
                .then((res) => {
                    window.location.href = "/review";
                })
                .catch((error) => {
                    throw error;
                });
        }
    };

    const reviewDelete = e => {
        e.preventDefault();
        const notice = {
            userId:accountDetail.userId,
            title: title,
            contents: contents,
            category:category,
            date: date,
        };
        axios.post(`http://localhost:8080/review/delete`, notice)
            .then((res)=>{
                window.location.href = "/review";
            })
            .catch((error)=>{
                throw error
            })
    }

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            [{ font: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],

            ["clean"],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    const formats = [
        "header",
        "font",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "align",
        "color",
        "background",
        "list",
        "bullet",
        "link",
        "image",
    ];

    return (
        <>
            <PageTemplate>
                <center>
                    <Form className={classes.paper}>
                        <h2>리뷰 수정하기</h2>
                        <Form.Group as={Row}>
                            <Form.Label className={classes.font}>
                                카테고리
                            </Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    as="select"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="카테고리" selected>
                                        카테고리
                                    </option>
                                    <option value="맛">맛</option>
                                    <option value="배송만족도">배송만족도</option>
                                    <option value="기타">기타</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={classes.font}>
                                제목
                            </Form.Label>
                            <center>
                                <Col className={classes.titleSize}>
                                    <Form.Control
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                        as="input"
                                    />
                                </Col>
                            </center>

                        </Form.Group>
                        <ReactQuill
                            theme="snow"
                            value={contents}
                            onChange={handleQuill}
                            modules={modules}
                            formats={formats}
                            style={{ height: "400px" }}
                        />
                    </Form>
                    <div className={classes.margin}>
                        <Link to="/review">
                            <Button variant="primary" onClick={newNotice} type="submit">
                                확인
                            </Button>{" "}
                            <Button variant="secondary" type="button">
                                취소
                            </Button>{" "}
                            <Button variant="secondary" onClick={reviewDelete} type="button">
                                삭제
                            </Button>{" "}
                        </Link>
                    </div>
                </center>
            </PageTemplate>
        </>
    );
};