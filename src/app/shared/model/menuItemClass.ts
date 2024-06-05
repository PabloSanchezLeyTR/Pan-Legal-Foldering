export class MenuItemClass {
  id: number;
  icon: string;
  label: string;
  subLevel: boolean;


  constructor(id: number, icon: string, label: string, subLevel: boolean) {
    this.id = id;
    this.icon = icon;
    this.label = label;
    this.subLevel = subLevel;
  }
}
