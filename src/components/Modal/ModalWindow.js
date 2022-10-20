import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilRuler} from "@fortawesome/free-solid-svg-icons";


const ModalWindow = ({show, setShow, contact, updateContact, faPencil}) => {

    const handleClick = () => {
        setShow(!show)
    }
    const handleClose = (id, user) => {
        updateContact(id, user)
        setShow(false)
    }

    const [newUser, setNewUser] = useState({
        ...contact
    })

    const {name, phone, surName} =  newUser

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }


    return (
        <>
            <button
                onClick={() => {
                    handleClick()
                }}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            > <FontAwesomeIcon icon={faPencilRuler} />
            </button>
                <div
                    style={{
                        display: show ? "block" : "none",
                    }}
                    id="authentication-modal"   className="modal-window hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50  md:inset-0 h-modal md:h-full justify-center items-center">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                                onClick={() => setShow(false)}
                                type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            </button>
                            <div className="py-6 px-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Изменить контакт:</h3>
                                    <div className="my-6">
                                        <input
                                            onChange={handleChange}
                                            type="text" defaultValue={name} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                    </div>
                                    <div className="my-6">
                                        <input
                                            onChange={handleChange}
                                            type="text" defaultValue={surName} name="surName" id="surName"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                    </div>
                                    <div className="my-6">
                                        <input
                                            onChange={handleChange}
                                            type="number" defaultValue={phone} name="phone" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                    </div>

                                    <button
                                        onClick={() => handleClose(contact.id, newUser)}
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >сохранить</button>

                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default ModalWindow;