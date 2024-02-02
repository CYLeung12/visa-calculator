import React, { useContext, useState } from "react";
import RecordCreate from "./components/RecordCreate";
import Nav from "./components/Nav";
import RecordList from "./components/RecordList";
import DataDisplay from "./components/DataDisplay";
import { countDateDiff } from "./helpers";
import { RecordsContext, RecordsContextType } from "./RecordsContext";

function App() {
  const { records, setRecords } = useContext(
    RecordsContext
  ) as RecordsContextType;

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

  const deleteRecordById = (id: number) => {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
  };

  return (
    <div>
      <Nav />
      <div className="container mx-auto px-20">
        <div className="flex flex-wrap justify-between items-center py-3">
          <RecordCreate onCreate={createRecrod} />
          <DataDisplay />
        </div>
        {!!records.length && <RecordList onDelete={deleteRecordById} />}
      </div>
    </div>
  );
}

export default App;
