const publicationsList = [
  {
    id: 0,
    date: 'March 15, 2021',
    link: 'publications/ceam-the-effectiveness-of-cyclic.html',
    title: 'CEAM: The Effectiveness of Cyclic and Ephemeral Attention Models of User Behavior on Social Platforms',
    authors: 'Farhan Chowdhury, Yozen Liu, Nick Vincent, Koustuv Saha, Leo Neves, Neil Shah, Maarten Bos',
    event: 'ICWSM 2021',
    researchArea: 'Computational Social Science'
  },
  {
    id: 1,
    date: 'March 15, 2021',
    link: 'publications/online-communication-shifts-in-the-midst-of-the-covid-19-pandemic-a-case.html',
    title: 'Online Communication Shifts in the Midst of the Covid-19 Pandemic: A Case Study on Snapchat',
    authors: 'Qi Yang, Weinan Wang, Lucas Pierce, Rajan Vaish, Xiaolin Shi, Neil Shah',
    event: 'ICWSM 2021',
    researchArea: 'Computational Social Science, Data Science'
  },
  {
    id: 2,
    date: 'February 16, 2021',
    link: 'publications/significant-otter-understanding-the-role-of-biosignals-in-communication.html',
    title: 'Significant Otter: Understanding the Role of Biosignals in Communication',
    authors: 'Fannie Liu, Chunjong Park, Yu Jiang Tham, Tsung-Yu Tsai, Laura Dabbish, Geoff Kaufman, Andrés Monroy-Hernández',
    event: 'CHI 2021',
    researchArea: 'Human Computer Interaction',
  },
  {
    id: 3,
    date: 'February 08, 2021',
    link: 'publications/graph-neural-networks-for-friend-ranking-in-large-scale-social-platforms.html',
    title: 'Graph Neural Networks for Friend Ranking in Large-scale Social Platforms',
    authors: 'Aravind Sankar, Yozen Liu, Jun Yu, Neil Shah',
    event: 'WWW 2021',
    researchArea: 'Computational Social Science',
  },
];

function getPublications(id, path) {
  let result;
  function getResult (insideID) {
    let res = publicationsList.map((item) => {
      if (insideID === item.id) {
        item.link = path + item.link;
        return item;
      }
    });
    return res;
  }
  if(typeof id === 'string') {
    result = getResult(id);
  } else if (typeof id === 'object') {
    id.map((item) => {
      result.push(getResult(item));
    })
  }
  return result;
}

function getPublicationsByIDs(id, path) {
  if (!id.length) return [];
  let result = publicationsList.filter((item) => id.includes(item.id));
  return result.map((item) => {
    const tempObj = { ...item };
    tempObj.link = path + tempObj.link;
    return tempObj;
  });
}

