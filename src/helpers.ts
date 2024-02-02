import moment from "moment";
import { LeavingRecord } from "./LeavingRecordType";

export const convertDateToString = (date: Date | undefined): string => moment(date).format("YYYY-MM-DD");

export const convertDateForDisplay = (date: Date | undefined): string => moment(date).format("DD MMMM YYYY");

export const countDateDiff = (
    exitDate: Date | undefined,
    entryDate: Date | undefined
  ): number => {
    if (!exitDate || !entryDate) {
      return 0;
    }
    const exitDateInTime = new Date(exitDate).getTime();
    const entryDateInTime = new Date(entryDate).getTime();

    const dateDiff = Math.floor(
      (entryDateInTime - exitDateInTime) / (24 * 3600 * 1000)
    );
    return dateDiff - 1;
  };

export const countAbsenceTwelveMonths = (records: LeavingRecord[]): string[] => {
    if (records.length === 0) {
           console.log(0)
        const emptyResult = ["0", "0"]
        return emptyResult;
    }
    const sortRecords = records.sort(compareExitDate);

    let periodStart = sortRecords[0].exitDate!;
    let periodEnd = addDays(periodStart, 180);
    const lastEntry = sortRecords[sortRecords.length - 1].entryDate!;
    let maxAbsence = 0;
    let maxAbsenceDate: Date;
    console.log(periodEnd)
   console.log(lastEntry)
    do  {
           
        const counter: number[] = [];
        for (let r of records) {
            if (r.exitDate! > periodEnd) break;
            console.log(1)
            if (r.entryDate! < periodStart) break;
            console.log(2)
            if (r.exitDate! < periodStart && r.entryDate! <= periodEnd) {
            console.log(3)

                counter.push(countDateDiff(periodStart, r.entryDate))
            }
            if (r.exitDate! >= periodStart && r.entryDate! <= periodEnd) {
            console.log(4)

                counter.push(countDateDiff(r.exitDate, r.entryDate))
            }
            if (r.exitDate! <= periodEnd && r.entryDate! > periodEnd) {
            console.log(5)

                counter.push(countDateDiff(r.exitDate, periodEnd))
            }
            if (r.exitDate! < periodStart && r.entryDate! > periodEnd) {
            console.log(6)

                counter.push(countDateDiff(periodStart, periodEnd))
            }
        }
        const totalAbsence = counter.reduce((accum, current) => accum + current, 0);
        console.log(totalAbsence)
        if (totalAbsence > maxAbsence) {
            console.log(7)
            maxAbsence = totalAbsence;
            maxAbsenceDate = periodEnd;
        }
        periodStart = addDays(periodStart, 1);
    } while (periodEnd <= lastEntry)
    const result = [`${maxAbsence}`, convertDateForDisplay(periodEnd)]
    return result;
}

const compareExitDate = (r1: LeavingRecord, r2: LeavingRecord) => {
    if (r1.exitDate && r2.exitDate) {
    if ( r1.exitDate < r2.exitDate ){
    return -1;
  }
  if ( r1.exitDate > r2.exitDate  ){
    return 1;
  }
        }
  return 0;
}

const addDays = (date: Date, days: number) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
