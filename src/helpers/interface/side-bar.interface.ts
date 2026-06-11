export interface ISidebarItem {
  id?: string | number;
  label?: string;
  icon?: string;
  route?: string | null;
  children?: ISidebarItem[];
}
