import React from 'react';
import {EIconNames, Icon } from 'components/Icon/index.tsx';
import {Col, Row } from 'components/Grid/index.tsx';
import Button from 'components/Button/index.tsx';
import { SOverlay, SPopupBody, SPopupContainer, SPopupHeader, SPopupTitle} from "./Popup.styles.ts";
import {IPopupProps} from "./Popup.types.ts";


const Popup: React.FC<IPopupProps> = ({ open, loading, submitText, onSubmit, cancelText, onClose, title, children }) => {
    return (
        <SOverlay $isOpen={open}>
            <SPopupContainer>
                <SPopupHeader>
                    {title && <SPopupTitle>{title}</SPopupTitle>}
                    <Icon size={20} className='pointer' icon={EIconNames.CLOSE} onClick={onClose} />
                </SPopupHeader>
                <SPopupBody>{children}</SPopupBody>
                <Row gutter={[16, 12]} justify='end'>
                    <Col>
                        <Button outline width={40} onClick={onClose}>{cancelText}</Button>
                    </Col>
                   <Col>
                     <Button  loading={loading} onClick={onSubmit}>{submitText}</Button>
                   </Col>
                </Row>
            </SPopupContainer>
        </SOverlay>
    );
};

export default Popup;
