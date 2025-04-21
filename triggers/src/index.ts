import {cloudEvent} from '@google-cloud/functions-framework';
import {SampleEvent} from './handler/sample-event';
import {TriggerUploadGamesCsv} from './handler/trigger-upload-games-csv';
import {TriggerUploadGcs} from './handler/trigger-upload-gcs';

cloudEvent('sample-event', async (handler: any): Promise<void> => {
  SampleEvent.handle(handler);
});

cloudEvent('trigger-upload-games-csv', async (handler: any): Promise<void> => {
  TriggerUploadGamesCsv.handle(handler);
});

cloudEvent('trigger-upload-gcs', async (handler: any): Promise<void> => {
  TriggerUploadGcs.handle(handler);
});
