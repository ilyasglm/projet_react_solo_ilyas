import React from 'react'


export default function CompteDepargne(transactionsDuCompte) {
    let historique = transactionsDuCompte.historique;
    let userAccounts = JSON.parse(localStorage.getItem('dataUserAccounts'))
    return (
        <div>
            {console.log(transactionsDuCompte.historique)}
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
                        {historique.map((historique,i)=>{
                            return(
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{userAccounts.map(element => {
                                        if (element.id == historique.sendFrom) {
                                            return element.name
                                        }
                                    })}</td>
                                    <td>{userAccounts.map(element => {
                                        if (element.id == historique.sendTo) {
                                            return element.name
                                        }
                                    })}</td>
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