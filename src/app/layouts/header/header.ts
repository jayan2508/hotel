import { Component } from '@angular/core';
import { InputCompont } from "../../../components/form-controls/input.compont/input.compont";
import { ButtonComponent } from "../../../components/form-controls/button.component/button.component";

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {


  pageName = 'Dashboard';






}
