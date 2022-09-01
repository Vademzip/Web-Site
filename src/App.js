import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="Container">
                <Header/>
                <Nav/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/ProfileComponent" element={<ProfileComponent/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users" element = {<UsersContainer/>} />
                        {/*<Route path="/dialogs/*" element={<Dialogs localState = {props.state.messages} dispatch = {props.dispatch}/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
