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
            name    : 'includeProjectName',
            message : 'ًWhat is project name?',
          },
          {
            type    : 'input',
            name    : 'includeThemeName',
            message : 'ًWhat is Theme name?',
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
            type: 'checkbox',
            name: 'selectThemes',
            message: 'Which Themes would you like to include?',
            choices: [
            {
                name: 'Defult',
                value: 'includeDefultTheme',
                checked: true
            },
            {
                name: 'MCI',
                value: 'includeMCITheme',
                checked: false
            },
            {
                name: 'MERAS',
                value: 'includeMERASTheme',
                checked: false
            }
            ,
            {
                name: 'SAUDI',
                value: 'includeSAUDITheme',
                checked: false
            }
              ]
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
            checked: false
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
    dirsToCreate: ['src/assets'],
    filesToCopy: [
        {
            input: 'angular/_src/favicon.ico',
            output: 'src/favicon.ico'
          },
    ],
    filesToRender: [
        {
            input: 'angular/_e2e/src/app.e2e-spec.ts',
            output: 'e2e/src/app.e2e-spec.ts'
        },

        {
        input: 'angular/_e2e/src/app.po.ts',
        output: 'e2e/src/app.po.ts'
        },

        {
        input: 'angular/_e2e/protractor.conf.js',
        output: 'e2e/protractor.conf.js'
        },

        {
            input:'angular/_e2e/_tsconfig.json',
            output:'e2e/tsconfig.json'
        },
        {
            input:'angular/_src/app/app-routing.module.ts',
            output:'src/app/app-routing.module.ts' 
        },
        {
            input:'angular/_src/app/app.component.html',
            output:'src/app/app.component.html' 
        },
        {
            input:'angular/_src/app/app.component.scss',
            output:'src/app/app.component.scss' 
           
        },
        
        {
            input:'angular/_src/app/app.component.spec.ts',
            output:'src/app/app.component.spec.ts' 
           
        },
        {
            input:'angular/_src/app/app.component.ts',
            output:'src/app/app.component.ts' 
           
        },
        {
            input:'angular/_src/app/app.module.ts',
            output:'src/app/app.module.ts' 
           
        },

        {
            input:'angular/_src/app/shared',
            output:'src/app/shared' 
           
        },
        {
            input:'angular/_src/app/module.auth',
            output:'src/app/module.auth' 
           
        },
        {
            input:'angular/_src/environments/environment.prod.ts',
            output:'src/environments/environment.prod.ts' 
        },
        {
            input:'angular/_src/environments/environment.ts',
            output:'src/environments/environment.ts' 
        },
        {
            input:'angular/_src/_index.html',
            output:'src/index.html' 
        },
        {
            input:'angular/_src/main.ts',
            output:'src/main.ts' 
        },
        {
            input:'angular/_src/polyfills.ts',
            output:'src/polyfills.ts' 
        },

        {
            input:'angular/_src/test.ts',
            output:'src/test.ts' 
        },
        {
            input:'angular/_src/styles.scss',
            output:'src/styles.scss' 
        },
        {
            input:'angular/browserslistrc',
            output:'.browserslistrc'
        },
        {
            input:'angular/editorconfig',
            output:'.editorconfig'
        },

        {
            input:'angular/gitignore',
            output:'.gitignore'
        },
        {
            input:'angular/_angular.json',
            output:'angular.json'
        },

        {
            input:'angular/_karma.conf.js',
            output:'karma.conf.js'
        }
        ,
        {
            input:'angular/_package.json',
            output:'package.json'
        },
        {
            input:'angular/README.md',
            output:'README.md'
        },
        {
            input:'angular/_tsconfig.app.json',
            output:'tsconfig.app.json' 
        },
        {
            input:'angular/_tsconfig.json',
            output:'tsconfig.json' 
        },
        {
            input:'angular/_tsconfig.spec.json',
            output:'tsconfig.spec.json' 
        },
        {
            input:'angular/_tslint.json',
            output:'tslint.json' 
            
        },
        {
            input:'angular/_src/app/mci',
            output:'src/app/<%= includeThemeName %>' 
            
        }
    ]
}
