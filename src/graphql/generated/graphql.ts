import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangeEmailInput = {
  email: Scalars['String']['input'];
};

export type ChangeNotificationSettingsResponse = {
  __typename?: 'ChangeNotificationSettingsResponse';
  notificationSettings: NotificationSettingsModel;
  telegramAuthToken?: Maybe<Scalars['String']['output']>;
};

export type ChangePassInput = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ChangeProfileInput = {
  bio: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ChangeStreamInfoInput = {
  categoryId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ChatMessageModel = {
  __typename?: 'ChatMessageModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  stream: StreamModel;
  streamId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type ChatSettingsInput = {
  isChatEnabled: Scalars['Boolean']['input'];
  isChatFollowersOnly: Scalars['Boolean']['input'];
  isChatPremiumFollowersOnly: Scalars['Boolean']['input'];
};

export type CreatePlanInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type DeactivateAccountInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  totpPin?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  browser: Scalars['String']['output'];
  ip: Scalars['String']['output'];
  os: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userAgent: Scalars['String']['output'];
};

export type EnableTotpInput = {
  pin: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type FiltersInput = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type FollowModel = {
  __typename?: 'FollowModel';
  createdAt: Scalars['DateTime']['output'];
  follower: UserModel;
  followerId: Scalars['String']['output'];
  following: UserModel;
  followingId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LocationModel = {
  __typename?: 'LocationModel';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  totpPin?: InputMaybe<Scalars['String']['input']>;
};

export type MakePaymentModel = {
  __typename?: 'MakePaymentModel';
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeEmail: Scalars['Boolean']['output'];
  changeNotificationSettings: ChangeNotificationSettingsResponse;
  changePass: Scalars['Boolean']['output'];
  changeProfile: Scalars['Boolean']['output'];
  changeStreamInfo: Scalars['Boolean']['output'];
  clearCookies: Scalars['String']['output'];
  createAccount: UserModel;
  createIngress: Scalars['Boolean']['output'];
  createPlan: Scalars['Boolean']['output'];
  createSocialLink: Scalars['Boolean']['output'];
  deactivateAccount: Scalars['Boolean']['output'];
  deleteSocialLink: Scalars['Boolean']['output'];
  disableTotp: Scalars['Boolean']['output'];
  enableTotp: Scalars['Boolean']['output'];
  follow: Scalars['Boolean']['output'];
  generateStreamToken: TokenModel;
  login: UserModel;
  logout: Scalars['String']['output'];
  makePayment: MakePaymentModel;
  removePlan: Scalars['Boolean']['output'];
  removeSessionById: Scalars['String']['output'];
  removeStreamThumbnail: Scalars['Boolean']['output'];
  reorderSocialLinks: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  sendMessage: ChatMessageModel;
  setNewPassword: Scalars['Boolean']['output'];
  unfollow: Scalars['Boolean']['output'];
  updateChatSettings: Scalars['Boolean']['output'];
  updateSocialLink: Scalars['Boolean']['output'];
  verifyAccount: UserModel;
};


export type MutationChangeEmailArgs = {
  input: ChangeEmailInput;
};


export type MutationChangeNotificationSettingsArgs = {
  input: NotificationSettingsInput;
};


export type MutationChangePassArgs = {
  input: ChangePassInput;
};


export type MutationChangeProfileArgs = {
  input: ChangeProfileInput;
};


export type MutationChangeStreamInfoArgs = {
  input: ChangeStreamInfoInput;
};


export type MutationCreateAccountArgs = {
  input: CreateUserInput;
};


export type MutationCreateIngressArgs = {
  ingressType: Scalars['Float']['input'];
};


export type MutationCreatePlanArgs = {
  input: CreatePlanInput;
};


export type MutationCreateSocialLinkArgs = {
  input: SocialLinkInput;
};


export type MutationDeactivateAccountArgs = {
  input: DeactivateAccountInput;
};


export type MutationDeleteSocialLinkArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnableTotpArgs = {
  input: EnableTotpInput;
};


export type MutationFollowArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationGenerateStreamTokenArgs = {
  input: StreamTokenInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMakePaymentArgs = {
  planId: Scalars['String']['input'];
};


export type MutationRemovePlanArgs = {
  planId: Scalars['String']['input'];
};


export type MutationRemoveSessionByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationReorderSocialLinksArgs = {
  list: Array<SocialLinkOrderInput>;
};


export type MutationResetPasswordArgs = {
  input: ResetPassInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationSetNewPasswordArgs = {
  input: NewPasswordInput;
};


export type MutationUnfollowArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationUpdateChatSettingsArgs = {
  input: ChatSettingsInput;
};


export type MutationUpdateSocialLinkArgs = {
  input: SocialLinkInput;
};


export type MutationVerifyAccountArgs = {
  input: VerificationInput;
};

export type NewPasswordInput = {
  confirmPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type NotificationModel = {
  __typename?: 'NotificationModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: NotificationType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type NotificationSettingsInput = {
  siteNotification: Scalars['Boolean']['input'];
  telegramNotification: Scalars['Boolean']['input'];
};

export type NotificationSettingsModel = {
  __typename?: 'NotificationSettingsModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  siteNotification: Scalars['Boolean']['output'];
  telegramNotification: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

/** Notification type */
export enum NotificationType {
  EnableTwoFactorAuth = 'ENABLE_TWO_FACTOR_AUTH',
  NewFollower = 'NEW_FOLLOWER',
  NewSponsorship = 'NEW_SPONSORSHIP',
  StreamStarted = 'STREAM_STARTED',
  VerifiedChannel = 'VERIFIED_CHANNEL'
}

export type PlanModel = {
  __typename?: 'PlanModel';
  channelId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stripePlanId: Scalars['String']['output'];
  stripeProductId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllCategories: Array<CategoryModel>;
  findAllStreams: Array<StreamModel>;
  findCategoryBySlug: CategoryModel;
  findChannelByUsername: UserModel;
  findCurrentSession: SessionModel;
  findFollowersCountByChannel: Scalars['Float']['output'];
  findMessagesByStreamId: Array<ChatMessageModel>;
  findMyFollowers: Array<FollowModel>;
  findMyFollowings: Array<FollowModel>;
  findMyPlans: Array<PlanModel>;
  findMySponsors: Array<SubscriptionModel>;
  findMyTransactions: Array<TransactionModel>;
  findNotificationsByUser: Array<NotificationModel>;
  findRandomCategories: Array<CategoryModel>;
  findRandomStreams: Array<StreamModel>;
  findRecommendedChannels: Array<UserModel>;
  findSessionsByUserId: Array<SessionModel>;
  findSponsorsByChannel: Array<SubscriptionModel>;
  findUnreadNotificationsCount: Scalars['Int']['output'];
  generateTotpSecret: TotpModel;
  getMe: UserModel;
  socialLinks: Array<SocialLinkModel>;
};


export type QueryFindAllStreamsArgs = {
  filters?: InputMaybe<FiltersInput>;
};


export type QueryFindCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindChannelByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryFindFollowersCountByChannelArgs = {
  channelId: Scalars['String']['input'];
};


export type QueryFindMessagesByStreamIdArgs = {
  streamId: Scalars['String']['input'];
};


export type QueryFindSponsorsByChannelArgs = {
  channelId: Scalars['String']['input'];
};

export type ResetPassInput = {
  email: Scalars['String']['input'];
};

export type SendMessageInput = {
  streamId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type SessionMetadataModel = {
  __typename?: 'SessionMetadataModel';
  device: DeviceModel;
  ip: Scalars['String']['output'];
  location: LocationModel;
};

export type SessionModel = {
  __typename?: 'SessionModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: SessionMetadataModel;
  userId: Scalars['String']['output'];
};

export type SocialLinkInput = {
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type SocialLinkModel = {
  __typename?: 'SocialLinkModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  position: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SocialLinkOrderInput = {
  id: Scalars['String']['input'];
  position: Scalars['Float']['input'];
};

export type StreamModel = {
  __typename?: 'StreamModel';
  category?: Maybe<CategoryModel>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ingressId?: Maybe<Scalars['String']['output']>;
  isChatEnabled: Scalars['Boolean']['output'];
  isChatFollowersOnly: Scalars['Boolean']['output'];
  isChatPremiumFollowersOnly: Scalars['Boolean']['output'];
  isLive: Scalars['Boolean']['output'];
  serverUrl?: Maybe<Scalars['String']['output']>;
  streamKey?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type StreamTokenInput = {
  channelId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  chatMessageAdded: ChatMessageModel;
};


export type SubscriptionChatMessageAddedArgs = {
  streamId: Scalars['String']['input'];
};

export type SubscriptionModel = {
  __typename?: 'SubscriptionModel';
  channel: UserModel;
  channelId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  plan: PlanModel;
  planId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type TokenModel = {
  __typename?: 'TokenModel';
  token: Scalars['String']['output'];
};

export type TotpModel = {
  __typename?: 'TotpModel';
  qrCode: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type TransactionModel = {
  __typename?: 'TransactionModel';
  amount: Scalars['Float']['output'];
  channelId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: TransactionStatus;
  stripeSubscriptionId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export enum TransactionStatus {
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type UserModel = {
  __typename?: 'UserModel';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  followers?: Maybe<Array<FollowModel>>;
  followings?: Maybe<Array<FollowModel>>;
  id: Scalars['ID']['output'];
  isDeactivated: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isTotpEnabled: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  notificationSettings?: Maybe<NotificationSettingsModel>;
  notifications?: Maybe<Array<NotificationModel>>;
  password: Scalars['String']['output'];
  sessions?: Maybe<Array<SessionModel>>;
  socialLinks?: Maybe<Array<SocialLinkModel>>;
  stream?: Maybe<StreamModel>;
  telegramId?: Maybe<Scalars['String']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type VerificationInput = {
  token: Scalars['String']['input'];
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'UserModel', email: string } };

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'UserModel', id: string, displayName: string, email: string, isEmailVerified: boolean } };

export type SetNewPassMutationVariables = Exact<{
  data: NewPasswordInput;
}>;


export type SetNewPassMutation = { __typename?: 'Mutation', setNewPassword: boolean };

export type ResetPassMutationVariables = Exact<{
  data: ResetPassInput;
}>;


export type ResetPassMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type VerifyAccountMutationVariables = Exact<{
  data: VerificationInput;
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', verifyAccount: { __typename?: 'UserModel', id: string, displayName: string, email: string, isEmailVerified: boolean } };

export type FindChannelByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type FindChannelByUsernameQuery = { __typename?: 'Query', findChannelByUsername: { __typename?: 'UserModel', username: string, avatar?: string | null, displayName: string, stream?: { __typename?: 'StreamModel', title: string } | null } };


export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createAccount(input: $input) {
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: LoginInput!) {
  login(input: $data) {
    id
    displayName
    email
    isEmailVerified
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const SetNewPassDocument = gql`
    mutation SetNewPass($data: NewPasswordInput!) {
  setNewPassword(input: $data)
}
    `;
export type SetNewPassMutationFn = Apollo.MutationFunction<SetNewPassMutation, SetNewPassMutationVariables>;

/**
 * __useSetNewPassMutation__
 *
 * To run a mutation, you first call `useSetNewPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetNewPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setNewPassMutation, { data, loading, error }] = useSetNewPassMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSetNewPassMutation(baseOptions?: Apollo.MutationHookOptions<SetNewPassMutation, SetNewPassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetNewPassMutation, SetNewPassMutationVariables>(SetNewPassDocument, options);
      }
export type SetNewPassMutationHookResult = ReturnType<typeof useSetNewPassMutation>;
export type SetNewPassMutationResult = Apollo.MutationResult<SetNewPassMutation>;
export type SetNewPassMutationOptions = Apollo.BaseMutationOptions<SetNewPassMutation, SetNewPassMutationVariables>;
export const ResetPassDocument = gql`
    mutation ResetPass($data: ResetPassInput!) {
  resetPassword(input: $data)
}
    `;
export type ResetPassMutationFn = Apollo.MutationFunction<ResetPassMutation, ResetPassMutationVariables>;

/**
 * __useResetPassMutation__
 *
 * To run a mutation, you first call `useResetPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPassMutation, { data, loading, error }] = useResetPassMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useResetPassMutation(baseOptions?: Apollo.MutationHookOptions<ResetPassMutation, ResetPassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPassMutation, ResetPassMutationVariables>(ResetPassDocument, options);
      }
export type ResetPassMutationHookResult = ReturnType<typeof useResetPassMutation>;
export type ResetPassMutationResult = Apollo.MutationResult<ResetPassMutation>;
export type ResetPassMutationOptions = Apollo.BaseMutationOptions<ResetPassMutation, ResetPassMutationVariables>;
export const VerifyAccountDocument = gql`
    mutation VerifyAccount($data: VerificationInput!) {
  verifyAccount(input: $data) {
    id
    displayName
    email
    isEmailVerified
  }
}
    `;
export type VerifyAccountMutationFn = Apollo.MutationFunction<VerifyAccountMutation, VerifyAccountMutationVariables>;

/**
 * __useVerifyAccountMutation__
 *
 * To run a mutation, you first call `useVerifyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyAccountMutation, { data, loading, error }] = useVerifyAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useVerifyAccountMutation(baseOptions?: Apollo.MutationHookOptions<VerifyAccountMutation, VerifyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyAccountMutation, VerifyAccountMutationVariables>(VerifyAccountDocument, options);
      }
export type VerifyAccountMutationHookResult = ReturnType<typeof useVerifyAccountMutation>;
export type VerifyAccountMutationResult = Apollo.MutationResult<VerifyAccountMutation>;
export type VerifyAccountMutationOptions = Apollo.BaseMutationOptions<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const FindChannelByUsernameDocument = gql`
    query FindChannelByUsername($username: String!) {
  findChannelByUsername(username: $username) {
    username
    avatar
    displayName
    stream {
      title
    }
  }
}
    `;

/**
 * __useFindChannelByUsernameQuery__
 *
 * To run a query within a React component, call `useFindChannelByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChannelByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChannelByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindChannelByUsernameQuery(baseOptions: Apollo.QueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables> & ({ variables: FindChannelByUsernameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>(FindChannelByUsernameDocument, options);
      }
export function useFindChannelByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>(FindChannelByUsernameDocument, options);
        }
export function useFindChannelByUsernameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>(FindChannelByUsernameDocument, options);
        }
export type FindChannelByUsernameQueryHookResult = ReturnType<typeof useFindChannelByUsernameQuery>;
export type FindChannelByUsernameLazyQueryHookResult = ReturnType<typeof useFindChannelByUsernameLazyQuery>;
export type FindChannelByUsernameSuspenseQueryHookResult = ReturnType<typeof useFindChannelByUsernameSuspenseQuery>;
export type FindChannelByUsernameQueryResult = Apollo.QueryResult<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>;