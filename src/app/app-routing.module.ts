import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPage } from './pages/characters.page';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HousesPage } from './pages/houses/houses.page';
import { QuizComponent } from './pages/quiz/quiz.component';
import { StaffPage } from './pages/staff.page';
import { StudentsPage } from './pages/students.page';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'characters',
    component: CharactersPage
  },
  {
    path: 'students',
    component: StudentsPage
  },
  {
    path: 'staff',
    component: StaffPage
  },
  {
    path: 'houses',
    component: HousesPage
  },
  {
    path: 'test',
    component: QuizComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
