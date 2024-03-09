import { Link } from "react-router-dom";
import tomatoGame from "../assets/images/play_button.jpg"
import Image from 'react-bootstrap/Image';

export default function PlayGameButton() {
    return (
        <>
            <Link to='/game'> <Image className="rounded  d-block " src={tomatoGame} rounded /></Link>
        </>
    )
}