import { Component, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-plan-tasks',
  templateUrl: './plan-tasks.component.html',
  styleUrls: ['./plan-tasks.component.less']
})
export class PlanTasksComponent {
  taskStatus = "loading";

  tasks: any[] = [
    {
      "taskName": "Task 1",
      "taskStatus": "in-progress",
      "taskDescription": "Research California State Economic loss rule and its applicability to tort actions."
    },
    {
      "taskName": "Task 2",
      "taskStatus": "",
      "taskDescription": "Investigate Exceptions to Economic Loss Rule in California."
    },
    {
      "taskName": "Task 3",
      "taskStatus": "",
      "taskDescription": "Find information on conditions under which Economic Loss Rule may not bar Fraud Claim."
    },
    {
      "taskName": "Task 4",
      "taskStatus": "",
      "taskDescription": "Explore key considerations for Assessing Fraud claims in the Context of the Economic Loss Rule in California State."
    },
    {
      "taskName": "Task 5",
      "taskStatus": "",
      "taskDescription": "Search for unusual situations regarding Economic loss rule and it’s applicability to tort actions."
    }
  ]

  updateTask(step: number) {
    switch(step) {
      case(4):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'in-progress';
        this.tasks[2].taskStatus = '';
        this.tasks[3].taskStatus = '';
        this.tasks[4].taskStatus = '';
        break;
      case(5):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'in-progress';
        this.tasks[3].taskStatus = '';
        this.tasks[4].taskStatus = '';
        break;
      case(6):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'in-progress';
        this.tasks[4].taskStatus = '';
        break;
      case(7):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'in-progress';
        break;
      case(8):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'completed';
        break;
      default:
        break;
    }
  }
}