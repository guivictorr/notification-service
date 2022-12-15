import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications';

interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  public async execute({
    recipientId,
  }: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
