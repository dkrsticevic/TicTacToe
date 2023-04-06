type Oprops = {
    color: string
}
export function O( {color}: Oprops) {
    return (
    <>
        <div style={{height: "90px", width: "90px", border: "20px solid "+color, position: "absolute", borderRadius: "100%", transform: "translate( 10px,25px)" }}></div>
    </>
    )
}