/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createReply = /* GraphQL */ `mutation CreateReply(
  $input: CreateReplyInput!
  $condition: ModelReplyConditionInput
) {
  createReply(input: $input, condition: $condition) {
    id
    content
    commentID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReplyMutationVariables,
  APITypes.CreateReplyMutation
>;
export const updateReply = /* GraphQL */ `mutation UpdateReply(
  $input: UpdateReplyInput!
  $condition: ModelReplyConditionInput
) {
  updateReply(input: $input, condition: $condition) {
    id
    content
    commentID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReplyMutationVariables,
  APITypes.UpdateReplyMutation
>;
export const deleteReply = /* GraphQL */ `mutation DeleteReply(
  $input: DeleteReplyInput!
  $condition: ModelReplyConditionInput
) {
  deleteReply(input: $input, condition: $condition) {
    id
    content
    commentID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReplyMutationVariables,
  APITypes.DeleteReplyMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
