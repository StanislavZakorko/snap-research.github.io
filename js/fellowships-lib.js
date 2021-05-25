const fellowshipsList = [
  {
    id: 0,
    date: 'December 21, 2020',
    link: '../fellowships.html',
    slug: 'ceam-the-effectiveness-of-cyclic',
    url: 'fellowships/fellowship.html#ceam-the-effectiveness-of-cyclic',
    title: '2020 Snap Research Fellowship',
    descriptionShort: 'Congratulations to our 2020 Snap Research Fellows!',
    description: 'Congratulations to our 2020 Snap Research Fellows!',
    event: '',
    metaTitle: 'CCongratulations to our 2020 Snap Research Fellows!',
    metaDescription: ''
  },
  {
    id: 1,
    date: 'December 25, 2020',
    link: '../fellowships.html',
    slug: 'ceam-the-effectiveness',
    url: 'fellowships/fellowship.html#ceam-the-effectiveness',
    title: '2020 Snap Research Fellowship',
    descriptionShort: 'Congratulations to our 2020 Snap Research Fellows!',
    description: 'Congratulations to our 2020 Snap Research Fellows!',
    event: '',
    metaTitle: 'CCongratulations to our 2020 Snap Research Fellows!',
    metaDescription: ''
  },

];


function getFellowshipsBySlug(slug) {
  let result = fellowshipsList.filter((item) => slug.slice(1) === item.slug);
  return result;
}



