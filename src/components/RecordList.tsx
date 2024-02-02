import React, { useContext } from "react";
import { LeavingRecord } from "../LeavingRecordType";
import RecordTableHeader from "./RecordTableHeader";
import RecordShow from "./RecordShow";
import { RecordsContext, RecordsContextType } from "../RecordsContext";

type RecordListProps = {
  onDelete: (id: number) => void;
};

const RecordList: React.FC<RecordListProps> = ({ onDelete }) => {
  const { records } = useContext(RecordsContext) as RecordsContextType;

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
