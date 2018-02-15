import { Directive, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({
    selector: '[ptHackerRxClick]'
})
export class PtHackerRxClickDirective implements OnInit {

    @Output() ptHackerRxClick = new EventEmitter<Observable<MouseEvent>>();

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        this.ptHackerRxClick.emit(Observable.fromEvent<MouseEvent>(this.el.nativeElement, 'click'));
    }
}