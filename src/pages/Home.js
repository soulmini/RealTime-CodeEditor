import React from 'react'
import {v4 as uuidV4} from 'uuid';
import { useState } from 'react';
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) =>{
        e.preventDefault();
        const id = uuidV4();
        // console.log(id);
        setRoomId(id);
        toast.success("Created New Room");
    };

    const joinRoom = () =>{
      if(!roomId || !username){
        toast.error("Room Id & username is required");
        return;
      }
      // Redirect
      navigate(`/editor/${roomId}`, {
        state : {
          username,
        }
      });

    }

  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img className = 'homePageLogo' src="/logo.svg" alt="" />
            <h4 className='mainLable'>Paste Invation Room ID</h4>
            <div className = "inputGroup">
            <input type="text" className='inputBox' placeholder='ROOM ID'
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
             />
            <input type="text" className='inputBox' placeholder='USER NAME'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
             />
            <button className='btn joinBtn' onClick={joinRoom}> Join </button>
            <span className='createInfo'> 
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="/" className='createNewBtn'>new room</a>
            </span>
            </div>
        </div>
        <footer> <h4> Built with by ❤️ Ayush</h4> </footer>
    </div>
  )
}

export default Home