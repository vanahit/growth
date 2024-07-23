import {FC} from "react";
import Loader from "components/Loading";
import {IButtonProps} from "./Button.types.ts";
import {SButton} from "./Button.styles.ts";


const Button:FC<IButtonProps> = ({ children, outline=false, loading, type='button', ...props }) => {
    return (
        <SButton $outline={outline} disabled={loading} type={type} {...props}>
            {children}
            {loading && <Loader size={14} />}
        </SButton>
    );
};

export default Button;