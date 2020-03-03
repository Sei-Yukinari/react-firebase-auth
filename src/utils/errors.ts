abstract class ApplicationError extends Error {
  protected constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ServerError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'ServerError';
  }
}

export class LoginError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'LoginError';
  }
}

export class TimeoutError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'TimeoutError';
  }
}

export class ValidationError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'ValidationError';
  }
}

export class NotFoundError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'NotFoundError';
  }
}

export class NotImplementError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'NotImplementError';
  }
}

export class UnauthorizedError extends ApplicationError {
  constructor(m: string) {
    super(m);
    this.name = 'UnauthorizedError';
  }
}

export const SCENARIO_UPLOAD_ERROR_MESSAGES = {
  'File is required': 'ファイルを指定してください',
  'Unsupported file type': 'EXCELファイル形式(.xlsx)のみアップロード可能です',
  'Too large file': '100MB以上のファイルはアップロード出来ません',
};
