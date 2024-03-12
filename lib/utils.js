export function formatPostDate(input) {
  const currentDate = new Date();
  let targetDate;

  if (typeof input === "string") {
    targetDate = new Date(input);
  } else if (input instanceof Date) {
    targetDate = input;
  } else if (typeof input === "number") {
    targetDate = new Date(input);
  } else {
    return "Invalid input";
  }

  const diffInDays = Math.floor(
    (currentDate - targetDate) / (1000 * 60 * 60 * 24)
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[targetDate.getMonth()];
  const day = targetDate.getDate();

  let dateString = month + " " + day;

  if (diffInDays === 0) {
    dateString += " (today)";
  } else if (diffInDays === 1) {
    dateString += " (yesterday)";
  } else {
    dateString += " (" + diffInDays + " days ago)";
  }

  return dateString;
}
