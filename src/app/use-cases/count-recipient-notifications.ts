import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications';

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  public async execute({
    recipientId,
  }: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {
    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
