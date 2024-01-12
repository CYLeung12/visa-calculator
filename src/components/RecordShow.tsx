import React from "react";
import { LeavingRecord } from "../LeavingRecordType";
import { convertDateForDisplay } from "../helpers";

type RecordShow = {
  leavingRecord: LeavingRecord;
  index: number;
  onDelete: (id: number) => void;
};

const RecordShow: React.FC<RecordShow> = ({
  leavingRecord,
  index,
  onDelete,
}) => {
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
      <td className="py-4 px-2 text-xs">
        <a
          className="cursor-pointer"
          onClick={() => onDelete(leavingRecord.id)}
        >
          ❌
        </a>
      </td>
    </tr>
  );
};

export default RecordShow;
