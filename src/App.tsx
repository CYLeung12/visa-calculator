import { type } from "os";
import React, { useState } from "react";
import ReactCreate from "./components/RecordCreate";
import { LeavingRecord } from "./LeavingRecordType";



function App() {
    const [records, setRecords] = useState<LeavingRecord[]>([]);
    
    const createRecrod = (leaveDate: Date, entryDate: Date) => {
        console.log(`leaveDate: ${leaveDate}, entryDate: ${entryDate}`)
    }


    return <div>
        <ReactCreate onCreate={ createRecrod } />
    </div>;
}

export default App;