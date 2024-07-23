import styled, {css} from "styled-components";
import {mediaSizes, TSize} from "components/ThemeProvider/variables/mediaSizes.ts";
import { IStyledColProps, IStyledRowProps} from "./Grid.types.ts";

const getGutter = (gutter?: number | [number, number]) => {
    if (Array.isArray(gutter)) {
        return css`
      margin-left: -${gutter[0] / 2}px;
      margin-right: -${gutter[0] / 2}px;
      & > div {
        padding-left: ${gutter[0] / 2}px;
        padding-right: ${gutter[0] / 2}px;
      }
      margin-top: -${gutter[1] / 2}px;
      margin-bottom: -${gutter[1] / 2}px;
      & > div {
        padding-top: ${gutter[1] / 2}px;
        padding-bottom: ${gutter[1] / 2}px;
      }
    `;
    } else if (gutter) {
        return css`
      margin-left: -${gutter / 2}px;
      margin-right: -${gutter / 2}px;
      & > div {
        padding-left: ${gutter / 2}px;
        padding-right: ${gutter / 2}px;
      }
    `;
    } else {
        return '';
    }
};

const alignStyles = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
};

const justifyStyles = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    'space-around': 'space-around',
    'space-between': 'space-between',
};

 const SRow = styled.div<IStyledRowProps>`
  display: flex;
   ${({$wrap}) =>  css `
    flex-wrap: ${($wrap || $wrap === undefined) ? 'wrap' : 'nowrap'};
   `};
  ${({ $gutter }) => getGutter($gutter)}
  ${({ $align }) => $align && `align-items: ${alignStyles[$align]};`}
  ${({ $justify }) => $justify && `justify-content: ${justifyStyles[$justify]};`}
`;


/// Col

const getWidth = (span?: number) => {
    if (span === undefined) return '';
    const width = (span / 24) * 100;
    return `width: ${width}%;`;
};

const getOffset = (offset?: number) => {
    if (!offset) return '';
    const marginLeft = (offset / 24) * 100;
    return `margin-left: ${marginLeft}%;`;
};

const generateMediaQuery = (size:  TSize, span: number) => {
    if (span === undefined) return '';
    return `@media ${mediaSizes('min')[size]} {
    ${span === 0 ? 'display: none;' : `width: ${(span / 24) * 100}%;` }
  }`;
};

const SCol = styled.div<IStyledColProps>`
   display: block;
    flex: ${({$flex}) => $flex || 'none'};
    ${({ $span }) => getWidth($span)}
  ${({ $offset }) => getOffset($offset)}
  ${({ $xs }) => typeof $xs === "number" && generateMediaQuery('xs', $xs)}
  ${({ $sm }) => typeof $sm === "number" && generateMediaQuery('sm', $sm)}
  ${({ $md }) => typeof $md === "number" && generateMediaQuery('md', $md)}
  ${({ $lg }) => typeof $lg === "number" && generateMediaQuery('lg', $lg)}
  ${({ $xl }) => typeof $xl === "number" && generateMediaQuery('xl', $xl)}
  ${({ $xxl }) => typeof $xxl === "number" && generateMediaQuery('xxl', $xxl)}
    
`;


export {SRow, SCol}