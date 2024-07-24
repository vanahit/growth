import {SLoader} from "./Loading.styles.ts";
import {ILoadingProps} from "./Loading.types.ts";


const Loader = ({ size = 40, centered = false }: ILoadingProps) => {
    return <SLoader data-testid='loading' className='loading' $centered={centered} $size={size} />;
};

export default Loader;