import './App.css';
import Nav from "./Components/Nav/Nav";
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/ProfileComponent/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="Container">
                <HeaderContainer/>
                <Nav/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users" element = {<UsersContainer/>} />
                        <Route path="/" element = {<ProfileContainer/>} />
                        {/*<Route path="/dialogs/*" element={<Dialogs localState = {props.state.messages} dispatch = {props.dispatch}/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
