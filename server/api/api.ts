import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import {Application} from 'express';

class Api {

    public express: Application;

    constructor(){
        this.express = express();
    }

    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
    }
}

export default new Api().express;
