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
            type: 'input',
            name: 'includeProjectName',
            message: 'ًWhat is project name?',
        },
        {
            type: 'input',
            name: 'includeThemeName',
            message: 'ًWhat is Theme name?',
        },
        {
            type: 'confirm',
            name: 'identityServerKeyclock',
            message: 'Would you like to add Keyclock?'
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
            input: 'angular/_src/_favicon.ico',
            output: 'src/favicon.ico'
        },
    ],
    filesToRender: [
        {
            input: 'angular/_e2e',
            output: 'e2e'
        },
        {
            input: 'angular/_src/app/auth/models',
            output: 'src/app/auth/models'
        }
        ,
        {
            input: 'angular/_src/app/auth/providers',
            output: 'src/app/auth/providers'
        }
        ,
        {
            input: 'angular/_src/app/shared/components/footer',
            output: 'src/app/shared/components/footer'
        }
        ,
        {
            input: 'angular/_src/app/shared/components/header',
            output: 'src/app/shared/components/header'
        }
        ,
        {
            input: 'angular/_src/app/shared/pipes',
            output: 'src/app/shared/pipes'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/endpoints',
            output: 'src/app/shared/providers/endpoints'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/auth',
            output: 'src/app/shared/providers/auth'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/guard',
            output: 'src/app/shared/providers/guard'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/interceptor',
            output: 'src/app/shared/providers/interceptor'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/language',
            output: 'src/app/shared/providers/language'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/query-service',
            output: 'src/app/shared/providers/query-service'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/urlSerializer',
            output: 'src/app/shared/providers/urlSerializer'
        }
        ,
        {
            input: 'angular/_src/app/shared/providers/config.service.ts',
            output: 'src/app/shared/providers/config.service.ts'
        }
        ,
        {
            input: 'angular/_src/app/shared/shared.module.ts',
            output: 'src/app/shared/shared.module.ts'
        }
        ,
        {
            input: "angular/_src/app/views/mci/mci-component/home",
            output: "src/app/views/<%= includeThemeNameLower %>/<%= includeThemeNameLower %>-component/home"
        },
        {
            input: "angular/_src/app/views/mci/mci-component/contact-us",
            output: "src/app/views/<%= includeThemeNameLower %>/<%= includeThemeNameLower %>-component/contact-us"
        },
        {
            input: "angular/_src/app/views/mci/app-mci.component.html",
            output: "src/app/views/<%= includeThemeNameLower %>/app-<%= includeThemeNameLower %>.component.html"
        },
        {
            input: "angular/_src/app/views/mci/app-mci.component.scss",
            output: "src/app/views/<%= includeThemeNameLower %>/app-<%= includeThemeNameLower %>.component.scss"
        },
        {
            input: "angular/_src/app/views/mci/app-mci.component.spec.ts",
            output: "src/app/views/<%= includeThemeNameLower %>/app-<%= includeThemeNameLower %>.component.spec.ts"
        },
        {
            input: "angular/_src/app/views/mci/app-mci.component.ts",
            output: "src/app/views/<%= includeThemeNameLower %>/app-<%= includeThemeNameLower %>.component.ts"
        },
        {
            input: "angular/_src/app/views/mci/mci.module.ts",
            output: "src/app/views/<%= includeThemeNameLower %>/<%= includeThemeNameLower %>.module.ts"
        },
        {
            input: "angular/_src/app/views/mci/mci.routing.ts",
            output: "src/app/views/<%= includeThemeNameLower %>/<%= includeThemeNameLower %>.routing.ts"
        },
        {
            input: "angular/_src/app/app-routing.ts",
            output: "src/app/app-routing.ts"
        },
        {
            input: "angular/_src/app/app.component.html",
            output: "src/app/app.component.html"
        },
        {
            input: "angular/_src/app/app.component.scss",
            output: "src/app/app.component.scss"
        },
        {
            input: "angular/_src/app/app.component.ts",
            output: "src/app/app.component.ts"
        },
        {
            input: "angular/_src/app/app.module.ts",
            output: "src/app/app.module.ts"
        },
        {
            input: "angular/_src/app/app.server.module.ts",
            output: "src/app/app.server.module.ts"
        },
        {
            input: "angular/_src/assets",
            output: "src/assets"
        },
        {
            input: 'angular/_src/assets',
            output: 'src/assets'
        },
        {
            input: 'angular/_src/environments',
            output: 'src/environments'
        },
        {
            input: 'angular/_src/_index.html',
            output: 'src/index.html'
        },
        {
            input: 'angular/_src/_main.server.ts',
            output: 'src/main.server.ts'
        },
        {
            input: 'angular/_src/_main.ts',
            output: 'src/main.ts'
        },
        {
            input: 'angular/_src/_manifest.webmanifest',
            output: 'src/manifest.webmanifest'
        },
        {
            input: 'angular/_src/_polyfills.ts',
            output: 'src/polyfills.ts'
        },
        {
            input: 'angular/_src/_test.ts',
            output: 'src/test.ts'
        },
        {
            input: 'angular/_.editorconfig',
            output: '.editorconfig'
        }
        ,
        {
            input: 'angular/_.gitignore',
            output: '.gitignore'
        }
        ,
        {
            input: 'angular/_.npmrc',
            output: '.npmrc'
        }
        ,
        {
            input: 'angular/_angular.json',
            output: 'angular.json'
        }
        ,
        {
            input: 'angular/_karma.conf.js',
            output: 'karma.conf.js'
        },
        {
            input: 'angular/_ngsw-config.json',
            output: 'ngsw-config.json'
        }
        ,
        {
            input: 'angular/_package.json',
            output: 'package.json'
        }
        ,
        {
            input: 'angular/_README.md',
            output: 'README.md'
        }
        ,
        {
            input: 'angular/_tsconfig.app.json',
            output: 'tsconfig.app.json'
        }
        ,
        {
            input: 'angular/_tsconfig.json',
            output: 'tsconfig.json'
        }
        ,
        {
            input: 'angular/_tsconfig.server.json',
            output: 'tsconfig.server.json'
        }
        ,
        {
            input: 'angular/_tsconfig.spec.json',
            output: 'tsconfig.spec.json'
        }
        ,
        {
            input: 'angular/_tslint.json',
            output: 'tslint.json'
        }


    ]
}
