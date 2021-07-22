import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Fragment, useState } from 'react'
import CompteAvue from './compte a vue/CompteAvue';
import Historique from './Historique'
import useLocalStorage from '../../LocalStorage';

export default function Content() {
    let [transactionsDuCompte, setHistorique] = useLocalStorage('dataTransaction', [])
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(props) => ( 
                    <Fragment>
                        <CompteAvue {...props} transactionsDuCompte={transactionsDuCompte} setHistorique={()=>setHistorique()}/> 
                    </Fragment>
                )}></Route>
                <Route path='/historique' render={(props) => (
                    <Fragment>
                        <Historique {...props}  historique={transactionsDuCompte}/>
                    </Fragment>
                )}></Route>
            </Switch>
        </BrowserRouter>
        
    )
}