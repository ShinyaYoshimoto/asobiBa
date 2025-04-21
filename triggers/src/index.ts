import {cloudEvent} from '@google-cloud/functions-framework';
import {TriggerUploadGamesCsv} from './handler/trigger-upload-games-csv';
import {SampleEvent} from './handler/sample-event';

cloudEvent('sample-event', async (handler: any): Promise<void> => {
  SampleEvent.handle(handler);
});

cloudEvent('trigger-upload-games-csv', async (handler: any): Promise<void> => {
  TriggerUploadGamesCsv.handle(handler);
});
