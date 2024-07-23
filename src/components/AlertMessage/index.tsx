import {useEffect} from "react";
import {EIconNames, Icon} from "components/Icon";
import {SAlertMessage} from "./AlertMessage.styles.ts";
import {IAlertMessageType} from "./AlertMessage.type.ts";

const AlertMessage = ({size = 'sm', onClose, type='success', delay,  message}: IAlertMessageType) => {
    useEffect(() => {
        if (delay) {
            setTimeout(() => onClose(), delay);

        }}, [delay, onClose]);
    return (
       <SAlertMessage $show={!!message} $type={type} $size={size} >{message} <Icon size={18} className='pointer' onClick={onClose} icon={EIconNames.CLOSE} /></SAlertMessage>
    );
};

export default AlertMessage;