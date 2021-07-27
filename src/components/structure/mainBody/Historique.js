import React from 'react'


export default function CompteDepargne(transactionsDuCompte) {
    let historique = transactionsDuCompte.historique;
    let userAccounts = JSON.parse(localStorage.getItem('dataUserAccounts'))
    let checkDeleted = JSON.parse(localStorage.getItem('dataDeleted'))
    return (
        <div>
            <div className="mt-5 p-5 container text-center bg-perso border border-white border-2">
                <h1 className='mb-5'> Historique de transactions</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">nr</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody className='bg-perso2'>
                        {historique.map((historique,i,j,k)=>{
                            j = 0;
                            k = 0;
                            return(
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>
                                        {userAccounts.map(element => {
                                            if (element.id == historique.sendFrom) {
                                                return element.name
                                            }})
                                        }
                                        { (checkDeleted != null) ? (checkDeleted.map(element => {
                                                if (element.id == historique.sendFrom) {
                                                    return element.name + ' (deleted)'
                                                }
                                            })): ''
                                        }
                                    </td>
                                    <td>
                                        {userAccounts.map(element => {
                                            if (element.id == historique.sendTo) {
                                                return element.name
                                            }})
                                        }
                                        { (checkDeleted != null) ? (checkDeleted.map(element => {
                                                if (element.id == historique.sendTo) {
                                                    return element.name + ' (deleted)'
                                                }
                                            })): ''
                                        }
                                    </td>
                                    <td>{historique.amountSent} Eur</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}