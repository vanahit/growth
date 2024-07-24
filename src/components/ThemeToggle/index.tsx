import {useContext} from "react";
import {Col, Row} from "components/Grid";
import {EIconNames, Icon} from "components/Icon";
import {colors} from "themeProvider/variables/colors.ts";
import Toggle from "components/Toggle";
import { ThemeContext } from "themeProvider";


const ThemeToggle = () => {
    const { setCurrentTheme, currentTheme } = useContext(ThemeContext);
    return (
        <Row gutter={[8, 0]} align='middle' wrap={false}>
            <Col>
                <Icon icon={EIconNames.DARK_MODE} size={24} color={currentTheme === 'dark' ? colors.yellow : undefined} />
            </Col>
            <Col>
                <Toggle size='sm' checked={currentTheme === 'light'} onChange={setCurrentTheme}     />
            </Col>
            <Col>
                <Icon icon={EIconNames.LIGHT_MODE} size={24} color={currentTheme === 'light' ? colors.orange : undefined} />
            </Col>
        </Row>
    );
};

export default ThemeToggle;
