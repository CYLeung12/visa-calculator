import React from "react";
import { LeavingRecord } from "../LeavingRecordType";

type RecordShow = {
  leavingRecord: LeavingRecord;
};

const RecordShow: React.FC<RecordShow> = ({ leavingRecord }) => {
  return (
    <tr className="border-b">
      <td className="py-4 px-2">{leavingRecord.id}</td>
      <td className="py-4 px-2"></td>
      <td className="py-4 px-2"></td>
      <td className="py-4 px-2">{leavingRecord.description}</td>
      <td className="py-4 px-2">{leavingRecord.dateDifference}</td>
    </tr>
  );
};

export default RecordShow;
