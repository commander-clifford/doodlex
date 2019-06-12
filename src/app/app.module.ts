import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';
import { CustomReuseStrategy } from './routing/route.reuse';
import { AppRoutingModule } from './routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { Globals } from './globals';

import { MatInputModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SidenavService } from './_gm/gmail-drawer/drawer.service';
import { ComposeService } from './_gm/compose/compose.service';
import { ShareService } from './_gm/share/share.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';


import { NospacesPipe } from './pipes/nospaces.pipe';
import { RemovewhitespacePipe } from './pipes/removewhitespace.pipe';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

import { HomepageComponent } from './_hp/homepage/homepage.component';
import { HomepageFooterComponent } from './_hp/homepage-footer/homepage-footer.component';
import { HomepageLogoComponent } from './_hp/homepage-logo/homepage-logo.component';
import { HomepageToolbarComponent } from './_hp/homepage-toolbar/homepage-toolbar.component';
import { HompepageHppComponent } from './_hp/hompepage-hpp/hompepage-hpp.component';
import { HomepageModalComponent } from './_hp/homepage-modal/homepage-modal.component';
import { HomepageCategoriesComponent } from './_hp/homepage-categories/homepage-categories.component';

import { SrpComponent } from './_srp/srp/srp.component';
import { SrpToolbarComponent } from './_srp/srp-toolbar/srp-toolbar.component';
import { SrpTopStoriesComponent } from './_srp/srp-top-stories/srp-top-stories.component';
import { SrpSearchSuggestionsComponent } from './_srp/srp-search-suggestions/srp-search-suggestions.component';
import { SrpResultsListComponent } from './_srp/srp-results-list/srp-results-list.component';
import { SrpKnowledgePanelComponent } from './_srp/srp-knowledge-panel/srp-knowledge-panel.component';
import { SrpFooterComponent } from './_srp/srp-footer/srp-footer.component';
import { SrpLogoComponent } from './_srp/srp-logo/srp-logo.component';
import { SrpAbstractComponent } from './_srp/srp-abstract/srp-abstract.component';
import { SrpFunboxComponent } from './_srp/srp-funbox/srp-funbox.component';
import { SrpContentComponent } from './_srp/srp-content/srp-content.component';
import { SrpSciboxComponent } from './_srp/srp-scibox/srp-scibox.component';
import { SearchBarComponent } from './_widgets/search-bar/search-bar.component';
import { GmailComponent } from './_gm/gmail/gmail.component';
import { GmailToolbarComponent } from './_gm/gmail-toolbar/gmail-toolbar.component';
import { DoodleComponent } from './doodles/doodle/doodle.component';
import { GmailNavbarComponent } from './_gm/gmail-navbar/gmail-navbar.component';
import { GmailDrawerComponent } from './_gm/gmail-drawer/gmail-drawer.component';
import { GmailToolbarMobileComponent } from './_gm/gmail-toolbar-mobile/gmail-toolbar-mobile.component';
import { ComposeComponent } from './_gm/compose/compose.component';
import { ShareComponent } from './_gm/share/share.component';
import { DoodleSheetComponent } from './doodles/doodle-sheet/doodle-sheet.component';
import { SocialShareComponent } from './_widgets/social-share/social-share.component';
import { SuperComponent } from './supers/super/super.component';
import { GmailThemesComponent } from './_gm/gmail-themes/gmail-themes.component';
import { GmailSnackbarComponent } from './_gm/gmail-snackbar/gmail-snackbar.component';
import { GmailLoadingComponent } from './_gm/gmail-loading/gmail-loading.component';
import { SimonSaysComponent } from './doodles/interactive/simon-says/simon-says.component';
import { CalendarComponent } from './_cal/calendar/calendar.component';
import { MapsComponent } from './_maps/maps/maps.component';
import { CalendarToolbarComponent } from './_cal/calendar-toolbar/calendar-toolbar.component';
import { CalendarListTopComponent } from './_cal/calendar-list-top/calendar-list-top.component';
import { CalendarListComponent } from './_cal/calendar-list/calendar-list.component';



@NgModule({
  entryComponents: [
    HomepageModalComponent,
    ComposeComponent,
    ShareComponent,
    DoodleSheetComponent,
    SocialShareComponent,
    GmailThemesComponent,
    GmailSnackbarComponent,
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    HomepageFooterComponent,
    HomepageLogoComponent,
    HomepageToolbarComponent,
    NospacesPipe,
    SrpComponent,
    SrpToolbarComponent,
    SrpTopStoriesComponent,
    SrpSearchSuggestionsComponent,
    SrpResultsListComponent,
    SrpKnowledgePanelComponent,
    SrpFooterComponent,
    SrpLogoComponent,
    SrpAbstractComponent,
    SrpFunboxComponent,
    HompepageHppComponent,
    SrpContentComponent,
    HomepageModalComponent,
    SrpSciboxComponent,
    HomepageCategoriesComponent,
    AppMenuComponent,
    RemovewhitespacePipe,
    SearchBarComponent,
    GmailComponent,
    GmailToolbarComponent,
    DoodleComponent,
    GmailNavbarComponent,
    GmailDrawerComponent,
    GmailToolbarMobileComponent,
    ComposeComponent,
    ShareComponent,
    DoodleSheetComponent,
    SocialShareComponent,
    SuperComponent,
    GmailThemesComponent,
    GmailSnackbarComponent,
    GmailLoadingComponent,
    SimonSaysComponent,
    CalendarComponent,
    MapsComponent,
    CalendarToolbarComponent,
    CalendarListTopComponent,
    CalendarListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatBadgeModule,
    SlideshowModule,
    AppRoutingModule,
    MatMenuModule,
    DragDropModule,
    MatSelectModule,
  ],
  providers: [
    // { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} },
    Globals,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    SidenavService,
    ComposeService,
    ShareService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
