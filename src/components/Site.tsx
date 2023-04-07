import React, {useEffect, useState} from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './pages/Error404';
import {Page} from './pages/Page';
import {dataState} from '../data/dataState';
import styled from 'styled-components';
import {useWindowSize} from '../helpers/useWindowSize';


export const Site = () => {
    let size = useWindowSize();
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>


                {size > 600 ?
                    <div className={styles.nav}>
                        <NavWrapper><NavLink to={'/page/0'}> PAGE 1</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/page/1'}> PAGE 2</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/page/2'}> PAGE 3</NavLink></NavWrapper>
                    </div>
                    : <div></div>
                }


                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        <Route path={'/page/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`