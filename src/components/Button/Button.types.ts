export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
 loading?: boolean;
 type?:  "button" | "submit" | "reset"
 outline?: boolean;
}