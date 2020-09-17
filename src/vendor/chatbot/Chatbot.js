import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {BreadList} from "../../bread/BreadList";
import {BreadOption} from "../../bread/BreadOption";
import {ChatBotLogin} from "./ChatBotLogin";
import {ChatBotSearch} from "./ChatBotSearch";
import {BotBreadCategoly} from "./BotBreadCategoly";
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
                floating = {true}
                headerTitle = {'Bread bot'}
                enableSmoothScroll = {true}
                steps={[
                    {
                        id:'1',
                        message: '이용해주셔서 감사합니다 서비스를 선택해주세요',
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
                        options: [
                            {label:'검색결과',component: <ChatBotSearch/>},
                        ]
                    },
                    {
                      id:'breadOption',
                        options:[
                            {label:'빵카테고리 선택',component:<BotBreadCategoly/>},
                        ]
                    },
                    {
                        id:'shipping',
                        options:[
                            {label:'배송조회를 위해 아이디와 비밀번호를 입력해주세요',component:<ChatBotLogin/>},
                        ]
                    }
                ]}
            />
        </ThemeProvider>
    );
};

export default Chatbot;