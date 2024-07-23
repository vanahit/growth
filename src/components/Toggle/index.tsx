import {ChangeEvent, FC} from "react";
import {SInput, SToggle, SToggleWrapper} from "./Toggle.styles.ts";
import {IToggleProps} from "./Toggle.types.ts";


const Toggle: FC<IToggleProps> = ({size = 'sm', checked, onChange}) => {
    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }

    return (
        <SToggleWrapper>
            <SInput checked={checked} size={size} type="checkbox" onChange={onHandleChange}/>
            <SToggle checked={checked} size={size}/>
        </SToggleWrapper>
    );
};

export default Toggle;