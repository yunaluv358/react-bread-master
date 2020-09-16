import React, {useEffect, useState} from "react";
import {Navigation} from "../common/HomeMain";
import { Button } from 'react-bootstrap';

export const SearchBreadItem = () => {

    const [bread,setBread]=useState("");

    useEffect(() => {
        setBread(JSON.parse(localStorage.getItem('searchBread')))
    }, [])
    const searchDetail = bread => {
        localStorage.setItem('searchBread', JSON.stringify(bread))
    }
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
                            </tbody>
                        </table>
                    </div>
                    <div id="sit_tot_price" style={{"padding-bottom": "20px"}}><span>총 금액 </span><strong>{bread.breadPrice}</strong> 원</div>
                    <div id="sit_ov_btn">
                        <Button variant="primary" size="lg" href="order" rel="next_page" onClick={()=>searchDetail(bread)}>바로구매</Button>{' '}
                        <div><img src={bread.breadImageDetail}/></div>
                    </div>
                </div>
            </div>


        </>

    )

}