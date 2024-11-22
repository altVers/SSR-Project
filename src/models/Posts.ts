export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type CreatePostRequest = Omit<IPost, 'id'>;
export type Posts = IPost[];
export type UpdatePostRequest = IPost;
export type PatchPostRequest = Pick<IPost, 'title'>;
