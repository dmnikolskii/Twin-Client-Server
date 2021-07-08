import MainPage from "./components/MainPage";

import {useState} from 'react'

import LoginModal from "./components/LoginModal";

function App() {

    const [isBackground, setBackground] = useState(true);
    const [showLoginModal, setshowLoginModal] = useState(true);
    const [isSupervisor, setSupervisor] = useState(false);

    console.log(isSupervisor);
    return (
    <>

        {showLoginModal && <LoginModal onModalClose={setshowLoginModal} showBackground={isBackground}
                                        setSupervisor={setSupervisor}/>}

        <MainPage onModalClose={setshowLoginModal} setBackground={setBackground} isSupervisor={isSupervisor}/>
    </>
    );
}

export default App;
