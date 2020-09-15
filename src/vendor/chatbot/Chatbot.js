import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {BreadList} from "../../bread/BreadList";
import {BreadOption} from "../../bread/BreadOption";
const theme = {
    title : '잡담',
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const Chatbot = () => {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                    {
                        id:'1',
                        message: '서비스를 선택해주세요',
                        trigger:'2'
                    },
                    {
                        id:'2',
                        options: [
                            {value:1, label:'원하는 빵 이름 검색',trigger: 'breadSearch'},
                            {value:2, label:'빵 카테고리 선택 분류',trigger:'breadOption'},
                            {value:3, label:'배송조회',trigger: 'shipping'}
                        ]
                    },
                    {
                        id:'breadSearch',
                        message: '원하는 빵이름',
                        user: true,
                        trigger: 'result'
                    },
                    {
                        id: 'result',
                        message: '검색 빵 결과값'
                    },
                    {
                      id:'breadOption',
                        options:[
                            {value:'빵카테고리 선택',label:'빵카테고리 선택',component:<BreadOption/>}
                        ]
                        // options:[
                        //     {value:1,label:'식사대용',trigger:'allergy'},
                        //     {value:2, label:'간식대용',trigger:'allergy'},
                        //     {value:3, label:'다이어트',trigger:'allergy'},
                        //     {value:4, label:'선물',trigger:'allergy'}
                        // ]
                    },
                    // {
                    //     id:'allergy',
                    //     options:[
                    //         {label:'아몬드',trigger:'breadResult'},
                    //         {label:'호두',trigger:'breadResult'},
                    //         {label:'땅콩',trigger:'breadResult'},
                    //         {label:'피스타치오',trigger:'breadResult'},
                    //         {label:'캐슈넛',trigger:'breadResult'},
                    //         {label:'마카마디아',trigger:'breadResult'},
                    //         {label:'밀가루',trigger:'breadResult'},
                    //         {label:'콩(대두)',trigger:'breadResult'},
                    //         {label:'설탕',trigger:'breadResult'},
                    //         {label:'토마토',trigger:'breadResult'},
                    //         {label:'건포도',trigger:'breadResult'},
                    //         {label:'복숭아',trigger:'breadResult'},
                    //     ],
                    // },
                    {
                        id:'breadResult',
                        message: '빵의 카테고리 결과값 들어올곳'
                    },
                    {
                        id:'shipping',
                        message: '배송조회를 위해 아이디입력해주세요',
                        trigger: 'pw'
                    },
                    {
                        id:'pw',
                        message: '배송조회를 위해 비밀번호 입력해주세요',
                        trigger: 'shippingResult'
                    },
                    {
                        id:'shippingResult',
                        options: [
                            {label:'배송조회 결과값'},
                            {value:'배송전체조회',label:'배송전체조회',component:<BreadList/>}
                    ]
                    }

                ]}
            />
        </ThemeProvider>
    );
};

export default Chatbot;