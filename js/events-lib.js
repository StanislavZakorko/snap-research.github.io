const eventsList = [
  {
    id: 1,
    date: "January 01, 2016",
    eventName: "",
    eventShort: "ECCV 2016 (Oral Presentation)",
    url: "",
  },
  {
    id: 2,
    date: "February 25, 2016",
    eventName: "",
    eventShort: "ACM International Conference on WSDM 2016",
    url: "",
  },
  {
    id: 3,
    date: "May 09, 2016",
    eventName: "",
    eventShort: "AAAI Conference on Artificial Intelligence 2016",
    url: "",
  },
  {
    id: 4,
    date: "July 18, 2016",
    eventName: "",
    eventShort: "IEEE TIP 2017",
    url: "",
  },
  {
    id: 6,
    date: "October 01, 2016",
    eventName: "",
    eventShort: "IEEE TIP 2016",
    url: "",
  },
  {
    id: 7,
    date: "November 17, 2016",
    eventName: "",
    eventShort: "BMVC 2017 (Oral Presentation)",
    url: "",
  },
  {
    id: 8,
    date: "March 07, 2017",
    eventName: "",
    eventShort: "ICCV 2017",
    url: "",
  },
  {
    id: 9,
    date: "April 12, 2017",
    eventName: "",
    eventShort: "CVPR 2017",
    url: "",
  },
  {
    id: 10,
    date: "April 13, 2017",
    eventName: "",
    eventShort: "ICLR 2017",
    url: "",
  },
  {
    id: 11,
    date: "April 19, 2017",
    eventName: "",
    eventShort: "IJCAI 2017",
    url: "",
  },
  {
    id: 13,
    date: "August 12, 2017",
    eventName: "",
    eventShort: "UAI 2017",
    url: "",
  },
  {
    id: 14,
    date: "August 20, 2017",
    eventName: "",
    eventShort: "Interspeech 2017",
    url: "",
  },
  {
    id: 16,
    date: "September 05, 2017",
    eventName: "",
    eventShort:
      "ICML 2016 (Workshops on Advances in Non-convex Analysis and Optimization)",
    url: "",
  },
  {
    id: 17,
    date: "September 11, 2017",
    eventName: "",
    eventShort:
      "IEEE Transactions on Pattern Analysis and Machine Intelligence, 2017",
    url: "",
  },
  {
    id: 18,
    date: "November 01, 2017",
    eventName: "",
    eventShort: "ACM Transactions on Graphics (SIGGRAPH Asia 2017)",
    url: "",
  },
  {
    id: 19,
    date: "November 30, 2017",
    eventName: "",
    eventShort: "NIPS Workshops, 2017",
    url: "",
  },
  {
    id: 20,
    date: "December 04, 2017",
    eventName: "",
    eventShort: "NIPS 2017 (Workshop Optimization for Machine Learning (OPT))",
    url: "",
  },
  {
    id: 21,
    date: "December 14, 2017",
    eventName: "",
    eventShort: "CVPR 2018",
    url: "",
  },
  {
    id: 22,
    date: "January 05, 2018",
    eventName: "",
    eventShort: "ICLR 2018 (Workshop)",
    url: "",
  },
  {
    id: 23,
    date: "January 28, 2018",
    eventName: "",
    eventShort: "ICASSP 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 24,
    date: "February 04, 2018",
    eventName: "",
    eventShort: "VPR 2018",
    url: "",
  },
  {
    id: 25,
    date: "February 28, 2018",
    eventName: "",
    eventShort: "NAACL 2018",
    url: "",
  },
  {
    id: 26,
    date: "February 28, 2018",
    eventName: "",
    eventShort: "ICLR 2018",
    url: "",
  },
  {
    id: 27,
    date: "March 22, 2018",
    eventName: "",
    eventShort: "ICWSM 2018 (Workshop)",
    url: "",
  },
  {
    id: 29,
    date: "April 11, 2018",
    eventName: "",
    eventShort: "ICPR 2018",
    url: "",
  },
  {
    id: 30,
    date: "April 17, 2018",
    eventName: "",
    eventShort: "ICPRAI 2018",
    url: "",
  },
  {
    id: 32,
    date: "April 21, 2018",
    eventName: "",
    eventShort: "CHI 2018",
    url: "",
  },
  {
    id: 33,
    date: "April 22, 2018",
    eventName: "",
    eventShort: "WWW 2018 (Poster)",
    url: "",
  },
  {
    id: 35,
    date: "April 24, 2018",
    eventName: "",
    eventShort: "ASONAM 2018",
    url: "",
  },
  {
    id: 36,
    date: "April 27, 2018",
    eventName: "",
    eventShort: "WWW 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 37,
    date: "April 27, 2018",
    eventName: "",
    eventShort: "WWW 2018",
    url: "",
  },
  {
    id: 38,
    date: "April 30, 2018",
    eventName: "",
    eventShort: "ECML-PKDD 2018",
    url: "",
  },
  {
    id: 40,
    date: "May 06, 2018",
    eventName: "",
    eventShort: "KDD 2018",
    url: "",
  },
  {
    id: 41,
    date: "May 06, 2018",
    eventName: "",
    eventShort: "ICIP 2018",
    url: "",
  },
  {
    id: 42,
    date: "May 22, 2018",
    eventName: "",
    eventShort: "ICML 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 43,
    date: "May 29, 2018",
    eventName: "",
    eventShort: "KDD Bigmine 2018",
    url: "",
  },
  {
    id: 44,
    date: "June 03, 2018",
    eventName: "",
    eventShort: "Interspeech 2018",
    url: "",
  },
  {
    id: 45,
    date: "June 10, 2018",
    eventName: "",
    eventShort: "ACL 2018",
    url: "",
  },
  {
    id: 47,
    date: "July 03, 2018",
    eventName: "",
    eventShort: "ECCV 2018",
    url: "",
  },
  {
    id: 49,
    date: "July 08, 2018",
    eventName: "",
    eventShort: "ACM Multimedia 2018",
    url: "",
  },
  {
    id: 50,
    date: "July 08, 2018",
    eventName: "",
    eventShort: "ACM Multimedia 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 51,
    date: "July 22, 2018",
    eventName: "",
    eventShort: "3DV 2018",
    url: "",
  },
  {
    id: 55,
    date: "August 01, 2018",
    eventName: "",
    eventShort: "SIGIR eCom 2018",
    url: "",
  },
  {
    id: 56,
    date: "August 01, 2018",
    eventName: "",
    eventShort: "Behavior Research Methods",
    url: "",
  },
  {
    id: 57,
    date: "August 10, 2018",
    eventName: "",
    eventShort: "EMNLP 2018",
    url: "",
  },
  {
    id: 58,
    date: "August 14, 2018",
    eventName: "",
    eventShort: "KDD 2018 (Oral Presentation)",
    url: "",
  },
  {
    id: 60,
    date: "August 30, 2018",
    eventName: "",
    eventShort: "SIGGRAPH Asia 2018",
    url: "",
  },
  {
    id: 63,
    date: "September 05, 2018",
    eventName: "",
    eventShort: "NIPS 2018",
    url: "",
  },
  {
    id: 66,
    date: "January 09, 2019",
    eventName: "",
    eventShort: "CVPR 2019",
    url: "",
  },
  {
    id: 68,
    date: "February 26, 2019",
    eventName: "",
    eventShort: "CHI 2019",
    url: "",
  },
  {
    id: 69,
    date: "March 01, 2019",
    eventName: "",
    eventShort: "UbiComp/IMWUT 2019",
    url: "",
  },
  {
    id: 72,
    date: "April 04, 2019",
    eventName: "",
    eventShort: "NAACL 2019",
    url: "",
  },
  {
    id: 75,
    date: "June 02, 2019",
    eventName: "",
    eventShort: "KDD 2019",
    url: "",
  },
  {
    id: 76,
    date: "June 16, 2019",
    eventName: "",
    eventShort: "ASONAM 2019",
    url: "",
  },
  {
    id: 77,
    date: "July 12, 2019",
    eventName: "",
    eventShort: "SIGGRAPH 2019",
    url: "",
  },
  {
    id: 79,
    date: "July 26, 2019",
    eventName: "",
    eventShort: "DSAA 2019",
    url: "",
  },
  {
    id: 80,
    date: "August 14, 2019",
    eventName: "",
    eventShort: "UbiComp/IMWUT 2019",
    url: "",
  },
  {
    id: 82,
    date: "August 26, 2019",
    eventName: "",
    eventShort: "ICCV 2019",
    url: "",
  },
  {
    id: 84,
    date: "October 20, 2019",
    eventName: "",
    eventShort: "ACM Multimedia 2019",
    url: "",
  },
  {
    id: 86,
    date: "November 07, 2019",
    eventName: "",
    eventShort: "ICLR 2020",
    url: "",
  },
  {
    id: 87,
    date: "January 15, 2020",
    eventName: "",
    eventShort: "WWW 2020",
    url: "",
  },
  {
    id: 88,
    date: "February 07, 2020",
    eventName: "",
    eventShort: "AAAI 2020",
    url: "",
  },
  {
    id: 89,
    date: "April 07, 2020",
    eventName: "",
    eventShort: "IMX 2020",
    url: "",
  },
  {
    id: 90,
    date: "July 05, 2020",
    eventName: "",
    eventShort: "ACL 2020",
    url: "",
  },
  {
    id: 91,
    date: "July 09, 2020",
    eventName: "",
    eventShort: "SIGGRAPH 2020",
    url: "",
  },
  {
    id: 93,
    date: "July 09, 2020",
    eventName: "",
    eventShort: "ECCV 2020",
    url: "",
  },
  {
    id: 94,
    date: "August 13, 2020",
    eventName: "",
    eventShort: "CSCW 2020",
    url: "",
  },
  {
    id: 95,
    date: "September 07, 2020",
    eventName: "",
    eventShort: "BMVC 2020",
    url: "",
  },
  {
    id: 96,
    date: "September 28, 2020",
    eventName: "",
    eventShort: "ICLR 2021",
    url: "",
  },
  {
    id: 97,
    date: "November 02, 2020",
    eventName: "",
    eventShort: "COLING 2020",
    url: "",
  },
  {
    id: 98,
    date: "November 16, 2020",
    eventName: "",
    eventShort: "EMNLP 2020",
    url: "",
  },
  {
    id: 99,
    date: "December 02, 2020",
    eventName: "",
    eventShort: "AAAI 2021",
    url: "",
  },
  {
    id: 100,
    date: "December 05, 2020",
    eventName: "",
    eventShort: "AIES 2021",
    url: "",
  },
  {
    id: 101,
    date: "January 04, 2021",
    eventName: "",
    eventShort: "CHI 2021",
    url: "",
  },
  {
    id: 102,
    date: "February 08, 2021",
    eventName: "",
    eventShort: "WWW 2021",
    url: "",
  },
  {
    id: 104,
    date: "March 15, 2021",
    eventName: "",
    eventShort: "ICWSM 2021",
    url: "",
  },
  // {
  //   id: 105,
  //   date: "",
  //   eventName: "",
  //   eventShort: "",
  //   url: "",
  // },
];

function getEvents() {
  const tempEventList = eventsList.map((item) => {
    tempItem = { ...item };
    const { date } = tempItem;
    const [month, day, year] = date.split(" ");
    tempItem.month = month.slice(0, 3).toUpperCase();
    tempItem.day = parseInt(day);
    tempItem.year = +year;
    return tempItem;
  });
  return tempEventList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}
