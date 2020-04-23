// const Component = await import('@angular/core').then(m => m.Component);
// declare const require: any;

export async function AppComponentFac() {

  const Component = await import('@angular/core').then(m => m.Component);

  @Component({
    selector: 'app-root',
    template: '<h1>Microfrontend 1</h1>'
  })
  class AppComponent {
  }

  return AppComponent;

}
