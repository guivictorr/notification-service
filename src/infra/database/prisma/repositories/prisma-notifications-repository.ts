import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications';
import { NotificationNotFound } from 'src/app/use-cases/errors/notification-not-found';
import { PrismaNotificationMappers } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  countManyByRecipientId(recipientId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

  findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMappers.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
