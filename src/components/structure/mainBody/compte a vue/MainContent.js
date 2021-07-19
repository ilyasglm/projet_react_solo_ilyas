
export default function MainContent({userAccounts,setUserAccounts, countId, setCountId}) {
    function addAccount(){
        let inputName = document.getElementById('myID1'); // selecting value of new account name from account creation modal
        let inputNumber = document.getElementById('myID2'); // selecting value of new account number from account creation modal
        let newAccount = {
            name: inputName.value,
            accountNumber: inputNumber.value,
            amount: 1300,
            id: countId
        }
        let userAccountsArray = [...userAccounts, newAccount]
        setUserAccounts(userAccountsArray)
        setCountId(countId + 1)
    }
    function deleteAccount(e){
        let x = (e.target.parentElement).parentElement
        x = x.getAttribute('id')
        if (x != 0) {
            let toBeDeleted = userAccounts
            toBeDeleted.splice(x,1)
            setUserAccounts(toBeDeleted)
        } else {
            alert("You can't delete the main account")
        }
    }

    function changeHandler() {
        
    }
    function moneyTransfer(){
        let transferFrom = document.getElementById('optionTransferFrom');
        let transferTo = document.getElementById('optionTransferTo');
        let amountSent = document.getElementById('amountSent');
        let instantCheck = document.getElementById('instantTransferChck');
        
    }

    
    return (
        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane text-white fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                {/* list rendering of user accounts, all added accounts will be added on the following list */}
                {userAccounts.map(userAccount=> {
                    return(
                        <div key={userAccount.id} id={userAccount.id} className="bg-light border border-1 border-dark text-dark row">
                            <div className="col-8 p-3">
                                <p className='mb-3'>{userAccount.name}</p>
                                <p className='text-black mb-0'>{userAccount.accountNumber}</p>
                            </div>
                            <div className="col-3 p-3">
                                <p className=""><span>{userAccount.amount}</span> Eur</p>
                            </div>
                            <div className="col-1 p-3">
                                <button className='w-100 mb-1'><i class="fas fa-cog"></i></button>
                                <button className='w-100' onClick={(e) => deleteAccount(e)}><i class="fas fa-trash-alt text-danger"></i></button>
                            </div>
                        </div>
                    )
                })}
                {/* Modal opening button followed by account creation modal */}
                <button type="button" className="btn btn-danger rounded-pill my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="fas fa-plus-square" />
                        </button>
                <div className="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Add account</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Account name</label>
                                        <input type="text" className="form-control" id="myID1"/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Account number</label>
                                        <input type="text" className="form-control" id="myID2" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary"  onClick={()=>addAccount()} data-bs-dismiss="modal">add account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Money transfer tab */}
            <div class="tab-pane text-white fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div className="container text-dark bg-light border border-1 border-white">
                    <div className="row my-3">
                        <div className="col-6">
                            <div className="input-group">
                                <label className='input-group-text'>From</label>
                                <select onChange={()=>changeHandler()} class="form-select" id="optionTransferFrom">
                                    <option selected>Account</option>
                                    {/* List rendering of options. Each account number in the state gets and option to send or receive money from the other end */}
                                    {userAccounts.map(userAccount=> {
                                        return(
                                            <option value={userAccount.id}>{userAccount.accountNumber}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group">
                                <label className='input-group-text'>To</label>
                                <select class="form-select" id="optionTransferTo">
                                    <option selected>Account</option>
                                    {userAccounts.map(userAccount=> {
                                        return(
                                            <option value={userAccount.id}>{userAccount.accountNumber}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-4">
                            <div className="input-group">
                                <label className='input-group-text'>Amount</label>
                                <input className="form-control" id="amountSent"/>
                                <label className='input-group-text'>Eur</label>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <label className='input-group-text'>Due date</label>
                                <input type='date' className="form-control" id="dueDate"/>
                            </div>
                        </div>
                        <div className="form-check col-3 align-self-center">
                            <input className="form-check-input" type="checkbox" defaultValue id="instantTransferChck" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Instant transfer
                            </label>
                        </div>
                    </div>
                    <div className="row my-3 justify-content-center">
                        <div className="col-4">
                            <button className="w-100 btn btn-primary rounded">send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane text-white fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                settings
            </div>
        </div>
    )
}
