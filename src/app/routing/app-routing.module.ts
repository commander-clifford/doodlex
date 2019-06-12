import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { HomepageComponent }      from '../_hp/homepage/homepage.component';
import { SrpComponent }      from '../_srp/srp/srp.component';
import { SrpContentComponent }      from '../_srp/srp-content/srp-content.component';
import { GmailComponent } from '../_gm/gmail/gmail.component';
import { GmailLoadingComponent } from '../_gm/gmail-loading/gmail-loading.component';
import { CalendarComponent } from '../_cal/calendar/calendar.component';
import { MapsComponent } from '../_maps/maps/maps.component';
import { CustomReuseStrategy } from './route.reuse';

const routes: Routes = [

  { path: '', redirectTo: '/search', pathMatch: 'full' },

  // { path: '', component: HomepageComponent, data: { state: 'search' } },
  { path: 'search', component: HomepageComponent, data: { state: 'search' } },
  { path: 'search/:landingDoodle', component: HomepageComponent, data: { state: 'search' } },

  { path: 'results', component: SrpComponent, data: { state: 'results' },
    children: [
      { path: ':query', component: SrpContentComponent, data: { state: 'result' } },
      { path: ':query/:eehTheme', component: SrpContentComponent, data: { state: 'result' } },
      { path: ':query/:eehTheme/:eehStep', component: SrpContentComponent, data: { state: 'result' } },
    ]
  },

  { path: 'calendar', component: CalendarComponent, data: { state: 'calendar' } },
  { path: 'maps', component: MapsComponent, data: { state: 'maps' } },

  { path: 'gmail', component: GmailLoadingComponent, data: { state: 'gmail' } },
  { path: 'ginbox', component: GmailComponent, data: { state: 'ginbox' } },

  { path: ':landingDoodle', redirectTo: '/search/:landingDoodle', pathMatch: 'full' },

  { path: '**', component: HomepageComponent, data: { state: 'search' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
