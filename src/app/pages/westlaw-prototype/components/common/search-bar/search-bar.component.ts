import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ToggleOption } from '../../../models/toggle-options';
import { SearchSuggestion } from '../../../models/search-suggestion';
import { SEARCH_SUGGESTIONS } from '../../../data/search-suggestions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent {
  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('deepResearchMenu') deepResearchMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('compactSearchBar') compactSearchBar!: ElementRef<HTMLDivElement>;

  openAttachmentDialog: boolean = false;
  openTaskLibraryDialog: boolean = false;
  openJurisdictionDialog: boolean = false;
  isFileLoading: boolean = false;
  isFileUploadedDone: boolean = false;
  fileUploadProgress: number = 0;
  fileUploadStepText: string = 'Uploading...';

  @ViewChild('dialog', { static: false }) attachmentDialog: any;
  @ViewChild('searchInput', { static: false }) searchInput:
    | ElementRef<HTMLDivElement>
    | undefined;

  @ViewChildren('dialog') dialogRefs?: QueryList<ElementRef>;

  @Input() compactMode: boolean = false;

  boundCloseDialog: () => void;

  searchSuggestions: SearchSuggestion[] = SEARCH_SUGGESTIONS;

  showSearchSuggestions: boolean = false;

  showMentions = false;
  mentions = [
    {
      title: 'Barnes v. Gorman',
      description: '536 U.S. 181 • 122 S. Ct. 2097 • 6/17/2002 • U.S.',
    },
    {
      title: 'In re Gorman',
      description: '933 F.2d 982 • May 1991 • C.A.Fed.',
    },
    {
      title: 'Gorman v. Wolpoff & Abramson, LLP',
      description: '536 U.S. 181 • 122 S. Ct. 2097 • Jun 2002 • U.S.',
    },
  ];
  links = [
    {
      title: 'Quick Check',
      description: 'Check your own work, analyze your opponent’s work to identify potential weaknesses.',
      link: '/westlaw-prototype/deep-research/quick-check'
    },
    {
      title: 'Legal Document Analysis',
      description: 'Identify potential issues with a document’s cited authority and quotations.'
    },
    {
      title: 'Review Documents',
      description: 'Ask questions about a batch of documents and receive answers complete with citations.'
    }
  ]
  mentionTop = 0;
  mentionLeft = 0;

  isCompactSearchBarFocused: boolean = false;
  @Output() compactSearchBarFocused: EventEmitter<null> = new EventEmitter<null>();
  @Output() compactSearchBarBlur: EventEmitter<null> = new EventEmitter<null>();

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
      label: 'Search',
      textColor: 'blue',
      icon: 'magnifying-glass',
      includeDropdown: true,
      dropdownOnlyWhenActive: true,
    },
    {
      label: 'Deep AI Research',
      icon: 'telescope',
      textColor: 'blue',
      includeDropdown: true,
      dropdownOnlyWhenActive: true,
    },
  ];

  selectedOption: ToggleOption = this.toggleOptions[0];

  showResponseTimeMenu: boolean = false;
  showDeepResearchMenu: boolean = false;

  inputChanged(event: Event) {
    const input = event.target as HTMLDivElement;
    this.inputContent = input.innerText;

    if (this.inputContent.indexOf('@') == -1) {
      this.showMentions = false;
    }

    if (this.inputContent.length >= 3 && this.inputContent.length <= 10) {
      this.showSearchSuggestions = true;
    } else {
      this.showSearchSuggestions = false;
    }
  }

  toggleOptionSelected(option: ToggleOption) {
    this.selectedOption = option;
    if (option.label === 'Search') {
      setTimeout(() => {
        if (this.showDeepResearchMenu) {
          this.showDeepResearchMenu = false;
        }
        this.showResponseTimeMenu = true;
      });
    } else if (option.label === 'Deep AI Research') {
      setTimeout(() => {
        if (this.showResponseTimeMenu) {
          this.showResponseTimeMenu = false;
        }
        this.showDeepResearchMenu = true;
      })
    }
  }

  closeSearchMenu(searchType: number) {
    setTimeout(() => {
      this.showResponseTimeMenu =false;
    });
  }

  onDocumentClick(event: any) {
    if (!this.responseTimeMenu?.nativeElement.contains(event.target)) {
      if (this.showResponseTimeMenu) {
        this.showResponseTimeMenu = false;
      }
    }

    if (!this.deepResearchMenu?.nativeElement.contains(event.target)) {
      if (this.showDeepResearchMenu) {
        this.showDeepResearchMenu = false;
      }
    }

    if(!this.compactSearchBar?.nativeElement.contains(event.target)) {
      if(this.isCompactSearchBarFocused) {
        this.blurCompactModeSearchBar()
      }
    }
  }

  closeDeepResearchMenu() {
    setTimeout(() => {
      this.showDeepResearchMenu = false;
    })
  }

  closeJurisdictionDialog() {
    this.openJurisdictionDialog = false;
  }

  uploadFile(): void {
      this.isFileLoading = true;
      setTimeout(() => {
        this.fileUploadProgress = 100;
      }, 500);
      setTimeout(() => {
        this.fileUploadStepText = 'File uploaded successfully!';
      }, 1000);
  }

  closeDialogDone() {
    this.isFileUploadedDone = true;
    this.openAttachmentDialog = false;
    this.fileUploadProgress = 0;
    this.fileUploadStepText = 'Uploading...';
  }

  closeDialog() {
    // this.dialogRefs?.first.nativeElement.removeEventListener(
    //   'hide',
    //   this.boundCloseDialog
    // );
    // this.attachmentDialog.nativeElement.hide();
    this.openAttachmentDialog = false;
  }

  clickHandler() {
    this.openAttachmentDialog = !this.openAttachmentDialog;
    // if (this.openAttachmentDialog) {
    //   setTimeout(() => {
    //     this.attachmentDialog.nativeElement.focus();
    //   });
    // }
  }

  clickTaskLibrary() {
    this.openTaskLibraryDialog = !this.openTaskLibraryDialog;
    // if (this.openTaskLibraryDialog) {
    //   setTimeout(() => {
    //     this.taskLibraryDialog.nativeElement.focus();
    //   });
    // }
  }

  clickJurisdiction() {
    this.openJurisdictionDialog = !this.openJurisdictionDialog;
  }

  redirectToResearch() {
    if (this.inputContent && this.inputContent.length > 0) {
      if (this.selectedOption?.label === 'Deep AI Research') {
        if(window.location.pathname.includes('new-research-v2')) {
          this.router.navigate([
            '/westlaw-prototype/deep-research-v2/research-confirmation',
          ]);
        }else{
          this.router.navigate([
            '/westlaw-prototype/deep-research/research-confirmation',
          ]);
        }
      } else if (this.selectedOption?.label === 'Search') {
        this.router.navigate(['/westlaw-prototype/keyword-search']);
      }
    }
  }

  openTagDialog() {
    const editor = this.searchInput?.nativeElement;
    if (!editor) return;

    let lastTag = editor.lastElementChild;
    if (lastTag && lastTag.tagName == 'BR') lastTag.remove();

    editor.innerText += '@';
    // Position the mention container at the end of the content
    this.showMentions = true;
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(editor.childNodes[0], editor.innerText.length - 1);
    range.setEnd(editor.childNodes[0], editor.innerText.length);
    const rect = range.getBoundingClientRect();
    const editorRect = editor.getBoundingClientRect();
    this.mentionTop = rect.top - editorRect.top + editor.scrollTop + 28;
    this.mentionLeft = rect.left - editorRect.left + editor.scrollLeft + 5;
  }

  selectMention(mention: string) {
    const editor = this.searchInput?.nativeElement;
    if (!editor) return;

    const text = editor.innerText;
    const mentionIndex = text.lastIndexOf('@');
    if (mentionIndex !== -1) {
      editor.innerHTML =
        text.substring(0, mentionIndex) +
        '<span style="color: #054688; text-decoration: underline" contenteditable="false">' +
        '@' +
        mention +
        '</span>' +
        ' ';
    }

    this.showMentions = false;

    let lastTag = editor.lastElementChild;
    if (lastTag && lastTag.tagName == 'BR') lastTag.remove();

    // Set focus back to the editor
    editor.focus();

    // Move cursor to the end of the content
    const range = document.createRange();
    const selection = window.getSelection();

    const lastChild = editor.lastChild;
    if (lastChild) {
      range.setStart(lastChild, lastChild.textContent!.length);
      range.collapse(true);
      selection!.removeAllRanges();
      selection!.addRange(range);
    }
  }

  focusCompactModeSearchBar() {
    this.isCompactSearchBarFocused = true;
    this.compactSearchBarFocused.emit(null);

  }

  blurCompactModeSearchBar() {
    this.isCompactSearchBarFocused = false;
    this.compactSearchBarBlur.emit(null);
  }
}
