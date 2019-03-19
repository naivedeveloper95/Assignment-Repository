import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test } from 'src/test.services';
import { TestLevel2Component } from './test-level2.component';

@NgModule({
	declarations: [TestLevel2Component],
	imports: [CommonModule],
	providers: [Test]
})
export class TestModule {}
