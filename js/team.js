let publicationForCategory = [];

$(function () {
  const pathnamePage = window.location.pathname;
  const teamsCategory = {
    "computational-imaging": "Computational Imaging",
    "computational-social-science": "Computational Social Science",
    "human-computer-interaction": "Human Computer Interaction",
    "creative-vision": "Creative Vision",
    // all: "",
  };

  const categoryPathname = Object.keys(teamsCategory).find((el) =>
    pathnamePage.endsWith(el)
  );

  const categoryTeam = teamsCategory[categoryPathname];

  let categoryArray = [];

  if (categoryTeam) {
    categoryArray.push(categoryTeam);
  } else {
    categoryArray = Object.values(teamsCategory);
  }

  publicationForCategory = publicationsList.filter((publication) => {
    return categoryArray.some((category) =>
      publication.researchArea.includes(category)
    );
  });

  publicationForCategory.forEach((publication) => {
    publication.url = "../../" + publication.url;
  });

  if (!publicationForCategory.length) {
    $(".team--detail-publications h2:eq(0)").hide();
  }

  $("title").text("Team - " + (categoryTeam || "All") + " - Snap Research");
  $("meta[name=description]").attr(
    "content",
    $(".team--nav-h3 ~ p:eq(0)").text()
  );
});
