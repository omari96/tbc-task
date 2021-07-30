import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedFormService } from '../../service/shared-form.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  genders = ['men', 'women'];
  constructor() { }

  @Input() formGroup: FormGroup
  ngOnInit(): void {
  }

}
