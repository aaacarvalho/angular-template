export type ActivityModel = {
  id: string;
  description: string;
  checked: boolean;
  checkedAt?: Date;
  children?: ChildActivityModel[];
};

export type ChildActivityModel = {
  id: string;
  description: string;
  checked: boolean;
  checkedAt?: Date;
};
