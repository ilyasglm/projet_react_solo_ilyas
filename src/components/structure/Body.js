import React from 'react'
import Header from './Header/Header'
import Content from './mainBody/Content'
import Footer from './Footer'

export default function Body() {
    return (
        <div className='container py-3'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}
