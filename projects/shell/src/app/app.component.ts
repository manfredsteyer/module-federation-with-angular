// const Component = await import('@angular/core').then(m => m.Component);
// declare const require: any;

export async function AppComponentFac() {

  const Component = await import('@angular/core').then(m => m.Component);
  const ContentChild = await import('@angular/core').then(m => m.ContentChild);
  const ViewChild = await import('@angular/core').then(m => m.ViewChild);
  const ViewContainerRef = await import('@angular/core').then(m => m.ViewContainerRef);
  const renderComponent = await import('@angular/core').then(m => m.ɵrenderComponent);
  const Injector = await import('@angular/core').then(m => m.Injector);
  const ComponentFactoryResolver = await import('@angular/core').then(m => m.ComponentFactoryResolver);
  const Inject = await import('@angular/core').then(m => m.Inject);

  @Component({
    selector: 'app-root',
    template: `
      <h1>Shell</h1>

      <a (click)="load()">Load MFE</a>
      <div id="container"></div>
    `
  })
  class AppComponent {
    title = 'shell';

    @ViewChild('vc', {read: ViewContainerRef, static: true})
    viewContainer;

    // constructor(
    //   @Inject(Injector) private injector,
    //   @Inject(ComponentFactoryResolver) private cfr) { }

    async load() {
      debugger;
      const createAppComp = await import('mfe1/Component').then(m => m['AppComponentFac']);
      const comp = await createAppComp();
      renderComponent(comp, { host: '#container' });
      // const factory = this.cfr.resolveComponentFactory(comp);
      // this.viewContainer.createComponent(factory, null, this.injector);
    }
  }

  return AppComponent;

}
