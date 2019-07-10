export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d25f3df5f233f360b7a78ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jw19dtkk',
                  apiId: '9297128f-024e-4203-aed1-072f84052a65'
                },
                {
                  buildHookId: '5d25f3dfd5908258c8fd905c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mog8jkhn',
                  apiId: '8f362d1a-b23f-48b9-aa15-5718d47ccfe7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanmacolino123/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mog8jkhn.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
