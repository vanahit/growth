import React, {ReactNode} from 'react';
import {EIconNames} from "components/Icon/Icon.type.ts";
import { Icon } from 'components/Icon/index.tsx';
import { Col } from 'components/Grid/index.tsx';
import {SEmptyStateContainer, SEmptyStateIcon, SEmptyStateMessage} from './EmptyState.styles.ts'


interface IEmptyStateProps {
    message: string;
    icon?: EIconNames
    action?: ReactNode
}


const EmptyState: React.FC<IEmptyStateProps> = ({message, action, icon}) => {
    return (
        <SEmptyStateContainer gutter={[24, 24]}>
            {icon && <SEmptyStateIcon span={24}><Icon size={48} icon={icon}/></SEmptyStateIcon>}
            <SEmptyStateMessage span={24}>{message}</SEmptyStateMessage>
            {action && <Col span={24}>{action}</Col>}
        </SEmptyStateContainer>
    );
};

export default EmptyState;
