import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-card-element',
  templateUrl: './ng-card-element.component.html',
  styleUrls: ['./ng-card-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgCardElementComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() name: string | undefined;
  @Input() time = new Date();
  @Input() caption: string| undefined;
  @Input() avtar: string| undefined;
  @Input() image: string| undefined;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() commentNotify = new EventEmitter<boolean>();

  likeEvent() {
    this.likeNotify.emit(true);
  }
  shareEvent() {
    this.shareNotify.emit(true);
  }
  commentEvent() {
    this.commentNotify.emit(true);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
