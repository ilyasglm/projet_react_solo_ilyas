import React, { useState } from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'
import useLocalStorage from '../../../LocalStorage'

export default function CompteAvue() {
    let [userAccounts, setUserAccounts] = useLocalStorage('dataUserAccounts', [
        {
            name: 'ilyas Saglam', // titulaire du compte
            accountNumber: 'BE81 0012 3456 7890', // numéro de compte
            amount: 1346.43, // l'argent disponnible sur le compte
            id:0 // l'id est utiliser pour le Key dans le array.map -> elle est dynamique du genre : id = userAccounts.length
        }
    ])
    // useLocalStorage('dataUserAccounts', userAccounts);
    let [countId, setCountId] = useLocalStorage('dataCountId', 1);
    return (
        <div className='row mt-5'>
            <div className="col-3">
                <SideBar/>
            </div>
            <div className="col-8 offset-1">
                <MainContent userAccounts={userAccounts} setUserAccounts={setUserAccounts} countId={countId} setCountId={setCountId}/>
            </div>
        </div>
    )
}
