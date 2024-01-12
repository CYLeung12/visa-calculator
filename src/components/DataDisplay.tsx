import React from "react";
import { LeavingRecord } from "../LeavingRecordType";

type DataDisplayType = {
  records: LeavingRecord[];
};

const DataDisplay: React.FC<DataDisplayType> = ({ records }) => {
  const totalAbsence = records.reduce(
    (total, { dateDifference }) => total + dateDifference,
    0
  );

  return (
    <div className="bg-blue-100 px-8 py-10 rounded-lg shadow h-fit">
      <div className="pb-7">
        <h3 className="text-gray-700 text-base font-bold underline ">
          Total absence days
        </h3>
        <span className="text-blue-700 text-2xl font-extrabold">
          {totalAbsence}
        </span>
        <span className="text-gray-700 text-base font-bold"> days</span>
      </div>
      <div>
        <h3 className="text-gray-700 text-base font-bold underline">
          Longest absence days in any 12-month
        </h3>
        <span className="text-blue-700 text-2xl font-extrabold">180</span>
        <span className="text-gray-700 text-base font-bold"> days</span>
        <div>
          <span className="font-boldtext-base">
            This is in the 12-month period ending on{" "}
          </span>
          <span className="font-bold text-blue-700">26 January 2024</span>
          <p className="text-sm">
            (There may be another periods with the same total absence date)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
