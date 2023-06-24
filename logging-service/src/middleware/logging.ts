import expressWinston from 'express-winston';
import logger from '../services/logService';

const loggingMiddleware = expressWinston.logger({
  winstonInstance: logger,
  meta: true, 
  msg: "HTTP {{req.method}} {{req.url}}", 
  expressFormat: true, 
  colorize: false, 
  ignoreRoute: function (req, res) { return false; }
});

export default loggingMiddleware;
