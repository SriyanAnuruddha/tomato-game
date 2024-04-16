export default function Cube(props) {

    // Change the cube color to green if it was clicked!
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }

    return (
        <div onClick={() => props.holdCube(props.id)} className="die" style={styles}>
            <h2 className="die-num">{props.value}</h2>
        </div >
    )
}