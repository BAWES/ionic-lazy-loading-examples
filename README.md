# Lazy Loading Example w/ Ionic 3

Install the app for a demo on how it works

## How lazy loading is implemented

Every page we add needs to have a `@IonicPage()` decorator added to the top of the page class along with a corresponding `module` class file / `NgModule` in the same folder.

By using `IonicPageModule` we now can navigate to and lazy load pages on demand by navigating to the class name as a string.

### Example navigating to class name

`this.navCtrl.push("EducationPage");`

### Example navigating to custom name

First we need to set the name of the page in the `@IonicPage` decorator as follows:

```
@IonicPage({
  name: 'my-page'
})
```

We can now navigate to that page using `this.navCtrl.push('my-page');`


## Pre-loading and priorities

By default, preloading is turned off so setting this property would do nothing. Preloading eagerly loads all deep links after the application boots instead of on demand as needed. To enable preloading, set preloadModules in the main application module config to true:

```
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule { }
```

If preloading is turned on, it will load the modules based on the value of `priority`. The following values are possible for `priority`: `"high"`, `"low"`, and `"off"`. When there is no `priority`, it will be set to `"low"`.

All deep links with their priority set to `"high"` will be loaded first. Upon completion of loading the `"high"` priority modules, all deep links with a priority of `"low"` (or no priority) will be loaded. If the priority is set to "off" the link will not be preloaded. Setting the priority is as simple as passing it to the `@IonicPage` decorator:

```
@IonicPage({
  name: 'my-page',
  priority: 'high'
})
```


## Attempt at eager loading a page (not lazy loaded)

The `HomePage` is not lazy loaded because it's `HomePageModule` imported in `app.module.ts`

## References

* https://ionicframework.com/docs/api/navigation/IonicPage/
* https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/
* https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/
* https://github.com/marcelodeandrade/lazyLoadingTabs