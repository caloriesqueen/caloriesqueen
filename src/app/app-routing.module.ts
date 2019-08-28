import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  { path: 'reminders', loadChildren: './pages/reminders/reminders.module#RemindersPageModule' },
  { path: 'calories', loadChildren: './pages/calories/calories.module#CaloriesPageModule' },
  { path: 'first', loadChildren: './start/first/first.module#FirstPageModule' },
  { path: 'gender', loadChildren: './start/gender/gender.module#GenderPageModule' },
  { path: 'height', loadChildren: './start/height/height.module#HeightPageModule' },
  { path: 'dob', loadChildren: './start/dob/dob.module#DobPageModule' },
  { path: 'weight', loadChildren: './start/weight/weight.module#WeightPageModule' },
  { path: 'last', loadChildren: './start/last/last.module#LastPageModule' },
  { path: 'steps', loadChildren: './fitness/steps/steps.module#StepsPageModule' },
  { path: 'workout', loadChildren: './fitness/workout/workout.module#WorkoutPageModule' },
  { path: 'information', loadChildren: './start/information/information.module#InformationPageModule' },
  { path: 'free-credit', loadChildren: './pages/free-credit/free-credit.module#FreeCreditPageModule' },
  { path: 'before-after', loadChildren: './pages/before-after/before-after.module#BeforeAfterPageModule' },
  { path: 'your-process', loadChildren: './pages/your-process/your-process.module#YourProcessPageModule' },
  { path: 'recipies', loadChildren: './fitness/recipies/recipies.module#RecipiesPageModule' },
  { path: 'water', loadChildren: './fitness/water/water.module#WaterPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'start', loadChildren: './start/start/start.module#StartPageModule' },
  { path: 'otp', loadChildren: './pages/otp/otp.module#OtpPageModule' },
  { path: 'chat2', loadChildren: './pages/chat2/chat2.module#Chat2PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
