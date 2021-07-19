import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'
import CompteAvue from './compte a vue/CompteAvue';
import CompteDepargne from './CompteDepargne';

export default function Content() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={CompteAvue}></Route>
                <Route path='/compteDepargne' component={CompteDepargne}></Route>
            </Switch>
        </BrowserRouter>
        
    )
}