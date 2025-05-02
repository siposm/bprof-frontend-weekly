import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';

import localeHu from '@angular/common/locales/hu'
import { registerLocaleData } from '@angular/common';
import { StatisticsService } from './statistics.service';
registerLocaleData(localeHu)

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    FooterComponent,
    NavComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
