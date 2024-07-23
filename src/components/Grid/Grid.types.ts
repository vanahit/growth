
export interface IRowProps {
    gutter?: number | [number, number];
    align?: 'top' | 'middle' | 'bottom';
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
    children?: React.ReactNode;
    wrap?: boolean;
    className?: string;
}
export interface IStyledRowProps {
    $gutter?: number | [number, number];
    $align?: 'top' | 'middle' | 'bottom';
    $justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
    children?: React.ReactNode;
    $wrap?: boolean;
    className?: string;
}
export interface IColProps {
    span?: number;
    flex?: number;
    offset?: number;
    children?: React.ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    className?: string;
}
export interface IStyledColProps {
    $span?: number;
    $flex?: number;
    $offset?: number;
    children?: React.ReactNode;
    $xs?: number;
    $sm?: number;
    $md?: number;
    $lg?: number;
    $xl?: number;
    $xxl?: number;
    className?: string;
}