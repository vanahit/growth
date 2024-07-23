
export type TToggleSize = 'sm';

export type IStyledToggleProps = {
    size: TToggleSize,
    checked: boolean;
}
export interface IToggleStyles {
    width: string;
    height: string;
    borderRadius: string;
    padding: string;
    knobSize: string;
    knobOffset: string;
    knobTranslate: string;
}
export interface IToggleProps  {
    onChange: (value: boolean) => void;
    size?: TToggleSize,
    checked: boolean;
}

