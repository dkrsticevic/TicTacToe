type Xprops = {
    color: string
}
export function X( {color}: Xprops) {
    return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{height: "100px", width: "20px", background: color, position: "absolute", transform: "translate(0px, 20px) rotate(45deg)"}}></div>
        <div style={{height: "100px", width: "20px", background: color, position: "absolute", transform: "translate(0px, 20px) rotate(-45deg)"}}></div>
    </div>
    )
}