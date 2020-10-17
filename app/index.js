'use strict'
// Create instance from base generator which you can extend to implement your own behavior
const Generator = require('yeoman-generator');

// To check if a command-line command exists
const commandExists = require('command-exists').sync;

//Tell Yeoman what to say
const yosay = require('yosay');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const config = require('./config');
const pascalcase = require('pascalcase');


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        for (let optionName in config.options) {
            this.option(optionName, config.options[optionName]);
        }
    }

    initializing() {
        this.pkg = require('../package.json');
        if (this.options['skip-test-framework']) {
            return;
        }
    }

    prompting() {
        if (!this.options['skip-welcome-message']) {
            this.log(
                yosay('Welcome to ' + chalk.blue('Thiqah') + 'Template generator.')
            )
        }

        return this.prompt(config.prompts).then(answers => {
            const identityServer = answers.identityServer;
            const selectLanguage = answers.selectLanguage;
            const selectComponent = answers.selectComponent;
            const selectPages = answers.selectPages;

            const hasIdentityServerFeature = feat => identityServer && identityServer.includes(feat);

            const hasSelectLanguageFeature = feat => selectLanguage && selectLanguage.includes(feat);
            const hasSelectComponent = feat => selectComponent && selectComponent.includes(feat);
            const hasSelectPages = feat => selectPages && selectPages.includes(feat);

            this.includeProjectName = answers.includeProjectName;
            this.includeThemeName = answers.includeThemeName;

            this.includeSSR = answers.includeSSR;
            this.identityServerKeyclock = answers.identityServerKeyclock;

            this.includeArLang = hasSelectLanguageFeature('includeArLang');
            this.includeEnLang = hasSelectLanguageFeature('includeEnLang');
            this.includeFrLang = hasSelectLanguageFeature('includeFrLang');


            this.includeModal = hasSelectComponent('includeModal');
            this.includeBlockLoader = hasSelectComponent('includeBlockLoader');
            this.includeButtonLoader = hasSelectComponent('includeButtonLoader');
            this.includeCollapse = hasSelectComponent('includeCollapse');
            this.includeDropdownSelect2 = hasSelectComponent('includeDropdownSelect2');
            this.includeCharts = hasSelectComponent('includeCharts');

            this.includeOrderDetails = hasSelectPages('includeOrderDetails');
            this.includeOrderSteps = hasSelectPages('includeOrderSteps');
            this.includeProductCurd = hasSelectPages('includeProductCurd');
            this.includeListCurd = hasSelectPages('includeListCurd');
            this.includeLogin = hasSelectPages('includeLogin');
            this.includeRegistration = hasSelectPages('includeRegistration');
            this.includeCurdPage = hasSelectPages('includeCurdPage');
            this.includeUserProfile = hasSelectPages('includeUserProfile');
            this.includeResetpassword = hasSelectPages('includeResetpassword');
            this.includeContactUs = hasSelectPages('includeContactUs');
            this.includeAboutUs = hasSelectPages('includeAboutUs');
            this.includeFAQ = hasSelectPages('includeFAQ');
            this.includeErrorPage = hasSelectPages('includeErrorPage');
        });
    }
    writing() {
        const templateData = {
            includeProjectName: this.includeProjectName,
            includeThemeName: this.includeThemeName,
            includeThemeNamePascal: pascalcase(this.includeThemeName),
            includeThemeNameLower: this.includeThemeName.toLowerCase(),
            includeKecklock: this.includeKecklock,
            includeWithoutIS: this.includeWithoutIS,

            // includeMultiTheme :this.includeMultiTheme,
            includeSSR: this.includeSSR,
            identityServerKeyclock: this.identityServerKeyclock,
            includeArLang: this.includeArLang,
            includeEnLang: this.includeEnLang,
            includeFrLang: this.includeFrLang,
            includeMCI: this.includeMCI,
            includeMOJ: this.includeMOJ,
            includeSASSO: this.includeSASSO,
            includeSFDA: this.includeSFDA,
            includeSAIP: this.includeSAIP,
            includeMonshaat: this.includeMonshaat,
            includeAmaly: this.includeAmaly,
            includeThiqah: this.includeThiqah,
            includeModal: this.includeModal,
            includeBlockLoader: this.includeBlockLoader,
            includeButtonLoader: this.includeButtonLoader,
            includeCollapse: this.includeCollapse,
            includeDropdownSelect2: this.includeDropdownSelect2,
            includeCharts: this.includeCharts,
            includeOrderDetails: this.includeOrderDetails,
            includeOrderSteps: this.includeOrderSteps,
            includeProductCurd: this.includeProductCurd,
            includeListCurd: this.includeListCurd,
            includeLogin: this.includeLogin,
            includeRegistration: this.includeRegistration,
            includeCurdPage: this.includeCurdPage,
            includeUserProfile: this.includeUserProfile,
            includeResetpassword: this.includeResetpassword,
            includeContactUs: this.includeContactUs,
            includeAboutUs: this.includeAboutUs,
            includeFAQ: this.includeFAQ,
            includeErrorPage: this.includeErrorPage
        };

        const copy = (input, output) => {
            this.fs.copy(this.templatePath(input), this.destinationPath(output));
        };

        const copyTpl = (input, output, data) => {
            this.fs.copyTpl(
                this.templatePath(input),
                this.destinationPath(output),
                data
            );
        };

        // Render Files
        config.filesToRender.forEach(file => {
            copyTpl(file.input, file.output, templateData);
        });

        // Copy Files
        config.filesToCopy.forEach(file => {
            copy(file.input, file.output);
        });

        // Create extra directories
        config.dirsToCreate.forEach(item => {
            mkdirp(item);
        });
        if (this.identityServerKeyclock) {
            copy('angular/_src/app/auth/components/keycloak', 'src/app/auth/components/keycloak');
            copy('angular/_src/app/auth/auth-routing.ts', 'src/app/auth/auth-routing.ts');
            copy('angular/_src/app/auth/auth.module.ts', 'src/app/auth/auth.module.ts');
            copy('angular/_src/app/shared/models/authConfig.ts', 'src/app/shared/models/authConfig.ts');
            copy('angular/_src/app/shared/providers/auth/auth-service.service.ts', 'src/app/shared/providers/auth/auth-service.service.ts');

        }
        if (this.includeSSR) {
            copy('angular/_server.ts', 'server.ts');
            copy('angular/_webpack.server.config.js', 'webpack.server.config.js');
        }

    }
    install() {
        const hasYarn = commandExists('yarn');
        this.installDependencies({
            npm: !hasYarn,
            yarn: hasYarn,
            bower: false,
            skipMessage: this.options['skip-install-message'],
            skipInstall: this.options['skip-install']
        });
    }

}
