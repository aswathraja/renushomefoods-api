import { Module, OnModuleInit } from '@nestjs/common'
import { AdminController } from './controllers/admin.controller'
import { AppController } from './controllers/app.controller'
import { InventoryController } from './controllers/inventory.controller'
import { OrderController } from './controllers/order.controller'
import { UserController } from './controllers/user.controller'
import { connectToDatabase } from './database/db'
import { AppService } from './services/app.service'

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
