export interface loggerInterface {
  debug: (message: string, data?: unknown) => void;
  info: (message: string, data?: unknown) => void;
  warn: (message: string, data?: unknown) => void;
  error: (message: string, data?: unknown) => void;
  alert: (message: string, data?: unknown) => void;
}

export class basicLogger implements loggerInterface {
  debug = (message: string, data?: unknown) => console.log(JSON.stringify({severity: 'DEBUG', message, data}));
  info = (message: string, data?: unknown) => console.log(JSON.stringify({severity: 'INFO', message, data}));
  warn = (message: string, data?: unknown) => console.log(JSON.stringify({severity: 'WARNING', message, data}));
  error = (message: string, data?: unknown) => console.log(JSON.stringify({severity: 'ERROR', message, data}));
  alert = (message: string, data?: unknown) => console.log(JSON.stringify({severity: 'ALERT', message, data}));
}
