export class ResearchHistoryClass {
  id: number;
  icon: string;
  labelIcon: string;
  titleLink: string;
  searchType: string;
  content: string;
  jurisdiction: string;
  accessTime: string;
  customer: string;
  aditionalText: string


  constructor(id: number, icon: string, labelIcon: string, titleLink: string, searchType: string, content: string, jurisdiction: string, accessTime: string, customer: string, aditionalText: string ) {
    this.id = id;
    this.icon = icon;
    this.labelIcon = labelIcon;
    this.titleLink = titleLink;
    this.searchType = searchType;
    this.content = content;
    this.jurisdiction = jurisdiction;
    this.accessTime = accessTime;
    this.customer = customer;
    this.aditionalText = aditionalText;
  }
}
