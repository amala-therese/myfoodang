import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { PublicModule } from '../public/public.module';
import { AddFoodComponent } from './add-food/add-food.component';
import { FormsModule } from '@angular/forms';
import { AddlocationComponent } from './addlocation/addlocation.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    UsersComponent,
    AdminLayoutComponent,
    AddFoodComponent,
    AddlocationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PublicModule,
    FormsModule
  ]
})
export class AdminModule { }
