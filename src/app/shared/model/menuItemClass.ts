export class MenuItemClass {
  id: number;
  icon: string;
  label: string;
  subLevel: boolean;
  route: string;


  constructor(id: number, icon: string, label: string, subLevel: boolean, route: string) {
    this.id = id;
    this.icon = icon;
    this.label = label;
    this.subLevel = subLevel;
    this.route = route;
  }
}
