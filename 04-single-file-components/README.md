# learn vue-router

## 创建工程

```bash
# yarn init
# yarn add eslint webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader vue-loader vue-template-compiler --dev
# yarn add vue vue-router
```

## eslint配置

```bash
# node_modules\.bin\eslint --init
? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Browser
? Do you use CommonJS? Yes
? Do you use JSX? No
? What style of indentation do you use? Spaces
? What quotes do you use for strings? Single
? What line endings do you use? Windows
? Do you require semicolons? Yes
? What format do you want your config file to be in? JavaScript
Successfully created .eslintrc.js file
```

## 新增文件

```webpack.config.js```

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
```

```index.html```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>App</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

```HelloWorld.vue```

```
<template>
  <p>Hello World</p>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style>
    p {
        color: #f00;
    }
</style>
```

```App.vue```

```
<template>
    <div id="app">
        <h1>App</h1>
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
h1 {
	text-align: center;
}
</style>
```

```index.js```

```
import Vue from 'vue';
import App from './App';

new Vue({
    el: '#app',
    template: '<App />',
    components: { App }
});
```