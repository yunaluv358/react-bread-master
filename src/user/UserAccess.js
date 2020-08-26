import React, {useState} from "react";
import { PageTemplate} from "../common/PageTemplate";
import './user-access.css'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const UserAccessTypes= {REQUEST: 'UserAccess/REQUEST', SUCCESS: 'UserAccess/SUCCESS', FAIL: 'UserAccess/FAIL'}
const UserAccessRequest = action => ({types: UserAccessTypes.REQUEST, payload: action.payload})
const UserAccessSuccess = action => ({types: UserAccessTypes.SUCCESS, payload: action.payload})
const UserAccessFail = action => ({types: UserAccessTypes.FAIL, payload: action.payload})

export const UserAccessReducer = (state, action) => {
    switch (action.type) {
        case UserAccessTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserAccessTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserAccessTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}


export const UserAccess = () => {
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory();

    const onAdmin = e => {
        e.preventDefault()
        setUserId('admin119')
        setPassword('1111!@')
    }

    const SignInButton = e => {
        e.preventDefault()
        const userData = {
            userId: userId,
            password: password
        }
        if (userId === 'admin119' && password === '1111!@'){
            return history.push("/dashboard")
        }else {
            axios.post(`http://localhost:8080/user/signIn`, userData)
                .then(response => {
                    sessionStorage.setItem("user", JSON.stringify(response.data))
                        alert("로그인 성공 !")
                        console.log(JSON.stringify(response.data))
                        history.push("/")
                    }
                ).catch(
                error => {
                    alert("로그인 실패 !")
                    throw (error)
                }
            )
        }
        // if (userId && password){
        //     axios.post(`http://localhost:8080/user/signIn`, userData)
        //         .then(response => {
        //                 sessionStorage.setItem("user", JSON.stringify(response.data))
        //                 alert("로그인 성공 !")
        //                 console.log(JSON.stringify(response.data))
        //                 sessionStorage.setItem("userData", JSON.stringify(response.data))
        //                 history.push("/")
        //             }
        //         ).catch(
        //         error => {
        //             alert("로그인 실패 !")
        //             throw (error)
        //         }
        //     )
        //     return history.push("/dashboard")
        // }else {
        //
        // }
    }
    return <>
        <PageTemplate> <section className="Signin">

            <div className="h3-bread">&nbsp;</div>
            <form>
                <h3 >Sign In</h3>

                <div className="form-group">
                    <label>UserId</label>
                    <input type="email" className="form-control" value={userId} onChange={e => setUserId(e.target.value)} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" />
                </div>



                <button type="submit" className="btn btn-primary btn-block" onClick={SignInButton}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <button onClick={onAdmin}>AdminButton</button>
            </form>



        </section></PageTemplate>
    </>

}

