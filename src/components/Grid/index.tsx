import * as React from 'react';
import {IColProps, IRowProps} from "./Grid.types.ts";
import {SCol, SRow} from "./Grid.styles.ts";

export const Row: React.FC<IRowProps> = ({wrap, gutter, justify, align, ...props}) => {
    return <SRow $align={align} $justify={justify} $gutter={gutter} $wrap={wrap} {...props}>{props.children}</SRow>;
};
export const Col: React.FC<IColProps> = ({sm, xs, md, lg, xl, xxl, flex, span, offset, ...props}) => {
    return <SCol $span={span} $xs={xs} $sm={sm} $md={md} $lg={lg} $xxl={xxl} $xl={xl} $offset={offset}
                 $flex={flex} {...props}>{props.children}</SCol>;
};