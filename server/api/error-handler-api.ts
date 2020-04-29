import {Request, Response, ErrorRequestHandler, NextFunction} from 'express';

export function errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    console.error(`Api error handle : ${err}`);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Error internal'
    });
}
