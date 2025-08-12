import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from '../../services/studentdetails.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  constructor(
    private studentService: StudentdetailsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }
  deleteStudent(id: number) {
    if (confirm('Are you sute to delete')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }
  editStudent(id: number) {
    this.router.navigate(['/students/edit', id]);
  }
}
