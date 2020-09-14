import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
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
                            {value:1, label:'원하는 빵 이름 검색',trigger:'breadSearch'},
                            {value:2, label:'빵 카테고리 선택 분류'},
                            {value:3, label:'배송조회'}
                        ]
                    },
                    {
                      id:'breadSearch',
                        message: '구매목적을 선택해 주세요',
                        options:[
                            {value:1, label:'식사대용',trigger:'breadSearch'},
                            {value:2, label:'간식대용',trigger:'breadSearch'},
                            {value:3, label:'다이어트',trigger:'breadSearch'},
                            {value:4, label:'선물',trigger:'breadSearch'},
                        ]
                    }
                ]}
            />
        </ThemeProvider>
    );
};

export default Chatbot;