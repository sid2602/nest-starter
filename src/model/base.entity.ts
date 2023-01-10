// import { ApiProperty } from '@nestjs/swagger';
// import {
//   PrimaryGeneratedColumn,
//   Column,
//   UpdateDateColumn,
//   CreateDateColumn,
// } from 'typeorm';
// export abstract class BaseEntity {
//   @ApiProperty({ required: true })
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @ApiProperty({ required: true })
//   @Column({ type: 'boolean', default: true })
//   isActive: boolean;

//   @ApiProperty({ required: true })
//   @Column({ type: 'boolean', default: false })
//   isArchived: boolean;

//   @ApiProperty({ required: true })
//   @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
//   createDateTime: Date;

//   @ApiProperty({ required: true })
//   @Column({ type: 'varchar', length: 300 })
//   createdBy: string;

//   @ApiProperty({ required: true })
//   @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
//   lastChangedDateTime: Date;

//   @ApiProperty({ required: true })
//   @Column({ type: 'varchar', length: 300 })
//   lastChangedBy: string;

//   @ApiProperty({ required: true })
//   @Column({ type: 'varchar', length: 300, nullable: true })
//   internalComment: string | null;
// }
