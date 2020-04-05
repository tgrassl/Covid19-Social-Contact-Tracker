export class SetServerError {
  static readonly type = '[APP] set server error';
  constructor(public error: boolean) {}
}

export class SetGeneralLang {
  static readonly type = '[APP] set general language strings';
}

