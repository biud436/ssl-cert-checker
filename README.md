![Node.js CI Workflow](https://github.com/biud436/ssl-cert-checker/actions/workflows/node.js.yml/badge.svg)

# Introduction

This tool allows you to check certificates for expiration and validity.

## How to setup

Before using this tool, you need to install the following dependencies:

```bash
git clone https://github.com/biud436/ssl-cert-checker.git ssl-cert-checker
cd ./ssl-cert-checker
yarn install
```

`yarn` is the package manager for Node.js, it is pretty easy to install, But you must use a Node.js version is greater than or equal to v12.x.x

and next, you should modify a config file that places in `index.ts` of config folder.

```ts
export default {
    hostname: [`portfolio.biud436.com`, `www.naver.com`, `www.daum.net`],
};
```

## How to use

To start this tool, you have to run the following command:

```bash
yarn start
```

## Screenshot

![image](https://user-images.githubusercontent.com/13586185/150664044-ca48176c-59c7-487a-b4fc-6466e2f5afa7.png)
