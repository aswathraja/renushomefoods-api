
import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { connectToDatabase } from './db';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname,'..','web'), // Adjust the path as necessary
    //   // serveRoot: '/', // Serve at the root
    //   exclude: ['/api*'], // Exclude API routes
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    await connectToDatabase();
  }
}
