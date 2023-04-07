import React from 'react';
import {PagesType} from '../../data/dataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';
import Content from './Content';

type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {
    const param = useParams();
    const id = Number(param.id)
    const error = (id >= props.pages.length) || (id < 0) || isNaN(id);
    return (
        error ?
            <Error404/>
            : <div>
             <Content heading={props.pages[id].heading} about={props.pages[id].about} pages={id}/>
            </div>
    );
};
