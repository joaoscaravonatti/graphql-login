import { TypeOrmModule } from '@nestjs/typeorm';

export const Connection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'toor',
  database: 'test',
  autoLoadEntities: true,
  entities: ['dist/**/*.entity.{js, ts}']
});
