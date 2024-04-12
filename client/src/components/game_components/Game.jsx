import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Confetti from 'react-confetti'
import { useEffect, useState } from "react";
import GameWonModal from './GameWonModal';
import GameOverModal from './GameOverModal'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


export default function Game() {
    const [level, setLevel] = useState(1)
    const [timeRemaining, setTimeRemaining] = useState(180);
    const [isTimeOver, setIsTimeOver] = useState(false)
    const [isGameWon, setIsGameWon] = useState(false)
    const [playerAnswer, setPlayerAnswer] = useState('')
    const [currentScore, setCurrentScore] = useState(0)
    const [finishedTime, setFinishedTime] = useState(0)
    const [showAnswerWrong, setShowAnswerWrong] = useState(false)

    // Stores the object returned from the Tomato API
    const [gameObj, setGameObj] = useState({
        question: '',
        solution: ''
    })

    // Send a request to retrieve a new game when the game is first launched and when a new level is reached
    useEffect(() => {
        (async () => {
            setGameObj({
                question: '',
                solution: ''
            })

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
        const intervalId = setInterval(() => {
            setTimeRemaining(prevTime => {
                // If time remaining is already 0, clear the interval
                if (prevTime === 0) {
                    clearInterval(intervalId);
                    setIsTimeOver(true)
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

    // Send a POST request to the backend server to store the current score whenever the score changes
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/users/store-score',
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ score: currentScore })
                    }
                )
            } catch (e) {
                console.log(e)
            }
        })()
    }, [currentScore]);

    // determines the score based on the finishing time
    useEffect(() => {
        if (finishedTime > 120 && finishedTime <= 180) {
            setCurrentScore(prevScore => prevScore + 100)
        } else if (finishedTime > 60 && finishedTime <= 120) {
            setCurrentScore(prevScore => prevScore + 50)
        } else if (finishedTime > 0 && finishedTime <= 60) {
            setCurrentScore(prevScore => prevScore + 25)
        }
    }, [finishedTime])

    // create a new level
    function newlevel() {
        setLevel(prevLevel => prevLevel + 1)
        setIsGameWon(false)
        setTimeRemaining(180)
    }

    // check if the answer is correct 
    function checkAnswer() {
        if (playerAnswer == gameObj.solution) { // check if player won the game
            setIsGameWon(true)
            setFinishedTime(timeRemaining)
            setPlayerAnswer("")
        } else {
            setShowAnswerWrong(true)
        }
    }

    // get player answer
    function onChangeHandler(event) {
        setPlayerAnswer(event.target.value)
        setShowAnswerWrong(false)
    }

    return (
        <div id='custom-bg' className="container my-5">

            {isGameWon && <Confetti />}
            <GameOverModal show={isTimeOver} onHide={() => setIsTimeOver(false)} />
            <GameWonModal gameInfo={{ finishTime: finishedTime, score: currentScore, finishedLevel: level }} newLevel={newlevel} show={isGameWon} onHide={() => setIsGameWon(false)} />

            <div className="row text-center">
                <div className="col border text-dark">
                    <h3 className='py-1'>Level {level}</h3>
                </div>
                <div className="col border text-dark">
                    <h3 className='py-1'>Score: {currentScore}</h3>
                </div>
                <div className="col-5 border">

                </div>
                <div className="col border text-dark">
                    <h3 className='py-1'>{!isGameWon && <span>Time : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>}</h3>
                </div>
            </div>

            <div className="row border">
                <div className="col  d-flex flex-column justify-content-center align-items-center">
                    {showAnswerWrong && <Alert variant="danger" className='my-1  w-50'>Your Answer is Wrong!</Alert >}
                    {
                        (gameObj.question) ?
                            <Image className="rounded  d-block" src={gameObj.question && gameObj.question} rounded />
                            : <Spinner className='text-light' animation="border" />
                    }

                </div>
            </div>

            <div className="row border">
                <div className="col input-group  d-flex  justify-content-center">
                    <div className="w-25 m-2">
                        <input value={playerAnswer} onChange={onChangeHandler} type="number" className="form-control" placeholder="enter your answer" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group-prepend ">
                        <button onClick={checkAnswer} className="btn btn-primary m-2" type="button">Check Answer</button>
                    </div>
                </div>
            </div>
        </div >
    )
}