export interface IPrintListArgs {
  value: number;
  next: {
    value: number;
    next: {
      value: number;
      next: {
        value: number;
        next: null;
      };
    };
  };
}

export const printList = (list: IPrintListArgs): void => {
  console.log(list.value);
  if (list.next) {
    printList(list.next as unknown as IPrintListArgs);
  }
};
