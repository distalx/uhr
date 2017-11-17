# uhr

[![travis build](https://img.shields.io/travis/distalx/uhr.svg?style=flat-square)](https://travis-ci.org/distalx/uhr)
[![codecov coverage](https://img.shields.io/codecov/c/github/distalx/uhr.svg?style=flat-square)](https://codecov.io/github/distalx/uhr)
[![version](https://img.shields.io/npm/v/uhr.svg?style=flat-square)](http://npm.im/uhr)
[![downloads](https://img.shields.io/npm/dm/uhr.svg?style=flat-square)](http://npm-stat.com/charts.html?package=uhr-names&from=2016-08-10)
[![MIT License](https://img.shields.io/npm/l/uhr.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)


## Installation

This package is distributed via npm:

```
npm install uhr
```

## Usage

```javascript
const UHR = require('uhr');

flag = 1  // local to UTC
flag = -1 // UTC to local

day = Number    //0 to 6, Mon To Sun
hour = Number   // 0 to 23
minute = Number // 0 to 60

UHR(day, hour, minute, flag)

```
