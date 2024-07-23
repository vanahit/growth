import React, {memo} from "react";
import {useNavigate} from "react-router-dom";
import {EPageProps} from "./Page.types.ts";
import {SBackButton, SHeader, SMainContent, SPageContainer} from "./Page.styles.ts";
import { Col } from "components/Grid/index.tsx";
import {EIconNames, Icon } from "components/Icon/index.tsx";
import Loading from "components/Loading/index.tsx";


const Page: React.FC<EPageProps> = memo(({title, isLoading, children, isWithBack, actions}) => {
    const navigate = useNavigate();

    return (
        <SPageContainer >
            <SHeader align='middle' justify='space-between' gutter={[12, 12]}>
                <Col>
                    {isWithBack &&
                        <SBackButton onClick={() => navigate(-1)}><Icon icon={EIconNames.ARROW_LEFT}/></SBackButton>}
                    <h1>{title}</h1>
                </Col>
                <Col xs={24} className='actions' flex={1}>
                    {actions}
                </Col>
            </SHeader>
            <SMainContent>
                {isLoading ? <Loading centered/> : children}
            </SMainContent>
        </SPageContainer>
    );
});
export default Page
export { Page };
