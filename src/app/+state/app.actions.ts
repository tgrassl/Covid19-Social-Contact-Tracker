export class SetServerError {
  static readonly type = '[APP] SET SERVER ERROR';
  constructor(public error: boolean) {}
}
