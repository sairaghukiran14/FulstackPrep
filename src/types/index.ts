export interface TopicItemType {
  id: string;
  label: string;
  note: string;
}

export interface GroupType {
  title: string;
  items: TopicItemType[];
}

export interface LaneType {
  id: string;
  color: 'amber' | 'teal' | 'gray';
  title: string;
  desc: string;
  groups: GroupType[];
}

export interface TabContentType {
  deepdive: string;
  qa: string;
  code: string;
}

export interface StudyContentType {
  category: string;
  title: string;
  desc: string;
  tabs: TabContentType;
}

export type ProgressState = Record<string, boolean>;
