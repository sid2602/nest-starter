import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from './dto/item.dto';
import { User } from '../user.decorator';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly repo: Repository<Item>,
  ) {}

  public async getAll(): Promise<Item[]> {
    return await this.repo.find();
  }

  public async create(dto: ItemDTO, user: User): Promise<ItemDTO> {
    return this.repo
      .save(dto.toEntity(user))
      .then((e) => ItemDTO.fromEntity(e));
  }
}
