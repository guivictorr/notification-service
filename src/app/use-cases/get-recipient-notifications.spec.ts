import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-1' }),
    );
    await notificationsRepository.create(makeNotification());

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-1' }),
        expect.objectContaining({ recipientId: 'example-1' }),
      ]),
    );
  });
});
