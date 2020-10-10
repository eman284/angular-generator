import { Routes } from "@angular/router";
import { AuthGuard } from "../shared/providers/guard/auth-guard.service";
import { Role, Permission } from "../module.auth/models/Role.model";
import { HomeMciComponent } from "./components/home/home.component";
import { CommericialRegSystemComponent } from "./components/commericial-reg-system/commericial-reg-system.component";
export const routes: Routes = [
  {
    path: "home",
    component: HomeMciComponent,
    children: [
      {
        path: ":id",
        component: CommericialRegSystemComponent
      },
      {
        path: "review",
        component: CommericialRegSystemComponent
      }
    ]
  }
];