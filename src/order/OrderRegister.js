import React, {useEffect, useState} from "react";
import './order-register.css'
import { PageTemplate } from '../common/PageTemplate'
import {MDBBtn} from "mdbreact";
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {Navigation} from "../common/HomeMain";


export const OrderRegister = () => {

	const [user,setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
	const [bread,setBread]= useState(JSON.parse(localStorage.getItem('selectedBread')))
	const history = useHistory()

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
	function callback(response) {
		const {success, error} = response
		const data = {
			shippingName: user.name,
			shippingStatus: '배송준비',
			shippingBreadName: bread.breadName,
			// shippingPrice : bread.breadPrice
			shippingPrice: '101',
			shippingDate: '2020-08-28',
			shippingAddr: user.addr
		}
		if (success) {
			axios.post(`http://localhost:8080/shipping/payment`, data)
				.then((response) => {
					alert("성공")
					history.push('/shipping')
				})
				.catch((err) => {
					throw err;
				});
			let msg = `${response.name} ${response.breadPrice}원 결제가 완료되었습니다.`
			alert(msg)

		} else {
			alert(`결제 실패: ${error}`);


		}
	}
	const homeClick = e =>{
		alert("홈으로 이동합니다")
		history.push("/")
	}
	return <>
		{sessionStorage.user &&
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
								<div className="sc-iQKALj fxDVnv">{user.name}</div>
							</div>
							<div className="NngVZ">
								<div className="sc-RefOD gBZRgU">address</div>
								{/*<div className="sc-iQKALj fxDVnv">06001</div>*/}
								<div className="sc-iQKALj sc-bwCtUz lgbbNn">{user.addr}</div>
								<div className="sc-iQKALj sc-bwCtUz lgbbNn">주소</div>
							</div>
							<div className="NngVZ">
								<div className="sc-RefOD gBZRgU">email</div>
								<div className="sc-iQKALj fxDVnv">{user.email}</div>
							</div>
							<div className="NngVZ">
								<div className="sc-RefOD gBZRgU">phone</div>
								<div className="sc-iQKALj fxDVnv">{user.phone}</div>
							</div>
						</form>
					</article>
					<MDBBtn gradient="black" size="lg" onClick={() => onClickPayment()}>결제하기</MDBBtn>
				</div>
			</section>
		</PageTemplate>
		}
		{!sessionStorage.user &&
		<div>
			<Navigation/><br/><br/><br/><br/>
			<center>
				<h1>로그인후 이용해주세요</h1>
				<input type="button" onClick={homeClick} value={"홈으로.."}/>
			</center>
		</div>
		}

	</>
}