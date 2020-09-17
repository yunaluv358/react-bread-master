import React, { useState } from "react";
import { PageTemplate } from "../common/PageTemplate";
import { useHistory, Link } from 'react-router-dom';
import './user-register.css'
import axios from 'axios'
import UserPostcode from "./UserPostcode";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ShopFooter} from "../shop/ShopFooter";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    font : {
        fontFamily: 'italic ',
        color : "brown",
        fontSize : "30px",
        margin : "12px 0px"
    },
    box : {
        borderRadius : "1em",
        boxShadow : "5px 5px 5px 5px gray"
    },
    find : {
        margin : 8
    },
}));

export const UserRegister = () => {
    const classes = useStyles();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [addr, setAddr] = useState("")
    const [detailAddr, setDetailAddr] = useState("")
    const history = useHistory();

    const onSignCheck = e => {
        e.preventDefault();
         const userData = {
            userId: userId,
            password: password,
            name: userName,
            phone: phoneNumber,
            email: email,
            addr:addr,
            detailAddr:detailAddr
        }
        axios.post(`http://localhost:8080/user/register`, userData)
            .then((res) => {
                    history.push("/Signin")
                }
            ).catch(
            error => {
                alert('회원가입실패')
                throw (error)
            }
        );
    }

    return <>
        <PageTemplate>
            <section className={classes.paper}>
                <div className="main">
                    <div className="h3-bread"></div>
                    <form className={classes.box}>
                        <center><h2 className={classes.font}>Bread</h2></center>
                        <div className="form-group">
                            <label>아이디</label>
                            <input type="text" className="form-control" onChange={e => setUserId(e.target.value)} placeholder="Id" autoFocus={true}/>
                        </div>

                        <div className="form-group">
                            <label>비밀번호</label>
                            <input type='password' className="form-control" onChange={e=> setPassword(e.target.value)} placeholder="Password"/>
                        </div>

                        <div className="form-group">
                            <label>이름</label>
                            <input type="userName" className="form-control" onChange={e => setUserName(e.target.value)} placeholder="Enter name"/>
                        </div>

                        <div className="form-group">
                            <label>휴대전화</label>
                            <input type="phone" className="form-control" onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter password"/>
                        </div>

                        <div className="form-group">
                            <label>이메일</label>
                            <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
                        </div>

                        <div cclassName="form-group">
                            <label>주소</label>
                                <br/><br/><UserPostcode  setAddress={(addr)=>(setAddr(addr))}/>
                            <input type="text" className="form-control" value={addr} onChange={e => setEmail(e.target.value)} placeholder="addr" required="" readOnly=""/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>나머지 주소</label>
                            <input type="text" className="form-control"
                                   onChange={e => setDetailAddr(e.target.value)} placeholder="나머지 주소는 직접입력해 주세요." required=""/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={onSignCheck}>Sign Up</button>
                        <p className={classes.find}>
                            <a className={classes.find} href="/findId">아이디찾기</a>
                            <a className={classes.find} href="/findPw">비밀번호찾기</a>
                            <a className={classes.find} href="/signIn">로그인 </a>
                        </p>
                    </form>
                </div>
            </section>
            <div style={{"margin-top": "100px"}}></div>
            <ShopFooter/>
        </PageTemplate>
    </>

}
