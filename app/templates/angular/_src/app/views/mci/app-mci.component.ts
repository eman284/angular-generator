import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-<%= includeThemeNameLower %>',
  templateUrl: './app-<%= includeThemeNameLower %>.component.html',
  styleUrls: ['./app-<%= includeThemeNameLower %>.component.scss']
})
export class App<%= includeThemeNamePascal %>Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
