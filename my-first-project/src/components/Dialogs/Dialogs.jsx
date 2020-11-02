import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogsData = [
        { id: '1', name: 'Andrey'},
        { id: '2', name: 'Sveta'},
        { id: '3', name: 'Sasha'},
        { id: '4', name: 'Viktor'},
        { id: '5', name: 'Yulia'}
    ]
    let dialogsElements = dialogsData.map( d => (<DialogItem name={d.name} id={d.id}/>));

    let messagesData = [
        {id: '1', message: 'Hi, how are you?'},
        {id: '2', message: 'I\'m fine'},
        {id: '3', message: 'What are you doing?'},
        {id: '4', message: 'I\'m learning React'},
    ]
    let messagesElement = messagesData.map( m => (<Message message={m.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}
export default Dialogs;