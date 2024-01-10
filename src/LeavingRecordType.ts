export type LeavingRecord = {
    id: number;
    exitDate?: Date;
    entryDate?: Date;
    description: string;
    dateDifference: number;
}

export type DateType = {
    exitDate?: Date;
    entryDate?: Date;
}