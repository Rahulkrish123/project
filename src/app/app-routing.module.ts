import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import{SummaryComponent} from './summary/summary.component';
import{MarkettingComponent} from './marketting/marketting.component';
import{CommentsComponent} from './comments/comments.component';
import{EmailComponent}from './email/email.component';
import{AgendaComponent}from './agenda/agenda.component';
import { CallnotesComponent} from './callnotes/callnotes.component';

const routes: Routes = [
  {
    path: '',
    component:SummaryComponent,
  },
  {
    path: 'edit',
    component:EditComponent,
  },
  {
    path: 'summary',
    component:SummaryComponent,
  },
  {
    path: 'marketting',
    component:MarkettingComponent,
  },
  {
    path: 'comments',
    component:CommentsComponent,
  },
  {
    path: 'email',
    component:EmailComponent,
  },
  {
    path: 'agenda',
    component:AgendaComponent,
  },
  {
    path: 'callnotes',
    component:CallnotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
