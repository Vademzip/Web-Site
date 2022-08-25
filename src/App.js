import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./Redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

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
                        {/*<Route path="/dialogs/*" element={<Dialogs localState = {props.state.messages} dispatch = {props.dispatch}/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
