
# angular-starter
An Angular starter featuring Angular 5 and Webpack Integration includes (Tslint, Codelyzer, Composedoc)

## Getting Started
This project is well supported with vscode editor. Easy deployment with PCF (pivot clound foundry).
Uses `.scss` files for styling and no `.css` loaders are configured, add your own css loaders to support `.css` extensions

- `npm install` to install dependencies
- `npm run serve` quick launch of webpack-devserver
- `npm run build` build development environment files to **dist** directory
- `npm run publish` build production ready files to **public** directory
- `npm run serve:dev` starts dev server locally.
- `npm run serve:prod` starts production ready server locally and watch out your file loading response times. 

> Before running `serve:dev` and `serve:prod`, make sure the `npm run build` and `npm run publish` are executed to build output files.

### Project Structure
- config 
  
  Webpack configuration files.
- pcf_settings
  
  PCF deployment files.
- src

  Angular source code.
- vscode_settings
  
  VSCode editor configuration files specific to angular. Copy these files to you local **.vscode** project directory and you will automatically get suggestions to install plugins. Install these plugins for good dev experience.

### Features

- Easy switching between early and lazy load of modules in angular by configuring **global.lazyLoad** property in `config/start.js`
- Support to load external files like bootstrap, jquery in 3 configurable ways in `config/webpack.build.js`
    1. Load via CDN, configure **cdn** property in `config\webpack.pkgs.js`
    2. Load via Local modules, configure **local** in `config\webpack.pkgs.js`
    3. Local local modules but bundle them, import those files in `src/vendor.ts` with extensions
>Comment the local modules import in `vendor.ts` when you choose other than **bundle**
- Easy switch between hash and non hash based url. Configure `src/app/app.configuration.ts`
- Angular supports **CaseSensitiveUrling** which is the default web standards, configurable `src/app/app.configuration.ts`
- Enable angular prod mode by setting **environment: prod** property in `src/app/app.configuration.ts`

### Internals
- This project uses **webpack-conditional-loader** to support easy switch between lazy and early load of modules.
- This project uses **codelyzer** for configuring coding standards across teams.
- This project uses **composedoc** to build your angular documentation, we can look at generated docs for quick understanding of project architecture.
