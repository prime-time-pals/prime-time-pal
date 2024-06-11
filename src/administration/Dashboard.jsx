import MainComponent from "./MainComponent";
import SidebarComponent from "./SidebarComponent";
import SplitScreen from "./SplitScreen";


function Dashboard(){
    
    return (
       <SplitScreen>
            <SidebarComponent></SidebarComponent>
            <MainComponent></MainComponent>
       </SplitScreen>
    )
}

export default Dashboard;