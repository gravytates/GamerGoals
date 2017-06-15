import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DonateMoneyComponent } from './donate-money/donate-money.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { AdminComponent } from './admin/admin.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { GenrePipe } from './genre.pipe';
import { PlatformPipe } from './platform.pipe';
import { PCComponent } from './pc/pc.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { XboxComponent } from './xbox/xbox.component';
import { MobileComponent } from './mobile/mobile.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailComponent,
    DonateMoneyComponent,
    NewProjectComponent,
    AdminComponent,
    EditProjectComponent,
    GenrePipe,
    PlatformPipe,
    PCComponent,
    PlaystationComponent,
    XboxComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
