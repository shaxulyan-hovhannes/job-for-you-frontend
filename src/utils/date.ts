import { ParsedDateType } from "@/types/common";

const checkIsValidDateString = (dateString: string): boolean => {
  const timestamp = Date.parse(dateString);

  return !isNaN(timestamp);
};

const parseValidDate = (dateString: string): ParsedDateType => {
  const isValidDate = checkIsValidDateString(dateString);

  if (!isValidDate)
    return {
      day: 0,
      month: 0,
      year: 0,
    };

  const date = new Date(dateString);

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};

export { parseValidDate };
