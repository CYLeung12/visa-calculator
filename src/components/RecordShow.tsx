import React from "react";
import { LeavingRecord } from "../LeavingRecordType";
import { convertDateForDisplay } from "../helpers";

type RecordShow = {
  leavingRecord: LeavingRecord;
  index: number;
};

const RecordShow: React.FC<RecordShow> = ({ leavingRecord, index }) => {
  return (
    <tr className="border-b">
      <td className="py-4 px-2">{index + 1}</td>
      <td className="py-4 px-2">
        {convertDateForDisplay(leavingRecord.exitDate)}
      </td>
      <td className="py-4 px-2">
        {convertDateForDisplay(leavingRecord.entryDate)}
      </td>
      <td className="py-4 px-2">{leavingRecord.description}</td>
      <td className="py-4 px-2">{leavingRecord.dateDifference}</td>
    </tr>
  );
};

export default RecordShow;
