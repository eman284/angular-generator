import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template:`<div class="container text-center not-found">
  <h2>عفوا لايوجد صفحة من فضلك تأكد من الرابط</h2>
</div>
`,
  styles:[
    '.not-found { margin-top:20%}']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
