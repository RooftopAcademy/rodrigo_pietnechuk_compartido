interface RepositoryInterface<T> {
  findOneById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}

export default RepositoryInterface;
