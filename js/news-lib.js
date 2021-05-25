const newsList = [
  {
    id: 0,
    date: "December 21, 2020",
    link: "../news.html",
    slug: "2020-snap-research-fellows",
    url: "news/news-one#2020-snap-research-fellows",
    title: "2020 Snap Research Fellowship",
    descriptionShort: "Congratulations to our 2020 Snap Research Fellows!",
    description: "../news/detail/2020-snap-research-fellows.html",
    metaTitle: "CCongratulations to our 2020 Snap Research Fellows!",
    metaDescription: "",
  },
  {
    id: 1,
    date: "August 25, 2020",
    link: "../news.html",
    slug: "snap-research-wins-best-in-show-award-at-siggraph-2020",
    url: "news/news-one#snap-research-wins-best-in-show-award-at-siggraph-2020",
    title: "Snap Research Wins “Best in Show” Award at SIGGRAPH 2020",
    descriptionShort:
      "Snap Research’s Creative Vision team won the “Best in Show” award at SIGGRAPH 2020 Real Time Live for their demo, “Interactive Style Transfer to Live Video Streams.",
    description: "../news/detail/snap-research-wins-best-in-show-award-at-siggraph-2020",
    metaTitle: "Snap Research Wins “Best in Show” Award at SIGGRAPH 2020",
    metaDescription: "",
  },
  {
    id: 2,
    date: "August 10, 2020",
    link: "../news.html",
    slug: "snap-creative-challenge-acm-imx-2020",
    url: "news/news-one#snap-creative-challenge-acm-imx-2020",
    title:
      "Snap Creative Challenge Invites Universities to Reimagine AR Storytelling",
    descriptionShort:
      "What will storytelling look like in a world where AR is more prevalent? Snap Research organized a virtual Creative Challenge at ACM IMX, an academic conference focused on interactive media and television, to explore that exact question.",
    description: "../news/detail/snap-creative-challenge-acm-imx-2020",
    metaTitle:
      "Snap Creative Challenge Invites Universities to Reimagine AR Storytelling",
    metaDescription: "",
  },
];

function getNewsBySlug(slug) {
  let result = newsList.filter((item) => slug.slice(1) === item.slug);
  return result;
}
