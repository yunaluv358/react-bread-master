import React, {useState} from "react";
import { PageTemplate} from "../common/PageTemplate";
import './user-access.css'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Modal } from 'react-bootstrap';
import Container from "@material-ui/core/Container";
import {ShopFooter} from "../shop/ShopFooter";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    find : {
        margin : '10 15'
    },
    box : {
        borderRadius : "1em",
        boxShadow : "5px 5px 3px 3px gray",
    },
    title : {
        fontFamily : 'italic',
        fontSize : '25px',
        margin : '20px 0px'
    }
}));

export const UserFindID = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [data,setData] = useState('')
    const [userId,setUserId] = useState('')
    const [show,setShow] = useState(false)
    const classes = useStyles();
    const handleClose = () => setShow(false);
    const handleCheck = e => {
        e.preventDefault();
        handleClose();
    }
    const findButton = e => {
        e.preventDefault()
        const findData = {
            name: name,
            phone: phone
        }
        axios.get(`http://localhost:8080/user/findId?name=${name}&phone=${phone}`)
           .then((res) => {
               setUserId(res.data.userId)
               setShow(true)
           })
           .catch((error) => {
           })
    }

    return <>
        {!sessionStorage.user &&
        <PageTemplate>
            <div className={classes.paper}>
                <form className={classes.box}>
                    <h3 className={classes.title}>아이디 찾기</h3>
                    <div className="form-group">
                        <label>이름</label>
                        <input type="email" className="form-control"  onChange={e => setName(e.target.value)} placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label>휴대전화</label>
                        <input type="phone" className="form-control"  onChange={e=>setPhone(e.target.value)} placeholder="Enter phoneNumber" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={findButton}>아이디찾기</button>
                    <Modal animation={false} show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>아이디 찾기 결과</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div>
                                    <p>아이디</p>
                                    <p>{userId}</p>
                                </div>
                                <button
                                    className="btn btn-primary btn-block mb-2 mt-2"
                                    onClick={handleCheck}
                                >
                                    확인
                                </button>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <p className={classes.find}>
                 <a className={classes.find} href="/findPw">비밀번호찾기</a>
                 <a className={classes.find} href="/signUp">회원가입</a>
             </p>
            </form>
            </div>
            <div style={{"margin-top": "100px"}}></div>
            <ShopFooter/>
        </PageTemplate>
        }
    </>
}