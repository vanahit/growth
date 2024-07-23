import styled from "styled-components";
import { IStyledToggleProps, IToggleStyles, TToggleSize} from "./Toggle.types.ts";

// Define sizes as a constant
const sizes: {[key in TToggleSize]: IToggleStyles} = {
    sm: {
        width: '40px',
        height: '20px',
        borderRadius: '16px',
        padding: '2px',
        knobSize: '16px',
        knobOffset: '2px',
        knobTranslate: '20px' // Translate distance for knob
    },
    // here can be other sizes
};

// Function to get styles based on size
const getSizeStyles = (size: TToggleSize) => sizes[size];

const SToggle = styled.div<IStyledToggleProps>`
    position: relative;
    width: ${(props) => getSizeStyles(props.size).width};
    height: ${(props) => getSizeStyles(props.size).height};
    background-color: ${({theme, checked}) => (checked ? theme.colors.darkerGray :  theme.colors.gray)};
    border-radius: ${(props) => getSizeStyles(props.size).borderRadius};
    padding: ${(props) => getSizeStyles(props.size).padding};
    transition: background 300ms, transform 300ms;

    &:before {
        content: "";
        position: absolute;
        width: ${(props) => getSizeStyles(props.size).knobSize};
        height: ${(props) => getSizeStyles(props.size).knobSize};
        border-radius: ${(props) => getSizeStyles(props.size).knobSize};
        top: 50%;
        left: ${(props) => getSizeStyles(props.size).knobOffset};
        background: white;
        transform: translate(0, -50%);
        transition: transform 300ms;

    }

    ${({checked, size}) => checked && `
    &:before {
      transform: translate(${getSizeStyles(size).knobTranslate}, -50%);
    }
  `}
`;


const SInput = styled.input<IStyledToggleProps>`
    display: none;
    &:checked  {
       background: ${({theme}) => theme.colors.darkerGray };

        &:before {
            transform: translate(${(props) => getSizeStyles(props.size).knobTranslate}, -50%);
        }
    }
`;

const SToggleWrapper  = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;
export { SInput, SToggle, SToggleWrapper };
