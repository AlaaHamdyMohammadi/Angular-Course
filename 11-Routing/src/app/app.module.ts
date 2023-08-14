import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ServersComponent } from './Components/servers/servers.component';
import { EditServerComponent } from './Components/servers/edit-server/edit-server.component';
import { ServerComponent } from './Components/servers/server/server.component';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent } from './Components/users/user/user.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    NotFoundPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
