import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {

    let dialogsData = [
        { id: '1', name: 'Andrey'},
        { id: '2', name: 'Sveta'},
        { id: '3', name: 'Sasha'},
        { id: '4', name: 'Viktor'},
        { id: '5', name: 'Yulia'}
    ]
    let messengesData = [
        {id: '1', message: 'Hi, how are you?'},
        {id: '2', message: 'I\'m fine'},
        {id: '3', message: 'What are you doing?'},
        {id: '4', message: 'I\'m learning React'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messengesData[0].message}/>
                <Message message={messengesData[1].message}/>
                <Message message={messengesData[2].message}/>
                <Message message={messengesData[3].message}/>
            </div>

        </div>
    )
}
export default Dialogs;