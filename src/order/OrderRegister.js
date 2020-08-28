import React, {useEffect, useState} from "react";
import './order-register.css'
import { PageTemplate } from '../common/PageTemplate'
import queryString from "query-string";
import {MDBBtn} from "mdbreact";
import {useDispatch} from "react-redux";
import UserPayment from "../user/UserPayment";
const CLEAR_BREAD = 'CLEAR_BREAD'
const clearBread = () => ({
	type: CLEAR_BREAD
})
const BreadReducer = (state = {bread:[]},action) => {
	switch (action.type) {
		case CLEAR_BREAD :
			return {
				bread : []
			}
		default:
			return state;
	}
}

const sessionUser = JSON.parse(sessionStorage.getItem('user'))

export const OrderRegister = () => {

	const [user,setUser] = useState("")
	const [bread,setBread]=useState("")
	useEffect(()=>{
		setUser(JSON.parse(sessionStorage.getItem('user')))
		setBread(JSON.parse(localStorage.getItem('selectedBread')))
	})
	const onClickPayment = () => {
		// 가맹점 코드
		const { IMP } = window;
		IMP.init('imp28320704');

		const data = {
			pg: 'html5_inicis',   // pg
			pay_method: 'card', //결제 방법
			merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
			name : bread.breadName, //상품명
			amount: 200, // 결제금액,상품가격
			buyer_name : user.name, // 구매자
			buyer_tel: user.phone, // 구매자 번호
			buyer_email:user.email, // 구매자 이메일
			buyer_addr : user.addr // 구매자 주소

		}
		IMP.request_pay(data,callback); // 결제창 호출
	}
	const dispatch = useDispatch()
	function callback(response) {
		const {seccess, error } = response
		if (seccess) {
			alert("결제성공")
			dispatch()
		}
	}
	return <>
		<PageTemplate>
			<section className="order">
				<h1 className="h3-bread">  </h1>
				<div className="sc-esjQYD goIgCJ">
					<article className="sc-jnlKLf bCmhqn">
						<div className="sc-VigVT cibeyu"><h2 className="sc-jTzLTM btRZwy">Order</h2></div>
						<table className="fQMIPz">
							<thead className="sc-kgAjT QollL">
							<tr>
								<th scope="col" className="sc-cJSrbW gVXHZH">{bread.breadName}</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td className="sc-hqyNC fvxYsy"></td>
								<td><img
									src={bread.breadImage}
									className="fotorama__img"
								/></td>
								<td>
									<div>{bread.breadName}</div>
									L/BLACK
								</td>
								<td>{bread.breadPrice}</td>
								{/*<td>1</td>*/}
							</tr>
							</tbody>
							<tfoot>
							<tr>
								<td colSpan="1" className="sc-ksYbfQ eBRNqZ">{bread.breadPrice}</td>
							</tr>
							</tfoot>
						</table>
						{/*<div id="responsiveTotalDiv" className="sc-kvZOFW gAYafu">Total : ￦59,300</div>*/}
					</article>
					<article className="sc-jnlKLf bCmhqn"><h3 className="sc-kIPQKe hRzZDy">Order Information</h3>
						<form className="sc-eXEjpC eOBXHa">
							<div className="NngVZ">
								<div className="sc-RefOD gBZRgU">name</div>
								<div className="sc-iQKALj fxDVnv">{sessionUser.name}</div>
							</div>
							<div className="NngVZ">
								<div className="sc-RefOD gBZRgU">address</div>
								{/*<div className="sc-iQKALj fxDVnv">06001</div>*/}
								<div className="sc-iQKALj sc-bwCtUz lgbbNn">{sessionUser.addr}</div>
								<div className="sc-iQKALj sc-bwCtUz lgbbNn">주소</div>
							</div>
							<div className="NngVZ">
								<div className="sc-RefOD gBZRgU">email</div>
								<div className="sc-iQKALj fxDVnv">{sessionUser.email}</div>
							</div>
							<div className="NngVZ">
								<div className="sc-RefOD gBZRgU">phone</div>
								<div className="sc-iQKALj fxDVnv">{sessionUser.phone}</div>
							</div>
						</form>
					</article>
					<MDBBtn gradient="black" size="lg" onClick={() => onClickPayment()}>결제하기</MDBBtn>
					<UserPayment>결제테스트</UserPayment>
				</div>
			</section>
		</PageTemplate>
	</>
}