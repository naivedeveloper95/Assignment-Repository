import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test } from '../test.services';
import { TestComponent } from './test.component';

@NgModule({
	declarations: [TestComponent],
	imports: [CommonModule],
	providers: [Test]
})
export class TestModule {}
