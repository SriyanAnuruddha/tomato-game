import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function HowToPlay(props) {

    const handleClose = () => props.handleHowToPlayButton();


    return (
        <Offcanvas show={props.show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>How To Play</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p> The player must solve the math equation given in the image within 3 minutes to find the value of the tomato. If the player fails to find the value within this time, the game will end.
                </p>

                <p>To submit the answer, the player must set the same value for all the cubes based on the number they believe is the answer. To change the values in the cubes, click on the 'Roll Cubes' button. When your answer appears, click on the corresponding cube to hold that value. Then, click the 'Roll Cubes' button again to change values in the other cubes.</p>

                <p>
                    After selecting the same value for all cubes, the player can click on the 'Check Answer' button to verify if the answer is correct or wrong. The player has three attempts to select the correct answer for each level. Each time the player provides a wrong answer, one life will be deducted. If all the lives reach zero, the game will be over
                </p>

                <p className='lead'>
                    Rewards are given based on the time of completion.

                </p>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th scope="col">Time of Completion</th>
                            <th scope="col">Points Given</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Within the first minute</td>
                            <td>100 points</td>
                        </tr>
                        <tr>
                            <td>In the second minute</td>
                            <td>50 points</td>
                        </tr>
                        <tr>
                            <td>In the last minute</td>
                            <td>25 points</td>
                        </tr>
                    </tbody>
                </table>
            </Offcanvas.Body>
        </Offcanvas>
    );
}