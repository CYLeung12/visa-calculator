import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FC } from "react";
import { DateType, LeavingRecord } from "../LeavingRecordType";
import moment from "moment";


type ReactCreateProps = {
    onCreate: (exitDate: Date | undefined, entryDate: Date | undefined) => void;
}

const ReactCreate: FC<ReactCreateProps> = ({ onCreate }) => {

    const [dates, setDates] = useState<DateType>();
    const [error, setError] = useState("");

    const handleChange = (event: ChangeEvent) => {
    
        const target = event.target as HTMLInputElement;
        setDates(prev => ({
            ...prev,
            [target.name]: moment(new Date(target.value)).format("YYYY-MM-DD")
        }));
    }

    const handleAddButton = (event: FormEvent<HTMLElement>) => {
        if ((dates?.entryDate == undefined || dates?.exitDate == undefined)) { 
            setError("Date is missed");
            return;
        } else if (dates.entryDate < dates.exitDate) {
                setError("Date of Exit cannot be earlier than the Date of Entry")
            }
            onCreate(dates!.exitDate, dates!.entryDate);
            setDates(undefined);
        
    }

    const dateValue = (date: Date | undefined): string => {
        return !date ? "" : moment(date).format("YYYY-MM-DD")
    }

    const clearState = () => {
           setError("")

    }

    const showError = (errorText: string) => {
        return (
            <div className="bg-red-100 border border-red-500 rounded-b text-teal-900 px-2 py-2 rounded w-fit mt-2" role="alert">
  <div className="flex items-center">
    <svg className="fill-current h-4 w-4 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
    <div><p className="text-sm text-red-700">{errorText}</p></div>
  </div>
</div>
        )
    }

    return <div>
        <h3 className="text-gray-700 text-xl font-bold text-blue-700 py-3">Add a Travel Recrod</h3>
        <form className="w-full max-w-sm">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exitDate">Date of Exiting the UK</label>
                <input
                    className="bg-gray-50 border border-gray-300 rounded p-1 block text-gray-700 text-sm font-bold mb-2"
                    value={dateValue(dates?.exitDate)}
                    onClick={clearState}
                    onChange={handleChange}
                    type="date"
                    name="exitDate"
                    id="exitDate"
                    max={!dates?.entryDate ? undefined : moment(dates.entryDate).format("YYYY-MM-DD")}
                    />
                    
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="entryDate">Date of Entering the UK </label>
                <input
                    className="bg-gray-50 border border-gray-300 rounded p-1 block text-gray-700 text-sm font-bold mb-2"
                    value={dateValue(dates?.entryDate)}
                    onClick={clearState}
                    onChange={handleChange}
                    type="date"
                    name="entryDate"
                    id="entryDate"
                    min={!dates?.exitDate ? undefined : moment(dates.exitDate).format("YYYY-MM-DD")}
                />
               
                </div>
            <input
                type="button"
                value="Add"
                onClick={handleAddButton}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
            {error && showError(error)}
        </form>
        <p >{`${dates?.exitDate} ${dates?.entryDate}`}</p>
    </div>
}

export default ReactCreate;