import { type } from "os";
import React, { useState } from "react";
import ReactCreate from "./components/RecordCreate";
import { LeavingRecord } from "./LeavingRecordType";



function App() {
    const [records, setRecords] = useState<LeavingRecord[]>([]);

    const createRecrod = (leaveDate: Date | undefined, entryDate: Date | undefined) => {
        console.log(`leaveDate: ${leaveDate}, entryDate: ${entryDate}`)
        let id = 0;
        if (records.length > 0) {
            id = records[records.length - 1].id + 1;
        } else {
            id = 1;
        }

        const newRecord = {
            id: id,
            leaveDate: leaveDate,
            entryDate: entryDate,
            dateDifference: countDateDiff(leaveDate, entryDate)
        }

        setRecords(prev => [...prev, newRecord])
    }

    const countDateDiff = (leaveDate: Date | undefined, entryDate: Date | undefined): number => {
        if (!leaveDate || !entryDate) {
            return 0
        }
        const leaveDateInTime = new Date(leaveDate).getTime();
        const entryDateInTime = new Date(entryDate).getTime();

        return Math.floor((entryDateInTime - leaveDateInTime) / (24 * 3600 * 1000)) - 1;
    }

    return <div>
        <ReactCreate onCreate={createRecrod} />
        <div>{records.length}</div>
    </div>;
}

export default App;