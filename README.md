# eslint-config-essentials
The bare bones, un-opinionated, essential - eslint config.

## Philosophy
As a developer over the years I've always hated the fact that we just followed some standard
without knowing why or how, we just follow it because the biggest dev houses do.

My overall vision for my career changed, and if there's one moral value that I stand for today
is developer experience, and guess what? When it comes to linting, it's no different.

I've decided to write this config file, as something that will be a template for you to extend on
and add your own rules that you / team feel are required as something that you will enjoy.

I don't believe in forcing my opinion on someone especially when it's a subjective matter on code style,
and performance is not impacted. This not only stunts the other developer or everyone in your team,
but it also makes me not enjoy developing, and the reason we're developers, is because we love what we do!

With that in mind I really hope, that this could serve as a helping base template for all your linting needs :)

## Prerequisites
* **Node ^7.0** [nodejs.org](https://nodejs.org)

## Peer dependencies
1. `"eslint": ">= 3"`

## Install
```
npm install eslint-config-essentials --save-dev
```

or

```
yarn add eslint-config-dev -D
```

## Usage
All you need to do is add the below prop to you eslint config file:
```
"extends": "essentials"
```

## Example .eslintrc.js
```
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '6',
    sourceType: 'module'
  },
  extends: 'essentials',
};
```

