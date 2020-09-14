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
const steps = [
    {
        id: '1',
        message: 'bread chat bot 입니다!',
        trigger: '2'
    },
    {
        id: '2',
        component: (
            <div> 안녕하세요  번호를 선택해주세요 </div>
        )
    },
    {
      id:'3',
      option : [
          { value: '1', label: '1', trigger: '3' }
      ],
        end:true
    }
]
const Chatbot = () => {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
            />
        </ThemeProvider>
    );
};

export default Chatbot;