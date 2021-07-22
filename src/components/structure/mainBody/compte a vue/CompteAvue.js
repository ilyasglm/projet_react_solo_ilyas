import React from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'
import useLocalStorage from '../../../LocalStorage'

export default function CompteAvue(transactionsDuCompte,setHistorique) {
    let [userAccounts, setUserAccounts] = useLocalStorage('dataUserAccounts', [
        {
            name: 'ilyas Saglam', // titulaire du compte
            accountNumber: 'BE81 0012 3456 7890', // numéro de compte
            amount: 1346.43, // l'argent disponnible sur le compte
            id:0 // l'id est utiliser pour le Key dans le array.map -> elle est dynamique du genre : id = userAccounts.length
        }
    ])
    let [countId, setCountId] = useLocalStorage('dataCountId', 1);
    let [sendFrom, setSendFrom] = useLocalStorage('dataSendFrom', '');
    let [sendTo, setSendTo] = useLocalStorage('dataSendTo', '');
    
    return (
        <div className='row mt-5 pt-5'>
            <div className="col-3">
                <SideBar/>
            </div>
            <div className="col-8 offset-1">
                <MainContent transactionsDuCompte={transactionsDuCompte} setHistorique={setHistorique} sendFrom={sendFrom} setSendFrom={setSendFrom} setSendTo={setSendTo} sendTo={sendTo} userAccounts={userAccounts} setUserAccounts={setUserAccounts} countId={countId} setCountId={setCountId}/>
            </div>
        </div>
    )
}
