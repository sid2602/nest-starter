import 'reflect-metadata';
  import { DataSource } from 'typeorm';

  export const AppDataSource = new DataSource(
  {
  "type": "postgres",
  "host": "127.0.0.1",
  "port": 5432,
  "username": "postgres",
  "password": "mysecretpassword",
  "database": "my_database",
  "entities": [
    "**/*.entity{.ts,.js}"
  ],
  "migrationsTableName": "migration",
  "migrations": [
    "src/migration/*.ts"
  ],
  "ssl": false
}
  )
