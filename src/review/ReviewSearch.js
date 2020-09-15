import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import {PageTemplate} from "../common/PageTemplate";
import makeStyles from "@material-ui/core/styles/makeStyles";
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

export const ReviewSearch = () => {
    const [review,setReview] = useState('')
    const [userId, setUserId] = useState("")
    const [contents, setContents] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date,setDate]= useState(new Date())
    const classes = useStyles()

    const [accountDetail] = useState(
        JSON.parse(sessionStorage.getItem("user"))
    );

    const [id, setId] = useState("");
    useEffect(() => {
        setReview(JSON.parse(sessionStorage.getItem('reviewData')))
    }, [])

    const handleQuill = (value) => {
        setContents(value);
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
            <PageTemplate>
                    <center>
                        <div className={classes.paper}>
                            <Form>
                                <h2>  리뷰보기 </h2>
                                <Form.Group as={Row}>
                                    <Form.Label className={classes.font} >
                                        카테고리
                                    </Form.Label>
                                    <Col sm={2}>
                                        <Form.Control
                                            as="select"
                                            disabled={review.category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <div value="카테고리" value={review.category} disabled={review.category} >
                                            </div>
                                            <option value="맛">맛</option>
                                            <option value="배송만족도">배송만족도</option>
                                            <option value="기타">기타</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label className={classes.font} value={review.title} disabled={review.title} column sm={1}>
                                        제목
                                    </Form.Label>
                                    <center>
                                        <Col className={classes.titleSize}>
                                            <Form.Control
                                                onChange={(e) => setTitle(e.target.value)}
                                                value={review.title}
                                                disabled={review.title}
                                                as="input"
                                            />
                                        </Col>
                                    </center>
                                </Form.Group>
                                <ReactQuill
                                    theme="snow"
                                    value={review.contents}
                                    disabled={review.contents}
                                    onChange={handleQuill}
                                    modules={modules}
                                    formats={formats}
                                    style={{ height: "400px" }}
                                />
                            </Form>
                        </div>
                        <div className={classes.margin}>
                            <Link to="/reviewInformation">
                                <Button variant="primary"  type="button">
                                    확인
                                </Button>{" "}
                                {accountDetail.userId === review.userId &&
                                <Button variant="primary" type="button" >
                                    수정하기
                                </Button>

                                }
                                {!accountDetail.userId &&
                                <>
                                </>
                                }
                            </Link>
                        </div>
                    </center>
            </PageTemplate>
        </>
    );
};