import React, {useEffect, useState} from "react";
import './order-register.css'
import { PageTemplate } from '../common/PageTemplate'
import {MDBBtn} from "mdbreact";
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {Navigation} from "../common/HomeMain";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
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
	},
	margin : {
		marginTop : "20%"
	}
}));
export const OrderRegister = () => {
	const [pageSize, setPageSize] = useState(5)
	const [currentPage,setCurrentPage] = useState(1)
	const [user,setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
	const [bread,setBread]= useState(JSON.parse(localStorage.getItem('selectedBread')))
	const [date,setDate]= useState(new Date())
	const history = useHistory()
	const classes = useStyles()

	const nullCheck = () => {
		history.push('/')
	}

	const onClickPayment = () => {
		// 가맹점 코드
		const { IMP } = window;
		IMP.init('imp28320704');
		const data = {
			pg: 'html5_inicis',  // pg
			pay_method: 'card', //결제 방법
			merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
			name : bread.breadName, //상품명
			amount: bread.breadPrice, // 결제금액,상품가격
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
			shippingPrice : bread.breadPrice,
			shippingDate: date.toLocaleString(),
			shippingAddr: user.addr,
			shippingBreadImg : bread.breadImage
		}
		if (success) {
			axios.post(`http://localhost:8080/shipping/payment`, data)
				.then((response) => {
					history.push('/shipping')
				})
				.catch((err) => {
					throw err;
				});
		} else {
		}
	}
	const homeClick = e =>{
		history.push("/")
	}
	return <>
		{sessionStorage.user &&
		<PageTemplate>
			{localStorage.selectedBread &&
				<section className={classes.paper}>
					<center>
						<div className="sc-esjQYD goIgCJ">
							<article className="sc-jnlKLf bCmhqn">
								<div className="sc-VigVT cibeyu"><h2 className="sc-jTzLTM btRZwy">주문화면</h2></div>
								<div className="sc-VigVT cibeyu"><h3 className="sc-jTzLTM btRZwy">{bread.breadName}</h3>
								</div>
								<table className="fQMIPz">
									<tbody>
									<tr>
										<td className="sc-hqyNC fvxYsy"></td>
										<td><img
											src={bread.breadImage}
											className="fotorama__img"
											style={{"width": "345px"}}
										/></td>
									</tr>
									</tbody>
								</table>
							</article>
							<div>
								<h3 className="sc-kIPQKe hRzZDy">주문정보</h3>
								<form className={classes.box}>
									<div className="NngVZ">
										<div>상품명</div>
										<div>{bread.breadName}</div>
									</div>
									<div className="NngVZ">
										<div className="sc-RefOD gBZRgU">주문자명</div>
										<div className="sc-iQKALj fxDVnv">{user.name}</div>
									</div>
									<div className="NngVZ">
										<div className="sc-RefOD gBZRgU">배송지</div>
										<div className="sc-iQKALj sc-bwCtUz lgbbNn">{user.addr}</div>
										<div className="sc-iQKALj sc-bwCtUz lgbbNn">주소</div>
									</div>
									<div className="NngVZ">
										<div className="sc-RefOD gBZRgU">번호</div>
										<div className="sc-iQKALj fxDVnv">{user.phone}</div>
									</div>
									<div className="NngVZ">
										<div className="sc-RefOD gBZRgU">주문가격</div>
										<div className="sc-iQKALj fxDVnv">{bread.breadPrice}</div>
									</div>
								</form>
							</div>
							<MDBBtn gradient="black" size="lg" onClick={() => onClickPayment()}>결제하기</MDBBtn>
						</div>
					</center>
				</section>
			}
			{!localStorage.selectedBread &&
			<section className={classes.paper}>
				<center>
					<div className="sc-esjQYD goIgCJ">
						<article className="sc-jnlKLf bCmhqn">
							<div className="sc-VigVT cibeyu"><h2 className="sc-jTzLTM btRZwy">주문화면</h2></div>
							<div className="sc-VigVT cibeyu"><h3 className="sc-jTzLTM btRZwy"></h3>
							</div>
							<table className="fQMIPz">
								<tbody>
								<tr>
									<td className="sc-hqyNC fvxYsy"></td>
									<td></td>
								</tr>
								</tbody>
							</table>
						</article>
						<div>
							<h3 className="sc-kIPQKe hRzZDy">주문정보</h3>
							<form className={classes.box}>
								<div className="NngVZ">
									<div>상품명</div>
									<div></div>
								</div>
								<div className="NngVZ">
									<div className="sc-RefOD gBZRgU">주문자명</div>
									<div className="sc-iQKALj fxDVnv"></div>
								</div>
								<div className="NngVZ">
									<div className="sc-RefOD gBZRgU">배송지</div>
									<div className="sc-iQKALj sc-bwCtUz lgbbNn"></div>
									<div className="sc-iQKALj sc-bwCtUz lgbbNn">주소</div>
								</div>
								<div className="NngVZ">
									<div className="sc-RefOD gBZRgU">번호</div>
									<div className="sc-iQKALj fxDVnv"></div>
								</div>
								<div className="NngVZ">
									<div className="sc-RefOD gBZRgU">주문가격</div>
									<div className="sc-iQKALj fxDVnv"></div>
								</div>
							</form>
						</div>
						<MDBBtn href={'/breadList'} gradient="black" size="lg" onClick={() => onClickPayment()}>상품 목록으로</MDBBtn>
					</div>
				</center>
			</section>

			}
		</PageTemplate>
		}
		{!sessionStorage.user &&
		<div>
			<Navigation/>
			<center>
				<h1 className={classes.margin}>로그인후 이용해주세요</h1>
				<input type="button" onClick={homeClick} value={"홈으로.."}/>
			</center>
		</div>
		}
	</>
}