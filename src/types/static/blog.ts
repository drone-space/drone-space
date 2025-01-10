import { ReplyRelations } from '../models/reply';
import { CommentRelations } from '../models/comment';
import { PostRelations as typePostRelations } from '../models/post';

export interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
}

export interface PostCommentReply extends ReplyRelations {
  replies?: ReplyRelations[];
  _count?: { replies: number };
}

export interface PostComment extends Omit<CommentRelations, 'replies'> {
  replies?: PostCommentReply[];
}

export interface PostRelations extends Omit<typePostRelations, 'comments'> {
  comments: PostComment[];
}
