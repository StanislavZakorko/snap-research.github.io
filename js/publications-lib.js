const publicationsList = [
  {
    id: 0,
    date: 'March 15, 2021',
    link: 'publications.html',
    slug: 'ceam-the-effectiveness-of-cyclic',
    title: 'CEAM: The Effectiveness of Cyclic and Ephemeral Attention Models of User Behavior on Social Platforms',
    description: '<p><b>Abstract</b></p><p>To improve the user experience as well as business outcomes, social platforms aim to predict user behavior. To this end, recurrent models are often used to predict a user’s next behavior based on their most recent behavior. However, people have habits and routines, making it plausible to predict their behavior from more than just their most recent activity. Our work focuses on the interplay between ephemeral and cyclical components of user behaviors. By utilizing user activity data from social platform Snapchat, we uncover cyclic and ephemeral usage patterns on a per user-level. Based on our findings, we imbued recurrent models with awareness: we augment an RNN with a cyclic module to complement traditionalRNNs that model ephemeral behaviors and allow a flexible weighting of the two for the prediction task. We conducted extensive experiments to evaluate our model’s performance on four user behavior prediction tasks on the Snapchat platform.We achieve improved results on each task compared against existing methods, using this simple, but important insight in user behavior: Both cyclical and ephemeral components matter. We show that in some situations and for some people, ephemeral components may be more helpful for predicting behavior, while for others and in other situations, cyclical components may carry more weight.</p>',
    authors: 'Farhan Chowdhury, Yozen Liu, Nick Vincent, Koustuv Saha, Leo Neves, Neil Shah, Maarten Bos',
    event: 'ICWSM 2021',
    researchArea: 'Computational Social Science',
    PDFLink: '',
    metaTitle: 'CEAM: The Effectiveness of Cyclic and Ephemeral Attention Models of User Behavior on Social Platforms - Snap Research',
    metaDescription: ''
  },
  {
    id: 1,
    date: 'March 15, 2021',
    link: 'publications.html',
    slug: 'online-communication-shifts-in-the-midst-of-the-covid-19-pandemic-a-case',
    title: 'Online Communication Shifts in the Midst of the Covid-19 Pandemic: A Case Study on Snapchat',
    description: '<p><b>Abstract</b></p><p>The Covid-19 pandemic has created large shifts in how people stay connected with each other in lieu of social distancing and isolation measures. More and more, individuals have turned to online communications as a necessary replacement for in-person interaction. Despite this, the research community has little understanding of how online communications have been influenced by the offline impacts of Covid-19. Our work touches upon this topic. Specifically, we study research questions around the impact of Covid-19 on online public and private sharing propensity, its influence on online communication homophily, and correlations between online communication and offline case severity in the United States. To do so, we study the usage patterns of 79 million US-based users on Snapchat, a large, leading mobile multimedia-driven social sharing platform. Our findings suggest that Covid-19 has increased propensity to privately communicate with friends, while decreasing propensity to publicly share content when users are out-and-about. Moreover, online communications have observed a marked decrease in baseline homophily across locations, ages and genders, with relative increases in cross-group communications. Finally, we observe that increased offline positive Covid-19 case severity in US states is associated with widening gaps between across-state and within-state communication increases after the onset of Covid-19, as well as marked declines in public sharing. We hope our findings drive further interest and work on online communication changes during pandemics and other extended times of crisis.</p>',
    authors: 'Qi Yang, Weinan Wang, Lucas Pierce, Rajan Vaish, Xiaolin Shi, Neil Shah',
    event: 'ICWSM 2021',
    researchArea: 'Computational Social Science, Data Science',
    PDFLink: '',
    metaTitle: 'Online Communication Shifts in the Midst of the Covid-19 Pandemic: A Case  Study on Snapchat - Snap Research',
    metaDescription: ''
  },
  {
    id: 2,
    date: 'February 16, 2021',
    link: 'publications.html',
    slug: 'significant-otter-understanding-the-role-of-biosignals-in-communication',
    title: 'Significant Otter: Understanding the Role of Biosignals in Communication',
    description: '<p><b>Abstract</b></p><p>With the growing ubiquity of wearable devices, sensed physiological responses provide new means to connect with others. While recent research demonstrates the expressive potential for biosignals, the value of sharing these personal data remains unclear. To understand their role in communication, we created Significant Otter, an Apple Watch/iPhone app that enables romantic partners to share and respond to each other’s biosignals in the form of animated otter avatars. In a one-month study with 20 couples, participants used Significant Otter with biosignals sensing OFF and ON. We found that while sensing OFF enabled couples to keep in touch, sensing ON enabled easier and more authentic communication that fostered social connection. However, the addition of biosignals introduced concerns about autonomy and agency over the messages they sent. We discuss design implications and future directions for communication systems that recommend messages based on biosignals.</p>',
    authors: 'Fannie Liu, Chunjong Park, Yu Jiang Tham, Tsung-Yu Tsai, Laura Dabbish, Geoff Kaufman, Andrés Monroy-Hernández',
    event: 'CHI 2021',
    researchArea: 'Human Computer Interaction',
    PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/eOL9X92uuV2MjAFYZRgYX/a3ee211a9baf1ec472de66dfd360f028/2102.08235.pdf',
    metaTitle: 'Significant Otter: Understanding the Role of Biosignals in Communication - Snap Research',
    metaDescription: ''
  },
  {
    id: 3,
    date: 'February 08, 2021',
    link: 'publications.html',
    slug: 'graph-neural-networks-for-friend-ranking-in-large-scale-social-platforms',
    title: 'Graph Neural Networks for Friend Ranking in Large-scale Social Platforms',
    description: '<p><b>Abstract</b></p><p>Graph Neural Networks (GNNs) have recently enabled substantial advances in graph learning. Despite their rich representational capacity, GNNs remain under-explored for large-scale social modeling applications. One such industrially ubiquitous application is friend suggestion: recommending users other candidate users to befriend, to improve user connectivity, retention and engagement. However, modeling such user-user interactions on large-scale social platforms poses unique challenges: such graphs often have heavy-tailed degree distributions, where a significant fraction of users are inactive and have limited structural and engagement information. Moreover, users interact with different functionalities, communicate with diverse groups, and have multifaceted interaction patterns. We study the application of GNNs for friend suggestion, providing the first investigation of GNN design for this task, to our knowledge. To leverage the rich knowledge of in-platform actions, we formulate friend suggestion as multi-faceted friend ranking with multi-modal user features and link communication features. We design a neural architecture GraFRank to learn expressive user representations from multiple feature modalities and user-user interactions. Specifically, GraFRank employs modality-specific neighbor aggregators and cross-modality attentions to learn multi-faceted user representations. We conduct experiments on two multi-million user datasets from Snapchat, a leading mobile social platform, where GraFRank outperforms several state-of-the-art approaches on candidate retrieval (by 30% MRR) and ranking (by 20% MRR) tasks. Moreover, our qualitative analysis indicates notable gains for critical populations of less-active and low-degree users.</p>',
    authors: 'Aravind Sankar, Yozen Liu, Jun Yu, Neil Shah',
    event: 'WWW 2021',
    researchArea: 'Computational Social Science',
    PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/53nweIQ8YcXmh9uRxAssqi/e43c35ef60dd613fe25689ca55e35ac9/GrafRank.WWW.21.pdf',
    metaTitle: 'Graph Neural Networks for Friend Ranking in Large-scale Social Platforms - Snap Research',
    metaDescription: ''
  },
  {
    id: 4,
    date: 'January 04, 2021',
    link: 'publications.html',
    slug: 'advertiming-matters-examining-user-ad-consumption-for-effective-ad',
    title: 'AdverTiming Matters: Examining User Ad Consumption for Effective Ad Allocations on Social Media',
    description: '<p>Showing ads delivers revenue for online content distributors, but ad exposure can compromise user experience and cause user fatigue and frustration. Correctly balancing ads with other content is imperative. Currently, ad allocation relies primarily on demographics and inferred user interests, which are treated as static features and can be privacy-intrusive. This paper uses person-centric and momentary context features to understand optimal ad-timing. In a quasi-experimental study on a three-month longitudinal dataset of 100K Snapchat users, we find ad timing influences ad effectiveness. We draw insights on the relationship between ad effectiveness and momentary behaviors such as duration, interactivity, and interaction diversity. We simulate ad reallocation, finding that our study-driven insights lead to greater value for the platform. This work advances our understanding of ad consumption and bears implications for designing responsible ad allocation systems, improving both user and platform outcomes. We discuss privacy-preserving components and ethical implications of our work.</p>',
    authors: 'Koustuv Saha, Yozen Liu, Nicholas Vincent, Farhan Asif Chowdhury, Leonardo Neves, Neil Shah, Maarten Bos',
    event: 'CHI 2021',
    researchArea: 'Computational Social Science',
    PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/w1aqHgJ3zsegGpJUYKxbN/323c07d286a10d875a58c12d348ffad3/CHI21_AdverTiming_DoubleColumn.pdf',
    metaTitle: 'AdverTiming Matters: Examining User Ad Consumption for Effective Ad Allocations on Social Media - Snap Research',
    metaDescription: 'Showing ads delivers revenue for online content distributors, but ad exposure can compromise user experience and cause user fatigue and frustration. Correctly balancing ads with other content is imperative. Currently, ad allocation relies primarily on demographics and inferred user interests, which are treated as static features and can be privacy-intrusive. This paper uses person-centric and momentary context features to understand optimal ad-timing. In a quasi-experimental study on a three-month longitudinal dataset of 100K Snapchat users, we find ad timing influences ad effectiveness. We draw insights on the relationship between ad effectiveness and momentary behaviors such as duration, interactivity, and interaction diversity. We simulate ad reallocation, finding that our study-driven insights lead to greater value for the platform. This work advances our understanding of ad consumption and bears implications for designing responsible ad allocation systems, improving both user and platform outcomes. We discuss privacy-preserving components and ethical implications of our work.'
  },
  {
    id: 5,
    date: 'December 05, 2020',
    link: 'publications.html',
    slug: 'fairod-fairness-aware-outlier-detection',
    title: 'FairOD: Fairness-aware Outlier Detection',
    description: '<p>Fairness and Outlier Detection (OD) are closely related, as it is exactly the goal of OD to spot rare, minority samples in a given population. When being a minority (as defined by protected variables, e.g. race/ethnicity/sex/age) does not reflect positive-class membership (e.g. criminal/fraud), however, OD produces unjust outcomes. Surprisingly, fairness-aware OD has been almost untouched in prior work, as fair machine learning literature mainly focus on supervised settings. Our work aims to bridge this gap. Specifically, we develop desiderata capturing well-motivated fairness criteria for OD, and systematically formalize the fair OD problem. Further, guided by our desiderata, we propose FairOD, a fairness-aware outlier detector, which has the following, desirable properties: FairOD (1) does not employ disparate treatment at test time, (2) aims to flag equal proportions of samples from all groups (i.e. obtain group fairness, via statistical parity), and (3) strives to flag truly high-risk fraction of samples within each group. Extensive experiments on a diverse set of synthetic and real world datasets show that FairOD produces outcomes that are fair with respect to protected variables, while performing comparable to (and in some cases, even better than) fairness-agnostic detectors in terms of detection performance.</p>',
    authors: 'Shubhranshu Shekhar, Neil Shah, Leman Akoglu',
    event: 'AIES 2021',
    researchArea: 'Computational Social Science',
    PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/4bSVQh0NCd9vuemQ9Euk8a/259be56e72ba2c0e70522f459c755861/2012.03063.pdf',
    metaTitle: 'FairOD: Fairness-aware Outlier Detection - Snap Research',
    metaDescription: 'Fairness and Outlier Detection (OD) are closely related, as it is exactly the goal of OD to spot rare, minority samples in a given population. When being a minority (as defined by protected variables, e.g. race/ethnicity/sex/age) does not reflect positive-class membership (e.g. criminal/fraud), however, OD produces unjust outcomes. Surprisingly, fairness-aware OD has been almost untouched in prior work, as fair machine learning literature mainly focus on supervised settings. Our work aims to bridge this gap. Specifically, we develop desiderata capturing well-motivated fairness criteria for OD, and systematically formalize the fair OD problem. Further, guided by our desiderata, we propose FairOD, a fairness-aware outlier detector, which has the following, desirable properties: FairOD (1) does not employ disparate treatment at test time, (2) aims to flag equal proportions of samples from all groups (i.e. obtain group fairness, via statistical parity), and (3) strives to flag truly high-risk fraction of samples within each group. Extensive experiments on a diverse set of synthetic and real world datasets show that FairOD produces outcomes that are fair with respect to protected variables, while performing comparable to (and in some cases, even better than) fairness-agnostic detectors in terms of detection performance.'
  }
];

function getPublicationsByIDs(id, path) {
  if (!id.length) return [];
  let result = publicationsList.filter((item) => id.includes(item.id));
  return result.map((item) => {
    const tempObj = { ...item };
    tempObj.link = path + tempObj.link;
    return tempObj;
  });
}

