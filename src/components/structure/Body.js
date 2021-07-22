import React, { Component } from 'react'
import Header from './Header/Header'
import Content from './mainBody/Content'
import Footer from './Footer'

export default class Body extends Component {
    render() {
        return (
            <div className='container py-3'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
