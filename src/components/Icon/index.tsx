import { FC } from 'react';
import IcomoonReact from 'icomoon-react';
import Loading from 'components/Loading';
import {IIconProps, EIconNames} from './Icon.type';
import iconSet from './selection.json';



const Icon: FC<IIconProps> = ({
  color,
  size = 24,
  icon,
  className = '',
  onClick,
  dataTestId = '',
    loading,
  ...props
}) => {
  return (
        loading ? <Loading size={size - 4}/> :
            <IcomoonReact
                data-testid={dataTestId}
                className={`icon ${className}`}
                iconSet={iconSet}
                color={color}
                size={size}
                icon={icon}
                onClick={onClick}
                {...props}
            />
  );
};
export default Icon;
export { Icon, EIconNames };
