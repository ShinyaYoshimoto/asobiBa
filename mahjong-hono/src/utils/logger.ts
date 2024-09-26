export interface loggerInterface {
  debug: (message: string, data?: any) => void;
  info: (message: string, data?: any) => void;
  warn: (message: string, data?: any) => void;
  error: (message: string, data?: any) => void;
  alert: (message: string, data?: any) => void;
}

export class basicLogger implements loggerInterface {
  debug = (message: string, data?: any) => console.log(JSON.stringify({severity: 'DEBUG', message, data}));
  info = (message: string, data?: any) => console.log(JSON.stringify({severity: 'INFO', message, data}));
  warn = (message: string, data?: any) => console.log(JSON.stringify({severity: 'WARNING', message, data}));
  error = (message: string, data?: any) => console.log(JSON.stringify({severity: 'ERROR', message, data}));
  alert = (message: string, data?: any) => console.log(JSON.stringify({severity: 'ALERT', message, data}));
}