export type TErrorType = {
    code: string;
    message: string;
} | null;

export type TRtkErrorType = {
    code?: number;
    data: {
        message: string;
    };
    status?: number;
} | null;
