import { format, formatDistance } from "date-fns";

export default function formatDate(date = new Date()) {
  return format(new Date(date), "dd MMM, yyyy");
}

export function formatDateTime(date = new Date()) {
  return format(new Date(date), "dd MMM yyyy, hh:mm a");
}

// Jun 23 2022 at 11:27 AM
export function formatDateTimeYear(date = new Date()) {
  return `${format(new Date(date), "dd MMM yyyy")} at ${format(
    new Date(date),
    "hh:mm a",
  )}`;
}

// Jun 23 at 11:27 AM
export function formatDateTimeNoYear(date = new Date()) {
  return `${format(new Date(date), "dd MMM")} at ${format(
    new Date(date),
    "hh:mm a",
  )}`;
}

// 24 Jun
export function formatDateNoYear(date = new Date()) {
  return format(new Date(date), "dd MMM");
}

export function formatDateForDatePicker(date = new Date()) {
  return format(new Date(date), "yyyy-MM-dd");
}

export function getMonthName(date = new Date()) {
  return format(new Date(date), "MMM");
}

export function dayOfMonth(date = new Date()) {
  return format(new Date(date), "dd");
}

export function getHour(date = new Date()) {
  return format(new Date(date), "hh:mm a");
}

export function dayOfWeek(date = new Date()) {
  return format(new Date(date), "E");
}

export function fromDistance(date = new Date()) {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
}

/*Apr 25 - May 2, 2020 */
export function formatFullDate(start = null, end = null) {
  if (start && end) {
    return `${format(new Date(start), "dd MMM")} - ${format(
      new Date(end),
      "dd MMM",
    )}, ${format(new Date(start), "yyyy")}`;
  }

  if (start) {
    return formatDate(start);
  }

  return null;
}
