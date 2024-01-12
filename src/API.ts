/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReplyInput = {
  id?: string | null,
  content?: string | null,
  commentID: string,
};

export type ModelReplyConditionInput = {
  content?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelReplyConditionInput | null > | null,
  or?: Array< ModelReplyConditionInput | null > | null,
  not?: ModelReplyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Reply = {
  __typename: "Reply",
  id: string,
  content?: string | null,
  commentID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReplyInput = {
  id: string,
  content?: string | null,
  commentID?: string | null,
};

export type DeleteReplyInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content?: string | null,
  Replies?: ModelReplyConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelReplyConnection = {
  __typename: "ModelReplyConnection",
  items:  Array<Reply | null >,
  nextToken?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelReplyFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelReplyFilterInput | null > | null,
  or?: Array< ModelReplyFilterInput | null > | null,
  not?: ModelReplyFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionReplyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  commentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReplyFilterInput | null > | null,
  or?: Array< ModelSubscriptionReplyFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type CreateReplyMutationVariables = {
  input: CreateReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type CreateReplyMutation = {
  createReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReplyMutationVariables = {
  input: UpdateReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type UpdateReplyMutation = {
  updateReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReplyMutationVariables = {
  input: DeleteReplyInput,
  condition?: ModelReplyConditionInput | null,
};

export type DeleteReplyMutation = {
  deleteReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    Replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    Replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    Replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReplyQueryVariables = {
  id: string,
};

export type GetReplyQuery = {
  getReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRepliesQueryVariables = {
  filter?: ModelReplyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRepliesQuery = {
  listReplies?:  {
    __typename: "ModelReplyConnection",
    items:  Array< {
      __typename: "Reply",
      id: string,
      content?: string | null,
      commentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RepliesByCommentIDQueryVariables = {
  commentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReplyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RepliesByCommentIDQuery = {
  repliesByCommentID?:  {
    __typename: "ModelReplyConnection",
    items:  Array< {
      __typename: "Reply",
      id: string,
      content?: string | null,
      commentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    Replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnCreateReplySubscription = {
  onCreateReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnUpdateReplySubscription = {
  onUpdateReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReplySubscriptionVariables = {
  filter?: ModelSubscriptionReplyFilterInput | null,
};

export type OnDeleteReplySubscription = {
  onDeleteReply?:  {
    __typename: "Reply",
    id: string,
    content?: string | null,
    commentID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    Replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    Replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content?: string | null,
    Replies?:  {
      __typename: "ModelReplyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
