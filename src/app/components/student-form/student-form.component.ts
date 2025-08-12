import { StudentdetailsService } from './../../services/studentdetails.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  student = {
    name: '',
    age: '',
    gender: '',
    class: '',
    section: '',
    subjects: [] as string[],
    contact: { email: '', phone: '' },
  };

  allSubjects = ['Math', 'Science', 'English', 'History', 'Geography'];

  constructor(
    private studentService: StudentdetailsService,
    private router: Router
  ) {}

  onCheckboxChange(subject: string, event: any) {
    if (event.target.checked) {
      this.student.subjects.push(subject);
    } else {
      this.student.subjects = this.student.subjects.filter(
        (s) => s !== subject
      );
    }
  }

  saveStudent() {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
