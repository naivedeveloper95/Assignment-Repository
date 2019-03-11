import { Component } from '@angular/core';
import { Test } from './test.services';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent {
    dataToDisplay: any = [];
    arrayDataOne = [];
    arrayDataTwo = [];
    count: any = 0;
    constructor(private test: Test) {
        this.getDataToDisplay();
    }

    getDataToDisplay() {
        this.test.getOrders().then((res: any) => {
            this.dataToDisplay = res.rows;
        });
    }
}
