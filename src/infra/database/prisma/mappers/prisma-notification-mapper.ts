import { Notification } from 'src/app/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';
import { Content } from 'src/app/entities/content';
export class PrismaNotificationMappers {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createAt: notification.createdAt,
    };
  }

  static toDomain(prismaNotification: PrismaNotification): Notification {
    return new Notification(
      {
        canceledAt: prismaNotification.canceledAt,
        category: prismaNotification.category,
        createdAt: prismaNotification.createAt,
        readAt: prismaNotification.readAt,
        content: new Content(prismaNotification.content),
        recipientId: prismaNotification.recipientId,
      },
      prismaNotification.id,
    );
  }
}
