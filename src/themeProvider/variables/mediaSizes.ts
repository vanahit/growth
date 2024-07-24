

export const size = {
    xs: '480px', // for small screen mobile
    sm: '576px', // for mobile screen
    md: '768px', // for tablets
    lg: '992px', // for laptops
    xl: '1200px', // for desktop / monitors
    xxl: '1400px', // for big screens
}
export type TSize =  keyof typeof size;
export type TMediaSizes = {[key in TSize]: string};

export const mediaSizes = (type: 'min' | 'max'): TMediaSizes => {
    return {
        xs: `(${type}-width: ${size.xs})`,
        sm: `(${type}-width: ${size.sm})`,
        md: `(${type}-width: ${size.md})`,
        lg: `(${type}-width: ${size.lg})`,
        xl: `(${type}-width: ${size.xl})`,
        xxl: `(${type}-width: ${size.xxl})`,
    };
}
