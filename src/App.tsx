import React, { useState } from "react";
import ReactCreate from "./components/RecordCreate";
import { LeavingRecord } from "./LeavingRecordType";
import Nav from "./components/Nav";

function App() {
  const [records, setRecords] = useState<LeavingRecord[]>([]);

  const createRecrod = (
    exitDate: Date | undefined,
    entryDate: Date | undefined
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
        <ReactCreate onCreate={createRecrod} />
        <div>{records.length}</div>
      </div>
    </div>
  );
}

export default App;
