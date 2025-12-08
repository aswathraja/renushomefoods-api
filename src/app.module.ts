import { Module, OnModuleInit } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { connectToDatabase } from './db'
import { InventoryController } from './inventory.controller'
import { OrderController } from './order.controller'
import { UserController } from './user.controller'

@Module({
    imports: [
        // ServeStaticModule.forRoot({
        //   rootPath: join(__dirname,'..','web'), // Adjust the path as necessary
        //   // serveRoot: '/', // Serve at the root
        //   exclude: ['/api*'], // Exclude API routes
        // }),
    ],
    controllers: [
        AppController,
        AdminController,
        UserController,
        OrderController,
        InventoryController,
    ],
    providers: [AppService],
})
export class AppModule implements OnModuleInit {
    async onModuleInit() {
        await connectToDatabase()
    }
}
