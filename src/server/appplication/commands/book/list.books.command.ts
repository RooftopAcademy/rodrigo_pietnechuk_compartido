/* eslint-disable camelcase */

interface ListBooksCommand {
  name: string | undefined;
  name_like: string | undefined;
  author: string | undefined;
  publicationYear: string | undefined;
}

export default ListBooksCommand;
