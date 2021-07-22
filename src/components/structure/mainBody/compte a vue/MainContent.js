import { useState } from "react";
import useLocalStorage from '../../../LocalStorage'

export default function MainContent({userAccounts, setUserAccounts, countId, setCountId, sendFrom, sendTo, setSendFrom, setSendTo, transactionsDuCompte, setHistorique,
}) {
  // Creation of states
  let historique = transactionsDuCompte.transactionsDuCompte;
  let [chkbox, setChkbox] = useState("false");
  let [myId, setMyId] = useState("");
  let [myColor, setMyColor] = useLocalStorage('dataMyColor', 'blue')

  // Change handlers
  function changeHandlerColor(e) {
    if (e.target.value == 'green') {
      setMyColor('green')
    } else if (e.target.value == 'red') {
      setMyColor('red')
    } else {
      setMyColor('blue')
    }
  }

  function handleChange() {
    if (chkbox == "false") {
      setChkbox("true");
    } else {
      setChkbox("false");
    }
  }
  
  function changeHandler(e) {
    setSendFrom(e.target.value);
    console.log(e.target.value);
  }

  function changeHandler2(e) {
    setSendTo(e.target.value);
    console.log(e.target.value);
  }

  // Main Functions
  function addAccount() {
    let inputName = document.getElementById("myID1"); // selecting value of new account name from account creation modal
    let inputNumber = document.getElementById("myID2"); // selecting value of new account number from account creation modal
    let newAccount = {
      name: inputName.value,
      accountNumber: inputNumber.value,
      amount: 1300,
      id: countId,
    };
    let userAccountsArray = [...userAccounts, newAccount];
    setUserAccounts(userAccountsArray);
    setCountId(countId + 1);
  }

  function deleteAccount(userId) {
    let toBeDeleted = userAccounts;
    toBeDeleted.forEach((element) => {
      if (element.id == userId) {
        let x = toBeDeleted.indexOf(element);
        toBeDeleted.splice(x, 1);
      }
    });
    setUserAccounts(toBeDeleted);
    window.location.reload(true);
  }

  function moneyTransfer() {
    let amountSent, findMe;
    amountSent = document.getElementById("amountSent").value;
    findMe = userAccounts;
    findMe.forEach((element) => {
      if (element.id == sendFrom) {
        return (element.amount = element.amount - amountSent);
      }
      if (element.id == sendTo) {
        return (element.amount = +element.amount + +amountSent);
      }
    });
    if (chkbox == "true") {
      setUserAccounts(findMe);
    } else {
      setTimeout(() => {
        alert(`${amountSent} € a été débité de votre compte`);
        setUserAccounts(findMe);
        window.location.reload(true);
      }, 5000);
    }
    let newHistorique = {
      sendFrom: sendFrom,
      sendTo: sendTo,
      amountSent: amountSent,
    };
    let historiqueTransArray = [...historique, newHistorique];
    localStorage.setItem(
      "dataTransaction",
      JSON.stringify(historiqueTransArray)
    );
    window.location.reload(true);
  }

  function modifyAccount() {
    let modifiedName = document.getElementById("modifiedName");
    let modifiedNumber = document.getElementById("modifiedNumber");
    let modifiedUsers = userAccounts;
    modifiedUsers.forEach((element) => {
      if (element.id == myId) {
        element.name = modifiedName.value;
        element.accountNumber = modifiedNumber.value;
        console.log(element.id);
      }
    });
    setUserAccounts(modifiedUsers);
    window.location.reload(true);
  }

  function changeMyColor() {
    let changeMyBGColor = document.getElementById('app')
    if (myColor == 'green') {
      changeMyBGColor.classList.remove('bg-primary')
      changeMyBGColor.classList.remove('bg-danger')
      changeMyBGColor.classList.add('bg-success')
    } else if (myColor == 'red') {
      changeMyBGColor.classList.remove('bg-primary')
      changeMyBGColor.classList.remove('bg-success')
      changeMyBGColor.classList.add('bg-danger')
    } else {
      changeMyBGColor.classList.remove('bg-danger')
      changeMyBGColor.classList.remove('bg-success')
      changeMyBGColor.classList.add('bg-primary')
    }
  }

  return (
    <div className="tab-content" id="v-pills-tabContent">
      {/* Compte a vue page */}
      <div
        className="tab-pane text-white fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        {/* list rendering of user accounts, all added accounts will be added on the following list */}
        {userAccounts.map((userAccount) => {
          return (
            <div
              key={userAccount.id}
              id={userAccount.id}
              className="bg-perso border border-2 border-white text-dark row"
            >
              <div className="col-8 p-3">
                <p className="mb-3">{userAccount.name}</p>
                <p className="text-black mb-0">{userAccount.accountNumber}</p>
              </div>
              <div className="col-3 p-3">
                <p className="">
                  <span>{userAccount.amount}</span> Eur
                </p>
              </div>
              <div className="col-1 p-3" id={userAccount.id}>
                <button
                  onClick={() => setMyId(userAccount.id)}
                  className="w-100 mb-1 border-0 bg-transparent text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fas fa-cog fa-2x"></i>
                </button>
                <button
                  className="w-100 border-0 bg-transparent"
                  onClick={() => deleteAccount(userAccount.id)}
                >
                  <i className="fas fa-trash-alt fa-2x text-danger"></i>
                </button>
                <div
                  className="modal fade text-dark"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modify Account information
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="modifiedName"
                              placeholder="Account name"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="modifiedNumber"
                              placeholder="Account number"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          onClick={() => modifyAccount()}
                          className="btn btn-primary"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* Modal opening button followed by account creation modal */}
        <button
          type="button"
          className="btn btn-danger rounded-pill my-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i className="fas fa-plus-square" />
        </button>
        <div
          className="modal fade text-dark"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add account
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Account name</label>
                    <input type="text" className="form-control" id="myID1" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Account number</label>
                    <input type="text" className="form-control" id="myID2" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addAccount()}
                  data-bs-dismiss="modal"
                >
                  add account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Money transfer tab */}
      <div className="tab-pane text-white fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" >
        <div className="container text-dark bg-light border border-1 border-white">
          <div className="row my-3">
            <div className="col-6">
              <div className="input-group">
                <label className="input-group-text">From</label>
                <select
                  onChange={(e) => changeHandler(e)}
                  className="form-select"
                  id="optionTransferFrom"
                >
                  <option selected>Account</option>
                  {/* List rendering of options. Each account number in the state gets and option to send or receive money from the other end */}
                  {userAccounts.map((userAccount, i) => {
                    return (
                      <option key={i} value={userAccount.id}>
                        {userAccount.accountNumber}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <label className="input-group-text">To</label>
                <select
                  onChange={(e) => changeHandler2(e)}
                  className="form-select"
                  id="optionTransferTo"
                >
                  <option selected>Account</option>
                  {userAccounts.map((userAccount) => {
                    return (
                      <option value={userAccount.id}>
                        {userAccount.accountNumber}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-4">
              <div className="input-group">
                <label className="input-group-text">Amount</label>
                <input className="form-control" id="amountSent" />
                <label className="input-group-text">Eur</label>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <label className="input-group-text">Due date</label>
                <input type="date" className="form-control" id="dueDate" />
              </div>
            </div>
            <div className="form-check col-3 align-self-center">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue={chkbox}
                onChange={() => handleChange()}
                id="instantTransferChck"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Instant transfer
              </label>
            </div>
          </div>
          <div className="row my-3 justify-content-center">
            <div className="col-4">
              <button
                onClick={() => moneyTransfer()}
                className="w-100 btn btn-primary rounded"
              >
                send
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Settings tab */}
      <div
        className="tab-pane text-white fade"
        id="v-pills-settings"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
      >
        <form className='py-5'>
          <h1 className='mb-5'>Changer la couleur de l'interface</h1>
          <select onChange={(e)=> changeHandlerColor(e)}>
            <option defaultValue="blue">blue</option>
            <option value="green">green</option>
            <option value="red">red</option>
          </select>
          <input type="button" onClick={() => changeMyColor()} className='mx-2 hoverperso btn btn-primary rounded-pill border-1 border-white' value='changer'  />
        </form>
      </div>
    </div>
  );
}
