import React, {useState} from "react";
import { PageTemplate} from "../common/PageTemplate";
import './user-access.css'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "react-bootstrap/Modal";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    find : {
        margin : 8
    },
    box : {
        borderRadius : "1em",
        boxShadow : "5px 5px 2px 2px gray",
    },
    font : {
        fontFamily: 'italic',
        color : "brown",
        fontSize : "30px",
        margin : "12px 0px"
    }
}));

export const UserAccess = () => {
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')
    const [show,setShow] = useState(false)
    const history = useHistory();
    const classes = useStyles();
    const onAdmin = e => {
        e.preventDefault()
        setUserId('admin119')
        setPassword('1111!@')
    }
    const handleLogout = e=> {
        sessionStorage.removeItem('user')
        window.location.reload()
    }

    const SignInButton = e => {
        e.preventDefault()
        const userData = {
            userId: userId,
            password: password
        }
        if (userId === 'admin119' && password === '1111!@'){
            return history.push("/dashboard")
        }else{
            axios.post(`http://localhost:8080/user/signIn`, userData)
                .then(response => {
                        sessionStorage.setItem("user", JSON.stringify(response.data))
                        history.push("/")
                    }
                ).catch(
                error => {
                    alert("아이디 비밀번호가 일치하지않습니다")
                    throw (error)
                }
            )
        }
    }
    return <>
        {!sessionStorage.user &&
        <PageTemplate>
            <section className={classes.paper}>
            <div className="h3-bread">&nbsp;</div>
            <form className={classes.box}>
                <h3 className={classes.font}>Bread</h3>
                <div className="form-group">
                    <label>UserId</label>
                    <input type="text" className="form-control" value={userId} onChange={e => setUserId(e.target.value)} placeholder="Enter email"  autoFocus={true} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={SignInButton}>Submit</button>
                <p className={classes.find}>
                    <a className={classes.find} href="/findId">아이디찾기</a>
                    <a className={classes.find} href="/findPw">비밀번호찾기</a>
                    <a className={classes.find} href="/signup">회원가입</a>
                </p>
                <center><button onClick={onAdmin}>AdminButton</button></center>
            </form>

        </section>
        </PageTemplate>
        }
    </>
}