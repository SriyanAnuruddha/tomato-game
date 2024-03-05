import NavigationBar from "../components/NavigationBar"
import LeaderBoard from "../components/LeaderBoard"
import TabPanel from "../components/TabPanel"

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <div className="p-3 d-flex flex-row">
                <LeaderBoard />
                <TabPanel />
            </div>
        </div>
    )
}