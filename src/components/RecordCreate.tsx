import React, { ChangeEvent, useState } from "react";
import { FC } from "react";
import { LeavingRecord } from "../LeavingRecordType";
import moment from "moment";


type ReactCreateProps = {
    onCreate: (leaveDate: Date, entryDate: Date) => void;
}

const ReactCreate: FC<ReactCreateProps> = ({ onCreate }) => {
    const [leavingRecord, setLleavingRecord] = useState<LeavingRecord>();

    const handleChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        setLleavingRecord(prev => ({
            ...prev,
            [target.name]: moment(new Date(target.value)).format("YYYY-MM-DD")
        }));
    }

    return <div>
        <form>
            <label>Date leaving the UK
                <input value={ moment(leavingRecord?.leaveDate).format("YYYY-MM-DD")} onChange={handleChange} type="date" name="leaveDate"/>
            </label>
            <label>Date entering the UK
                <input value={ moment(leavingRecord?.entryDate).format("YYYY-MM-DD")} onChange={handleChange} type="date" name="entryDate"/>
            </label>
        </form>
        <p>{`${ leavingRecord?.leaveDate } ${ leavingRecord?.entryDate }`}</p>
    </div>
}

export default ReactCreate;