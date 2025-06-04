import { Component, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-plan-tasks-v2',
  templateUrl: './plan-tasks.component.html',
  styleUrls: ['./plan-tasks.component.less']
})
export class PlanTasksComponentv2 {
  taskStatus = "loading";

  tasks: any[] = [
    {
      "taskName": "Task 1",
      "taskStatus": "completed",
      "taskDescription": "Research New York State employment laws regarding at-will employment and permissible reasons for termination for cause."
    },
    {
      "taskName": "Task 2",
      "taskStatus": "completed",
      "taskDescription": "Investigate legal precedents and court cases in New York concerning employee termination due to social media activity."
    },
    {
      "taskName": "Task 3",
      "taskStatus": "completed",
      "taskDescription": "Find information on whether New York law protects employees' social media posts under freedom of speech or other statutes in the context of employment."
    },
    {
      "taskName": "Task 4",
      "taskStatus": "in-progress",
      "taskDescription": "Explore if an employer's social media policy and its communication to employees affects the legality of termination for social media comments in New York."
    },
    {
      "taskName": "Task 5",
      "taskStatus": "",
      "taskDescription": "Determine if the content of the social media comment (e.g., discriminatory, confidential, damaging to the employer's reputation) influences the permissibility of termination for cause in New York."
    },
    {
      "taskName": "Task 6",
      "taskStatus": "",
      "taskDescription": " Search for resources from the New York State Department of Labor or legal experts on employee rights and employer responsibilities regarding social media."
    },
    {
      "taskName": "Task 7",
      "taskStatus": "",
      "taskDescription": " Identify any specific laws or regulations in New York that address employee conduct on social media and its implications for employment."
    },
    {
      "taskName": "Task 8",
      "taskStatus": "",
      "taskDescription": "Compare New York's laws on this topic with those of other states to understand any unique aspects of New York's legal framework."
    }
  ]

  updateTask(step: number) {
    switch(step) {
      case(4):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'in-progress';
        this.tasks[5].taskStatus = '';
        this.tasks[6].taskStatus = '';
        this.tasks[7].taskStatus = '';
        break;
      case(5):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'completed';
        this.tasks[5].taskStatus = 'in-progress';
        this.tasks[6].taskStatus = '';
        this.tasks[7].taskStatus = '';
        break;
      case(6):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'completed';
        this.tasks[5].taskStatus = 'completed';
        this.tasks[6].taskStatus = 'in-progress';
        this.tasks[7].taskStatus = '';
        break;
      case(7):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'completed';
        this.tasks[5].taskStatus = 'completed';
        this.tasks[6].taskStatus = 'completed';
        this.tasks[7].taskStatus = 'in-progress';
        break;
      case(8):
        this.tasks[0].taskStatus = 'completed';
        this.tasks[1].taskStatus = 'completed';
        this.tasks[2].taskStatus = 'completed';
        this.tasks[3].taskStatus = 'completed';
        this.tasks[4].taskStatus = 'completed';
        this.tasks[5].taskStatus = 'completed';
        this.tasks[6].taskStatus = 'completed';
        this.tasks[6].taskStatus = 'completed';
        this.tasks[7].taskStatus = 'completed';
        break;
      default:
        break;
    }
  }
}
