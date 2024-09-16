export interface loggerInterface {
  debug: (message: string) => void;
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
  alert: (message: string) => void;
}

export class basicLogger implements loggerInterface {
  debug = (message: string) => console.log(JSON.stringify({severity: 'DEBUG', message}));
  info = (message: string) => console.log(JSON.stringify({severity: 'INFO', message}));
  warn = (message: string) => console.log(JSON.stringify({severity: 'WARNING', message}));
  error = (message: string) => console.log(JSON.stringify({severity: 'ERROR', message}));
  alert = (message: string) => console.log(JSON.stringify({severity: 'ALERT', message}));
}