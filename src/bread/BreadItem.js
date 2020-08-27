import React, {useEffect, useState} from "react";
//import './bread.css'
import axios from "axios";
import {Navigation} from "../common/HomeMain";

export const BreadItem = () => {
	//const [selectedBread, setselectedBread] = useState([])

	const [bread,setBread]=useState("");

	useEffect(() => {

		setBread(JSON.parse(localStorage.getItem('selectedBread')))

	}, [])

	return(<>
				<Navigation/>
				<div style={{"padding-bottom":"120px"}}/>



						<div style={{"text-align":"center"}}>
							<div grid-col="x10" grid-pad="1.5">

								<div><center><img src={bread.breadImage} className="fotorama__img" style={{"width":"345px"}}/></center></div>
								<h3 className="product-title">
									<strong>{bread.breadName}</strong>
								</h3>

								<p className="font-size-14 color-grey">{bread.breadDescription}</p>

								<div className="shop-description-box" style={{"width":"50%", "margin" : "0 auto"}}>
									<table className="table">
										<tbody>
										<tr>
											<th scope="row">판매가격</th>
											<td>
												<strong className="shop-product-prices">{bread.breadPrice}</strong>
												<input type="hidden" id="it_price" value="7900"/>
											</td>
										</tr>
										<tr>
											<th>배송비</th>
											<td>
												3,500원(주문 시 결제, 오만원 이상 무료 배송)
											</td>
										</tr>


										<div id="sit_sel_option">
											<h3>선택된 옵션</h3>
											<ul className="sit_opt_added">
												<li className="sit_opt_list">
													<input type="hidden" name="io_type[1585656636][]" value="0"/>
													<input type="hidden" name="io_id[1585656636][]" value=""/>
													<input type="hidden" name="io_value[1585656636][]" value="무화과 깜빠뉴"/>
													<input type="hidden" className="io_price" value="0"/>
													<input type="hidden" className="io_stock" value="99930"/>
													<div className="opt_name">
														<span className="sit_opt_subj">{bread.breadName}</span>
													</div>
												</li>
											</ul>
											{/*<script>*/}
											{/*    $(function() {*/}
											{/*    price_calculate();*/}
											{/*});*/}
											{/*</script>*/}
										</div>

										</tbody>
									</table>
								</div>
								<div id="sit_tot_price"><span>총 금액 </span><strong>{bread.breadPrice}</strong> 원</div>


								<div id="sit_ov_btn">
									<button type="button" onClick="location.href='order" className="sit_btn_buy">
										바로구매
									</button>
									<a href="order" rel="next_page">바로구매</a>
									<input type="button" value="확인" onClick="location.href='BreadOrder.js'"/>
									<div><img src={bread.breadImageDetail}/></div>
								</div>
							</div>
						</div>


			</>

	)

}