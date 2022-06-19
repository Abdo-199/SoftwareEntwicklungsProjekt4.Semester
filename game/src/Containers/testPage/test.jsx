import React,{useState} from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/navbar";
import { PageContainer } from "../../Components/pageContainer";
import { Marginer } from "../../Components/marginer";


const InnerCont=styled.div`
width: 100%;
height: 1000px;
display: flex;
flex-direction: column;
align-items: center;
//justify-content: center;
`;


//const socket = io.connect("http://localhost:4000");

export function TestPage(){

 //  const socket = useContext(SocketContext);

   //let room = socket.room:
    const [room, setRoom] = useState("7");
    //setRoom(room_nr);
    const [messageReceived, setMessageReceived] = useState("Room connected");
    const [isLoggedIn]=useState(true); 
   
    // To send the message to the sever -{emit}
   /* const sendMessage = () => {
       console.log(room);
     socket.emit("send_message", { message: "Hallo an alle in meinem Raum", room});
    };
    
    
    
    socket.on("roomNo", (data) =>{
       // console.log("Angekommen an Parse Room");
        setRoom(data);
    });
    
  // To receive messages from server
    useEffect(() => {
      socket.on("receive_message", (data) => {
      //  console.log(data.room);
        setMessageReceived(data.message);
    });
    }, [socket]);
    
    const roomOutput = "JAA";

    socket.on("connectToRoom", (data) =>{
        roomOutput = data;
    });

    */

return<PageContainer>
    <Navbar isLoggedIn={isLoggedIn}/>
    <InnerCont>
    <Marginer direction="virtical" margin= {15} />
    <h2>Room-Nr.</h2>{room}
    <Marginer direction="virtical" margin= {15} />
    <h1>Message: </h1>{messageReceived}
    <Marginer direction="virtical" margin= {15} />
    <button>Press here to show Messege</button>
    <Marginer direction="virtical" margin= {15} />      
    </InnerCont>
</PageContainer>

}