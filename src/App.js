import './App.css';
import {useState} from "react";
import NewContacts from "./components/NewContacts";
import PhoneInput from 'react-phone-input-2'

function App() {

    const [error, setError] = useState("")
    const [nameError, setNameError] = useState("")
    const [surNameError, setSurNameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [contacts, setContacts] = useState([])
    const [user, setUser] = useState({
        name: "",
        surName: "",
        phone: "",
    })


    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }
//заполни поле

    const addContact = () => {

        if (user.name.length === 0){
            setNameError("border-red-600")
        }else if (user.surName.length === 0){
            setSurNameError("border-red-600")
        } else if (user.phone.length === 0){
            setPhoneError("border-red-600")
        }else {

            const foundContact = contacts.some(el => {
                return el.name === user.name && el.surName === user.surName && el.phone === user.phone
            })

            if (foundContact) {
                setUser({
                    name: "",
                    surName: "",
                    phone: "",
                })
                setError("Такой контакт уже существует! Введите другие данные")
            } else {
                const newContact = {
                    id: contacts.length ? contacts[contacts.length -1].id + 1 : 1,
                    ...user,
                }
                setUser({
                    name: "",
                    surName: "",
                    phone: "",
                })
                setContacts([...contacts, newContact])
                setError("")
                setNameError("")
                setSurNameError("")
                setPhoneError("")
            }

        }

    }

    const deleteContact = (id) => {
        setContacts(state => state.filter(el => el.id !== id ))
    }

    const updateContact = (id, user) => {
        setContacts(state => state.map(el => {
            return el.id === id ? {...el, ...user} : el
        }))
    }

    // const timeOut = () => {
    //     if (error !== "") {
    //         setTimeout(() => {
    //             setError("")
    //         },2000)
    //     } else {
    //         return;
    //     }
    // }


  return (
    <div className="App">
      <div className="container">
        <div className="flex-row flex-wrap">
          <div className=" flex big-box">
              <div className="registration-box my-5 ">

                  <h1 className="text-3xl mb-4">New contact</h1>

                  <div className="my-2">
                      <p className="title-input" >Name</p>
                      <input
                          onChange={handleChange}
                          name="name"
                          value={user.name}
                          type="text" id="default-input"
                             className={` text-lg w-full bg-gray-400 border ${nameError} text-black rounded-lg focus:ring-blue-500 focus:border-blue-500
                              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="Имя" required/>
                  </div>
                  <div className="my-4">
                      <p className="title-input" >Surname</p>
                      <input
                          onChange={handleChange}
                          name="surName"
                          value={user.surName}
                          type="text" id="default-input"
                             className={` w-full bg-gray-400 text-lg border ${surNameError}  text-black rounded-lg focus:ring-blue-500 focus:border-blue-500
                                 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="Фамилия" required/>
                  </div>
                  <div className="my-2">
                      <p className="title-input" >phone</p>
                      <input
                          onChange={handleChange}
                          name="phone"
                          value={user.phone}
                          type="number" id="default-input"
                             className={` w-full bg-gray-400 text-lg border ${phoneError} text-black rounded-lg focus:ring-blue-500 focus:border-blue-500
                                 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="номер телефона" required/>

                  </div>

                  {/*<PhoneInput*/}
                  {/*    searchStyle={{*/}
                  {/*        background: "black"*/}
                  {/*    }}*/}
                  {/*    country={'kg'}*/}
                  {/*    // value={this.state.phone}*/}
                  {/*    // onChange={phone => this.setState({ phone })}*/}
                  {/*/>*/}

                  <button
                      onClick={addContact}
                          className="save-btn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  mt-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                      save contact
                  </button>


              </div>

              <div className="contacts-box">
                  <h1 className="text-3xl mb-3">My contacts:</h1>
                  <p
                      className="text-red-400 right-0">{error}</p>
                  <ul className= "mt-2 w-full text-sm font-medium text-gray-900  rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                      {
                          contacts.map(el => <NewContacts updateContact={updateContact} deleteContact={deleteContact} el={el} key={el.id}/>)
                      }

                  </ul>
              </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
