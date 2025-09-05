import { Component } from '@angular/core';
import { MyreactivefromComponent } from './forms/myreactivefrom/myreactivefrom.component';
import { MytemplatedrivefromComponent } from './forms/mytemplatedrivefrom/mytemplatedrivefrom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyreactivefromComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sessioncookiecache';

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  //   if (isPlatformBrowser(this.platformId)) {
  //     // ✅ Safe to access browser APIs here
  //     // sessionStorage.setItem("name", "Muhammad Sajid");
  //     // localStorage.setItem("name", "sajid");

  //     if (window.localStorage) {
  //       alert("Supported");
  //     }
  //   }

  // }
}
