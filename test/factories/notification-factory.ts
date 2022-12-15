import { Content } from '../../src/app/entities/content';
import {
  Notification,
  NotificationProps,
} from '../../src/app/entities/notification';

export function makeNotification(override?: Partial<NotificationProps>) {
  return new Notification({
    category: 'example',
    content: new Content('Example content'),
    recipientId: 'example-id',
    ...override,
  });
}
