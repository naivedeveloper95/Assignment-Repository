import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class Test implements Resolve<any> {
    orders: Array<any> = [];
    onOrdersChanged: BehaviorSubject<any>;

	/**
	 * Constructor
	 *
	 * @param {HttpClient} _httpClient
	 */
    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onOrdersChanged = new BehaviorSubject({});
    }

	/**
	 * Resolver
	 *
	 * @param {ActivatedRouteSnapshot} route
	 * @param {RouterStateSnapshot} state
	 * @returns {Observable<any> | Promise<any> | any}
	 */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([this.getOrders()]).then(() => {
                resolve();
            }, reject);
        });
    }

	/**
	 * Get orders
	 *
	 * @returns {Promise<any>}
	 */
    getOrders(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                // .get(
                // 	'https://s3-ap-southeast-1.amazonaws.com/takehomeproject/feed.json',
                // )
                .get(
                    'https://static.sportskeeda.com/takehomeproject/feed.json',

                    // Doesn't work on this url, it gives cors error. Setup proxy on angular is a possible fix or work around.
                )
                .subscribe((response: any) => {
                    this.orders = response.data;
                    this.onOrdersChanged.next(this.orders);
                    resolve(this.orders);
                }, reject);
        });
    }
}
