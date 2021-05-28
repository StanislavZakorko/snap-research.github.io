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
    title: "L0-Sparse Subspace Clustering",
    description: `<p><b>Abstract: </b>Subspace clustering methods with sparsity prior, such as Sparse Subspace Clustering (SSC), are effective in partitioning the data that lie in a union of subspaces. Most of those methods require certain assumptions, e.g. independence or disjointness, on the subspaces. These assumptions are not guaranteed to hold in practice and they limit the application of existing sparse subspace clustering methods. In this paper, we propose <i>ℓ0</i>-induced sparse subspace clustering (ℓ0-SSC). In contrast to the required assumptions, such as independence or disjointness, on subspaces for most existing sparse subspace clustering methods, we prove that subspace-sparse representation, a key element in subspace clustering, can be obtained by ℓ0-SSC for arbitrary distinct underlying subspaces almost surely under the mild i.i.d. assumption on the data generation. We also present the “no free lunch” theorem that obtaining the subspace representation under our general assumptions can not be much computationally cheaper than solving the corresponding ℓ0 problem of ℓ0-SSC. We develop a novel approximate algorithm named Approximate ℓ0 -SSC (Aℓ0-SSC) that employs proximal gradient descent to obtain a sub-optimal solution to the optimization problem of ℓ0 -SSC with theoretical guarantee, and the sub-optimal solution is used to build a sparse similarity matrix for clustering. Extensive experimental results on various data sets demonstrate the superiority of Aℓ0-SSC compared to other competing clustering methods.</p><p></p><p><i><b>Keywords</b></i><i>: Sparse subspace clustering, proximal gradient descent</i></p>`,
    authors:
      "Yingzhen Yang, Jiashi Feng, Nebojsa Jojic, Jianchao Yang, Thomas S Huang",
    eventID: 1,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4NhUi3IjWabP9ZStNB71yX/7ec5e05db529a988045b8dc88c4fc15c/l0-ssc.pdf",
    metaDescription: `Subspace clustering methods with sparsity prior, such as Sparse Subspace Clustering (SSC), are effective in partitioning the data that lie in a union of subspaces. Most of those methods require certain assumptions, e.g. independence or disjointness, on the subspaces. These assumptions are not guaranteed to hold in practice and they limit the application of existing sparse subspace clustering methods. In this paper, we propose ℓ0-induced sparse subspace clustering (ℓ0-SSC). In contrast to the required assumptions, such as independence or disjointness, on subspaces for most existing sparse subspace clustering methods, we prove that subspace-sparse representation, a key element in subspace clustering, can be obtained by ℓ0-SSC for arbitrary distinct underlying subspaces almost surely under the mild i.i.d. assumption on the data generation. We also present the “no free lunch” theorem that obtaining the subspace representation under our general assumptions can not be much computationally cheaper than solving the corresponding ℓ0 problem of ℓ0-SSC. We develop a novel approximate algorithm named Approximate ℓ0 -SSC (Aℓ0-SSC) that employs proximal gradient descent to obtain a sub-optimal solution to the optimization problem of ℓ0 -SSC with theoretical guarantee, and the sub-optimal solution is used to build a sparse similarity matrix for clustering. Extensive experimental results on various data sets demonstrate the superiority of Aℓ0-SSC compared to other competing clustering methods`,
    bgImage: "",
  },
  {
    id: 2,
    date: "February 25, 2016",
    title:
      "Cross-modality consistent regression for joint visual-textual sentiment analysis of social multimedia",
    description: `<p><b>Abstract: </b>Sentiment analysis of online user generated content is important for many social media analytics tasks. Researchers have largely relied on textual sentiment analysis to develop systems to predict political elections, measure economic indicators, and so on. Recently, social media users are increasingly using additional images and videos to express their opinions and share their experiences. Sentiment analysis of such large-scale textual and visual content can help better extract user sentiments toward events or topics. Motivated by the needs to leverage large-scale social multimedia content for sentiment analysis, we propose a cross-modality consistent regression (CCR) model, which is able to utilize both the state-of-the-art visual and textual sentiment analysis techniques. We first fine-tune a convolutional neural network (CNN) for image sentiment analysis and train a paragraph vector model for textual sentiment analysis. On top of them, we train our multi-modality regression model. We use sentimental queries to obtain half a million training samples from Getty Images. We have conducted extensive experiments on both machine weakly labeled and manually labeled image tweets. The results show that the proposed model can achieve better performance than the state-of-the art textual and visual sentiment analysis algorithms alone.</p>`,
    authors: "Quanzeng You, Jiebo Luo, Hailin Jin, Jianchao Yang",
    eventID: 2,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/tkDiTZmn08rmPZFkMJTUu/32ec515009d01b109b8ca619e57d8d43/Cross-modality_Consistent_Regression_for_Joint_Visual-Textual_Sentiment_Analysis_of_Social_Multimedia.pdf",
    metaDescription: `Sentiment analysis of online user generated content is important for many social media analytics tasks. Researchers have largely relied on textual sentiment analysis to develop systems to predict political elections, measure economic indicators, and so on. Recently, social media users are increasingly using additional images and videos to express their opinions and share their experiences. Sentiment analysis of such large-scale textual and visual content can help better extract user sentiments toward events or topics. Motivated by the needs to leverage large-scale social multimedia content for sentiment analysis, we propose a cross-modality consistent regression (CCR) model, which is able to utilize both the state-of-the-art visual and textual sentiment analysis techniques. We first fine-tune a convolutional neural network (CNN) for image sentiment analysis and train a paragraph vector model for textual sentiment analysis. On top of them, we train our multi-modality regression model. We use sentimental queries to obtain half a million training samples from Getty Images. We have conducted extensive experiments on both machine weakly labeled and manually labeled image tweets. The results show that the proposed model can achieve better performance than the state-of-the art textual and visual sentiment analysis algorithms alone.`,
    bgImage: "",
  },
  {
    id: 3,
    date: "May 09, 2016",
    title:
      "Building a large scale dataset for image emotion recognition: the fine print and the benchmark",
    description: `<p><b>Abstract: </b></p><p>Psychological research results have confirmed that people can have different emotional reactions to different visual stimuli. Several papers have been published on the problem of visual emotion analysis. In particular, attempts have been made to analyze and predict people’s emotional reaction towards images. To this end, different kinds of hand-tuned features are proposed. The results reported on several carefully selected and labeled small image data sets have confirmed the promise of such features. While the recent successes of many computer vision related tasks are due to the adoption of Convolutional Neural Networks (CNNs), visual emotion analysis has not achieved the same level of success. This may be primarily due to the unavailability of confidently labeled and relatively large image data sets for visual emotion analysis. In this work, we introduce a new data set, which started from 3+ million weakly labeled images of different emotions and ended up 30 times as large as the current largest publicly available visual emotion data set. We hope that this data set encourages further research on visual emotion analysis. We also perform extensive benchmarking analyses on this large data set using the state of the art methods including CNNs.</p>`,
    authors: "Quanzeng You and Jiebo Luo, Hailin Jin, Jianchao Yang",
    eventID: 3,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6WA4ni9kd2aBfgHkAFpmst/a58ae6385cfad8dfd0b104e8cdc22192/1605.02677.pdf",
    metaDescription: `Psychological research results have confirmed that people can have different emotional reactions to different visual stimuli. Several papers have been published on the problem of visual emotion analysis. In particular, attempts have been made to analyze and predict people’s emotional reaction towards images. To this end, different kinds of hand-tuned features are proposed. The results reported on several carefully selected and labeled small image data sets have confirmed the promise of such features. While the recent successes of many computer vision related tasks are due to the adoption of Convolutional Neural Networks (CNNs), visual emotion analysis has not achieved the same level of success. This may be primarily due to the unavailability of confidently labeled and relatively large image data sets for visual emotion analysis. In this work, we introduce a new data set, which started from 3+ million weakly labeled images of different emotions and ended up 30 times as large as the current largest publicly available visual emotion data set. We hope that this data set encourages further research on visual emotion analysis. We also perform extensive benchmarking analyses on this large data set using the state of the art methods including CNNs.`,
    bgImage: "",
  },
  {
    id: 4,
    date: "July 18, 2016",
    title:
      "Deep edge guided recurrent residual learning for image super-resolution",
    description: `<p><b>Abstract:</b> In this work, we consider the image super-resolution (SR) problem. The main challenge of image SR is to recover high-frequency details of a low-resolution (LR) image that are important for human perception. To address this essentially ill-posed problem, we introduce a Deep Edge Guided REcurrent rEsidual (DEGREE) network to progressively recover the high-frequency details. Different from most of existing methods that aim at predicting high-resolution (HR) images directly, DEGREE investigates an alternative route to recover the difference between a pair of LR and HR images by recurrent residual learning. DEGREE further augments the SR process with edge-preserving capability, namely the LR image and its edge map can jointly infer the sharp edge details of the HR image during the recurrent recovery process. To speed up its training convergence rate, by-pass connections across multiple layers of DEGREE are constructed. In addition, we offer an understanding on DEGREE from the view-point of sub-band frequency decomposition on image signal and experimentally demonstrate how DEGREE can recover different frequency bands separately. Extensive experiments on three benchmark datasets clearly demonstrate the superiority of DEGREE over well-established baselines and DEGREE also provides new state-of-the-arts on these datasets.</p>`,
    authors:
      "Wenhan Yang, Jiashi Feng, Jianchao Yang, Fang Zhao, Jiaying Liu, Zongming Guo, Shuicheng Yan",
    eventID: 4,
    researchArea: "CoDeep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6UwtxaTlwopnnoMlObPHW7/d6e84299505ede3036c7c282ac48e205/1604.08671.pdf",
    metaDescription: `In this work, we consider the image super-resolution (SR) problem. The main challenge of image SR is to recover high-frequency details of a low-resolution (LR) image that are important for human perception. To address this essentially ill-posed problem, we introduce a Deep Edge Guided REcurrent rEsidual (DEGREE) network to progressively recover the high-frequency details. Different from most of existing methods that aim at predicting high-resolution (HR) images directly, DEGREE investigates an alternative route to recover the difference between a pair of LR and HR images by recurrent residual learning. DEGREE further augments the SR process with edge-preserving capability, namely the LR image and its edge map can jointly infer the sharp edge details of the HR image during the recurrent recovery process. To speed up its training convergence rate, by-pass connections across multiple layers of DEGREE are constructed. In addition, we offer an understanding on DEGREE from the view-point of sub-band frequency decomposition on image signal and experimentally demonstrate how DEGREE can recover different frequency bands separately. Extensive experiments on three benchmark datasets clearly demonstrate the superiority of DEGREE over well-established baselines and DEGREE also provides new state-of-the-arts on these datasets.`,
    bgImage: "",
  },
  {
    id: 5,
    date: "August 23, 2016",
    title: "A Recurrent Encoder-Decoder Network for Sequential Face Alignment",
    description: `<p>We propose a novel recurrent encoder-decoder network model for real-time video-based face alignment. Our proposed model predicts 2D facial point maps regularized by a regression loss, while uniquely exploiting recurrent learning at both spatial and temporal dimensions. At the spatial level, we add a feedback loop connection between the combined output response map and the input, in order to enable iterative coarse-to-fine face alignment using a single network model. At the temporal level, we first decouple the features in the bottleneck of the network into temporalvariant factors, such as pose and expression, and temporalinvariant factors, such as identity information. Temporal recurrent learning is then applied to the decoupled temporalvariant features, yielding better generalization and significantly more accurate results at test time. We perform a comprehensive experimental analysis, showing the importance of each component of our proposed model, as well as superior results over the state-of-the-art in standard datasets.</p>`,
    authors: "Xi Peng, Rogerio Feris, Xiaoyu Wang, Dimitris Metaxas",
    eventID: 1,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3JlSlyXMHIFvYcgtx7ZwB0/ee9bd42c1b5f4d4a57dab79f91dff9d3/ECCV16.pdf",
    metaDescription: `We propose a novel recurrent encoder-decoder network model for real-time video-based face alignment. Our proposed model predicts 2D facial point maps regularized by a regression loss, while uniquely exploiting recurrent learning at both spatial and temporal dimensions. At the spatial level, we add a feedback loop connection between the combined output response map and the input, in order to enable iterative coarse-to-fine face alignment using a single network model. At the temporal level, we first decouple the features in the bottleneck of the network into temporalvariant factors, such as pose and expression, and temporalinvariant factors, such as identity information. Temporal recurrent learning is then applied to the decoupled temporalvariant features, yielding better generalization and significantly more accurate results at test time. We perform a comprehensive experimental analysis, showing the importance of each component of our proposed model, as well as superior results over the state-of-the-art in standard datasets.`,
    bgImage: "",
  },
  {
    id: 6,
    date: "October 01, 2016",
    title: "Deep Networks for Image Super-Resolution with Sparse Prior",
    description: `<p>Deep learning techniques have been successfully applied in many areas of computer vision, including low-level image restoration problems. For image super-resolution, several models based on deep neural networks have been recently proposed and attained superior performance that overshadows all previous handcrafted models. The question then arises whether large-capacity and data-driven models have become the dominant solution to the ill-posed super resolution problem. In this paper, we argue that domain expertise represented by the conventional sparse coding model is still valuable, and it can be combined with the key ingredients of deep learning to achieve further improved results. We show that a sparse coding model particularly designed for super-resolution can be incarnated as a neural network, and trained in a cascaded structure from end to end. The interpretation of the network based on sparse coding leads to much more efficient and effective training, as well as a reduced model size. Our model is evaluated on a wide range of images, and shows clear advantage over existing state-of-the-art methods in terms of both restoration accuracy and human subjective quality.</p>`,
    authors: "Zhaowen Wang, Ding Lu, Jianchao Yang, Wei Han, Thomas Huang",
    eventID: 6,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/uUttPbOk96b5a769kLzFG/8d75c1d7749cbe547b27b434ac8fa636/Wang_Deep_Networks_for_ICCV_2015_paper.pdf",
    metaDescription: `Deep learning techniques have been successfully applied in many areas of computer vision, including low-level image restoration problems. For image super-resolution, several models based on deep neural networks have been recently proposed and attained superior performance that overshadows all previous handcrafted models. The question then arises whether large-capacity and data-driven models have become the dominant solution to the ill-posed super resolution problem. In this paper, we argue that domain expertise represented by the conventional sparse coding model is still valuable, and it can be combined with the key ingredients of deep learning to achieve further improved results. We show that a sparse coding model particularly designed for super-resolution can be incarnated as a neural network, and trained in a cascaded structure from end to end. The interpretation of the network based on sparse coding leads to much more efficient and effective training, as well as a reduced model size. Our model is evaluated on a wide range of images, and shows clear advantage over existing state-of-the-art methods in terms of both restoration accuracy and human subjective quality.`,
    bgImage: "",
  },
  {
    id: 7,
    date: "November 17, 2016",
    title: "AutoScaler: Scale-Attention Networks for Visual Correspondence",
    description: `<p><b>Abstract</b>: Finding visual correspondence between local features is key to many computer vision problems. While defining features with larger contextual scales usually implies greater discriminativeness, it could also lead to less spatial accuracy of the features. We propose AutoScaler, a scale-attention network to explicitly optimize this trade-off in visual correspondence tasks. Our network consists of a weight-sharing feature network to compute multi-scale feature maps and an attention network to combine them optimally in the scale space. This allows our network to have adaptive receptive field sizes over different scales of the input. The entire network is trained end-to-end in a siamese framework for visual correspondence tasks. Our method achieves favorable results compared to state-of-the-art methods on challenging optical flow and semantic matching benchmarks, including Sintel, KITTI and CUB2011. We also show that our method can generalize to improve hand-crafted descriptors (e.g Daisy) on general visual correspondence tasks. Finally, our attention network can generate visually interpretable scale attention maps.</p>`,
    authors: "Shenlong Wang, Linjie Luo, Ning Zhang, Jia Li",
    eventID: 7,
    researchArea: "Computer Vision, Computer Graphics",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/17QoFss6QsgPILBQV69tEI/0d4f114dafc0f5e9731ad186e477cacd/1611.05837.pdf",
    metaDescription: `Finding visual correspondence between local features is key to many computer vision problems. While defining features with larger contextual scales usually implies greater discriminativeness, it could also lead to less spatial accuracy of the features. We propose AutoScaler, a scale-attention network to explicitly optimize this trade-off in visual correspondence tasks. Our network consists of a weight-sharing feature network to compute multi-scale feature maps and an attention network to combine them optimally in the scale space. This allows our network to have adaptive receptive field sizes over different scales of the input. The entire network is trained end-to-end in a siamese framework for visual correspondence tasks. Our method achieves favorable results compared to state-of-the-art methods on challenging optical flow and semantic matching benchmarks, including Sintel, KITTI and CUB2011. We also show that our method can generalize to improve hand-crafted descriptors (e.g Daisy) on general visual correspondence tasks. Finally, our attention network can generate visually interpretable scale attention maps.`,
    bgImage: "",
  },
  {
    id: 8,
    date: "March 07, 2017",
    title: "Learning from noisy labels with distillation",
    description: `<p><b>Abstract: </b>The ability of learning from noisy labels is very useful in many visual recognition tasks, as a vast amount of data with noisy labels are relatively easy to obtain. Traditionally, the label noises have been treated as statistical outliers, and approaches such as importance re-weighting and bootstrap have been proposed to alleviate the problem. According to our observation, the real-world noisy labels exhibit multi-mode characteristics as the true labels, rather than behaving like independent random outliers. In this work, we propose a unified distillation framework to use side information, including a small clean dataset and label relations in knowledge graph, to "hedge the risk" of learning from noisy labels. Furthermore, unlike the traditional approaches evaluated based on simulated label noises, we propose a suite of new benchmark datasets, in Sports, Species and Artifacts domains, to evaluate the task of learning from noisy labels in the practical setting. The empirical study demonstrates the effectiveness of our proposed method in all the domains.</p>`,
    authors:
      "Yuncheng Li, Jianchao Yang, Yale Song, Liangliang Cao, Jiebo Luo, Jia Li",
    eventID: 8,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/2A1ODqDA7z54d3zOSBDIw0/930c86f9dbb56508d73fc306b2527fa2/1703.02391.pdf",
    metaDescription: `The ability of learning from noisy labels is very useful in many visual recognition tasks, as a vast amount of data with noisy labels are relatively easy to obtain. Traditionally, the label noises have been treated as statistical outliers, and approaches such as importance re-weighting and bootstrap have been proposed to alleviate the problem. According to our observation, the real-world noisy labels exhibit multi-mode characteristics as the true labels, rather than behaving like independent random outliers. In this work, we propose a unified distillation framework to use side information, including a small clean dataset and label relations in knowledge graph, to "hedge the risk" of learning from noisy labels. Furthermore, unlike the traditional approaches evaluated based on simulated label noises, we propose a suite of new benchmark datasets, in Sports, Species and Artifacts domains, to evaluate the task of learning from noisy labels in the practical setting. The empirical study demonstrates the effectiveness of our proposed method in all the domains.`,
    bgImage: "",
  },
  {
    id: 9,
    date: "April 12, 2017",
    title:
      "Deep Reinforcement Learning-based Image Captioning with Embedding Reward",
    description: `<p><b>Abstract: </b>Image captioning is a challenging problem owing to the complexity in understanding the image content and diverse ways of describing it in natural language. Recent advances in deep neural networks have substantially improved the performance of this task. Most state-of-the-art approaches follow an encoder-decoder framework, which generates captions using a sequential recurrent prediction model. However, in this paper, we introduce a novel decision-making framework for image captioning. We utilize a “policy network” and a “value network” to collaboratively generate captions. The policy network serves as a local guidance by providing the confidence of predicting the next word according to the current state. Additionally, the value network serves as a global and lookahead guidance by evaluating all possible extensions of the current state. In essence, it adjusts the goal of predicting the correct words towards the goal of generating captions similar to the ground truth captions. We train both networks using an actor-critic reinforcement learning model, with a novel reward defined by visual-semantic embedding. Extensive experiments and analyses on the Microsoft COCO dataset show that the proposed framework outperforms state-ofthe art approaches across different evaluation metrics.</p>`,
    authors: "Zhou Ren, Xiaoyu Wang, Ning Zhang, Xutao Lv, Jia Li",
    eventID: 9,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/1n7nYPrqsTuoayWdCdRJb2/b4e224b9df519f4f85faa81e0b8720f0/1704.03899.pdf",
    metadescription: `Image captioning is a challenging problem owing to the complexity in understanding the image content and diverse ways of describing it in natural language. Recent advances in deep neural networks have substantially improved the performance of this task. Most state-of-the-art approaches follow an encoder-decoder framework, which generates captions using a sequential recurrent prediction model. However, in this paper, we introduce a novel decision-making framework for image captioning. We utilize a “policy network” and a “value network” to collaboratively generate captions. The policy network serves as a local guidance by providing the confidence of predicting the next word according to the current state. Additionally, the value network serves as a global and lookahead guidance by evaluating all possible extensions of the current state. In essence, it adjusts the goal of predicting the correct words towards the goal of generating captions similar to the ground truth captions. We train both networks using an actor-critic reinforcement learning model, with a novel reward defined by visual-semantic embedding. Extensive experiments and analyses on the Microsoft COCO dataset show that the proposed framework outperforms state-ofthe art approaches across different evaluation metrics.`,
    bgImage: "",
  },
  {
    id: 10,
    date: "April 13, 2017",
    title: "Support Regularized Sparse Coding and Its Fast Encoder",
    description: `<p><b>Abstract: </b>Sparse coding represents a signal by a linear combination of only a few atoms of a learned over-complete dictionary. While sparse coding exhibits compelling performance for various machine learning tasks, the process of obtaining sparse code with fixed dictionary is independent for each data point without considering the geometric information and manifold structure of the entire data. We propose Support Regularized Sparse Coding (SRSC) which produces sparse codes that account for the manifold structure of the data by encouraging nearby data in the manifold to choose similar dictionary atoms. In this way, the obtained support regularized sparse codes capture the locally linear structure of the data manifold and enjoy robustness to data noise. We present the optimization algorithm of SRSC with theoretical guarantee for the optimization over the sparse codes. We also propose a feed-forward neural network termed Deep Support Regularized Sparse Coding (Deep-SRSC) as a fast encoder to approximate the sparse codes generated by SRSC. Extensive experimental results demonstrate the effectiveness of SRSC and Deep-SRSC.</p>`,
    authors:
      "Yingzhen Yang, Jiahui Yu, Pushmeet Kohli, Jianchao Yang, Thomas S. Huang",
    eventID: 10,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/2PRq2iqW3cXS8WV3C86OBm/4afa0ce4ade6fb46987620288f20e746/pdf",
    metadescription: `Sparse coding represents a signal by a linear combination of only a few atoms of a learned over-complete dictionary. While sparse coding exhibits compelling performance for various machine learning tasks, the process of obtaining sparse code with fixed dictionary is independent for each data point without considering the geometric information and manifold structure of the entire data. We propose Support Regularized Sparse Coding (SRSC) which produces sparse codes that account for the manifold structure of the data by encouraging nearby data in the manifold to choose similar dictionary atoms. In this way, the obtained support regularized sparse codes capture the locally linear structure of the data manifold and enjoy robustness to data noise. We present the optimization algorithm of SRSC with theoretical guarantee for the optimization over the sparse codes. We also propose a feed-forward neural network termed Deep Support Regularized Sparse Coding (Deep-SRSC) as a fast encoder to approximate the sparse codes generated by SRSC. Extensive experimental results demonstrate the effectiveness of SRSC and Deep-SRSC.`,
    bgImage: "",
  },
  {
    id: 11,
    date: "April 19, 2017",
    title: "Exploring Personalized Neural Conversational Models",
    description: `<p><b>Abstract: </b>Modeling dialog systems is currently one of the most active problems in Natural Language Processing. Recent advances in Deep Learning have sparked an interest in the use of neural networks in modeling language, particularly for personalized conversational agents that can retain contextual information during dialog exchanges. This work carefully explores and compares several of the recently proposed neural conversation models, and carries out a detailed evaluation on the multiple factors that can significantly affect predictive performance, such as pretraining, embedding training, data cleaning, diversity-based reranking, evaluation setting, etc. Based on the tradeoffs of different models, we propose a new neural generative dialog model conditioned on speakers as well as context history that outperforms previous models on both retrieval and generative metrics. Our findings indicate that pretraining speaker embeddings on larger datasets, as well as bootstrapping word and speaker embeddings, can significantly improve performance (up to 3 points in perplexity), and that promoting diversity in using Mutual Information based techniques has a very strong effect in ranking metrics.</p>`,
    authors: "Satwik Kottur, Xiaoyu Wang, Vitor Carvalho",
    eventID: 11,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5pU2OrscrgE9YzYhSmetyC/361fca637bde81e27ee737086a538ce7/0521.pdf",
    metadescription: `Modeling dialog systems is currently one of the most active problems in Natural Language Processing. Recent advances in Deep Learning have sparked an interest in the use of neural networks in modeling language, particularly for personalized conversational agents that can retain contextual information during dialog exchanges. This work carefully explores and compares several of the recently proposed neural conversation models, and carries out a detailed evaluation on the multiple factors that can significantly affect predictive performance, such as pretraining, embedding training, data cleaning, diversity-based reranking, evaluation setting, etc. Based on the tradeoffs of different models, we propose a new neural generative dialog model conditioned on speakers as well as context history that outperforms previous models on both retrieval and generative metrics. Our findings indicate that pretraining speaker embeddings on larger datasets, as well as bootstrapping word and speaker embeddings, can significantly improve performance (up to 3 points in perplexity), and that promoting diversity in using Mutual Information based techniques has a very strong effect in ranking metrics.`,
    bgImage: "",
  },
  {
    id: 12,
    date: "August 07, 2017",
    title: "Dense Captioning with Joint Inference and Visual Context",
    description: `<p><b>Abstract:</b> Dense captioning is a newly emerging computer vision topic for understanding images with dense language descriptions. The goal is to densely detect visual concepts (e.g., objects, object parts, and interactions between them) from images, labeling each with a short descriptive phrase. We identify two key challenges of dense captioning that need to be properly addressed when tackling the problem. First, dense visual concept annotations in each image are associated with highly overlapping target regions, making accurate localization of each visual concept challenging. Second, the large amount of visual concepts makes it hard to recognize each of them by appearance alone. We propose a new model pipeline based on two novel ideas, joint inference and context fusion, to alleviate these two challenges. We design our model architecture in a methodical manner and thoroughly evaluate the variations in architecture. Our final model, compact and efficient, achieves stateof-the-art accuracy on Visual Genome [23] for dense captioning with a relative gain of 73% compared to the previous best algorithm. Qualitative experiments also reveal the semantic capabilities of our model in dense captioning. Our code is released at https://github.com/linjieyangsc/densecap.</p>`,
    authors: "Linjie Yang, Kevin Tang, Jianchao Yang, Jia Li",
    eventID: 9,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/7gshHuh5hdciewRMtyyOxk/d560a01fb01759e877083a3413aefc3d/1611.06949.pdf",
    metadescription: `Dense captioning is a newly emerging computer vision topic for understanding images with dense language descriptions. The goal is to densely detect visual concepts (e.g., objects, object parts, and interactions between them) from images, labeling each with a short descriptive phrase. We identify two key challenges of dense captioning that need to be properly addressed when tackling the problem. First, dense visual concept annotations in each image are associated with highly overlapping target regions, making accurate localization of each visual concept challenging. Second, the large amount of visual concepts makes it hard to recognize each of them by appearance alone. We propose a new model pipeline based on two novel ideas, joint inference and context fusion, to alleviate these two challenges. We design our model architecture in a methodical manner and thoroughly evaluate the variations in architecture. Our final model, compact and efficient, achieves stateof-the-art accuracy on Visual Genome [23] for dense captioning with a relative gain of 73% compared to the previous best algorithm. Qualitative experiments also reveal the semantic capabilities of our model in dense captioning. Our code is released at https://github.com/linjieyangsc/densecap.`,
    bgImage: "",
  },
  {
    id: 13,
    date: "August 12, 2017",
    title: "Neighborhood regularized L1-graph",
    description: `<p><b>Abstract:</b>
    L1-Graph, which learns a sparse graph over the data by sparse representation, has been demonstrated to be effective in clustering especially for high dimensional data. Although it achieves compelling performance, the sparse graph generated by L1-Graph ignores the geometric information of the data by sparse representation for each datum separately. To obtain a sparse graph that is aligned to the underlying manifold structure of the data, we propose the novel Neighborhood Regularized L1-Graph (NRL1-Graph). NRL1-Graph learns sparse graph with locally consistent neighborhood by encouraging nearby data to have similar neighbors in the constructed sparse graph. We present the optimization algorithm of NRL1-Graph with theoretical guarantee on the convergence and the gap between the suboptimal solution and the globally optimal solution in each step of the coordinate descent, which is essential for the overall optimization of NRL1-Graph. Its provable accelerated version, NRL1 -Graph by Random Projection (NRL1-Graph-RP) that employs randomized data matrix decomposition, is also presented to improve the efficiency of the optimization of NRL1-Graph. Experimental results on various real data sets demonstrate the effectiveness of both NRL1-Graph and NRL1-Graph-RP.</p>`,
    authors:
      "Yingzhen Yang, Jiashi Feng, Jiahui Yu, Jianchao Yang, Pushmeet Kohli, Thomas S. Huang",
    eventID: 13,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/61kzxlUbmEXr7HQP2GABdb/0735af652127cbe1c4d8df3873bb2627/244.pdf",
    metadescription: `L1-Graph, which learns a sparse graph over the data by sparse representation, has been demonstrated to be effective in clustering especially for high dimensional data. Although it achieves compelling performance, the sparse graph generated by L1-Graph ignores the geometric information of the data by sparse representation for each datum separately. To obtain a sparse graph that is aligned to the underlying manifold structure of the data, we propose the novel Neighborhood Regularized L1-Graph (NRL1-Graph). NRL1-Graph learns sparse graph with locally consistent neighborhood by encouraging nearby data to have similar neighbors in the constructed sparse graph. We present the optimization algorithm of NRL1-Graph with theoretical guarantee on the convergence and the gap between the suboptimal solution and the globally optimal solution in each step of the coordinate descent, which is essential for the overall optimization of NRL1-Graph. Its provable accelerated version, NRL1 -Graph by Random Projection (NRL1-Graph-RP) that employs randomized data matrix decomposition, is also presented to improve the efficiency of the optimization of NRL1-Graph. Experimental results on various real data sets demonstrate the effectiveness of both NRL1-Graph and NRL1-Graph-RP.`,
    bgImage: "",
  },
  {
    id: 14,
    date: "August 20, 2017",
    title:
      "Attention based CLDNNs for short-duration acoustic scene classification",
    description: `<p>Recently, neural networks with deep architecture have been widely applied to acoustic scene classification. Both Convolutional Neural Networks (CNNs) and Long Short-Term Memory Networks (LSTMs) have shown improvements over fully connected Deep Neural Networks (DNNs). Motivated by the fact that CNNs, LSTMs and DNNs are complimentary in their modeling capability, we apply the CLDNNs (Convolutional, Long Short-Term Memory, Deep Neural Networks) framework to short-duration acoustic scene classification in a unified architecture. The CLDNNs take advantage of frequency modeling with CNNs, temporal modeling with LSTM, and discriminative training with DNNs. Based on the CLDNN architecture, several novel attention-based mechanisms are proposed and applied on the LSTM layer to predict the importance of each time step. We evaluate the proposed method on the truncated version of the 2016 TUT acoustic scenes dataset which consists of recordings from 15 different scenes. By using CLDNNs with bidirectional LSTM, we achieve higher performance compared to the conventional neural network architectures. Moreover, by combining the attention-weighted output with LSTM final time step output, significant improvement can be further achieved.</p>`,
    authors: "Jinxi Buo, Ning Xu, Jia Li, Abeer Alwan",
    eventID: 14,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/45Cb9LqqbBMb8qe0EiLFji/a36e8966b08c79a252b8084f6900c68d/Jinxi-IS17-audio-scene.pdf",
    metadescription: `Recently, neural networks with deep architecture have been widely applied to acoustic scene classification. Both Convolutional Neural Networks (CNNs) and Long Short-Term Memory Networks (LSTMs) have shown improvements over fully connected Deep Neural Networks (DNNs). Motivated by the fact that CNNs, LSTMs and DNNs are complimentary in their modeling capability, we apply the CLDNNs (Convolutional, Long Short-Term Memory, Deep Neural Networks) framework to short-duration acoustic scene classification in a unified architecture. The CLDNNs take advantage of frequency modeling with CNNs, temporal modeling with LSTM, and discriminative training with DNNs. Based on the CLDNN architecture, several novel attention-based mechanisms are proposed and applied on the LSTM layer to predict the importance of each time step. We evaluate the proposed method on the truncated version of the 2016 TUT acoustic scenes dataset which consists of recordings from 15 different scenes. By using CLDNNs with bidirectional LSTM, we achieve higher performance compared to the conventional neural network architectures. Moreover, by combining the attention-weighted output with LSTM final time step output, significant improvement can be further achieved.`,
    bgImage: "",
  },
  {
    id: 15,
    date: "September 04, 2017",
    title: "Multiple Instance Visual-Semantic Embedding",
    description: `<p><b>Abstract: </b>Visual-semantic embedding models have been recently proposed and shown to be effective for image classification and zero-shot learning. The key idea is that by directly learning a mapping from images into a semantic label space, the algorithm can generalize to a large number of unseen labels. However, existing approaches are limited to single-label embedding, handling images with multiple labels still remains an open problem, mainly due to the complex underlying correspondence between an image and its labels. In this work, we present a novel Multiple Instance Visual-Semantic Embedding (MIVSE) model for multi-label images. Instead of embedding a whole image into the semantic space, our model characterizes the subregion-to-label correspondence, which discovers and maps semantically meaningful image subregions to the corresponding labels. Experiments on two challenging tasks, multi-label image annotation and zero-shot learning, show that the proposed MIVSE model outperforms state-of-the-art methods on both tasks and possesses the ability of generalizing to unseen labels.</p>`,
    authors: "Zhou Ren, Hailin Jin, Zhe Lin, Chen Fang, Alan Yuille",
    eventID: 7,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3Rn4cNWMuzkZyxie5UUyrZ/2c424ccd65277258717360edf0232a6c/Zhou_bmvc17_paper.pdf",
    metadescription: `Visual-semantic embedding models have been recently proposed and shown to be effective for image classification and zero-shot learning. The key idea is that by directly learning a mapping from images into a semantic label space, the algorithm can generalize to a large number of unseen labels. However, existing approaches are limited to single-label embedding, handling images with multiple labels still remains an open problem, mainly due to the complex underlying correspondence between an image and its labels. In this work, we present a novel Multiple Instance Visual-Semantic Embedding (MIVSE) model for multi-label images. Instead of embedding a whole image into the semantic space, our model characterizes the subregion-to-label correspondence, which discovers and maps semantically meaningful image subregions to the corresponding labels. Experiments on two challenging tasks, multi-label image annotation and zero-shot learning, show that the proposed MIVSE model outperforms state-of-the-art methods on both tasks and possesses the ability of generalizing to unseen labels.`,
    bgImage: "",
  },
  {
    id: 16,
    date: "September 05, 2017",
    title:
      "On the Sub-Optimality of Proximal Gradient Descent for L0 Sparse Approximation",
    description: `<p><b>Abstract: </b></p><p>We study the proximal gradient descent (PGD) method for ℓ0 sparse approximation problem as well as its accelerated optimization with randomized algorithms in this paper. We first offer theoretical analysis of PGD showing the bounded gap between the sub-optimal solution by PGD and the globally optimal solution for the ℓ0 sparse approximation problem under conditions weaker than Restricted Isometry Property widely used in compressive sensing literature. Moreover, we propose randomized algorithms to accelerate the optimization by PGD using randomized low rank matrix approximation (PGD-RMA) and randomized dimension reduction (PGD-RDR). Our randomized algorithms substantially reduces the computation cost of the original PGD for the ℓ0 sparse approximation problem, and the resultant sub-optimal solution still enjoys provable suboptimality, namely, the sub-optimal solution to the reduced problem still has bounded gap to the globally optimal solution to the original problem.</p>`,
    authors: "Yingzhen Yang, Jianchao Yang, Wei Han, Thomas. S. Huang",
    eventID: 16,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/Ka0rDPWzW9ogzuqb1xAE3/1f34ab5b563c10dc57b70c937b1eb93b/1709.01230.pdf",
    metadescription: `We study the proximal gradient descent (PGD) method for ℓ0 sparse approximation problem as well as its accelerated optimization with randomized algorithms in this paper. We first offer theoretical analysis of PGD showing the bounded gap between the sub-optimal solution by PGD and the globally optimal solution for the ℓ0 sparse approximation problem under conditions weaker than Restricted Isometry Property widely used in compressive sensing literature. Moreover, we propose randomized algorithms to accelerate the optimization by PGD using randomized low rank matrix approximation (PGD-RMA) and randomized dimension reduction (PGD-RDR). Our randomized algorithms substantially reduces the computation cost of the original PGD for the ℓ0 sparse approximation problem, and the resultant sub-optimal solution still enjoys provable suboptimality, namely, the sub-optimal solution to the reduced problem still has bounded gap to the globally optimal solution to the original problem.`,
    bgImage: "",
  },
  {
    id: 17,
    date: "September 11, 2017",
    title: "Viewpoint-Consistent 3D Face Alignment",
    description: `<p><b>Abstract:</b> Most approaches to face alignment treat the face as a 2D object, which fails to represent depth variation and is vulnerable to loss of shape consistency when the face rotates along a 3D axis. Because faces commonly rotate three dimensionally, 2D approaches are vulnerable to significant error. 3D morphable models, employed as a second step in 2D+3D approaches are robust to face rotation but are computationally too expensive for many applications, yet their ability to maintain viewpoint consistency is unknown. We present an alternative approach that estimates 3D face landmarks in a single face image. The method uses a regression forest-based algorithm that
    adds a third dimension to the common cascade pipeline. 3D face landmarks are estimated directly, which avoids fitting a 3D morphable model.The proposed method achieves viewpoint consistency in a computationally efficient manner that is robust to 3D face rotation. To train and test our approach, we introduce the Multi-PIE Viewpoint Consistent database. In empirical tests, the proposed method achieved simple yet effective head pose estimation and viewpoint consistency on multiple measures relative to alternative approaches.</p>`,
    authors: "Sergey Tulyakov, László A. Jeni, Jeffrey F. Cohn, Nicu Sebe",
    eventID: 17,
    researchArea: "Computer Vision",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/2U4FFnfJmyPsEZIyHsp2aR/da29065b102e918f67f77711b4bb6606/Tulyakov17TPAMI_Multiview.pdf",
    metadescription: `Most approaches to face alignment treat the face as a 2D object, which fails to represent depth variation and is vulnerable to loss of shape consistency when the face rotates along a 3D axis. Because faces commonly rotate three dimensionally, 2D approaches are vulnerable to significant error. 3D morphable models, employed as a second step in 2D+3D approaches are robust to face rotation but are computationally too expensive for many applications, yet their ability to maintain viewpoint consistency is unknown. We present an alternative approach that estimates 3D face landmarks in a single face image. The method uses a regression forest-based algorithm that adds a third dimension to the common cascade pipeline. 3D face landmarks are estimated directly, which avoids fitting a 3D morphable model.The proposed method achieves viewpoint consistency in a computationally efficient manner that is robust to 3D face rotation. To train and test our approach, we introduce the Multi-PIE Viewpoint Consistent database. In empirical tests, the proposed method achieved simple yet effective head pose estimation and viewpoint consistency on multiple measures relative to alternative approaches.`,
    bgImage: "",
  },
  {
    id: 18,
    date: "November 01, 2017",
    title: "Tensor Field Design in Volumes",
    description: `<p><b>Abstract: </b>3D tensor field design is important in several graphics applications such as procedural noise, solid texturing, and geometry synthesis. Different fields can lead to different visual effects. The topology of a tensor field, such as degenerate tensors, can cause artifacts in these applications. Existing 2D tensor field design systems cannot be used to handle the topology of a 3D tensor field. In this paper, we present to our knowledge the first 3D tensor field design system. At the core of our system is the ability to edit the topology of tensor fields. We demonstrate the power of our design system with applications in solid texturing and geometry synthesis.</p>`,
    authors:
      "Jonathan Palacios, Lawrence Roy, Prashant Kumar, Chen-Yuan Hsu, Weikai Chen, Chongyang Ma, Li-Yi Wei, Eugene Zhang",
    eventID: 18,
    researchArea: "Computer Graphics",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/7rJDOnLj3qW3S9T6EMjVzT/fee3cd0983615ea0b69ad3373f5472f4/2017_tf_preprint.pdf",
    metadescription: `3D tensor field design is important in several graphics applications such as procedural noise, solid texturing, and geometry synthesis. Different fields can lead to different visual effects. The topology of a tensor field, such as degenerate tensors, can cause artifacts in these applications. Existing 2D tensor field design systems cannot be used to handle the topology of a 3D tensor field. In this paper, we present to our knowledge the first 3D tensor field design system. At the core of our system is the ability to edit the topology of tensor fields. We demonstrate the power of our design system with applications in solid texturing and geometry synthesis.`,
    bgImage: "",
  },
  {
    id: 19,
    date: "November 30, 2017",
    title:
      "Hybrid-VAE: Improving Deep Generative Models by Partial Observations",
    description: `<p><b>Abstract: </b>Deep neural network models trained on large labeled datasets are the state-of-theart in a large variety of computer vision tasks. In many applications, however, labeled data is expensive to obtain or requires a time consuming manual annotation process. In contrast, unlabeled data is often abundant and available in large quantities. We present a principled framework to capitalize on unlabeled data by training deep generative models on both labeled and unlabeled data. We show that such a combination is beneficial because the unlabeled data acts as a data-driven form of regularization, allowing generative models trained on few labeled samples to reach the performance of fully-supervised generative models trained on much larger datasets. We call our method Hybrid VAE (H-VAE) as it contains both the generative and the discriminative parts. We validate H-VAE on three large-scale datasets of different modalities: two face datasets: (MultiPIE, CelebA) and a hand pose dataset (NYU Hand Pose). Our qualitative visualizations further support improvements achieved by using partial observations.</p>`,
    authors: "Sergey Tulyakov, Andrew Fitzgibbon, Sebastian Nowozin",
    eventID: 19,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5RZIx7QcnFsJuNHCTU56GY/607f115e43acbeacc9662e39317e145c/1711.11566.pdf",
    metadescription: `Deep neural network models trained on large labeled datasets are the state-of-theart in a large variety of computer vision tasks. In many applications, however, labeled data is expensive to obtain or requires a time consuming manual annotation process. In contrast, unlabeled data is often abundant and available in large quantities. We present a principled framework to capitalize on unlabeled data by training deep generative models on both labeled and unlabeled data. We show that such a combination is beneficial because the unlabeled data acts as a data-driven form of regularization, allowing generative models trained on few labeled samples to reach the performance of fully-supervised generative models trained on much larger datasets. We call our method Hybrid VAE (H-VAE) as it contains both the generative and the discriminative parts. We validate H-VAE on three large-scale datasets of different modalities: two face datasets: (MultiPIE, CelebA) and a hand pose dataset (NYU Hand Pose). Our qualitative visualizations further support improvements achieved by using partial observations.`,
    bgImage: "",
  },
  {
    id: 20,
    date: "December 04, 2017",
    title:
      "A Graph Theory Approach To QP Problem Reformulation: An Example With SVM",
    description: `<p>Quadratic programming (QP) problem reformulations have been studied for decades
    [Sherali and Tuncbilek(1995), Nemirovski and Shapiro(2006), Anstreicher(2009)],
    [Zheng et al.(2012)Zheng, Sun, Li, and Cui, Wu and Jiang(2017)], but rarely linked to
    Graph Theory. Indeed, typical reformulations focus on convexifying a non-convex QP
    problem, making the objective function differentiable, optimizing on the continuous
    domain while ensuring the final solution is binary, or adding regularizers and Lagrangian
    coefficients to optimize the dual problem. In this paper, we take SVM as an example
    to demonstrate that QP problems can also be reformulated using the same mechanism
    as P/NP problem reduction, overcoming speed and memory footprint limitations from
    other types of reformulation. We show that SVM is comparable to a soft weighted edge
    independent set problem where the amount of support vectors per class is balanced, thus it can also be reformulated as a maximum weighted clique problem (MWC) with the same
    class balancing constraint. After adapting the sequential minimal optimization (SMO)
    algorithm [Platt(1998), Fan et al.(2005)Fan, Chen, and Lin] to our new MWC formulation,
    we demonstrate that such reformulation leads to improved performance (7∼36 time faster to train, and sparser solution for comparable accuracy).</p>`,
    authors: "William Brendel, Luis Marujo",
    eventID: 20,
    researchArea: "Data Mining",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3o0Zonc9K8N3i7iUB4ch43/9207663b99977a892807bf0ba2828da5/OPT2017_paper_11.pdf",
    metadescription: `Quadratic programming (QP) problem reformulations have been studied for decades [Sherali and Tuncbilek(1995), Nemirovski and Shapiro(2006), Anstreicher(2009)], [Zheng et al.(2012)Zheng, Sun, Li, and Cui, Wu and Jiang(2017)], but rarely linked to Graph Theory. Indeed, typical reformulations focus on convexifying a non-convex QP problem, making the objective function differentiable, optimizing on the continuous domain while ensuring the final solution is binary, or adding regularizers and Lagrangian coefficients to optimize the dual problem. In this paper, we take SVM as an example to demonstrate that QP problems can also be reformulated using the same mechanism as P/NP problem reduction, overcoming speed and memory footprint limitations from other types of reformulation. We show that SVM is comparable to a soft weighted edge independent set problem where the amount of support vectors per class is balanced, thus it can also be reformulated as a maximum weighted clique problem (MWC) with the same class balancing constraint. After adapting the sequential minimal optimization (SMO) algorithm [Platt(1998), Fan et al.(2005)Fan, Chen, and Lin] to our new MWC formulation, we demonstrate that such reformulation leads to improved performance (7∼36 time faster to train, and sparser solution for comparable accuracy).`,
    bgImage: "",
  },
  {
    id: 21,
    date: "December 14, 2017",
    title: "MoCoGAN: Decomposing Motion and Content for Video Generation",
    description: `<p><b>Abstract: </b>Visual signals in a video can be divided into content and motion. While content specifies which objects are in the video, motion describes their dynamics. Based on this prior, we propose the Motion and Content decomposed Generative Adversarial Network (MoCoGAN) framework for video generation. The proposed framework generates a video by mapping a sequence of random vectors to a sequence of video frames. Each random vector consists of a content part and a motion part. While the content part is kept fixed, the motion part is realized as a stochastic process. To learn motion and content decomposition in an unsupervised manner, we introduce a novel adversarial learning scheme utilizing both image and video discriminators. Extensive experimental results on several challenging datasets with qualitative and quantitative comparison to the state-of-theart approaches, verify effectiveness of the proposed framework. In addition, we show that MoCoGAN allows one to generate videos with same content but different motion as well as videos with different content and same motion.</p>`,
    authors: "Sergey Tulyakov, Ming-Yu Liu, Xiaodong Yang, Jan Kautz",
    eventID: 21,
    researchArea: "Deep Learning, Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3edmxlxrfhc5tvBSFFQgcV/0c7d7a07d091cfd731f485612fb082c7/1707.04993.pdf",
    metadescription: `Visual signals in a video can be divided into content and motion. While content specifies which objects are in the video, motion describes their dynamics. Based on this prior, we propose the Motion and Content decomposed Generative Adversarial Network (MoCoGAN) framework for video generation. The proposed framework generates a video by mapping a sequence of random vectors to a sequence of video frames. Each random vector consists of a content part and a motion part. While the content part is kept fixed, the motion part is realized as a stochastic process. To learn motion and content decomposition in an unsupervised manner, we introduce a novel adversarial learning scheme utilizing both image and video discriminators. Extensive experimental results on several challenging datasets with qualitative and quantitative comparison to the state-of-theart approaches, verify effectiveness of the proposed framework. In addition, we show that MoCoGAN allows one to generate videos with same content but different motion as well as videos with different content and same motion.`,
    bgImage: "",
  },
  {
    id: 22,
    date: "January 05, 2018",
    title: "Learning 3D-FilterMap for Deep Convolutional Neural Networks",
    description: `<p><b>Abstract</b>: We present a novel and compact architecture for deep Convolutional Neural Networks (CNNs) in this paper, termed 3D-FilterMap Convolutional Neural Networks
    (3D-FM-CNNs). The convolution layer of 3D-FM-CNN learns a compact representation of the filters, named 3D-FilterMap, instead of a set of independent filters in the conventional convolution layer. The filters are extracted from the 3DFilterMap as overlapping 3D submatrics with weight sharing among nearby filters, and these filters are convolved with the input to generate the output of the convolution layer for 3D-FM-CNN. Due to the weight sharing scheme, the parameter size of the 3D-FilterMap is much smaller than that of the filters to be learned in . the conventional convolution layer when 3D-FilterMap generates the same number of filters. Our work is fundamentally different from the network compression  literature that reduces the size of a learned large network in the sense that a small network is directly learned from scratch. Experimental results demonstrate that 3D-FM-CNN enjoys a small parameter space by learning compact 3D-FilterMaps, while achieving performance compared to that of the baseline CNNs which learn the same number of filters as that generated by the corresponding 3D-FilterMap.</p>`,
    authors: "Yingzhen Yang, Jianchao Yang, Ning Xu, Wei Han",
    eventID: 22,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/2uIKfAIBMNzwRpFaxj0byZ/59aa7ea07ee94ec63b14c39cdf3ad1dd/1801.01609.pdf",
    metadescription: `We present a novel and compact architecture for deep Convolutional Neural Networks (CNNs) in this paper, termed 3D-FilterMap Convolutional Neural Networks (3D-FM-CNNs). The convolution layer of 3D-FM-CNN learns a compact representation of the filters, named 3D-FilterMap, instead of a set of independent filters in the conventional convolution layer. The filters are extracted from the 3DFilterMap as overlapping 3D submatrics with weight sharing among nearby filters, and these filters are convolved with the input to generate the output of the convolution layer for 3D-FM-CNN. Due to the weight sharing scheme, the parameter size of the 3D-FilterMap is much smaller than that of the filters to be learned in . the conventional convolution layer when 3D-FilterMap generates the same number of filters. Our work is fundamentally different from the network compression literature that reduces the size of a learned large network in the sense that a small network is directly learned from scratch. Experimental results demonstrate that 3D-FM-CNN enjoys a small parameter space by learning compact 3D-FilterMaps, while achieving performance compared to that of the baseline CNNs which learn the same number of filters as that generated by the corresponding 3D-FilterMap.`,
    bgImage: "",
  },
  {
    id: 23,
    date: "January 28, 2018",
    title: "Joint Audio-Video Driven Facial Animation",
    description: `<p><b>Abstract: </b>Automatic facial animation is a research topic of broad and current interest with widespread impact on various applications. In this paper, we present a novel joint audio-video driven facial animation system. Unlike traditional methods, we incorporate a large vocabulary continuous speech recognition (LVCSR) system to obtain phoneme
    alignments. The use of LVCSR reduces the high error rate associated with the traditional phoneme recognizer. We also introduce a knowledge guided 3D blendshapes modeling for each phoneme to avoid collecting training data and introducing bias from computer vision generated targets. To further improve the quality, we adopt video tracking and jointly optimize the facial animation by combin-
    ing both sources. In the evaluations, we present both objective study and several subjective studies on three settings: audio-driven, video-driven, and joint audio-video driven. We find that the quality of our proposed system’s facial animation generation surpasses that of the recent state-of-the-art systems.</p><p><i><b>Index Terms:</b></i><i> large vocabulary continuous speech recognition (LVCSR), phoneme alignment, lip sync, facial animation.</i></p>`,
    authors: "Xin Chen, Chen Cao, Zehao Xue, Wei Chu",
    eventID: 23,
    researchArea: "Computer Graphics, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4R1Cs2MnTBWOYqZKXj5hQq/65e3340ba27fc8b80d3b39dba3315b1f/Joint_Audio-Video_Driven_Facial_Animation.pdf",
    metadescription: `Automatic facial animation is a research topic of broad and current interest with widespread impact on various applications. In this paper, we present a novel joint audio-video driven facial animation system. Unlike traditional methods, we incorporate a large vocabulary continuous speech recognition (LVCSR) system to obtain phoneme alignments. The use of LVCSR reduces the high error rate associated with the traditional phoneme recognizer. We also introduce a knowledge guided 3D blendshapes modeling for each phoneme to avoid collecting training data and introducing bias from computer vision generated targets. To further improve the quality, we adopt video tracking and jointly optimize the facial animation by combin- ing both sources. In the evaluations, we present both objective study and several subjective studies on three settings: audio-driven, video-driven, and joint audio-video driven. We find that the quality of our proposed system’s facial animation generation surpasses that of the recent state-of-the-art systems.`,
    bgImage: "",
  },
  {
    id: 24,
    date: "February 04, 2018",
    title: "Efficient Video Object Segmentation via Network Modulation",
    description: `<p><b>Abstract: </b>Video object segmentation targets at segmenting a specific object throughout a video sequence, given only an annotated first frame. Recent deep learning based approaches find it effective by fine-tuning a general-purpose segmentation model on the annotated frame using hundreds of iterations of gradient descent. Despite the high accuracy these methods achieve, the fine-tuning process is inefficient and fail to meet the requirements of real world applications. We propose a novel approach that uses a single forward pass to adapt the segmentation model to the appearance of a specific object. Specifically, a second meta neural network named modulator is learned to manipulate the intermediate layers of the segmentation network given limited visual and spatial information of the target object. The experiments show that our approach is 70× faster than fine-tuning approaches while achieving similar
    accuracy. Our model and code are released at https://github.com/linjieyangsc/video_seg.</p>`,
    authors:
      "Linjie Yang, Yanran Wang, Xuehan Xiong, Jianchao Yang, Aggelos K. Katsaggelos",
    eventID: 24,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6sSZYkO3wiAEr6JveGUSBr/e57b407e070efc3ae19a370f37d5864e/1802.01218.pdf",
    metadescription: `Video object segmentation targets at segmenting a specific object throughout a video sequence, given only an annotated first frame. Recent deep learning based approaches find it effective by fine-tuning a general-purpose segmentation model on the annotated frame using hundreds of iterations of gradient descent. Despite the high accuracy these methods achieve, the fine-tuning process is inefficient and fail to meet the requirements of real world applications. We propose a novel approach that uses a single forward pass to adapt the segmentation model to the appearance of a specific object. Specifically, a second meta neural network named modulator is learned to manipulate the intermediate layers of the segmentation network given limited visual and spatial information of the target object. The experiments show that our approach is 70× faster than fine-tuning approaches while achieving similar accuracy.`,
    bgImage: "",
  },
  {
    id: 25,
    date: "February 28, 2018",
    title: "Multimodal Named Entity Recognition for Short Social Media Posts",
    description: `<p><b>Abstract: </b>We introduce a new task called Multimodal Named Entity Recognition (MNER) for noisy user-generated data such as tweets or Snapchat captions, which comprise short text with accompanying images. These social media posts often come in inconsistent or incomplete syntax and lexical notations with very limited surrounding textual contexts, bringing significant challenges for NER. To this end, we create a new dataset for MNER called SnapCaptions (Snapchat image-caption pairs submitted to public and crowd-sourced stories with fully annotated named entities). We then build upon the state-of-the-art Bi-LSTM word/character based NER models with 1) a deep image network which incorporates relevant visual context to augment textual information, and 2) a generic modality-attention module which learns to attenuate irrelevant modalities while amplifying the most informative ones to extract contexts from, adaptive to each sample and token. The proposed MNER model with modality attention significantly outperforms the state-of-the-art text-only NER models by successfully leveraging provided visual contexts, opening up potential applications of
    MNER on myriads of social media platforms.</p>`,
    authors: "Seunghwan Moon, Leonardo Neves, Vitor Carvalho",
    eventID: 25,
    researchArea: "Deep Learning, Natural Language Processing",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/2mNn00o7KtHvb5UxJCikGB/c6d956444f1fb9f390b256768c621ce6/1802.07862.pdf",
    metadescription: `We introduce a new task called Multimodal Named Entity Recognition (MNER) for noisy user-generated data such as tweets or Snapchat captions, which comprise short text with accompanying images. These social media posts often come in inconsistent or incomplete syntax and lexical notations with very limited surrounding textual contexts, bringing significant challenges for NER. To this end, we create a new dataset for MNER called SnapCaptions (Snapchat image-caption pairs submitted to public and crowd-sourced stories with fully annotated named entities). We then build upon the state-of-the-art Bi-LSTM word/character based NER models with 1) a deep image network which incorporates relevant visual context to augment textual information, and 2) a generic modality-attention module which learns to attenuate irrelevant modalities while amplifying the most informative ones to extract contexts from, adaptive to each sample and token. The proposed MNER model with modality attention significantly outperforms the state-of-the-art text-only NER models by successfully leveraging provided visual contexts, opening up potential applications of MNER on myriads of social media platforms.`,
    bgImage: "",
  },
  {
    id: 26,
    date: "February 28, 2018",
    title: "Mitigating Adversarial Effects through Randomization",
    description: `<p><b>Abstract: </b>Convolutional neural networks have demonstrated high accuracy on various tasks in recent years. However, they are extremely vulnerable to adversarial examples. For example, imperceptible perturbations added to clean images can cause convolutional neural networks to fail. In this paper, we propose to utilize randomization at inference time to mitigate adversarial effects. Specifically, we use two randomization operations: random resizing, which resizes the input images to a random size, and random padding, which pads zeros around the input images in a random manner. Extensive experiments demonstrate that the proposed randomization method is very effective at defending against both single-step and iterative attacks. Our method provides the following advantages: 1) no additional training or fine-tuning, 2) very few additional computations, 3) compatible with other adversarial defense methods. By combining the proposed randomization method with an adversarially trained model, it achieves a normalized score of 0.924 (ranked No.2 among 107 defense teams) in the NIPS 2017 adversarial examples defense challenge, which is far better than using adversarial training alone with a normalized score of 0.773 (ranked No.56). The code is public available at https://github.com/cihangxie/NIPS2017_adv_challenge_defense.</p>`,
    authors: "Cihang Xie, Zhishuai Zhang, Alan Yuille, Zhou Ren",
    eventID: 26,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/1VLOxCIqklXusA2v4H4wiH/c655bab18245c900c92ee5955bb6ba6c/1711.01991.pdf",
    metadescription: `Convolutional neural networks have demonstrated high accuracy on various tasks in recent years. However, they are extremely vulnerable to adversarial examples. For example, imperceptible perturbations added to clean images can cause convolutional neural networks to fail. In this paper, we propose to utilize randomization at inference time to mitigate adversarial effects. Specifically, we use two randomization operations: random resizing, which resizes the input images to a random size, and random padding, which pads zeros around the input images in a random manner. Extensive experiments demonstrate that the proposed randomization method is very effective at defending against both single-step and iterative attacks. Our method provides the following advantages: 1) no additional training or fine-tuning, 2) very few additional computations, 3) compatible with other adversarial defense methods. By combining the proposed randomization method with an adversarially trained model, it achieves a normalized score of 0.924 (ranked No.2 among 107 defense teams) in the NIPS 2017 adversarial examples defense challenge, which is far better than using adversarial training alone with a normalized score of 0.773 (ranked No.56).`,
    bgImage: "",
  },
  {
    id: 27,
    date: "March 22, 2018",
    title: "Multi-task Emoji Learning",
    description: `<p><b>Abstract: </b>Emojis are very common in social media and understanding their underlying semantics is of great interest from a Natural Language Processing point of view. In this work, we investigate emoji prediction in short text messages using a multi-task pipeline that simultaneously predicts emojis, their categories and sub-categories. The categories are either manually predefined in the unicode standard or automatically obtained by clustering over word embeddings. We show that using this categorical information adds meaningful information, thus improving the performance of emoji prediction task. We systematically analyze the performance of the emoji prediction
    task by varying the number of training samples and also do a qualitative analysis by using attention weights from the prediction task.</p>`,
    authors:
      "Francesco Barbieri, Luis Marujo, Pradeep Karuturi, William Brendel",
    eventID: 27,
    researchArea:
      "Natural Language Processing, Deep Learning, Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5xRUgcS2eBbCCJzJKz6Oyy/3e84a9cdcf6f6c964e372ac5cf2b5949/Paper6_Emoji2018.pdf",
    metadescription: `Emojis are very common in social media and understanding their underlying semantics is of great interest from a Natural Language Processing point of view. In this work, we investigate emoji prediction in short text messages using a multi-task pipeline that simultaneously predicts emojis, their categories and sub-categories. The categories are either manually predefined in the unicode standard or automatically obtained by clustering over word embeddings. We show that using this categorical information adds meaningful information, thus improving the performance of emoji prediction task. We systematically analyze the performance of the emoji prediction task by varying the number of training samples and also do a qualitative analysis by using attention weights from the prediction task.`,
    bgImage: "",
  },
  {
    id: 28,
    date: "March 29, 2018",
    title: "Generative Modeling using the Sliced Wasserstein Distance",
    description: `<p><b>Abstract: </b>Generative Adversarial Nets (GANs) are very successful at modeling distributions from given samples, even in the high-dimensional case. However, their formulation is also known to be hard to optimize and often not stable. While this is particularly true for early GAN formulations, there has been significant empirically motivated and theoretically founded progress to improve stability, for instance, by using
    the Wasserstein distance rather than the Jenson-Shannon divergence. Here, we consider an alternative formulation for generative modeling based on random projections which, in its simplest form, results in a single objective rather than a
    saddle-point formulation. By augmenting this approach with a discriminator we improve its accuracy. We found our approach to be significantly more stable compared to even the improved Wasserstein GAN. Further, unlike the traditional GAN loss, the loss formulated in our method is a good measure of the actual distance between the distributions and, for the first time for GAN training, we are able to show estimates for the same.</p>`,
    authors: "Ishan Deshpande, Ziyu Zhang, Alexander Schwing",
    eventID: 21,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/30aZ95IRgT8vNbVjZlkWNz/5baf76f1f7738dee4db778b7c0a2c04a/1803.11188.pdf",
    metadescription: `Generative Adversarial Nets (GANs) are very successful at modeling distributions from given samples, even in the high-dimensional case. However, their formulation is also known to be hard to optimize and often not stable. While this is particularly true for early GAN formulations, there has been significant empirically motivated and theoretically founded progress to improve stability, for instance, by using the Wasserstein distance rather than the Jenson-Shannon divergence. Here, we consider an alternative formulation for generative modeling based on random projections which, in its simplest form, results in a single objective rather than a saddle-point formulation. By augmenting this approach with a discriminator we improve its accuracy. We found our approach to be significantly more stable compared to even the improved Wasserstein GAN. Further, unlike the traditional GAN loss, the loss formulated in our method is a good measure of the actual distance between the distributions and, for the first time for GAN training, we are able to show estimates for the same.`,
    bgImage: "",
  },
  {
    id: 29,
    date: "April 11, 2018",
    title:
      "Action Recognition with Spatio-Temporal Visual Attention on Skeleton Image Sequences",
    description: `<p><b>Abstract: </b>Action recognition with 3D skeleton sequences is becoming popular due to its speed and robustness. The recently proposed Convolutional Neural Networks (CNN) based methods have shown good performance in learning spatio-temporal representations for skeleton sequences. Despite the good recognition accuracy achieved by previous CNN based methods, there exist two problems that potentially limit the performance. First, previous skeleton representations are generated by chaining joints with a fixed order. The corresponding semantic meaning is unclear and the structural information among the joints is lost. Second, previous models do not have an ability to focus on informative joints. The attention mechanism is important for skeleton based action recognition because there exist spatio-temporal key stages while the joint predictions can be inaccurate. To solve these two problems, we propose a novel CNN based method for skeleton based action recognition. We first redesign the skeleton representations with a depth-first tree traversal order, which enhances the semantic meaning of skeleton images and better preserves the associated structural information. We then propose the idea of a two-branch attention architecture that focuses on spatio-temporal key stages and filters out unreliable joint predictions. A base attention model with the simplest structure is first introduced to illustrate the two-branch attention architecture. By improving the structures in both branches, we further propose a Global Longsequence Attention Network (GLAN). Furthermore, in order to adjust the kernel’s spatio-temporal aspect ratios and better capture long term dependencies, we propose a Sub-Sequence Attention Network (SSAN) that takes sub-image sequences as inputs. We show that the two-branch attention architecture can be combined with the SSAN to further improve the performance. Our experiment results on the NTU RGB+D dataset and the SBU Kinetic Interaction dataset outperforms the state-of-the-art. The model is further validated on noisy estimated poses from the UCF101 dataset and the Kinetics dataset. </p><p><i>Index Terms—Action and Activity Recognition, Video Understanding, Human Analysis, Visual Attention.</i></p>`,
    authors: "Zhengyuan Yang, Yuncheng Li, Jianchao Yang, Jiebo Luo",
    eventID: 29,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6KIMAuFl5vcoFertIzOcE7/6b160cc0c837f844faca638ab45e6291/1801.10304.pdf",
    metadescription: `Action recognition with 3D skeleton sequences is becoming popular due to its speed and robustness. The recently proposed Convolutional Neural Networks (CNN) based methods have shown good performance in learning spatio-temporal representations for skeleton sequences. Despite the good recognition accuracy achieved by previous CNN based methods, there exist two problems that potentially limit the performance. First, previous skeleton representations are generated by chaining joints with a fixed order. The corresponding semantic meaning is unclear and the structural information among the joints is lost. Second, previous models do not have an ability to focus on informative joints. The attention mechanism is important for skeleton based action recognition because there exist spatio-temporal key stages while the joint predictions can be inaccurate. To solve these two problems, we propose a novel CNN based method for skeleton based action recognition. We first redesign the skeleton representations with a depth-first tree traversal order, which enhances the semantic meaning of skeleton images and better preserves the associated structural information. We then propose the idea of a two-branch attention architecture that focuses on spatio-temporal key stages and filters out unreliable joint predictions. A base attention model with the simplest structure is first introduced to illustrate the two-branch attention architecture. By improving the structures in both branches, we further propose a Global Longsequence Attention Network (GLAN). Furthermore, in order to adjust the kernel’s spatio-temporal aspect ratios and better capture long term dependencies, we propose a Sub-Sequence Attention Network (SSAN) that takes sub-image sequences as inputs. We show that the two-branch attention architecture can be combined with the SSAN to further improve the performance. Our experiment results on the NTU RGB+D dataset and the SBU Kinetic Interaction dataset outperforms the state-of-the-art. The model is further validated on noisy estimated poses from the UCF101 dataset and the Kinetics dataset.`,
    bgImage: "",
  },
  {
    id: 30,
    date: "April 17, 2018",
    title: "Support Vector Machine As Graph Theory Problems",
    description: `<p><b>Abstract:</b> Quadratic programming (QP) problem reformulation has been a research problem for nearly two decades, but is seldom linked to Graph Theory. In fact, typical reformulations convexify a non-convex QP problem. This is accomplished by making the objective function differentiable, optimizing in the continuous domain while ensuring the final solution is binary, or adding regularizers and Lagrangian coefficients to optimize the dual problem. In this research, we demonstrate that QP problems can also be reformulated using the same mechanism as P/NP problem reduction, overcoming speed and memory footprint limitations from other type of reformulation. We use SVM to make the demonstration. In the demonstration, we show that SVM is comparable to a soft weighted edge maximum independent set problem where the amount of support vectors per class is balanced. As a result, SVM can also be reformulated as a maximum clique problem with the same class balancing constraint. After transforming the sequential minimal optimization (SMO) algorithm to our new maximum clique formulation, we demonstrate that such reformulation leads to improved training performance, reaching 36 times faster training time, and a sparser solution for less than one percent accuracy degradation in some datasets.</p><p><i><b>Index Terms: </b></i><i>Quadratic Optimization, Classification algorithms, Support Vector Machines, Graph Theory, Independent Set, Maximum Weighted Clique.</i></p>`,
    authors: "William Brendel, Luis Marujo",
    eventID: 30,
    researchArea: "Data Mining, Data Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/616uJovp5cAjnIiYVTIlXy/55c563b76efe947270c14e96a4496055/support-vector-machine__8_.pdf",
    metadescription: `Quadratic programming (QP) problem reformulation has been a research problem for nearly two decades, but is seldom linked to Graph Theory. In fact, typical reformulations convexify a non-convex QP problem. This is accomplished by making the objective function differentiable, optimizing in the continuous domain while ensuring the final solution is binary, or adding regularizers and Lagrangian coefficients to optimize the dual problem. In this research, we demonstrate that QP problems can also be reformulated using the same mechanism as P/NP problem reduction, overcoming speed and memory footprint limitations from other type of reformulation. We use SVM to make the demonstration. In the demonstration, we show that SVM is comparable to a soft weighted edge maximum independent set problem where the amount of support vectors per class is balanced. As a result, SVM can also be reformulated as a maximum clique problem with the same class balancing constraint. After transforming the sequential minimal optimization (SMO) algorithm to our new maximum clique formulation, we demonstrate that such reformulation leads to improved training performance, reaching 36 times faster training time, and a sparser solution for less than one percent accuracy degradation in some datasets.`,
    bgImage: "",
  },
  {
    id: 31,
    date: "April 17, 2018",
    title:
      "Sequential Minimal Optimization Extended to General Quadratic Programming",
    description: `<p><b>Abstract:</b> Nearly two decades ago Platt introduced the sequential minimal optimization (SMO) algorithm to solve the Support Vector Machine (SVM) dual quadratic programming optimization problem. SMO belongs to the family of Sequential Quadratic Programming (SQP) algorithms, and specifically aims to reduce the quadratic programming (QP) problem to its minimum at every iteration. As a result, SQP can be solved analytically and leads to an algorithm with linear time and space complexity. In 2005, Fan et al. summarized most of the optimization strategies that can be applied to solve the SVM QP problem with SMO in the well known LIBSVM library. Presently, other QP problems with similar form as the SVM QP dual problem are solved using more time and space consuming algorithms than mobile computational requirements allow. This research strives to discern the conditions that allow SMO to be extended to other QP problems and its complexity of solving the minimal QP at each iteration.</p><p><b><i>Index Terms: </i></b><i>Quadratic optimization, Support vector machines, Natural language processing</i></p>`,
    authors: "William Brendel, Luis Marujo",
    eventID: 30,
    researchArea: "Data Mining, Data Science, Natural Language Processing",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/56U1s76MdxjNtjfHLhRUcL/814561f414677a25a2d863a3f52ebf7f/sequential-minimal-optimization__4___1_.pdf",
    metadescription: `Nearly two decades ago Platt introduced the sequential minimal optimization (SMO) algorithm to solve the Support Vector Machine (SVM) dual quadratic programming optimization problem. SMO belongs to the family of Sequential Quadratic Programming (SQP) algorithms, and specifically aims to reduce the quadratic programming (QP) problem to its minimum at every iteration. As a result, SQP can be solved analytically and leads to an algorithm with linear time and space complexity. In 2005, Fan et al. summarized most of the optimization strategies that can be applied to solve the SVM QP problem with SMO in the well known LIBSVM library. Presently, other QP problems with similar form as the SVM QP dual problem are solved using more time and space consuming algorithms than mobile computational requirements allow. This research strives to discern the conditions that allow SMO to be extended to other QP problems and its complexity of solving the minimal QP at each iteration.`,
    bgImage: "",
  },
  {
    id: 32,
    date: "April 21, 2018",
    title: "Extracting Regular FOV Shots from 360 Event Footage",
    description: `<p><b>Abstract:</b> Video summaries are a popular way to share important events, but creating good summaries is hard. It requires expertise in both capturing and editing footage. While hiring a professional videographer is possible, this is too costly for most casual events. An alternative is to place 360 video cameras around an event space to capture footage passively and then extract regular field-of-view (RFOV) shots for the summary. This paper focuses on the problem of extracting such RFOV shots. Since we cannot actively control the cameras or the scene, it is hard to create "ideal' shots that adhere strictly to traditional cinematography rules. To better understand the tradeoffs, we study human preferences for static and moving camera RFOV shots generated from 360 footage. From the findings, we derive design guidelines. As a secondary contribution, we use these guidelines to develop automatic algorithms that we demonstrate in a prototype user interface for extracting RFOV shots from 360 videos.</p>`,
    authors: "Anh Truong, Sara Chen, Ersin Yumer, David Salesin, Wilmot Li",
    eventID: 32,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6o0ERFZ90JvaauOAhl0wiY/445b6b8d9d2854815abeef089d98ef7b/Extracting_Regular_FOV_Shots_from_360_Event_Footage.pdf",
    metadescription: `Video summaries are a popular way to share important events, but creating good summaries is hard. It requires expertise in both capturing and editing footage. While hiring a professional videographer is possible, this is too costly for most casual events. An alternative is to place 360 video cameras around an event space to capture footage passively and then extract regular field-of-view (RFOV) shots for the summary. This paper focuses on the problem of extracting such RFOV shots. Since we cannot actively control the cameras or the scene, it is hard to create "ideal' shots that adhere strictly to traditional cinematography rules. To better understand the tradeoffs, we study human preferences for static and moving camera RFOV shots generated from 360 footage. From the findings, we derive design guidelines. As a secondary contribution, we use these guidelines to develop automatic algorithms that we demonstrate in a prototype user interface for extracting RFOV shots from 360 videos.`,
    bgImage: "",
  },
  {
    id: 33,
    date: "April 22, 2018",
    title:
      "Practical Privacy-Preserving Friend Recommendations on Social Networks",
    description: `<p><b>Abstract: </b>Friend recommendations, whose goal is to expand the connections between users and increase their engagement on the network, is an essential problem for social networks. A particular challenge in friend recommendations is in making recommendations in a cold-start situation. This situation occurs when a new user has just registered and, as result, the model does not yet have sufficient information to directly provide recommendations. Friend recommendations also raise privacy concerns, as they may leak friendship relationships between people on the social network. Knowledge of such relationships may reveal sensitive information about a user, namely their political or sexual preferences [14], medical issues [8], or even de-anonymize their anonymous identities [6, 9]. The easiest and most common way to learn people’s relationships is through a brute-force attack that creates fake identities on the graph, connects them to the target user, and then observes friend recommendations that are based on the target user’s friends, and therefore, leak their social graph [2, 6]. As more users access social networks through their mobile phones, their phone contact books represent a valuable source of information for bootstrapping the recommendations in the coldstart situation. Our main contribution is to propose that the phone contact book can also be used to better protect the privacy of the users’ friend graphs when making friend recommendations, describe a straw-man approach for doing so, and measure its impact on recommendation quality through experiments.</p>`,
    authors:
      "William Brendel, Fangqiu Han, Luis Marujo, Luo Jie, Aleksandra Korolova",
    eventID: 33,
    researchArea: "Data Mining",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/yYIjpUagVlJeLM074lhPO/2c468dbd9368d28687722ef9ad9ef969/Practical_Privacy-Preserving_Friend_Recommendations_on_Social_Networks.pdf",
    metadescription: `Friend recommendations, whose goal is to expand the connections between users and increase their engagement on the network, is an essential problem for social networks. A particular challenge in friend recommendations is in making recommendations in a cold-start situation. This situation occurs when a new user has just registered and, as result, the model does not yet have sufficient information to directly provide recommendations. Friend recommendations also raise privacy concerns, as they may leak friendship relationships between people on the social network. Knowledge of such relationships may reveal sensitive information about a user, namely their political or sexual preferences [14], medical issues [8], or even de-anonymize their anonymous identities [6, 9]. The easiest and most common way to learn people’s relationships is through a brute-force attack that creates fake identities on the graph, connects them to the target user, and then observes friend recommendations that are based on the target user’s friends, and therefore, leak their social graph [2, 6]. As more users access social networks through their mobile phones, their phone contact books represent a valuable source of information for bootstrapping the recommendations in the coldstart situation. Our main contribution is to propose that the phone contact book can also be used to better protect the privacy of the users’ friend graphs when making friend recommendations, describe a straw-man approach for doing so, and measure its impact on recommendation quality through experiments.`,
    bgImage: "",
  },
  {
    id: 34,
    date: "April 22, 2018",
    title: "User Type Affinity Estimation Using Gamma-Poisson Model",
    description: `<p><b>Abstract:</b> The affinity of a user to a type of items (e.g., stories from the same publisher, and movies of the same genre) is an important signal reflecting the user’s interests. Accurately estimating of the user type affinity has various applications in ranking and recommendation systems. For frequent users, simply dividing the number of interactions with content (e.g., clicks) by the number of impressions (e.g., the number of times the content is presented to each user) would be a good estimate. However, such estimates are erroneous for users who have sparse interaction history, (e.g., new users). To alleviate the problem, feature-based approaches aim to learn functions predicting the affinity score using only none-click features, such as user demographics, locations, and interests. Likewise, such approaches do not take full advantage of the interaction history of frequent users. </p><p>Motivated by the limitations of the two approaches, we propose a Gamma-Poisson model that aims at utilizing the interaction history of frequent users, as well as leveraging a feature-based model for infrequent users. Our intuition is that we should rely more on the interaction history when estimating affinity for frequent users, and weigh more on feature-based model for infrequent users. We present experimental results on large-scale real-world data in a publisher content clicks prediction task to demonstrate the effectiveness of the proposed method in estimating user type affinity scores</p>`,
    authors: "Fei Wu, Yanen Li, Ning Xu",
    eventID: 33,
    researchArea: "Data Mining, Data Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4HpONlP93HSGn5f1Hf1ElW/f863af2fe765d2d7b6309496974acd36/User_Type_Affinity_Estimation_Using_Gamma-Poisson_Model.pdf",
    metadescription: `The affinity of a user to a type of items (e.g., stories from the same publisher, and movies of the same genre) is an important signal reflecting the user’s interests. Accurately estimating of the user type affinity has various applications in ranking and recommendation systems. For frequent users, simply dividing the number of interactions with content (e.g., clicks) by the number of impressions (e.g., the number of times the content is presented to each user) would be a good estimate. However, such estimates are erroneous for users who have sparse interaction history, (e.g., new users). To alleviate the problem, feature-based approaches aim to learn functions predicting the affinity score using only none-click features, such as user demographics, locations, and interests. Likewise, such approaches do not take full advantage of the interaction history of frequent users.`,
    bgImage: "",
  },
  {
    id: 35,
    date: "April 24, 2018",
    title:
      "Semi-supervised Content-based Detection of Misinformation via Tensor Embeddings",
    description: `<p><b>Abstract:</b> Fake news may be intentionally created to promote economic, political and social interests, and can lead to negative impacts on humans beliefs and decisions. Hence, detection of fake news is an emerging problem that has become extremely
    prevalent during the last few years. Most existing works on this topic focus on manual feature extraction and supervised classification models leveraging a large number of labeled (fake or real) articles. In contrast, we focus on content-based detection of fake news articles, while assuming that we have a small amount of labels, made available by manual fact-checkers or automated sources. We argue this is a more realistic setting in the presence of massive amounts of content, most of which cannot be easily factchecked. To that end, we represent collections of news articles as multi- dimensional tensors, leverage tensor decomposition to derive concise article embeddings that capture spatial/contextual information about each news article, and use those embeddings to create an article-by-article graph on which we propagate limited labels. Results on three real-world datasets show that our method performs on par or better than existing models that are fully supervised, in that we achieve better detection accuracy using fewer labels. In particular, our proposed method achieves 75.43% of accuracy using only 30% of labels of a public dataset while an SVM-based classifier achieved 67.43%. Furthermore, our method achieves 70.92% of accuracy in a large dataset using only 2% of labels.</p>`,
    authors:
      "Gisel Bastidas Guacho, Sara Abdali, Neil Shah, Evangelos E. Papalexakis",
    eventID: 35,
    researchArea: "Data Mining, Natural Language Processing, Security",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/7xmSG5BSDMkTRzl2JKVt6N/43490beca56f3a80d839e2ebc09fe64d/1804.09088.pdf",
    metadescription: `Fake news may be intentionally created to promote economic, political and social interests, and can lead to negative impacts on humans beliefs and decisions. Hence, detection of fake news is an emerging problem that has become extremely prevalent during the last few years. Most existing works on this topic focus on manual feature extraction and supervised classification models leveraging a large number of labeled (fake or real) articles. In contrast, we focus on content-based detection of fake news articles, while assuming that we have a small amount of labels, made available by manual fact-checkers or automated sources. We argue this is a more realistic setting in the presence of massive amounts of content, most of which cannot be easily factchecked. To that end, we represent collections of news articles as multi- dimensional tensors, leverage tensor decomposition to derive concise article embeddings that capture spatial/contextual information about each news article, and use those embeddings to create an article-by-article graph on which we propagate limited labels. Results on three real-world datasets show that our method performs on par or better than existing models that are fully supervised, in that we achieve better detection accuracy using fewer labels. In particular, our proposed method achieves 75.43% of accuracy using only 30% of labels of a public dataset while an SVM-based classifier achieved 67.43%. Furthermore, our method achieves 70.92% of accuracy in a large dataset using only 2% of labels.`,
    bgImage: "",
  },
  {
    id: 36,
    date: "April 27, 2018",
    title: "RaRE: Social Rank Regulated Large-scale Network Embedding",
    description: `<p><b>Abstract: </b>Network embedding algorithms that map nodes in a network into a low-dimensional vector space are prevalent in recent years, due to their superior performance in many network-based tasks, such as clustering, classification, and link prediction. The main assumption of existing algorithms is that the learned latent representation for nodes should preserve the structure of the network, in terms of firstorder or higher-order connectivity. In other words, nodes that are more similar will have higher probability to connect to each other. This phenomena is typically explained as homophily in network science. However, there is another factor usually neglected by the existing embedding algorithms, which is the popularity of a node. For example, celebrities in a social network usually receive numerous followers, which cannot be fully explained by the similarity of the two users. We denote this factor with the terminology “social rank”. We then propose a network embedding model that considers both of the two factors in link generation, and learn proximity-based embedding and social rank-based embedding separately. Rather than simply treating these two factors independent with each other, a carefully designed link generation model is proposed, which explicitly models the interdependency between these two types of embeddings. Experiments on several real-world datasets across different domains demonstrate the superiority of our novel network embedding model over the state-of-the-art methods.</p>`,
    authors: "Yupeng Gu, Yizhou Sun, Yanen Li, Yang Yang",
    eventID: 36,
    researchArea: "Data Mining",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/1D3pZq5EBAxrv5sYP68yu3/5301bed464373d8f949a188dabde2974/www_2018_rare.pdf",
    metadescription: `Network embedding algorithms that map nodes in a network into a low-dimensional vector space are prevalent in recent years, due to their superior performance in many network-based tasks, such as clustering, classification, and link prediction. The main assumption of existing algorithms is that the learned latent representation for nodes should preserve the structure of the network, in terms of firstorder or higher-order connectivity. In other words, nodes that are more similar will have higher probability to connect to each other. This phenomena is typically explained as homophily in network science. However, there is another factor usually neglected by the existing embedding algorithms, which is the popularity of a node. For example, celebrities in a social network usually receive numerous followers, which cannot be fully explained by the similarity of the two users. We denote this factor with the terminology “social rank”. We then propose a network embedding model that considers both of the two factors in link generation, and learn proximity-based embedding and social rank-based embedding separately. Rather than simply treating these two factors independent with each other, a carefully designed link generation model is proposed, which explicitly models the interdependency between these two types of embeddings. Experiments on several real-world datasets across different domains demonstrate the superiority of our novel network embedding model over the state-of-the-art methods.`,
    bgImage: "",
  },
  {
    id: 37,
    date: "April 27, 2018",
    title: "Creating Crowdsourced Research Talks at Scale",
    description: `<p><b>Abstract: </b>There has been a marked shift towards learning and consuming information through video. Most academic research, however, is still distributed only in text form, as researchers often have limited time, resources, and incentives to create video versions of their work. To address this gap, we propose, deploy, and evaluate a scalable, end-to-end system for crowdsourcing the creation of short, 5-minute research videos based on academic papers. Doing so requires solving complex coordination and collaborative video production problems. To assist coordination, we designed a structured workflow that enables efficient delegation of tasks, while also motivating the crowd through a collaborative learning environment. To facilitate video production, we developed an online tool with which groups can make micro-audio recordings that are automatically stitched together to create a complete talk. We tested this approach with a group of volunteers recruited from 52 countries through an open call. This distributed crowd produced over 100 video talks in 12 languages based on papers from top-tier computer science conferences. The produced talks consistently received high ratings from a diverse group of non-experts and experts, including the authors of the original papers. These results indicate that our crowdsourcing approach is a promising method for producing high-quality research talks at scale, increasing the distribution and accessibility of scientific knowledge.</p>`,
    authors: "Rajan Vaish, Shirish Goyal, Amin Saberi, Sharad Goel",
    eventID: 37,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/2kt2LsbLho1fGmXpRsRmYP/cef681e636cb10d68c6da87506a7a8f7/stanfordscholar.pdf",
    metadescription: `There has been a marked shift towards learning and consuming information through video. Most academic research, however, is still distributed only in text form, as researchers often have limited time, resources, and incentives to create video versions of their work. To address this gap, we propose, deploy, and evaluate a scalable, end-to-end system for crowdsourcing the creation of short, 5-minute research videos based on academic papers. Doing so requires solving complex coordination and collaborative video production problems. To assist coordination, we designed a structured workflow that enables efficient delegation of tasks, while also motivating the crowd through a collaborative learning environment. To facilitate video production, we developed an online tool with which groups can make micro-audio recordings that are automatically stitched together to create a complete talk. We tested this approach with a group of volunteers recruited from 52 countries through an open call. This distributed crowd produced over 100 video talks in 12 languages based on papers from top-tier computer science conferences. The produced talks consistently received high ratings from a diverse group of non-experts and experts, including the authors of the original papers. These results indicate that our crowdsourcing approach is a promising method for producing high-quality research talks at scale, increasing the distribution and accessibility of scientific knowledge.`,
    bgImage: "",
  },
  {
    id: 38,
    date: "April 30, 2018",
    title: "Beyond Outlier Detection: LookOut for Pictorial Explanation",
    description: `<p><b>Abstract: </b>Why is a given point in a dataset marked as an outlier by an off-the-shelf detection algorithm? Which feature(s) explain it the best? What is the best way to convince a human analyst that the point is indeed an outlier? We provide succinct, interpretable, and simple pictorial explanations of outlying behavior in multi dimensional real-valued datasets while respecting the limited attention of human analysts. Specifically, we propose to output a few pictures (focus-plots, ie., pairwise feature plots) from a few, carefully chosen feature sub-spaces. The proposed LookOut makes
    four contributions: (a) problem formulation: we introduce an “analyst-centered” problem formulation for explaining outliers via focus-plots, (b) explanation algorithm:
    we propose a plot-selection objective and the LookOut algorithm to approximate it with optimality guarantees, (c) generality: our explanation algorithm is both domain- and
    detector-agnostic, and (d) scalability: LookOut scales linearly with the size of input outliers to explain and the explanation budget. Our experiments show that LookOut performs near-ideally in terms of maximizing explanation objective on several real datasets, while producing fast, visually interpretable and intuitive results in explaining groundtruth outliers from several real-world datasets.</p>`,
    authors:
      "Nikhil Gupta, Dhivya Eswaran, Neil Shah, Leman Akoglu, Christos Faloutsos",
    eventID: 38,
    researchArea: "Data Mining, Security",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/sCKSc0f7gz6clTUqgOZyF/9904f8d3bfa65bc9b838cdf2728446ab/ODD_v50_paper_24.pdf",
    metadescription: `Why is a given point in a dataset marked as an outlier by an off-the-shelf detection algorithm? Which feature(s) explain it the best? What is the best way to convince a human analyst that the point is indeed an outlier? We provide succinct, interpretable, and simple pictorial explanations of outlying behavior in multi dimensional real-valued datasets while respecting the limited attention of human analysts. Specifically, we propose to output a few pictures (focus-plots, ie., pairwise feature plots) from a few, carefully chosen feature sub-spaces. The proposed LookOut makes four contributions: (a) problem formulation: we introduce an “analyst-centered” problem formulation for explaining outliers via focus-plots, (b) explanation algorithm: we propose a plot-selection objective and the LookOut algorithm to approximate it with optimality guarantees, (c) generality: our explanation algorithm is both domain- and detector-agnostic, and (d) scalability: LookOut scales linearly with the size of input outliers to explain and the explanation budget. Our experiments show that LookOut performs near-ideally in terms of maximizing explanation objective on several real datasets, while producing fast, visually interpretable and intuitive results in explaining groundtruth outliers from several real-world datasets.`,
    bgImage: "",
  },
  {
    id: 39,
    date: "May 02, 2018",
    title:
      "Exploring Emoji Usage and Prediction Through a Temporal Variation Lens",
    description: `<p><b>Abstract: </b>The frequent use of Emojis on social media platforms has created a new form of multimodal social interaction. Developing methods for the study and representation of emoji semantics helps to improve future multimodal communication systems. In this paper we explore the usage and semantics of emojis over time. We compare emoji embeddings trained on a corpus of different seasons and show that
    some emojis are used differently depending on the time of the year. Moreover, we propose a method to take into account the time information for emoji prediction systems, outperforming state-of-the-art systems. We show that, using the time information, the accuracy of some emojis can be significantly improved.</p>`,
    authors:
      "Francesco Barbieri, Luis Marujo, Pradeep Karuturi, William Brendel, Horacio Saggion",
    eventID: 27,
    researchArea:
      "Natural Language Processing, Deep Learning, Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/2ui6kXv2tS4hjtzagNVSFb/7590d43d079d57b865c14a89d964026b/1805.00731.pdf",
    metadescription: `The frequent use of Emojis on social media platforms has created a new form of multimodal social interaction. Developing methods for the study and representation of emoji semantics helps to improve future multimodal communication systems. In this paper we explore the usage and semantics of emojis over time. We compare emoji embeddings trained on a corpus of different seasons and show that some emojis are used differently depending on the time of the year. Moreover, we propose a method to take into account the time information for emoji prediction systems, outperforming state-of-the-art systems. We show that, using the time information, the accuracy of some emojis can be significantly improved.`,
    bgImage: "",
  },
  {
    id: 40,
    date: "May 06, 2018",
    title:
      "I Know You’ll Be Back: Interpretable New User Clustering and Churn Prediction on a Mobile Social Application",
    description: `<p><b>Abstract:  </b>As online platforms are striving to get more users, a critical challenge is user churn, which is especially concerning for new users. In this paper, by taking the anonymous large-scale real-world data from Snapchat as an example, we develop <i>ClusChurn</i>, a systematic two-step framework for interpretable new user clustering and churn prediction, based on the intuition that proper user clustering can help understand and predict user churn. Therefore, <i>ClusChurn</i> firstly groups new users into interpretable typical clusters, based on their activities on the platform and ego-network structures. Then we design a novel deep learning pipeline based on LSTM and attention to accurately predict user churn with very limited initial behavior data, by leveraging the correlations among users’ multidimensional activities and the underlying user types. <i>ClusChurn</i> is also able to predict user types, which enables rapid reactions to different types of user churn. Extensive data analysis and experiments show that <i>ClusChurn</i> provides valuable insight into user behaviors, and achieves state-of-the-art churn prediction performance. The whole framework is deployed as a data analysis pipeline, delivering real-time data analysis and prediction results to multiple relevant teams for business intelligence uses. It is also general enough to be readily adopted by any online systems with user behavior data.</p>`,
    authors: "Carl Yang, Xiaolin Shi, Jie Luo, Jiawei Han",
    eventID: 40,
    researchArea: "Data Mining, Data Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/30p34oUkm80hUHJWvaCceJ/4a776472173ed2c89cf23f8636739c1b/1910.01447.pdf",
    metadescription: `As online platforms are striving to get more users, a critical challenge is user churn, which is especially concerning for new users. In this paper, by taking the anonymous large-scale real-world data from Snapchat as an example, we develop ClusChurn, a systematic two-step framework for interpretable new user clustering and churn prediction, based on the intuition that proper user clustering can help understand and predict user churn. Therefore, ClusChurn firstly groups new users into interpretable typical clusters, based on their activities on the platform and ego-network structures. Then we design a novel deep learning pipeline based on LSTM and attention to accurately predict user churn with very limited initial behavior data, by leveraging the correlations among users’ multidimensional activities and the underlying user types. ClusChurn is also able to predict user types, which enables rapid reactions to different types of user churn. Extensive data analysis and experiments show that ClusChurn provides valuable insight into user behaviors, and achieves state-of-the-art churn prediction performance. The whole framework is deployed as a data analysis pipeline, delivering real-time data analysis and prediction results to multiple relevant teams for business intelligence uses. It is also general enough to be readily adopted by any online systems with user behavior data.`,
    bgImage: "",
  },
  {
    id: 41,
    date: "May 06, 2018",
    title: "A Hybrid Neural Network For Chroma Intra Prediction",
    description: `<p><b>Abstract: </b>For chroma intra prediction, previous methods exemplified by the Linear Model method (LM) usually assume a linear correlation between the luma and chroma components in a coding block. This assumption is inaccurate for complex image content or large blocks, and restricts the prediction accuracy. In this paper, we propose a chroma intra prediction method by exploiting both spatial and cross-channel correlations using a hybrid neural network. Specifically, we utilize a convolutional neural network to extract features from the reconstructed luma samples of the current block, as well as utilize a fully connected network to extract features from the neighboring reconstructed luma and chroma samples. The extracted twofold features are then fused to predict the chroma samples–Cb and Cr simultaneously. The proposed chroma intra prediction method is integrated into HEVC. Preliminary results show that, compared with HEVC plus LM, the proposed method achieves on average 0.2%, 3.1% and 2.0% BDrate reduction on Y, Cb and Cr components, respectively, under All-Intra configuration.</p><p><i><b>Index Terms: </b></i><i>Chroma intra prediction, convolutional neural network, fully connected network, hybrid neural network.</i></p>`,
    authors:
      "Yue Li, Li Li, Zhu Li, Jianchao Yang, Ning Xu, Dong Liu, Houqiang Li",
    eventID: 41,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/dHN9DbW6WpMDbIWBbuTE0/d88566591561133e9d89f3df7a8d6d2d/2018.chroma-pred.pdf",
    metadescription: `For chroma intra prediction, previous methods exemplified by the Linear Model method (LM) usually assume a linear correlation between the luma and chroma components in a coding block. This assumption is inaccurate for complex image content or large blocks, and restricts the prediction accuracy. In this paper, we propose a chroma intra prediction method by exploiting both spatial and cross-channel correlations using a hybrid neural network. Specifically, we utilize a convolutional neural network to extract features from the reconstructed luma samples of the current block, as well as utilize a fully connected network to extract features from the neighboring reconstructed luma and chroma samples. The extracted twofold features are then fused to predict the chroma samples–Cb and Cr simultaneously. The proposed chroma intra prediction method is integrated into HEVC. Preliminary results show that, compared with HEVC plus LM, the proposed method achieves on average 0.2%, 3.1% and 2.0% BDrate reduction on Y, Cb and Cr components, respectively, under All-Intra configuration.`,
    bgImage: "",
  },
  {
    id: 42,
    date: "May 22, 2018",
    title: "WSNet: Compact and Efficient Networks Through Weight Sampling",
    description: `<p><b>Abstract: </b>We present a new approach and a novel architecture, termed WSNet, for learning compact and efficient deep neural networks. Existing approaches conventionally learn full model parameters independently and then compress them via <i>ad hoc </i>processing such as model pruning or filter factorization. Alternatively, WSNet proposes learning model parameters by sampling from a compact set of learnable parameters, which naturally enforces parameter sharing throughout the learning process. We demonstrate that such a novel weight sampling approach (and induced WSNet) promotes both weights and computation sharing favorably. By employing this method, we can more efficiently learn much smaller networks with competitive performance compared to baseline networks with equal numbers of convolution filters. Specifically, we consider learning compact and efficient 1D convolutional neural networks for audio classification. Extensive experiments on multiple audio classification datasets verify the effectiveness of WSNet. Combined with weight quantization, the
    resulted models are up to <b>180×</b> smaller and theoretically up to <b>16×</b> faster than the well-established baselines, without noticeable performance drop.</p>`,
    authors:
      "Xiaojie Jin, Yingzhen Yang, Ning Xu, Jianchao Yang, Nebojsa Jojic, Jiashi Feng, Shuicheng Yan",
    eventID: 42,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4VTIKw2cGruelxwlT1YDJT/97e654b4b2d6127603d30f9e81131c7f/1711.10067",
    metadescription: `We present a new approach and a novel architecture, termed WSNet, for learning compact and efficient deep neural networks. Existing approaches conventionally learn full model parameters independently and then compress them via ad hoc processing such as model pruning or filter factorization. Alternatively, WSNet proposes learning model parameters by sampling from a compact set of learnable parameters, which naturally enforces parameter sharing throughout the learning process. We demonstrate that such a novel weight sampling approach (and induced WSNet) promotes both weights and computation sharing favorably. By employing this method, we can more efficiently learn much smaller networks with competitive performance compared to baseline networks with equal numbers of convolution filters. Specifically, we consider learning compact and efficient 1D convolutional neural networks for audio classification. Extensive experiments on multiple audio classification datasets verify the effectiveness of WSNet. Combined with weight quantization, the resulted models are up to 180× smaller and theoretically up to 16× faster than the well-established baselines, without noticeable performance drop.`,
    bgImage: "",
  },
  {
    id: 43,
    date: "May 29, 2018",
    title: "Learn to Combine Modalities in Multimodal Deep Learning",
    description: `<p><b>Abstract: </b>Combining complementary information from multiple modalities is intuitively appealing for improving the performance of learning-based approaches. However, it is challenging to fully leverage different modalities due to practical challenges such as varying levels of noise and conflicts between modalities. Existing methods do not adopt a joint approach to capturing synergies between the modalities while simultaneously filtering noise and resolving conflicts on a per sample basis. In this work we propose a novel deep neural network based technique that multiplicatively combines information from different source modalities. Thus the model training process automatically focuses on information from more reliable modalities while reducing emphasis on the less reliable modalities. Furthermore, we propose an extension that multiplicatively combines not only the single-source modalities, but a set of mixtured source modalities to better capture cross-modal signal correlations. We demonstrate the effectiveness of our proposed technique by presenting empirical results on three multimodal classification tasks from different domains. The results show consistent accuracy improvements on all three tasks.</p>`,
    authors: "Kuan Liu, Yanen Li, Ning Xu, Prem Natarajan",
    eventID: 43,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/Q6ObNTOiukxCOQHrAObLq/1c4e019220d86b985661359d8bc64625/1805.11730.pdf",
    metadescription: `Combining complementary information from multiple modalities is intuitively appealing for improving the performance of learning-based approaches. However, it is challenging to fully leverage different modalities due to practical challenges such as varying levels of noise and conflicts between modalities. Existing methods do not adopt a joint approach to capturing synergies between the modalities while simultaneously filtering noise and resolving conflicts on a per sample basis. In this work we propose a novel deep neural network based technique that multiplicatively combines information from different source modalities. Thus the model training process automatically focuses on information from more reliable modalities while reducing emphasis on the less reliable modalities. Furthermore, we propose an extension that multiplicatively combines not only the single-source modalities, but a set of mixtured source modalities to better capture cross-modal signal correlations. We demonstrate the effectiveness of our proposed technique by presenting empirical results on three multimodal classification tasks from different domains. The results show consistent accuracy improvements on all three tasks.`,
    bgImage: "",
  },
  {
    id: 44,
    date: "June 03, 2018",
    title:
      "Filter sampling and combination CNN (FSC-CNN): a compact CNN model for small-footprint ASR acoustic modeling using raw waveforms",
    description: `<p><b>Abstract: </b>Learning an ASR acoustic model directly from raw waveforms using CNNs has proved to be effective, where convolutional layers with learnable filters are able to automatically extract useful features. However, these filters, with independent parameters, can be highly redundant resulting in inefficient systems. In this paper, we propose a novel method to generate CNN filter parameters by first sampling from a low-dimensional parameter space and then using a trainable scalar vector to perform a linear combination. This filter sampling and combination method (denoted as FSC) not only naturally enforces parameter sharing in the low-dimensional sampling space, but also adds to the learning capacity of filters. The FSC-CNN model has a significantly smaller number of parameters and is more efficient compared to conventional CNN models, which makes it feasible for small-footprint ASR. Experimental results on the WSJ LVCSR task show that FSC-CNNs are able to achieve a WER of 3.67 with a standard decoder set-up with only 1.19M nonlinearlayer parameters (better than a strong baseline CNN model with 3.2x more parameters). It also outperforms a CNN model with a similar number of parameters by a relative improvement of 10.26%.</p><p><b><i>Index Terms</i></b><i>: speech recognition, small-footprint, acoustic modeling, raw audio, filter sampling and combination, CNNs</i></p>`,
    authors: "Jinxi Guo, Ning Xu, Xin Chen, Yang Shi, Kaiyuan Xu, Abeer Alwan",
    eventID: 44,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5rCeadQZ4ivuVkyNrfOng8/0c61c02e22226ff3e07aedab6e98ba5f/396008cf99c8183643dc9fc50dc2d3a8face.pdf",
    metadescription: `Learning an ASR acoustic model directly from raw waveforms using CNNs has proved to be effective, where convolutional layers with learnable filters are able to automatically extract useful features. However, these filters, with independent parameters, can be highly redundant resulting in inefficient systems. In this paper, we propose a novel method to generate CNN filter parameters by first sampling from a low-dimensional parameter space and then using a trainable scalar vector to perform a linear combination. This filter sampling and combination method (denoted as FSC) not only naturally enforces parameter sharing in the low-dimensional sampling space, but also adds to the learning capacity of filters. The FSC-CNN model has a significantly smaller number of parameters and is more efficient compared to conventional CNN models, which makes it feasible for small-footprint ASR. Experimental results on the WSJ LVCSR task show that FSC-CNNs are able to achieve a WER of 3.67 with a standard decoder set-up with only 1.19M nonlinearlayer parameters (better than a strong baseline CNN model with 3.2x more parameters). It also outperforms a CNN model with a similar number of parameters by a relative improvement of 10.26%.`,
    bgImage: "",
  },
  {
    id: 45,
    date: "June 10, 2018",
    title:
      "Zeroshot Multimodal Named Entity Disambiguation for Noisy Social Media Posts",
    description: `<p><b>Abstract: </b>We introduce the new Multimodal Named Entity Disambiguation (MNED) task for multimodal social media posts such as Snapchat or Instagram captions, which are composed of short captions with accompanying images. Social media posts bring significant challenges for disambiguation tasks because 1) ambiguity not only comes from polysemous entities, but also from inconsistent or incomplete notations, 2) very limited context is provided with surrounding words, and 3) there are many emerging entities often unseen during training. To this end, we build a new dataset called SnapCaptionsKB, a collection of Snapchat image captions submitted to public and crowd-sourced stories, with named entity mentions fully annotated and linked to entities in an external knowledge base. We then build a deep zeroshot multimodal network for MNED that 1) extracts contexts from both text and image, and 2) predicts correct entity in the knowledge graph embeddings space, allowing for zeroshot disambiguation of entities unseen in training set as well. The proposed model significantly outperforms the stateof-the-art text-only NED models, showing efficacy and potentials of the MNED task.</p>`,
    authors: "Seungwhan Moon, Leonardo Neves, Vitor Carvalho",
    eventID: 45,
    researchArea: "Natural Language Processing, Deep Learning, Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4eYEsJmMW7nuCSyolEuJK3/0e291b550ce1de7e351de8b689342612/P18-1186.pdf",
    metadescription: `We introduce the new Multimodal Named Entity Disambiguation (MNED) task for multimodal social media posts such as Snapchat or Instagram captions, which are composed of short captions with accompanying images. Social media posts bring significant challenges for disambiguation tasks because 1) ambiguity not only comes from polysemous entities, but also from inconsistent or incomplete notations, 2) very limited context is provided with surrounding words, and 3) there are many emerging entities often unseen during training. To this end, we build a new dataset called SnapCaptionsKB, a collection of Snapchat image captions submitted to public and crowd-sourced stories, with named entity mentions fully annotated and linked to entities in an external knowledge base. We then build a deep zeroshot multimodal network for MNED that 1) extracts contexts from both text and image, and 2) predicts correct entity in the knowledge graph embeddings space, allowing for zeroshot disambiguation of entities unseen in training set as well. The proposed model significantly outperforms the stateof-the-art text-only NED models, showing efficacy and potentials of the MNED task.`,
    bgImage: "",
  },
  {
    id: 46,
    date: "June 10, 2018",
    title: "Visual Attention Model for Name Tagging in Multimodal Social Media",
    description: `<p><b>Abstract: </b>Everyday billions of multimodal posts containing both images and text are shared in social media sites such as Snapchat, Twitter or Instagram. This combination of image and text in a single message allows for more creative and expressive forms of
    communication, and has become increasingly common in such sites. This new paradigm brings new challenges for natural language understanding, as the textual component tends to be shorter, more informal, and often is only understood if combined with the visual context. In this paper, we explore the task of name tagging in multimodal social media posts. We start by creating two new multimodal datasets: one based on Twitter posts and the other based on Snapchat captions (exclusively submitted to public and crowdsourced stories). We then propose a novel model based on Visual Attention that not only provides deeper visual understanding on the decisions of the model, but also significantly outperforms other state-of-the-art baseline methods for this task. </p>`,
    authors: "Di Lu, Leonardo Neves, Vitor Carvalho, Ning Zhang, Heng Ji",
    eventID: 45,
    researchArea: "Natural Language Processing, Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6fws8vlREwJsNSdC8IXsyj/377a0349ebb6c253b95be403c472b18a/P18-1185.pdf",
    metadescription: `Everyday billions of multimodal posts containing both images and text are shared in social media sites such as Snapchat, Twitter or Instagram. This combination of image and text in a single message allows for more creative and expressive forms of communication, and has become increasingly common in such sites. This new paradigm brings new challenges for natural language understanding, as the textual component tends to be shorter, more informal, and often is only understood if combined with the visual context. In this paper, we explore the task of name tagging in multimodal social media posts. We start by creating two new multimodal datasets: one based on Twitter posts and the other based on Snapchat captions (exclusively submitted to public and crowdsourced stories). We then propose a novel model based on Visual Attention that not only provides deeper visual understanding on the decisions of the model, but also significantly outperforms other state-of-the-art baseline methods for this task.`,
    bgImage: "",
  },
  {
    id: 47,
    date: "July 03, 2018",
    title:
      "Multi-view to Novel view: Synthesizing novel views with Self-Learned Confidence",
    description: `<p><b>Abstract:</b> In this paper, we address the task of multi-view novel view synthesis, where we are interested in synthesizing a target image with an arbitrary camera pose from given source images. We propose an endto-end trainable framework that learns to exploit multiple viewpoints to synthesize a novel view without any 3D supervision. Specifically, our model consists of a flow prediction module and a pixel generation module to directly leverage information presented in source views as well as hallucinate missing pixels from statistical priors. To merge the predictions produced by the two modules given multi-view source images, we introduce a self-learned confidence aggregation mechanism. We evaluate our model on images rendered from 3D object models as well as real and synthesized scenes. We demonstrate that our model is able to achieve state-of-the-art results as well as progressively improve its predictions when more source images are available.</p><p>
    <i><b>Keywords: </b></i><i>Novel view synthesis, multi-view novel view synthesis</i></p>`,
    authors:
      "Shao-Hua Sun, Minyoung Huh, Yuan-Hong Liao, Ning Zhang, Joseph J. Lim",
    eventID: 47,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/tkUGqfuJYCj651eXjokhe/78c9486bdce1e1ac325d9fe5f867cb44/Shao-Hua_Sun_Multi-view_to_Novel_ECCV_2018_paper.pdf",
    metadescription: `In this paper, we address the task of multi-view novel view synthesis, where we are interested in synthesizing a target image with an arbitrary camera pose from given source images. We propose an endto-end trainable framework that learns to exploit multiple viewpoints to synthesize a novel view without any 3D supervision. Specifically, our model consists of a flow prediction module and a pixel generation module to directly leverage information presented in source views as well as hallucinate missing pixels from statistical priors. To merge the predictions produced by the two modules given multi-view source images, we introduce a self-learned confidence aggregation mechanism. We evaluate our model on images rendered from 3D object models as well as real and synthesized scenes. We demonstrate that our model is able to achieve state-of-the-art results as well as progressively improve its predictions when more source images are available.`,
    bgImage: "",
  },
  {
    id: 48,
    date: "July 03, 2018",
    title:
      "Deep Volumetric Video From Very Sparse Multi-View Performance Capture",
    description: `<p><b>Abstract:</b> We present a deep learning based volumetric approach for performance capture using a passive and highly sparse multi-view capture system. State-of-the-art performance capture systems require either prescanned actors, large number of cameras or active sensors. In this work, we focus on the task of template-free, per-frame 3D surface reconstruction from as few as three RGB sensors, for which conventional visual hull or multi-view stereo methods fail to generate plausible results. We introduce a novel multi-view Convolutional Neural Network (CNN) that maps 2D
    images to a 3D volumetric field and we use this field to encode the probabilistic distribution of surface points of the captured subject. By querying the resulting field, we can instantiate the clothed human body at arbitrary resolutions. Our approach scales to different numbers of input images, which yield increased reconstruction quality when more views are used. Although only trained on synthetic data, our network can generalize to handle real footage from body performance capture. Our method is suitable for high-quality low-cost full body volumetric capture solutions, which are gaining popularity for VR and AR content creation. Experimental results demonstrate that our method is significantly more robust and accurate than existing techniques when only very sparse views are available.</p>`,
    authors:
      "Zeng Huang, Tianye Li, Weikai Chen, Yajie Zhao, Jun Xing, Chloe LeGendre, Linjie Luo, Chongyang Ma, Hao Li",
    eventID: 47,
    researchArea: "Computer Graphics",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/1LFW8RnkmosDhkwjVnkU3i/e8228da503afe2e22b50d9e1333beedb/Zeng_Huang_Deep_Volumetric_Video_ECCV_2018_paper.pdf",
    metadescription: `We present a deep learning based volumetric approach for performance capture using a passive and highly sparse multi-view capture system. State-of-the-art performance capture systems require either prescanned actors, large number of cameras or active sensors. In this work, we focus on the task of template-free, per-frame 3D surface reconstruction from as few as three RGB sensors, for which conventional visual hull or multi-view stereo methods fail to generate plausible results. We introduce a novel multi-view Convolutional Neural Network (CNN) that maps 2D images to a 3D volumetric field and we use this field to encode the probabilistic distribution of surface points of the captured subject. By querying the resulting field, we can instantiate the clothed human body at arbitrary resolutions. Our approach scales to different numbers of input images, which yield increased reconstruction quality when more views are used. Although only trained on synthetic data, our network can generalize to handle real footage from body performance capture. Our method is suitable for high-quality low-cost full body volumetric capture solutions, which are gaining popularity for VR and AR content creation. Experimental results demonstrate that our method is significantly more robust and accurate than existing techniques when only very sparse views are available.`,
    bgImage: "",
  },
  {
    id: 49,
    date: "July 08, 2018",
    title:
      "Attention-based Multi-Patch Aggregation for Image Aesthetic Assessment",
    description: `<p><b>Abstract:</b> Aggregation structures with explicit information, such as image attributes and scene semantics, are effective and popular for intelligent systems for assessing aesthetics of visual data. However, useful information may not be available due to the high cost of manual annotation and expert design. In this paper, we present a
    novel multi-patch (MP) aggregation method for image aesthetic assessment. Different from state-of-the-art methods, which augment an MP aggregation network with various visual attributes, we train the model in an end-to-end manner with aesthetic labels only (i.e., aesthetically positive or negative). We achieve the goal by resorting to an attention-based mechanism that adaptively adjusts the weight of each patch during the training process to improve learning efficiency. In addition, we propose a set of objectives with three typical attention mechanisms (i.e., average, minimum, and adaptive) and evaluate their effectiveness on the Aesthetic Visual Analysis (AVA) benchmark. Numerical results show that our approach outperforms existing methods by a large margin. We further verify the effectiveness of the proposed attention-based
    objectives via ablation studies and shed light on the design of aesthetic assessment systems.</p>`,
    authors:
      "Kekai Sheng, Weiming Dong, Chongyang Ma, Xing Mei, Feiyue Huang, Bao-Gang Hu",
    eventID: 49,
    researchArea: "Computer Graphics",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/479XINpkJXbqZ8OFhLw75h/39e6e24df2c79feab7e1bb92811d69e3/2018_am_paper.pdf",
    metadescription: `Aggregation structures with explicit information, such as image attributes and scene semantics, are effective and popular for intelligent systems for assessing aesthetics of visual data. However, useful information may not be available due to the high cost of manual annotation and expert design. In this paper, we present a novel multi-patch (MP) aggregation method for image aesthetic assessment. Different from state-of-the-art methods, which augment an MP aggregation network with various visual attributes, we train the model in an end-to-end manner with aesthetic labels only (i.e., aesthetically positive or negative). We achieve the goal by resorting to an attention-based mechanism that adaptively adjusts the weight of each patch during the training process to improve learning efficiency. In addition, we propose a set of objectives with three typical attention mechanisms (i.e., average, minimum, and adaptive) and evaluate their effectiveness on the Aesthetic Visual Analysis (AVA) benchmark. Numerical results show that our approach outperforms existing methods by a large margin. We further verify the effectiveness of the proposed attention-based objectives via ablation studies and shed light on the design of aesthetic assessment systems.`,
    bgImage: "",
  },
  {
    id: 50,
    date: "July 08, 2018",
    title: "SibNet: Sibling Convolutional Encoder for Video Captioning",
    description: `<p><b>Abstract:</b> Video captioning is a challenging task owing to the complexity of understanding the copious visual information in videos and describing it using natural language. Different from previous work that encodes video information using a single flow, in this work, we introduce a novel Sibling Convolutional Encoder (SibNet) for video captioning, which utilizes a two-branch architecture to collaboratively encode videos. The first content branch encodes the visual content information of the video via autoencoder, and the second semantic branch encodes the semantic information by visual-semantic joint embedding. Then both branches are effectively combined with
    soft-attention mechanism and finally fed into a RNN decoder to generate captions. With our SibNet explicitly capturing both content and semantic information, the proposed method can better represent the rich information in videos. Extensive experiments on YouTube2Text and MSR-VTT datasets validate that the proposed architecture outperforms existing methods by a large margin across different evaluation metrics.</p><p><i><b>Keywords:</b></i><i> video captioning, visual-semantic joint embedding, autoencoder</i></p>`,
    authors: "Sheng Liu, Zhou Ren, Junsong Yuan",
    eventID: 50,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6bgJ30w7u0ZXx4KellsqiB/f13338cbb60ca1fc3aced401c17bb210/SibNet-_Sibling_Convolutional_Encoder_for_Video_Captioning.pdf",
    metadescription: `Video captioning is a challenging task owing to the complexity of understanding the copious visual information in videos and describing it using natural language. Different from previous work that encodes video information using a single flow, in this work, we introduce a novel Sibling Convolutional Encoder (SibNet) for video captioning, which utilizes a two-branch architecture to collaboratively encode videos. The first content branch encodes the visual content information of the video via autoencoder, and the second semantic branch encodes the semantic information by visual-semantic joint embedding. Then both branches are effectively combined with soft-attention mechanism and finally fed into a RNN decoder to generate captions. With our SibNet explicitly capturing both content and semantic information, the proposed method can better represent the rich information in videos. Extensive experiments on YouTube2Text and MSR-VTT datasets validate that the proposed architecture outperforms existing methods by a large margin across different evaluation metrics.`,
    bgImage: "",
  },
  {
    id: 51,
    date: "July 22, 2018",
    title:
      "Monocular Depth Estimation via Deep Structured Models with Ordinal Constraints",
    description: `<p><b>Abstract:</b> User interaction provides useful information for solving challenging computer vision problems in practice. In this paper, we show that a very limited number of user clicks could greatly boost monocular depth estimation performance and overcome monocular ambiguities. We formulate this task as a deep structured model, in which the structured pixelwise depth estimation has ordinal constraints introduced
    by user clicks. We show that the inference of the proposed model could be efficiently solved through a feed-forward network. We demonstrate the effectiveness of the proposed model on NYU Depth V2 and Stanford 2D-3D datasets. On both datasets, we achieve state-of-the-art performance when encoding user interaction into our deep models.</p>`,
    authors:
      "Daniel Ron, Kun Duan, Chongyang Ma, Ning Xu, Shenlong Wang, Sumant Hanumante, Dhritiman Sagar",
    eventID: 51,
    researchArea: "Computer Vision, Deep Learning, Computer Graphics",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/ZB1MPHghBoYFD3kmaWrlS/e8b3efc388447959ddef2c51e477e4e0/2018_md_paper.pdf",
    metadescription: `User interaction provides useful information for solving challenging computer vision problems in practice. In this paper, we show that a very limited number of user clicks could greatly boost monocular depth estimation performance and overcome monocular ambiguities. We formulate this task as a deep structured model, in which the structured pixelwise depth estimation has ordinal constraints introduced by user clicks. We show that the inference of the proposed model could be efficiently solved through a feed-forward network. We demonstrate the effectiveness of the proposed model on NYU Depth V2 and Stanford 2D-3D datasets. On both datasets, we achieve state-of-the-art performance when encoding user interaction into our deep models.`,
    bgImage: "",
  },
  {
    id: 52,
    date: "July 22, 2018",
    title: "Point-to-Point Regression PointNet for 3D Hand Pose Estimation",
    description: `<p><b>Abstract: </b>Convolutional Neural Networks (CNNs)-based methods for 3D hand pose estimation with depth cameras usually take 2D depth images as input and directly regress holistic 3D hand pose. Different from these methods, our proposed Point-to-Point Regression PointNet directly takes the 3D point cloud as input and outputs point-wise estimations, i.e., heat-maps and unit vector fields on the point cloud, representing the closeness and direction from every point in the point cloud to the hand joint. The point-wise estimations are used to infer 3D joint locations with weighted fusion. To better capture 3D spatial information in the point cloud, we apply a stacked network architecture for PointNet with intermediate supervision, which is trained end-to-end. Experiments show that our method can achieve outstanding results when compared with state-of-the-art methods on three challenging hand pose datasets.</p><p><i><b>Keywords:</b></i><i> 3D Hand Pose Estimation</i></p>`,
    authors: "Liuhao Ge, Zhou Ren, Junsong Yuan",
    eventID: 47,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/52u5EYd1NeFQRW8xAa4IC2/ec4c886db43fc1b0931a27668e27d72a/Liuhao_Ge_Point-to-Point_Regression_PointNet_ECCV_2018_paper.pdf",
    metadescription: `Convolutional Neural Networks (CNNs)-based methods for 3D hand pose estimation with depth cameras usually take 2D depth images as input and directly regress holistic 3D hand pose. Different from these methods, our proposed Point-to-Point Regression PointNet directly takes the 3D point cloud as input and outputs point-wise estimations, i.e., heat-maps and unit vector fields on the point cloud, representing the closeness and direction from every point in the point cloud to the hand joint. The point-wise estimations are used to infer 3D joint locations with weighted fusion. To better capture 3D spatial information in the point cloud, we apply a stacked network architecture for PointNet with intermediate supervision, which is trained end-to-end. Experiments show that our method can achieve outstanding results when compared with state-of-the-art methods on three challenging hand pose datasets.`,
    bgImage: "",
  },
  {
    id: 53,
    date: "July 26, 2018",
    title: "StarMap for Category-Agnostic Keypoint and Viewpoint Estimation",
    description: `<p><b>Abstract: </b>Semantic keypoints provide concise abstractions for a variety of visual understanding tasks. Existing methods define semantic keypoints separately for each category with a fixed number of semantic labels in fixed indices. As a result, this keypoint representation is infeasible when objects have a varying number of parts, e.g. chairs with varying number of legs. We propose a category-agnostic keypoint representation, which combines a multi-peak heatmap (StarMap) for all the keypoints and their corresponding features as 3D locations in the canonical viewpoint (CanViewFeature) defined for each instance. Our intuition is that the 3D locations of the keypoints in canonical object views contain rich semantic and compositional information. Using our flexible representation, we demonstrate competitive performance in keypoint detection and localization compared to category-specific state-of-the-art methods. Moreover, we show that when augmented with an additional depth channel (DepthMap) to lift the 2D keypoints to 3D, our representation can achieve state-of-the-art results in viewpoint estimation. Finally, we show that our category-agnostic keypoint representation can be generalized to novel categories.</p><p><i><b>Keywords: </b></i><i>3D vision, Category-agnostic, Keypoint estimation, Viewpoint estimation, Pose estimation</i></p>`,
    authors: "Xingyi Zhou, Arjun Karpur, Linjie Luo, Qixing Huang",
    eventID: 47,
    researchArea: "Computer Graphics",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6AVoH2qSDaarajM3Vo9hWu/ac1c28b634778f975795765cde52640a/1803.09331.pdf",
    metadescription: `Semantic keypoints provide concise abstractions for a variety of visual understanding tasks. Existing methods define semantic keypoints separately for each category with a fixed number of semantic labels in fixed indices. As a result, this keypoint representation is infeasible when objects have a varying number of parts, e.g. chairs with varying number of legs. We propose a category-agnostic keypoint representation, which combines a multi-peak heatmap (StarMap) for all the keypoints and their corresponding features as 3D locations in the canonical viewpoint (CanViewFeature) defined for each instance. Our intuition is that the 3D locations of the keypoints in canonical object views contain rich semantic and compositional information. Using our flexible representation, we demonstrate competitive performance in keypoint detection and localization compared to category-specific state-of-the-art methods. Moreover, we show that when augmented with an additional depth channel (DepthMap) to lift the 2D keypoints to 3D, our representation can achieve state-of-the-art results in viewpoint estimation. Finally, we show that our category-agnostic keypoint representation can be generalized to novel categories.`,
    bgImage: "",
  },
  {
    id: 54,
    date: "July 26, 2018",
    title:
      "Unsupervised Domain Adaptation for 3D Keypoint Estimation via View Consistency",
    description: `<p><b>Abstract:</b> In this paper, we introduce a novel unsupervised domain adaptation technique for the task of 3D keypoint prediction from a single depth scan or image. Our key idea is to utilize the fact that predictions from different views of the same or similar objects should be consistent with each other. Such view consistency can provide effective regularization for keypoint prediction on unlabeled instances. In addition, we introduce a geometric alignment term to regularize predictions in the target domain. The resulting loss function can be effectively optimized via alternating minimization. We demonstrate the effectiveness of our approach on real datasets and present experimental results showing that our approach is superior to state-of-the-art general-purpose domain adaptation techniques.</p><p>
    <i><b>Keywords:</b></i><i> 3D Keypoint Estimation, Multi-View Consistency, Domain Adaptation, Unsupervised Learning</i></p>`,
    authors: "Xingyi Zhou, Arjun Karpur, Chuang Gan, Linjie Luo, Qixing Huang",
    eventID: 47,
    researchArea: "Computer Graphics",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/2fJOGw73flIrZDCVeDKCy/617adba375c3e6fb9d51224148a97633/1712.05765.pdf",
    metadescription: `In this paper, we introduce a novel unsupervised domain adaptation technique for the task of 3D keypoint prediction from a single depth scan or image. Our key idea is to utilize the fact that predictions from different views of the same or similar objects should be consistent with each other. Such view consistency can provide effective regularization for keypoint prediction on unlabeled instances. In addition, we introduce a geometric alignment term to regularize predictions in the target domain. The resulting loss function can be effectively optimized via alternating minimization. We demonstrate the effectiveness of our approach on real datasets and present experimental results showing that our approach is superior to state-of-the-art general-purpose domain adaptation techniques.`,
    bgImage: "",
  },
  {
    id: 55,
    date: "August 01, 2018",
    title:
      "Did We Get It Right? Predicting Query Performance in E-Commerce Search",
    description: `<p><b>Abstract</b>: In this paper, we address the problem of evaluating whether results
    served by an e-commerce search engine for a query are good or not. This is a critical question in evaluating any e-commerce search engine. While this question is traditionally answered using simple metrics like query click-through rate (CTR), we observe that in ecommerce search, such metrics can be misleading. Upon inspection, we find cases where CTR is high but the results are poor and vice versa. Similar cases exist for other metrics like time to click which are often also used for evaluating search engines.</p><p>We aim to learn the quality of the results served by the search engine based on users’ interactions with the results. Although this problem has been studied in the web search context, this is the first study for e-commerce search, to the best of our knowledge. Despite certain commonalities with evaluating web search engines, there are several major differences such as underlying reasons for search failure, and availability of rich user interaction data with products (e.g. adding a product to the cart). We study largescale user interaction logs from Flipkart’s search engine, analyze behavioral patterns and build models to classify queries based on user behavior signals. We demonstrate the feasibility and efficacy of such models in accurately predicting query performance. Our classifier is able to achieve an average AUC of 0.75 on a held-out
    test set.</p>`,
    authors: "Rohan Kumar, Mohit Kumar, Neil Shah, Christos Faloutsos",
    eventID: 55,
    researchArea: "Data Mining, Natural Language Processing",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5rOoNvAsWCTScuiYKSYFa3/396a25a67f0feeda9e54e592090688cb/1808.00239.pdf",
    metadescription: `In this paper, we address the problem of evaluating whether results served by an e-commerce search engine for a query are good or not. This is a critical question in evaluating any e-commerce search engine. While this question is traditionally answered using simple metrics like query click-through rate (CTR), we observe that in ecommerce search, such metrics can be misleading. Upon inspection, we find cases where CTR is high but the results are poor and vice versa. Similar cases exist for other metrics like time to click which are often also used for evaluating search engines.`,
    bgImage: "",
  },
  {
    id: 56,
    date: "August 01, 2018",
    title:
      "The rippling dynamics of valenced messages in naturalistic youth chat",
    description: `<p><b>Abstract:</b> Even though human behavior is largely driven by real-time feedback from others, this social complexity is underrepresented in psychological theory, largely because it is so difficult to isolate. In this work, we performed a quasi-experimental analysis of hundreds of millions of chat room messages between young people. This allowed us to reconstruct how—and on what timeline—the valence of one message affects the valence of subsequent messages by others. For the highly emotionally valenced chat messages that we focused on, we found that these messages elicited a general increase of 0.1 to 0.4 messages per minute. This influence started 2 s after the original message and continued out to 60 s. Expanding our focus to include feedback loops—the way a speaker’s chat comes back to affect him or her—we found that the stimulating effects of these same chat events started rippling back from others 8 s after the original message, to cause an increase in the speaker’s chat that persisted for up to 8 min. This feedback accounted for at least 1% of the bulk of chat. Additionally, a message’s valence affects its dynamics, with negative events feeding back more slowly and continuing to affect the speaker longer. By reconstructing the second-by-second dynamics of many psychosocial processes in aggregate, we captured the timescales at which they collectively ripple through a social system to drive system-level outcomes.</p>`,
    authors:
      "Seth Frey, Karsten Donnay, Dirk Helbing, Robert W. Sumner, Maarten Bos",
    eventID: 56,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3CWJ2lbw2XEcMKNKOXzvYa/cb6144419d34b0509c2a48cfadd04b93/The_rippling_dynamics.pdf",
    metadescription: `Even though human behavior is largely driven by real-time feedback from others, this social complexity is underrepresented in psychological theory, largely because it is so difficult to isolate. In this work, we performed a quasi-experimental analysis of hundreds of millions of chat room messages between young people. This allowed us to reconstruct how—and on what timeline—the valence of one message affects the valence of subsequent messages by others. For the highly emotionally valenced chat messages that we focused on, we found that these messages elicited a general increase of 0.1 to 0.4 messages per minute. This influence started 2 s after the original message and continued out to 60 s. Expanding our focus to include feedback loops—the way a speaker’s chat comes back to affect him or her—we found that the stimulating effects of these same chat events started rippling back from others 8 s after the original message, to cause an increase in the speaker’s chat that persisted for up to 8 min. This feedback accounted for at least 1% of the bulk of chat. Additionally, a message’s valence affects its dynamics, with negative events feeding back more slowly and continuing to affect the speaker longer. By reconstructing the second-by-second dynamics of many psychosocial processes in aggregate, we captured the timescales at which they collectively ripple through a social system to drive system-level outcomes.`,
    bgImage: "",
  },
  {
    id: 57,
    date: "August 10, 2018",
    title:
      "Improving Multi-label Emotion Classification via Sentiment Classification with Dual Attention Transfer Network",
    description: `<p><b>Abstract:</b> In this paper, we target at improving the performance of multi-label emotion classification with the help of sentiment classification. Specifically, we propose a new transfer learning architecture to divide the sentence representation into two different feature spaces, which are expected to respectively capture the general sentiment words and the other important emotion-specific words via a dual attention mechanism. Extensive experimental results demonstrate that our transfer learning approach can outperform several strong baselines and achieve the state-of-the-art performance on two benchmark datasets.</p>`,
    authors:
      "Jianfei Yu, Luis Marujo, Jing Jiang, Pradeep Karuturi, William Brendel",
    eventID: 57,
    researchArea: "Deep Learning, Natural Language Processing",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3yAO78yserPSAIKjAKwasn/30a360f3f18a2481e09705200e71c972/D18-1137.pdf",
    metadescription: `In this paper, we target at improving the performance of multi-label emotion classification with the help of sentiment classification. Specifically, we propose a new transfer learning architecture to divide the sentence representation into two different feature spaces, which are expected to respectively capture the general sentiment words and the other important emotion-specific words via a dual attention mechanism. Extensive experimental results demonstrate that our transfer learning approach can outperform several strong baselines and achieve the state-of-the-art performance on two benchmark datasets.`,
    bgImage: "",
  },
  {
    id: 58,
    date: "August 14, 2018",
    title:
      "False Discovery Rate Controlled Heterogeneous Treatment Effect Detection for Online Controlled Experiments",
    description: `<p><b>Abstract: 
    </b>Online controlled experiments (a.k.a. A/B testing) have been used as the mantra for data-driven decision making on feature changing and product shipping in many Internet companies. However, it is still a great challenge to systematically measure how every code or feature change impacts millions of users with great heterogeneit (e.g. countries, ages, devices). The most commonly used A/B testing framework in many companies is based on Average Treatment Effect (ATE), which cannot detect the heterogeneity of treatment effect on users with different characteristics. In this paper, we propose statistical methods that can systematically and accurately identify Heterogeneous Treatment Effect (HTE) of any user cohort of interest (e.g. mobile device type, country), and determine which factors (e.g. age, gender) of users contribute to the heterogeneity of the treatment effect in an A/B test. By applying these methods on both simulation data and real-world experimentation data, we show how they work robustly with controlled low False Discover Rate (FDR), and at the same time, provides us with useful insights about the heterogeneity of identified user groups. We have deployed a toolkit based on these methods, and have used it to measure the Heterogeneous Treatment Effect of many A/B tests at Snap.</p><p><b><i>Keywords</i></b><i>:A/B testing, multiple testing, Heterogeneous Treatment Effect, False Discovery Rate</i></p>`,
    authors: "Yuxiang Xie, Nanyu Chen, Xiaolin Shi",
    eventID: 58,
    researchArea: "Data Mining, Data Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/TXGeR1p3JA91ikUtROjp1/5246363f1772b569f8181afd41274ee5/False_Discovery_Rate_Controlled_Heterogeneous_Treatment_Effect_Detection_for_Online_Controlled_Experiments.pdf",
    metadescription: `Online controlled experiments (a.k.a. A/B testing) have been used as the mantra for data-driven decision making on feature changing and product shipping in many Internet companies. However, it is still a great challenge to systematically measure how every code or feature change impacts millions of users with great heterogeneit (e.g. countries, ages, devices). The most commonly used A/B testing framework in many companies is based on Average Treatment Effect (ATE), which cannot detect the heterogeneity of treatment effect on users with different characteristics. In this paper, we propose statistical methods that can systematically and accurately identify Heterogeneous Treatment Effect (HTE) of any user cohort of interest (e.g. mobile device type, country), and determine which factors (e.g. age, gender) of users contribute to the heterogeneity of the treatment effect in an A/B test. By applying these methods on both simulation data and real-world experimentation data, we show how they work robustly with controlled low False Discover Rate (FDR), and at the same time, provides us with useful insights about the heterogeneity of identified user groups. We have deployed a toolkit based on these methods, and have used it to measure the Heterogeneous Treatment Effect of many A/B tests at Snap.`,
    bgImage: "",
  },
  {
    id: 59,
    date: "August 23, 2018",
    title: "Deep Regionlets for Object Detection",
    description: `<p><b>Abstract: </b>In this paper, we propose a novel object detection framework named "Deep Regionlets" by establishing a bridge between deep neural networks and conventional detection schema for accurate generic object detection. Motivated by the abilities of regionlets for modeling object deformation and multiple aspect ratios, we incorporate regionlets into an end-to-end trainable deep learning framework. The deep regionlets framework consists of a region selection network and a deep regionlet learning module. Specifically, given a detection bounding box proposal, the region selection network provides guidance on where to select regions to learn the features from. The regionlet learning module focuses on local feature selection and transformation to alleviate local variations. To this end, we first realize non-rectangular region selection within the detection framework to accommodate variations in object appearance. Moreover, we design a “gating network" within the regionlet leaning module to enable soft regionlet selection and pooling. The Deep Regionlets framework is trained end-to-end without additional efforts. We perform ablation studies and conduct extensive experiments on the PASCAL VOC and Microsoft COCO datasets. The proposed framework outperforms state-of-theart algorithms, such as RetinaNet and Mask R-CNN, even without additional segmentation labels.</p>`,
    authors:
      "Hongyu Xu, Xutao Lv, Xiaoyu Wang, Zhou Ren, Navaneeth Bodla, Rama Chellappa",
    eventID: 47,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/60xl85Ew6HXlmucab5wwoE/b28f502b289fde40b392f2ed70aa7f6e/1712.02408.pdf",
    metadescription: `In this paper, we propose a novel object detection framework named "Deep Regionlets" by establishing a bridge between deep neural networks and conventional detection schema for accurate generic object detection. Motivated by the abilities of regionlets for modeling object deformation and multiple aspect ratios, we incorporate regionlets into an end-to-end trainable deep learning framework. The deep regionlets framework consists of a region selection network and a deep regionlet learning module. Specifically, given a detection bounding box proposal, the region selection network provides guidance on where to select regions to learn the features from. The regionlet learning module focuses on local feature selection and transformation to alleviate local variations. To this end, we first realize non-rectangular region selection within the detection framework to accommodate variations in object appearance. Moreover, we design a “gating network" within the regionlet leaning module to enable soft regionlet selection and pooling. The Deep Regionlets framework is trained end-to-end without additional efforts. We perform ablation studies and conduct extensive experiments on the PASCAL VOC and Microsoft COCO datasets. The proposed framework outperforms state-of-theart algorithms, such as RetinaNet and Mask R-CNN, even without additional segmentation labels.`,
    bgImage: "",
  },
  {
    id: 60,
    date: "August 30, 2018",
    title:
      "Stabilized Real-time Face Tracking via a Learned Dynamic Rigidity Prior",
    description: `<p><b>Abstract: </b>Despite the popularity of real-time monocular face tracking systems in many successful applications, one overlooked problem with these systems is rigid instability. It occurs when the input facial motion can be explained by either head pose change or facial expression change, creating ambiguities that often lead to jittery and unstable rigid head poses under large expressions. Existing rigid stabilization methods either employ a heavy anatomically-motivated approach that are unsuitable for real-time applications, or utilize heuristicbased rules that can be problematic under certain expressions. We propose the first rigid stabilization method for real-time monocular face tracking using a dynamic rigidity prior learned from realistic datasets. The prior is defined on a region-based face model and provides dynamic region-based adaptivity for rigid pose optimization during real-time performance. We introduce an effective offline training scheme to learn the dynamic rigidity prior by optimizing the convergence of the rigid pose optimization to the ground-truth poses in the training data. Our real-time face tracking system is an optimization framework that alternates between rigid pose optimization and expression optimization. To ensure tracking accuracy, we combine both robust, drift-free facial landmarks and dense optical flow into the optimization objectives. We evaluate our system extensively against state-of-the-art monocular face tracking systems and achieve significant improvement in tracking accuracy on the high-quality face tracking benchmark. Our system can improve facial-performance-based applications such as facial animation retargeting and virtual face makeup with accurate expression and stable pose. We further validate the dynamic rigidity prior by comparing it against
    other variants on the tracking accuracy.</p>`,
    authors: "Chen Cao, Menglei Chai, Oliver Woodford, Linjie Luo",
    eventID: 60,
    researchArea: "Computer Graphics",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/66J2TpG6oPvpmZ03eveVJk/095616d81b6a6f2e881e6222ced41d9a/18-SIGA-StabilizedRealtimeFaceTrackingViaALearnedDynamicRigidityPrior.pdf",
    metadescription: `Despite the popularity of real-time monocular face tracking systems in many successful applications, one overlooked problem with these systems is rigid instability. It occurs when the input facial motion can be explained by either head pose change or facial expression change, creating ambiguities that often lead to jittery and unstable rigid head poses under large expressions. Existing rigid stabilization methods either employ a heavy anatomically-motivated approach that are unsuitable for real-time applications, or utilize heuristicbased rules that can be problematic under certain expressions. We propose the first rigid stabilization method for real-time monocular face tracking using a dynamic rigidity prior learned from realistic datasets. The prior is defined on a region-based face model and provides dynamic region-based adaptivity for rigid pose optimization during real-time performance. We introduce an effective offline training scheme to learn the dynamic rigidity prior by optimizing the convergence of the rigid pose optimization to the ground-truth poses in the training data. Our real-time face tracking system is an optimization framework that alternates between rigid pose optimization and expression optimization. To ensure tracking accuracy, we combine both robust, drift-free facial landmarks and dense optical flow into the optimization objectives. We evaluate our system extensively against state-of-the-art monocular face tracking systems and achieve significant improvement in tracking accuracy on the high-quality face tracking benchmark. Our system can improve facial-performance-based applications such as facial animation retargeting and virtual face makeup with accurate expression and stable pose. We further validate the dynamic rigidity prior by comparing it against other variants on the tracking accuracy`,
    bgImage: "",
  },
  {
    id: 61,
    date: "August 30, 2018",
    title: "3D Hair Synthesis Using Volumetric Variational Autoencoders",
    description: `<p><b>Abstract: </b>Recent advances in single-view 3D hair digitization have made the creation of high-quality CG characters scalable and accessible to end-users, enabling new forms of personalized VR and gaming experiences. To handle the complexity and variety of hair structures, most cutting-edge techniques rely on the successful retrieval of a particular hair model from a comprehensive hair database. Not only are the aforementioned data-driven methods storage intensive, but they are also prone to failure for highly unconstrained input images, complicated hairstyles, and failed face detection. Instead of using a large collection of 3D hair models directly, we propose to represent the manifold of 3D hairstyles implicitly through a compact latent space of a volumetric variational autoencoder (VAE). This deep neural network is trained with volumetric orientation field representations of 3D hair models and can synthesize new hairstyles from a compressed code. To enable end-to-end 3D hair inference, we train an additional embedding network to predict the code in the VAE latent space from any input image. Strand-level hairstyles can then be generated from the predicted volumetric representation. Our fully automatic framework does not require any ad-hoc face fitting, intermediate classification and segmentation, or hairstyle database retrieval. Our hair synthesis approach is significantly more robust and can handle a much wider variation of hairstyles than state-of-the-art data-driven hair modeling techniques with challenging inputs, including photos that are low-resolution, overexposured, or contain extreme head poses. The storage requirements are minimal and a 3D hair model can be produced from an image in a second. Our evaluations also show that successful reconstructions are possible from highly stylized cartoon images, non-human subjects, and pictures taken from behind a person. Our approach is particularly well suited for continuous and plausible hair interpolation between very di"erent hairstyles.</p>`,
    authors: "Shunsuke Saito, Liwen Hu, Chongyang Ma, Linjie Luo, Hao Li",
    eventID: 60,
    researchArea: "Computer Graphics",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/5M2DjmdLBOKPkUbiYYNdFh/d3c1367e2acb4b5c6fbb9f240f0ba9e0/18-SIGA-3DHairSynthesisUsingVolumetricVAEs.pdf",
    metadescription: `Recent advances in single-view 3D hair digitization have made the creation of high-quality CG characters scalable and accessible to end-users, enabling new forms of personalized VR and gaming experiences. To handle the complexity and variety of hair structures, most cutting-edge techniques rely on the successful retrieval of a particular hair model from a comprehensive hair database. Not only are the aforementioned data-driven methods storage intensive, but they are also prone to failure for highly unconstrained input images, complicated hairstyles, and failed face detection. Instead of using a large collection of 3D hair models directly, we propose to represent the manifold of 3D hairstyles implicitly through a compact latent space of a volumetric variational autoencoder (VAE). This deep neural network is trained with volumetric orientation field representations of 3D hair models and can synthesize new hairstyles from a compressed code. To enable end-to-end 3D hair inference, we train an additional embedding network to predict the code in the VAE latent space from any input image. Strand-level hairstyles can then be generated from the predicted volumetric representation. Our fully automatic framework does not require any ad-hoc face fitting, intermediate classification and segmentation, or hairstyle database retrieval. Our hair synthesis approach is significantly more robust and can handle a much wider variation of hairstyles than state-of-the-art data-driven hair modeling techniques with challenging inputs, including photos that are low-resolution, overexposured, or contain extreme head poses. The storage requirements are minimal and a 3D hair model can be produced from an image in a second. Our evaluations also show that successful reconstructions are possible from highly stylized cartoon images, non-human subjects, and pictures taken from behind a person. Our approach is particularly well suited for continuous and plausible hair interpolation between very di"erent hairstyles.`,
    bgImage: "",
  },
  {
    id: 62,
    date: "September 03, 2018",
    title: "YouTube-VOS: Sequence-to-Sequence Video Object Segmentation",
    description: `<p><b>Abstract:</b> Learning long-term spatial-temporal features are critical for many video analysis tasks. However, existing video segmentation methods predominantly rely on static image segmentation techniques, and methods capturing temporal dependency for segmentation have to depend on pretrained optical flow models, leading to suboptimal solutions for the problem. End-to-end sequential learning to explore spatialtemporal features for video segmentation is largely limited by the scale of available video segmentation datasets, i.e., even the largest video segmentation dataset only contains 90 short video clips. To solve this problem, we build a new large-scale video object segmentation dataset called YouTube Video Object Segmentation dataset (YouTube-VOS). Our dataset contains 3,252 YouTube video clips and 78 categories including common objects and human activities4. This is by far the largest  video object segmentation dataset to our knowledge and we have released it at https://youtube-vos.org. Based on this dataset, we propose a novel sequence-to-sequence network to fully exploit long-term spatial-temporal information in videos for segmentation. We demonstrate that our method is able to achieve the best results on our YouTube-VOS test set and comparable results on DAVIS 2016 compared to the current state-of-the-art methods. Experiments show that the large scale dataset is indeed a key factor to the success of our model.</p><p><i><b>Keywords: </b></i><i>Video Object Segmentation, Large-scale Dataset, SpatialTemporal Information.</i></p>`,
    authors:
      "Ning Xu, Linjie Yang, Yuchen Fan, Jianchao Yang, Dingcheng Yue, Yuchen Liang, Brian Price, Scott Cohen, Thomas Huang",
    eventID: 47,
    researchArea: "Computer Vision, Deep Learning",
    PDFLink: "",
    metadescription: `Learning long-term spatial-temporal features are critical for many video analysis tasks. However, existing video segmentation methods predominantly rely on static image segmentation techniques, and methods capturing temporal dependency for segmentation have to depend on pretrained optical flow models, leading to suboptimal solutions for the problem. End-to-end sequential learning to explore spatialtemporal features for video segmentation is largely limited by the scale of available video segmentation datasets, i.e., even the largest video segmentation dataset only contains 90 short video clips. To solve this problem, we build a new large-scale video object segmentation dataset called YouTube Video Object Segmentation dataset (YouTube-VOS). Our dataset contains 3,252 YouTube video clips and 78 categories including common objects and human activities4. This is by far the largest video object segmentation dataset to our knowledge and we have released it at https://youtube-vos.org. Based on this dataset, we propose a novel sequence-to-sequence network to fully exploit long-term spatial-temporal information in videos for segmentation. We demonstrate that our method is able to achieve the best results on our YouTube-VOS test set and comparable results on DAVIS 2016 compared to the current state-of-the-art methods. Experiments show that the large scale dataset is indeed a key factor to the success of our model.`,
    bgImage: "",
  },
  {
    id: 63,
    date: "September 05, 2018",
    title: "Representer Point Selection for Explaining Deep Neural Networks",
    description: `<p><b>Abstract:</b> We propose to explain the predictions of a deep neural network, by pointing to the set of what we call<i> representer points</i> in the training set, for a given test point prediction. Specifically, we show that we can decompose the pre-activation prediction of a neural network into a linear combination of activations of training points, with the weights corresponding to what we call representer values, which thus capture the importance of that training point on the learned parameters of the network. But it provides a deeper understanding of the network than simply training point influence: with positive representer values corresponding to excitatory training points, and negative values corresponding to inhibitory points, which as we show provides considerably more insight. Our method is also much more scalable, allowing for real-time feedback in a manner not feasible with influence functions.</p>`,
    authors: "Chih-Kuan Yeh, Joon Sik Kim, Ian Enxu Yan, Pradeep Ravikumar",
    eventID: 63,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/mOhtqsVk8wIvKLsTZd6Ut/acb72e10b34e63a18deeded50e870168/8141-representer-point-selection-for-explaining-deep-neural-networks.pdf",
    metadescription: `We propose to explain the predictions of a deep neural network, by pointing to the set of what we call representer points in the training set, for a given test point prediction. Specifically, we show that we can decompose the pre-activation prediction of a neural network into a linear combination of activations of training points, with the weights corresponding to what we call representer values, which thus capture the importance of that training point on the learned parameters of the network. But it provides a deeper understanding of the network than simply training point influence: with positive representer values corresponding to excitatory training points, and negative values corresponding to inhibitory points, which as we show provides considerably more insight. Our method is also much more scalable, allowing for real-time feedback in a manner not feasible with influence functions`,
    bgImage: "",
  },
  {
    id: 64,
    date: "September 05, 2018",
    title:
      "MixLasso: Generalized Mixed Regression via Convex Atomic-Norm Regularization",
    description: `<p><b>Abstract:</b> We consider a generalization of mixed regression where the response is an additive combination of several mixture components. Standard mixed regression is a special case where each response is generated from exactly one component. Typical
    approaches to the mixture regression problem employ local search methods such as Expectation Maximization (EM) that are prone to spurious local optima. On the other hand, a number of recent theoretically-motivated Tensor-based methods either have high sample complexity, or require the knowledge of the input distribution, which is not available in most of practical situations. In this work, we study a novel convex estimator MixLasso for the estimation of generalized mixed regression, based on an atomic norm specifically constructed to regularize the number of
    mixture components. Our algorithm gives a risk bound that trades off between prediction accuracy and model sparsity without imposing stringent assumptions on the input/output distribution, and can be easily adapted to the case of non-linear functions. In our numerical experiments on mixtures of linear as well as nonlinear regressions, the proposed method yields high-quality solutions in a wider range of settings than existing approaches.</p>`,
    authors: "Ian Enxu Yan, Wei-Cheng Lee, Sung-Eun Chang, Kai Zhong",
    eventID: 63,
    researchArea: "Deep Learning",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5o1dTqZhBCiYyMFXIa9p8S/8e101d46ef8d513c500895ef24a150dd/8284-mixlasso-generalized-mixed-regression-via-convex-atomic-norm-regularization.pdf",
    metadescription: `We consider a generalization of mixed regression where the response is an additive combination of several mixture components. Standard mixed regression is a special case where each response is generated from exactly one component. Typical approaches to the mixture regression problem employ local search methods such as Expectation Maximization (EM) that are prone to spurious local optima. On the other hand, a number of recent theoretically-motivated Tensor-based methods either have high sample complexity, or require the knowledge of the input distribution, which is not available in most of practical situations. In this work, we study a novel convex estimator MixLasso for the estimation of generalized mixed regression, based on an atomic norm specifically constructed to regularize the number of mixture components. Our algorithm gives a risk bound that trades off between prediction accuracy and model sparsity without imposing stringent assumptions on the input/output distribution, and can be easily adapted to the case of non-linear functions. In our numerical experiments on mixtures of linear as well as nonlinear regressions, the proposed method yields high-quality solutions in a wider range of settings than existing approaches.`,
    bgImage: "",
  },
  {
    id: 65,
    date: "December 04, 2018",
    title:
      "Gourmet photography dataset for aesthetic assessment of food images",
    description: `<p><b>Abstract:  </b>In this study, we present the Gourmet Photography Dataset (GPD), which is the first large-scale dataset for aesthetic assessment of food photographs. We collect 12,000 food images together with human-annotated labels (i.e., aesthetically positive or negative) to build this dataset. We evaluate the performance of several popular machine learning algorithms for aesthetic assessment of food images to verify the effectiveness and importance of our GPD dataset. Experimental results show that deep convolutional neural networks trained on GPD can achieve comparable performance with human experts in this task, even on unseen food photographs. Our experiments also provide insights to support further study and applications related to visual analysis of food images.</p>`,
    authors:
      "Kekai Sheng, Weiming Dong, Haibin Huang, Chongyang Ma, Bao-Gang Hu",
    eventID: 60,
    researchArea: "Computer Graphics, Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4chHzQzmyzP03kugkOmodw/f1122291efbb580d231e28a0ff6decb6/Gourmet_Photography_Dataset.pdf",
    metadescription: `In this study, we present the Gourmet Photography Dataset (GPD), which is the first large-scale dataset for aesthetic assessment of food photographs. We collect 12,000 food images together with human-annotated labels (i.e., aesthetically positive or negative) to build this dataset. We evaluate the performance of several popular machine learning algorithms for aesthetic assessment of food images to verify the effectiveness and importance of our GPD dataset. Experimental results show that deep convolutional neural networks trained on GPD can achieve comparable performance with human experts in this task, even on unseen food photographs. Our experiments also provide insights to support further study and applications related to visual analysis of food images.`,
    bgImage: "",
  },
  {
    id: 66,
    date: "January 09, 2019",
    title: "Stereoscopic Dark Flash for Low-light Photography",
    description: `<p><b>Abstract: </b></p><p>In this work, we present a camera configuration for acquiring “stereoscopic dark flash” images: a simultaneous stereo pair in which one camera is a conventional RGB sensor, but the other camera is sensitive to near-infrared and near-ultraviolet instead of R and B. When paired with a “dark” flash (i.e., one having near-infrared and near-ultraviolet light, but no visible light) this camera allows us to capture the two images in a flash/no-flash image pair at the same time, all while not disturbing any human subjects or onlookers with a dazzling visible flash. We present a hardware prototype of this camera that approximates an idealized
    camera, and we present an imaging procedure that let us acquire dark flash stereo pairs that closely resemble those we would get from that idealized camera. We then present a technique for fusing these stereo pairs, first by performing registration and warping, and then by using recent advances in hyperspectral image fusion and deep learning to produce a final image. Because our camera configuration and our data acquisition process allow us to capture true low-noise long exposure RGB images alongside our dark flash stereo pairs, our learned model can be trained end-to-end to produce a fused image that retains the color and tone of a real RGB image while having the low-noise properties of a flash image. </p>`,
    authors: "Jian Wang, Tianfan Xue, Jonathan T. Barron, Jiawen Chen",
    eventID: 66,
    researchArea: "Computational Imaging",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3DW0eD98OAArrMjpXCmrVO/db13be7565edabe37c6027341d21fbfe/1901.01370.pdf",
    metadescription: `In this work, we present a camera configuration for acquiring “stereoscopic dark flash” images: a simultaneous stereo pair in which one camera is a conventional RGB sensor, but the other camera is sensitive to near-infrared and near-ultraviolet instead of R and B. When paired with a “dark” flash (i.e., one having near-infrared and near-ultraviolet light, but no visible light) this camera allows us to capture the two images in a flash/no-flash image pair at the same time, all while not disturbing any human subjects or onlookers with a dazzling visible flash. We present a hardware prototype of this camera that approximates an idealized camera, and we present an imaging procedure that let us acquire dark flash stereo pairs that closely resemble those we would get from that idealized camera. We then present a technique for fusing these stereo pairs, first by performing registration and warping, and then by using recent advances in hyperspectral image fusion and deep learning to produce a final image. Because our camera configuration and our data acquisition process allow us to capture true low-noise long exposure RGB images alongside our dark flash stereo pairs, our learned model can be trained end-to-end to produce a fused image that retains the color and tone of a real RGB image while having the low-noise properties of a flash image.`,
    bgImage: "",
  },
  {
    id: 67,
    date: "February 24, 2019",
    title: "3D Guided Fine-Grained Face Manipulation",
    description: `<p><b>Abstract: </b>We present a method for fine-grained face manipulation. Given a face image with an arbitrary expression, our method can synthesize another arbitrary expression by the same person. This is achieved by first fitting a 3D face model and then disentangling the face into a texture and a shape. We then learn different networks in these two spaces. In the texture space, we use a conditional generative network to change the appearance, and carefully design input formats and loss functions to achieve the best results. In the shape space, we use a fully connected network to predict the accurate shapes and use the available depth data for supervision. Both networks are conditioned on expression coefficients rather than discrete labels, allowing us to generate an unlimited amount of expressions. We show the superiority of this disentangling approach through both quantitative and qualitative studies. In a user study, our method is preferred in 85% of cases when compared to the most recent work. When compared to the ground truth, annotators cannot reliably distinguish between our synthesized images and real images, preferring our method in 53% of the cases.</p>`,
    authors: "Zhenglin Geng, Chen Cao, Sergey Tulyakov",
    eventID: 66,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3PdxbRLZpTUe3iIYiZNabH/4380aa6811486dd7dcd5055dff0ca180/1902.08900.pdf",
    metadescription: `We present a method for fine-grained face manipulation. Given a face image with an arbitrary expression, our method can synthesize another arbitrary expression by the same person. This is achieved by first fitting a 3D face model and then disentangling the face into a texture and a shape. We then learn different networks in these two spaces. In the texture space, we use a conditional generative network to change the appearance, and carefully design input formats and loss functions to achieve the best results. In the shape space, we use a fully connected network to predict the accurate shapes and use the available depth data for supervision. Both networks are conditioned on expression coefficients rather than discrete labels, allowing us to generate an unlimited amount of expressions. We show the superiority of this disentangling approach through both quantitative and qualitative studies. In a user study, our method is preferred in 85% of cases when compared to the most recent work. When compared to the ground truth, annotators cannot reliably distinguish between our synthesized images and real images, preferring our method in 53% of the cases.`,
    bgImage:
      "https://images.ctfassets.net/btheynltg5cn/5jUom8ndR4V4HMkgu2wuNm/b9ae318781eeafd1e3878bafc59f746f/3D_Guided_Fine-Grained_Face_Manipulation.png?w=400",
  },
  {
    id: 68,
    date: "February 26, 2019",
    title: "Analyzing the Use of Camera Glasses in the Wild",
    description: `<p><b>Abstract:</b> Camera glasses enable people to capture point-of-view videos using a common accessory, hands-free. In this paper, we investigate how, when, and why people used one such product: Spectacles. We conducted 39 semi-structured interviews and surveys with 191 owners of Spectacles. We found that the form factor elicits sustained usage behaviors, and opens opportunities for new use-cases and types of content captured. We provide a usage typology, and highlight societal and individual factors that influence the classification of behaviors.<i><b>Keywords: </b></i><i>camera glasses, smart glasses, wearables, usability</i></p>`,
    authors: "Taryn Bipat, Maarten Bos, Rajan Vaish, Andrés Monroy-Hernández",
    eventID: 68,
    researchArea: "Human Computer Interaction, Computational Social Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/1Mnr1LAdIF88urzRdfDKgW/cf20ccd91cf47d0fd5b3ad3294b4b403/Spectacles_Vaish.pdf",
    metadescription: `Camera glasses enable people to capture point-of-view videos using a common accessory, hands-free. In this paper, we investigate how, when, and why people used one such product: Spectacles. We conducted 39 semi-structured interviews and surveys with 191 owners of Spectacles. We found that the form factor elicits sustained usage behaviors, and opens opportunities for new use-cases and types of content captured. We provide a usage typology, and highlight societal and individual factors that influence the classification of behaviors.`,
    bgImage: "",
  },
  {
    id: 69,
    date: "March 01, 2019",
    title:
      "Animo: Sharing Biosignals on a Smartwatch for Lightweight Social Connection",
    description: `<p><b>Abstract: </b>We present <i>Animo</i>, a smartwatch app that enables people to share and view each other’s biosignals. We designed and engineered Animo to explore new ground for smartwatch-based biosignals social computing systems: identifying opportunities where these systems can support lightweight and mood-centric interactions. In our work we develop, explore, and evaluate several innovative features designed for dyadic communication of heart rate. We discuss the results of a two-week study (N=34), including new communication patterns participants engaged in, and outline the design landscape for communicating with biosignals on smartwatches.</p>`,
    authors:
      "Fannie Liu, Mario Esparza, Maria Pavlovskaia, Geoff Kaufman, Laura Dabbish, Andrés Monroy-Hernández",
    eventID: 69,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3KePirRcjNImaNRRTpALG2/3498e3d4e55f6df7dde8c2ae69dcfc10/1904.06427.pdf",
    metadescription: `We present Animo, a smartwatch app that enables people to share and view each other’s biosignals. We designed and engineered Animo to explore new ground for smartwatch-based biosignals social computing systems: identifying opportunities where these systems can support lightweight and mood-centric interactions. In our work we develop, explore, and evaluate several innovative features designed for dyadic communication of heart rate. We discuss the results of a two-week study (N=34), including new communication patterns participants engaged in, and outline the design landscape for communicating with biosignals on smartwatches.`,
    bgImage: "",
  },
  {
    id: 70,
    date: "March 17, 2019",
    title: "Impact of Contextual Factors on Snapchat Public Sharing",
    description: `<p><b>Abstract:</b>  Public sharing is integral to online platforms. This includes the popular multimedia messaging application Snapchat, on which public sharing is relatively new and unexplored in prior research. In mobile-first applications, sharing contexts are dynamic. However, it is unclear how context impacts users’ sharing decisions. As platforms increasingly rely on user-generated content, it is important to also broadly understand user motivations and considerations in public sharing.  We explored these aspects of content sharing through a survey of 1,515 Snapchat users. Our results indicate that users primarily have intrinsic motivations for publicly sharing Snaps, such as to share an experience with the world, but also have considerations related to audience and sensitivity of content. Additionally, we found that Snaps shared publicly were contextually different from those privately shared.  Our findings suggest that content sharing systems can be designed to support sharing motivations, yet also be sensitive to private contexts.</p>`,
    authors: "Hana Habib, Neil Shah, Rajan Vaish",
    eventID: 68,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5wA2V9AFvZYiwm0XwqaaAh/35899fbad09808162c0065545aadebca/Snapchat_OurStory_Vaish.pdf",
    metadescription: `Public sharing is integral to online platforms. This includes the popular multimedia messaging application Snapchat, on which public sharing is relatively new and unexplored in prior research. In mobile-first applications, sharing contexts are dynamic. However, it is unclear how context impacts users’ sharing decisions. As platforms increasingly rely on user-generated content, it is important to also broadly understand user motivations and considerations in public sharing. We explored these aspects of content sharing through a survey of 1,515 Snapchat users. Our results indicate that users primarily have intrinsic motivations for publicly sharing Snaps, such as to share an experience with the world, but also have considerations related to audience and sensitivity of content. Additionally, we found that Snaps shared publicly were contextually different from those privately shared. Our findings suggest that content sharing systems can be designed to support sharing motivations, yet also be sensitive to private contexts.`,
    bgImage: "",
  },
  {
    id: 71,
    date: "April 01, 2019",
    title: "End-to-End Time-Lapse Video Synthesis from a Single Outdoor Image",
    description: `<p><b>Abstract: </b>Time-lapse videos usually contain visually appealing content but are often difficult and costly to create. In this paper, we present an end-to-end solution to synthesize a time-lapse video from a single outdoor image using deep neural networks. Our key idea is to train a conditional generative adversarial network based on existing datasets of time-lapse videos and image sequences. We propose a multiframe joint conditional generation framework to effectively learn the correlation between the illumination change of an outdoor scene and the time of the day. We further present a multi-domain training scheme for robust training of our generative models from two datasets with different distributions and missing timestamp labels. Compared to alternative time-lapse video synthesis algorithms, our method uses the timestamp as the control variable and does not require a reference video to guide the synthesis of the final output. We conduct ablation studies to validate our algorithm and compare with state-of-the-art techniques both qualitatively and quantitatively.</p>`,
    authors:
      "Seonghyeon Nam, Chongyang Ma, Menglei Chai, William Brendel, Ning Xu, Seon Joo Kim",
    eventID: 66,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/14HdRWe1Xn6SKga78LqEVh/d32bc911d371a1905a7ca04967bf36c2/1904.00680.pdf",
    metadescription: `Time-lapse videos usually contain visually appealing content but are often difficult and costly to create. In this paper, we present an end-to-end solution to synthesize a time-lapse video from a single outdoor image using deep neural networks. Our key idea is to train a conditional generative adversarial network based on existing datasets of time-lapse videos and image sequences. We propose a multiframe joint conditional generation framework to effectively learn the correlation between the illumination change of an outdoor scene and the time of the day. We further present a multi-domain training scheme for robust training of our generative models from two datasets with different distributions and missing timestamp labels. Compared to alternative time-lapse video synthesis algorithms, our method uses the timestamp as the control variable and does not require a reference video to guide the synthesis of the final output. We conduct ablation studies to validate our algorithm and compare with state-of-the-art techniques both qualitatively and quantitatively.`,
    bgImage: "",
  },
  {
    id: 72,
    date: "April 04, 2019",
    title:
      "Train One Get One Free: Partially Supervised Neural Network for Bug Report Duplicate Detection and Clustering",
    description: `<p><b>Abstract: </b>Tracking user reported bugs requires considerable engineering effort in going through many repetitive reports and assigning them to the correct teams. This paper proposes a neural architecture that can jointly (1) detect if two bug reports are duplicates, and (2) aggregate them into latent topics. Leveraging the assumption that learning the topic of a bug is a sub-task for detecting duplicates, we design a loss function that can jointly perform both tasks but needs supervision for only duplicate classification, achieving topic clustering in an unsupervised fashion. We use a two-step attention module that uses self-attention for topic clustering and conditional attention for duplicate detection. We study the characteristics of two types of real world datasets that have been marked for duplicate bugs by engineers and by nontechnical annotators. The results demonstrate that our model not only can outperform stateof-the-art methods for duplicate classification on both cases, but can also learn meaningful latent clusters without additional supervision.</p>`,
    authors:
      "Lahari Poddar, Leonardo Neves, William Brendel, Luis Marujo, Sergey Tulyakov, Pradeep Karuturi",
    eventID: 72,
    researchArea: "Natural Language Processing",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3sAYSetRs4qOUb2O88TV20/4c5f817f22ca14911ba84fb755777691/N19-2020.pdf",
    metadescription: `Tracking user reported bugs requires considerable engineering effort in going through many repetitive reports and assigning them to the correct teams. This paper proposes a neural architecture that can jointly (1) detect if two bug reports are duplicates, and (2) aggregate them into latent topics. Leveraging the assumption that learning the topic of a bug is a sub-task for detecting duplicates, we design a loss function that can jointly perform both tasks but needs supervision for only duplicate classification, achieving topic clustering in an unsupervised fashion. We use a two-step attention module that uses self-attention for topic clustering and conditional attention for duplicate detection. We study the characteristics of two types of real world datasets that have been marked for duplicate bugs by engineers and by nontechnical annotators. The results demonstrate that our model not only can outperform stateof-the-art methods for duplicate classification on both cases, but can also learn meaningful latent clusters without additional supervision.`,
    bgImage: "",
  },
  {
    id: 73,
    date: "April 10, 2019",
    title: "SiCloPe: Silhouette-Based Clothed People",
    description: `<p><b>Abstract: </b>We introduce a new silhouette-based representation for modeling clothed human bodies using deep generative models. Our method can reconstruct a complete and textured 3D model of a person wearing clothes from a single input picture. Inspired by the visual hull algorithm, our implicit representation uses 2D silhouettes and 3D joints of a body pose to describe the immense shape complexity and variations of clothed people. Given a segmented 2D silhouette of a person and its inferred 3D joints from the input picture, we first synthesize consistent silhouettes from novel view points around the subject. The synthesized silhouettes which are the most consistent with the input segmentation are fed into a deep visual hull algorithm for robust 3D shape prediction. We then infer the texture of the subject’s back view using the frontal image and segmentation mask as input to a conditional generative adversarial network. Our experiments demonstrate that our silhouette-based model is an effective representation and the appearance of the back view can be predicted reliably using an image-to-image translation network. While classic methods based on parametric models often fail for single-view images of subjects with challenging clothing, our approach can still produce successful results, which are comparable to those obtained from multi-view input.</p>`,
    authors:
      "Ryota Natsume, Shunsuke Saito, Zeng Huang, Weikai Chen, Chongyang Ma, Hao Li, Shigeo Morishima",
    eventID: 66,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4kcde6VMVhLCGJ7BXtcNvR/2b046bc0490580f609e6ecc0a86a6bdd/1901.00049.pdf",
    metadescription: `We introduce a new silhouette-based representation for modeling clothed human bodies using deep generative models. Our method can reconstruct a complete and textured 3D model of a person wearing clothes from a single input picture. Inspired by the visual hull algorithm, our implicit representation uses 2D silhouettes and 3D joints of a body pose to describe the immense shape complexity and variations of clothed people. Given a segmented 2D silhouette of a person and its inferred 3D joints from the input picture, we first synthesize consistent silhouettes from novel view points around the subject. The synthesized silhouettes which are the most consistent with the input segmentation are fed into a deep visual hull algorithm for robust 3D shape prediction. We then infer the texture of the subject’s back view using the frontal image and segmentation mask as input to a conditional generative adversarial network. Our experiments demonstrate that our silhouette-based model is an effective representation and the appearance of the back view can be predicted reliably using an image-to-image translation network. While classic methods based on parametric models often fail for single-view images of subjects with challenging clothing, our approach can still produce successful results, which are comparable to those obtained from multi-view input.`,
    bgImage: "",
  },
  {
    id: 74,
    date: "April 20, 2019",
    title: "3D Hand Shape and Pose Estimation from a Single RGB Image",
    description: `<p><b>Abstract: </b>This work addresses a novel and challenging problem of estimating the full 3D hand shape and pose from a single RGB image. Most current methods in 3D hand analysis from monocular RGB images only focus on estimating the 3D locations of hand keypoints, which cannot fully express the 3D shape of hand. In contrast, we propose a Graph Convolutional Neural Network (Graph CNN) based method to reconstruct a full 3D mesh of hand surface that contains richer information of both 3D hand shape and pose. To train networks with full supervision, we create a large-scale synthetic dataset containing both ground truth 3D meshes and 3D poses. When fine-tuning the networks on real-world datasets without 3D ground truth, we propose a weakly-supervised approach by leveraging the depth map as a weak supervision in training. Through extensive evaluations on our proposed new datasets and two public datasets, we show that our proposed method can produce accurate and reasonable 3D hand mesh, and can achieve superior 3D hand pose estimation accuracy when compared with state-of-the-art methods.</p>`,
    authors:
      "Liuhao Ge, Zhou Ren, Yuncheng Li, Zehao Xue, Yingying Wang, Jianfei Cai, Junsong Yuan",
    eventID: 66,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5g5ssLKNSpWfmkDhTbxdiW/6cc59185ad961957760f886f50d85081/1903.00812.pdf",
    metadescription: `This work addresses a novel and challenging problem of estimating the full 3D hand shape and pose from a single RGB image. Most current methods in 3D hand analysis from monocular RGB images only focus on estimating the 3D locations of hand keypoints, which cannot fully express the 3D shape of hand. In contrast, we propose a Graph Convolutional Neural Network (Graph CNN) based method to reconstruct a full 3D mesh of hand surface that contains richer information of both 3D hand shape and pose. To train networks with full supervision, we create a large-scale synthetic dataset containing both ground truth 3D meshes and 3D poses. When fine-tuning the networks on real-world datasets without 3D ground truth, we propose a weakly-supervised approach by leveraging the depth map as a weak supervision in training. Through extensive evaluations on our proposed new datasets and two public datasets, we show that our proposed method can produce accurate and reasonable 3D hand mesh, and can achieve superior 3D hand pose estimation accuracy when compared with state-of-the-art methods.`,
    bgImage: "",
  },
  {
    id: 75,
    date: "June 02, 2019",
    title:
      "Characterizing and Forecasting User Engagement with In-app Action Graph: A Case Study of Snapchat",
    description: `<p><b>Abstract: </b>While mobile social apps have become increasingly important in people’s daily life, we have limited understanding on what motivates users to engage with these apps. In this paper, we answer the question whether users’ in-app activity patterns help inform their future app engagement (e.g., active days in a future time window)? Previous studies on predicting user app engagement mainly focus on various macroscopic features (e.g., time-series of activity frequency), while ignoring fine-grained inter-dependencies between different in-app actions at the microscopic level. Here we propose to formalize individual user’s in-app action transition patterns as a temporally evolving action graph, and analyze its characteristics in terms of informing future user engagement. Our analysis suggested that action graphs are able to characterize user behavior patterns and inform future engagement. We derive a number of high-order graph features to capture in-app usage patterns and construct interpretable models for predicting trends of engagement changes and active rates. To further enhance predictive power, we design an end-to-end, multi-channel neural model to encode temporal action graphs, activity sequences, and other macroscopic features. Experiments on predicting user engagement for 150k Snapchat new users over a 28-day period demonstrate the effectiveness of the proposed models. The prediction framework is deployed at Snapchat to deliver real world business insights. Our proposed framework is also general and can be applied to other social app platforms.</p>`,
    authors: "Yozen Liu, Xiaolin Shi, Lucas Pierce, Xiang Ren",
    eventID: 75,
    researchArea: "Data Mining",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/30aJLFMww536OjiSys1bWz/a5e00a053b213f052c1f73116abd0ca3/Characterizing_and_Forecasting_User_Engagement_with_In-app_Action_Graph-_A_Case_Study_of_Snapchat.pdf",
    metadescription: `While mobile social apps have become increasingly important in people’s daily life, we have limited understanding on what motivates users to engage with these apps. In this paper, we answer the question whether users’ in-app activity patterns help inform their future app engagement (e.g., active days in a future time window)? Previous studies on predicting user app engagement mainly focus on various macroscopic features (e.g., time-series of activity frequency), while ignoring fine-grained inter-dependencies between different in-app actions at the microscopic level. Here we propose to formalize individual user’s in-app action transition patterns as a temporally evolving action graph, and analyze its characteristics in terms of informing future user engagement. Our analysis suggested that action graphs are able to characterize user behavior patterns and inform future engagement. We derive a number of high-order graph features to capture in-app usage patterns and construct interpretable models for predicting trends of engagement changes and active rates. To further enhance predictive power, we design an end-to-end, multi-channel neural model to encode temporal action graphs, activity sequences, and other macroscopic features. Experiments on predicting user engagement for 150k Snapchat new users over a 28-day period demonstrate the effectiveness of the proposed models. The prediction framework is deployed at Snapchat to deliver real world business insights. Our proposed framework is also general and can be applied to other social app platforms.`,
    bgImage: "",
  },
  {
    id: 76,
    date: "June 16, 2019",
    title: "Characterizing and Detecting Livestreaming Chatbots",
    description: `<p>Abstract: Livestreaming platforms enable content producers, or streamers, to broadcast creative content to a potentially large viewer base. Chatrooms form an integral part of such platforms, enabling viewers to interact both with the streamer, and amongst themselves. Streams with high engagement (many viewers and active chatters) are typically considered engaging, and often promoted to end users by means of recommendation algorithms, and exposed to better monetization opportunities via revenue share from platform advertising, viewer donations, and thirdparty sponsorships. Given such incentives, some streamers make use of fraudulent means to increase perceived engagement by simulating chatter via fake “chatbots” which can be purchased from shady online marketplaces. This inauthentic engagement can negatively influence recommendation, hurt streamer and viewer trust in the platform, and harm monetization for honest streamers. In this paper, we tackle the novel problem of automating detection of chatbots on livestreaming platforms. To this end, we first formalize the livestreaming chatbot detection problem and characterize differences between botted and genuine chatter behavior observed from a real-world livestreaming chatter dataset collected from Twitch.tv. We then propose SHERLOCK, which posits a two-stage approach of detecting chatbotted streams, and subsequently detecting the constituent chatbots. Finally, we demonstrate effectiveness on both real and synthetic data: to this end, we propose a novel strategy for collecting labeled, synthetic chatter dataset (typically unavailable) from such platforms, enabling evaluation of proposed detection approaches against chatbot behaviors with varying signatures. Our approach achieves .97 precision/recall on the real-world dataset, and .80+ F1 scores across most simulated attack settings.</p>`,
    authors:
      "Shreya Jain, Dipankar Niranjan, Hemank Lamba, Neil Shah, Ponnurangam Kumaraguru",
    eventID: 76,
    researchArea: "Data Mining",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/4k1CvX9C3M950k1CUwqEkn/7384e3027ce1680a81d078fd5d62d94c/Characterizing_and_Detecting_Livestreaming_Chatbots-ASONAM19.pdf",
    metadescription: `Livestreaming platforms enable content producers, or streamers, to broadcast creative content to a potentially large viewer base. Chatrooms form an integral part of such platforms, enabling viewers to interact both with the streamer, and amongst themselves. Streams with high engagement (many viewers and active chatters) are typically considered engaging, and often promoted to end users by means of recommendation algorithms, and exposed to better monetization opportunities via revenue share from platform advertising, viewer donations, and thirdparty sponsorships. Given such incentives, some streamers make use of fraudulent means to increase perceived engagement by simulating chatter via fake “chatbots” which can be purchased from shady online marketplaces. This inauthentic engagement can negatively influence recommendation, hurt streamer and viewer trust in the platform, and harm monetization for honest streamers. In this paper, we tackle the novel problem of automating detection of chatbots on livestreaming platforms. To this end, we first formalize the livestreaming chatbot detection problem and characterize differences between botted and genuine chatter behavior observed from a real-world livestreaming chatter dataset collected from Twitch.tv. We then propose SHERLOCK, which posits a two-stage approach of detecting chatbotted streams, and subsequently detecting the constituent chatbots. Finally, we demonstrate effectiveness on both real and synthetic data: to this end, we propose a novel strategy for collecting labeled, synthetic chatter dataset (typically unavailable) from such platforms, enabling evaluation of proposed detection approaches against chatbot behaviors with varying signatures. Our approach achieves .97 precision/recall on the real-world dataset, and .80+ F1 scores across most simulated attack settings.`,
    bgImage: "",
  },
  {
    id: 77,
    date: "July 12, 2019",
    title: "Vidgets: Modular Mechanical Widgets for Mobile Devices",
    description: `<p><b>Abstract: </b>We present Vidgets, a family of mechanical widgets, specifically push buttons and rotary knobs that augment mobile devices with tangible user interfaces.
    When these widgets are attached to a mobile device and a user interacts with them, the widgets’ nonlinear mechanical response shifts the device slightly and quickly, and this subtle motion can be detected by the accelerometer commonly equipped on mobile devices. We propose a physics-based model to understand the nonlinear mechanical response of widgets. This understanding enables us to design tactile force profiles of these widgets so that the resulting accelerometer signals become easy to recognize. We then develop a lightweight signal processing algorithm that analyzes the
    accelerometer signals and recognizes how the user interacts with the widgets in real time. Vidgets widgets are low-cost, compact, reconfigurable, and power efficient. They can form a diverse set of physical interfaces that enrich users’ interactions with mobile devices in various practical scenarios.We demonstrate their use in three applications: photo capture with singlehanded zoom, control of mobile games, and making a playable mobile music instrument.</p>`,
    authors: "Chang Xiao, Karl Bayer, Changxi Zheng, Shree Nayar",
    eventID: 77,
    researchArea: "Computational Imaging",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/3GZ7ISDbMLoxSfXNXNrA00/f60111ad3ee6dae174c5df01ef90b353/vidgets.pdf",
    metadescription: `We present Vidgets, a family of mechanical widgets, specifically push buttons and rotary knobs that augment mobile devices with tangible user interfaces. When these widgets are attached to a mobile device and a user interacts with them, the widgets’ nonlinear mechanical response shifts the device slightly and quickly, and this subtle motion can be detected by the accelerometer commonly equipped on mobile devices. We propose a physics-based model to understand the nonlinear mechanical response of widgets. This understanding enables us to design tactile force profiles of these widgets so that the resulting accelerometer signals become easy to recognize. We then develop a lightweight signal processing algorithm that analyzes the accelerometer signals and recognizes how the user interacts with the widgets in real time. Vidgets widgets are low-cost, compact, reconfigurable, and power efficient. They can form a diverse set of physical interfaces that enrich users’ interactions with mobile devices in various practical scenarios.We demonstrate their use in three applications: photo capture with singlehanded zoom, control of mobile games, and making a playable mobile music instrument.`,
    bgImage:
      "https://images.ctfassets.net/btheynltg5cn/7e2c6ncG5rpGp5SgvV30go/becdb8a878fc4824c0cd6299b9006912/Vidgets.png?w=400",
  },
  {
    id: 78,
    date: "July 25, 2019",
    title: "Modeling Dwell Time Engagement on Visual Multimedia",
    description: `<p><b>Abstract:  </b>Visual multimedia is one of the most prevalent sources of modern online content and engagement. However, despiteits prevalence, littleis known about user engagement with such content. For instance, how can we model engagement for a specific content or viewer sample, and across multiple samples? Can we model and discover patterns in these interactions, and detect outlying behaviors corresponding  to abnormal engagement? In this paper, we study these questions in depth. Understanding these questions has implications in user modeling and understanding, ranking, trust and safety and more. For analysis, we consider content and viewer dwell time (engagement duration) behaviors with images and videos on Snapchat Stories, one of the largest multimedia-driven social sharing services. To our knowledge, we are the first to model and analyze dwell time behaviors on such media. Specifically, our contributions include (a) individual modeling: we propose and evaluate theUm-Dp, Lm-Dp andV-Dp parametric models to describe dwell times of unlooped/looped media and viewers which outperform alternatives, (b) aggregate modeling: we show how to flexibly summarize the respective joint distributions of multivariate parametrized fits across many samples using Vine Copulas in the analog Um-Am, Lm-Am and V-Am models, which enable inferences regarding aggregate behavioral patterns, and offer
    the ability to simulate real-looking engagement data (c) anomaly detection: we demonstrate our aggregate models can robustly detect anomalies present during training (0.9+ AUROC across most attack models), and also enable discovery of real dwell time anomalies.</p>`,
    authors: "Hemank Lamba, Neil Shah",
    eventID: 75,
    researchArea: "Data Science",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/56aX8hwa6Gx9VB47rQcgoF/ef18ace3bf2c37441cb4d131cad4f476/ModelingVisualDwellTimes.KDD.19.pdf",
    metadescription: `Visual multimedia is one of the most prevalent sources of modern online content and engagement. However, despiteits prevalence, littleis known about user engagement with such content. For instance, how can we model engagement for a specific content or viewer sample, and across multiple samples? Can we model and discover patterns in these interactions, and detect outlying behaviors corresponding to abnormal engagement? In this paper, we study these questions in depth. Understanding these questions has implications in user modeling and understanding, ranking, trust and safety and more. For analysis, we consider content and viewer dwell time (engagement duration) behaviors with images and videos on Snapchat Stories, one of the largest multimedia-driven social sharing services. To our knowledge, we are the first to model and analyze dwell time behaviors on such media. Specifically, our contributions include (a) individual modeling: we propose and evaluate theUm-Dp, Lm-Dp andV-Dp parametric models to describe dwell times of unlooped/looped media and viewers which outperform alternatives, (b) aggregate modeling: we show how to flexibly summarize the respective joint distributions of multivariate parametrized fits across many samples using Vine Copulas in the analog Um-Am, Lm-Am and V-Am models, which enable inferences regarding aggregate behavioral patterns, and offer the ability to simulate real-looking engagement data (c) anomaly detection: we demonstrate our aggregate models can robustly detect anomalies present during training (0.9+ AUROC across most attack models), and also enable discovery of real dwell time anomalies.`,
    bgImage: "",
  },
  {
    id: 79,
    date: "July 26, 2019",
    title: "FARE: Schema-Agnostic Anomaly Detection in Social Event Logs",
    description: `<p><b>Abstract: </b>Online social platforms are constantly under attack by bad actors. These bad actors often leverage <i>resources</i> (e.g. IPs, devices) under their control to attack the platform by targeting various, vulnerable endpoints (e.g. account authentication, sybil account creation, friending) which may process millions to billions of <i>events</i> every day. As the scale and multifacetedness of malicious behaviors grows, and new endpoints and corresponding events are utilized and processed every day, the development
    of fast, extensible and <i>schema-agnostic </i>anomaly detection approaches to enable standardized protocols for different classes of events is critical. This is a notable challenge given that practitioners often have neither time nor means to custombuild anomaly detection services for each new event class. Moreover, labeled data is rarely available in such diverse settings, making unsupervised methods appealing. In this work, we study unsupervised, schema-agnostic detection of resource usage anomalies in social event logs. We propose an efficient algorithmic
    approach to this end, and evaluate it with promising results on several log datasets of different event classes. Specifically, our contributions include a) <i>formulation</i>: a novel articulation of the schema-agnostic anomaly detection problem for event logs,
    b) approach: we propose FARE (Finding Anomalous Resources and Events), which integrates online resource anomaly detection and offline event culpability identification components, and c) <i>efficacy</i>: demonstrated accuracy (100% precision@250 on two industrial datasets from the Snapchat social platform, with 50% anomalies previously uncaught by state-of-the-art production defenses), robustness (high precision/recall over suitable synthetic attacks and parameter choices) and scalability (near-linear in the number of events).</p><p>
    <b><i>Index Terms: </i></b><i>misbehavior, event log, anomaly, schemaagnostic</i></p>`,
    authors: "Neil Shah",
    eventID: 79,
    researchArea: "Data Mining, Security",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6Az57wO366SkHXCfHOxxWM/0b792fde114df2cc83b59839fe124d9b/FARE.DSAA.19.pdf",
    metadescription: `Online social platforms are constantly under attack by bad actors. These bad actors often leverage resources (e.g. IPs, devices) under their control to attack the platform by targeting various, vulnerable endpoints (e.g. account authentication, sybil account creation, friending) which may process millions to billions of events every day. As the scale and multifacetedness of malicious behaviors grows, and new endpoints and corresponding events are utilized and processed every day, the development of fast, extensible and schema-agnostic anomaly detection approaches to enable standardized protocols for different classes of events is critical. This is a notable challenge given that practitioners often have neither time nor means to custombuild anomaly detection services for each new event class. Moreover, labeled data is rarely available in such diverse settings, making unsupervised methods appealing. In this work, we study unsupervised, schema-agnostic detection of resource usage anomalies in social event logs. We propose an efficient algorithmic approach to this end, and evaluate it with promising results on several log datasets of different event classes. Specifically, our contributions include a) formulation: a novel articulation of the schema-agnostic anomaly detection problem for event logs, b) approach: we propose FARE (Finding Anomalous Resources and Events), which integrates online resource anomaly detection and offline event culpability identification components, and c) efficacy: demonstrated accuracy (100% precision@250 on two industrial datasets from the Snapchat social platform, with 50% anomalies previously uncaught by state-of-the-art production defenses), robustness (high precision/recall over suitable synthetic attacks and parameter choices) and scalability (near-linear in the number of events).`,
    bgImage: "",
  },
  {
    id: 80,
    date: "August 14, 2019",
    title: "Blocks: Collaborative and Persistent Augmented Reality Experiences",
    description: `<p><b>Abstract: </b>We introduce <i>Blocks</i>, a mobile application that enables people to co-create AR structures that persist in the physical environment. Using Blocks, end users can collaborate synchronously or asynchronously, whether they are colocated or remote. Additionally, the AR structures can be tied to a physical location or can be accessed from anywhere. We evaluated how people used Blocks through a series of lab and field deployment studies with over 160 participants, and explored the interplay between two collaborative dimensions: space and time. We found that participants preferred creating structures synchronously with colocated collaborators. Additionally, they were most active when they created structures that were not restricted by time or place. Unlike most of today’s AR experiences, which focus on content consumption, this work outlines new design opportunities for persistent and collaborative AR experiences that empower anyone to collaborate and create AR content.</p>`,
    authors:
      "Anhong Guo, Ilter Canberk, Hannah Murphy, Andrés Monroty-Hernández, Rajan Vaish",
    eventID: 80,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/7kWAgZGgPmO0PATMyNrlO/f3dcc21a0e34de6ceb37458d181ae9d7/1908.02409.pdf",
    metadescription: `We introduce Blocks, a mobile application that enables people to co-create AR structures that persist in the physical environment. Using Blocks, end users can collaborate synchronously or asynchronously, whether they are colocated or remote. Additionally, the AR structures can be tied to a physical location or can be accessed from anywhere. We evaluated how people used Blocks through a series of lab and field deployment studies with over 160 participants, and explored the interplay between two collaborative dimensions: space and time. We found that participants preferred creating structures synchronously with colocated collaborators. Additionally, they were most active when they created structures that were not restricted by time or place. Unlike most of today’s AR experiences, which focus on content consumption, this work outlines new design opportunities for persistent and collaborative AR experiences that empower anyone to collaborate and create AR content.`,
    bgImage:
      "https://images.ctfassets.net/btheynltg5cn/7aOMZpQPllYrNHTozHfqwv/62c76ec8165b57fa1d7c2275cef3d62c/Blocks.png?w=400",
  },
  {
    id: 81,
    date: "August 21, 2019",
    title:
      "SliceNDice: Mining Suspicious Multi-attribute Entity Groups with Multi-view Graphs",
    description: `<p><b>Abstract: </b>Given the reach of web platforms, bad actors have considerable incentives to manipulate and defraud users at the expense of platform integrity. This has spurred research in numerous suspicious behavior detection tasks, including detection
    of sybil accounts, false information, and payment scams/fraud. In this paper, we draw the insight that many such initiatives can be tackled in a common framework by posing a detection task which seeks to find groups of entities which share too many properties with one another across multiple attributes (sybil accounts created at the same time and location, propaganda spreaders broadcasting articles with the same rhetoric and with similar reshares, etc.) Our work makes four core contributions: Firstly, we posit a novel formulation of this task as a multi-view graph mining problem, in which distinct views reflect distinct attribute similarities across entities, and contextual similarity and attribute importance are respected. Secondly, we propose a novel suspiciousness metric for scoring entity groups given the abnormality of their synchronicity across multiple views, which obeys intuitive desiderata that existing metrics do not. Finally, we propose the SLICENDICE algorithm which enables efficient extraction of highly suspicious entity groups, and demonstrate its practicality in production, in terms of strong detection performance and discoveries on Snapchat’s large advertiser ecosystem (89% precision and numerous discoveries of real fraud rings), marked outperformance of baselines (over 97% precision/recall in simulated settings) and linear scalability.</p><p><i><b>Index Terms:</b></i><i> anomaly detection, attributed data, multi-view graphs, outlier</i></p>`,
    authors: "Hamed Nilforoshan, Neil Shah",
    eventID: 79,
    researchArea: "Data Science, Security",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/QhyyXJLXVgaBwUOxuEDyg/353c24b99235f911ca80aa7a38ce3e41/1908.07087.pdf",
    metadescription: `Given the reach of web platforms, bad actors have considerable incentives to manipulate and defraud users at the expense of platform integrity. This has spurred research in numerous suspicious behavior detection tasks, including detection of sybil accounts, false information, and payment scams/fraud. In this paper, we draw the insight that many such initiatives can be tackled in a common framework by posing a detection task which seeks to find groups of entities which share too many properties with one another across multiple attributes (sybil accounts created at the same time and location, propaganda spreaders broadcasting articles with the same rhetoric and with similar reshares, etc.) Our work makes four core contributions: Firstly, we posit a novel formulation of this task as a multi-view graph mining problem, in which distinct views reflect distinct attribute similarities across entities, and contextual similarity and attribute importance are respected. Secondly, we propose a novel suspiciousness metric for scoring entity groups given the abnormality of their synchronicity across multiple views, which obeys intuitive desiderata that existing metrics do not. Finally, we propose the SLICENDICE algorithm which enables efficient extraction of highly suspicious entity groups, and demonstrate its practicality in production, in terms of strong detection performance and discoveries on Snapchat’s large advertiser ecosystem (89% precision and numerous discoveries of real fraud rings), marked outperformance of baselines (over 97% precision/recall in simulated settings) and linear scalability.`,
    bgImage: "",
  },
  {
    id: 82,
    date: "August 26, 2019",
    title: "Transformable Bottleneck Networks",
    description: `<p>Abstract: </p><p>We propose a novel approach to performing fine-grained 3D manipulation of image content via a convolutional neural network, which we call the Transformable Bottleneck Network (TBN). It applies given spatial transformations directly to a volumetric bottleneck within our encoderbottleneck-decoder architecture. Multi-view supervision encourages the network to learn to spatially disentangle the feature space within the bottleneck. The resulting spatial structure can be manipulated with arbitrary spatial transformations. We demonstrate the efficacy of TBNs for novel view synthesis, achieving state-of-the-art results on a challenging benchmark. We demonstrate that the bottlenecks produced by networks trained for this task contain meaningful spatial structure that allows us to intuitively perform a variety of image manipulations in 3D, well beyond the rigid transformations seen during training. These manipulations include non-uniform scaling, non-rigid warping, and combining content from different images. Finally, we extract explicit 3D structure from the bottleneck, performing impressive 3D reconstruction from a single input image. </p>`,
    authors:
      "Kyle Olszewski, Sergey Tulyakov, Oliver Woodford, Hao Li, Linjie Luo",
    eventID: 82,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/263h5HtArb8wxBZPXs8rtN/b1d0366e23bce9fec194eedcad5a6cac/1904.06458.pdf",
    metadescription: `We propose a novel approach to performing fine-grained 3D manipulation of image content via a convolutional neural network, which we call the Transformable Bottleneck Network (TBN). It applies given spatial transformations directly to a volumetric bottleneck within our encoderbottleneck-decoder architecture. Multi-view supervision encourages the network to learn to spatially disentangle the feature space within the bottleneck. The resulting spatial structure can be manipulated with arbitrary spatial transformations. We demonstrate the efficacy of TBNs for novel view synthesis, achieving state-of-the-art results on a challenging benchmark. We demonstrate that the bottlenecks produced by networks trained for this task contain meaningful spatial structure that allows us to intuitively perform a variety of image manipulations in 3D, well beyond the rigid transformations seen during training. These manipulations include non-uniform scaling, non-rigid warping, and combining content from different images. Finally, we extract explicit 3D structure from the bottleneck, performing impressive 3D reconstruction from a single input image.`,
    bgImage: "",
  },
  {
    id: 83,
    date: "August 30, 2019",
    title: "Animating Arbitrary Objects via Deep Motion Transfer",
    description: `<p><b>Abstract: </b>This paper introduces a novel deep learning framework for image animation. Given an input image with a target object and a driving video sequence depicting a moving object, our framework generates a video in which the target object is animated according to the driving sequence. This is achieved through a deep architecture that decouples appearance and motion information. Our framework consists of three main modules: (i) a Keypoint Detector unsupervisely trained to extract object keypoints, (ii) a Dense Motion prediction network for generating dense heatmaps from sparse keypoints, in order to better encode motion information and (iii) a Motion Transfer Network, which uses the motion heatmaps and appearance information extracted from the input image to synthesize the output frames. We demonstrate the effectiveness of our method on several benchmark datasets, spanning a wide variety of object appearances, and show that our approach outperforms stateof-the-art image animation and video generation methods. Our source code is publicly available.
    </p>`,
    authors:
      "Aliaksandr Siarohin, Stephane Lathuili, Sergey Tulyakov, Elisa Ricci, Nicu Sebe",
    eventID: 66,
    researchArea: "Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5nYGK5YeS5SXVbOMLgKjPi/5a74d3e9f9b27a7dbb2f42531a2c4294/1812.08861.pdf",
    metadescription: `This paper introduces a novel deep learning framework for image animation. Given an input image with a target object and a driving video sequence depicting a moving object, our framework generates a video in which the target object is animated according to the driving sequence. This is achieved through a deep architecture that decouples appearance and motion information. Our framework consists of three main modules: (i) a Keypoint Detector unsupervisely trained to extract object keypoints, (ii) a Dense Motion prediction network for generating dense heatmaps from sparse keypoints, in order to better encode motion information and (iii) a Motion Transfer Network, which uses the motion heatmaps and appearance information extracted from the input image to synthesize the output frames. We demonstrate the effectiveness of our method on several benchmark datasets, spanning a wide variety of object appearances, and show that our approach outperforms stateof-the-art image animation and video generation methods. Our source code is publicly available.`,
    bgImage: "",
  },
  {
    id: 84,
    date: "October 20, 2019",
    title: "Audiovisual Zooming: What You See Is What You Hear",
    description: `<p><i>Best Paper Award at ACM Multimedia 2019</i></p><p><b>Abstract:</b> When capturing videos on a mobile platform, often the target of interest is contaminated by the surrounding environment. To alleviate the visual irrelevance, camera panning and zooming provide the means to isolate a desired field of view (FOV). However, the captured audio is still contaminated by signals outside the FOV. This effect is unnatural—for human perception, visual and auditory cues must go hand-in-hand. We present the concept of Audiovisual Zooming, whereby an auditory FOV is formed to match the visual. Our framework is built around the classic idea of beamforming, a computational approach to enhancing sound from a single direction using a microphone array. Yet, beamforming on its own can not incorporate the auditory FOV, as the FOV may include an arbitrary number of directional sources. We formulate our audiovisual zooming as a generalized eigenvalue problem and propose an algorithm for efficient computation on mobile platforms. To inform the algorithmic and physical implementation, we offer a theoretical analysis of our algorithmic components as well as numerical studies for understanding various design choices of microphone arrays. Finally, we demonstrate audiovisual zooming on two different mobile platforms: a mobile smartphone and a 360◦ spherical imaging system for video conference settings.</p><p><i></i><i><b>CCS Concepts</b></i><i>Information systems → Multimedia content creation</i></p><p><i></i><i><b>Keywords
    </b></i><i>audiovisual zooming, beamforming, audio enhancement</i></p>`,
    authors: "Arun Asokan Nair, Austin Reiter, Changxi Zheng, Shree Nayar",
    eventID: 84,
    researchArea: "Computational Imaging",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/70j5m6VdoBbmnPQRduwuMC/35a4731a8f92a2b07932ea1be3e74e59/Audiovisual_Zooming-_What_You_See_Is_What_You_Hear.pdf",
    metadescription: `When capturing videos on a mobile platform, often the target of interest is contaminated by the surrounding environment. To alleviate the visual irrelevance, camera panning and zooming provide the means to isolate a desired field of view (FOV). However, the captured audio is still contaminated by signals outside the FOV. This effect is unnatural—for human perception, visual and auditory cues must go hand-in-hand. We present the concept of Audiovisual Zooming, whereby an auditory FOV is formed to match the visual. Our framework is built around the classic idea of beamforming, a computational approach to enhancing sound from a single direction using a microphone array. Yet, beamforming on its own can not incorporate the auditory FOV, as the FOV may include an arbitrary number of directional sources. We formulate our audiovisual zooming as a generalized eigenvalue problem and propose an algorithm for efficient computation on mobile platforms. To inform the algorithmic and physical implementation, we offer a theoretical analysis of our algorithmic components as well as numerical studies for understanding various design choices of microphone arrays. Finally, we demonstrate audiovisual zooming on two different mobile platforms: a mobile smartphone and a 360◦ spherical imaging system for video conference settings.`,
    bgImage: "",
  },
  {
    id: 85,
    date: "October 29, 2019",
    title: "Micro-Baseline Structured Light",
    description: `<p><b>Abstract: </b>We propose Micro-baseline Structured Light (MSL), a novel 3D imaging approach designed for small form-factor devices such as cell-phones and miniature robots. MSL operates with small projector-camera baseline and low-cost projection hardware, and can recover scene depths with computationally lightweight algorithms. The main observation is that a small baseline leads to small disparities, enabling a first-order approximation of the non-linear SL image formation model. This leads to the key theoretical result of the paper: the MSL equation, a linearized version of SL image formation. MSL equation is under-constrained due to two unknowns (depth and albedo) at each pixel, but can be efficiently solved using a local least squares approach. We analyze the performance of MSL in terms of various system parameters such as projected pattern and baseline, and provide guidelines for optimizing performance. Armed with these insights, we build a prototype to experimentally examine the theory and its practicality.</p>`,
    authors: "Vishwanath Saragadam, Jian Wang, Mohit Gupta, Shree Nayar",
    eventID: 82,
    researchArea: "Computational Imaging",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4XrPMcEDc40JGaJ09Ru7fO/2349c98e575de5ad5bb26fcf33221782/Saragadam_Micro-Baseline_Structured_Light_ICCV_2019_paper.pdf",
    metadescription: `We propose Micro-baseline Structured Light (MSL), a novel 3D imaging approach designed for small form-factor devices such as cell-phones and miniature robots. MSL operates with small projector-camera baseline and low-cost projection hardware, and can recover scene depths with computationally lightweight algorithms. The main observation is that a small baseline leads to small disparities, enabling a first-order approximation of the non-linear SL image formation model. This leads to the key theoretical result of the paper: the MSL equation, a linearized version of SL image formation. MSL equation is under-constrained due to two unknowns (depth and albedo) at each pixel, but can be efficiently solved using a local least squares approach. We analyze the performance of MSL in terms of various system parameters such as projected pattern and baseline, and provide guidelines for optimizing performance. Armed with these insights, we build a prototype to experimentally examine the theory and its practicality.`,
    bgImage: "",
  },
  {
    id: 86,
    date: "November 07, 2019",
    title:
      "Learning to Annotate: Modularizing Data Augmentation for Text Classifiers with Natural Language Explanations",
    description: `<p><b>Abstract</b>: Deep neural networks usually require massive labeled data, which restricts their applications in scenarios where data annotation is expensive. Natural language (NL) explanations have been demonstrated very useful additional supervision, which can provide sufficient domain knowledge for generating more labeled data over new instances, while the annotation time only doubles. However, directly applying them for augmenting model learning encounters two challenges: (1) NL explanations are unstructured and inherently compositional. (2) NL explanations often have large numbers of linguistic variants, resulting in low recall and limited generalization ability. In this paper, we propose a novel Neural EXecution Tree (NEXT) framework to augment training data for text classification using NL explanations. After transforming NL explanations into executable logical forms by semantic parsing, NEXT generalizes different types of actions specified by the logical forms for labeling data instances, which substantially increases the coverage of each NL explanation. Experiments on two NLP tasks (relation extraction and sentiment analysis) demonstrate its superiority over baseline methods. Its extension to multi-hop question answering achieves performance gain with light annotation effort.</p>`,
    authors:
      "Ziqi Wang, Yujia Qin, Wenxuan Zhou, Jun Yan, Qinyuan Ye, Leonardo Neves, Zhiyuan Liu, Xiang Ren",
    eventID: 86,
    researchArea: "Natural Language Processing, Data Mining",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/28WXBGH7ytJ4FyVEjRvPBm/5be7170e74d99eeb78818314ee6236e8/1911.01352.pdf",
    metadescription: `Deep neural networks usually require massive labeled data, which restricts their applications in scenarios where data annotation is expensive. Natural language (NL) explanations have been demonstrated very useful additional supervision, which can provide sufficient domain knowledge for generating more labeled data over new instances, while the annotation time only doubles. However, directly applying them for augmenting model learning encounters two challenges: (1) NL explanations are unstructured and inherently compositional. (2) NL explanations often have large numbers of linguistic variants, resulting in low recall and limited generalization ability. In this paper, we propose a novel Neural EXecution Tree (NEXT) framework to augment training data for text classification using NL explanations. After transforming NL explanations into executable logical forms by semantic parsing, NEXT generalizes different types of actions specified by the logical forms for labeling data instances, which substantially increases the coverage of each NL explanation. Experiments on two NLP tasks (relation extraction and sentiment analysis) demonstrate its superiority over baseline methods. Its extension to multi-hop question answering achieves performance gain with light annotation effort.`,
    bgImage: "",
  },
  {
    id: 87,
    date: "January 15, 2020",
    title:
      "NERO: A Neural Rule Grounding Framework for Label-Efficient Relation Extraction",
    description: ``,
    authors:
      "Wenxuan Zhou, Hongtao Lin, Bill Yuchen Lin, Ziqi Wang, Junyi Du, Leonardo Neves, Xiang Ren",
    eventID: 87,
    researchArea: "Natural Language Processing",
    PDFLink: "",
    metadescription: ``,
    bgImage: "",
  },
  {
    id: 88,
    date: "February 07, 2020",
    title:
      "Revisiting Image Aesthetic Assessment via Self-Supervised Feature Learning",
    description: `<p><b>Abstract:</b>
    Visual aesthetic assessment has been an active research field for decades. Although latest methods have achieved promising performance on benchmark datasets, they typically rely on a large number of manual annotations including both aesthetic labels and related image attributes. In this paper, we revisit the problem of image aesthetic assessment from the selfsupervised feature learning perspective. Our motivation is that a suitable feature representation for image aesthetic assessment should be able to distinguish different expertdesigned image manipulations, which have close relationships with negative aesthetic effects. To this end, we design two novel pretext tasks to identify the types and parameters of editing operations applied to synthetic instances. The features from our pretext tasks are then adapted for a one-layer linear classifier to evaluate the performance in terms of binary aesthetic classification. We conduct extensive quantitative experiments on three benchmark datasets and demonstrate  that our approach can faithfully extract aesthetics-aware features and outperform alternative pretext schemes. Moreover,  we achieve comparable results to state-of-the-art supervised methods that use 10 million labels from ImageNet.</p>`,
    authors:
      "Kekai Sheng, Weiming Dong, Menglei Chai, Guohui Wang, Peng Zhou, Feiyue Huang, Bao-Gang Hu, Rongrong Ji, Chongyang Ma",
    eventID: 88,
    researchArea: "Creative Vision, Computer Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/1gQHhi3KomFR0Ob7Yuz3Sv/e8fe8e8bd0b4f96471b3aca8425b9d12/1911.11419.pdf",
    metadescription: `Visual aesthetic assessment has been an active research field for decades. Although latest methods have achieved promising performance on benchmark datasets, they typically rely on a large number of manual annotations including both aesthetic labels and related image attributes. In this paper, we revisit the problem of image aesthetic assessment from the selfsupervised feature learning perspective. Our motivation is that a suitable feature representation for image aesthetic assessment should be able to distinguish different expertdesigned image manipulations, which have close relationships with negative aesthetic effects. To this end, we design two novel pretext tasks to identify the types and parameters of editing operations applied to synthetic instances. The features from our pretext tasks are then adapted for a one-layer linear classifier to evaluate the performance in terms of binary aesthetic classification. We conduct extensive quantitative experiments on three benchmark datasets and demonstrate that our approach can faithfully extract aesthetics-aware features and outperform alternative pretext schemes. Moreover, we achieve comparable results to state-of-the-art supervised methods that use 10 million labels from ImageNet.`,
    bgImage: "",
  },
  {
    id: 89,
    date: "April 07, 2020",
    title: "Sifter: A Hybrid Workflow for Theme-based Video Curation at Scale",
    description: `<p><b>Abstract: </b>
    User-generated content platforms curate their vast repositories into thematic compilations that facilitate the discovery of high-quality material. Platforms that seek tight editorial control employ people to do this curation, but this process involves time-consuming routine tasks, such as sifting through thousands of videos. We introduce Sifter, a system that improves the curation process by combining automated techniques with a human-powered pipeline that browses, selects, and reaches an agreement on what videos to include in a compilation. We evaluated Sifter by creating 12 compilations from over 34,000 user-generated videos. Sifter was more than three times faster than dedicated curators, and its output was of comparable quality. We reflect on the challenges and opportunities introduced by Sifter to inform the design of content curation systems that need subjective human judgments of videos at scale.</p><p><b>ACM Reference Format:</b>Yan Chen, Andrés Monroy-Hernández, Ian Wehrman, Steve Oney, Walter S. Lasecki, and Rajan Vaish. 2020. Sifter: A Hybrid Workflow for Themebased Video Curation at Scale. In Woodstock ’18: ACM Symposium on Neural Gaze Detection, June 03–05, 2018, <i>Woodstock, NY . ACM, New York, NY, USA, 9 pages. https://doi.org/10.1145/nnnnnnn.nnnnnnn</i></p>`,
    authors:
      "Yan Chen, Andrés Monroy-Hernández, Ian Wehrman, Steve Oney, Walter S. Lasecki, Rajan Vaish",
    eventID: 89,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/1EfBgzGKsNEuyqW36EUfFi/b45a8beb20cad0567a5e183eb511f277/2004.01790.pdf",
    metadescription: `User-generated content platforms curate their vast repositories into thematic compilations that facilitate the discovery of high-quality material. Platforms that seek tight editorial control employ people to do this curation, but this process involves time-consuming routine tasks, such as sifting through thousands of videos. We introduce Sifter, a system that improves the curation process by combining automated techniques with a human-powered pipeline that browses, selects, and reaches an agreement on what videos to include in a compilation. We evaluated Sifter by creating 12 compilations from over 34,000 user-generated videos. Sifter was more than three times faster than dedicated curators, and its output was of comparable quality. We reflect on the challenges and opportunities introduced by Sifter to inform the design of content curation systems that need subjective human judgments of videos at scale.`,
    bgImage: "",
  },
  {
    id: 90,
    date: "July 05, 2020",
    title:
      "LEAN-LIFE: A Label-Efficient Annotation Framework Towards Learning from Explanation",
    description: `<p><b>Abstract:</b></p><p>Successfully training a deep neural network demands a huge corpus of labeled data. However, each label only provides limited information to learn from and collecting the requisite number of labels involves massive human effort. In this work, we introduce LEAN-LIFE, a web-based, <b>L</b>abel-<b>E</b>fficient <b>A</b>nnotatio<b>N</b> framework for sequence labeling and classification tasks, with an easy-to-use UI that not only allows an annotator to provide the needed labels for a task, but also enables <b>L</b>earn<b>I</b>ng <b>F</b>rom <b>E</b>xplanations for each labeling decision. Such explanations enable us to generate useful additional labeled data from unlabeled instances, bolstering the pool of available training data. On three popular NLP tasks (named entity recognition, relation extraction, sentiment analysis), we find that using this enhanced supervision allows our models to surpass competitive baseline F1 scores by more than 5-10 percentage points, while using 2X times fewer labeled instances. Our framework is the first to utilize this enhanced supervision technique and does so for three important tasks thus providing improved annotation recommendations to users and an ability to build datasets of (data, label, explanation) triples instead of the regular (data, label) pair.</p>`,
    authors:
      "Dong-Ho Lee, Rahul Khanna, Bill Yuchen Lin, Jamin Chen, Seyeon Lee, Qinyuan Ye, Elizabeth Boschee, Leonardo Neves, Xiang Ren",
    eventID: 90,
    researchArea: "Computational Social Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4M8Glgb0wtRvB6whwsC3Do/ded0cf7008d8632502b917bd0b952e22/2004.07499.pdf",
    metadescription: `Successfully training a deep neural network demands a huge corpus of labeled data. However, each label only provides limited information to learn from and collecting the requisite number of labels involves massive human effort. In this work, we introduce LEAN-LIFE, a web-based, Label-Efficient AnnotatioN framework for sequence labeling and classification tasks, with an easy-to-use UI that not only allows an annotator to provide the needed labels for a task, but also enables LearnIng From Explanations for each labeling decision. Such explanations enable us to generate useful additional labeled data from unlabeled instances, bolstering the pool of available training data. On three popular NLP tasks (named entity recognition, relation extraction, sentiment analysis), we find that using this enhanced supervision allows our models to surpass competitive baseline F1 scores by more than 5-10 percentage points, while using 2X times fewer labeled instances. Our framework is the first to utilize this enhanced supervision technique and does so for three important tasks thus providing improved annotation recommendations to users and an ability to build datasets of (data, label, explanation) triples instead of the regular (data, label) pair.`,
    bgImage: "",
  },
  {
    id: 91,
    date: "July 09, 2020",
    title: "Interactive Video Stylization Using Few-Shot Patch-Based Training",
    description: `<p>In this paper, we present a learning-based method to the keyframe-based video stylization that allows an artist to propagate the style from a few selected keyframes to the rest of the sequence. Its key advantage is that the resulting stylization is semantically meaningful, i.e., specific parts of moving objects are stylized according to the artist’s intention. In contrast to previous style transfer techniques, our approach does not require any lengthy pre-training process nor a large training dataset. We demonstrate how to train an appearance translation network from scratch using only a few stylized exemplars while implicitly preserving temporal consistency.</p><p>This leads to a video stylization framework that supports real-time inference, parallel processing, and random access to an arbitrary output frame. It can also merge the content from multiple keyframes without the need to perform an explicit blending operation. We demonstrate its practical utility in various interactive scenarios, where the user paints over a selected keyframe and sees her style transferred to an existing recorded sequence or a live video stream.</p>`,
    authors:
      "Ondrej Texler, David Futschik, Michal Kucera, Ondrej Jamriska, Sarka Sochorova, Menglei Chai, Sergey Tulyakov, Daniel Sykora",
    eventID: 91,
    researchArea: "Computer Vision, Computer Graphics, Creative Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/Mpb7IE5v2r1Gzhn8ha8Pc/64b5cfdf062abe2148008976d12d20e2/2004.14489.pdf",
    metadescription: `In this paper, we present a learning-based method to the keyframe-based video stylization that allows an artist to propagate the style from a few selected keyframes to the rest of the sequence. Its key advantage is that the resulting stylization is semantically meaningful, i.e., specific parts of moving objects are stylized according to the artist’s intention. In contrast to previous style transfer techniques, our approach does not require any lengthy pre-training process nor a large training dataset. We demonstrate how to train an appearance translation network from scratch using only a few stylized exemplars while implicitly preserving temporal consistency.`,
    bgImage: "",
  },
  {
    id: 92,
    date: "July 09, 2020",
    title:
      "MichiGAN: Multi-Input-Conditioned Hair Image Generation for Portrait Editing",
    description: `<p>Despite the recent success of face image generation with GANs, conditional hair editing remains challenging due to the under-explored complexity of its geometry and appearance. In this paper, we present MichiGAN (Multi-InputConditioned Hair Image GAN), a novel conditional image generation method for interactive portrait hair manipulation. To provide user control over every major hair visual factor, we explicitly disentangle hair into four orthogonal attributes, including shape, structure, appearance, and background. For each of them, we design a corresponding condition module to represent, process, and convert user inputs, and modulate the image generation pipeline in ways that respect the natures of different visual attributes. All these condition modules are integrated with the backbone generator to form the final end-toend network, which allows fully-conditioned hair generation from multiple user inputs. Upon it, we also build an interactive portrait hair editing system that enables straightforward manipulation of hair by projecting intuitive and high-level user inputs such as painted masks, guiding strokes, or reference photos to well-defined condition representations. Through extensive experiments and evaluations, we demonstrate the superiority of our method regarding both result quality and user controllability.</p>`,
    authors:
      "Zhentao Tan, Menglei Chai, Dongdong Chen, Jing Liao, Qi Chu, Lu Yuan, Sergey Tulyakov, Nenghai Yu",
    eventID: 91,
    researchArea: "Computer Vision, Creative Vision",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/5N3ynN3OlD9wE5YKPtoGqG/e6e4b842b7dd74b4d9d1b7705eed2c13/tan2020michigan.pdf",
    metadescription: `Despite the recent success of face image generation with GANs, conditional hair editing remains challenging due to the under-explored complexity of its geometry and appearance. In this paper, we present MichiGAN (Multi-InputConditioned Hair Image GAN), a novel conditional image generation method for interactive portrait hair manipulation. To provide user control over every major hair visual factor, we explicitly disentangle hair into four orthogonal attributes, including shape, structure, appearance, and background. For each of them, we design a corresponding condition module to represent, process, and convert user inputs, and modulate the image generation pipeline in ways that respect the natures of different visual attributes. All these condition modules are integrated with the backbone generator to form the final end-toend network, which allows fully-conditioned hair generation from multiple user inputs. Upon it, we also build an interactive portrait hair editing system that enables straightforward manipulation of hair by projecting intuitive and high-level user inputs such as painted masks, guiding strokes, or reference photos to well-defined condition representations. Through extensive experiments and evaluations, we demonstrate the superiority of our method regarding both result quality and user controllability.`,
    bgImage: "",
  },
  {
    id: 93,
    date: "July 09, 2020",
    title: "Neural Hair Rendering",
    description: `<p><b>Abstract: </b></p><p>In this paper, we propose a generic neural-based hair rendering pipeline that can synthesize photo-realistic images from virtual 3D hair models. Unlike existing supervised translation methods that require model-level similarity to preserve consistent structure representation for both real images and fake renderings, our method adopts an unsupervised solution to work on arbitrary hair models. The key component of our method is a shared latent space to encode appearance-invariant structure information of both domains, which generates realistic renderings conditioned by extra appearance inputs. This is achieved by domain-specific pre-disentangled structure representation, partially shared domain encoder layers, and a structure discriminator. We also propose a simple yet effective temporal conditioning method to enforce consistency for video sequence generation. We demonstrate the superiority of our method by testing it on large amount of portraits, and comparing with alternative baselines and state-of-the-art unsupervised image translation methods.</p><p>
    <b>Keywords:</b> Neural rendering, unsupervised image translation</p>`,
    authors: "Menglei Chai, Jian Ren, and Sergey Tulyakov",
    eventID: 93,
    researchArea: "Computer Vision, Creative Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3BF6WsTOUBpyKTdVZchdwz/be82b03d1f5c4db784490f2f84c05aff/2004.13297.pdf",
    metadescription: `In this paper, we propose a generic neural-based hair rendering pipeline that can synthesize photo-realistic images from virtual 3D hair models. Unlike existing supervised translation methods that require model-level similarity to preserve consistent structure representation for both real images and fake renderings, our method adopts an unsupervised solution to work on arbitrary hair models. The key component of our method is a shared latent space to encode appearance-invariant structure information of both domains, which generates realistic renderings conditioned by extra appearance inputs. This is achieved by domain-specific pre-disentangled structure representation, partially shared domain encoder layers, and a structure discriminator. We also propose a simple yet effective temporal conditioning method to enforce consistency for video sequence generation. We demonstrate the superiority of our method by testing it on large amount of portraits, and comparing with alternative baselines and state-of-the-art unsupervised image translation methods.`,
    bgImage: "",
  },
  {
    id: 94,
    date: "August 13, 2020",
    title: "Social App Accessibility for Deaf Signers",
    description: `<p>Social media platforms support the sharing of written text, video, and audio. All of these formats may be inaccessible to people who are deaf or hard of hearing (DHH), particularly those who primarily communicate via sign language, people who we call Deaf signers. We study how Deaf signers engage with social platforms, focusing on how they share content and the barriers they face. We employ a mixed-methods approach involving seven in-depth interviews and a survey of a larger population (n = 60). We find that Deaf signers share the most in written English, despite their desire to share in sign language. We further identify key areas of difficulty in consuming content (e.g., lack of captions for spoken content in videos) and producing content (e.g., captioning signed videos, signing into a phone camera) on social media platforms. Our results both provide novel insights into social media use by Deaf signers and reinforce prior findings on DHH communication more generally, while revealing potential ways to make social media platforms more accessible to Deaf signers.</p>`,
    authors:
      "Kelly Mack, Danielle Bragg, Meredith Ringel Morris, Maarten W. Bos, Isabelle Albi, Andrés Monroy-Hernández",
    eventID: 94,
    researchArea: "Computational Social Science, Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/5k23GHu1TNQ7kgY41ORh5l/a416f998f36372a688ee732b945f3acd/2008.05691.pdf",
    metadescription: `Social media platforms support the sharing of written text, video, and audio. All of these formats may be inaccessible to people who are deaf or hard of hearing (DHH), particularly those who primarily communicate via sign language, people who we call Deaf signers. We study how Deaf signers engage with social platforms, focusing on how they share content and the barriers they face. We employ a mixed-methods approach involving seven in-depth interviews and a survey of a larger population (n = 60). We find that Deaf signers share the most in written English, despite their desire to share in sign language. We further identify key areas of difficulty in consuming content (e.g., lack of captions for spoken content in videos) and producing content (e.g., captioning signed videos, signing into a phone camera) on social media platforms. Our results both provide novel insights into social media use by Deaf signers and reinforce prior findings on DHH communication more generally, while revealing potential ways to make social media platforms more accessible to Deaf signers.`,
    bgImage: "",
  },
  {
    id: 95,
    date: "September 07, 2020",
    title: "Large Scale Photometric Bundle Adjustment",
    description: `<p><b>Abstract:</b>&nbsp;Direct methods have shown promise on visual odometry and SLAM, leading to greater accuracy and robustness over feature-based methods. However, offline 3-d reconstruction from internet images has not yet benefited from a joint, photometric optimization over dense geometry and camera parameters. Issues such as the lack of brightness constancy, and the sheer volume of data, make this a more challenging task. This work presents a framework for jointly optimizing millions of scene points and hundreds of camera poses and intrinsics, using a photometric cost that is invariant to local lighting changes. The improvement in metric reconstruction accuracy that it confers over feature-based bundle adjustment is demonstrated on the large-scale Tanks &amp; Temples benchmark. We further demonstrate qualitative reconstruction improvements on an internet photo collection, with challenging diversity in lighting and camera intrinsics.</p>`,
    authors: "Oliver J. Woodford, Edward Rosten",
    eventID: 95,
    researchArea: "Creative Vision",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/nZdLwL9JzYZn13Z1Inatm/81871c162ff2e6ffbf8b61d1cb8f9422/0822.pdf",
    metadescription: `Direct methods have shown promise on visual odometry and SLAM, leading to greater accuracy and robustness over feature-based methods. However, offline 3-d reconstruction from internet images has not yet benefited from a joint, photometric optimization over dense geometry and camera parameters. Issues such as the lack of brightness constancy, and the sheer volume of data, make this a more challenging task. This work presents a framework for jointly optimizing millions of scene points and hundreds of camera poses and intrinsics, using a photometric cost that is invariant to local lighting changes. The improvement in metric reconstruction accuracy that it confers over feature-based bundle adjustment is demonstrated on the large-scale Tanks & Temples benchmark. We further demonstrate qualitative reconstruction improvements on an internet photo collection, with challenging diversity in lighting and camera intrinsics.`,
    bgImage: "",
  },
  {
    id: 96,
    date: "September 28, 2020",
    title:
      "A Good Image Generator Is What You Need for High-Resolution Video Synthesis",
    description: `<p><b>ABSTRACT</b></p><p>Image and video synthesis are closely related areas aiming at generating content from noise. While rapid progress has been demonstrated in improving image based models to handle large resolutions, high-quality renderings, and wide variations in image content, achieving comparable video generation results remains problematic. We present a framework that leverages contemporary image generators to render high-resolution videos. We frame the video synthesis problem as discovering a trajectory in the latent space of a pre-trained and fixed image generator. Not only does such a framework render high-resolution videos, but it also is an order of magnitude more computationally efficient. We introduce a motion generator that discovers the desired trajectory, in which content and motion are disentangled. With such a representation, our framework allows for a broad range of applications, including content and motion manipulation. Furthermore, we introduce a new task, which we call cross-domain video synthesis, in which the image and motion generators are trained on disjoint datasets belonging to different domains. This allows for generating moving objects for which the desired video data is not available. Extensive experiments on various datasets demonstrate the advantages of our methods over existing video generation techniques. </p><p>Code will be released at https://github.com/snap-research/MoCoGAN-HD.</p>`,
    authors:
      "Yu Tian, Jian Ren, Menglei Chai, Kyle Olszewski, Xi Peng, Dimitris N. Metaxas, Sergey Tulyakov",
    eventID: 96,
    researchArea: "Creative Vision",
    PDFLink:
      "https://downloads.ctfassets.net/btheynltg5cn/5bv0CSn2Gz2No3YFNRB8cW/6f770978b86b6d86c11629447bc7ba19/pdf",
    metadescription: `Image and video synthesis are closely related areas aiming at generating content from noise. While rapid progress has been demonstrated in improving image based models to handle large resolutions, high-quality renderings, and wide variations in image content, achieving comparable video generation results remains problematic. We present a framework that leverages contemporary image generators to render high-resolution videos. We frame the video synthesis problem as discovering a trajectory in the latent space of a pre-trained and fixed image generator. Not only does such a framework render high-resolution videos, but it also is an order of magnitude more computationally efficient. We introduce a motion generator that discovers the desired trajectory, in which content and motion are disentangled. With such a representation, our framework allows for a broad range of applications, including content and motion manipulation. Furthermore, we introduce a new task, which we call cross-domain video synthesis, in which the image and motion generators are trained on disjoint datasets belonging to different domains. This allows for generating moving objects for which the desired video data is not available. Extensive experiments on various datasets demonstrate the advantages of our methods over existing video generation techniques.`,
    bgImage: "",
  },
  {
    id: 97,
    date: "November 02, 2020",
    title:
      "The Devil is in the Details: Evaluating Limitations of Transformer-based Methods for Granular Tasks",
    description: `<p><b>Abstract</b>
    Contextual embeddings derived from transformer-based neural language models have shown state-of-the-art performance for various tasks such as question answering, sentiment analysis, and textual similarity in recent years. Extensive work shows how accurately such models can represent abstract, semantic information present in text. In this expository work, we explore a tangent direction and analyze such models’ performance on tasks that require a more granular level of representation. We focus on the problem of textual similarity from two perspectives: matching documents on a granular level (requiring embeddings to capture fine-grained attributes in the text), and an abstract level (requiring embeddings to capture overall textual semantics).</p><p>We empirically demonstrate, across two datasets from different domains, that despite high performance in abstract document matching as expected, contextual embeddings are consistently (and at times, vastly) outperformed by simple baselines like TF-IDF for more granular tasks. We then propose a simple but effective method to incorporate TF-IDF into models that use contextual embeddings, achieving relative improvements of up to 36% on granular tasks.</p>`,
    authors: "Brihi Joshi, Neil Shah, Francesco Barbieri, Leonardo Neves",
    eventID: 97,
    researchArea: "Computational Social Science, Natural Language Processing",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/WUgIBbb5JQ4yXsZTLi2ay/25d747d901068f12be951a9d4c4095b8/2011.01196.pdf",
    metadescription: `Contextual embeddings derived from transformer-based neural language models have shown state-of-the-art performance for various tasks such as question answering, sentiment analysis, and textual similarity in recent years. Extensive work shows how accurately such models can represent abstract, semantic information present in text. In this expository work, we explore a tangent direction and analyze such models’ performance on tasks that require a more granular level of representation. We focus on the problem of textual similarity from two perspectives: matching documents on a granular level (requiring embeddings to capture fine-grained attributes in the text), and an abstract level (requiring embeddings to capture overall textual semantics).`,
    bgImage: "",
  },
  {
    id: 98,
    date: "November 16, 2020",
    title:
      "TWEET EVAL: Unified Benchmark and Comparative Evaluation for Tweet Classification",
    description: `<p><b>Abstract</b>
    The experimental landscape in natural language processing for social media is too fragmented. Each year, new shared tasks and datasets are proposed, ranging from classics like sentiment analysis to irony detection or emoji prediction. Therefore, it is unclear what the current state of the art is, as there is no standardized evaluation protocol, neither a strong set of baselines trained on such domainspecific data. In this paper, we propose a new evaluation framework (TWEETEVAL) consisting of seven heterogeneous Twitter-specific classification tasks. We also provide a strong set of baselines as starting point, and compare different language modeling pre-training strategies. Our initial experiments show the effectiveness of starting off with existing pretrained generic language models, and continue training them on Twitter corpora.</p>`,
    authors:
      "Francesco Barbieri, Jose Camacho-Collados, Leonardo Neves, Luis Espinosa-Anke†",
    eventID: 98,
    researchArea: "Computational Social Science, Natural Language Processing",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/3mKDgDM0vE6hMvPZaisEZZ/aef05f083605760a1efc7e39e67c5d27/2020.findings-emnlp.148.pdf",
    metadescription: `The experimental landscape in natural language processing for social media is too fragmented. Each year, new shared tasks and datasets are proposed, ranging from classics like sentiment analysis to irony detection or emoji prediction. Therefore, it is unclear what the current state of the art is, as there is no standardized evaluation protocol, neither a strong set of baselines trained on such domainspecific data. In this paper, we propose a new evaluation framework (TWEETEVAL) consisting of seven heterogeneous Twitter-specific classification tasks. We also provide a strong set of baselines as starting point, and compare different language modeling pre-training strategies. Our initial experiments show the effectiveness of starting off with existing pretrained generic language models, and continue training them on Twitter corpora.`,
    bgImage: "",
  },
  {
    id: 99,
    date: "December 02, 2020",
    title: "Data Augmentation for Graph Neural Networks",
    description: `<p><b>Abstract</b></p><p>
    Data augmentation has been widely used to improve generalizability of machine learning models. However, comparatively little work studies data augmentation for graphs. This is largely due to the complex, non-Euclidean structure of graphs, which limits possible manipulation operations. Augmentation operations commonly used in vision and language have no analogs for graphs. Our work studies graph data augmentation for graph neural networks (GNNs) in the context of improving semi-supervised node-classification. We discuss practical and theoretical motivations, considerations and strategies for graph data augmentation. Our work shows that neural edge predictors can effectively encode classhomophilic structure to promote intra-class edges and demote inter-class edges in given graph structure, and our main contribution introduces the GAUG graph data augmentation framework, which leverages these insights to improve performance in GNN-based node classification via edge prediction. Extensive experiments on multiple benchmarks show that augmentation via GAUG improves performance across GNN architectures and datasets.</p>`,
    authors:
      "Tong Zhao, Yozen Liu, Leonardo Neves, Oliver Woodford, Meng Jiang, Neil Shah",
    eventID: 99,
    researchArea: "Computational Social Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/6U9l1ptDcrGoUPBOrDrChh/23ddcd2a0ab783ab47936196eeb15e2a/2006.06830.pdf",
    metadescription: `Data augmentation has been widely used to improve generalizability of machine learning models. However, comparatively little work studies data augmentation for graphs. This is largely due to the complex, non-Euclidean structure of graphs, which limits possible manipulation operations. Augmentation operations commonly used in vision and language have no analogs for graphs. Our work studies graph data augmentation for graph neural networks (GNNs) in the context of improving semi-supervised node-classification. We discuss practical and theoretical motivations, considerations and strategies for graph data augmentation. Our work shows that neural edge predictors can effectively encode classhomophilic structure to promote intra-class edges and demote inter-class edges in given graph structure, and our main contribution introduces the GAUG graph data augmentation framework, which leverages these insights to improve performance in GNN-based node classification via edge prediction. Extensive experiments on multiple benchmarks show that augmentation via GAUG improves performance across GNN architectures and datasets.`,
    bgImage: "",
  },
  {
    id: 100,
    date: "December 05, 2020",
    title: "FairOD: Fairness-aware Outlier Detection",
    description: `<p>Fairness and Outlier Detection (OD) are closely related, as it is exactly the goal of OD to spot rare, minority samples in a given population. When being a minority (as defined by protected variables, e.g. race/ethnicity/sex/age) does not reflect positive-class membership (e.g. criminal/fraud), however, OD produces unjust outcomes. Surprisingly, fairness-aware OD has been almost untouched in prior work, as fair machine learning literature mainly focus on supervised settings. Our work aims to bridge this gap. Specifically, we develop desiderata capturing well-motivated fairness criteria for OD, and systematically formalize the fair OD problem. Further, guided by our desiderata, we propose FairOD, a fairness-aware outlier detector, which has the following, desirable properties: FairOD (1) does not employ disparate treatment at test time, (2) aims to flag equal proportions of samples from all groups (i.e. obtain group fairness, via statistical parity), and (3) strives to flag truly high-risk fraction of samples within each group. Extensive experiments on a diverse set of synthetic and real world datasets show that FairOD produces outcomes that are fair with respect to protected variables, while performing comparable to (and in some cases, even better than) fairness-agnostic detectors in terms of detection performance.</p>`,
    authors: "Shubhranshu Shekhar, Neil Shah, Leman Akoglu",
    eventID: 100,
    researchArea: "Computational Social Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/4bSVQh0NCd9vuemQ9Euk8a/259be56e72ba2c0e70522f459c755861/2012.03063.pdf",
    metadescription: `Fairness and Outlier Detection (OD) are closely related, as it is exactly the goal of OD to spot rare, minority samples in a given population. When being a minority (as defined by protected variables, e.g. race/ethnicity/sex/age) does not reflect positive-class membership (e.g. criminal/fraud), however, OD produces unjust outcomes. Surprisingly, fairness-aware OD has been almost untouched in prior work, as fair machine learning literature mainly focus on supervised settings. Our work aims to bridge this gap. Specifically, we develop desiderata capturing well-motivated fairness criteria for OD, and systematically formalize the fair OD problem. Further, guided by our desiderata, we propose FairOD, a fairness-aware outlier detector, which has the following, desirable properties: FairOD (1) does not employ disparate treatment at test time, (2) aims to flag equal proportions of samples from all groups (i.e. obtain group fairness, via statistical parity), and (3) strives to flag truly high-risk fraction of samples within each group. Extensive experiments on a diverse set of synthetic and real world datasets show that FairOD produces outcomes that are fair with respect to protected variables, while performing comparable to (and in some cases, even better than) fairness-agnostic detectors in terms of detection performance.`,
    bgImage: "",
  },
  {
    id: 101,
    date: "January 04, 2021",
    title:
      "AdverTiming Matters: Examining User Ad Consumption for Effective Ad Allocations on Social Media",
    description: `<p>Showing ads delivers revenue for online content distributors, but ad exposure can compromise user experience and cause user fatigue and frustration. Correctly balancing ads with other content is imperative. Currently, ad allocation relies primarily on demographics and inferred user interests, which are treated as static features and can be privacy-intrusive. This paper uses person-centric and momentary context features to understand optimal ad-timing. In a quasi-experimental study on a three-month longitudinal dataset of 100K Snapchat users, we find ad timing influences ad effectiveness. We draw insights on the relationship between ad effectiveness and momentary behaviors such as duration, interactivity, and interaction diversity. We simulate ad reallocation, finding that our study-driven insights lead to greater value for the platform. This work advances our understanding of ad consumption and bears implications for designing responsible ad allocation systems, improving both user and platform outcomes. We discuss privacy-preserving components and ethical implications of our work.</p>`,
    authors:
      "Koustuv Saha, Yozen Liu, Nicholas Vincent, Farhan Asif Chowdhury, Leonardo Neves, Neil Shah, Maarten Bos",
    eventID: 101,
    researchArea: "Computational Social Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/w1aqHgJ3zsegGpJUYKxbN/323c07d286a10d875a58c12d348ffad3/CHI21_AdverTiming_DoubleColumn.pdf",
    metadescription: `Showing ads delivers revenue for online content distributors, but ad exposure can compromise user experience and cause user fatigue and frustration. Correctly balancing ads with other content is imperative. Currently, ad allocation relies primarily on demographics and inferred user interests, which are treated as static features and can be privacy-intrusive. This paper uses person-centric and momentary context features to understand optimal ad-timing. In a quasi-experimental study on a three-month longitudinal dataset of 100K Snapchat users, we find ad timing influences ad effectiveness. We draw insights on the relationship between ad effectiveness and momentary behaviors such as duration, interactivity, and interaction diversity. We simulate ad reallocation, finding that our study-driven insights lead to greater value for the platform. This work advances our understanding of ad consumption and bears implications for designing responsible ad allocation systems, improving both user and platform outcomes. We discuss privacy-preserving components and ethical implications of our work.`,
    bgImage: "",
  },
  {
    id: 102,
    date: "February 08, 2021",
    title:
      "Graph Neural Networks for Friend Ranking in Large-scale Social Platforms",
    description: `<p><b>ABSTRACT</b></p><p> Graph Neural Networks (GNNs) have recently enabled substantial advances in graph learning. Despite their rich representational capacity, GNNs remain under-explored for large-scale social modeling applications. One such industrially ubiquitous application is friend suggestion: recommending users other candidate users to befriend, to improve user connectivity, retention and engagement. However, modeling such user-user interactions on large-scale social platforms poses unique challenges: such graphs often have heavy-tailed degree distributions, where a significant fraction of users are inactive and have limited structural and engagement information. Moreover, users interact with different functionalities, communicate with diverse groups, and have multifaceted interaction patterns. We study the application of GNNs for friend suggestion, providing the first investigation of GNN design for this task, to our knowledge. To leverage the rich knowledge of in-platform actions, we formulate friend suggestion as multi-faceted friend ranking with multi-modal user features and link communication features. We design a neural architecture GraFRank to learn expressive user representations from multiple feature modalities and user-user interactions. Specifically, GraFRank employs modality-specific neighbor aggregators and cross-modality attentions to learn multi-faceted user representations. We conduct experiments on two multi-million user datasets from Snapchat, a leading mobile social platform, where
    GraFRank outperforms several state-of-the-art approaches on candidate retrieval (by 30% MRR) and ranking (by 20% MRR) tasks. Moreover, our qualitative analysis indicates notable gains for critical populations of less-active and low-degree users.</p>`,
    authors: "Aravind Sankar, Yozen Liu, Jun Yu, Neil Shah",
    eventID: 102,
    researchArea: "Computational Social Science",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/53nweIQ8YcXmh9uRxAssqi/e43c35ef60dd613fe25689ca55e35ac9/GrafRank.WWW.21.pdf",
    metadescription: `Graph Neural Networks (GNNs) have recently enabled substantial advances in graph learning. Despite their rich representational capacity, GNNs remain under-explored for large-scale social modeling applications. One such industrially ubiquitous application is friend suggestion: recommending users other candidate users to befriend, to improve user connectivity, retention and engagement. However, modeling such user-user interactions on large-scale social platforms poses unique challenges: such graphs often have heavy-tailed degree distributions, where a significant fraction of users are inactive and have limited structural and engagement information. Moreover, users interact with different functionalities, communicate with diverse groups, and have multifaceted interaction patterns. We study the application of GNNs for friend suggestion, providing the first investigation of GNN design for this task, to our knowledge. To leverage the rich knowledge of in-platform actions, we formulate friend suggestion as multi-faceted friend ranking with multi-modal user features and link communication features. We design a neural architecture GraFRank to learn expressive user representations from multiple feature modalities and user-user interactions. Specifically, GraFRank employs modality-specific neighbor aggregators and cross-modality attentions to learn multi-faceted user representations. We conduct experiments on two multi-million user datasets from Snapchat, a leading mobile social platform, where GraFRank outperforms several state-of-the-art approaches on candidate retrieval (by 30% MRR) and ranking (by 20% MRR) tasks. Moreover, our qualitative analysis indicates notable gains for critical populations of less-active and low-degree users.`,
    bgImage: "",
  },
  {
    id: 103,
    date: "February 16, 2021",
    title:
      "Significant Otter: Understanding the Role of Biosignals in Communication",
    description: `<p>ABSTRACT</p><p>With the growing ubiquity of wearable devices, sensed physiological responses provide new means to connect with others. While recent research demonstrates the expressive potential for biosignals, the value of sharing these personal data remains unclear. To understand their role in communication, we created Significant Otter, an Apple Watch/iPhone app that enables romantic partners to share and respond to each other’s biosignals in the form of animated otter avatars. In a one-month study with 20 couples, participants used Significant Otter with biosignals sensing OFF and ON. We found that while sensing OFF enabled couples to keep in touch, sensing ON enabled easier and more authentic communication that fostered social connection. However, the addition of biosignals introduced concerns about autonomy and agency over the messages they sent. We discuss design implications and future directions for communication systems that recommend messages based on biosignals.</p>`,
    authors:
      "Fannie Liu, Chunjong Park, Yu Jiang Tham, Tsung-Yu Tsai, Laura Dabbish, Geoff Kaufman, Andrés Monroy-Hernández",
    eventID: 101,
    researchArea: "Human Computer Interaction",
    PDFLink:
      "https://assets.ctfassets.net/btheynltg5cn/eOL9X92uuV2MjAFYZRgYX/a3ee211a9baf1ec472de66dfd360f028/2102.08235.pdf",
    metadescription: `With the growing ubiquity of wearable devices, sensed physiological responses provide new means to connect with others. While recent research demonstrates the expressive potential for biosignals, the value of sharing these personal data remains unclear. To understand their role in communication, we created Significant Otter, an Apple Watch/iPhone app that enables romantic partners to share and respond to each other’s biosignals in the form of animated otter avatars. In a one-month study with 20 couples, participants used Significant Otter with biosignals sensing OFF and ON. We found that while sensing OFF enabled couples to keep in touch, sensing ON enabled easier and more authentic communication that fostered social connection. However, the addition of biosignals introduced concerns about autonomy and agency over the messages they sent. We discuss design implications and future directions for communication systems that recommend messages based on biosignals.`,
    bgImage:
      "https://images.ctfassets.net/btheynltg5cn/1sZ3K3mOk9WmgdEORIWYcA/1a26da31f46bf51d1124ef802e17e915/Screen_Shot_2021-02-20_at_2.48.12_AM.png?w=400",
  },
  {
    id: 104,
    date: "March 15, 2021",
    title:
      "CEAM: The Effectiveness of Cyclic and Ephemeral Attention Models of User Behavior on Social Platforms",
    description: `<p><b>Abstract</b></p><p>To improve the user experience as well as business outcomes, social platforms aim to predict user behavior. To this end, recurrent models are often used to predict a user’s next behavior based on their most recent behavior. However, people have habits and routines, making it plausible to predict their behavior from more than just their most recent activity. Our work focuses on the interplay between ephemeral and cyclical components of user behaviors. By utilizing user activity data from social platform Snapchat, we uncover cyclic and ephemeral usage patterns on a per user-level. Based on our findings, we imbued recurrent models with awareness: we augment an RNN with a cyclic module to complement traditionalRNNs that model ephemeral behaviors and allow a flexible weighting of the two for the prediction task. We conducted extensive experiments to evaluate our model’s performance on four user behavior prediction tasks on the Snapchat platform.We achieve improved results on each task compared against existing methods, using this simple, but important insight in user behavior: Both cyclical and ephemeral components matter. We show that in some situations and for some people, ephemeral components may be more helpful for predicting behavior, while for others and in other situations, cyclical components may carry more weight.</p>`,
    authors:
      "Farhan Chowdhury, Yozen Liu, Nick Vincent, Koustuv Saha, Leo Neves, Neil Shah, Maarten Bos",
    eventID: 104,
    researchArea: "Computational Social Science",
    PDFLink: "",
    metadescription: `To improve the user experience as well as business outcomes, social platforms aim to predict user behavior. To this end, recurrent models are often used to predict a user’s next behavior based on their most recent behavior. However, people have habits and routines, making it plausible to predict their behavior from more than just their most recent activity. Our work focuses on the interplay between ephemeral and cyclical components of user behaviors. By utilizing user activity data from social platform Snapchat, we uncover cyclic and ephemeral usage patterns on a per user-level. Based on our findings, we imbued recurrent models with awareness: we augment an RNN with a cyclic module to complement traditionalRNNs that model ephemeral behaviors and allow a flexible weighting of the two for the prediction task. We conducted extensive experiments to evaluate our model’s performance on four user behavior prediction tasks on the Snapchat platform.We achieve improved results on each task compared against existing methods, using this simple, but important insight in user behavior: Both cyclical and ephemeral components matter. We show that in some situations and for some people, ephemeral components may be more helpful for predicting behavior, while for others and in other situations, cyclical components may carry more weight.`,
    bgImage: "",
  },
  {
    id: 105,
    date: "March 15, 2021",
    title:
      "Online Communication Shifts in the Midst of the Covid-19 Pandemic: A Case Study on Snapchat",
    description: `<p><b>Abstract</b></p><p>The Covid-19 pandemic has created large shifts in how people stay connected with each other in lieu of social distancing and isolation measures. More and more, individuals have turned to online communications as a necessary replacement for in-person interaction. Despite this, the research community has little understanding of how online communications have been influenced by the offline impacts of Covid-19. Our work touches upon this topic. Specifically, we study research questions around the impact of Covid-19 on online public and private sharing propensity, its influence on online communication homophily, and correlations between online communication and offline case severity in the United States. To do so, we study the usage patterns of 79 million US-based users on Snapchat, a large, leading mobile multimedia-driven social sharing platform. Our findings suggest that Covid-19 has increased propensity to privately communicate with friends, while decreasing propensity to publicly share content when users are out-and-about. Moreover, online communications have observed a marked decrease in baseline homophily across locations, ages and genders, with relative increases in cross-group communications. Finally, we observe that increased offline positive Covid-19 case severity in US states is associated with widening gaps between across-state and within-state communication increases after the onset of Covid-19, as well as marked declines in public sharing. We hope our findings drive further interest and work on online communication changes during pandemics and other extended times of crisis.</p>`,
    authors:
      "Qi Yang, Weinan Wang, Lucas Pierce, Rajan Vaish, Xiaolin Shi, Neil Shah",
    eventID: 104,
    researchArea: "Computational Social Science, Data Science",
    PDFLink: "",
    metadescription: `The Covid-19 pandemic has created large shifts in how people stay connected with each other in lieu of social distancing and isolation measures. More and more, individuals have turned to online communications as a necessary replacement for in-person interaction. Despite this, the research community has little understanding of how online communications have been influenced by the offline impacts of Covid-19. Our work touches upon this topic. Specifically, we study research questions around the impact of Covid-19 on online public and private sharing propensity, its influence on online communication homophily, and correlations between online communication and offline case severity in the United States. To do so, we study the usage patterns of 79 million US-based users on Snapchat, a large, leading mobile multimedia-driven social sharing platform. Our findings suggest that Covid-19 has increased propensity to privately communicate with friends, while decreasing propensity to publicly share content when users are out-and-about. Moreover, online communications have observed a marked decrease in baseline homophily across locations, ages and genders, with relative increases in cross-group communications. Finally, we observe that increased offline positive Covid-19 case severity in US states is associated with widening gaps between across-state and within-state communication increases after the onset of Covid-19, as well as marked declines in public sharing. We hope our findings drive further interest and work on online communication changes during pandemics and other extended times of crisis.`,
    bgImage: "",
  },
  // {
  //   id: 106,
  //   date: "",
  //   title: "",
  //   description: ``,
  //   authors: "",
  //   eventID: 106,
  //   researchArea: "",
  //   PDFLink: "",
  //   metadescription: ``,
  //   bgImage: "",
  // },
];

publicationsList.forEach((publication) => {
  publication.metaTitle = publication.title + " - Snap Research";
  publication.slug = publication.title.split(" ").join("-").toLocaleLowerCase();
  publication.url = "publications/publication.html#" + publication.slug;
  publication.link = "publications/publication.html";
});

publicationsList.sort((a, b) => new Date(b.date) - new Date(a.date));

function getPublicationsByIDs(id, path, noSort) {
  if (!id.length) return [];
  let result = [];
  id.map((insideID) => {
    publicationsList.map((item) => {
      if (item.id === insideID) {
        result.push(item);
      }
    });
  });
  result = result.map((item) => {
    const tempObj = { ...item };
    tempObj.link = path + tempObj.link;
    return tempObj;
  });
  if (noSort) return result;
  return result.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getPublicationBySlug(slug) {
  let result = publicationsList.filter((item) => slug.slice(1) === item.slug);
  return result;
}

publicationsList.map((obj) => {
  let result = eventsList.filter((event) => {
    return event.id === obj.eventID;
  });
  if (!result.length) return obj;
  return Object.assign(obj, { eventShort: result[0].eventShort });
});
