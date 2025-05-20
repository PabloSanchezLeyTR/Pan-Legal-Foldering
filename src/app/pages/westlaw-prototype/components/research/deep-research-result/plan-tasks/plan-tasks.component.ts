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
      "taskDescription": "Research New York State employment laws regarding at-will employment and permissible reasons for termination for cause."
    },
    {
      "taskName": "Task 2",
      "taskStatus": "in-progress",
      "taskDescription": "Investigate legal precedents and court cases in New York concerning employee termination due to social media activity."
    },
    {
      "taskName": "Task 3",
      "taskStatus": "in-progress",
      "taskDescription": "Find information on whether New York law protects employees' social media posts under freedom of speech or other statutes in the context of employment."
    },
    {
      "taskName": "Task 4",
      "taskStatus": "in-progress",
      "taskDescription": "Explore if an employer's social media policy and its communication to employees affects the legality of termination for social media comments in New York."
    },
    {
      "taskName": "Task 5",
      "taskStatus": "in-progress",
      "taskDescription": "Determine if the content of the social media comment (e.g., discriminatory, confidential, damaging to the employer's reputation) influences the permissibility of termination for cause in New York."
    },
    {
      "taskName": "Task 6",
      "taskStatus": "in-progress",
      "taskDescription": " Search for resources from the New York State Department of Labor or legal experts on employee rights and employer responsibilities regarding social media."
    },
    {
      "taskName": "Task 7",
      "taskStatus": "in-progress",
      "taskDescription": " Identify any specific laws or regulations in New York that address employee conduct on social media and its implications for employment."
    },
    {
      "taskName": "Task 8",
      "taskStatus": "in-progress",
      "taskDescription": "Compare New York's laws on this topic with those of other states to understand any unique aspects of New York's legal framework."
    }
  ]
}
