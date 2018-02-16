
# angular-starter
An Angular starter featuring Angular 5 and Webpack includes (Tslint, Codelyzer, Composedoc, Moq.ts, Fixture)

## Getting Started
This project is well supported with vscode editor. Easy deployment with PCF (pivot clound foundry).
Uses `.scss` files for styling and no `.css` loaders are configured, add your own css loaders to support `.css` extensions

- `npm install` to install dependencies
- `npm run serve` quick launch of webpack-devserver that supports live-reload
- `npm run build` build development ready files to **dist** directory
- `npm run publish` build production ready files to **public** directory
- `npm run serve:dev` starts dev server locally
- `npm run serve:prod` starts production ready server locally and watch out file loading response times.
- `npm run lint` runs coding standards rules across entire project (these rules can be set in tslint.json)
- `npm start` build and start production ready server
- `npm run test:karma` karma-chrome-launcher runs the jasmine unit test cases in chrome browser
- `npm run webdriver:start` start the selenium webdriver before running protractor e2e tests
- `npm run test:protractor` launch the protractor e2e tests

> Before running `serve:dev` and `serve:prod`, make sure the `npm run build` and `npm run publish` are executed to build output files.

### Project Structure
- config 
  
  Webpack configuration files for different enviroments.
- pcf_settings
  
  PCF deployment steps and files.
- src

  Angular source code.
- e2e

  End to End tests.
- vscode_settings

  VSCode editor configuration files specific to angular. Copy these files to your local **.vscode** project directory and you will automatically get suggestions to install plugins. Install these plugins for good dev experience.
- pcf_steps.txt
  
  Explains how to deploy your application to PCF environment
- installation.txt
 
  Explains the softwares required to start building angular-starter application
 

### Features

- Easy switching between early and lazy load of modules in angular by configuring **global.lazyLoad** property in `config/start.js`
- Support to load external files like bootstrap, jquery in 3 configurable ways in `config/webpack.build.js`
    1. Load via CDN, configure **cdn** property in `config\webpack.pkgs.js`
    2. Load via Local modules, configure **local** in `config\webpack.pkgs.js`
    3. Load local modules but bundle them, import those files in `src/vendor.ts` with extensions
>Comment local modules import in `vendor.ts` when you choose **cdn | local**
- Easy switch between hash and non hash based url. Configure `src/app/app.configuration.ts`
- Angular supports **CaseSensitiveUrling** which is the default web standard, configurable `src/app/app.configuration.ts`
- Enable angular prod mode by setting **environment: prod** property in `src/app/app.configuration.ts`

### Internals
- This project uses **webpack-conditional-loader** to support easy switch between lazy and early load of modules.
- This project uses **codelyzer** for configuring coding standards across teams.
- This project uses **composedoc** to build your angular documentation, we can look at generated docs for quick understanding of project architecture.
- `@NgModule` configuration object splitted out to seperate `.config` file under `setup` directory for each module **(ex: About)** to increase the smooth development in testing the components

### Known Issues
- Move app configuration from **app.configuration.ts** to **app.configuration.json** to reduce rebuild on configuration changes but this requires us to do **http.get** request on application startup because angular can only read .ts files and not the .json files.
- Configure sourcemaps builds for specific .ts files. We can exclude vendor.ts, polyfiils.ts from source maps generation.

