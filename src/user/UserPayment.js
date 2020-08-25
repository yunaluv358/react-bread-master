import React, {useState} from 'react';
import { MDBBtn} from 'mdbreact';
import queryString from 'query-string';
import axios from 'axios'


const UserPayment = () => {
    const [name,setName] = useState("")
    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init('imp28320704');
        const data = {
            pg: 'html5_inicis',   // 카카오
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            name : '비건빵', //상품명
            amount: '7500', // 결제금액,상품가격
            buyer_name : '신사임당', // 구매자
            buyer_tel: '010-1234-5678', // 구매자 번호
        }
        IMP.request_pay(data, callback);

        // axios.post(`http://localhost:8080/myPage/${data.name}/${data.amount}/${data.buyer_name}/${data.buyer_name}`)
        //     .then((res)=>{
        //     alert("성공")
        //     }).catch(err=>{
        //     alert("실패")
        // })
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