export function timeAgo(date) {
  date = new Date(date);
  const now = new Date();
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 7) {
    return `${days} days ago`;
  } else {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
}

export function isDateLessThanOneDayAgo(date) {
  const currentDate = new Date();
  const timestamp =
    date instanceof Date ? date.getTime() : new Date(date).getTime();
  const elapsed = currentDate - timestamp;

  return elapsed < 86400000; // 86400000 milliseconds in a day
}
