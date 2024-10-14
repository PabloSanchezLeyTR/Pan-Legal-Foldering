import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import { CollectionView, DataType } from '@grapecity/wijmo';
import {
  CellType,
  DataMap,
  GridPanel,
  type FlexGrid,
} from '@grapecity/wijmo.grid';
import { CellMaker } from '@grapecity/wijmo.grid.cellmaker';
import { Selector } from '@grapecity/wijmo.grid.selector';

// This is a build time key. No concerns having it here
wjcCore.setLicenseKey(
  'Thomson Reuters*,169966291453339#B07eYICRiwiI34zZ784MadjVZVlbzcHM8ZTYV96ZZR5ZuFXN5ZFdC56RzEmRwR7VldnaXdmS84UM6h5YM5GSwRzaYljTjdXe4QHULh4U42idrNTT4QzbQNmWJNXRix4USNGWx2CbYpVb8InU4cUWnlDcHxkYDNleJB7RQ9UWxNENSdWcKF6YZlzKrJWVPRjW7NlMZBVRalVcJNlR5wkd0V6UrJFead4V5gVSwNEUxg4NDlFcNtyczwEc8pmZVVlYnVUVtZDZoJWM4V4R0RlVSpnNORXd8FHRvUVNKF7b8N4TnhjdrUjMGJHdFlGcIRTa7NjdyZ6TthGRGx4NntGWkNkarclUul6U7x6bhJHNTt6doZ5ZMV7Y6cnZ4V4QyZ4QYV7cEJVS7RUZyRnZGx6YF3kTO34UGRGMSVla8U5SzhWW9gmbo3iT9MEVLlWbjp6Z9JEUIpnMZN5b7V4cupUczpmI0IyUiwiI7IUQGVDRBdjI0ICSiwyM5gTNzUjN9gTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyM5EzM8ADIyAjMxIjMwIjI0ICdyNkIsIiKzJXZ4VXZSBibvNXbvhGViojIh94QiwiI9MzMzUDNxkjM6YTO9YTMiojIklkIs4XXbpjInxmZiwiIyYnMyAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwbbMJ'
);

