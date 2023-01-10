import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../user.decorator';
import { Item } from './entities/item.entity';
import { ItemDTO } from './dto/item.dto';
import { ItemService } from './item.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('items')
@Controller('items')
export class ItemController {
  constructor(private serv: ItemService) {}

  @Get()
  @ApiResponse({
    status: 200,
    isArray: true,
    type: Item,
  })
  @ApiOperation({ summary: 'Get all items' })
  public async getAll(): Promise<Item[]> {
    return await this.serv.getAll();
  }

  @Post()
  @ApiResponse({
    status: 200,
    type: ItemDTO,
  })
  @ApiOperation({ summary: 'Create new item' })
  public async post(
    @User() user: User,
    @Body() dto: ItemDTO,
  ): Promise<ItemDTO> {
    return this.serv.create(dto, user);
  }
}
