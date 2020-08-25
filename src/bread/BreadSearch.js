import React, {useEffect, useState} from "react";
import { PageTemplate } from "../common/PageTemplate";
import './breadsearch.css'
import {Navigation} from "../common/HomeMain";
import $ from 'jquery'


    export const BreadSearch = () => {


    const [chart1Select,setChart1Select] =useState("")


        useEffect(()=>{
            if(chart1Select){
               setChart1Select(chart1Select)
            }
        },[chart1Select])

    const almondUrl = "https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy1.png";
    return (
        <>
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
                    <li onClick={(e)=>select1(e.target,"식사대용")}><input type="radio"  name="chart1" value="식사대용"/><p>식사대용</p>
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
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="아몬드"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy1.png')"}}></div>

                            <p>아몬드</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="호두"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy2.png')"}}></div>
                            <p>호두</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="땅콩"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy3.png')"}}></div>
                            <p>땅콩</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="피스타치오"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy4.png')"}}></div>                            <p>피스타치오</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="캐슈넛"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy5.png')"}}></div>                            <p>캐슈넛</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="마카마디아"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy6.png')"}}></div>                            <p>마카마디아</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="밀가루"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy7.png')"}}></div>                            <p>밀가루</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="콩(대두)"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy8.png')"}}></div>                            <p>콩(대두)</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="설탕"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy9.png')"}}></div>                            <p>설탕</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="토마토"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy10.png')"}}></div>                            <p>토마토</p>
                    </li>
                    <li onClick="javascript:select2(this);" className="">
                        <input type="checkbox" name="chart2" value="건포도"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy11.png')"}}></div>                            <p>건포도</p>
                    </li>
                    <li onClick="javascript:select2(this)" className="">
                        <input type="checkbox" name="chart2" value="복숭아"/>
                            <div className="circle"
                                 style={{backgroundImage:"url('https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy12.png')"}}></div>                            <p>복숭아</p>
                    </li>
                </ul>
                <div id="buttonArea">
                    <button type="button" onClick="javascript:init();;">초기화</button>
                    <button type="button" id="confirm" onClick="javascript:result();">결과보기</button>
                </div>

            </div>
                <div id="result">

                    <p className="stitle2" style={{"margin-top": "50px"}}>
                        고객님이 건강 할 수 있도록 <span style={{"color": "#999"}}><br className="mobile_br"/>이렇게 추천 합니다.</span>
                    </p>


                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="product-description-bottom">
                                            <a className="pull-left font-size-12"
                                               href="https://thebreadblue.com/shop/itemuselist.php?sfl=a.it_id&amp;stx=1585672089">리뷰보기</a>
                                            <ul className="list-inline product-ratings pull-right">
                                                <li><i className="rating far fa-star"></i></li>
                                                <li><i className="rating far fa-star"></i></li>
                                                <li><i className="rating far fa-star"></i></li>
                                                <li><i className="rating far fa-star"></i></li>
                                                <li><i className="rating far fa-star"></i></li>
                                            </ul>
                                            <div className="clearfix"></div>
                                        </div>

            </div>
        </div>

    </>
    )
}


const init = () => {
    $(window).scrollTop( $('div.find').offset().top - $('div.navbar').height() );

    $('#result').hide();

    $('#chart1 li').removeClass('active');
    $(":input:radio[name=chart1]:checked").prop('checked',false);

    $('#chart2 li').removeClass('active');
    $(":input:checkbox[name=chart2]:checked").each(function(){
        $(this).prop('checked',false);
    });
}

const select1 = (e,value) => {
    //setChart1Select(value)
    alert(value)
    $('#chart1 li').removeClass('active');
    $(e).addClass('active');
    $(e).children().prop('checked',true);
}


const select2 = (obj) => {
    if( $(obj).children().prop('checked') == true ){
        $(obj).removeClass('active');
        $(obj).children().prop('checked',false);
        var imgpath = 'https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/allergy'+($(obj).index()+1)+'.png';
        $(obj).children().next().css('background-image','url('+imgpath+')');
    }else{
        $(obj).addClass('active');
        $(obj).children().prop('checked',true);
        var imgpath = 'https://thebreadblue.com/theme/eb4_shop_005/page/img/findbread/on_allergy'+($(obj).index()+1)+'.png';
        $(obj).children().next().css('background-image','url('+imgpath+')');
    }
}

const result = () => {

    $('#resultList div.col-xs-6').hide();

    $('#result').show();

    $('#result ul li').hide();

    var select1 = $(":input:radio[name=chart1]:checked").val();

    $('#resultList div.col-xs-6').each(function () {

        //문자열이 포함되어 있으면
        if ($(this).attr('data-buyType').indexOf(select1) !== -1) {
            $(this).show();
        }

    });


    $(":input:checkbox[name=chart2]:checked").each(function () {

        var select2 = $(this).val();

        $('#resultList div.col-xs-6').each(function () {

            if ($(this).attr('data-allergy').indexOf(select2) !== -1) {
                $(this).hide();
            }

        });

    });


}