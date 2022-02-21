const Months = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

export const getFormatedDate = (date) => {
  const formateDate = new Date(date).toString();

  const year = formateDate.slice(11, 15);
  const month = Months[formateDate.slice(4, 7)];
  const day = formateDate.slice(8, 10);

  return `${day} ${month}, ${year}`;
};
