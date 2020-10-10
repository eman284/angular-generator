

import { Routes } from "@angular/router";
import { AuthGuard } from "../shared/providers/guard/auth-guard.service";
import { Role, Permission } from "../module.auth/models/Role.model";
import { HomeComponent } from "./components/home/home.component";
export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: []
  }
];
