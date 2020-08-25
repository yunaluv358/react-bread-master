import React, {useEffect, useState} from "react";
import { PageTemplate } from "../common/PageTemplate";
import './breadsearch.css'
import {Navigation} from "../common/HomeMain";
import $ from 'jquery'
import axios from "axios";



    export const BreadSearch = () => {
        const [chart1Select,setChart1Select] =useState("")
        const [breadAll,setBreadAll] =useState([])
        useEffect(()=>{
            axios.get(`http://localhost:8080/bread/findAll`)
                .then((response) => {
                        alert('성공')
                        setBreadAll(response.data)
                    }
                ).catch((error => {
                    alert("실패")
                    throw (error)
                }
            ))

        },[])

        /* useEffect(()=>{
             if(chart1Select){
                setChart1Select(chart1Select)
             }
         },[chart1Select])*/

        const init = (e) => {
            $(window).scrollTop( $('div.find').offset().top - $('div.navbar').height() );

            $('#result').hide();

            $('#chart1 li').removeClass('active');
            $(":input:radio[name=chart1]:checked").prop('checked',false);

            $('#chart2 li').removeClass('active');
            $(":input:checkbox[name=chart2]:checked").each(function(){
                $(e).prop('checked',false);
            });
        }

        const select1 = (e, value, breadAll) => {
            let temp = []
            switch (value) {
                case  "식사대용": case  "식사대용,간식대용" : case"식사대용,다이어트":
                    temp.push(breadAll[1])
                break
                case "다이어트" :
                break

            }

            alert(temp[0].breadName)



            // $('#chart1 li').removeClass('active');
            // $(e).addClass('active');
            // $(e).children().prop('checked',true);
        }


        const select2 = (e) => {

            if( $(e).children().prop('checked') == true ){
                $(e).removeClass('active');
                $(e).children().prop('checked',false);
                var imgpath = 'https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy'+($(e).index()+1)+'.png';
                $(e).children().next().css('background-image','url('+imgpath+')');
            }else{
                $(e).addClass('active');
                $(e).children().prop('checked',true);
                var imgpath = 'https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/on_allergy'+($(e).index()+1)+'.png';
                $(e).children().next().css('background-image','url('+imgpath+')');
            }
        }


        const result = (e) => {

            $('#resultList div.col-xs-6').hide();

            $('#result').show();

            $('#result ul li').hide();

            let selectItem = $(":input:radio[name=chart1]:checked").val();

            $('#resultList div.col-xs-6').each(function () {

                //문자열이 포함되어 있으면
                if ($(e).attr('data-buyType').indexOf(select1) !== -1) {
                    $(e).show();
                }

            });


            $(":input:checkbox[name=chart2]:checked").each(function () {

                var select2 = $(e).val();

                $('#resultList div.col-xs-6').each(function () {

                    if ($(e).attr('data-allergy').indexOf(select2) !== -1) {
                        $(e).hide();
                    }

                });

            });


            /*
                $('input[name="chart2"]').each(function(){
                  if( $(this).prop('checked') == true ){
                    $('#resultList').each(function(){

                    });
                  }
                });
            */
        }

    const almondUrl = "https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy1.png";

    return (<>
            <Navigation/>
        <div style={{marginTop: '120px'}}>

            <div className="userDiv">
            <div className="find">
                <p className="title">
                    <img src="https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/logo.png" className="logo"/>
                </p>
                <p className="stitle">
                    TASTE FOR ALL
                </p>
                <p className="desc">
                    나에게 맞는 더브레드블루<br className="mobile_br"/>제품을 찾아 볼까요?
                </p>
                <p className="stitle2">
                    구매 목적
                </p>
                <p className="title">
                    <img src="https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/check.png"
                         className="check"/>
                </p>
                <ul id="chart1">
                    <li onClick={(e)=>select1(e.target,"식사대용", breadAll)} value="식사대용"><input type="radio"  name="chart1" /><p>식사대용</p>
                        <div className="circle"></div></li>
                    <li onClick={(e)=>select1(e.target,"간식대용")}><input type="radio" name="chart1" value="간식대용"/><p>간식대용</p>
                        <div className="circle"></div></li>
                    <li onClick={(e)=>select1(e.target,"다이어트")} ><input type="radio" name="chart1" value="다이어트"/><p>다이어트</p>
                        <div className="circle"></div></li>
                    <li onClick={(e)=>select1(e.target,"선물")} className="active"><input type="radio" name="chart1"
                                                                                      value="선물"/><p>선물</p>
                        <div className="circle"></div></li>
                </ul>
                <p className="stitle2" style={{"margin-top": '50px'}}>
                    피하고 싶은 재료
                </p>
                <p className="title">
                    <img src="https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/check.png"
                         className="check"/>
                </p>
                <ul id="chart2">
                    <li onClick={(e)=>select2(e.target, "아몬드")}>
                        <input type="checkbox" name="chart2" value="아몬드"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy1.png')"}}></div>

                            <p>아몬드</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "호두")}>
                        <input type="checkbox" name="chart2" value="호두"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy2.png')"}}></div>
                            <p>호두</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "땅콩")}>
                        <input type="checkbox" name="chart2" value="땅콩"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy3.png')"}}></div>
                            <p>땅콩</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "피스타치오")}>
                        <input type="checkbox" name="chart2" value="피스타치오"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy4.png')"}}></div>                            <p>피스타치오</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "캐슈넛")}>
                        <input type="checkbox" name="chart2" value="캐슈넛"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy5.png')"}}></div>                            <p>캐슈넛</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "마카마디아")}>
                        <input type="checkbox" name="chart2" value="마카마디아"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy6.png')"}}></div>                            <p>마카마디아</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "밀가루")}>
                        <input type="checkbox" name="chart2" value="밀가루"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy7.png')"}}></div>                            <p>밀가루</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "콩(대두)")}>
                        <input type="checkbox" name="chart2" value="콩(대두)"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy8.png')"}}></div>                            <p>콩(대두)</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "설탕")}>
                        <input type="checkbox" name="chart2" value="설탕"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy9.png')"}}></div>                            <p>설탕</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "토마토")}>
                        <input type="checkbox" name="chart2" value="토마토"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy10.png')"}}></div>                            <p>토마토</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "건포도")}>
                        <input type="checkbox" name="chart2" value="건포도"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy11.png')"}}></div>                            <p>건포도</p>
                    </li>
                    <li onClick={(e)=>select2(e.target, "복숭아")}>
                        <input type="checkbox" name="chart2" value="복숭아"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy12.png')"}}></div>                            <p>복숭아</p>
                    </li>
                </ul>
                <div id="buttonArea">
                    <button type="button" onClick={(e)=>init(e)}>초기화</button>
                    <button type="button" id="confirm" onClick={(e)=>result(e)}>결과보기</button>
                </div>

            </div>
                <div id="result">

                    <p className="stitle2" style={{"margin-top": "50px"}}>
                        고객님이 건강 할 수 있도록 <span style={{"color": "#999"}}><br className="mobile_br"/>이렇게 추천 합니다.</span>
                    </p>

            </div>


            {/*<div id="resultList">*/}
            {/*    <div id="product_list" className="product-type-gallery">*/}
            {/*        <div className="product-list-10 row">*/}
            {/*            <div className="col-xs-6 col-sm-4" data-buyType="" data-allergy="">*/}
            {/*                <div className="item-list-10">*/}
            {/*                    <div className="product-img">*/}
            {/*                        <a href="https://thebreadblue.com/shop/1584704124">*/}
            {/*                            <div className="product-img-in">*/}
            {/*                                <img*/}
            {/*                                    src="/data/item/1584704124/7ZmI7Y6Y7J207KeA7KCV6riw67Cw7Iah7I2464Sk7J28_2020.0402.png"*/}
            {/*                                    width="600" height="600" alt="무화과 깜빠뉴" title="무화과 깜빠뉴"/>*/}
            {/*                                    <div className="rgba-banner-area"></div></div>*/}
            {/*                        </a>*/}

            {/*                    </div>*/}

            {/*                    <div className="adm-edit-btn btn-edit-mode hidden-xs hidden-sm"*/}
            {/*                         style={{"margin-top": "-10px", "display": "none"}}>*/}
            {/*                        <div className="btn-group">*/}
            {/*                            <a href="https://thebreadblue.com/adm/?dir=shop&amp;pid=itemform&amp;w=u&amp;it_id=1585656636&amp;wmode=1"*/}
            {/*                               onClick="eb_admset_modal(this.href); return false;"*/}
            {/*                               className="btn-e btn-e-xs btn-e-dark btn-e-split"><i*/}
            {/*                                className="far fa-edit"></i> 개별상품 설정</a>*/}
            {/*                            <a href="https://thebreadblue.com/adm/?dir=shop&amp;pid=itemform&amp;w=u&amp;it_id=1585656636"*/}
            {/*                               target="_blank"*/}
            {/*                               className="btn-e btn-e-xs btn-e-dark btn-e-split-dark dropdown-toggle"*/}
            {/*                               title="새창 열기">*/}
            {/*                                <i className="far fa-window-maximize"></i>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    <div className="product-description">*/}
            {/*                        <div className="product-description-in">*/}
            {/*                            <h4 className="product-name">*/}
            {/*                                <a href="https://thebreadblue.com/shop/1585656636">*/}
            {/*                                    더브레드블루 정기배송 </a>*/}
            {/*                            </h4>*/}

            {/*                            <div className="product-price">*/}
            {/*                                <span className="title-price">₩ 50,000</span>*/}
            {/*                            </div>*/}


            {/*                            <div className="product-info"></div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="clearfix"></div>*/}
            {/*                    <div className="product-description-bottom">*/}
            {/*                        <a className="pull-left font-size-12"*/}
            {/*                           href="https://thebreadblue.com/shop/itemuselist.php?sfl=a.it_id&stx=1585672089">리뷰보기</a>*/}
            {/*                        <ul className="list-inline product-ratings pull-right">*/}
            {/*                            <li><i className="rating far fa-star"></i></li>*/}
            {/*                            <li><i className="rating far fa-star"></i></li>*/}
            {/*                            <li><i className="rating far fa-star"></i></li>*/}
            {/*                            <li><i className="rating far fa-star"></i></li>*/}
            {/*                            <li><i className="rating far fa-star"></i></li>*/}
            {/*                        </ul>*/}
            {/*                        <div className="clearfix"></div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </div>
        </div>

    </>

    )




}