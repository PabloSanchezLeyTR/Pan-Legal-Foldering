import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-deep-research-result',
  templateUrl: './deep-research-result.component.html',
  styleUrls: ['./deep-research-result.component.less']
})
export class DeepResearchResultComponent {
  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;

  loading: boolean = true;
  sources: number = 0;
  fullReport: boolean = false;
  preliminaryAnswer: boolean = false;
  currentStep: number = 2;


  toggleLoading() {
    this.loading = !this.loading;
  }

  resetStepData() {
    this.loading = true;
    this.sources = 0;
    this.fullReport = false;
    this.preliminaryAnswer = false;
  }

  getSources() {
    this.sources = 12;
  }

  getPremilinaryAnswer() {
    this.preliminaryAnswer = true;
  }
  getFullReport() {
    this.fullReport = true;
  }

  setCurrentStep(step: number) {
     /* steps
    step 1 confirm research plan
    step 2 loading, no sources
    step 3 loading, sources ready (showing)
    step 4 loading, preliminary answer, no full report
    step 5 loading, full report
  */

    this.resetStepData();

    this.currentStep = step;
    if(step === 3) {
      this.getSources();
    }
    if(step === 4) {
      this.getSources();
      this.getPremilinaryAnswer();
    }
    if(step === 5) {
      this.getSources();
      this.getFullReport();
    }
  }
}
