import {Outlet, useLocation} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Header from "components/Header";
import {ContentWrapper, LayoutWrapper} from "./Layout.styles.ts";
import './styles.css';

const Layout = () => {
    const location = useLocation();
    return (
        <LayoutWrapper>
            <Header />
            <ContentWrapper>
                <TransitionGroup>
                    <CSSTransition
                        apear={false}
                        key={location.key}
                        classNames="page"
                        timeout={300}
                    >
                        <Outlet />
                    </CSSTransition>
                </TransitionGroup>
            </ContentWrapper>
        </LayoutWrapper>
    );
};

export default Layout;