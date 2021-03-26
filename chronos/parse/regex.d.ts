import { Locale } from '../locale/locale.class';
export declare const match1: RegExp;
export declare const match2: RegExp;
export declare const match3: RegExp;
export declare const match4: RegExp;
export declare const match6: RegExp;
export declare const match1to2: RegExp;
export declare const match3to4: RegExp;
export declare const match5to6: RegExp;
export declare const match1to3: RegExp;
export declare const match1to4: RegExp;
export declare const match1to6: RegExp;
export declare const matchUnsigned: RegExp;
export declare const matchSigned: RegExp;
export declare const matchOffset: RegExp;
export declare const matchShortOffset: RegExp;
export declare const matchTimestamp: RegExp;
export declare const matchWord: RegExp;
export declare type RegExpTokenFn = (isStrict: boolean, locale: Locale) => RegExp;
export declare function addRegexToken(token: string, regex: RegExp | RegExpTokenFn, strictRegex?: RegExp): void;
export declare function getParseRegexForToken(token: string, locale: Locale): RegExp;
export declare function regexEscape(str: string): string;
//# sourceMappingURL=regex.d.ts.map