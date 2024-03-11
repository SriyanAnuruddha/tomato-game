import tomatoGame from "../assets/tomatoGame.png"
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Confetti from 'react-confetti'
import { useEffect, useState } from "react";


export default function Game() {
    const [level, setLevel] = useState(1)
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [levelTime, setLevelTime] = useState(180)
    const [isGameOver, setIsGameOver] = useState(false)
    const [isGameWon, setIsGameWon] = useState(false)
    const [playerAnswer, setPlayerAnswer] = useState(null)

    const [gameObj, setGameObj] = useState({
        question: '',
        solution: ''
    })


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/game/newgame')
                const gameData = await response.json()
                console.log(gameData)
                setGameObj(gameData)
            } catch (e) {
                console.log("can't load game data")
            }
        })()

    }, [level])

    useEffect(() => {
        setTimeRemaining(levelTime);
        const intervalId = setInterval(() => {
            setTimeRemaining(prevTime => {
                // If time remaining is already 0, clear the interval
                if (prevTime === 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                // Otherwise, decrement the time remaining
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [level]); // Start or restart the countdown when level changes

    // Convert timeRemaining to minutes and seconds
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    function newLevel() {
        setLevelTime(prevTime => prevTime - 20) // reduce 30seconds from time in each level
        setLevel(prevLevel => prevLevel + 1)
    }

    function checkAnswer() {
        if (playerAnswer == gameObj.solution) {
            setIsGameWon(true)
            newLevel()
        }
    }

    return (
        <div className="container p-5">
            {isGameWon && <Confetti />}
            <div className="row">
                <div className="col border">
                    Level 1
                </div>
                <div className="col border">
                    Score: 100
                </div>
                <div className="col-5 border">

                </div>
                <div className="col border">
                    Time : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>
            </div>

            <div className="row border">
                <div className="col  d-flex justify-content-center">
                    <Image className="rounded  d-block" src={gameObj.question && gameObj.question} rounded />
                </div>
            </div>

            <div className="row border">
                <div className="col input-group  d-flex  justify-content-center">
                    <div className="w-25 m-2">
                        <input onChange={(event) => setPlayerAnswer(event.target.value)} type="text" className="form-control" placeholder="enter your answer" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group-prepend ">
                        <button onClick={checkAnswer} className="btn btn-primary m-2" type="button">Button</button>
                    </div>
                </div>
            </div>
        </div >
    )
}