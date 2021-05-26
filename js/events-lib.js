const eventsList = [
  {
    id: 0,
    date: "March 15, 2021",
    eventName: "Lorem ipsum dolor set",
    eventShort: "ICWSM 2021",
    url: "",
  },
  {
    id: 1,
    date: "February 08, 2021",
    eventName: "Lorem ipsum dolor set",
    eventShort: "WWW 2021",
    url: "",
  },
  {
    id: 2,
    date: "January 04, 2021",
    eventName: "Lorem ipsum dolor set",
    eventShort: "CHI 2021",
    url: "",
  },
  {
    id: 3,
    date: "December 05, 2020",
    eventName: "Lorem ipsum dolor set",
    eventShort: "AIES 2021",
    url: "",
  },
];

function getEvents() {
  const tempEventList = eventsList.map((item) => {
    tempItem = {...item}
    const { date } = tempItem;
    const [month, day, year] = date.split(" ");
    tempItem.month = month.slice(0,3).toUpperCase();
    tempItem.day = parseInt(day);
    tempItem.year = +year;
    return tempItem;
  });
  return tempEventList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}
