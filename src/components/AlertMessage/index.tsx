// AlertMessage.tsx
import { useEffect } from 'react';
import { EIconNames, Icon } from 'components/Icon';
import { SAlertMessage } from './AlertMessage.styles';
import { IAlertMessageType } from './AlertMessage.type';

const AlertMessage = ({ size = 'sm', onClose, type = 'success', delay, message }: IAlertMessageType) => {
    useEffect(() => {
        if (delay) {
            const timer = setTimeout(() => onClose(), delay);
            return () => clearTimeout(timer); // Cleanup timeout on unmount
        }
    }, []);

    return (
        <SAlertMessage $show={!!message} $type={type} $size={size}>
            {message} <Icon role='button' size={18}  className='pointer' onClick={onClose} icon={EIconNames.CLOSE} />
        </SAlertMessage>
    );
};

export default AlertMessage;
