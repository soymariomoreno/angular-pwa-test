import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },

  { path: 'home', component: HomeComponent },
  { path: 'firestore', component: CatsComponent },
  { path: 'camera', component: CameraComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
