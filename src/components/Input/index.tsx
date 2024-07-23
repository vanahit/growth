import { forwardRef } from "react";
import {SInput, STextArea} from "./Input.styles.ts";
import {IInputProps, ITextareaProps} from "./Input.types.ts";


export const Input  = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    return <SInput ref={ref} {...props} />
})

export const Textarea  = forwardRef<HTMLTextAreaElement, ITextareaProps>((props, ref) => {
    return <STextArea ref={ref} {...props} />
})
