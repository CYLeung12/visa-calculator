import React, { ChangeEvent, useEffect, useState } from "react";
import { FC } from "react";
import { DateType, LeavingRecord } from "../LeavingRecordType";
import moment from "moment";


type ReactCreateProps = {
    onCreate: (leaveDate: Date | undefined, entryDate: Date | undefined) => void;
}

const ReactCreate: FC<ReactCreateProps> = ({ onCreate }) => {

    const [dates, setDates] = useState<DateType>();

    const handleChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        setDates(prev => ({
            ...prev,
            [target.name]: moment(new Date(target.value)).format("YYYY-MM-DD")
        }));
    }

    const handleAddButton = () => {
        onCreate(dates?.leaveDate, dates?.entryDate)
    }

    const dateValue = (date: Date | undefined): string => {
        return !date ? "" : moment(date).format("YYYY-MM-DD")

    }

    return <div>
        <form>
            <label>Date leaving the UK
                <input value={dateValue(dates?.leaveDate)} onChange={handleChange} type="date" name="leaveDate" />
            </label>
            <label>Date entering the UK
                <input value={dateValue(dates?.entryDate)} onChange={handleChange} type="date" name="entryDate" />
            </label>
            <button type="button" onClick={handleAddButton}>Add</button>
        </form>
        <p>{`${dates?.leaveDate} ${dates?.entryDate}`}</p>
    </div>
}

export default ReactCreate;