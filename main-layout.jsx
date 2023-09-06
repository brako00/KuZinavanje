import React from 'react';
import {Footer} from '../footer/footer'
import {Header} from '../header/header'


const MainLayout=({children})=>{
    return(
        <>
        <Header/>
            <div className='childMainLayout'>{children}</div>
        <Footer/>
        </>
    )
}

export default MainLayout;