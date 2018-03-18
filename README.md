# Lazy Loading Example w/ Ionic 3

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

## Attempt at eager loading a page (not lazy loaded)

The `HomePage` is not lazy loaded because it's `HomePageModule` imported in `app.module.ts`

## References

* https://ionicframework.com/docs/api/navigation/IonicPage/
* https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/
* https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/
* https://github.com/marcelodeandrade/lazyLoadingTabs