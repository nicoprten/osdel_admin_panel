export const createAuthorization = /* GraphQL */ `
  mutation CreateAuthorization(
    $input: CreateAuthorizationInput!
    $condition: ModelAuthorizationConditionInput
  ) {
    createAuthorization(input: $input, condition: $condition) {
      id
      userId
      authId
      status
      type
      seen
      title
      observations
      createdAt
      updatedAt
    }
  }
`;
export const updateAuthorization = /* GraphQL */ `
  mutation UpdateAuthorization(
    $input: UpdateAuthorizationInput!
    $condition: ModelAuthorizationConditionInput
  ) {
    updateAuthorization(input: $input, condition: $condition) {
      id
      userId
      authId
      status
      type
      seen
      title
      observations
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuthorization = /* GraphQL */ `
  mutation DeleteAuthorization(
    $input: DeleteAuthorizationInput!
    $condition: ModelAuthorizationConditionInput
  ) {
    deleteAuthorization(input: $input, condition: $condition) {
      id
      userId
      authId
      status
      type
      seen
      title
      observations
      createdAt
      updatedAt
    }
  }
`;
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`;