import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishComponent } from './fish/fish.component';

const routes: Routes = [{ path: 'fish', component: FishComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
