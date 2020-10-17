// import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    children: [
      // {
      //   path: '',
      //   redirectTo: '/ar/keyclock',
      //   pathMatch: 'full'
      // },
      // {
      //   path: ":lang",
      //   loadChildren: () =>
      //     import("./auth/auth.module").then(mod => mod.AuthModule),
      // },
      {
        path: '',
        redirectTo: '/ar',
        pathMatch: 'full'
      },
      {
        path: ":lang",
        loadChildren: () =>
          import("./views/<%= includeThemeNameLower %>/<%= includeThemeNameLower %>.module").then(mod => mod.<%= includeThemeNamePascal %>Module)
      },
      // { path: "**", component: NotFoundComponent }
    ]
  }
];
