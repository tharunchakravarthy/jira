import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { TabsComponent } from "./tabs/tabs.component";
import { TodoComponent } from "./todo/todo.component";
import { InprogressComponent } from "./inprogress/inprogress.component";
import { DoneComponent } from "./done/done.component";
import { BlockedComponent } from "./blocked/blocked.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { DataService } from "./data.service";
import { ModalComponent } from "./modal/modal.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TabsComponent,
    TodoComponent,
    InprogressComponent,
    DoneComponent,
    BlockedComponent,
    AboutComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
