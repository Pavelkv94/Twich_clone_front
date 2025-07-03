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
  Upload: { input: any; output: any; }
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  streams?: Maybe<Array<StreamModel>>;
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
  changeAvatar: Scalars['Boolean']['output'];
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
  removeAvatar: Scalars['Boolean']['output'];
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


export type MutationChangeAvatarArgs = {
  file: Scalars['Upload']['input'];
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
  sponsorshipPlans?: Maybe<Array<PlanModel>>;
  sponsorshipSubscriptions?: Maybe<Array<SubscriptionModel>>;
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

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: string };

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

export type UpdateChatSettingsMutationVariables = Exact<{
  input: ChatSettingsInput;
}>;


export type UpdateChatSettingsMutation = { __typename?: 'Mutation', updateChatSettings: boolean };

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'ChatMessageModel', streamId: string } };

export type FollowChannelMutationVariables = Exact<{
  channelId: Scalars['String']['input'];
}>;


export type FollowChannelMutation = { __typename?: 'Mutation', follow: boolean };

export type UnfollowChannelMutationVariables = Exact<{
  channelId: Scalars['String']['input'];
}>;


export type UnfollowChannelMutation = { __typename?: 'Mutation', unfollow: boolean };

export type CreateSponsorshipPlanMutationVariables = Exact<{
  input: CreatePlanInput;
}>;


export type CreateSponsorshipPlanMutation = { __typename?: 'Mutation', createPlan: boolean };

export type RemoveSponsorshipPlanMutationVariables = Exact<{
  planId: Scalars['String']['input'];
}>;


export type RemoveSponsorshipPlanMutation = { __typename?: 'Mutation', removePlan: boolean };

export type MakePaymentMutationVariables = Exact<{
  planId: Scalars['String']['input'];
}>;


export type MakePaymentMutation = { __typename?: 'Mutation', makePayment: { __typename?: 'MakePaymentModel', url: string } };

export type ChangeStreamInfoMutationVariables = Exact<{
  input: ChangeStreamInfoInput;
}>;


export type ChangeStreamInfoMutation = { __typename?: 'Mutation', changeStreamInfo: boolean };

export type CreateIngressMutationVariables = Exact<{
  ingressType: Scalars['Float']['input'];
}>;


export type CreateIngressMutation = { __typename?: 'Mutation', createIngress: boolean };

export type GenerateStreamTokenMutationVariables = Exact<{
  input: StreamTokenInput;
}>;


export type GenerateStreamTokenMutation = { __typename?: 'Mutation', generateStreamToken: { __typename?: 'TokenModel', token: string } };

export type RemoveStreamThumbnailMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveStreamThumbnailMutation = { __typename?: 'Mutation', removeStreamThumbnail: boolean };

export type ChangeEmailMutationVariables = Exact<{
  input: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail: boolean };

export type ChangeNotificationsSettingsMutationVariables = Exact<{
  input: NotificationSettingsInput;
}>;


export type ChangeNotificationsSettingsMutation = { __typename?: 'Mutation', changeNotificationSettings: { __typename?: 'ChangeNotificationSettingsResponse', telegramAuthToken?: string | null, notificationSettings: { __typename?: 'NotificationSettingsModel', siteNotification: boolean, telegramNotification: boolean } } };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePassInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePass: boolean };

export type ChangeProfileAvatarMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type ChangeProfileAvatarMutation = { __typename?: 'Mutation', changeAvatar: boolean };

export type ChangeProfileInfoMutationVariables = Exact<{
  input: ChangeProfileInput;
}>;


export type ChangeProfileInfoMutation = { __typename?: 'Mutation', changeProfile: boolean };

export type CreateSocialLinkMutationVariables = Exact<{
  input: SocialLinkInput;
}>;


export type CreateSocialLinkMutation = { __typename?: 'Mutation', createSocialLink: boolean };

export type DeactivateAccountMutationVariables = Exact<{
  input: DeactivateAccountInput;
}>;


export type DeactivateAccountMutation = { __typename?: 'Mutation', deactivateAccount: boolean };

export type DisableTotpMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableTotpMutation = { __typename?: 'Mutation', disableTotp: boolean };

export type EnableTotpMutationVariables = Exact<{
  input: EnableTotpInput;
}>;


export type EnableTotpMutation = { __typename?: 'Mutation', enableTotp: boolean };

export type RemoveProfileAvatarMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveProfileAvatarMutation = { __typename?: 'Mutation', removeAvatar: boolean };

export type RemoveSocialLinkMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSocialLinkMutation = { __typename?: 'Mutation', deleteSocialLink: boolean };

export type ReorderSocialLinksMutationVariables = Exact<{
  list: Array<SocialLinkOrderInput> | SocialLinkOrderInput;
}>;


export type ReorderSocialLinksMutation = { __typename?: 'Mutation', reorderSocialLinks: boolean };

export type UpdateSocialLinkMutationVariables = Exact<{
  input: SocialLinkInput;
}>;


export type UpdateSocialLinkMutation = { __typename?: 'Mutation', updateSocialLink: boolean };

export type FindAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoriesQuery = { __typename?: 'Query', findAllCategories: Array<{ __typename?: 'CategoryModel', id: string, title: string, thumbnailUrl?: string | null, slug: string }> };

export type FindCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindCategoryBySlugQuery = { __typename?: 'Query', findCategoryBySlug: { __typename?: 'CategoryModel', id: string, title: string, thumbnailUrl?: string | null, description?: string | null, streams?: Array<{ __typename?: 'StreamModel', id: string, title: string, thumbnailUrl?: string | null, isLive: boolean, user: { __typename?: 'UserModel', id: string, username: string, avatar?: string | null, isVerified: boolean }, category?: { __typename?: 'CategoryModel', id: string, title: string, slug: string } | null }> | null } };

export type FindRandomCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomCategoriesQuery = { __typename?: 'Query', findRandomCategories: Array<{ __typename?: 'CategoryModel', id: string, title: string, thumbnailUrl?: string | null, slug: string }> };

export type FindChannelByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type FindChannelByUsernameQuery = { __typename?: 'Query', findChannelByUsername: { __typename?: 'UserModel', id: string, username: string, displayName: string, avatar?: string | null, isVerified: boolean, bio?: string | null, socialLinks?: Array<{ __typename?: 'SocialLinkModel', title: string, url: string }> | null, stream?: { __typename?: 'StreamModel', id: string, thumbnailUrl?: string | null, isLive: boolean, title: string, isChatEnabled: boolean, isChatFollowersOnly: boolean, isChatPremiumFollowersOnly: boolean, category?: { __typename?: 'CategoryModel', title: string, id: string } | null } | null, sponsorshipPlans?: Array<{ __typename?: 'PlanModel', title: string, description?: string | null, price: number, id: string }> | null, followings?: Array<{ __typename?: 'FollowModel', id: string }> | null } };

export type FindReccomendedChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindReccomendedChannelsQuery = { __typename?: 'Query', findRecommendedChannels: Array<{ __typename?: 'UserModel', username: string, avatar?: string | null, isVerified: boolean, stream?: { __typename?: 'StreamModel', isLive: boolean } | null }> };

export type FindSponsorsByChannelQueryVariables = Exact<{
  channelId: Scalars['String']['input'];
}>;


export type FindSponsorsByChannelQuery = { __typename?: 'Query', findSponsorsByChannel: Array<{ __typename?: 'SubscriptionModel', user: { __typename?: 'UserModel', id: string, username: string, avatar?: string | null, isVerified: boolean } }> };

