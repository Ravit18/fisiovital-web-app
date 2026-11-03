import { Component } from '@angular/core';
import { Layout } from './components/layout/layout';

@Component({
  imports: [Layout],
  selector: 'app-root',
  template: '<app-layout />',
  styles: ':host { display: block; height: 100%; }',
})
export class App {}
