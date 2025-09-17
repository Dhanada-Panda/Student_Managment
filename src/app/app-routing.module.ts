import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { CheckComponent } from './components/check/check.component';
import { NotpaidComponent } from './components/notpaid/notpaid.component';
import { OnlineComponent } from './components/online/online.component';
import { AsbaComponent } from './components/asba/asba.component';
import { ChequeComponent } from './components/cheque/cheque.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentFormComponent },
  { path: 'students/edit/:id', component: StudentEditComponent },
  { path: 'check', component: CheckComponent },
  { path: 'asba', component: AsbaComponent },
  { path: 'cheque', component: ChequeComponent },
  { path: 'online', component: OnlineComponent },
  { path: 'notpaid', component: NotpaidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
