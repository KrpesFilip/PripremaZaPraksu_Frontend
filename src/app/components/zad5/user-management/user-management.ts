import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user';
import { User } from '../../../services/user.model';
import { CommonModule } from '@angular/common';             
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement implements OnInit{
users: User[] = [];
  userForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  ngOnInit(): void {
    this.userService.users$.subscribe(users => this.users = users);
    this.userService.fetchUsers();
  }

  submit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value);
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  filterText: string = '';
sortOption: string = 'name-asc';

get filteredUsers(): User[] {
  let filtered = this.users.filter(u =>
    u.name.toLowerCase().includes(this.filterText?.toLowerCase() || '') ||
    u.email.toLowerCase().includes(this.filterText?.toLowerCase() || '')
  );

  // Optional sorting
  switch (this.sortOption) {
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'email-asc':
      filtered.sort((a, b) => a.email.localeCompare(b.email));
      break;
    case 'email-desc':
      filtered.sort((a, b) => b.email.localeCompare(a.email));
      break;
  }

  return filtered;
}


}
