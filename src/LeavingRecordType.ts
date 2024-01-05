export type LeavingRecord = {
    id: number;
    exitDate?: Date;
    entryDate?: Date;
    dateDifference: number;
}

export type DateType = {
    exitDate?: Date;
    entryDate?: Date;
}