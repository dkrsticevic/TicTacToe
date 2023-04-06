import { useEffect, useState, useRef } from "react"
import {Cell} from "../components/Cell"
import { io, Socket } from "socket.io-client"
import { Container, Row, Button, Col, Card } from "react-bootstrap"

type GameProps = {
    socket: Socket,
    roomCode: string | null
}

const WINS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

export function Game( {socket, roomCode}:GameProps ) {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [canPlay, setCanPlay] = useState(true);
    const [turn, setTurn] = useState(0); //counting each turn (can be used for both draws and whos turn)
    const [victoryText, setVictoryText] = useState("");
    const [winningPath, setWinningPath] = useState([""])

    useEffect(() => { //checks on update of board if new winner found
        if (turn === 9){
          setVictoryText('Draw');
          return;
        }
        else if (checkWin()){
          setVictoryText(whichTurn(turn + 1) +"'s Win");
          return;
        }
      }, [board]);

      socket.on("updateGame", (id) => {
        setBoard((data) => ({ ...data, [id]: whichTurn(turn) }));
        setCanPlay(true);   
        setTurn(turn + 1);
      });

    socket.on("restart", () => {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setCanPlay(true);
      setTurn(0);
      setVictoryText("");
      setWinningPath([""]);
    });

  function whichTurn(count: number){
    if (count % 2 === 0){
      return "X"
    } else{
      return "O"
    }
  }

  function checkWin() {
      for (let i = 0; i< WINS.length; i++){
        const [a,b,c] = WINS[i];

        if (board[a] === board[b] && board[b] === board[c] && board[a] !== ""){
          setWinningPath([a.toString(),b.toString(),c.toString()])
          return true;
        }
      }
      return false;
  }


  const handleCellClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    var idN: number = +id
    if (canPlay && board[idN] === "" && victoryText === ""  && roomCode!== ""){
      setBoard((data) => ({ ...data, [id]: whichTurn(turn) }));
      setTurn(turn + 1);
      setCanPlay(false);
      
      socket.emit("play", { id, roomCode });

    }
  };

  const handleRestart = () => { 
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setCanPlay(true);
      setVictoryText("");
      setTurn(0);
      setWinningPath([""]);
      if (roomCode !== ""){
        socket.emit("restart", { roomCode });
      }
  }

return (
      <Container className="d-flex justify-content-center">
        <Card style={{minWidth: "480px", minHeight: "700px"}}>
        <Row className="d-flex justify-content-center" style={{height: "150px"}}>
          <span className="fs-2" style={{textAlign: "center", fontFamily: "sans-serif", marginTop: "3px"}}> 
            {victoryText === "" ? whichTurn(turn) + "'s Turn" : victoryText}
          </span> 
          <Button hidden={victoryText === ""} style={{width: "180px", height: "40px", alignItems: "center", backgroundColor: "dodgerblue"}} onClick={handleRestart }>Restart</Button>        
        </Row>
        <Row className="d-flex justify-content-center">
            <Cell handleCellClick={handleCellClick} id={"0"} hover={canPlay ? whichTurn(turn) : ""} text={board[0]} winningPath={winningPath}/>
            <Cell handleCellClick={handleCellClick} id={"1"} hover={canPlay ? whichTurn(turn) : ""} text={board[1]} winningPath={winningPath}/>
            <Cell handleCellClick={handleCellClick} id={"2"} hover={canPlay ? whichTurn(turn) : ""} text={board[2]} winningPath={winningPath}/>
        </Row>
        <Row className="d-flex justify-content-center">
            <Cell handleCellClick={handleCellClick} id={"3"} hover={canPlay ? whichTurn(turn) : ""} text={board[3]} winningPath={winningPath}/>
            <Cell handleCellClick={handleCellClick} id={"4"} hover={canPlay ? whichTurn(turn) : ""} text={board[4]} winningPath={winningPath}/>
            <Cell handleCellClick={handleCellClick} id={"5"} hover={canPlay ? whichTurn(turn) : ""} text={board[5]} winningPath={winningPath}/>
        </Row>
        <Row className="d-flex justify-content-center">
            <Cell handleCellClick={handleCellClick} id={"6"} hover={canPlay ? whichTurn(turn) : ""} text={board[6]} winningPath={winningPath}/>
            <Cell handleCellClick={handleCellClick} id={"7"} hover={canPlay ? whichTurn(turn) : ""} text={board[7]} winningPath={winningPath}/>
            <Cell handleCellClick={handleCellClick} id={"8"} hover={canPlay ? whichTurn(turn) : ""} text={board[8]} winningPath={winningPath}/>
        </Row>
        </Card>
    </Container>
  );

}