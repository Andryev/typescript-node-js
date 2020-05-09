import * as mocha from 'mocha';
import * as Chai from 'chai';
import * as td from 'testdouble';
import Api from '../../../server/api/api';
import supertest = require('supertest');

const api = Api;
const request = supertest;
const expect = Chai.expect;
const testDouble = td;

export {api, expect, request, testDouble};
