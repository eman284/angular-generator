module.exports = {
    options: {
      'skip-welcome-message': {
        desc: 'Skips the welcome message',
        type: Boolean
      },
      'skip-install-message': {
        desc: 'Skips the message after the installation of dependencies',
        type: Boolean
      },
      'test-framework': {
        desc: 'Test framework to be invoked',
        type: String,
        defaults: 'mocha'
      },
      'skip-test-framework': {
        desc: 'Skips adding the test framework',
        type: Boolean
      }
    },
    prompts: [
        {
            type    : 'input',
            name    : 'includeTitle',
            message : 'ًWhat is project name ?',
          },
        {
            type: 'checkbox',
            name: 'identityServer',
            message: 'Which additional Identity Server would you like to include?',
            choices: [
            {
                name: 'Kecklock',
                value: 'includeKecklock',
                checked: false
            },
            {
                name: 'without IS',
                value: 'includeWithoutIS',
                checked: false
            }
        ]
        },
        {
            type: 'confirm',
            name: 'includeMultiTheme',
            message: 'Would you like to enable the multi theme?'
        },
        {
            type: 'confirm',
            name: 'includeSSR',
            message: 'Would you like to enable the server side rendering (SSR)?'
        },
        {
            type: 'checkbox',
            name: 'selectLanguage',
            message: 'Which language would you like to include?',
            choices: [
            {
                name: 'Arabic Language',
                value: 'includeArLang',
                checked: false
            },
            {
                name: 'English Language',
                value: 'includeEnLang',
                checked: false
            },
            {
                name: 'French Language',
                value: 'includeFrLang',
                checked: false
            },
          ]
        },
        {
          type: 'checkbox',
          name: 'selectDesginSystem',
          message: 'Which Desgin System would you like to include?',
          choices: [
          {
              name: 'MCI',
              value: 'includeMCI',
              checked: false
          },
          {
              name: 'MOJ',
              value: 'includeMOJ',
              checked: false
          },
          {
              name: 'SASSO',
              value: 'includeSASSO',
              checked: false
          },
          ,
          {
              name: 'SFDA',
              value: 'includeSFDA',
              checked: false
          },
          ,
          {
              name: 'SAIP',
              value: 'includeSAIP',
              checked: false
          },
          ,
          {
              name: 'Monshaat',
              value: 'includeMonshaat',
              checked: false
          },
          {
              name: 'MOMRA',
              value: 'includeMOMRA',
              checked: false
          },
          {
              name: 'Amaly',
              value: 'includeAmaly',
              checked: false
          },
          {
              name: 'Thiqah',
              value: 'includeThiqah',
              checked: false
          },
          
          ]
     
        },
        {
          type: 'checkbox',
          name: 'selectComponent',
          message: 'Which components would you like to include?',
          choices: [
          {
              name: 'Modal',
              value: 'includeModal',
              checked: false
          },
          {
              name: 'Full page loader',
              value: 'includeFullPageLoader',
              checked: false
          }
          ,
          {
              name: 'Block loader',
              value: 'includeBlockLoader',
              checked: false
          },

          {
              name: 'Collapse',
              value: 'includeCollapse',
              checked: false
          }
          ,
          {
              name: 'Dropdown (Select2)',
              value: 'includeDropdownSelect2',
              checked: false
          },
          ,
          {
              name: 'Charts',
              value: 'includeCharts',
              checked: false
          }
          ]
      }, 
      {
        type: 'checkbox',
        name: 'selectComponent',
        message: 'Which components would you like to include?',
        choices: [
        {
            name: 'Modal',
            value: 'includeModal',
            checked: false
        },
        {
            name: 'Full page loader',
            value: 'includeFullPageLoader',
            checked: false
        }
        ,
        {
            name: 'Block loader',
            value: 'includeBlockLoader',
            checked: false
        },
        {
            name: 'Collapse',
            value: 'includeCollapse',
            checked: false
        }
        ,
        {
            name: 'Dropdown (Select2)',
            value: 'includeDropdownSelect2',
            checked: false
        },
        ,
        {
            name: 'Charts',
            value: 'includeCharts',
            checked: false
        }
          ]
      },
      {
        type: 'checkbox',
        name: 'selectPages',
        message: 'Which additional Pages would you like to include?',
        choices: [
        {
            name: 'Order details',
            value: 'includeOrderDetails',
            checked: false
        },
        {
            name: 'Order steps',
            value: 'includeOrderSteps',
            checked: false
        },
        {
            name: 'Product (Add Edit Delete Update)',
            value: 'includeProductCurd',
            checked: false
        },
        {
            name: 'List page (list / CRUD / Filter / Pagenation)',
            value: 'includeListCurd',
            checked: false
        },
        {
            name: 'Login',
            value: 'includeLogin',
            checked: false
        },
        {
            name: 'Registration',
            value: 'includeRegistration',
            checked: false
        }
        ,
        {
            name: 'CRUD page',
            value: 'includeCurdPage',
            checked: false
        },
            {
            name: 'User Profile',
            value: 'includeUserProfile',
            checked: true
        },
        {
            name: 'Reset password',
            value: 'includeResetpassword',
            checked: false
        },
        {
            name: 'Contact us',
            value: 'includeContactUs',
            checked: false
        },
        {
            name: 'About us',
            value: 'includeAboutUs',
            checked: false
        },
        {
            name: 'FAQ',
            value: 'includeFAQ',
            checked: false
        },
        {
            name: '/Error page (404 , 403 , ....)',
            value: 'includeErrorPage',
            checked: false
        },

        ]
      }
    ],
    dirsToCreate: ['app/images', 'app/fonts'],
    filesToCopy: [
        {
          input: 'favicon.ico',
          output: 'app/favicon.ico'
        }
    ],
    filesToRender: [
        {
          input: 'index.html',
          output: 'app/index.html'
        }
    ]
}

