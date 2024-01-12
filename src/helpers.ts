import moment from "moment";

export const convertDateToString = (date: Date | undefined): string => moment(date).format("YYYY-MM-DD");

export const convertDateForDisplay = (date: Date | undefined): string => moment(date).format("DD MMMM YYYY");
