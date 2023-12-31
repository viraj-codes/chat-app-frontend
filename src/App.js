import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import './App.css';
import io from 'socket.io-client';
import Chat from './Chat';
import Home from './components/Home';

import Navbar from './components/navbar/Navbar';

const socket = io.connect("http://localhost:3001");

function App() {

  const [token, settoken] = useState("")
  // const [username, setUsername] = useState("")
  // const [room, setRoom] = useState("")
  // const [showChat, setShowChat] = useState(false)

  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room)
  //     setShowChat(true)
  //   }
  // }

  useEffect(() => {
    let t = localStorage.getItem("loginToken");
    console.log('t :>> ', t);
    if (t) settoken(t)
  }, [])


  return (
    // <div className="App">
    //   {!showChat ? (
    //     <div className='joinChatContainer'>
    //       <h3>Join a chat</h3>
    //       <input type='text' placeholder='John...' onChange={(e) => { setUsername(e.target.value) }}></input>
    //       <input type='text' placeholder='Room ID...' onChange={(e) => { setRoom(e.target.value) }}></input>
    //       <button onClick={joinRoom}>Join A Room</button>
    //     </div>)
    //     : (<Chat socket={socket} username={username} room={room} />)}
    // </div>

    <Router>
      <div className="App">
        <ErrorBoundary>
          <Switch>
            <Route exact path="/">
              {token ? <>  <Navbar /> <Home /></> : <Login settoken={settoken} />}
            </Route>
            <Route exact path="/login">
              <Login settoken={settoken} />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>

            {token && (
              <Route exact path="/home">
                <Navbar />
                <Home />
              </Route>
            )}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
