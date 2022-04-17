import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
||||||| 569687cf
import { FooterComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header-and-footer/ui/header-and-footer/src/app/header/header.component';
=======
>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
import { NotifDisplayComponent } from './notif-display/notif-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NotificationsRoutingModule } from "./notifications-routing.module";
import { ExpansionNotifComponent } from './expansion-notif/expansion-notif.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from '../../../../shared/components/header/src/lib/header.module';
import { FooterModule } from '../../../../shared/components/footer/src/lib/footer.module';

@NgModule({
  imports: [
    NotificationsRoutingModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
<<<<<<< HEAD
    MatListModule,
||||||| 569687cf
    MatListModule
=======
    MatListModule,
    FooterModule,
    HeaderModule,
    HttpClientModule

>>>>>>> 006507d2d4dd612e235c3437e6ca32dc143e57bf
  ],
  declarations: [
    NotifDisplayComponent,   
    ExpansionNotifComponent
  ],
  exports: [
    NotifDisplayComponent,
    ExpansionNotifComponent
  ],
})
export class ClientNotificationsFeatureModule {}
