import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RulesComponent} from "./pages/rules/rules.component";
import {HomeComponent} from "./pages/home/home.component";
import {GameComponent} from "./pages/game/game.component";

const routes: Routes = [
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  },
  {
    path: "welcome", component: HomeComponent,
  },
  {
    path: "rules", component: RulesComponent
  },
  {
    path: "game", component: GameComponent
  },
  {
    path: '**', redirectTo: '/welcome', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
