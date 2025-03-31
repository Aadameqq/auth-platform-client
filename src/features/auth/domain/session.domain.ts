export class Session {
    public constructor(
        public readonly accessToken: string,
        public readonly accountId: string,
        public readonly accountRole: string,
    ) {}

    public static readonly Empty = new Session('', '', '');
}