export type FindMessagesByStreamIdQueryVariables = Exact<{
  streamId: Scalars['String']['input'];
}>;


export type FindMessagesByStreamIdQuery = { __typename?: 'Query', findMessagesByStreamId: Array<{ __typename?: 'ChatMessageModel', id: string, message: string, createdAt: any, user: { __typename?: 'UserModel', id: string, username: string } }> };

export type FindMyFollowersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyFollowersQuery = { __typename?: 'Query', findMyFollowers: Array<{ __typename?: 'FollowModel', createdAt: any, follower: { __typename?: 'UserModel', username: string, createdAt: any, id: string, avatar?: string | null, isVerified: boolean } }> };

export type FindMyFollowingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyFollowingsQuery = { __typename?: 'Query', findMyFollowings: Array<{ __typename?: 'FollowModel', createdAt: any, followingId: string }> };

export type FindMySponsorhipPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMySponsorhipPlansQuery = { __typename?: 'Query', findMyPlans: Array<{ __typename?: 'PlanModel', id: string, title: string, createdAt: any, price: number }> };

export type FindMySponsorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMySponsorsQuery = { __typename?: 'Query', findMySponsors: Array<{ __typename?: 'SubscriptionModel', expiresAt: any, user: { __typename?: 'UserModel', username: string, avatar?: string | null, isVerified: boolean }, plan: { __typename?: 'PlanModel', title: string } }> };

export type FindMyTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyTransactionsQuery = { __typename?: 'Query', findMyTransactions: Array<{ __typename?: 'TransactionModel', id: string, createdAt: any, status: TransactionStatus, amount: number }> };

export type FindAllStreamsQueryVariables = Exact<{
  filters: FiltersInput;
}>;


export type FindAllStreamsQuery = { __typename?: 'Query', findAllStreams: Array<{ __typename?: 'StreamModel', id: string, title: string, thumbnailUrl?: string | null, isLive: boolean, user: { __typename?: 'UserModel', id: string, username: string, avatar?: string | null, isVerified: boolean }, category?: { __typename?: 'CategoryModel', id: string, title: string, slug: string } | null }> };

export type FindRandomStreamsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomStreamsQuery = { __typename?: 'Query', findRandomStreams: Array<{ __typename?: 'StreamModel', id: string, title: string, thumbnailUrl?: string | null, isLive: boolean, user: { __typename?: 'UserModel', id: string, username: string, avatar?: string | null, isVerified: boolean }, category?: { __typename?: 'CategoryModel', id: string, title: string, slug: string } | null }> };

export type ClearSessionCookieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCookieMutation = { __typename?: 'Mutation', clearCookies: string };

