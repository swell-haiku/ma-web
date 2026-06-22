// Moderation constants

export const ALLOWED_PROFANITY = ['fuck', 'bitch', 'nigga', 'stfu', 'tf', 'fym'];

export const WARNING_CONFIG = {
  MAX_WARNINGS_BEFORE_BAN: 5,
  BAN_DURATION_FIRST: 24 * 60 * 60 * 1000, // 24 hours in ms
  BAN_DURATION_SECOND: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  PERMANENT_BAN_AFTER: 3, // 3 bans = permanent
};

export const VIOLATION_TYPES = {
  PROFANITY: 'profanity',
  HATE_SPEECH: 'hate_speech',
  SPAM: 'spam',
  HARASSMENT: 'harassment',
  DOXXING: 'doxxing',
  ADVERTISING: 'advertising',
  NSFW_CONTENT: 'nsfw_content',
};

export const VIOLATION_SEVERITY = {
  [VIOLATION_TYPES.PROFANITY]: 1,
  [VIOLATION_TYPES.HATE_SPEECH]: 2,
  [VIOLATION_TYPES.SPAM]: 1,
  [VIOLATION_TYPES.HARASSMENT]: 2,
  [VIOLATION_TYPES.DOXXING]: 3,
  [VIOLATION_TYPES.ADVERTISING]: 1,
  [VIOLATION_TYPES.NSFW_CONTENT]: 2,
};
