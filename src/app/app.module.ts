import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule} from '@angular/cdk/portal';
import { MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{ MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule} from '@angular/material/icon';
import{ MatListModule } from '@angular/material/list';
import { EditComponent } from './edit/edit.component';
import { SummaryComponent } from './summary/summary.component';
import { MarkettingComponent } from './marketting/marketting.component';
import { CommentsComponent } from './comments/comments.component';
import { EmailComponent } from './email/email.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CallnotesComponent } from './callnotes/callnotes.component';
import{MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import{MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
  
@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    SummaryComponent,
    MarkettingComponent,
    CommentsComponent,
    EmailComponent,
    AgendaComponent,
    CallnotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    PortalModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
