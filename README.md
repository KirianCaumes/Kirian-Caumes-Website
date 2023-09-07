# Kirian Caumes website

My (wonderful) website! ⚡

![Example](https://github.com/KirianCaumes/Kirian-Caumes-Website/assets/24525092/2771f8a7-460a-4324-9c83-86d5bb9c0958)

## How to deploy in production

*Continuous deployment is setup and connected to this repository via Github Webhook linked to a VPS server, but you can build the app manually.*

Install dependencies with:

```sh
npm install
```

Start the script with a scheduled task:

```sh
npm start
```

## How to develop

There is a [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) on that project already configured, feel free to use it.

Install dependencies with:

```sh
npm install
```

Start the script with the debugger or with:

```sh
npm run dev
```

You can open a pull request with your new additions.

## Project conception

[Mockup](https://user-images.githubusercontent.com/24525092/109662037-e85b9d00-7b6a-11eb-8da9-bf4794d06904.png) made with Balsamiq.

### Why Next.js?

"Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed." - [NextJs.org](https://nextjs.org/)

Next.js allow us to build an application with React, and, in this case, generate a fully static application.

Additionally, the app is configured to function as a PWA (Progressive Web App). It has a resource caching policy and is also installable on the device.

For a simple project like this, Next.Js is "overkill", and a site without a framework would be more optimal. But here, this choice results from a personal desire to demonstrate my skills in React.

Audit result with [LightHouse](https://github.com/KirianCaumes/Kirian-Caumes-Website/assets/24525092/980e2416-9ff6-4072-8949-2cdddc035b89).

### Project structure

Thanks to React it is easy to set up a system of reusable and configurable components.

Thus, the whole project is documented thanks to JSDoc, which makes it possible to enrich the JS elements, via a typing closer to TypeScript.

The design of components and CSS approach the SMACSS model (Scalable and Modular Architecture for CSS).

The project is structured as follows:

```.
kirian-caumes-fr
├── .devcontainer               //About VS Code Container
│   ├── devcontainer.json       //Setup for VS Code Container
│   ├── docker-compose.yml      //Docker-compose for VS Code Container
│   └── Dockerfile              //Docker for VS Code Container
├── .vscode                     //About VS Code
│   ├── launch.json             //Debuggers
│   ├── settings.json           //Settings for VS Code
│   └── tasks.json              //Tasks that can be run by debuggers
├── components                  //React components
├── hooks                       //React hooks
├── node_modules
├── pages                       //Pages with auto routing
│   ├── _app.js
│   ├── _document.js
│   ├── 404.js
│   ├── index.js                //Home page
│   └── mentions-legales.js
├── public
│   ├── documents               //Downloadable documents
│   ├── icons                   //Icons for PWA and more
│   ├── images                  //Images displayed in pages
│   ├── manifest.webmanifest    //PWA manifest
│   └── sitemap.xml
├── styles                      //All style
│   ├── abstracts               
│   ├── bases                   
│   ├── components              //Components SCSS
│   ├── pages                   //Pages SCSS
│   ├── themes                  
│   └── index.scss              //Common SCSS
│   .gitignore
│   jsconfig.json
│   next.config.js
│   package-lock.json
│   package.json
│   README.md
└── sitemap-generator.js        //Script to generate sitemap
```
