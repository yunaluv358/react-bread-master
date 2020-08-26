import React from "react";
import styled from "styled-components";
import Route from "react-router-dom/es/Route";
import { OrderDetail } from "../order/OrderDetail";
import { Link } from "react-router-dom"
import { OrderUpdate } from "../order/OrderUpdate";
import {Navigation} from "../common/HomeMain";
import {Router} from "react-router-dom"

const UserDetailNavigation = styled.div`
    
    padding: 30px 0 0; 
    border-bottom: 1px solid #ccc;
    button {
        border: 1px solid transparent; 
        border-bottom: 0; 
        cursor: pointer; 
        font-weight: 600;
        background-color: transparent;
        font-size: 18px;
        outline: none;
        padding: 15px;
        @media (max-width: 600px) {
            padding: 10px;
        }
        :hover {
            color: black;
        }
    }
`;

const UserDetailTypes= {REQUEST: 'UserDetail/REQUEST', SUCCESS: 'UserDetail/SUCCESS', FAIL: 'UserDetail/FAIL'}
const UserDetailRequest = action => ({types: UserDetailTypes.REQUEST, payload: action.payload})
const UserDetailSuccess = action => ({types: UserDetailTypes.SUCCESS, payload: action.payload})
const UserDetailFail = action => ({types: UserDetailTypes.FAIL, payload: action.payload})

const UserDetailReducer = (state, action) => {
    switch (action.type) {
        case UserDetailTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserDetailTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserDetailTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}


export const UserDetail = () => {
    return (<>

            <Navigation/>

            <h1 className="h3-bread" style={{"padding-top":"120px"}}></h1>
            <div className="gaukuF"><h2 className="sc-jTzLTM btRZwy" >My Page</h2>
                <button type="button" className="sc-dnqmqq qrXFy">LogOut</button>
            </div>

            <UserDetailNavigation>
                <p><Link to="/MyPage/OrderDetail">OrderList</Link></p>
                <p><Link to="/MyPage/EditProfile">Edit Profile</Link></p>
            </UserDetailNavigation>

            {/* 이중 라우팅 */}

            <Route path="/MyPage/OrderDetail" component={OrderDetail}/>
            <Route path="/MyPage/EditProfile" component={OrderUpdate}/>


    </>)

}






