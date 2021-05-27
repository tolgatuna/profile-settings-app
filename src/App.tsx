import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import OtherPage from "./pages/OtherPage";
import LoginPage from "./pages/LoginPage";


const App = () => {
    const [userId, setUserId] = useState<string | null>(null);

    if (!userId) {
        return <LoginPage setUserId={setUserId}/>
    }
    return (
        <div className='container'>
            <BrowserRouter>
                <Header logout={() => setUserId(null)}/>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/profile" exact>
                    <ProfilePage userId={userId}/>
                </Route>
                <Route path="/other" exact>
                    <OtherPage/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
