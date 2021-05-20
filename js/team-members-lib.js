const teamMembersList = [
  {
    id: 0,
    hash: "#guru-krishnan",
    metaTitle: "",
    metaDescription: `
    Guru is a Lead Research Engineer at Snap Research Seattle, who focuses on computational imaging, photography, computer vision, machine learning, robotics, and computer graphics. Before joining Snap Inc., Guru worked at Amazon, where he helped automate fulfillment and deliver multiple perception systems for robotics technologies. Guru earned a Master’s in Computer Science from Columbia University. Learn more about his work    
    `,
    name: "Guru Krisdshnan",
    researchAreas: "Computational Imaging",
    url: "team/team-member/#guru-krishnan",
    backUrl: "../../team/category/computational-imaging.html",
    imageUrl:
      "https://images.ctfassets.net/btheynltg5cn/3C3Gss7SDX7l2VW4wdFJRS/09b8878574e6d859acb5e15ef1d916da/GuruK2019.png",
    description: `
    <p><p>Guru is a Lead Research Engineer at Snap Research Seattle, who focuses on computational imaging, photography, computer vision, machine learning, robotics, and computer graphics. Before joining Snap Inc., Guru worked at Amazon, where he helped automate fulfillment and deliver multiple perception systems for robotics technologies. Guru earned a Master’s in Computer Science from Columbia University. Learn more about his work&nbsp;<a href="http://www.gurukrishnan.com/"><u>here</u></a>.</p>&nbsp;<a href="http://www.gurukrishnan.com/"><u>here</u></a>.</p>
    `,
  },
  {
    id: 1,
    hash: "#jian-james-wang",
    metaTitle: "",
    metaDescription: "",
    name: "Jian (James) Wang",
    researchAreas: "Computational Imaging",
    url: "team/team-member/#jian-james-wang",
    backUrl: "../../team/category/computational-imaging.html",
    imageUrl:
      "//images.ctfassets.net/btheynltg5cn/3S6R9feaIi02RVKA4zNs06/b93bb592cd22d9d164aaa8006d5624ff/JianWangNew.png",
    description: `
    <p>Jian (James) Wang works in the Computational Imaging lab at Snap Research New York. Jian received his PhD in
    Computation Imaging and Computer Vision from Carnegie Mellon University in 2018. His research interests lie in
    computer vision and computational photography. His previous work involves the design of novel camera systems
    (algorithms, optics and mechanics) for 3D acquisition, imaging beyond visible light, and seeing through
    scattering media. Learn more about his work&nbsp;<a
      href="http://www.andrew.cmu.edu/user/jianwan2/"><u></u></a><u></u><a
      href="https://jianwang-cmu.github.io/"><u>here</u></a>.
  </p>`,
  },
];

function getMembersByIDs(id, path) {
  if (!id.length) return [];
  let result = teamMembersList.filter((item) => id.includes(item.id));
  return result.map((item) => {
    const tempObj = { ...item };
    tempObj.url = path + tempObj.url;
    return tempObj;
  });
}

(function () {
  if (window.location.pathname !== "/team/team-member/") return true;

  const hash = window.location.hash;
  const teamMemberInfo =
    teamMembersList.find((item) => item.hash === hash) || {};

  $(".team--detail-name").text(teamMemberInfo.name);
  $(".research-areas").text(teamMemberInfo.researchAreas);
  $(".team--detail-description").html(teamMemberInfo.description);
  $("a.category").attr("href", teamMemberInfo.backUrl);
  $(".team--detail img").attr("src", teamMemberInfo.imageUrl);
  $(".team--detail img").attr("alt", teamMemberInfo.name);

  $("title").text(teamMemberInfo.name + " - Snap Research");
  $("meta[name=description]").attr("content", teamMemberInfo.metaDescription);
})();
