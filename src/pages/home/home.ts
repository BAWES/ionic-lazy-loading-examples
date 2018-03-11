import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  lazyLoadEducationPage(){
      this.navCtrl.push("EducationPage");
  }

  lazyLoadEducationListPage(){
    this.navCtrl.push("EducationListPage");
  }

  /**
   * TODO
   * 1) Lazy load individual pages
   * 2) Lazy load a collection of pages
   * 3) Ability to select which pages to NOT lazy-load on app start
   * 4) Experiment with deeplinking methods
   */

}
