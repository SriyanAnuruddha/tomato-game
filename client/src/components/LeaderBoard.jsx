import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export default function LeaderBoard() {
    const [userScores, setUserScores] = useState([])
    const [scoreElements, setScoreElements] = useState(null)

    // requests scores of the players from back-end server
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/users/get-scores')
                const result = await response.json();
                setUserScores(result)

                setScoreElements(userScores.map((user, i) => {
                    return <tr key={i}>
                        <td id='custom-bg'>{i + 1}</td>
                        <td id='custom-bg'>{user.username}</td>
                        <td id='custom-bg'>{user.highestScore}</td>
                    </tr>
                }))

            } catch (e) {
                console.log(e)
            }
        })()

    }, [userScores])


    return (
        <Card className='shadow' >
            <Card.Body className='d-flex flex-column  justify-content-start align-items-center'>

                <Card.Title className='pb-2 text-dark'> <h3><u>Leader Board</u></h3></Card.Title>
                <table id='custom-bg' className='table table-bordered' >
                    <thead >
                        <tr >
                            <th id='custom-bg'>#</th>
                            <th id='custom-bg'>Player Name</th>
                            <th id='custom-bg'>Highest Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scoreElements}
                    </tbody>
                </table>
            </Card.Body>

        </Card>
    )
}