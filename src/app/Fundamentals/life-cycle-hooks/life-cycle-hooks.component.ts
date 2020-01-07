import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, HostListener } from '@angular/core';

@Component({
  selector: 'my-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styles: []
})
export class LifeCycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  data: string = "Life Cycle Hooks by sequence"

  ngOnChanges(current: SimpleChanges) {
    //console.log('ngOnChanges -- event -- LifeCycleHooksComponent  -- ' + current)
  }

  ngOnInit() {
    //console.log('ngOnInit -- event -- LifeCycleHooksComponent')
  }

  ngDoCheck() {
    //console.log('ngDoCheck -- event -- LifeCycleHooksComponent')
  }

  ngAfterContentInit() {
    //console.log('ngAfterContentInit -- event -- LifeCycleHooksComponent')
  }

  ngAfterContentChecked() {
    //console.log('ngAfterContentChecked -- event -- LifeCycleHooksComponent')
  }

  ngAfterViewInit() {
    //console.log('ngAfterViewInit -- event -- LifeCycleHooksComponent')
  }

  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked -- event -- LifeCycleHooksComponent')
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    console.log('ngOnDestryed -- event')
  }

}
