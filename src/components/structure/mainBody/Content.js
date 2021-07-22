import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'
import CompteAvue from './compte a vue/CompteAvue';
import Historique from './Historique'
import useLocalStorage from '../../LocalStorage';

export default function Content() {
    let [historiqueTrans, setHistorique] = useLocalStorage('dataHistorique', [
        {
            sendFrom: 'Bxl Formation',
            sendTo: 'Ilyas Saglam',
            amountSent: 1346.43
        }
    ])
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(setHistorique) => ( <CompteAvue setHistorique={setHistorique}/>)}></Route>
                <Route path='/historique' render={( historiqueTrans) => (<Historique  historiqueTrans={historiqueTrans} />)}></Route>
            </Switch>
        </BrowserRouter>
        
    )
}