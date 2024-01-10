import React from "react";

const RecordTableHeader = () => {
  return (
    <tr>
      <th className="py-4 px-2" scope="col">
        #
      </th>
      <th className="w-1/4 py-4 px-2" scope="col">
        Date of Exiting from the UK
      </th>
      <th className="w-1/4 py-4 px-2" scope="col">
        Date of Entering the UK
      </th>
      <th className="w-1/4 py-4 px-2" scope="col">
        Description
      </th>
      <th className="py-4 px-2" scope="col">
        Days of Absence
        <div className="text-xs"> (Travel dates don't count)</div>
      </th>
      <th className="py-4 px-2" scope="col"></th>
    </tr>
  );
};

export default RecordTableHeader;
