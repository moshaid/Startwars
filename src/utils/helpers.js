export const getDate = (date) => {
  const date_added = new Date(date);

  const day = date_added.getDate();
  const month = date_added.getMonth() + 1;
  const year = date_added.getFullYear();

  return `${day}-${month}-${year}`;
};

export function randomImage(num) {
  return `https://picsum.photos/250?random=${num}`;
}
