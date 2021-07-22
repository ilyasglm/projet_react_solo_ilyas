import React from 'react'


export default function CompteDepargne(historiqueTrans) {
    return (
        <div>
            <div className="container text-center bg-perso border border-white border-2">
                <h1> Historique de transactions</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(historiqueTrans)}
                        {/* {historiqueTrans.map(historique=>{
                            <tr>
                                <td>{historique.sendFrom}</td>
                                <td>{historique.sendTo}</td>
                                <td>{historique.amountSent}</td>
                            </tr>
                        })} */}
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}
