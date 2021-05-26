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
  {
    id: 4,
    date: 'December 02, 2020',
    eventName: 'Lorem ipsum dolor set',
    eventShort: 'AAAI 2021',
  },
  {
    id: 5,
    date: 'November 16, 2020',
    eventName: 'Lorem ipsum dolor set',
    eventShort: 'EMNLP 2020',
  },
  {
    id: 6,
    date: 'November 02, 2020',
    eventName: 'Lorem ipsum dolor set',
    eventShort: 'COLING 2020',
  },
  {
    id: 7,
    date: 'September 28, 2020',
    eventName: 'Lorem ipsum dolor set',
    eventShort: 'ICLR 2021',
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
