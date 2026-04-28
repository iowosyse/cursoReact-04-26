import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AppView from "./views/AppView";
import OtraView from "./views/OtraView";
import CustomView from "./views/CustomView";
import ParamView from "./views/ParamView";
import ComponentsView from "./views/ComponentsView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<AppLayout/>}>
                    <Route path="/main" element={<AppView/>}/>
                    <Route path="/otra" element={<OtraView/>}/>
                    <Route path="/custom" element={<CustomView/>}/>
                    <Route path="/parametro/:id" element={<ParamView/>}/>
                    <Route path="/components" element={<ComponentsView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
