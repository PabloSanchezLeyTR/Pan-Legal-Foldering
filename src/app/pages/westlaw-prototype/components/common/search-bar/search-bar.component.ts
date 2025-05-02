import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ToggleOption } from '../../../models/toggle-options';
import { SearchSuggestion } from '../../../models/search-suggestion';
import { SEARCH_SUGGESTIONS } from '../../../data/search-suggestions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {

  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;

  openAttachmentDialog: boolean = false;
  openTaskLibraryDialog: boolean = false;
  @ViewChild('dialog', { static: false }) attachmentDialog: any;

  @ViewChildren('dialog') dialogRefs?: QueryList<ElementRef>;

  boundCloseDialog: () => void;

  searchSuggestions: SearchSuggestion[] = SEARCH_SUGGESTIONS;

  showSearchSuggestions: boolean = false;

  constructor(private renderer: Renderer2, private router: Router) {
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

  selectedOption: ToggleOption = this.toggleOptions[0];

  showResponseTimeMenu: boolean = false;

  inputChanged(event: Event) {
    const input = event.target as HTMLDivElement;
    this.inputContent = input.innerText;

    if (this.inputContent.length >= 3 && this.inputContent.length <= 10) {
      this.showSearchSuggestions = true;
    } else {
      this.showSearchSuggestions = false;
    }
  }

  toggleOptionSelected(option: ToggleOption) {
    this.selectedOption = option;
    if (option.label === 'Deep Research') {
      setTimeout(() => { this.showResponseTimeMenu = true });
    }
  }


  onDocumentClick(event: any) {
    if (!this.responseTimeMenu?.nativeElement.contains(event.target)) {
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

  clickTaskLibrary() {
    this.openTaskLibraryDialog = !this.openTaskLibraryDialog;
    // if (this.openTaskLibraryDialog) {
    //   setTimeout(() => {
    //     this.taskLibraryDialog.nativeElement.focus();
    //   });
    // }
  }

  redirectToResearch() {
    if (this.inputContent && this.inputContent.length > 0) {
      if (this.selectedOption?.label === 'Deep Research') {
        this.router.navigate(['/westlaw-prototype/deep-research/research-confirmation']);
      } else if (this.selectedOption?.label === 'Keyword Search') {
        this.router.navigate(['/westlaw-prototype/keyword-search']);
      }
    }
  }

}
