import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentdetailsService } from '../../services/studentdetails.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  student: any;
  allSubjects = ['Math', 'Science', 'English', 'History', 'Geography'];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentdetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id).subscribe((data) => {
      this.student = data;
    });
  }

  onCheckboxChange(subject: string, event: any) {
    if (event.target.checked) {
      this.student.subjects.push(subject);
    } else {
      this.student.subjects = this.student.subjects.filter(
        (s: string) => s !== subject
      );
    }
  }

  updateStudent() {
    this.studentService
      .updateStudent(this.student.id, this.student)
      .subscribe(() => {
        this.router.navigate(['/students']);
      });
  }

  isChecked(subject: string) {
    return this.student.subjects.includes(subject);
  }
}
