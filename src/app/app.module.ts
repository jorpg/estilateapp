import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { NewPage } from '../pages/newpage/newpage';
import { TutorialPage } from '../pages/tutorial/tutorial'
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RegisterJobsPage } from '../pages/register-jobs/register-jobs';
import { MaquillajePage } from '../pages/maquillaje/maquillaje';
import { UnasPage } from '../pages/unas/unas';
import { PerfilJobsPage } from '../pages/perfil-jobs/perfil-jobs';
import { CitasPage } from '../pages/citas/citas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    HelloIonicPage,
    ItemDetailsPage,
    NewPage,
    TutorialPage,
    LoginPage,
    RegisterPage,
    RegisterJobsPage,
    MaquillajePage,
    UnasPage,
    PerfilJobsPage,
    CitasPage

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    HelloIonicPage,
    ItemDetailsPage,
    NewPage,
    TutorialPage,
    LoginPage,
    RegisterPage,
    RegisterJobsPage,
    MaquillajePage,
    UnasPage,
    PerfilJobsPage,
    CitasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
