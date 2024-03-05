import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from './Login';
import SingUp from './SignUp';

export default function TabPanel() {
    return (
        <div className='mx-3 border rounded'>
            <Tabs
                defaultActiveKey="Login"
                id="fill-tab-example"
                className="mb-3 "
                fill
            >
                <Tab eventKey="Login" title="Login">
                    <Login />
                </Tab>
                <Tab eventKey="Sign-up" title="Sign-up">
                    <SingUp />
                </Tab>
            </Tabs>
        </div>
    )
}