export default {
    cms_manual_init: true,
    publish_mode: editorial_workflow,
    backend: {
      name: 'git-gateway',
      repo: 'Iannes/netlify-cms-next',
      branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: 'Home',
            name: 'home',
            file: 'content/pages/home.md',
            fields: [
              {
                label: 'Hero Title',
                name: 'hero_title',
                widget: 'string',
              },
              {
                label: 'Hero Description',
                name: 'hero_description',
                widget: 'markdown',
              },
              {
                label: 'Hero Image',
                name: 'hero_image',
                widget: 'image'
              }
            ],
          },
        ],
      },
    ],
  };