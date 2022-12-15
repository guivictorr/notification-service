import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Cool content'),
        recipientId: 'example-id-2',
      }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-1' }),
    );
    await notificationsRepository.create(makeNotification());

    const count = await countRecipientNotification.execute({
      recipientId: 'example-1',
    });

    expect(count).toEqual({ count: 2 });
  });
});
