import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {FilterModel} from '../../models/filter-model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements AfterViewInit {
  public rateValue: number;
  public searchTerm: string;

  @Output() filterChanged: EventEmitter<FilterModel> = new EventEmitter<FilterModel>();
  @ViewChild('search') searchElement: ElementRef;

  constructor() {
  }

  onRateChanged(rate: number): void {
    this.filterChanged.emit(new FilterModel(rate, this.searchTerm?.toLowerCase()));
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchElement.nativeElement, 'keyup')
      .pipe(
        map(() => this.searchTerm),
        debounceTime(300),
      )
      .subscribe(searchTerm => this.filterChanged.emit(new FilterModel(this.rateValue, searchTerm.toLowerCase())));
  }
}
