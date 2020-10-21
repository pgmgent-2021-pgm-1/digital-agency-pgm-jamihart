(() => {
  const portfolio = [{
    titel: 'Veggie-boat',
    synopsis: 'Maak een krachtig campagnebeeld dat zal gebruikt worden om een vegetarische organisatie te promoten.',
    thumbnail: 'https://dl.airtable.com/.attachments/2861dba0445bb1563159cb8da02a1189/6c605300/A_2_Brughmans_Karolien_sm.jpg',
    likes: Math.floor((Math.random() * 100) + 1),
    views: Math.floor((Math.random() * 100) + 200),
    created: 1603034100000,
    modified: 1603275000000,
    assets: [{
      assetTitel: 'Veggie-boat - image 001',
      type: 'Image',
      sourceUrl: 'https://dl.airtable.com/.attachments/a41b33fc8178663cf4c778e377b1c225/5d5b49e6/A_2_VanWynsberge_Gilles_opt.jpg',
    },
    {
      assetTitel: 'Veggie-boat - image 002',
      type: 'Image',
      sourceUrl: 'https://dl.airtable.com/.attachments/91cd04e2cb6d6cf80bc5d5121b1d0591/6ba8790c/D_2_Reyskens_Najate_opt.jpg',
    },
    {
      assetTitel: 'Veggie-boat - image 003',
      type: 'Image',
      sourceUrl: 'https://dl.airtable.com/.attachments/4c882ad2d1aaf0eb675a2f5e45d15866/d885cb91/E_2_VanEeckhoutte_Fran_opt.jpg',
    },
    ],
  },
  {
    titel: 'Skive',
    synopsis: 'Skive is een platform waar muziekfanaten hun favoriete muziek kunnen delen',
    thumbnail: 'https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png',
    likes: Math.floor((Math.random() * 100) + 1),
    views: Math.floor((Math.random() * 100) + 200),
    created: 1603117500000,
    modified: 1603310100000,
    assets: [{
      assetTitel: 'Skive  - image 001',
      type: 'Image',
      sourceUrl: 'https://dl.airtable.com/.attachments/24b31d875c54dabf3e1c0db2ba01f2ae/5e55d2c8/Schermafbeelding2020-05-16om09.49.28.png',
    },
    {
      assetTitel: 'Skive  - image 001',
      type: 'Image',
      sourceUrl: 'https://dl.airtable.com/.attachments/2887017db73fe88028b75fb8d34d8477/ec1ab497/Schermafbeelding2020-05-16om09.49.37.png',
    },
    ],
  },
  ];

  const app = {
    showProjectsInConsole() {
      const output = `
====================================================================================================================================
|                                                         PORTFOLIO                                                                |
====================================================================================================================================
${this.getStringForProjects(portfolio)}`;
      console.log(output);
    },
    getStringForProjects() {
      let tempStr = '';
      var self = this;
      portfolio.forEach(function (project, index) {
        tempStr += `Project ${index + 1}: \t ${project.titel}
====================================================================================================================================
Synopsis: \t ${project.synopsis}
Tumbnail: \t ${project.thumbnail}
Likes: \t\t ${project.likes}
Views: \t\t ${project.views}
Created at: \t ${new Date(project.created).toISOString()}
Modified at: \t ${new Date(project.modified).toISOString()}
------------------------------------------------------------------------------------------------------------------------------------
Assets
------------------------------------------------------------------------------------------------------------------------------------
${self.getStringForAssets(project.assets)}`;
      });
      return tempStr;
    },

    getStringForAssets(assets) {
      let tempStr = '';
      assets.forEach(function (ass, index) {
        tempStr += `Asset ${index + 1}: \t ${ass.assetTitel} (type: ${ass.type})
\t\t ${ass.sourceUrl}\n`;
        if (index > assets.length - 2) {
          tempStr += '====================================================================================================================================\n';
        }
      });
      return tempStr;
    },

  };

  app.showProjectsInConsole();
})();
