import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'fp-common-item',
  templateUrl: './common-item.component.html',
  styleUrls: ['./common-item.component.scss']
})
export class CommonItemComponent implements OnInit, AfterContentInit {

  @ContentChild('title') titleElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.titleElement.nativeElement.style.backgroundColor = 'gray';
  }

}
