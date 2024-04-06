import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-crud-app';
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  emailFormControl = new FormControl('',[Validators.required, Validators.email]);
  selected: Date | null = null;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

