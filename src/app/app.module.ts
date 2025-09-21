import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CheckComponent } from './components/check/check.component';
import { ChequeComponent } from './components/cheque/cheque.component';
import { AsbaComponent } from './components/asba/asba.component';
import { OnlineComponent } from './components/online/online.component';
import { NotpaidComponent } from './components/notpaid/notpaid.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent,
    StudentEditComponent,
    CheckComponent,
    ChequeComponent,
    AsbaComponent,
    OnlineComponent,
    NotpaidComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
