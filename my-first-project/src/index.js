import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

let posts = [
    {id: '1', message: 'My first post', likes: '1'},
    {id: '2', message: 'How are you?', likes: '3'}
];
let dialogs = [
    {id: '1', name: 'Andrey'},
    {id: '2', name: 'Sveta'},
    {id: '3', name: 'Sasha'},
    {id: '4', name: 'Viktor'},
    {id: '5', name: 'Yulia'}
];
let messages = [
    {id: '1', message: 'Hi, how are you?'},
    {id: '2', message: 'I\'m fine'},
    {id: '3', message: 'What are you doing?'},
    {id: '4', message: 'I\'m learning React'},
]
ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
