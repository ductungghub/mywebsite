/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReply = /* GraphQL */ `query GetReply($id: ID!) {
  getReply(id: $id) {
    id
    content
    commentID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReplyQueryVariables, APITypes.GetReplyQuery>;
export const listReplies = /* GraphQL */ `query ListReplies(
  $filter: ModelReplyFilterInput
  $limit: Int
  $nextToken: String
) {
  listReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      commentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRepliesQueryVariables,
  APITypes.ListRepliesQuery
>;
export const repliesByCommentID = /* GraphQL */ `query RepliesByCommentID(
  $commentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReplyFilterInput
  $limit: Int
  $nextToken: String
) {
  repliesByCommentID(
    commentID: $commentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      commentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RepliesByCommentIDQueryVariables,
  APITypes.RepliesByCommentIDQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
