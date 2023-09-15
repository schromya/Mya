

Welcome to my portfolio!

## Setup
You need to install npm (you can do this by installing [node.js](https://nodejs.org/en/download)). Once that is done, install the requirements:
```bash
npm install
```

## Usage

First, run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

If you add any other dependencies, please do it by running:
```bash
npm install --save <my-dependency>
```
That way it is added to package.json for the next person to install. Otherwise, add the package manually to package.json


Before pushing to github build the static files so it can be hosted on Github Pages:
```bash
npx next build
```

