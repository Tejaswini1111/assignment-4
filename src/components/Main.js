import { Route, Routes } from "react-router-dom";
import News from "./News";
import SpecificNews from "./SpecificNews";

function Main(){
    return(
        <div className="posts">
                <Routes>
                    <Route path="/" exact element={<News />} />
                    <Route path="/:id" element={<SpecificNews />} />
                </Routes>
        </div>
    );
}

export default Main;