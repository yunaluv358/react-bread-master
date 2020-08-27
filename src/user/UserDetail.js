import React, { useState } from "react";
import { PageTemplate } from "../common/PageTemplate";
import { useHistory, Link } from 'react-router-dom';
import './user-register.css'
import axios from 'axios'
import UserPostcode from "./UserPostcode";
export const UserDetail = () => {
    const [userId, setUserId] = useState(JSON.parse(sessionStorage.user).userId);
    const [password, setPassword] = useState(JSON.parse(sessionStorage.user).password);
    const [name, setName] = useState(JSON.parse(sessionStorage.user).name);
    const [email, setEmail] = useState(JSON.parse(sessionStorage.user).email);
    const [phone, setPhone] = useState(JSON.parse(sessionStorage.user).phone)
    const [addr, setAddr] = useState(JSON.parse(sessionStorage.user).addr)
    const [detailAddr, setDetailAddr] = useState(JSON.parse(sessionStorage.user).detailAddr)
    const history = useHistory()
    const crystalHandle = e =>{
        const userData = {
            userId: userId,
            password: password,
            name: name,
            email: email,
            phone: phone,
            addr:addr,
            detailAddr:detailAddr
        }
        axios.patch(`http://localhost:8080/user/changeInfo/${userId}`, userData)
            .then(response => {
                    alert("데이터 변경 성공")
                    sessionStorage.clear()
                    history.push("/")
                }
            ).catch(
            error => {
                alert("데이터 변경 실패")
                throw (error)
            }
        )
    }
    return <>
        <PageTemplate>
            <section className="signup" style={{position:'relative',weidth:'10%'}}>
                <div className="main" >
                    <div className="h3-bread"></div>
                    <form className="theme-form" >
                        <center><h2>회원 정보수정</h2></center>
                        <div className="form-group">
                            <label>아이디</label>
                            <input  value={userId} type="text" className="form-control" onChange={e => setUserId(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>비밀번호</label>
                            <input value={password} type='password' className="form-control" onChange={e=> setPassword(e.target.value)} placeholder="Last name"/>
                        </div>
                        <div className="form-group">
                            <label>이름</label>
                            <input value={name} type="userName" className="form-control" onChange={e => setName(e.target.value)} placeholder="Enter name"/>
                        </div>
                        <div className="form-group">
                            <label>휴대전화</label>
                            <input value={phone} type="phone" className="form-control" onChange={e => setPhone(e.target.value)} placeholder="Enter password"/>
                        </div>
                        <div className="form-group">
                            <label>이메일</label>
                            <input value={email} type="text" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
                        </div>
                        <div cclassName="form-group">
                            <label>주소</label>
                            <br/><br/><UserPostcode  setAddress={(addr)=>(setAddr(addr))}/>
                            <input value={addr} type="text" className="form-control" value={addr} onChange={e => setEmail(e.target.value)} placeholder="addr" required="" readOnly=""/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label>나머지 주소</label>
                            <input type="text" className="form-control" value={detailAddr}
                                   onChange={e => setDetailAddr(e.target.value)} placeholder="나머지 주소는 직접입력해 주세요." required=""/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={crystalHandle}>정보 수정</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </div>
            </section>
        </PageTemplate>
    </>

}