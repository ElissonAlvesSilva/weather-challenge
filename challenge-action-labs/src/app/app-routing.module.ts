import { WeatherDetailsComponent } from './application/weather-details/weather-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherSearchComponent } from './application/weather-search/weather-search.component';

const routes: Routes = [
    { path: '', component: WeatherSearchComponent },
    { path: 'details/:id', component: WeatherDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
