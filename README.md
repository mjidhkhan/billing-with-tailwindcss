
# Billing app with tailwindcss & Vue

### Create vue Project
```shell

$ vue create billing-with-tailwindcss

```

Then, install and invoke the generator of vue-cli-plugin-electron-builder by running:

```shell

$ vue add electron-builder

```

### To start a development server:
If you use Yarn (strongly recommended):

```shell

$ yarn electron:serve

```

or if you use NPM:

```shell

npm run electron:serve

```

### To build your app:
With Yarn:

```shell

yarn electron:build
```

or with NPM:

```shell

npm run electron:build

```

### Add tailwindcss

#### Using npm
```shell

npm install tailwindcss 
npm install autoprefixer

```

#### Using Yarn
```shell

yarn add tailwindcss
yarn add autoprefixer

```

## Add Tailwind to your CSS
Use the @tailwind directive to inject Tailwind's base, components, and utilities styles into your CSS:

```

@tailwind base;

@tailwind components;

@tailwind utilities;

```

## Create your Tailwind config file (optional)
If you'd like to customize your Tailwind installation, you can generate a config file for your project using the Tailwind CLI utility included when you install the tailwindcss npm package:

```shell

npx tailwind init

```

This will create a minimal tailwind.config.js file at the root of your project:

```js
// tailwind.config.js
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
}
```

See [Tailwind installation](https://tailwindcss.com/docs/installation/).








# billing-with-tailwindcss

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Add routing

```shell
yarn add vue-router && vuex
```

### Create file ***postcss.config.js***  at  ***root directory***

Add following code 
```js
// postcss.config.js
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE.ENV === 'production' && require('@fullhuman/postcss-purgecss')({
            content:[
                './src/**/*.vue',
                './public/index.html',
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/) || []
        })
    ]
}
```
