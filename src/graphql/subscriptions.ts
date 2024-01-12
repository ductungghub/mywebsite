/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReply = /* GraphQL */ `subscription OnCreateReply($filter: ModelSubscriptionReplyFilterInput) {
  onCreateReply(filter: $filter) {
    id
    content
    commentID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReplySubscriptionVariables,
  APITypes.OnCreateReplySubscription
>;
export const onUpdateReply = /* GraphQL */ `subscription OnUpdateReply($filter: ModelSubscriptionReplyFilterInput) {
  onUpdateReply(filter: $filter) {
    id
    content
    commentID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReplySubscriptionVariables,
  APITypes.OnUpdateReplySubscription
>;
export const onDeleteReply = /* GraphQL */ `subscription OnDeleteReply($filter: ModelSubscriptionReplyFilterInput) {
  onDeleteReply(filter: $filter) {
    id
    content
    commentID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReplySubscriptionVariables,
  APITypes.OnDeleteReplySubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    id
    content
    Replies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
    id
    content
    Replies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
    id
    content
    Replies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
