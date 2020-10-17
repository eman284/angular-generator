//loader.interceptor.ts

import { Component, OnInit } from "@angular/core";

import { LoaderService } from "./loader.service";

@Component({
  selector: "app-loading",
  template: `
    <main [hidden]="!loading">
      <th-spinner s-img="./assets/images/loader.svg"></th-spinner>
    </main>
  `
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  hide = false;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(marzouk => {
      this.loading = marzouk;
      console.log(marzouk);
    });
  }

  ngOnInit() {
    this.hidespinner();
  }

  hidespinner() {
    setTimeout(() => {
      this.hide = true;
    }, 2000);
  }
}
