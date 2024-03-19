const keys_safestorage_util = require('keys-safestorage-util');
const keys_safestorage_parser = require('keys-safestorage-parser');
const moment = require('moment');
const debug = require('debug');
const body_parser = require('body-parser');
const firebase = require('firebase');
const ethers = require('ethers');
const xml2js = require('xml2js');
const jest = require('jest');
const eth_crypto = require('eth-crypto');
const node_sass = require('node-sass');
const async = require('async');
const sinon = require('sinon');
const mysql = require('mysql');
const eslint = require('eslint');

const fetch = require('node-fetch');
async function getGithubProfile() {
    const url = 'https://api.github.com/users/github';
    const response = await fetch(url);
    const profile = await response.json();
    console.log(profile);
}
getGithubProfile();

const fs = require('fs');
fs.copyFile('source.txt', 'destination.txt', err => {
  if (err) throw err;
  console.log('File copied successfully');
});

// Get the list of all available providers for Web3
const providers = Web3.providers;
console.log('Available providers:', providers);

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
async function delay() {
  console.log('Start');
  await setTimeoutPromise(2000);
  console.log('End');
}
delay();