import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Link , useHistory } from "react-router-dom";
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
        marginTop : '5%'
    },
    titleSize : {
        width:'80%'
    },
    font : {
        fontSize : '21px'
    }
}));
export const ReviewWrite = () => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")))
    const [contents, setContents] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date,setDate]= useState(new Date())
    const  classes = useStyles()
    const [id, setId] = useState("");
    const history = useHistory()
    const handleQuill = (value) => {
        setContents(value);
    };

    const homeClick = e =>{
        alert("홈으로 이동합니다")
        history.push("/")
    }

    const newNotice = (e) => {
        e.preventDefault();
        const notice = {
            userId: user.userId,
            title: title,
            contents: contents,
            category:category,
            date: date.toLocaleString(),
        };
        if (
            category === "" ||
            title === "" ||
            contents === "" ||
            category === "카테고리"
        ) {
            alert("입력창을 다채워주세요");
        } else {
            axios
                .post(`http://localhost:8080/review/save`, notice)
                .then((res) => {
                    alert("성공");
                    window.location.href = "/review";
                })
                .catch((err) => {
                    throw err;
                    alert("실패");
                });
        }
    };

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
            {user &&
            <PageTemplate>
            <center>
                <div className={classes.paper}>
                    <Form>
                        <h2>  리뷰 작성</h2>
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
                    <br />
                    <div className={classes.margin}>
                        <Link to="/review">
                            <Button variant="primary" onClick={newNotice} type="submit">
                                확인
                            </Button>{" "}
                            <Button variant="secondary" type="button" href={'/review'}>
                                취소
                            </Button>{" "}
                        </Link>
                    </div>
                </div>
            </center>
            </PageTemplate>
            }
            {!user &&
            <PageTemplate>
                <center>
                    <h1 className={classes.margin}>로그인후 이용해주세요</h1>
                    <input type="button" onClick={homeClick} value={"홈으로.."}/>
                </center>
            </PageTemplate>
            }
</>
    );
};