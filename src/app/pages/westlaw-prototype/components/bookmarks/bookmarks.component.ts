import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ["./bookmarks.component.less"]
})
export class BookmarksComponent {
  showBookmark: boolean = false;

  toggleBookmark() {
    this.showBookmark = !this.showBookmark;
  }
}
