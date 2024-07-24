export enum EIconNames {
  CLOSE = 'close',
  MENU = 'menu',
  LIGHT_MODE = 'lightMode',
  DARK_MODE = 'darkMode',
  USER='user',
  DELETE='delete',
  ARROW_LEFT='arrowLeft',
  ARROW_RIGHT='arrowRight',
  ARROW_UP ='arrowUp',
  ARROW_DOWN ='arrowDown',
  USERS='users',
  FILE='file',

}

export type IIconProps = {
  loading?: boolean;
  color?: string;
  size?: number;
  icon: string;
  className?: string;
  onClick?: (e?: MouseEvent) => void;
  dataTestId?: string;
  role?: string;
};
