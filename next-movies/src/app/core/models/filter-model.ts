export class FilterModel {
  rate: number;
  title: string;

  constructor(rate?: number, title?: string) {
    this.rate = rate || 0;
    this.title = title || '';
  }
}
