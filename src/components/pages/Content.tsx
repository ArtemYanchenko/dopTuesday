import React from 'react';
import {useNavigate} from 'react-router-dom';

type  PropsType = {
    heading:string
    pages:number
    about:string
}

const Content = (props:PropsType) => {

    const {heading,pages} = props
    const navigate = useNavigate()

    const mainPage = () =>{
        navigate('/page/0')
    }
    const comeBack = () =>{
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>

            <span>{props.about}</span>

            <button onClick={mainPage}>MainPage</button>
            <button onClick={comeBack}>comeBack</button>
        </div>
    );
};

export default Content;