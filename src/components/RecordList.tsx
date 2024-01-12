import React from "react";
import { LeavingRecord } from "../LeavingRecordType";
import RecordTableHeader from "./RecordTableHeader";
import RecordShow from "./RecordShow";

type RecordListProps = {
  records: LeavingRecord[];
  onDelete: (id: number) => void;
};

const RecordList: React.FC<RecordListProps> = ({ records, onDelete }) => {
  const listRecrods = records.map((r, index) => (
    <RecordShow leavingRecord={r} index={index} onDelete={onDelete} />
  ));

  return (
    <table className="rounded min-w-full table-auto">
      <thead className="bg-gray-100 text-left text-blue-700 border-b dark:border-neutral-500">
        <RecordTableHeader />
      </thead>
      <tbody className="text-gray-700">{listRecrods}</tbody>
    </table>
  );
};

export default RecordList;
