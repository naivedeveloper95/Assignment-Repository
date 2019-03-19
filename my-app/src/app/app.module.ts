import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from 'src/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { TestLevel2Component } from 'src/test-level2/test-level2.component';
import { Test } from 'src/test.services';

const appRoutes: Routes = [
	{ path: '', component: TestComponent },
	{ path: 'level2', component: TestLevel2Component }
];

@NgModule({
	declarations: [AppComponent, TestComponent, TestLevel2Component],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [Test],
	bootstrap: [AppComponent]
})
export class AppModule {}
