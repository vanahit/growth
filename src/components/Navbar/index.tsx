import React, {useMemo} from 'react';
import {Col, Row } from 'components/Grid';
import {EIconNames, Icon } from 'components/Icon';
import ThemeToggle from 'components/ThemeToggle';
import {NavLink, useNavigate} from "react-router-dom";
import { routes } from 'routes/routes.data';
import logo from 'assets/logo.png';
import { SNavbarContainer, SNavItem, SNavItemsContainer } from './Navbar.styles';


const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const onMenuClick = () => {
        setIsMenuOpen(true);
    }
    const onCloseClick = () => {
        setIsMenuOpen(false);
    }
    const menuItems = useMemo(() => {
        return routes.filter(item => !item.hide)
    }, [])
    return (
        <SNavbarContainer>
            <img width={40} height={40} src={logo} alt="logo" className='pointer' onClick={() => navigate('/')} />
            <SNavItemsContainer $isMenuOpen={isMenuOpen}>
                <SNavItem>
                    <Row  gutter={[16, 0]} justify='end' className='actions' wrap={false}>
                        <Col><ThemeToggle/></Col>
                        <Col>
                            <Icon onClick={onCloseClick} className='pointer' icon={EIconNames.CLOSE} size={28}/>
                        </Col>
                    </Row>
                </SNavItem>
                {menuItems.map((item) => (
                    <SNavItem key={item.path} onClick={onCloseClick}><NavLink to={item.path}>
                      {item.title}</NavLink></SNavItem>))}
            </SNavItemsContainer>
            <Row gutter={[24, 12]} wrap={false}>
                <Col xs={16}><ThemeToggle/></Col>
                <Col xs={8} md={0}>
                    <Icon onClick={onMenuClick} className='pointer' icon={EIconNames.MENU} size={28}/>
                </Col>
            </Row>
        </SNavbarContainer>
    );
};

export default Navbar;
