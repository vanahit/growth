import React from 'react';
import {IHighlightedTextProps} from "./HighlitedText.types.ts";
import {SHighlightedText} from "./HighlightedText.styles.ts";


const HighlightedText: React.FC<IHighlightedTextProps> = ({ text, highlight }) => {
    if (!highlight.trim()) return <>{text}</>;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
        <>
            {parts.map((part, index) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <SHighlightedText key={index}>{part}</SHighlightedText>
                ) : (
                    part
                )
            )}
        </>
    );
};

export default HighlightedText;
