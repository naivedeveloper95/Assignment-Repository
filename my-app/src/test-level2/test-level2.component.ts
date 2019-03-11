import { Component, OnInit } from '@angular/core';
import { Test } from 'src/test/test.services';

@Component({
	selector: 'app-test-level2',
	templateUrl: './test-level2.component.html',
	styleUrls: ['./test-level2.component.css']
})
export class TestLevel2Component {
	checkRows: boolean = true;
	dataToDisplay: Array<any> = [];
	ordersUpto2Rows: Array<any> = [];
	loadRows: number = 5;
	constructor (private test: Test) {
		this.getDataToDisplay();
	}

	getDataToDisplay() {
		this.test.getOrders().then((res: any) => {
			// debugger;
			for (let i = 0; i <= this.loadRows; i++) {
				// debugger;
				this.ordersUpto2Rows[i] = res.rows[i];
			}
			this.dataToDisplay = res.rows;
		});
	}

	showMore() { /* for Load More button */
		this.checkRows = this.loadRows < this.dataToDisplay.length ? true : false;
		if (this.loadRows <= this.dataToDisplay.length) {
			if ((this.dataToDisplay.length - this.loadRows) >= 6) {
				this.loadRows = this.loadRows + 6; //changing the n value in for loop
			} else {
				this.loadRows = this.loadRows + (this.dataToDisplay.length - this.loadRows); //changing the n value in for loop
			}
		};
		this.getDataToDisplay();
	}
}
