import React from 'react';
import {useHistory} from 'react-router-dom';
import { MDBBtn} from 'mdbreact';
import queryString from 'query-string';
import  { useDispatch } from 'react-redux';



const UserPayment = () => {

    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init('imp75154757');

        const data = {
            pg: 'kakao',   // 카카오
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            name : '비건빵', //주문명
            amount: '7500', // 빵가격
            buyer_name : '신사임당', // 구매자 이름
            buyer_tel: '010-1234-5678', // 구매자 번호
        }
        IMP.request_pay(data, callback);
    }
    function callback(response) {
        const query = queryString.stringify(response);
    }
    return (
        <>
            <MDBBtn gradient="black" size="lg" onClick={() => onClickPayment()}>결제하기</MDBBtn>
        </>
    );

}

export default UserPayment