const data = [
  'Afghanistan',
  'Aland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (Chagos Archipelago)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Curacao',
  'Cyprus',
  'Czechia',
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Faroe Islands',
  'Falkland Islands (Malvinas)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (Vatican City State)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Democratic People's Republic of Korea",
  'Republic of Korea',
  'Kuwait',
  'Kyrgyz Republic',
  "Lao People's Democratic Republic",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Macedonia',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Barthelemy',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard & Jan Mayen Islands',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Virgin Islands, British',
  'Virgin Islands, U.S.',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

enum SELECT_ALL {
  ALL_SELECTED = 'ALL_SELECTED',
  NONE_SELECTED = 'NONE_SELECTED',
  SOME_SELECTED = 'SOME_SELECTED',
}

export interface Model {
  id: number;
  country: string;
  select: 'Yes' | 'No' | 'Maybe';
  status: 'Active' | 'Inactive';
}

function getData(): Model[] {
  return data.map((country, i) => ({
    id: i + 1,
    country,
    select:
      Math.random() > 0.33 ? 'Yes' : Math.random() > 0.66 ? 'No' : 'Maybe',
    checkbox: Math.random() > 0.5,
    status: Math.random() > 0.5 ? 'Active' : 'Inactive',
  }));
}
@Component({
  selector: 'wijmo-demo',
  templateUrl: './jaime-research.component.html',
  styleUrls: ['./jaime-research.component.less']
})
export class WijmoDemoComponent {
  itemsSourceToolbar = new CollectionView<Model>(getData(), {
    pageSize: 25,
  });
  itemsSourceToolbar2 = new CollectionView<Model>(getData(), {
    pageSize: 100,
  });
  @ViewChild('gridRef', { static: true }) gridRef!: FlexGrid;
  @ViewChild('drawerRef', { static: false }) drawerRef?: ElementRef;
  @ViewChild('bottomDrawerRef', { static: false }) bottomDrawerRef?: ElementRef;
  @ViewChild('modalButton', { static: true }) modalButton!: ElementRef;

  selectedIdsToolbar: number[] = [];
  pageIndexToolbar = 0;
  filter = '';
  columnsList: any[] = [];
  defaultColumns: any[] = [];
  noVisibleColumnsList: any[] = [];
  isCompact = document.querySelector('.saf-flexgrid--compact') !== null;
  readonly SELECT_ALL = SELECT_ALL;
  currentSelectAllState = this.getCurrentSelectAllState();
  page1: boolean = true;
  page2: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  // Toggles for demo
  isCompactDensity = false;
  isAlternatingRows = true;
  isFlexsheet = true;
  isHidden = true;

  openSecondPage() {
    this.page1 = false;
    this.page2 = true;
  }

  openFirstPage() {
    this.page1 = true;
    this.page2 = false;
  }

  hideDialog() {
    this.isHidden = true;
    document.body.style.overflow = 'auto';
  }


  handleCompactDensityChange(event: any): void {
    this.isCompactDensity = event.target.checked;
    this.cdr.detectChanges();
    this.gridRef.refresh();
  }
  handleAlternatingRowsChange(event: any): void {
    this.isAlternatingRows = event.target.checked;
  }
  handleFlexsheetChange(event: any): void {
    this.isFlexsheet = event.target.checked;
  }

  handleOpenDrawer(ref: string) {
    if (ref === 'drawerRef') {
      this.drawerRef?.nativeElement.show();
    } else {
      this.bottomDrawerRef?.nativeElement.show();
    }
  }

  getCurrentSelectAllState() {
    const { length } = this.selectedIdsToolbar;
    const { totalItemCount } = this.itemsSourceToolbar;
    switch (length) {
      case 0:
        return SELECT_ALL.NONE_SELECTED;
      case totalItemCount:
        return SELECT_ALL.ALL_SELECTED;
      default:
        return SELECT_ALL.SOME_SELECTED;
    }
  }

  initGrid(grid: FlexGrid) {
    grid.rowHeaders.columns[0].header = 'Select';
    grid.rowHeaders.columns[0].width = 78;
    this.defaultColumns = this.columnsList = grid.columnHeaders.columns;

    new Selector(grid, {
      showCheckAll: false,
      itemChecked: () => {
        this.updateCheckboxSelect();
      },
    });

    grid.updatedLayout.addHandler((grid: FlexGrid) => {
      this.saffronizeFilterIcon(grid);
    });
  }

  initGrid2(grid: FlexGrid) {
    grid.rowHeaders.columns[0].header = 'Select';
    grid.rowHeaders.columns[0].width = 78;
    this.defaultColumns = this.columnsList = grid.columnHeaders.columns;

    new Selector(grid, {
      showCheckAll: false,
      itemChecked: () => {
        this.updateCheckboxSelect();
      },
    });

    grid.updatedLayout.addHandler((grid: FlexGrid) => {
      this.saffronizeFilterIcon(grid);
    });
  }


  onManageColumnsUpdate(event: any) {
    this.noVisibleColumnsList = event.inactiveList;

    for (let i = 0; this.columnsList.length; i++) {
      this.columnsList.splice(0, 1);
    }
    for (let i = 0; i < event.activeList.length; i++) {
      this.columnsList.splice(i, 0, event.activeList[i]);
    }
  }

  updateCheckboxSelect() {
    const grid = this.gridRef;
    const selectedRows = grid.rows.filter((r: any) => r.isSelected);
    const currentSelectedIds = this.selectedIdsToolbar.filter(
      (id: number) => !grid.rows.map((r: any) => r.dataItem.id).includes(id)
    );
    const newSetSelectedIds = new Set([
      ...currentSelectedIds,
      ...selectedRows.map((r: any) => r.dataItem.id),
    ]);
    this.selectedIdsToolbar = Array.from(newSetSelectedIds);
    this.currentSelectAllState = this.getCurrentSelectAllState();
  }

  updateSelectionToolbar() {
    const grid = this.gridRef;
    this.selectedIdsToolbar = grid.itemsSource.sourceCollection
      .filter((r: any) => r.isSelected)
      .map((row: any) => row.id);
  }

  selectAllToolbar() {
    const grid = this.gridRef;
    const currentSelectAllState = this.getCurrentSelectAllState();

    if (currentSelectAllState === SELECT_ALL.ALL_SELECTED) {
      grid.rows.forEach((row: any) => {
        row.isSelected = false;
      });
      this.selectedIdsToolbar = [];
    } else {
      grid.rows.forEach((row: any) => {
        row.isSelected = true;
      });
      this.selectedIdsToolbar = grid.itemsSource.sourceCollection.map(
        (row: any) => row.id
      );
    }

    this.currentSelectAllState = this.getCurrentSelectAllState();
    grid.refresh(true);
  }

  searchFilter(event: any) {
    const grid = this.gridRef;
    const value = event.target.value;
    this.filter = value;
    this.itemsSourceToolbar.filter = (item: any) =>
      value.length === 0 ||
      item.country.toLowerCase().indexOf(value) !== -1 ||
      String(item.id) === value;
    this.itemsSourceToolbar.moveToPage(0);
    this.pageIndexToolbar = 0;
    grid.rows.forEach((row: any) => {
      row.isSelected = this.selectedIdsToolbar.includes(row.dataItem.id);
    });
  }

  _setPageIndexToolbar(event: any) {
    const grid = this.gridRef;
    const index = event.detail - 1;
    this.itemsSourceToolbar.moveToPage(index);
    this.pageIndexToolbar = index;
    grid.rows.forEach((row: any) => {
      row.isSelected = this.selectedIdsToolbar.includes(row.dataItem.id);
    });
    // Handle Pagination Focus
    let prevButton: any;
    let nextButton: any;
    const buttons = document
      .querySelector('saf-pagination')
      ?.shadowRoot?.querySelectorAll('saf-button');
    buttons?.forEach((button: any) => {
      if (button.innerText === 'Previous') {
        prevButton = button;
      }
      if (button.innerText === 'Next') {
        nextButton = button;
      }
    });
    if (index <= 0) {
      nextButton.focus();
    }
    const showRecords = this.itemsSourceToolbar.pageSize * (index + 1);
    if (showRecords >= this.itemsSourceToolbar.totalItemCount) {
      prevButton.focus();
    }
  }

  setItemsPerPageToolbar(event: any) {
    const grid = this.gridRef;
    const size = event.detail;
    this.itemsSourceToolbar.pageSize = size;
    grid.rows.forEach((row: any) => {
      row.isSelected = this.selectedIdsToolbar.includes(row.dataItem.id);
    });
  }

  itemFormatter = (
    panel: GridPanel,
    rowIdx: number,
    colIdx: number,
    cell: HTMLElement
  ) => {
    const { grid } = panel;
    if (panel.cellType === CellType.Cell) {
      const col = grid.columns[colIdx];
      if (col.dataType === DataType.Boolean) {
        this.formatCheckboxCell(cell);
      }
      if (col.binding === 'status') {
        this.formatStatusCell(grid, rowIdx, cell);
      }
      if (col.header === 'Link') {
        this.formatLinkCell(cell);
      }
    }
  };

  formatStatusCell = (grid: FlexGrid, rowIdx: number, cell: HTMLElement) => {
    const status = grid.rows[rowIdx].dataItem.status;
    const active = status === 'Active';
    cell.innerHTML = '';
    const statusDot = document.createElement('div');
    statusDot.style.alignItems = 'center';
    statusDot.style.display = 'flex';
    statusDot.style.gap = '8px';
    cell.appendChild(statusDot);
    const dot = document.createElement('div');
    dot.style.backgroundColor = active ? '#eaffe5' : '#ffeded';
    dot.style.borderColor = active ? '#387c2b' : '#dc0a0a';
    dot.style.borderRadius = '50%';
    dot.style.borderStyle = 'solid';
    dot.style.borderWidth = '1px';
    dot.style.height = '12px';
    dot.style.width = '12px';
    statusDot.appendChild(dot);
    const text = document.createElement('span');
    text.textContent = status;
    statusDot.appendChild(text);
  };

  formatLinkCell = (cell: HTMLElement) => {
    // activate link on enter
    cell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const link = cell.querySelector('a');
        link?.click();
        event.stopImmediatePropagation();
      }
    });
  };

  formatCheckboxCell = (cell: HTMLElement) => {
    // add SR only to communicate the role and state of the checkbox
    const checkbox = cell.querySelector('input');
    if (!checkbox) return;
    const srOnly = document.createElement('saf-sr-only');
    srOnly.textContent = 'Checkbox, ';
    srOnly.textContent += checkbox.checked ? 'Checked' : 'Unchecked';
    checkbox.parentElement?.appendChild(srOnly);
  };

  saffronizeFilterIcon = function saffronizeFilterIcon(grid: FlexGrid) {
    const panel = grid.columnHeaders;
    const columns = panel.columns;
    columns.forEach((column) => {
      const cell = panel.getCellElement(0, column.index);
      if (!cell) return;
      const filterButton = cell.querySelector<HTMLButtonElement>(
        '.wj-btn.wj-btn-glyph.wj-elem-filter'
      );
      if (filterButton) {
        cell.addEventListener('focusin', () => {
          filterButton.tabIndex = 0;
        });
        cell.addEventListener('focusout', () => {
          filterButton.tabIndex = -1;
        });
        filterButton.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            filterButton.click();
            e.stopImmediatePropagation();
          }
        });
        filterButton.parentElement!.appendChild(filterButton);
      }
    });
  };

  selectDataMap = new DataMap<number, Model['select']>(
    [
      { id: 0, name: 'Yes' },
      { id: 1, name: 'No' },
      { id: 2, name: 'Maybe' },
    ],
    'id',
    'name'
  );

  linkCellTemplate = CellMaker.makeLink({
    text: 'Visit ${item.country}',
    href: 'https://www.google.com/search?q=${item.country}',
    label: 'Link: visit ${item.country}',
    attributes: {
      rel: 'noopener noreferrer',
      tabIndex: -1,
    },
    // no need for click handler, the link navigates automatically
  });

  // Utils
  Math = Math;
}
