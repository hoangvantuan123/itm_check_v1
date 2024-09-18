import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionsMenu } from '../entity/permissions_menu.entity';
import { UserService } from 'src/auth/user.service';

@Injectable()
export class PermissionsMenuService {
    constructor(
        @InjectRepository(PermissionsMenu)
        private readonly permissionsMenusRepository: Repository<PermissionsMenu>,
        private readonly userService: UserService,

    ) { }

    async create(
        userId: number,
        menuIds: number[],
        menuId: number
    ): Promise<{ success: boolean; message: string; data?: PermissionsMenu[] }> {

        const user = await this.userService.findUserById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }


        const newMenus = menuIds.map(id => {
            return this.permissionsMenusRepository.create({
                menu_id: menuId,
                create_uid: userId,
                write_uid: userId,
            });
        });


        await this.permissionsMenusRepository
            .createQueryBuilder()
            .insert()
            .into(PermissionsMenu)
            .values(newMenus)
            .execute();

        return {
            success: true,
            message: 'Successfully',
        };
    }

    async findAllPageLimit(userId: number, page: number = 1, limit: number = 10): Promise<{ data: any[], total: number, totalPages: number }> {
        const user = await this.userService.findUserById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const [data, total] = await this.permissionsMenusRepository.findAndCount({
            select: ['id', 'view', 'edit', 'create', 'delete', 'menu_id', 'create_date'],
            order: {
                create_date: 'DESC',
            },
            relations: ['menu'],
        });

        const dataWithParentName = data.map(menu => ({
            id: menu.id,
            menu_id: menu.menu_id,
            view: menu.view,
            edit: menu.edit,
            create: menu.create,
            delete: menu.delete,
            create_date: menu.create_date,
            menu_name: menu.menu ? menu.menu.name : null,
            sequence: menu.menu ? menu.menu.sequence : null,
        }));
        const totalPages = Math.ceil(total / limit);

        return {
            data: dataWithParentName,
            total,
            totalPages
        };
    }

    async remove(userId: number, ids: number[]): Promise<void> {
        const user = await this.userService.findUserById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }

        await this.permissionsMenusRepository.delete(ids);
    }

}
