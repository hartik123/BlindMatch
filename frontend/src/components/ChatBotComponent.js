import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const ChatBotComponent = () => {

    const steps = [
        {
          id: '0',
          message: 'Welcome to the chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Please provide your good name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger:'3',
        },
        {
          id:'3',
          message: 'Hi {previousValue}, how can I help you?',
          trigger: '4',
        },
        {
          id: '4',
          options: [
            {value: 1, label: 'Issues in Login/SignUp', trigger: '5'},
            {value: 2, label: 'Problem in Chatting', trigger: '6' },
            {value: 3, label: 'Upgarde to Premium services?', trigger: '9'},
          ],
        },
        {
          id:'5',
          options: [
            {value: 1, label: "Sign In Issue?", trigger: '6'},
            {value: 2, label: "Sign Up Issue?", trigger: '6'}
          ]
        },{
          id:'6',
          message: 'Kindly explain the problem faced in brief.',
          trigger: '7'
        },{
          id:'7',
          user: true,
          trigger: '8'
        },{
          id:'8',
          message: 'Will get back to you soon with solution.',
          trigger: '10'
        },{
          id:'9',
          message: "Please visit Profile > Upgrade Account> Make payment.",
          trigger: '10'
        },
        {
          id:'10',
          message: "Any further enquiries?",
          trigger: '11',
        },
        {
          id: '11',
          options : [
            {value:1, label:'Yes', trigger: '4'},
            {value:2, label:'No', trigger: '12'}
          ],
        },{
          id: '12',
          message: 'Good Bye',
          end: true
        }
      ];

      const theme = {
        background: '#d398d4',
        headerBgColor: '#cf58d1',
        headerFontSize: '20px',
        botBubbleColor: '#772eab',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#a85dde',
        userFontColor: 'white',
    };

    const config ={
      headerTitle:"Connect us",
      floating: true,
    }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config}/>
        </ThemeProvider>
    </div>
  )
}

export default ChatBotComponent