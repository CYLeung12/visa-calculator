export type LeavingRecord = {
    id: number;
    leaveDate?: Date;
    entryDate?: Date;
    dateDifference: number;
}

export type DateType = {
    leaveDate?: Date;
    entryDate?: Date;
}