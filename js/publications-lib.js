const publicationsList = [
  // {
  //   id: 0,
  //   date: 'March 15, 2021',
  //   link: 'publications/publication.html',
  //   slug: 'ceam-the-effectiveness-of-cyclic',
  //   url: 'publications/publication.html#ceam-the-effectiveness-of-cyclic',
  //   title: 'CEAM: The Effectiveness of Cyclic and Ephemeral Attention Models of User Behavior on Social Platforms',
  //   description: '<p><b>Abstract</b></p><p>To improve the user experience as well as business outcomes, social platforms aim to predict user behavior. To this end, recurrent models are often used to predict a user’s next behavior based on their most recent behavior. However, people have habits and routines, making it plausible to predict their behavior from more than just their most recent activity. Our work focuses on the interplay between ephemeral and cyclical components of user behaviors. By utilizing user activity data from social platform Snapchat, we uncover cyclic and ephemeral usage patterns on a per user-level. Based on our findings, we imbued recurrent models with awareness: we augment an RNN with a cyclic module to complement traditionalRNNs that model ephemeral behaviors and allow a flexible weighting of the two for the prediction task. We conducted extensive experiments to evaluate our model’s performance on four user behavior prediction tasks on the Snapchat platform.We achieve improved results on each task compared against existing methods, using this simple, but important insight in user behavior: Both cyclical and ephemeral components matter. We show that in some situations and for some people, ephemeral components may be more helpful for predicting behavior, while for others and in other situations, cyclical components may carry more weight.</p>',
  //   authors: 'Farhan Chowdhury, Yozen Liu, Nick Vincent, Koustuv Saha, Leo Neves, Neil Shah, Maarten Bos',
  //   eventID: 0,
  //   researchArea: 'Computational Social Science',
  //   PDFLink: '',
  //   metaTitle: 'CEAM: The Effectiveness of Cyclic and Ephemeral Attention Models of User Behavior on Social Platforms - Snap Research',
  //   metaDescription: '',
  //   bgImage: ''
  // },
  // {
  //   id: 1,
  //   date: 'March 15, 2021',
  //   link: 'publications/publication.html',
  //   slug: 'online-communication-shifts-in-the-midst-of-the-covid-19-pandemic-a-case',
  //   url: 'publications/publication.html#online-communication-shifts-in-the-midst-of-the-covid-19-pandemic-a-case',
  //   title: 'Online Communication Shifts in the Midst of the Covid-19 Pandemic: A Case Study on Snapchat',
  //   description: '<p><b>Abstract</b></p><p>The Covid-19 pandemic has created large shifts in how people stay connected with each other in lieu of social distancing and isolation measures. More and more, individuals have turned to online communications as a necessary replacement for in-person interaction. Despite this, the research community has little understanding of how online communications have been influenced by the offline impacts of Covid-19. Our work touches upon this topic. Specifically, we study research questions around the impact of Covid-19 on online public and private sharing propensity, its influence on online communication homophily, and correlations between online communication and offline case severity in the United States. To do so, we study the usage patterns of 79 million US-based users on Snapchat, a large, leading mobile multimedia-driven social sharing platform. Our findings suggest that Covid-19 has increased propensity to privately communicate with friends, while decreasing propensity to publicly share content when users are out-and-about. Moreover, online communications have observed a marked decrease in baseline homophily across locations, ages and genders, with relative increases in cross-group communications. Finally, we observe that increased offline positive Covid-19 case severity in US states is associated with widening gaps between across-state and within-state communication increases after the onset of Covid-19, as well as marked declines in public sharing. We hope our findings drive further interest and work on online communication changes during pandemics and other extended times of crisis.</p>',
  //   authors: 'Qi Yang, Weinan Wang, Lucas Pierce, Rajan Vaish, Xiaolin Shi, Neil Shah',
  //   eventID: 0,
  //   researchArea: 'Computational Social Science, Data Science',
  //   PDFLink: '',
  //   metaTitle: 'Online Communication Shifts in the Midst of the Covid-19 Pandemic: A Case  Study on Snapchat - Snap Research',
  //   metaDescription: '',
  //   bgImage: ''
  // },
  // {
  //   id: 2,
  //   date: 'February 16, 2021',
  //   link: 'publications/publication.html',
  //   slug: 'significant-otter-understanding-the-role-of-biosignals-in-communication',
  //   url: 'publications/publication.html#significant-otter-understanding-the-role-of-biosignals-in-communication',
  //   title: 'Significant Otter: Understanding the Role of Biosignals in Communication',
  //   description: '<p><b>Abstract</b></p><p>With the growing ubiquity of wearable devices, sensed physiological responses provide new means to connect with others. While recent research demonstrates the expressive potential for biosignals, the value of sharing these personal data remains unclear. To understand their role in communication, we created Significant Otter, an Apple Watch/iPhone app that enables romantic partners to share and respond to each other’s biosignals in the form of animated otter avatars. In a one-month study with 20 couples, participants used Significant Otter with biosignals sensing OFF and ON. We found that while sensing OFF enabled couples to keep in touch, sensing ON enabled easier and more authentic communication that fostered social connection. However, the addition of biosignals introduced concerns about autonomy and agency over the messages they sent. We discuss design implications and future directions for communication systems that recommend messages based on biosignals.</p>',
  //   authors: 'Fannie Liu, Chunjong Park, Yu Jiang Tham, Tsung-Yu Tsai, Laura Dabbish, Geoff Kaufman, Andrés Monroy-Hernández',
  //   eventID: 1,
  //   researchArea: 'Human Computer Interaction',
  //   PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/eOL9X92uuV2MjAFYZRgYX/a3ee211a9baf1ec472de66dfd360f028/2102.08235.pdf',
  //   metaTitle: 'Significant Otter: Understanding the Role of Biosignals in Communication - Snap Research',
  //   metaDescription: '',
  //   bgImage: 'https://images.ctfassets.net/btheynltg5cn/1sZ3K3mOk9WmgdEORIWYcA/1a26da31f46bf51d1124ef802e17e915/Screen_Shot_2021-02-20_at_2.48.12_AM.png?w=400'
  // },
  // {
  //   id: 3,
  //   date: 'February 08, 2021',
  //   link: 'publications/publication.html',
  //   slug: 'graph-neural-networks-for-friend-ranking-in-large-scale-social-platforms',
  //   url: 'publications/publication.html#graph-neural-networks-for-friend-ranking-in-large-scale-social-platforms',
  //   title: 'Graph Neural Networks for Friend Ranking in Large-scale Social Platforms',
  //   description: '<p><b>Abstract</b></p><p>Graph Neural Networks (GNNs) have recently enabled substantial advances in graph learning. Despite their rich representational capacity, GNNs remain under-explored for large-scale social modeling applications. One such industrially ubiquitous application is friend suggestion: recommending users other candidate users to befriend, to improve user connectivity, retention and engagement. However, modeling such user-user interactions on large-scale social platforms poses unique challenges: such graphs often have heavy-tailed degree distributions, where a significant fraction of users are inactive and have limited structural and engagement information. Moreover, users interact with different functionalities, communicate with diverse groups, and have multifaceted interaction patterns. We study the application of GNNs for friend suggestion, providing the first investigation of GNN design for this task, to our knowledge. To leverage the rich knowledge of in-platform actions, we formulate friend suggestion as multi-faceted friend ranking with multi-modal user features and link communication features. We design a neural architecture GraFRank to learn expressive user representations from multiple feature modalities and user-user interactions. Specifically, GraFRank employs modality-specific neighbor aggregators and cross-modality attentions to learn multi-faceted user representations. We conduct experiments on two multi-million user datasets from Snapchat, a leading mobile social platform, where GraFRank outperforms several state-of-the-art approaches on candidate retrieval (by 30% MRR) and ranking (by 20% MRR) tasks. Moreover, our qualitative analysis indicates notable gains for critical populations of less-active and low-degree users.</p>',
  //   authors: 'Aravind Sankar, Yozen Liu, Jun Yu, Neil Shah',
  //   eventID: 1,
  //   researchArea: 'Computational Social Science',
  //   PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/53nweIQ8YcXmh9uRxAssqi/e43c35ef60dd613fe25689ca55e35ac9/GrafRank.WWW.21.pdf',
  //   metaTitle: 'Graph Neural Networks for Friend Ranking in Large-scale Social Platforms - Snap Research',
  //   metaDescription: '',
  //   bgImage: ''
  // },
  // {
  //   id: 4,
  //   date: 'January 04, 2021',
  //   link: 'publications/publication.html',
  //   slug: 'advertiming-matters-examining-user-ad-consumption-for-effective-ad',
  //   url: 'publications/publication.html#advertiming-matters-examining-user-ad-consumption-for-effective-ad',
  //   title: 'AdverTiming Matters: Examining User Ad Consumption for Effective Ad Allocations on Social Media',
  //   description: '<p>Showing ads delivers revenue for online content distributors, but ad exposure can compromise user experience and cause user fatigue and frustration. Correctly balancing ads with other content is imperative. Currently, ad allocation relies primarily on demographics and inferred user interests, which are treated as static features and can be privacy-intrusive. This paper uses person-centric and momentary context features to understand optimal ad-timing. In a quasi-experimental study on a three-month longitudinal dataset of 100K Snapchat users, we find ad timing influences ad effectiveness. We draw insights on the relationship between ad effectiveness and momentary behaviors such as duration, interactivity, and interaction diversity. We simulate ad reallocation, finding that our study-driven insights lead to greater value for the platform. This work advances our understanding of ad consumption and bears implications for designing responsible ad allocation systems, improving both user and platform outcomes. We discuss privacy-preserving components and ethical implications of our work.</p>',
  //   authors: 'Koustuv Saha, Yozen Liu, Nicholas Vincent, Farhan Asif Chowdhury, Leonardo Neves, Neil Shah, Maarten Bos',
  //   eventID: 2,
  //   researchArea: 'Computational Social Science',
  //   PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/w1aqHgJ3zsegGpJUYKxbN/323c07d286a10d875a58c12d348ffad3/CHI21_AdverTiming_DoubleColumn.pdf',
  //   metaTitle: 'AdverTiming Matters: Examining User Ad Consumption for Effective Ad Allocations on Social Media - Snap Research',
  //   metaDescription: 'Showing ads delivers revenue for online content distributors, but ad exposure can compromise user experience and cause user fatigue and frustration. Correctly balancing ads with other content is imperative. Currently, ad allocation relies primarily on demographics and inferred user interests, which are treated as static features and can be privacy-intrusive. This paper uses person-centric and momentary context features to understand optimal ad-timing. In a quasi-experimental study on a three-month longitudinal dataset of 100K Snapchat users, we find ad timing influences ad effectiveness. We draw insights on the relationship between ad effectiveness and momentary behaviors such as duration, interactivity, and interaction diversity. We simulate ad reallocation, finding that our study-driven insights lead to greater value for the platform. This work advances our understanding of ad consumption and bears implications for designing responsible ad allocation systems, improving both user and platform outcomes. We discuss privacy-preserving components and ethical implications of our work.',
  //   bgImage: ''
  // },
  // {
  //   id: 5,
  //   date: 'December 05, 2020',
  //   link: 'publications/publication.html',
  //   slug: 'fairod-fairness-aware-outlier-detection',
  //   url: 'publications/publication.html#fairod-fairness-aware-outlier-detection',
  //   title: 'FairOD: Fairness-aware Outlier Detection',
  //   description: '<p>Fairness and Outlier Detection (OD) are closely related, as it is exactly the goal of OD to spot rare, minority samples in a given population. When being a minority (as defined by protected variables, e.g. race/ethnicity/sex/age) does not reflect positive-class membership (e.g. criminal/fraud), however, OD produces unjust outcomes. Surprisingly, fairness-aware OD has been almost untouched in prior work, as fair machine learning literature mainly focus on supervised settings. Our work aims to bridge this gap. Specifically, we develop desiderata capturing well-motivated fairness criteria for OD, and systematically formalize the fair OD problem. Further, guided by our desiderata, we propose FairOD, a fairness-aware outlier detector, which has the following, desirable properties: FairOD (1) does not employ disparate treatment at test time, (2) aims to flag equal proportions of samples from all groups (i.e. obtain group fairness, via statistical parity), and (3) strives to flag truly high-risk fraction of samples within each group. Extensive experiments on a diverse set of synthetic and real world datasets show that FairOD produces outcomes that are fair with respect to protected variables, while performing comparable to (and in some cases, even better than) fairness-agnostic detectors in terms of detection performance.</p>',
  //   authors: 'Shubhranshu Shekhar, Neil Shah, Leman Akoglu',
  //   eventID: 3,
  //   researchArea: 'Computational Social Science',
  //   PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/4bSVQh0NCd9vuemQ9Euk8a/259be56e72ba2c0e70522f459c755861/2012.03063.pdf',
  //   metaTitle: 'FairOD: Fairness-aware Outlier Detection - Snap Research',
  //   metaDescription: 'Fairness and Outlier Detection (OD) are closely related, as it is exactly the goal of OD to spot rare, minority samples in a given population. When being a minority (as defined by protected variables, e.g. race/ethnicity/sex/age) does not reflect positive-class membership (e.g. criminal/fraud), however, OD produces unjust outcomes. Surprisingly, fairness-aware OD has been almost untouched in prior work, as fair machine learning literature mainly focus on supervised settings. Our work aims to bridge this gap. Specifically, we develop desiderata capturing well-motivated fairness criteria for OD, and systematically formalize the fair OD problem. Further, guided by our desiderata, we propose FairOD, a fairness-aware outlier detector, which has the following, desirable properties: FairOD (1) does not employ disparate treatment at test time, (2) aims to flag equal proportions of samples from all groups (i.e. obtain group fairness, via statistical parity), and (3) strives to flag truly high-risk fraction of samples within each group. Extensive experiments on a diverse set of synthetic and real world datasets show that FairOD produces outcomes that are fair with respect to protected variables, while performing comparable to (and in some cases, even better than) fairness-agnostic detectors in terms of detection performance.',
  //   bgImage: ''
  // },
  // {
  //   id: 6,
  //   date: 'December 02, 2020',
  //   link: 'publications/publication.html',
  //   slug: 'data-augmentation-for-graph-neural-networks',
  //   url: 'publications/publication.html#data-augmentation-for-graph-neural-networks',
  //   title: 'Data Augmentation for Graph Neural Networks',
  //   description: '<p><b>Abstract</b></p><p>Data augmentation has been widely used to improve generalizability of machine learning models. However, comparatively little work studies data augmentation for graphs. This is largely due to the complex, non-Euclidean structure of graphs, which limits possible manipulation operations. Augmentation operations commonly used in vision and language have no analogs for graphs. Our work studies graph data augmentation for graph neural networks (GNNs) in the context of improving semi-supervised node-classification. We discuss practical and theoretical motivations, considerations and strategies for graph data augmentation. Our work shows that neural edge predictors can effectively encode classhomophilic structure to promote intra-class edges and demote inter-class edges in given graph structure, and our main contribution introduces the GAUG graph data augmentation framework, which leverages these insights to improve performance in GNN-based node classification via edge prediction. Extensive experiments on multiple benchmarks show that augmentation via GAUG improves performance across GNN architectures and datasets.</p>',
  //   authors: 'Tong Zhao, Yozen Liu, Leonardo Neves, Oliver Woodford, Meng Jiang, Neil Shah',
  //   eventID: 4,
  //   researchArea: 'Computational Social Science',
  //   PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/6U9l1ptDcrGoUPBOrDrChh/23ddcd2a0ab783ab47936196eeb15e2a/2006.06830.pdf',
  //   metaTitle: 'Data Augmentation for Graph Neural Networks - Snap Research',
  //   metaDescription: '',
  //   bgImage: ''
  // },
  // {
  //   id: 7,
  //   date: 'November 16, 2020',
  //   link: 'publications/publication.html',
  //   slug: 'tweet-eval-unified-benchmark-and-comparative-evaluation-for-tweet',
  //   url: 'publications/publication.html#tweet-eval-unified-benchmark-and-comparative-evaluation-for-tweet',
  //   title: 'TWEET EVAL: Unified Benchmark and Comparative Evaluation for Tweet Classification',
  //   description: '<p><b>Abstract</b>The experimental landscape in natural language processing for social media is too fragmented. Each year, new shared tasks and datasets are proposed, ranging from classics like sentiment analysis to irony detection or emoji prediction. Therefore, it is unclear what the current state of the art is, as there is no standardized evaluation protocol, neither a strong set of baselines trained on such domainspecific data. In this paper, we propose a new evaluation framework (TWEETEVAL) consisting of seven heterogeneous Twitter-specific classification tasks. We also provide a strong set of baselines as starting point, and compare different language modeling pre-training strategies. Our initial experiments show the effectiveness of starting off with existing pretrained generic language models, and continue training them on Twitter corpora.</p>',
  //   authors: 'Francesco Barbieri, Jose Camacho-Collados, Leonardo Neves, Luis Espinosa-Anke†',
  //   eventID: 5,
  //   researchArea: 'Computational Social Science, Natural Language Processing',
  //   PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/3mKDgDM0vE6hMvPZaisEZZ/aef05f083605760a1efc7e39e67c5d27/2020.findings-emnlp.148.pdf',
  //   metaTitle: 'TWEET EVAL: Unified Benchmark and Comparative Evaluation for Tweet Classification - Snap Research',
  //   metaDescription: '',
  //   bgImage: ''
  // },
  // {
  //   id: 8,
  //   date: 'November 02, 2020',
  //   link: 'publications/publication.html',
  //   slug: 'the-devil-is-in-the-details-evaluating-limitations-of-transformer-based',
  //   url: 'publications/publication.html#the-devil-is-in-the-details-evaluating-limitations-of-transformer-based',
  //   title: 'The Devil is in the Details: Evaluating Limitations of Transformer-based Methods for Granular Tasks',
  //   description: '<p><b>Abstract</b>Contextual embeddings derived from transformer-based neural language models have shown state-of-the-art performance for various tasks such as question answering, sentiment analysis, and textual similarity in recent years. Extensive work shows how accurately such models can represent abstract, semantic information present in text. In this expository work, we explore a tangent direction and analyze such models’ performance on tasks that require a more granular level of representation. We focus on the problem of textual similarity from two perspectives: matching documents on a granular level (requiring embeddings to capture fine-grained attributes in the text), and an abstract level (requiring embeddings to capture overall textual semantics).</p><p>We empirically demonstrate, across two datasets from different domains, that despite high performance in abstract document matching as expected, contextual embeddings are consistently (and at times, vastly) outperformed by simple baselines like TF-IDF for more granular tasks. We then propose a simple but effective method to incorporate TF-IDF into models that use contextual embeddings, achieving relative improvements of up to 36% on granular tasks.</p>',
  //   authors: 'Brihi Joshi, Neil Shah, Francesco Barbieri, Leonardo Neves',
  //   eventID: 6,
  //   researchArea: 'Computational Social Science, Natural Language Processing',
  //   PDFLink: 'https://assets.ctfassets.net/btheynltg5cn/WUgIBbb5JQ4yXsZTLi2ay/25d747d901068f12be951a9d4c4095b8/2011.01196.pdf',
  //   metaTitle: 'The Devil is in the Details: Evaluating Limitations of Transformer-based Methods for Granular Tasks - Snap Research',
  //   metaDescription: '',
  //   bgImage: ''
  // },
  // {
  //   id: 9,
  //   date: 'September 28, 2020',
  //   link: 'publications/publication.html',
  //   slug: 'a-good-image-generator-is-what-you-need-for-high-resolution-video-synthesis',
  //   url: 'publications/publication.html#a-good-image-generator-is-what-you-need-for-high-resolution-video-synthesis',
  //   title: 'A Good Image Generator Is What You Need for High-Resolution Video Synthesis',
  //   description: '<p><b>ABSTRACT</b></p><p>Image and video synthesis are closely related areas aiming at generating content from noise. While rapid progress has been demonstrated in improving image based models to handle large resolutions, high-quality renderings, and wide variations in image content, achieving comparable video generation results remains problematic. We present a framework that leverages contemporary image generators to render high-resolution videos. We frame the video synthesis problem as discovering a trajectory in the latent space of a pre-trained and fixed image generator. Not only does such a framework render high-resolution videos, but it also is an order of magnitude more computationally efficient. We introduce a motion generator that discovers the desired trajectory, in which content and motion are disentangled. With such a representation, our framework allows for a broad range of applications, including content and motion manipulation. Furthermore, we introduce a new task, which we call cross-domain video synthesis, in which the image and motion generators are trained on disjoint datasets belonging to different domains. This allows for generating moving objects for which the desired video data is not available. Extensive experiments on various datasets demonstrate the advantages of our methods over existing video generation techniques. </p><p>Code will be released at https://github.com/snap-research/MoCoGAN-HD.</p>',
  //   authors: 'Yu Tian, Jian Ren, Menglei Chai, Kyle Olszewski, Xi Peng, Dimitris N. Metaxas, Sergey Tulyakov',
  //   eventID: 7,
  //   researchArea: 'Creative Vision',
  //   PDFLink: 'https://downloads.ctfassets.net/btheynltg5cn/5bv0CSn2Gz2No3YFNRB8cW/6f770978b86b6d86c11629447bc7ba19/pdf',
  //   metaTitle: 'A Good Image Generator Is What You Need for High-Resolution Video Synthesis - Snap Research',
  //   metaDescription: '',
  //   bgImage: ''
  // },
  {
    id: 1,
    date: "January 01, 2016",
    // slug: "l0-sparse-subspace-clustering",
    title:
      "L0-Sparse Subspace Clustering",
    description:
      "<p><b>ABSTRACT</b></p><p>Image and video synthesis are closely related areas aiming at generating content from noise. While rapid progress has been demonstrated in improving image based models to handle large resolutions, high-quality renderings, and wide variations in image content, achieving comparable video generation results remains problematic. We present a framework that leverages contemporary image generators to render high-resolution videos. We frame the video synthesis problem as discovering a trajectory in the latent space of a pre-trained and fixed image generator. Not only does such a framework render high-resolution videos, but it also is an order of magnitude more computationally efficient. We introduce a motion generator that discovers the desired trajectory, in which content and motion are disentangled. With such a representation, our framework allows for a broad range of applications, including content and motion manipulation. Furthermore, we introduce a new task, which we call cross-domain video synthesis, in which the image and motion generators are trained on disjoint datasets belonging to different domains. This allows for generating moving objects for which the desired video data is not available. Extensive experiments on various datasets demonstrate the advantages of our methods over existing video generation techniques. </p><p>Code will be released at https://github.com/snap-research/MoCoGAN-HD.</p>",
    authors:
      "Yu Tian, Jian Ren, Menglei Chai, Kyle Olszewski, Xi Peng, Dimitris N. Metaxas, Sergey Tulyakov",
    eventID: 7,
    researchArea: "Creative Vision",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/5bv0CSn2Gz2No3YFNRB8cW/6f770978b86b6d86c11629447bc7ba19/pdf",
    metaTitle:
      "A Good Image Generator Is What You Need for High-Resolution Video Synthesis - Snap Research",
    metaDescription: "",
    bgImage: "",
  },
];
publicationsList.forEach((publication) => {
  publication.slug = publication.title.split(" ").join("-").toLocaleLowerCase();
  publication.url = "publications/publication.html#" + publication.slug;
  publication.link = "publications/publication.html";
});
publicationsList.sort((a, b) => new Date(b.date) - new Date(a.date));

function getPublicationsByIDs(id, path) {
  if (!id.length) return [];
  let result = [];
  id.map((insideID) => {
    publicationsList.map((item) => {
      if (item.id === insideID) {
        result.push(item);
      }
    });
  });
  return result
    .map((item) => {
      const tempObj = { ...item };
      tempObj.link = path + tempObj.link;
      return tempObj;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getPublicationBySlug(slug) {
  let result = publicationsList.filter((item) => slug.slice(1) === item.slug);
  return result;
}

// publicationsList.map((obj) => {
//   let result = eventsList.filter((event) => {
//     return event.id === obj.eventID;
//   });
//   return Object.assign(obj, { eventShort: result[0].eventShort });
// });
