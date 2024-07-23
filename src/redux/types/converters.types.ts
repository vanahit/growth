export type TFetchConverter<FD, BD> = {
    fromDb: (data: BD) => FD;
};
