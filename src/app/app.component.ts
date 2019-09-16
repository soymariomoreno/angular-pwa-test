import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private messaging: AngularFireMessaging) {
    this.messaging.requestPermission.pipe(mergeMapTo(this.messaging.tokenChanges))
      .subscribe((token) => {
        console.log('Permission granted! Save to the server!', token);
      },(error) => {
        console.error('Unable to get permission to notify.', error);
    });
  }
}
