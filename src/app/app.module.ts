import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { PrintersPage } from '../pages/printers/printers';
import { ResinsPage } from '../pages/resins/resins';
import { PrintersService } from '../services/printers.service';
import { SinglerPrinterPage} from '../pages/printers/single-printer/single-printer';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    UsersPage,
    PrintersPage,
    ResinsPage,
    SinglerPrinterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    UsersPage,
    PrintersPage,
    ResinsPage,
    SinglerPrinterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrintersService
  ]
})
export class AppModule {}
