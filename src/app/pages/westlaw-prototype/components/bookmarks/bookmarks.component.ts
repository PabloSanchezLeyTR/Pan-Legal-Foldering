import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ["./bookmarks.component.less"]
})
export class BookmarksComponent {
  showBookmark: boolean = true;

  toggleBookmark() {
    this.showBookmark = !this.showBookmark;
  }
}
