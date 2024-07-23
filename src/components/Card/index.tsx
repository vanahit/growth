import React from 'react';
import {Col, Row} from "components/Grid";
import {SCard, SCardActions, SCardBody, SCardTitle} from "./Card.styles.ts";
import {ICardProps} from "./Card.types.ts";


export

const Card: React.FC<ICardProps> = ({ title, body, actions }) => {
    return (
        <SCard>
           <Row gutter={[16, 12]} justify="space-between" align="top" wrap={false}>
               <Col span={20}><SCardTitle>{title}</SCardTitle> </Col>    {
            actions &&<Col ><SCardActions>{actions}</SCardActions></Col> }
           </Row>
            <SCardBody>{body}</SCardBody>
        </SCard>
    );
};

export default Card;
