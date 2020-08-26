import React from "react";
import UserPostcode from "../user/UserPostcode";


const OrderUpdateTypes= {REQUEST: 'OrderUpdate/REQUEST', SUCCESS: 'OrderUpdate/SUCCESS', FAIL: 'OrderUpdate/FAIL'}
const OrderUpdateRequest = action => ({types: OrderUpdateTypes.REQUEST, payload: action.payload})
const OrderUpdateSuccess = action => ({types: OrderUpdateTypes.SUCCESS, payload: action.payload})
const OrderUpdateFail = action => ({types: OrderUpdateTypes.FAIL, payload: action.payload})

export const OrderUpdateReducer = (state, action) => {
    switch (action.type) {
        case OrderUpdateTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case OrderUpdateTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case OrderUpdateTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const OrderUpdate = () => {
    const sessionUser = JSON.parse(sessionStorage.getItem('user'))

    return <>
        <center>
            <article className="form">
                <form className="form"><input placeholder="Name" required="" type="text" className="fbFaMk"
                                              value={sessionUser.name}/><input
                    placeholder="Email" required="" type="email" className="fbFaMk" value={sessionUser.email}/><input
                    placeholder="Password" type="password" className="fbFaMk" value={sessionUser.password}/>
                    <UserPostcode/>
                    <input placeholder={sessionUser.addr} required="" type="text" className="sc-fMiknA fbFaMk"
                           value={sessionUser.addr}/>

                    <div className="sc-fAjcbJ hGXRsB">
                        <input required="" type="text" id="phone2" className="sc-fMiknA fbFaMk" value={sessionUser.phone}/></div>
                    <button type="submit" id="createAccountBtn" className="sc-dnqmqq qrXFy">정보수정</button>
                </form>
            </article>
        </center>

    </>
}

