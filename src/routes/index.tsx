import {Suspense} from 'react';
import {Navigate, Route, Routes as Switch, useLocation} from 'react-router-dom';
import Layout from "components/Layout";
import {routes} from "./routes.data.ts";


const Routes = () => {
    const location = useLocation();
    return (
        <Suspense fallback={<Layout/>}>
            <Switch location={location}>
                <Route path='/' element={<Layout/>}>
                    <Route
                        path="*"
                        element={<Navigate replace to='/403'/>}/>
                    {routes.map(({path, element}) => {
                            const Component = element;
                            return <Route key={path} path={path} element={<Component/>}/>
                        }
                    )}
                </Route>
            </Switch>
        </Suspense>)
};

export default Routes;
