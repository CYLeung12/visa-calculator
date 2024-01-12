import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { LeavingRecord } from "./LeavingRecordType";

type RecordsContextType = {
  records: LeavingRecord[];
  setRecords: Dispatch<SetStateAction<LeavingRecord[]>>;
  children?: ReactNode;
};

export const RecordsContext = createContext<RecordsContextType | null>(null);

const RecordsProvider: FC<RecordsContextType> = ({ children }) => {
  const [records, setRecords] = useState<LeavingRecord[]>([]);

  return (
    <RecordsContext.Provider value={{ records, setRecords }}>
      {children}
    </RecordsContext.Provider>
  );
};

export default RecordsProvider;

export const useRecordsContext = () =>
  useContext(RecordsContext) as RecordsContextType;
