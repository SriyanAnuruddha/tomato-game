import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export default function LeaderBoard() {
    return (
        <Card className='bg-secondary' >
            <Card.Body className='d-flex flex-column  justify-content-start align-items-center'>
                <Card.Title className='pb-2'> Leader Board</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Player Name</th>
                            <th>Highest Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>200s</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>200s</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>

        </Card>
    )
}