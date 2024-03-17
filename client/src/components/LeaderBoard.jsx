import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export default function LeaderBoard() {
    const [userScores, setUserScores] = useState([])
    const [scoreElements, setScoreElements] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/users/get-scores')
                const result = await response.json();
                setUserScores(result)

                setScoreElements(userScores.map((user, i) => {
                    return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.highestScore}</td>
                    </tr>
                }))

            } catch (e) {
                console.log(e)
            }
        })()

    }, [userScores])


    return (
        <Card id='custom-bg' className='shadow ' >
            <Card.Body className='d-flex flex-column  justify-content-start align-items-center'>
                <Card.Title className='pb-2 text-dark'> <h3>Leader Board</h3></Card.Title>
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Player Name</th>
                            <th>Highest Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scoreElements}
                    </tbody>
                </Table>
            </Card.Body>

        </Card>
    )
}