import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWordComponent } from "./hello-word/hello-word.component";

const APP_ROUTES: Routes = [
  {path: 'hello-word', component: HelloWordComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
