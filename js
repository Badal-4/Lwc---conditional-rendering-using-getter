import { LightningElement, track } from 'lwc';

export default class MyComponent extends LightningElement {
  @track records = [];

  get showNoRecordsFound() {
    return this.records.length === 0;
  }
}
