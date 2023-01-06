import { configService } from './src/config/config.service';
import fs = require('fs');

fs.writeFileSync(
  './src/data-source.ts',
  `import 'reflect-metadata';
  import { DataSource } from 'typeorm';

  export const AppDataSource = new DataSource(
  ${JSON.stringify(configService.getTypeOrmConfig(true), null, 2)}
  )
`,
);