export type FindCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentSessionQuery = { __typename?: 'Query', findCurrentSession: { __typename?: 'SessionModel', id: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', country: string, city: string, latitude: number, longitude: number }, device: { __typename?: 'DeviceModel', browser: string, os: string } } } };

export type FindNotificationsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindNotificationsByUserQuery = { __typename?: 'Query', findNotificationsByUser: Array<{ __typename?: 'NotificationModel', id: string, type: NotificationType, message: string }> };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', getMe: { __typename?: 'UserModel', id: string, username: string, email: string, displayName: string, avatar?: string | null, bio?: string | null, isVerified: boolean, isTotpEnabled: boolean, notificationSettings?: { __typename?: 'NotificationSettingsModel', siteNotification: boolean, telegramNotification: boolean } | null, stream?: { __typename?: 'StreamModel', serverUrl?: string | null, streamKey?: string | null, isChatEnabled: boolean, isChatFollowersOnly: boolean, isChatPremiumFollowersOnly: boolean } | null } };

export type FindSessionsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSessionsByUserQuery = { __typename?: 'Query', findSessionsByUserId: Array<{ __typename?: 'SessionModel', id: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', country: string, city: string, latitude: number, longitude: number }, device: { __typename?: 'DeviceModel', browser: string, os: string } } }> };

export type FindSocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSocialLinksQuery = { __typename?: 'Query', socialLinks: Array<{ __typename?: 'SocialLinkModel', position: number, title: string, url: string, id: string }> };

export type FindUnreadNotificationsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUnreadNotificationsCountQuery = { __typename?: 'Query', findUnreadNotificationsCount: number };

export type GenerateTotpSecretQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateTotpSecretQuery = { __typename?: 'Query', generateTotpSecret: { __typename?: 'TotpModel', secret: string, qrCode: string } };

export type RemoveSessionByIdMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSessionByIdMutation = { __typename?: 'Mutation', removeSessionById: string };

export type ChatMessageAddedSubscriptionVariables = Exact<{
  streamId: Scalars['String']['input'];
}>;


export type ChatMessageAddedSubscription = { __typename?: 'Subscription', chatMessageAdded: { __typename?: 'ChatMessageModel', id: string, message: string, createdAt: any, user: { __typename?: 'UserModel', id: string, username: string } } };


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
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
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
export const UpdateChatSettingsDocument = gql`
    mutation UpdateChatSettings($input: ChatSettingsInput!) {
  updateChatSettings(input: $input)
}
    `;
export type UpdateChatSettingsMutationFn = Apollo.MutationFunction<UpdateChatSettingsMutation, UpdateChatSettingsMutationVariables>;

/**
 * __useUpdateChatSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateChatSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChatSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChatSettingsMutation, { data, loading, error }] = useUpdateChatSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateChatSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChatSettingsMutation, UpdateChatSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChatSettingsMutation, UpdateChatSettingsMutationVariables>(UpdateChatSettingsDocument, options);
      }
export type UpdateChatSettingsMutationHookResult = ReturnType<typeof useUpdateChatSettingsMutation>;
export type UpdateChatSettingsMutationResult = Apollo.MutationResult<UpdateChatSettingsMutation>;
export type UpdateChatSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateChatSettingsMutation, UpdateChatSettingsMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($input: SendMessageInput!) {
  sendMessage(input: $input) {
    streamId
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const FollowChannelDocument = gql`
    mutation FollowChannel($channelId: String!) {
  follow(channelId: $channelId)
}
    `;
export type FollowChannelMutationFn = Apollo.MutationFunction<FollowChannelMutation, FollowChannelMutationVariables>;

/**
 * __useFollowChannelMutation__
 *
 * To run a mutation, you first call `useFollowChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followChannelMutation, { data, loading, error }] = useFollowChannelMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFollowChannelMutation(baseOptions?: Apollo.MutationHookOptions<FollowChannelMutation, FollowChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowChannelMutation, FollowChannelMutationVariables>(FollowChannelDocument, options);
      }
export type FollowChannelMutationHookResult = ReturnType<typeof useFollowChannelMutation>;
export type FollowChannelMutationResult = Apollo.MutationResult<FollowChannelMutation>;
export type FollowChannelMutationOptions = Apollo.BaseMutationOptions<FollowChannelMutation, FollowChannelMutationVariables>;
export const UnfollowChannelDocument = gql`
    mutation UnfollowChannel($channelId: String!) {
  unfollow(channelId: $channelId)
}
    `;
export type UnfollowChannelMutationFn = Apollo.MutationFunction<UnfollowChannelMutation, UnfollowChannelMutationVariables>;

/**
 * __useUnfollowChannelMutation__
 *
 * To run a mutation, you first call `useUnfollowChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowChannelMutation, { data, loading, error }] = useUnfollowChannelMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useUnfollowChannelMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowChannelMutation, UnfollowChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfollowChannelMutation, UnfollowChannelMutationVariables>(UnfollowChannelDocument, options);
      }
export type UnfollowChannelMutationHookResult = ReturnType<typeof useUnfollowChannelMutation>;
export type UnfollowChannelMutationResult = Apollo.MutationResult<UnfollowChannelMutation>;
export type UnfollowChannelMutationOptions = Apollo.BaseMutationOptions<UnfollowChannelMutation, UnfollowChannelMutationVariables>;
export const CreateSponsorshipPlanDocument = gql`
    mutation CreateSponsorshipPlan($input: CreatePlanInput!) {
  createPlan(input: $input)
}
    `;
export type CreateSponsorshipPlanMutationFn = Apollo.MutationFunction<CreateSponsorshipPlanMutation, CreateSponsorshipPlanMutationVariables>;

/**
 * __useCreateSponsorshipPlanMutation__
 *
 * To run a mutation, you first call `useCreateSponsorshipPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSponsorshipPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSponsorshipPlanMutation, { data, loading, error }] = useCreateSponsorshipPlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSponsorshipPlanMutation(baseOptions?: Apollo.MutationHookOptions<CreateSponsorshipPlanMutation, CreateSponsorshipPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSponsorshipPlanMutation, CreateSponsorshipPlanMutationVariables>(CreateSponsorshipPlanDocument, options);
      }
export type CreateSponsorshipPlanMutationHookResult = ReturnType<typeof useCreateSponsorshipPlanMutation>;
export type CreateSponsorshipPlanMutationResult = Apollo.MutationResult<CreateSponsorshipPlanMutation>;
export type CreateSponsorshipPlanMutationOptions = Apollo.BaseMutationOptions<CreateSponsorshipPlanMutation, CreateSponsorshipPlanMutationVariables>;
export const RemoveSponsorshipPlanDocument = gql`
    mutation RemoveSponsorshipPlan($planId: String!) {
  removePlan(planId: $planId)
}
    `;
export type RemoveSponsorshipPlanMutationFn = Apollo.MutationFunction<RemoveSponsorshipPlanMutation, RemoveSponsorshipPlanMutationVariables>;

/**
 * __useRemoveSponsorshipPlanMutation__
 *
 * To run a mutation, you first call `useRemoveSponsorshipPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSponsorshipPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSponsorshipPlanMutation, { data, loading, error }] = useRemoveSponsorshipPlanMutation({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useRemoveSponsorshipPlanMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSponsorshipPlanMutation, RemoveSponsorshipPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSponsorshipPlanMutation, RemoveSponsorshipPlanMutationVariables>(RemoveSponsorshipPlanDocument, options);
      }
export type RemoveSponsorshipPlanMutationHookResult = ReturnType<typeof useRemoveSponsorshipPlanMutation>;
export type RemoveSponsorshipPlanMutationResult = Apollo.MutationResult<RemoveSponsorshipPlanMutation>;
export type RemoveSponsorshipPlanMutationOptions = Apollo.BaseMutationOptions<RemoveSponsorshipPlanMutation, RemoveSponsorshipPlanMutationVariables>;
export const MakePaymentDocument = gql`
    mutation MakePayment($planId: String!) {
  makePayment(planId: $planId) {
    url
  }
}
    `;
export type MakePaymentMutationFn = Apollo.MutationFunction<MakePaymentMutation, MakePaymentMutationVariables>;

/**
 * __useMakePaymentMutation__
 *
 * To run a mutation, you first call `useMakePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makePaymentMutation, { data, loading, error }] = useMakePaymentMutation({
 *   variables: {
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useMakePaymentMutation(baseOptions?: Apollo.MutationHookOptions<MakePaymentMutation, MakePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakePaymentMutation, MakePaymentMutationVariables>(MakePaymentDocument, options);
      }
export type MakePaymentMutationHookResult = ReturnType<typeof useMakePaymentMutation>;
export type MakePaymentMutationResult = Apollo.MutationResult<MakePaymentMutation>;
export type MakePaymentMutationOptions = Apollo.BaseMutationOptions<MakePaymentMutation, MakePaymentMutationVariables>;
export const ChangeStreamInfoDocument = gql`
    mutation ChangeStreamInfo($input: ChangeStreamInfoInput!) {
  changeStreamInfo(input: $input)
}
    `;
export type ChangeStreamInfoMutationFn = Apollo.MutationFunction<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>;

/**
 * __useChangeStreamInfoMutation__
 *
 * To run a mutation, you first call `useChangeStreamInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeStreamInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeStreamInfoMutation, { data, loading, error }] = useChangeStreamInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeStreamInfoMutation(baseOptions?: Apollo.MutationHookOptions<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>(ChangeStreamInfoDocument, options);
      }
export type ChangeStreamInfoMutationHookResult = ReturnType<typeof useChangeStreamInfoMutation>;
export type ChangeStreamInfoMutationResult = Apollo.MutationResult<ChangeStreamInfoMutation>;
export type ChangeStreamInfoMutationOptions = Apollo.BaseMutationOptions<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>;
export const CreateIngressDocument = gql`
    mutation CreateIngress($ingressType: Float!) {
  createIngress(ingressType: $ingressType)
}
    `;
export type CreateIngressMutationFn = Apollo.MutationFunction<CreateIngressMutation, CreateIngressMutationVariables>;

/**
 * __useCreateIngressMutation__
 *
 * To run a mutation, you first call `useCreateIngressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIngressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIngressMutation, { data, loading, error }] = useCreateIngressMutation({
 *   variables: {
 *      ingressType: // value for 'ingressType'
 *   },
 * });
 */
export function useCreateIngressMutation(baseOptions?: Apollo.MutationHookOptions<CreateIngressMutation, CreateIngressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIngressMutation, CreateIngressMutationVariables>(CreateIngressDocument, options);
      }
export type CreateIngressMutationHookResult = ReturnType<typeof useCreateIngressMutation>;
export type CreateIngressMutationResult = Apollo.MutationResult<CreateIngressMutation>;
export type CreateIngressMutationOptions = Apollo.BaseMutationOptions<CreateIngressMutation, CreateIngressMutationVariables>;
export const GenerateStreamTokenDocument = gql`
    mutation GenerateStreamToken($input: StreamTokenInput!) {
  generateStreamToken(input: $input) {
    token
  }
}
    `;
export type GenerateStreamTokenMutationFn = Apollo.MutationFunction<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>;

/**
 * __useGenerateStreamTokenMutation__
 *
 * To run a mutation, you first call `useGenerateStreamTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateStreamTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateStreamTokenMutation, { data, loading, error }] = useGenerateStreamTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateStreamTokenMutation(baseOptions?: Apollo.MutationHookOptions<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>(GenerateStreamTokenDocument, options);
      }
export type GenerateStreamTokenMutationHookResult = ReturnType<typeof useGenerateStreamTokenMutation>;
export type GenerateStreamTokenMutationResult = Apollo.MutationResult<GenerateStreamTokenMutation>;
export type GenerateStreamTokenMutationOptions = Apollo.BaseMutationOptions<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>;
export const RemoveStreamThumbnailDocument = gql`
    mutation RemoveStreamThumbnail {
  removeStreamThumbnail
}
    `;
export type RemoveStreamThumbnailMutationFn = Apollo.MutationFunction<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>;

/**
 * __useRemoveStreamThumbnailMutation__
 *
 * To run a mutation, you first call `useRemoveStreamThumbnailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStreamThumbnailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStreamThumbnailMutation, { data, loading, error }] = useRemoveStreamThumbnailMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveStreamThumbnailMutation(baseOptions?: Apollo.MutationHookOptions<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>(RemoveStreamThumbnailDocument, options);
      }
export type RemoveStreamThumbnailMutationHookResult = ReturnType<typeof useRemoveStreamThumbnailMutation>;
export type RemoveStreamThumbnailMutationResult = Apollo.MutationResult<RemoveStreamThumbnailMutation>;
export type RemoveStreamThumbnailMutationOptions = Apollo.BaseMutationOptions<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($input: ChangeEmailInput!) {
  changeEmail(input: $input)
}
    `;
export type ChangeEmailMutationFn = Apollo.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, options);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = Apollo.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = Apollo.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangeNotificationsSettingsDocument = gql`
    mutation ChangeNotificationsSettings($input: NotificationSettingsInput!) {
  changeNotificationSettings(input: $input) {
    notificationSettings {
      siteNotification
      telegramNotification
    }
    telegramAuthToken
  }
}
    `;
export type ChangeNotificationsSettingsMutationFn = Apollo.MutationFunction<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>;

/**
 * __useChangeNotificationsSettingsMutation__
 *
 * To run a mutation, you first call `useChangeNotificationsSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeNotificationsSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeNotificationsSettingsMutation, { data, loading, error }] = useChangeNotificationsSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeNotificationsSettingsMutation(baseOptions?: Apollo.MutationHookOptions<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>(ChangeNotificationsSettingsDocument, options);
      }
export type ChangeNotificationsSettingsMutationHookResult = ReturnType<typeof useChangeNotificationsSettingsMutation>;
export type ChangeNotificationsSettingsMutationResult = Apollo.MutationResult<ChangeNotificationsSettingsMutation>;
export type ChangeNotificationsSettingsMutationOptions = Apollo.BaseMutationOptions<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePassInput!) {
  changePass(input: $input)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeProfileAvatarDocument = gql`
    mutation ChangeProfileAvatar($file: Upload!) {
  changeAvatar(file: $file)
}
    `;
export type ChangeProfileAvatarMutationFn = Apollo.MutationFunction<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;

/**
 * __useChangeProfileAvatarMutation__
 *
 * To run a mutation, you first call `useChangeProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfileAvatarMutation, { data, loading, error }] = useChangeProfileAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useChangeProfileAvatarMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>(ChangeProfileAvatarDocument, options);
      }
export type ChangeProfileAvatarMutationHookResult = ReturnType<typeof useChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationResult = Apollo.MutationResult<ChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationOptions = Apollo.BaseMutationOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;
export const ChangeProfileInfoDocument = gql`
    mutation ChangeProfileInfo($input: ChangeProfileInput!) {
  changeProfile(input: $input)
}
    `;
export type ChangeProfileInfoMutationFn = Apollo.MutationFunction<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>;

/**
 * __useChangeProfileInfoMutation__
 *
 * To run a mutation, you first call `useChangeProfileInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfileInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfileInfoMutation, { data, loading, error }] = useChangeProfileInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeProfileInfoMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>(ChangeProfileInfoDocument, options);
      }
export type ChangeProfileInfoMutationHookResult = ReturnType<typeof useChangeProfileInfoMutation>;
export type ChangeProfileInfoMutationResult = Apollo.MutationResult<ChangeProfileInfoMutation>;
export type ChangeProfileInfoMutationOptions = Apollo.BaseMutationOptions<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>;
export const CreateSocialLinkDocument = gql`
    mutation CreateSocialLink($input: SocialLinkInput!) {
  createSocialLink(input: $input)
}
    `;
export type CreateSocialLinkMutationFn = Apollo.MutationFunction<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;

/**
 * __useCreateSocialLinkMutation__
 *
 * To run a mutation, you first call `useCreateSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSocialLinkMutation, { data, loading, error }] = useCreateSocialLinkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSocialLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>(CreateSocialLinkDocument, options);
      }
export type CreateSocialLinkMutationHookResult = ReturnType<typeof useCreateSocialLinkMutation>;
export type CreateSocialLinkMutationResult = Apollo.MutationResult<CreateSocialLinkMutation>;
export type CreateSocialLinkMutationOptions = Apollo.BaseMutationOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;
export const DeactivateAccountDocument = gql`
    mutation DeactivateAccount($input: DeactivateAccountInput!) {
  deactivateAccount(input: $input)
}
    `;
export type DeactivateAccountMutationFn = Apollo.MutationFunction<DeactivateAccountMutation, DeactivateAccountMutationVariables>;

/**
 * __useDeactivateAccountMutation__
 *
 * To run a mutation, you first call `useDeactivateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateAccountMutation, { data, loading, error }] = useDeactivateAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeactivateAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeactivateAccountMutation, DeactivateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeactivateAccountMutation, DeactivateAccountMutationVariables>(DeactivateAccountDocument, options);
      }
export type DeactivateAccountMutationHookResult = ReturnType<typeof useDeactivateAccountMutation>;
export type DeactivateAccountMutationResult = Apollo.MutationResult<DeactivateAccountMutation>;
export type DeactivateAccountMutationOptions = Apollo.BaseMutationOptions<DeactivateAccountMutation, DeactivateAccountMutationVariables>;
export const DisableTotpDocument = gql`
    mutation DisableTotp {
  disableTotp
}
    `;
export type DisableTotpMutationFn = Apollo.MutationFunction<DisableTotpMutation, DisableTotpMutationVariables>;

/**
 * __useDisableTotpMutation__
 *
 * To run a mutation, you first call `useDisableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableTotpMutation, { data, loading, error }] = useDisableTotpMutation({
 *   variables: {
 *   },
 * });
 */
export function useDisableTotpMutation(baseOptions?: Apollo.MutationHookOptions<DisableTotpMutation, DisableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisableTotpMutation, DisableTotpMutationVariables>(DisableTotpDocument, options);
      }
export type DisableTotpMutationHookResult = ReturnType<typeof useDisableTotpMutation>;
export type DisableTotpMutationResult = Apollo.MutationResult<DisableTotpMutation>;
export type DisableTotpMutationOptions = Apollo.BaseMutationOptions<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = gql`
    mutation EnableTotp($input: EnableTotpInput!) {
  enableTotp(input: $input)
}
    `;
export type EnableTotpMutationFn = Apollo.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>;

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: Apollo.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, options);
      }
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>;
export type EnableTotpMutationResult = Apollo.MutationResult<EnableTotpMutation>;
export type EnableTotpMutationOptions = Apollo.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>;
export const RemoveProfileAvatarDocument = gql`
    mutation RemoveProfileAvatar {
  removeAvatar
}
    `;
export type RemoveProfileAvatarMutationFn = Apollo.MutationFunction<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>;

/**
 * __useRemoveProfileAvatarMutation__
 *
 * To run a mutation, you first call `useRemoveProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfileAvatarMutation, { data, loading, error }] = useRemoveProfileAvatarMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveProfileAvatarMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>(RemoveProfileAvatarDocument, options);
      }
export type RemoveProfileAvatarMutationHookResult = ReturnType<typeof useRemoveProfileAvatarMutation>;
export type RemoveProfileAvatarMutationResult = Apollo.MutationResult<RemoveProfileAvatarMutation>;
export type RemoveProfileAvatarMutationOptions = Apollo.BaseMutationOptions<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>;
export const RemoveSocialLinkDocument = gql`
    mutation RemoveSocialLink($id: String!) {
  deleteSocialLink(id: $id)
}
    `;
export type RemoveSocialLinkMutationFn = Apollo.MutationFunction<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;

/**
 * __useRemoveSocialLinkMutation__
 *
 * To run a mutation, you first call `useRemoveSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSocialLinkMutation, { data, loading, error }] = useRemoveSocialLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSocialLinkMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>(RemoveSocialLinkDocument, options);
      }
export type RemoveSocialLinkMutationHookResult = ReturnType<typeof useRemoveSocialLinkMutation>;
export type RemoveSocialLinkMutationResult = Apollo.MutationResult<RemoveSocialLinkMutation>;
export type RemoveSocialLinkMutationOptions = Apollo.BaseMutationOptions<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;
export const ReorderSocialLinksDocument = gql`
    mutation ReorderSocialLinks($list: [SocialLinkOrderInput!]!) {
  reorderSocialLinks(list: $list)
}
    `;
export type ReorderSocialLinksMutationFn = Apollo.MutationFunction<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>;

/**
 * __useReorderSocialLinksMutation__
 *
 * To run a mutation, you first call `useReorderSocialLinksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderSocialLinksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderSocialLinksMutation, { data, loading, error }] = useReorderSocialLinksMutation({
 *   variables: {
 *      list: // value for 'list'
 *   },
 * });
 */
export function useReorderSocialLinksMutation(baseOptions?: Apollo.MutationHookOptions<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>(ReorderSocialLinksDocument, options);
      }
export type ReorderSocialLinksMutationHookResult = ReturnType<typeof useReorderSocialLinksMutation>;
export type ReorderSocialLinksMutationResult = Apollo.MutationResult<ReorderSocialLinksMutation>;
export type ReorderSocialLinksMutationOptions = Apollo.BaseMutationOptions<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>;
export const UpdateSocialLinkDocument = gql`
    mutation UpdateSocialLink($input: SocialLinkInput!) {
  updateSocialLink(input: $input)
}
    `;
export type UpdateSocialLinkMutationFn = Apollo.MutationFunction<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>;

/**
 * __useUpdateSocialLinkMutation__
 *
 * To run a mutation, you first call `useUpdateSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSocialLinkMutation, { data, loading, error }] = useUpdateSocialLinkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSocialLinkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>(UpdateSocialLinkDocument, options);
      }
export type UpdateSocialLinkMutationHookResult = ReturnType<typeof useUpdateSocialLinkMutation>;
export type UpdateSocialLinkMutationResult = Apollo.MutationResult<UpdateSocialLinkMutation>;
export type UpdateSocialLinkMutationOptions = Apollo.BaseMutationOptions<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>;
export const FindAllCategoriesDocument = gql`
    query FindAllCategories {
  findAllCategories {
    id
    title
    thumbnailUrl
    slug
  }
}
    `;

/**
 * __useFindAllCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
      }
export function useFindAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export function useFindAllCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export type FindAllCategoriesQueryHookResult = ReturnType<typeof useFindAllCategoriesQuery>;
export type FindAllCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesLazyQuery>;
export type FindAllCategoriesSuspenseQueryHookResult = ReturnType<typeof useFindAllCategoriesSuspenseQuery>;
export type FindAllCategoriesQueryResult = Apollo.QueryResult<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindCategoryBySlugDocument = gql`
    query FindCategoryBySlug($slug: String!) {
  findCategoryBySlug(slug: $slug) {
    id
    title
    thumbnailUrl
    description
    streams {
      id
      title
      thumbnailUrl
      isLive
      user {
        id
        username
        avatar
        isVerified
      }
      category {
        id
        title
        slug
      }
    }
  }
}
    `;

/**
 * __useFindCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useFindCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindCategoryBySlugQuery(baseOptions: Apollo.QueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables> & ({ variables: FindCategoryBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>(FindCategoryBySlugDocument, options);
      }
export function useFindCategoryBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>(FindCategoryBySlugDocument, options);
        }
export function useFindCategoryBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>(FindCategoryBySlugDocument, options);
        }
export type FindCategoryBySlugQueryHookResult = ReturnType<typeof useFindCategoryBySlugQuery>;
export type FindCategoryBySlugLazyQueryHookResult = ReturnType<typeof useFindCategoryBySlugLazyQuery>;
export type FindCategoryBySlugSuspenseQueryHookResult = ReturnType<typeof useFindCategoryBySlugSuspenseQuery>;
export type FindCategoryBySlugQueryResult = Apollo.QueryResult<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>;
export const FindRandomCategoriesDocument = gql`
    query FindRandomCategories {
  findRandomCategories {
    id
    title
    thumbnailUrl
    slug
  }
}
    `;

/**
 * __useFindRandomCategoriesQuery__
 *
 * To run a query within a React component, call `useFindRandomCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRandomCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRandomCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRandomCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>(FindRandomCategoriesDocument, options);
      }
export function useFindRandomCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>(FindRandomCategoriesDocument, options);
        }
export function useFindRandomCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>(FindRandomCategoriesDocument, options);
        }
export type FindRandomCategoriesQueryHookResult = ReturnType<typeof useFindRandomCategoriesQuery>;
export type FindRandomCategoriesLazyQueryHookResult = ReturnType<typeof useFindRandomCategoriesLazyQuery>;
export type FindRandomCategoriesSuspenseQueryHookResult = ReturnType<typeof useFindRandomCategoriesSuspenseQuery>;
export type FindRandomCategoriesQueryResult = Apollo.QueryResult<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>;
export const FindChannelByUsernameDocument = gql`
    query FindChannelByUsername($username: String!) {
  findChannelByUsername(username: $username) {
    id
    username
    displayName
    avatar
    isVerified
    bio
    socialLinks {
      title
      url
    }
    stream {
      id
      thumbnailUrl
      isLive
      title
      isChatEnabled
      isChatFollowersOnly
      isChatPremiumFollowersOnly
      category {
        title
        id
      }
    }
    sponsorshipPlans {
      title
      description
      price
      id
    }
    followings {
      id
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
export const FindReccomendedChannelsDocument = gql`
    query FindReccomendedChannels {
  findRecommendedChannels {
    username
    avatar
    isVerified
    stream {
      isLive
    }
  }
}
    `;

/**
 * __useFindReccomendedChannelsQuery__
 *
 * To run a query within a React component, call `useFindReccomendedChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindReccomendedChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindReccomendedChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindReccomendedChannelsQuery(baseOptions?: Apollo.QueryHookOptions<FindReccomendedChannelsQuery, FindReccomendedChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindReccomendedChannelsQuery, FindReccomendedChannelsQueryVariables>(FindReccomendedChannelsDocument, options);
      }
export function useFindReccomendedChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindReccomendedChannelsQuery, FindReccomendedChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindReccomendedChannelsQuery, FindReccomendedChannelsQueryVariables>(FindReccomendedChannelsDocument, options);
        }
export function useFindReccomendedChannelsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindReccomendedChannelsQuery, FindReccomendedChannelsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindReccomendedChannelsQuery, FindReccomendedChannelsQueryVariables>(FindReccomendedChannelsDocument, options);
        }
export type FindReccomendedChannelsQueryHookResult = ReturnType<typeof useFindReccomendedChannelsQuery>;
export type FindReccomendedChannelsLazyQueryHookResult = ReturnType<typeof useFindReccomendedChannelsLazyQuery>;
export type FindReccomendedChannelsSuspenseQueryHookResult = ReturnType<typeof useFindReccomendedChannelsSuspenseQuery>;
export type FindReccomendedChannelsQueryResult = Apollo.QueryResult<FindReccomendedChannelsQuery, FindReccomendedChannelsQueryVariables>;
export const FindSponsorsByChannelDocument = gql`
    query FindSponsorsByChannel($channelId: String!) {
  findSponsorsByChannel(channelId: $channelId) {
    user {
      id
      username
      avatar
      isVerified
      avatar
    }
  }
}
    `;

/**
 * __useFindSponsorsByChannelQuery__
 *
 * To run a query within a React component, call `useFindSponsorsByChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSponsorsByChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSponsorsByChannelQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFindSponsorsByChannelQuery(baseOptions: Apollo.QueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables> & ({ variables: FindSponsorsByChannelQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>(FindSponsorsByChannelDocument, options);
      }
export function useFindSponsorsByChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>(FindSponsorsByChannelDocument, options);
        }
export function useFindSponsorsByChannelSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>(FindSponsorsByChannelDocument, options);
        }
export type FindSponsorsByChannelQueryHookResult = ReturnType<typeof useFindSponsorsByChannelQuery>;
export type FindSponsorsByChannelLazyQueryHookResult = ReturnType<typeof useFindSponsorsByChannelLazyQuery>;
export type FindSponsorsByChannelSuspenseQueryHookResult = ReturnType<typeof useFindSponsorsByChannelSuspenseQuery>;
export type FindSponsorsByChannelQueryResult = Apollo.QueryResult<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>;
export const FindMessagesByStreamIdDocument = gql`
    query FindMessagesByStreamId($streamId: String!) {
  findMessagesByStreamId(streamId: $streamId) {
    id
    message
    createdAt
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useFindMessagesByStreamIdQuery__
 *
 * To run a query within a React component, call `useFindMessagesByStreamIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMessagesByStreamIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMessagesByStreamIdQuery({
 *   variables: {
 *      streamId: // value for 'streamId'
 *   },
 * });
 */
export function useFindMessagesByStreamIdQuery(baseOptions: Apollo.QueryHookOptions<FindMessagesByStreamIdQuery, FindMessagesByStreamIdQueryVariables> & ({ variables: FindMessagesByStreamIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMessagesByStreamIdQuery, FindMessagesByStreamIdQueryVariables>(FindMessagesByStreamIdDocument, options);
      }
export function useFindMessagesByStreamIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMessagesByStreamIdQuery, FindMessagesByStreamIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMessagesByStreamIdQuery, FindMessagesByStreamIdQueryVariables>(FindMessagesByStreamIdDocument, options);
        }
export function useFindMessagesByStreamIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMessagesByStreamIdQuery, FindMessagesByStreamIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMessagesByStreamIdQuery, FindMessagesByStreamIdQueryVariables>(FindMessagesByStreamIdDocument, options);
        }
export type FindMessagesByStreamIdQueryHookResult = ReturnType<typeof useFindMessagesByStreamIdQuery>;
export type FindMessagesByStreamIdLazyQueryHookResult = ReturnType<typeof useFindMessagesByStreamIdLazyQuery>;
export type FindMessagesByStreamIdSuspenseQueryHookResult = ReturnType<typeof useFindMessagesByStreamIdSuspenseQuery>;
export type FindMessagesByStreamIdQueryResult = Apollo.QueryResult<FindMessagesByStreamIdQuery, FindMessagesByStreamIdQueryVariables>;
export const FindMyFollowersDocument = gql`
    query FindMyFollowers {
  findMyFollowers {
    createdAt
    follower {
      username
      createdAt
      id
      avatar
      isVerified
    }
  }
}
    `;

/**
 * __useFindMyFollowersQuery__
 *
 * To run a query within a React component, call `useFindMyFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyFollowersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyFollowersQuery(baseOptions?: Apollo.QueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyFollowersQuery, FindMyFollowersQueryVariables>(FindMyFollowersDocument, options);
      }
export function useFindMyFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyFollowersQuery, FindMyFollowersQueryVariables>(FindMyFollowersDocument, options);
        }
export function useFindMyFollowersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyFollowersQuery, FindMyFollowersQueryVariables>(FindMyFollowersDocument, options);
        }
export type FindMyFollowersQueryHookResult = ReturnType<typeof useFindMyFollowersQuery>;
export type FindMyFollowersLazyQueryHookResult = ReturnType<typeof useFindMyFollowersLazyQuery>;
export type FindMyFollowersSuspenseQueryHookResult = ReturnType<typeof useFindMyFollowersSuspenseQuery>;
export type FindMyFollowersQueryResult = Apollo.QueryResult<FindMyFollowersQuery, FindMyFollowersQueryVariables>;
export const FindMyFollowingsDocument = gql`
    query FindMyFollowings {
  findMyFollowings {
    createdAt
    followingId
  }
}
    `;

/**
 * __useFindMyFollowingsQuery__
 *
 * To run a query within a React component, call `useFindMyFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyFollowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyFollowingsQuery(baseOptions?: Apollo.QueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>(FindMyFollowingsDocument, options);
      }
export function useFindMyFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>(FindMyFollowingsDocument, options);
        }
export function useFindMyFollowingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>(FindMyFollowingsDocument, options);
        }
export type FindMyFollowingsQueryHookResult = ReturnType<typeof useFindMyFollowingsQuery>;
export type FindMyFollowingsLazyQueryHookResult = ReturnType<typeof useFindMyFollowingsLazyQuery>;
export type FindMyFollowingsSuspenseQueryHookResult = ReturnType<typeof useFindMyFollowingsSuspenseQuery>;
export type FindMyFollowingsQueryResult = Apollo.QueryResult<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>;
export const FindMySponsorhipPlansDocument = gql`
    query FindMySponsorhipPlans {
  findMyPlans {
    id
    title
    createdAt
    price
  }
}
    `;

/**
 * __useFindMySponsorhipPlansQuery__
 *
 * To run a query within a React component, call `useFindMySponsorhipPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMySponsorhipPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMySponsorhipPlansQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMySponsorhipPlansQuery(baseOptions?: Apollo.QueryHookOptions<FindMySponsorhipPlansQuery, FindMySponsorhipPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMySponsorhipPlansQuery, FindMySponsorhipPlansQueryVariables>(FindMySponsorhipPlansDocument, options);
      }
export function useFindMySponsorhipPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMySponsorhipPlansQuery, FindMySponsorhipPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMySponsorhipPlansQuery, FindMySponsorhipPlansQueryVariables>(FindMySponsorhipPlansDocument, options);
        }
export function useFindMySponsorhipPlansSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMySponsorhipPlansQuery, FindMySponsorhipPlansQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMySponsorhipPlansQuery, FindMySponsorhipPlansQueryVariables>(FindMySponsorhipPlansDocument, options);
        }
export type FindMySponsorhipPlansQueryHookResult = ReturnType<typeof useFindMySponsorhipPlansQuery>;
export type FindMySponsorhipPlansLazyQueryHookResult = ReturnType<typeof useFindMySponsorhipPlansLazyQuery>;
export type FindMySponsorhipPlansSuspenseQueryHookResult = ReturnType<typeof useFindMySponsorhipPlansSuspenseQuery>;
export type FindMySponsorhipPlansQueryResult = Apollo.QueryResult<FindMySponsorhipPlansQuery, FindMySponsorhipPlansQueryVariables>;
export const FindMySponsorsDocument = gql`
    query FindMySponsors {
  findMySponsors {
    expiresAt
    user {
      username
      avatar
      isVerified
    }
    plan {
      title
    }
  }
}
    `;

/**
 * __useFindMySponsorsQuery__
 *
 * To run a query within a React component, call `useFindMySponsorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMySponsorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMySponsorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMySponsorsQuery(baseOptions?: Apollo.QueryHookOptions<FindMySponsorsQuery, FindMySponsorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMySponsorsQuery, FindMySponsorsQueryVariables>(FindMySponsorsDocument, options);
      }
export function useFindMySponsorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMySponsorsQuery, FindMySponsorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMySponsorsQuery, FindMySponsorsQueryVariables>(FindMySponsorsDocument, options);
        }
export function useFindMySponsorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMySponsorsQuery, FindMySponsorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMySponsorsQuery, FindMySponsorsQueryVariables>(FindMySponsorsDocument, options);
        }
export type FindMySponsorsQueryHookResult = ReturnType<typeof useFindMySponsorsQuery>;
export type FindMySponsorsLazyQueryHookResult = ReturnType<typeof useFindMySponsorsLazyQuery>;
export type FindMySponsorsSuspenseQueryHookResult = ReturnType<typeof useFindMySponsorsSuspenseQuery>;
export type FindMySponsorsQueryResult = Apollo.QueryResult<FindMySponsorsQuery, FindMySponsorsQueryVariables>;
export const FindMyTransactionsDocument = gql`
    query FindMyTransactions {
  findMyTransactions {
    id
    createdAt
    status
    amount
  }
}
    `;

/**
 * __useFindMyTransactionsQuery__
 *
 * To run a query within a React component, call `useFindMyTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>(FindMyTransactionsDocument, options);
      }
export function useFindMyTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>(FindMyTransactionsDocument, options);
        }
export function useFindMyTransactionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>(FindMyTransactionsDocument, options);
        }
export type FindMyTransactionsQueryHookResult = ReturnType<typeof useFindMyTransactionsQuery>;
export type FindMyTransactionsLazyQueryHookResult = ReturnType<typeof useFindMyTransactionsLazyQuery>;
export type FindMyTransactionsSuspenseQueryHookResult = ReturnType<typeof useFindMyTransactionsSuspenseQuery>;
export type FindMyTransactionsQueryResult = Apollo.QueryResult<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>;
export const FindAllStreamsDocument = gql`
    query FindAllStreams($filters: FiltersInput!) {
  findAllStreams(filters: $filters) {
    id
    title
    thumbnailUrl
    isLive
    user {
      id
      username
      avatar
      isVerified
    }
    category {
      id
      title
      slug
    }
  }
}
    `;

/**
 * __useFindAllStreamsQuery__
 *
 * To run a query within a React component, call `useFindAllStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllStreamsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useFindAllStreamsQuery(baseOptions: Apollo.QueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables> & ({ variables: FindAllStreamsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllStreamsQuery, FindAllStreamsQueryVariables>(FindAllStreamsDocument, options);
      }
export function useFindAllStreamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllStreamsQuery, FindAllStreamsQueryVariables>(FindAllStreamsDocument, options);
        }
export function useFindAllStreamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllStreamsQuery, FindAllStreamsQueryVariables>(FindAllStreamsDocument, options);
        }
export type FindAllStreamsQueryHookResult = ReturnType<typeof useFindAllStreamsQuery>;
export type FindAllStreamsLazyQueryHookResult = ReturnType<typeof useFindAllStreamsLazyQuery>;
export type FindAllStreamsSuspenseQueryHookResult = ReturnType<typeof useFindAllStreamsSuspenseQuery>;
export type FindAllStreamsQueryResult = Apollo.QueryResult<FindAllStreamsQuery, FindAllStreamsQueryVariables>;
export const FindRandomStreamsDocument = gql`
    query FindRandomStreams {
  findRandomStreams {
    id
    title
    thumbnailUrl
    isLive
    user {
      id
      username
      avatar
      isVerified
    }
    category {
      id
      title
      slug
    }
  }
}
    `;

/**
 * __useFindRandomStreamsQuery__
 *
 * To run a query within a React component, call `useFindRandomStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRandomStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRandomStreamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRandomStreamsQuery(baseOptions?: Apollo.QueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>(FindRandomStreamsDocument, options);
      }
export function useFindRandomStreamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>(FindRandomStreamsDocument, options);
        }
export function useFindRandomStreamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>(FindRandomStreamsDocument, options);
        }
export type FindRandomStreamsQueryHookResult = ReturnType<typeof useFindRandomStreamsQuery>;
export type FindRandomStreamsLazyQueryHookResult = ReturnType<typeof useFindRandomStreamsLazyQuery>;
export type FindRandomStreamsSuspenseQueryHookResult = ReturnType<typeof useFindRandomStreamsSuspenseQuery>;
export type FindRandomStreamsQueryResult = Apollo.QueryResult<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>;
export const ClearSessionCookieDocument = gql`
    mutation ClearSessionCookie {
  clearCookies
}
    `;
export type ClearSessionCookieMutationFn = Apollo.MutationFunction<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;

/**
 * __useClearSessionCookieMutation__
 *
 * To run a mutation, you first call `useClearSessionCookieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearSessionCookieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearSessionCookieMutation, { data, loading, error }] = useClearSessionCookieMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearSessionCookieMutation(baseOptions?: Apollo.MutationHookOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>(ClearSessionCookieDocument, options);
      }
export type ClearSessionCookieMutationHookResult = ReturnType<typeof useClearSessionCookieMutation>;
export type ClearSessionCookieMutationResult = Apollo.MutationResult<ClearSessionCookieMutation>;
export type ClearSessionCookieMutationOptions = Apollo.BaseMutationOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;
export const FindCurrentSessionDocument = gql`
    query FindCurrentSession {
  findCurrentSession {
    id
    createdAt
    metadata {
      location {
        country
        city
        latitude
        longitude
      }
      device {
        browser
        os
      }
      ip
    }
  }
}
    `;

/**
 * __useFindCurrentSessionQuery__
 *
 * To run a query within a React component, call `useFindCurrentSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentSessionQuery(baseOptions?: Apollo.QueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
      }
export function useFindCurrentSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export function useFindCurrentSessionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export type FindCurrentSessionQueryHookResult = ReturnType<typeof useFindCurrentSessionQuery>;
export type FindCurrentSessionLazyQueryHookResult = ReturnType<typeof useFindCurrentSessionLazyQuery>;
export type FindCurrentSessionSuspenseQueryHookResult = ReturnType<typeof useFindCurrentSessionSuspenseQuery>;
export type FindCurrentSessionQueryResult = Apollo.QueryResult<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>;
export const FindNotificationsByUserDocument = gql`
    query FindNotificationsByUser {
  findNotificationsByUser {
    id
    type
    message
  }
}
    `;

/**
 * __useFindNotificationsByUserQuery__
 *
 * To run a query within a React component, call `useFindNotificationsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindNotificationsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindNotificationsByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindNotificationsByUserQuery(baseOptions?: Apollo.QueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>(FindNotificationsByUserDocument, options);
      }
export function useFindNotificationsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>(FindNotificationsByUserDocument, options);
        }
export function useFindNotificationsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>(FindNotificationsByUserDocument, options);
        }
export type FindNotificationsByUserQueryHookResult = ReturnType<typeof useFindNotificationsByUserQuery>;
export type FindNotificationsByUserLazyQueryHookResult = ReturnType<typeof useFindNotificationsByUserLazyQuery>;
export type FindNotificationsByUserSuspenseQueryHookResult = ReturnType<typeof useFindNotificationsByUserSuspenseQuery>;
export type FindNotificationsByUserQueryResult = Apollo.QueryResult<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>;
export const FindProfileDocument = gql`
    query FindProfile {
  getMe {
    id
    username
    email
    displayName
    avatar
    bio
    isVerified
    isTotpEnabled
    notificationSettings {
      siteNotification
      telegramNotification
    }
    stream {
      serverUrl
      streamKey
      isChatEnabled
      isChatFollowersOnly
      isChatPremiumFollowersOnly
    }
  }
}
    `;

/**
 * __useFindProfileQuery__
 *
 * To run a query within a React component, call `useFindProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
      }
export function useFindProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export function useFindProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export type FindProfileQueryHookResult = ReturnType<typeof useFindProfileQuery>;
export type FindProfileLazyQueryHookResult = ReturnType<typeof useFindProfileLazyQuery>;
export type FindProfileSuspenseQueryHookResult = ReturnType<typeof useFindProfileSuspenseQuery>;
export type FindProfileQueryResult = Apollo.QueryResult<FindProfileQuery, FindProfileQueryVariables>;
export const FindSessionsByUserDocument = gql`
    query FindSessionsByUser {
  findSessionsByUserId {
    id
    createdAt
    metadata {
      location {
        country
        city
        latitude
        longitude
      }
      device {
        browser
        os
      }
      ip
    }
  }
}
    `;

/**
 * __useFindSessionsByUserQuery__
 *
 * To run a query within a React component, call `useFindSessionsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionsByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSessionsByUserQuery(baseOptions?: Apollo.QueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>(FindSessionsByUserDocument, options);
      }
export function useFindSessionsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>(FindSessionsByUserDocument, options);
        }
export function useFindSessionsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>(FindSessionsByUserDocument, options);
        }
export type FindSessionsByUserQueryHookResult = ReturnType<typeof useFindSessionsByUserQuery>;
export type FindSessionsByUserLazyQueryHookResult = ReturnType<typeof useFindSessionsByUserLazyQuery>;
export type FindSessionsByUserSuspenseQueryHookResult = ReturnType<typeof useFindSessionsByUserSuspenseQuery>;
export type FindSessionsByUserQueryResult = Apollo.QueryResult<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>;
export const FindSocialLinksDocument = gql`
    query FindSocialLinks {
  socialLinks {
    position
    title
    url
    id
  }
}
    `;

/**
 * __useFindSocialLinksQuery__
 *
 * To run a query within a React component, call `useFindSocialLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSocialLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSocialLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSocialLinksQuery(baseOptions?: Apollo.QueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
      }
export function useFindSocialLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
        }
export function useFindSocialLinksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
        }
export type FindSocialLinksQueryHookResult = ReturnType<typeof useFindSocialLinksQuery>;
export type FindSocialLinksLazyQueryHookResult = ReturnType<typeof useFindSocialLinksLazyQuery>;
export type FindSocialLinksSuspenseQueryHookResult = ReturnType<typeof useFindSocialLinksSuspenseQuery>;
export type FindSocialLinksQueryResult = Apollo.QueryResult<FindSocialLinksQuery, FindSocialLinksQueryVariables>;
export const FindUnreadNotificationsCountDocument = gql`
    query FindUnreadNotificationsCount {
  findUnreadNotificationsCount
}
    `;

/**
 * __useFindUnreadNotificationsCountQuery__
 *
 * To run a query within a React component, call `useFindUnreadNotificationsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUnreadNotificationsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUnreadNotificationsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUnreadNotificationsCountQuery(baseOptions?: Apollo.QueryHookOptions<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>(FindUnreadNotificationsCountDocument, options);
      }
export function useFindUnreadNotificationsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>(FindUnreadNotificationsCountDocument, options);
        }
export function useFindUnreadNotificationsCountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>(FindUnreadNotificationsCountDocument, options);
        }
export type FindUnreadNotificationsCountQueryHookResult = ReturnType<typeof useFindUnreadNotificationsCountQuery>;
export type FindUnreadNotificationsCountLazyQueryHookResult = ReturnType<typeof useFindUnreadNotificationsCountLazyQuery>;
export type FindUnreadNotificationsCountSuspenseQueryHookResult = ReturnType<typeof useFindUnreadNotificationsCountSuspenseQuery>;
export type FindUnreadNotificationsCountQueryResult = Apollo.QueryResult<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>;
export const GenerateTotpSecretDocument = gql`
    query GenerateTotpSecret {
  generateTotpSecret {
    secret
    qrCode
  }
}
    `;

/**
 * __useGenerateTotpSecretQuery__
 *
 * To run a query within a React component, call `useGenerateTotpSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateTotpSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateTotpSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateTotpSecretQuery(baseOptions?: Apollo.QueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
      }
export function useGenerateTotpSecretLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export function useGenerateTotpSecretSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export type GenerateTotpSecretQueryHookResult = ReturnType<typeof useGenerateTotpSecretQuery>;
export type GenerateTotpSecretLazyQueryHookResult = ReturnType<typeof useGenerateTotpSecretLazyQuery>;
export type GenerateTotpSecretSuspenseQueryHookResult = ReturnType<typeof useGenerateTotpSecretSuspenseQuery>;
export type GenerateTotpSecretQueryResult = Apollo.QueryResult<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;
export const RemoveSessionByIdDocument = gql`
    mutation RemoveSessionById($id: String!) {
  removeSessionById(id: $id)
}
    `;
export type RemoveSessionByIdMutationFn = Apollo.MutationFunction<RemoveSessionByIdMutation, RemoveSessionByIdMutationVariables>;

/**
 * __useRemoveSessionByIdMutation__
 *
 * To run a mutation, you first call `useRemoveSessionByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSessionByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSessionByIdMutation, { data, loading, error }] = useRemoveSessionByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSessionByIdMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSessionByIdMutation, RemoveSessionByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSessionByIdMutation, RemoveSessionByIdMutationVariables>(RemoveSessionByIdDocument, options);
      }
export type RemoveSessionByIdMutationHookResult = ReturnType<typeof useRemoveSessionByIdMutation>;
export type RemoveSessionByIdMutationResult = Apollo.MutationResult<RemoveSessionByIdMutation>;
export type RemoveSessionByIdMutationOptions = Apollo.BaseMutationOptions<RemoveSessionByIdMutation, RemoveSessionByIdMutationVariables>;
export const ChatMessageAddedDocument = gql`
    subscription ChatMessageAdded($streamId: String!) {
  chatMessageAdded(streamId: $streamId) {
    id
    message
    createdAt
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useChatMessageAddedSubscription__
 *
 * To run a query within a React component, call `useChatMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessageAddedSubscription({
 *   variables: {
 *      streamId: // value for 'streamId'
 *   },
 * });
 */
export function useChatMessageAddedSubscription(baseOptions: Apollo.SubscriptionHookOptions<ChatMessageAddedSubscription, ChatMessageAddedSubscriptionVariables> & ({ variables: ChatMessageAddedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ChatMessageAddedSubscription, ChatMessageAddedSubscriptionVariables>(ChatMessageAddedDocument, options);
      }
export type ChatMessageAddedSubscriptionHookResult = ReturnType<typeof useChatMessageAddedSubscription>;
export type ChatMessageAddedSubscriptionResult = Apollo.SubscriptionResult<ChatMessageAddedSubscription>;