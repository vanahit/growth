import ThemeProviderComponent from "components/ThemeProvider";
import {BrowserRouter} from "react-router-dom";
import store from "redux/store.ts";
import {Provider} from "react-redux";
import ErrorBoundary from "components/ErrorBoundery";
import Routes from "./routes";

function App() {

    return (<ThemeProviderComponent>
            <ErrorBoundary>
                <BrowserRouter>
                    <Provider store={store}>
                        <Routes/>
                    </Provider>
                </BrowserRouter>
            </ErrorBoundary>
        </ThemeProviderComponent>

    )
}

export default App
