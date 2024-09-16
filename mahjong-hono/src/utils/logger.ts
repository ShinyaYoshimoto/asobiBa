export class basicLogger {
  static debug = (message: string) => console.log(JSON.stringify({severity: 'DEBUG', message}));
  static info = (message: string) => console.log(JSON.stringify({severity: 'INFO', message}));
  static warn = (message: string) => console.log(JSON.stringify({severity: 'WARNING', message}));
  static error = (message: string) => console.log(JSON.stringify({ severity: 'ERROR', message }));
  static alert = (message: string) => console.log(JSON.stringify({ severity: 'ALERT', message }));
}