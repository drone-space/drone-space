export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  DEV = 'DEV',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',

  // attempts
  INTRO = 'INTRO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE',
  ABANDONED = 'ABANDONED',
}

export enum SyncStatus {
  PENDING = 'PENDING',
  SYNCED = 'SYNCED',
  SAVED = 'SAVED',
  ERROR = 'ERROR',
  DELETED = 'DELETED',
  SYNCED_CLIENT = 'SYNCED_CLIENT',
}

export enum CategoryType {
  BLOG = 'BLOG',
  PRODUCT = 'PRODUCT',
}
