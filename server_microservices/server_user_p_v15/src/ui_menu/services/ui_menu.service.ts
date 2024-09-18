import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IrUiMenu } from '../entity/ui_menu.entity';
import { UserService } from 'src/auth/user.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(IrUiMenu)
    private readonly menuRepository: Repository<IrUiMenu>,
    private readonly userService: UserService
  ) { }


  async findAll(userId: number): Promise<{ data: any[], total: number }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [data, total] = await this.menuRepository.findAndCount({
      select: ['id', 'name', 'sequence', 'create_date', 'parent_id'],
      order: {
        create_date: 'DESC',
      },
      relations: ['parent'],
    });

    const dataWithParentName = data.map(menu => ({
      id: menu.id,
      parent_id: menu.parent_id,
      sequence: menu.sequence,
      name: menu.name,
      create_date: menu.create_date,
      parent_name: menu.parent ? menu.parent.name : null
    }));

    return {
      data: dataWithParentName,
      total,
    };
  }
  async findAllPageLimit(userId: number, page: number = 1, limit: number = 10): Promise<{ data: any[], total: number, totalPages: number }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [data, total] = await this.menuRepository.findAndCount({
      select: ['id', 'name', 'sequence', 'create_date', 'parent_id'],
      order: {
        create_date: 'DESC',
      },
      relations: ['parent'],
    });

    const dataWithParentName = data.map(menu => ({
      id: menu.id,
      parent_id: menu.parent_id,
      sequence: menu.sequence,
      name: menu.name,
      create_date: menu.create_date,
      parent_name: menu.parent ? menu.parent.name : null
    }));
    const totalPages = Math.ceil(total / limit);

    return {
      data: dataWithParentName,
      total,
      totalPages
    };
  }

  async findOne(id: number): Promise<IrUiMenu> {
    return this.menuRepository.findOneBy({ id });
  }

  async create(userId: number, createUIMenu: Partial<IrUiMenu>): Promise<{ success: boolean; message: string; data?: IrUiMenu }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const newData = {
      ...createUIMenu,
      create_uid: userId,
      write_uid: userId
    };

    const menu = this.menuRepository.create(newData);
    await this.menuRepository.save(menu);
    return {
      success: true,
      message: 'created successfully',

    };
  }

  async update(userId: number, id: number, menu: Partial<IrUiMenu>): Promise<{ success: boolean; message: string; data?: IrUiMenu }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
        throw new NotFoundException('User not found');
    }

    await this.menuRepository.update(id, menu);
    const updatedMenu = await this.menuRepository.findOneBy({ id });

    if (!updatedMenu) {
        throw new NotFoundException('Menu not found');
    }

    return {
        success: true,
        message: 'Updated successfully',
        data: updatedMenu,
    };
}


  async remove(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }
}
