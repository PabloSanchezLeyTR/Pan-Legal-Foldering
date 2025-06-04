import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { PlanTasksComponentv2 } from './plan-tasks/plan-tasks.component';

@Component({
  selector: 'app-deep-research-result',
  templateUrl: './deep-research-result.component.html',
  styleUrls: ['./deep-research-result.component.less']
})
export class DeepResearchResultComponentv2 {
  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('progressBarIndicator') progressBarIndicator!: ElementRef<HTMLDivElement>;
  @ViewChild('dialog', { static: false }) fullPlanDialog: any;
  @ViewChild('planTasks') planTasksComponent!: PlanTasksComponentv2;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  scrollToTop() {
    this.renderer.setProperty(this.el.nativeElement, 'scrollTop', 0);
  }


  updateProgressBar() {
    if (this.progressBarIndicator) {
      const progressPercentage = (this.currentStep / this.totalSteps) * 100;
      this.progressBarIndicator.nativeElement.style.width = `${progressPercentage}%`;

      // switch (this.currentStep) {
      //   case 2:
      //     this.progressBarIndicator.nativeElement.style.width = '44px';
      //     break;
      //   case 3:
      //     this.progressBarIndicator.nativeElement.style.width = '44px';
      //     break;
      //   case 4:
      //     this.progressBarIndicator.nativeElement.style.width = '44px';
      //     break;
      //   case 5:
      //     this.progressBarIndicator.nativeElement.style.width = '88px';
      //     break;
      //   case 6:
      //     this.progressBarIndicator.nativeElement.style.width = '176px';
      //     break;
      //   case 7:
      //     this.progressBarIndicator.nativeElement.style.width = '308px';
      //     break;
      //   case 8:
      //     this.progressBarIndicator.nativeElement.style.width = '100%';
      //     setTimeout(() => {
      //         this.progressBarIndicator.nativeElement.style.background = '#387C2B';
      //     }, 500);
      //     break;
      //   default:
      //     // Default logic
      //     break;
      // }
    }
  }

  openFullPlanDialog: boolean = false;
  loading: boolean = true;
  //sources: number = 0;
  researchReportTabLoading: boolean = true;
  fullReport: boolean = false;
  preliminaryAnswer: boolean = false;
  currentStep: number = 2;
  totalSteps: number = 8;
  taskCurrent: number = 1;
  taskTotal: number = 8;
  nQuestions: number = 0;
  nSources: number = 0;
  nNotes: number = 0;

  expandedFooter: boolean = false;
  togglePlan: boolean = false;

  ngOnInit() {
    this.scrollToTop();
    this.setCurrentStep(this.currentStep);
    this.nextStep();
  }

  ngAfterViewInit(): void {
    const externalElement = document.querySelector('header');
    if (externalElement) {
      this.renderer.addClass(externalElement, 'dom-flow');
    }
  }

  ngOnDestroy(): void {
    const externalElement = document.querySelector('header');
    if (externalElement) {
      this.renderer.removeClass(externalElement, 'dom-flow');
    }
  }

  closeDialog() {
    //this.fullPlanDialog.nativeElement.hide();
    this.openFullPlanDialog = false;
  }

  toggleFullPlanDialog() {
    this.openFullPlanDialog = !this.openFullPlanDialog;

    // if (this.openFullPlanDialog) {
    //   setTimeout(() => {
    //     this.fullPlanDialog.nativeElement.focus();
    //   });
    // }
  }

  toggleLoading() {
    this.loading = !this.loading;
  }

  resetStepData() {
    this.loading = true;
    this.nSources = 0;
    this.fullReport = false;
    this.preliminaryAnswer = false;
  }

  // getSources() {
  //   this.nSources = 12;
  // }

  getPremilinaryAnswer() {
    this.preliminaryAnswer = true;
  }
  getFullReport() {
    this.fullReport = true;
  }

  //advance the current step by 1
  nextStep() {
    if(this.currentStep < 8) {
      this.setCurrentStep(this.currentStep + 1);
    }
  }

  //go back to the previous step
  prevStep() {
    if(this.currentStep > 2) {
      this.setCurrentStep(this.currentStep - 1);
    }
  }

  setCurrentStep(step: number) {
    // this.resetStepData();

    if(this.planTasksComponent)
    this.planTasksComponent.updateTask(step);

    this.currentStep = step;
    if(step === 2) {
      //no content visible
      this.taskCurrent = 1;
    }

    if(step === 3) {
       //empty tabs and loader visible
      this.taskCurrent = 3;
    }
    if(step === 4) {
      //preliminary answer and loader visible, 1 task completed, 1 question, 4 sources
      this.nSources = 4;
      this.getPremilinaryAnswer();
      this.taskCurrent = 5;
      this.nQuestions = 1;
    }
    if(step === 5) {
      //preliminary answer and loader visible, 2 tasks completed, 1 question, 6 sources
      this.nSources = 8;
      this.taskCurrent = 8;
      this.nQuestions = 5;
      this.nNotes = 4;
    }

    if(step === 6) {
      //preliminary answer and loader visible, at least 4 tasks completed, 1 question, 6 sources
      this.nSources = 8;
      this.taskCurrent = 8;
      this.nQuestions = 5;
      this.nNotes = 4;
    }

    if(step === 7) {
      //preliminary answer and loader visible, seems all visible tasks completed, 1 question, 8 sources
      this.nSources = 8;
      this.taskCurrent = 8;
      this.nQuestions = 5;
      this.nNotes = 4;
    }

    if(step === 8) {
      //no loader, full report, all visible tasks completed, 5 questions, 12 sources
      this.nSources = 8;
      this.getFullReport();
      this.taskCurrent = 8;
      this.nQuestions = 5;
      this.nNotes = 4;
      this.researchReportTabLoading = false;
      this.preliminaryAnswer = false;
    }


    this.updateProgressBar()
  }

  //create a fuction that advances the current step by 1 every 10 seconds
  advanceStep() {
    setTimeout(() => {
      if(this.currentStep < 8) {
        this.setCurrentStep(this.currentStep + 1);
      }
    }, 2000);
  }

  searchBarFocused() {
    this.expandedFooter = true;
  }

  toggleShow(){
    this.togglePlan = !this.togglePlan;
  }

  searchBarBlur() {
    this.expandedFooter = false;
  }
}
