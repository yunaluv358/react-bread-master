import React, {useEffect, useState} from "react";
import {Navigation} from "../common/HomeMain";
import {Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";

export const BreadItem = () => {

    const [bread, setBread] = useState("");
    const history = useHistory()
    useEffect(() => {
        setBread(JSON.parse(localStorage.getItem('selectedBread')))
    }, [])
    const passDetail = bread => {
        alert('소비자 선택 후 ...' + bread.breadName)
        localStorage.setItem('selectedBread', JSON.stringify(bread))
    }
    const homeClick = e =>{
        alert("홈으로 이동합니다")
        history.push("/")
    }
    return (<>
            {sessionStorage.user &&
            <>
                <Navigation/>
                <div style={{"padding-bottom": "120px"}}/>
                <div style={{"text-align": "center"}}>
                    <div grid-col="x10" grid-pad="1.5">

                        <div>
                            <center><img src={bread.breadImage} className="fotorama__img" style={{"width": "345px"}}/>
                            </center>
                        </div>
                        <h3 className="product-title">
                            <strong>{bread.breadName}</strong>
                        </h3>
                        <p className="font-size-14 color-grey">{bread.breadDescription}</p>
                        <div className="shop-description-box" style={{"width": "50%", "margin": "0 auto"}}>
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
                                </div>

                                </tbody>
                            </table>
                        </div>
                        <div id="sit_tot_price" style={{"padding-bottom": "20px"}}>
                            <span>총 금액 </span><strong>{bread.breadPrice}</strong> 원
                        </div>
                        <div id="sit_ov_btn">
                            <Button variant="primary" size="lg" href="order" rel="next_page"
                                    onClick={() => passDetail(bread)}>바로구매</Button>{' '}
                            <div><img src={bread.breadImageDetail}/></div>
                        </div>
                    </div>
                </div>
            </>
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
    )
}