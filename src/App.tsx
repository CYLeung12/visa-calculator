import React, { useState } from "react";
import RecordCreate from "./components/RecordCreate";
import { LeavingRecord } from "./LeavingRecordType";
import Nav from "./components/Nav";
import RecordList from "./components/RecordList";

function App() {
  const [records, setRecords] = useState<LeavingRecord[]>([]);

  const createRecrod = (
    exitDate: Date | undefined,
    entryDate: Date | undefined,
    description: string
  ) => {
    console.log(`exitDate: ${exitDate}, entryDate: ${entryDate}`);
    let id = 0;
    if (records.length > 0) {
      id = records[records.length - 1].id + 1;
    } else {
      id = 1;
    }

    const newRecord = {
      id: id,
      exitDate: exitDate,
      entryDate: entryDate,
      description: description,
      dateDifference: countDateDiff(exitDate, entryDate),
    };

    setRecords((prev) => [...prev, newRecord]);
  };

  const countDateDiff = (
    exitDate: Date | undefined,
    entryDate: Date | undefined
  ): number => {
    if (!exitDate || !entryDate) {
      return 0;
    }
    const exitDateInTime = new Date(exitDate).getTime();
    const entryDateInTime = new Date(entryDate).getTime();

    return (
      Math.floor((entryDateInTime - exitDateInTime) / (24 * 3600 * 1000)) - 1
    );
  };

  return (
    <div>
      <Nav />
      <div className="container mx-auto px-20">
        <RecordCreate onCreate={createRecrod} />
        <div>{records.length}</div>
        <RecordList records={records} />
      </div>
    </div>
  );
}

export default App;
