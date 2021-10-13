interface CollectionInterface<T> {
  getItems(): T[];
  add(item: T): void;
  remove(id: string): void;
  removeAll?(): void;
  fetch(): Promise<void>;
}

export default CollectionInterface;
