import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-deep-research-result',
  templateUrl: './deep-research-result.component.html',
  styleUrls: ['./deep-research-result.component.less']
})
export class DeepResearchResultComponent {
  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('progressBarIndicator') progressBarIndicator!: ElementRef<HTMLDivElement>;

  updateProgressBar() {
    if (this.progressBarIndicator) {
      const progressPercentage = (this.taskCurrent / this.taskTotal) * 100;
      this.progressBarIndicator.nativeElement.style.width = `${progressPercentage}%`;
    }
  }

  loading: boolean = true;
  sources: number = 0;
  fullReport: boolean = false;
  preliminaryAnswer: boolean = false;
  currentStep: number = 2;
  taskCurrent: number = 1;
  taskTotal: number = 8;

  ngOnInit() {
    this.setCurrentStep(this.currentStep);
  }

  ngAfterViewInit(): void {

  }

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
    this.resetStepData();

    this.currentStep = step;
    if(step === 2) {
      this.taskCurrent = 1;
    }

    if(step === 3) {
      this.getSources();
      this.taskCurrent = 3;
    }
    if(step === 4) {
      this.getSources();
      this.getPremilinaryAnswer();
      this.taskCurrent = 5;
    }
    if(step === 5) {
      this.getSources();
      this.getFullReport();
      this.taskCurrent = 8;
    }

    this.updateProgressBar()
  }

  //create a fuction that advances the current step by 1 every 10 seconds
  advanceStep() {
    setTimeout(() => {
      if(this.currentStep < 5) {
        this.setCurrentStep(this.currentStep + 1);
      }
    }, 2000);
  }
}
