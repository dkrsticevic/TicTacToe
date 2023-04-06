import { useState } from "react";
import { X } from "./X";
import { O } from "./O"

type CellProps = {
    id: string, 
    text: string,
    hover: string, 
    winningPath: string[],
    handleCellClick: any
} 


export function Cell({ id, text, hover, winningPath, handleCellClick}:CellProps) {
    const h = hover;
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    return (
        <div id={id} onClick={handleCellClick}
        style={{height: "140px", width: "140px", border: "4px solid black",
         cursor: text !== "" ? 'default' : 'pointer', 
         borderTop: id === "1" || id === "0" || id === "2"  ? "0px" : "4px solid black",
         borderBottom: id === "6" || id === "7" || id === "8"  ? "0px" : "4px solid black",
         borderLeft: id === "0" || id === "3" || id === "6"  ? "0px" : "4px solid black", 
         borderRight: id === "2" || id === "5" || id === "8"  ? "0px" : "4px solid black", 
        }}
         
         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
           {hover !== "" && isHover && text === "" ? (hover === "X"? 
            <X color="lightgray"/> : <O color="lightblue"/>) : null } 
           <div style={{color: winningPath.length > 1 && winningPath.includes(id) ? "dodgerblue" : ""}}></div>
            {text === "X" ? <X color={winningPath.includes(id) ? "#f0b607" :"darkgray"}/> : text ==="O" ? <O color={winningPath.includes(id) ? "#f0b607" :"dodgerblue"}/> : null}

        </div>
    )
}