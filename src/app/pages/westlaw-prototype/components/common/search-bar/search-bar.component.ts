import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ToggleOption } from '../../../models/toggle-options';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {

  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;

  openAttachmentDialog: boolean = false;
  @ViewChild('dialog', { static: false }) attachmentDialog: any;

  @ViewChildren('dialog') dialogRefs?: QueryList<ElementRef>;

  boundCloseDialog: () => void;


  constructor(private renderer: Renderer2) {
    this.renderer.listen('document', 'click', (event: Event) => {
      this.onDocumentClick(event);
    });

    this.boundCloseDialog = this.closeDialog.bind(this);
  }

  ngAfterViewInit() {
    this.dialogRefs?.changes.subscribe((dialogRefs: QueryList<ElementRef>) => {
      const dialogRef = dialogRefs.first;
      if (dialogRef) {
        dialogRef.nativeElement.addEventListener('hide', this.boundCloseDialog);
      }
    });
  }


  inputContent: string = '';

  toggleOptions: ToggleOption[] = [
    {
      label: 'Keyword Search',
      textColor: 'blue',
    },
    {
      label: 'Deep Research',
      icon: 'telescope',
      textColor: 'blue',
      includeDropdown: true,
    }
  ];

  showResponseTimeMenu: boolean = false;

  inputChanged(event: Event) {
    const input = event.target as HTMLDivElement;
    this.inputContent = input.innerText;
  }

  toggleOptionSelected(option: ToggleOption) {
    if (option.label === 'Deep Research') {
      setTimeout(() => {this.showResponseTimeMenu = true});
    }
  }


  onDocumentClick(event: any) {
    if (!this.responseTimeMenu.nativeElement.contains(event.target)) {
      if (this.showResponseTimeMenu) {
        this.showResponseTimeMenu = false;
      }
    }
  }

  closeDialog() {
    this.dialogRefs?.first.nativeElement.removeEventListener('hide', this.boundCloseDialog);
    this.attachmentDialog.nativeElement.hide();
    this.openAttachmentDialog = false;
  }

  clickHandler() {
    this.openAttachmentDialog = !this.openAttachmentDialog;
    if (this.openAttachmentDialog) {
      setTimeout(() => {
        this.attachmentDialog.nativeElement.focus();
      });
    }
  }

}
