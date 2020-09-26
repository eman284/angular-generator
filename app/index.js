'use strict'
// Create instance from base generator which you can extend to implement your own behavior
const Generator = require ('yeoman-generator');

// To check if a command-line command exists
const commandExists = require('command-exists').sync;

//Tell Yeoman what to say
const yosay = require('yosay');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const config = require('./config');

module.exports = class extends Generator {
    constructor (args , opts) {
        super (args , opts);
        for (let optionName in config.options) {
            this.option(optionName , config.options[optionName]);
        }
    }

    initializing(){
        this.pkg = require('../package.json');
        if(this.options['skip-test-framework']){
            return;
        }
    }
    
     prompting(){
        if (!this.options['skip-welcome-message']){
            this.log(
                yosay('Welcome to ' + chalk.blue( 'Thiqah') + 'Template generator.')
            )
        }

        return this.prompt(config.prompts).then(answers => {
            const identityServer = answers.identityServer;
            const selectLanguage = answers.selectLanguage;
            const selectDesginSystem = answers.selectDesginSystem;
            const selectComponent = answers.selectComponent;
            const selectPages = answers.selectPages;

            const hasIdentityServerFeature = feat => identityServer && identityServer.includes(feat);
            const hasSelectLanguageFeature = feat => selectLanguage && selectLanguage.includes(feat);
            const hasSlectDesginSystemFeature = feat => selectDesginSystem && selectDesginSystem.includes(feat);
            const hasSelectComponent = feat => selectComponent && selectComponent.includes(feat);
            const hasSelectPages = feat => selectPages && selectPages.includes(feat);

            this.includeProjectName =  answers.includeProjectName;
            this.includeKecklock = hasIdentityServerFeature('includeKecklock');
            this.includeWithoutIS = hasIdentityServerFeature('includeWithoutIS');
            this.includeMultiTheme = answers.includeMultiTheme;
            this.includeSSR = answers.includeSSR;
            this.includeArLang =  hasSelectLanguageFeature('includeArLang');
            this.includeEnLang =  hasSelectLanguageFeature('includeEnLang');
            this.includeFrLang =  hasSelectLanguageFeature('includeFrLang');

            this.includeMCI = hasSlectDesginSystemFeature('includeMCI');
            this.includeMOJ = hasSlectDesginSystemFeature('includeMOJ');
            this.includeSASSO = hasSlectDesginSystemFeature('includeSASSO');
            this.includeSFDA = hasSlectDesginSystemFeature('includeSFDA');
            this.includeSAIP = hasSlectDesginSystemFeature('includeSAIP');
            this.includeMonshaat = hasSlectDesginSystemFeature('includeMonshaat');
            this.includeAmaly = hasSlectDesginSystemFeature('includeAmaly');
            this.includeThiqah = hasSlectDesginSystemFeature('includeThiqah');

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
            includeProjectName:this.includeProjectName,
            includeKecklock: this.includeKecklock,
            includeWithoutIS:this.includeWithoutIS,
            includeMultiTheme :this.includeMultiTheme,
            includeSSR :this.includeSSR,
            includeArLang:this.includeArLang,
            includeEnLang:this.includeEnLang,
            includeFrLang:this.includeFrLang,
            includeMCI:this.includeMCI,
            includeMOJ:this.includeMOJ,
            includeSASSO:this.includeSASSO,
            includeSFDA:this.includeSFDA,
            includeSAIP:this.includeSAIP,
            includeMonshaat:this.includeMonshaat,
            includeAmaly:this.includeAmaly,
            includeThiqah:this.includeThiqah,
            includeModal:this.includeModal,
            includeBlockLoader :this.includeBlockLoader,
            includeButtonLoader : this.includeButtonLoader,
            includeCollapse:this.includeCollapse,
            includeDropdownSelect2 :this.includeDropdownSelect2,
            includeCharts:this.includeCharts,
            includeOrderDetails:this.includeOrderDetails,
            includeOrderSteps : this.includeOrderSteps,
            includeProductCurd : this.includeProductCurd,
            includeListCurd : this.includeListCurd,
            includeLogin : this.includeLogin,
            includeRegistration : this.includeRegistration,
            includeCurdPage : this.includeCurdPage,
            includeUserProfile : this.includeUserProfile,
            includeResetpassword : this.includeResetpassword,
            includeContactUs : this.includeContactUs,
            includeAboutUs : this.includeAboutUs,
            includeFAQ : this.includeFAQ,
            includeErrorPage : this.includeErrorPage
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

        if (this.includeAboutUs) {
            copy('angular/_src/app/pages/about-us/about-us.component.html', 'src/app/pages/about-us/about-us.component.html');
            copy('angular/_src/app/pages/about-us/about-us.component.scss', 'src/app/pages/about-us/about-us.component.scss');
            copy('angular/_src/app/pages/about-us/about-us.component.ts', 'src/app/pages/about-us/about-us.component.ts');
            copy('angular/_src/app/pages/about-us/about-us.component.spec.ts', 'src/app/pages/about-us/about-us.component.spec.ts');
          }
          if (this.includeContactUs) {
            copy('angular/_src/app/pages/contact-us/contact-us.component.html', 'src/app/pages/contact-us/contact-us.component.html');
            copy('angular/_src/app/pages/contact-us/contact-us.component.scss', 'src/app/pages/contact-us/contact-us.component.scss');
            copy('angular/_src/app/pages/contact-us/contact-us.component.ts', 'src/app/pages/contact-us/contact-us.component.ts');
            copy('angular/_src/app/pages/contact-us/contact-us.component.spec.ts', 'src/app/pages/contact-us/contact-us.component.spec.ts');
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
