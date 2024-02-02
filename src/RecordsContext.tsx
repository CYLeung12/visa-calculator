import { FC, PropsWithChildren, createContext, useState } from "react";
import { LeavingRecord } from "./LeavingRecordType";

// export type RecordsContextType = {
//   records: LeavingRecord[];
//   updateRecords: (records: LeavingRecord[]) => void;
// };

export type RecordsContextType = {
  records: LeavingRecord[];
  setRecords: (value: React.SetStateAction<LeavingRecord[]>) => void;
};

export const RecordsContext = createContext<RecordsContextType | null>(null);
// export const RecordsContext =
//   createContext<RecordsContextType>(recordContextState);

const RecordsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [records, setRecords] = useState<LeavingRecord[]>([]);

  const updateRecords = (records: LeavingRecord[]) => {
    setRecords(records);
  };

  return (
    <RecordsContext.Provider value={{ records, setRecords }}>
      {children}
    </RecordsContext.Provider>
  );
};

export default RecordsProvider;
