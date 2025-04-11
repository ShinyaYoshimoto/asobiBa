
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Hand
 * 
 */
export type Hand = $Result.DefaultSelection<Prisma.$HandPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model PhotoTag
 * 
 */
export type PhotoTag = $Result.DefaultSelection<Prisma.$PhotoTagPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Answers
   * const answers = await prisma.answer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs>;

  /**
   * `prisma.hand`: Exposes CRUD operations for the **Hand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hands
    * const hands = await prisma.hand.findMany()
    * ```
    */
  get hand(): Prisma.HandDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.photoTag`: Exposes CRUD operations for the **PhotoTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoTags
    * const photoTags = await prisma.photoTag.findMany()
    * ```
    */
  get photoTag(): Prisma.PhotoTagDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Answer: 'Answer',
    Hand: 'Hand',
    Account: 'Account',
    Photo: 'Photo',
    Tag: 'Tag',
    PhotoTag: 'PhotoTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "answer" | "hand" | "account" | "photo" | "tag" | "photoTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Hand: {
        payload: Prisma.$HandPayload<ExtArgs>
        fields: Prisma.HandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>
          }
          findFirst: {
            args: Prisma.HandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>
          }
          findMany: {
            args: Prisma.HandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>[]
          }
          create: {
            args: Prisma.HandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>
          }
          createMany: {
            args: Prisma.HandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>[]
          }
          delete: {
            args: Prisma.HandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>
          }
          update: {
            args: Prisma.HandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>
          }
          deleteMany: {
            args: Prisma.HandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HandPayload>
          }
          aggregate: {
            args: Prisma.HandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHand>
          }
          groupBy: {
            args: Prisma.HandGroupByArgs<ExtArgs>
            result: $Utils.Optional<HandGroupByOutputType>[]
          }
          count: {
            args: Prisma.HandCountArgs<ExtArgs>
            result: $Utils.Optional<HandCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      PhotoTag: {
        payload: Prisma.$PhotoTagPayload<ExtArgs>
        fields: Prisma.PhotoTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          findFirst: {
            args: Prisma.PhotoTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          findMany: {
            args: Prisma.PhotoTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>[]
          }
          create: {
            args: Prisma.PhotoTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          createMany: {
            args: Prisma.PhotoTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>[]
          }
          delete: {
            args: Prisma.PhotoTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          update: {
            args: Prisma.PhotoTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          deleteMany: {
            args: Prisma.PhotoTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          aggregate: {
            args: Prisma.PhotoTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoTag>
          }
          groupBy: {
            args: Prisma.PhotoTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoTagCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    photos: number
    tags: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | AccountCountOutputTypeCountPhotosArgs
    tags?: boolean | AccountCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type PhotoCountOutputType
   */

  export type PhotoCountOutputType = {
    photoTags: number
  }

  export type PhotoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photoTags?: boolean | PhotoCountOutputTypeCountPhotoTagsArgs
  }

  // Custom InputTypes
  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCountOutputType
     */
    select?: PhotoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeCountPhotoTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    photoTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photoTags?: boolean | TagCountOutputTypeCountPhotoTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPhotoTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    fanCount: number | null
    symbolCount: number | null
  }

  export type AnswerSumAggregateOutputType = {
    fanCount: number | null
    symbolCount: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    isStartPlayer: boolean | null
    isDraw: boolean | null
    fanCount: number | null
    symbolCount: number | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    isStartPlayer: boolean | null
    isDraw: boolean | null
    fanCount: number | null
    symbolCount: number | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    isStartPlayer: number
    isDraw: number
    fanCount: number
    symbolCount: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    fanCount?: true
    symbolCount?: true
  }

  export type AnswerSumAggregateInputType = {
    fanCount?: true
    symbolCount?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    isStartPlayer?: true
    isDraw?: true
    fanCount?: true
    symbolCount?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    isStartPlayer?: true
    isDraw?: true
    fanCount?: true
    symbolCount?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    isStartPlayer?: true
    isDraw?: true
    fanCount?: true
    symbolCount?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    isStartPlayer: boolean
    isDraw: boolean
    fanCount: number
    symbolCount: number | null
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isStartPlayer?: boolean
    isDraw?: boolean
    fanCount?: boolean
    symbolCount?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isStartPlayer?: boolean
    isDraw?: boolean
    fanCount?: boolean
    symbolCount?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    isStartPlayer?: boolean
    isDraw?: boolean
    fanCount?: boolean
    symbolCount?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isStartPlayer: boolean
      isDraw: boolean
      fanCount: number
      symbolCount: number | null
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */ 
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly isStartPlayer: FieldRef<"Answer", 'Boolean'>
    readonly isDraw: FieldRef<"Answer", 'Boolean'>
    readonly fanCount: FieldRef<"Answer", 'Int'>
    readonly symbolCount: FieldRef<"Answer", 'Int'>
    readonly isCorrect: FieldRef<"Answer", 'Boolean'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
  }


  /**
   * Model Hand
   */

  export type AggregateHand = {
    _count: HandCountAggregateOutputType | null
    _avg: HandAvgAggregateOutputType | null
    _sum: HandSumAggregateOutputType | null
    _min: HandMinAggregateOutputType | null
    _max: HandMaxAggregateOutputType | null
  }

  export type HandAvgAggregateOutputType = {
    fanCount: number | null
    fanCountForCall: number | null
  }

  export type HandSumAggregateOutputType = {
    fanCount: number | null
    fanCountForCall: number | null
  }

  export type HandMinAggregateOutputType = {
    id: string | null
    name: string | null
    nameKana: string | null
    fanCount: number | null
    fanCountForCall: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nameKana: string | null
    fanCount: number | null
    fanCountForCall: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HandCountAggregateOutputType = {
    id: number
    name: number
    nameKana: number
    fanCount: number
    fanCountForCall: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HandAvgAggregateInputType = {
    fanCount?: true
    fanCountForCall?: true
  }

  export type HandSumAggregateInputType = {
    fanCount?: true
    fanCountForCall?: true
  }

  export type HandMinAggregateInputType = {
    id?: true
    name?: true
    nameKana?: true
    fanCount?: true
    fanCountForCall?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HandMaxAggregateInputType = {
    id?: true
    name?: true
    nameKana?: true
    fanCount?: true
    fanCountForCall?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HandCountAggregateInputType = {
    id?: true
    name?: true
    nameKana?: true
    fanCount?: true
    fanCountForCall?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hand to aggregate.
     */
    where?: HandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hands to fetch.
     */
    orderBy?: HandOrderByWithRelationInput | HandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hands
    **/
    _count?: true | HandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HandMaxAggregateInputType
  }

  export type GetHandAggregateType<T extends HandAggregateArgs> = {
        [P in keyof T & keyof AggregateHand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHand[P]>
      : GetScalarType<T[P], AggregateHand[P]>
  }




  export type HandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HandWhereInput
    orderBy?: HandOrderByWithAggregationInput | HandOrderByWithAggregationInput[]
    by: HandScalarFieldEnum[] | HandScalarFieldEnum
    having?: HandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HandCountAggregateInputType | true
    _avg?: HandAvgAggregateInputType
    _sum?: HandSumAggregateInputType
    _min?: HandMinAggregateInputType
    _max?: HandMaxAggregateInputType
  }

  export type HandGroupByOutputType = {
    id: string
    name: string
    nameKana: string
    fanCount: number
    fanCountForCall: number
    createdAt: Date
    updatedAt: Date
    _count: HandCountAggregateOutputType | null
    _avg: HandAvgAggregateOutputType | null
    _sum: HandSumAggregateOutputType | null
    _min: HandMinAggregateOutputType | null
    _max: HandMaxAggregateOutputType | null
  }

  type GetHandGroupByPayload<T extends HandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HandGroupByOutputType[P]>
            : GetScalarType<T[P], HandGroupByOutputType[P]>
        }
      >
    >


  export type HandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameKana?: boolean
    fanCount?: boolean
    fanCountForCall?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hand"]>

  export type HandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameKana?: boolean
    fanCount?: boolean
    fanCountForCall?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hand"]>

  export type HandSelectScalar = {
    id?: boolean
    name?: boolean
    nameKana?: boolean
    fanCount?: boolean
    fanCountForCall?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $HandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hand"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nameKana: string
      fanCount: number
      fanCountForCall: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hand"]>
    composites: {}
  }

  type HandGetPayload<S extends boolean | null | undefined | HandDefaultArgs> = $Result.GetResult<Prisma.$HandPayload, S>

  type HandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HandCountAggregateInputType | true
    }

  export interface HandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hand'], meta: { name: 'Hand' } }
    /**
     * Find zero or one Hand that matches the filter.
     * @param {HandFindUniqueArgs} args - Arguments to find a Hand
     * @example
     * // Get one Hand
     * const hand = await prisma.hand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HandFindUniqueArgs>(args: SelectSubset<T, HandFindUniqueArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hand that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HandFindUniqueOrThrowArgs} args - Arguments to find a Hand
     * @example
     * // Get one Hand
     * const hand = await prisma.hand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HandFindUniqueOrThrowArgs>(args: SelectSubset<T, HandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HandFindFirstArgs} args - Arguments to find a Hand
     * @example
     * // Get one Hand
     * const hand = await prisma.hand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HandFindFirstArgs>(args?: SelectSubset<T, HandFindFirstArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HandFindFirstOrThrowArgs} args - Arguments to find a Hand
     * @example
     * // Get one Hand
     * const hand = await prisma.hand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HandFindFirstOrThrowArgs>(args?: SelectSubset<T, HandFindFirstOrThrowArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hands
     * const hands = await prisma.hand.findMany()
     * 
     * // Get first 10 Hands
     * const hands = await prisma.hand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const handWithIdOnly = await prisma.hand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HandFindManyArgs>(args?: SelectSubset<T, HandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hand.
     * @param {HandCreateArgs} args - Arguments to create a Hand.
     * @example
     * // Create one Hand
     * const Hand = await prisma.hand.create({
     *   data: {
     *     // ... data to create a Hand
     *   }
     * })
     * 
     */
    create<T extends HandCreateArgs>(args: SelectSubset<T, HandCreateArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hands.
     * @param {HandCreateManyArgs} args - Arguments to create many Hands.
     * @example
     * // Create many Hands
     * const hand = await prisma.hand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HandCreateManyArgs>(args?: SelectSubset<T, HandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hands and returns the data saved in the database.
     * @param {HandCreateManyAndReturnArgs} args - Arguments to create many Hands.
     * @example
     * // Create many Hands
     * const hand = await prisma.hand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hands and only return the `id`
     * const handWithIdOnly = await prisma.hand.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HandCreateManyAndReturnArgs>(args?: SelectSubset<T, HandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hand.
     * @param {HandDeleteArgs} args - Arguments to delete one Hand.
     * @example
     * // Delete one Hand
     * const Hand = await prisma.hand.delete({
     *   where: {
     *     // ... filter to delete one Hand
     *   }
     * })
     * 
     */
    delete<T extends HandDeleteArgs>(args: SelectSubset<T, HandDeleteArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hand.
     * @param {HandUpdateArgs} args - Arguments to update one Hand.
     * @example
     * // Update one Hand
     * const hand = await prisma.hand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HandUpdateArgs>(args: SelectSubset<T, HandUpdateArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hands.
     * @param {HandDeleteManyArgs} args - Arguments to filter Hands to delete.
     * @example
     * // Delete a few Hands
     * const { count } = await prisma.hand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HandDeleteManyArgs>(args?: SelectSubset<T, HandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hands
     * const hand = await prisma.hand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HandUpdateManyArgs>(args: SelectSubset<T, HandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hand.
     * @param {HandUpsertArgs} args - Arguments to update or create a Hand.
     * @example
     * // Update or create a Hand
     * const hand = await prisma.hand.upsert({
     *   create: {
     *     // ... data to create a Hand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hand we want to update
     *   }
     * })
     */
    upsert<T extends HandUpsertArgs>(args: SelectSubset<T, HandUpsertArgs<ExtArgs>>): Prisma__HandClient<$Result.GetResult<Prisma.$HandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HandCountArgs} args - Arguments to filter Hands to count.
     * @example
     * // Count the number of Hands
     * const count = await prisma.hand.count({
     *   where: {
     *     // ... the filter for the Hands we want to count
     *   }
     * })
    **/
    count<T extends HandCountArgs>(
      args?: Subset<T, HandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HandAggregateArgs>(args: Subset<T, HandAggregateArgs>): Prisma.PrismaPromise<GetHandAggregateType<T>>

    /**
     * Group by Hand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HandGroupByArgs['orderBy'] }
        : { orderBy?: HandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hand model
   */
  readonly fields: HandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hand model
   */ 
  interface HandFieldRefs {
    readonly id: FieldRef<"Hand", 'String'>
    readonly name: FieldRef<"Hand", 'String'>
    readonly nameKana: FieldRef<"Hand", 'String'>
    readonly fanCount: FieldRef<"Hand", 'Int'>
    readonly fanCountForCall: FieldRef<"Hand", 'Int'>
    readonly createdAt: FieldRef<"Hand", 'DateTime'>
    readonly updatedAt: FieldRef<"Hand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hand findUnique
   */
  export type HandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * Filter, which Hand to fetch.
     */
    where: HandWhereUniqueInput
  }

  /**
   * Hand findUniqueOrThrow
   */
  export type HandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * Filter, which Hand to fetch.
     */
    where: HandWhereUniqueInput
  }

  /**
   * Hand findFirst
   */
  export type HandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * Filter, which Hand to fetch.
     */
    where?: HandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hands to fetch.
     */
    orderBy?: HandOrderByWithRelationInput | HandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hands.
     */
    cursor?: HandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hands.
     */
    distinct?: HandScalarFieldEnum | HandScalarFieldEnum[]
  }

  /**
   * Hand findFirstOrThrow
   */
  export type HandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * Filter, which Hand to fetch.
     */
    where?: HandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hands to fetch.
     */
    orderBy?: HandOrderByWithRelationInput | HandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hands.
     */
    cursor?: HandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hands.
     */
    distinct?: HandScalarFieldEnum | HandScalarFieldEnum[]
  }

  /**
   * Hand findMany
   */
  export type HandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * Filter, which Hands to fetch.
     */
    where?: HandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hands to fetch.
     */
    orderBy?: HandOrderByWithRelationInput | HandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hands.
     */
    cursor?: HandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hands.
     */
    skip?: number
    distinct?: HandScalarFieldEnum | HandScalarFieldEnum[]
  }

  /**
   * Hand create
   */
  export type HandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * The data needed to create a Hand.
     */
    data: XOR<HandCreateInput, HandUncheckedCreateInput>
  }

  /**
   * Hand createMany
   */
  export type HandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hands.
     */
    data: HandCreateManyInput | HandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hand createManyAndReturn
   */
  export type HandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Hands.
     */
    data: HandCreateManyInput | HandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hand update
   */
  export type HandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * The data needed to update a Hand.
     */
    data: XOR<HandUpdateInput, HandUncheckedUpdateInput>
    /**
     * Choose, which Hand to update.
     */
    where: HandWhereUniqueInput
  }

  /**
   * Hand updateMany
   */
  export type HandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hands.
     */
    data: XOR<HandUpdateManyMutationInput, HandUncheckedUpdateManyInput>
    /**
     * Filter which Hands to update
     */
    where?: HandWhereInput
  }

  /**
   * Hand upsert
   */
  export type HandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * The filter to search for the Hand to update in case it exists.
     */
    where: HandWhereUniqueInput
    /**
     * In case the Hand found by the `where` argument doesn't exist, create a new Hand with this data.
     */
    create: XOR<HandCreateInput, HandUncheckedCreateInput>
    /**
     * In case the Hand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HandUpdateInput, HandUncheckedUpdateInput>
  }

  /**
   * Hand delete
   */
  export type HandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
    /**
     * Filter which Hand to delete.
     */
    where: HandWhereUniqueInput
  }

  /**
   * Hand deleteMany
   */
  export type HandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hands to delete
     */
    where?: HandWhereInput
  }

  /**
   * Hand without action
   */
  export type HandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hand
     */
    select?: HandSelect<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photos?: boolean | Account$photosArgs<ExtArgs>
    tags?: boolean | Account$tagsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Account$photosArgs<ExtArgs>
    tags?: boolean | Account$tagsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Account$photosArgs<ExtArgs> = {}>(args?: Subset<T, Account$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Account$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Account$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.photos
   */
  export type Account$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Account.tags
   */
  export type Account$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    fileName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    fileName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    accountId: number
    fileName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    accountId?: true
    fileName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    accountId?: true
    fileName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    accountId?: true
    fileName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    accountId: string
    fileName: string
    createdAt: Date
    updatedAt: Date
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    fileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoTags?: boolean | Photo$photoTagsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    fileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    accountId?: boolean
    fileName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photoTags?: boolean | Photo$photoTagsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      photoTags: Prisma.$PhotoTagPayload<ExtArgs>[]
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      fileName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photoTags<T extends Photo$photoTagsArgs<ExtArgs> = {}>(args?: Subset<T, Photo$photoTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "findMany"> | Null>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */ 
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly accountId: FieldRef<"Photo", 'String'>
    readonly fileName: FieldRef<"Photo", 'String'>
    readonly createdAt: FieldRef<"Photo", 'DateTime'>
    readonly updatedAt: FieldRef<"Photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
  }

  /**
   * Photo.photoTags
   */
  export type Photo$photoTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    where?: PhotoTagWhereInput
    orderBy?: PhotoTagOrderByWithRelationInput | PhotoTagOrderByWithRelationInput[]
    cursor?: PhotoTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    accountId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    accountId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoTags?: boolean | Tag$photoTagsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    accountId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photoTags?: boolean | Tag$photoTagsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      photoTags: Prisma.$PhotoTagPayload<ExtArgs>[]
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photoTags<T extends Tag$photoTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$photoTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "findMany"> | Null>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly accountId: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.photoTags
   */
  export type Tag$photoTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    where?: PhotoTagWhereInput
    orderBy?: PhotoTagOrderByWithRelationInput | PhotoTagOrderByWithRelationInput[]
    cursor?: PhotoTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model PhotoTag
   */

  export type AggregatePhotoTag = {
    _count: PhotoTagCountAggregateOutputType | null
    _min: PhotoTagMinAggregateOutputType | null
    _max: PhotoTagMaxAggregateOutputType | null
  }

  export type PhotoTagMinAggregateOutputType = {
    photoId: string | null
    tagId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoTagMaxAggregateOutputType = {
    photoId: string | null
    tagId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoTagCountAggregateOutputType = {
    photoId: number
    tagId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhotoTagMinAggregateInputType = {
    photoId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoTagMaxAggregateInputType = {
    photoId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoTagCountAggregateInputType = {
    photoId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhotoTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoTag to aggregate.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?: PhotoTagOrderByWithRelationInput | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoTags
    **/
    _count?: true | PhotoTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoTagMaxAggregateInputType
  }

  export type GetPhotoTagAggregateType<T extends PhotoTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoTag[P]>
      : GetScalarType<T[P], AggregatePhotoTag[P]>
  }




  export type PhotoTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoTagWhereInput
    orderBy?: PhotoTagOrderByWithAggregationInput | PhotoTagOrderByWithAggregationInput[]
    by: PhotoTagScalarFieldEnum[] | PhotoTagScalarFieldEnum
    having?: PhotoTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoTagCountAggregateInputType | true
    _min?: PhotoTagMinAggregateInputType
    _max?: PhotoTagMaxAggregateInputType
  }

  export type PhotoTagGroupByOutputType = {
    photoId: string
    tagId: string
    createdAt: Date
    updatedAt: Date
    _count: PhotoTagCountAggregateOutputType | null
    _min: PhotoTagMinAggregateOutputType | null
    _max: PhotoTagMaxAggregateOutputType | null
  }

  type GetPhotoTagGroupByPayload<T extends PhotoTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoTagGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoTagGroupByOutputType[P]>
        }
      >
    >


  export type PhotoTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    photoId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoTag"]>

  export type PhotoTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    photoId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoTag"]>

  export type PhotoTagSelectScalar = {
    photoId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhotoTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PhotoTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PhotoTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoTag"
    objects: {
      photo: Prisma.$PhotoPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      photoId: string
      tagId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["photoTag"]>
    composites: {}
  }

  type PhotoTagGetPayload<S extends boolean | null | undefined | PhotoTagDefaultArgs> = $Result.GetResult<Prisma.$PhotoTagPayload, S>

  type PhotoTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhotoTagCountAggregateInputType | true
    }

  export interface PhotoTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoTag'], meta: { name: 'PhotoTag' } }
    /**
     * Find zero or one PhotoTag that matches the filter.
     * @param {PhotoTagFindUniqueArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoTagFindUniqueArgs>(args: SelectSubset<T, PhotoTagFindUniqueArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PhotoTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhotoTagFindUniqueOrThrowArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PhotoTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagFindFirstArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoTagFindFirstArgs>(args?: SelectSubset<T, PhotoTagFindFirstArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PhotoTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagFindFirstOrThrowArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PhotoTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoTags
     * const photoTags = await prisma.photoTag.findMany()
     * 
     * // Get first 10 PhotoTags
     * const photoTags = await prisma.photoTag.findMany({ take: 10 })
     * 
     * // Only select the `photoId`
     * const photoTagWithPhotoIdOnly = await prisma.photoTag.findMany({ select: { photoId: true } })
     * 
     */
    findMany<T extends PhotoTagFindManyArgs>(args?: SelectSubset<T, PhotoTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PhotoTag.
     * @param {PhotoTagCreateArgs} args - Arguments to create a PhotoTag.
     * @example
     * // Create one PhotoTag
     * const PhotoTag = await prisma.photoTag.create({
     *   data: {
     *     // ... data to create a PhotoTag
     *   }
     * })
     * 
     */
    create<T extends PhotoTagCreateArgs>(args: SelectSubset<T, PhotoTagCreateArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PhotoTags.
     * @param {PhotoTagCreateManyArgs} args - Arguments to create many PhotoTags.
     * @example
     * // Create many PhotoTags
     * const photoTag = await prisma.photoTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoTagCreateManyArgs>(args?: SelectSubset<T, PhotoTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoTags and returns the data saved in the database.
     * @param {PhotoTagCreateManyAndReturnArgs} args - Arguments to create many PhotoTags.
     * @example
     * // Create many PhotoTags
     * const photoTag = await prisma.photoTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhotoTags and only return the `photoId`
     * const photoTagWithPhotoIdOnly = await prisma.photoTag.createManyAndReturn({ 
     *   select: { photoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PhotoTag.
     * @param {PhotoTagDeleteArgs} args - Arguments to delete one PhotoTag.
     * @example
     * // Delete one PhotoTag
     * const PhotoTag = await prisma.photoTag.delete({
     *   where: {
     *     // ... filter to delete one PhotoTag
     *   }
     * })
     * 
     */
    delete<T extends PhotoTagDeleteArgs>(args: SelectSubset<T, PhotoTagDeleteArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PhotoTag.
     * @param {PhotoTagUpdateArgs} args - Arguments to update one PhotoTag.
     * @example
     * // Update one PhotoTag
     * const photoTag = await prisma.photoTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoTagUpdateArgs>(args: SelectSubset<T, PhotoTagUpdateArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PhotoTags.
     * @param {PhotoTagDeleteManyArgs} args - Arguments to filter PhotoTags to delete.
     * @example
     * // Delete a few PhotoTags
     * const { count } = await prisma.photoTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoTagDeleteManyArgs>(args?: SelectSubset<T, PhotoTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoTags
     * const photoTag = await prisma.photoTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoTagUpdateManyArgs>(args: SelectSubset<T, PhotoTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotoTag.
     * @param {PhotoTagUpsertArgs} args - Arguments to update or create a PhotoTag.
     * @example
     * // Update or create a PhotoTag
     * const photoTag = await prisma.photoTag.upsert({
     *   create: {
     *     // ... data to create a PhotoTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoTag we want to update
     *   }
     * })
     */
    upsert<T extends PhotoTagUpsertArgs>(args: SelectSubset<T, PhotoTagUpsertArgs<ExtArgs>>): Prisma__PhotoTagClient<$Result.GetResult<Prisma.$PhotoTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PhotoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagCountArgs} args - Arguments to filter PhotoTags to count.
     * @example
     * // Count the number of PhotoTags
     * const count = await prisma.photoTag.count({
     *   where: {
     *     // ... the filter for the PhotoTags we want to count
     *   }
     * })
    **/
    count<T extends PhotoTagCountArgs>(
      args?: Subset<T, PhotoTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoTagAggregateArgs>(args: Subset<T, PhotoTagAggregateArgs>): Prisma.PrismaPromise<GetPhotoTagAggregateType<T>>

    /**
     * Group by PhotoTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoTagGroupByArgs['orderBy'] }
        : { orderBy?: PhotoTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoTag model
   */
  readonly fields: PhotoTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photo<T extends PhotoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotoDefaultArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotoTag model
   */ 
  interface PhotoTagFieldRefs {
    readonly photoId: FieldRef<"PhotoTag", 'String'>
    readonly tagId: FieldRef<"PhotoTag", 'String'>
    readonly createdAt: FieldRef<"PhotoTag", 'DateTime'>
    readonly updatedAt: FieldRef<"PhotoTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhotoTag findUnique
   */
  export type PhotoTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag findUniqueOrThrow
   */
  export type PhotoTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag findFirst
   */
  export type PhotoTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?: PhotoTagOrderByWithRelationInput | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoTags.
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoTags.
     */
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * PhotoTag findFirstOrThrow
   */
  export type PhotoTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?: PhotoTagOrderByWithRelationInput | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoTags.
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoTags.
     */
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * PhotoTag findMany
   */
  export type PhotoTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTags to fetch.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?: PhotoTagOrderByWithRelationInput | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoTags.
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * PhotoTag create
   */
  export type PhotoTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoTag.
     */
    data: XOR<PhotoTagCreateInput, PhotoTagUncheckedCreateInput>
  }

  /**
   * PhotoTag createMany
   */
  export type PhotoTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoTags.
     */
    data: PhotoTagCreateManyInput | PhotoTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoTag createManyAndReturn
   */
  export type PhotoTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PhotoTags.
     */
    data: PhotoTagCreateManyInput | PhotoTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoTag update
   */
  export type PhotoTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoTag.
     */
    data: XOR<PhotoTagUpdateInput, PhotoTagUncheckedUpdateInput>
    /**
     * Choose, which PhotoTag to update.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag updateMany
   */
  export type PhotoTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoTags.
     */
    data: XOR<PhotoTagUpdateManyMutationInput, PhotoTagUncheckedUpdateManyInput>
    /**
     * Filter which PhotoTags to update
     */
    where?: PhotoTagWhereInput
  }

  /**
   * PhotoTag upsert
   */
  export type PhotoTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoTag to update in case it exists.
     */
    where: PhotoTagWhereUniqueInput
    /**
     * In case the PhotoTag found by the `where` argument doesn't exist, create a new PhotoTag with this data.
     */
    create: XOR<PhotoTagCreateInput, PhotoTagUncheckedCreateInput>
    /**
     * In case the PhotoTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoTagUpdateInput, PhotoTagUncheckedUpdateInput>
  }

  /**
   * PhotoTag delete
   */
  export type PhotoTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter which PhotoTag to delete.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag deleteMany
   */
  export type PhotoTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoTags to delete
     */
    where?: PhotoTagWhereInput
  }

  /**
   * PhotoTag without action
   */
  export type PhotoTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    isStartPlayer: 'isStartPlayer',
    isDraw: 'isDraw',
    fanCount: 'fanCount',
    symbolCount: 'symbolCount',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const HandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameKana: 'nameKana',
    fanCount: 'fanCount',
    fanCountForCall: 'fanCountForCall',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HandScalarFieldEnum = (typeof HandScalarFieldEnum)[keyof typeof HandScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    fileName: 'fileName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PhotoTagScalarFieldEnum: {
    photoId: 'photoId',
    tagId: 'tagId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhotoTagScalarFieldEnum = (typeof PhotoTagScalarFieldEnum)[keyof typeof PhotoTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    isStartPlayer?: BoolFilter<"Answer"> | boolean
    isDraw?: BoolFilter<"Answer"> | boolean
    fanCount?: IntFilter<"Answer"> | number
    symbolCount?: IntNullableFilter<"Answer"> | number | null
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    isStartPlayer?: SortOrder
    isDraw?: SortOrder
    fanCount?: SortOrder
    symbolCount?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    isStartPlayer?: BoolFilter<"Answer"> | boolean
    isDraw?: BoolFilter<"Answer"> | boolean
    fanCount?: IntFilter<"Answer"> | number
    symbolCount?: IntNullableFilter<"Answer"> | number | null
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    isStartPlayer?: SortOrder
    isDraw?: SortOrder
    fanCount?: SortOrder
    symbolCount?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    isStartPlayer?: BoolWithAggregatesFilter<"Answer"> | boolean
    isDraw?: BoolWithAggregatesFilter<"Answer"> | boolean
    fanCount?: IntWithAggregatesFilter<"Answer"> | number
    symbolCount?: IntNullableWithAggregatesFilter<"Answer"> | number | null
    isCorrect?: BoolWithAggregatesFilter<"Answer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type HandWhereInput = {
    AND?: HandWhereInput | HandWhereInput[]
    OR?: HandWhereInput[]
    NOT?: HandWhereInput | HandWhereInput[]
    id?: StringFilter<"Hand"> | string
    name?: StringFilter<"Hand"> | string
    nameKana?: StringFilter<"Hand"> | string
    fanCount?: IntFilter<"Hand"> | number
    fanCountForCall?: IntFilter<"Hand"> | number
    createdAt?: DateTimeFilter<"Hand"> | Date | string
    updatedAt?: DateTimeFilter<"Hand"> | Date | string
  }

  export type HandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    fanCount?: SortOrder
    fanCountForCall?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HandWhereInput | HandWhereInput[]
    OR?: HandWhereInput[]
    NOT?: HandWhereInput | HandWhereInput[]
    name?: StringFilter<"Hand"> | string
    nameKana?: StringFilter<"Hand"> | string
    fanCount?: IntFilter<"Hand"> | number
    fanCountForCall?: IntFilter<"Hand"> | number
    createdAt?: DateTimeFilter<"Hand"> | Date | string
    updatedAt?: DateTimeFilter<"Hand"> | Date | string
  }, "id">

  export type HandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    fanCount?: SortOrder
    fanCountForCall?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HandCountOrderByAggregateInput
    _avg?: HandAvgOrderByAggregateInput
    _max?: HandMaxOrderByAggregateInput
    _min?: HandMinOrderByAggregateInput
    _sum?: HandSumOrderByAggregateInput
  }

  export type HandScalarWhereWithAggregatesInput = {
    AND?: HandScalarWhereWithAggregatesInput | HandScalarWhereWithAggregatesInput[]
    OR?: HandScalarWhereWithAggregatesInput[]
    NOT?: HandScalarWhereWithAggregatesInput | HandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hand"> | string
    name?: StringWithAggregatesFilter<"Hand"> | string
    nameKana?: StringWithAggregatesFilter<"Hand"> | string
    fanCount?: IntWithAggregatesFilter<"Hand"> | number
    fanCountForCall?: IntWithAggregatesFilter<"Hand"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hand"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    photos?: PhotoListRelationFilter
    tags?: TagListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photos?: PhotoOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    photos?: PhotoListRelationFilter
    tags?: TagListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    accountId?: StringFilter<"Photo"> | string
    fileName?: StringFilter<"Photo"> | string
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    updatedAt?: DateTimeFilter<"Photo"> | Date | string
    photoTags?: PhotoTagListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoTags?: PhotoTagOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    accountId?: StringFilter<"Photo"> | string
    fileName?: StringFilter<"Photo"> | string
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    updatedAt?: DateTimeFilter<"Photo"> | Date | string
    photoTags?: PhotoTagListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    accountId?: StringWithAggregatesFilter<"Photo"> | string
    fileName?: StringWithAggregatesFilter<"Photo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    accountId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    photoTags?: PhotoTagListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoTags?: PhotoTagOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId_name?: TagAccountIdNameCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    accountId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    photoTags?: PhotoTagListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id" | "accountId_name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    accountId?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type PhotoTagWhereInput = {
    AND?: PhotoTagWhereInput | PhotoTagWhereInput[]
    OR?: PhotoTagWhereInput[]
    NOT?: PhotoTagWhereInput | PhotoTagWhereInput[]
    photoId?: StringFilter<"PhotoTag"> | string
    tagId?: StringFilter<"PhotoTag"> | string
    createdAt?: DateTimeFilter<"PhotoTag"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoTag"> | Date | string
    photo?: XOR<PhotoRelationFilter, PhotoWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type PhotoTagOrderByWithRelationInput = {
    photoId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photo?: PhotoOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type PhotoTagWhereUniqueInput = Prisma.AtLeast<{
    photoId_tagId?: PhotoTagPhotoIdTagIdCompoundUniqueInput
    AND?: PhotoTagWhereInput | PhotoTagWhereInput[]
    OR?: PhotoTagWhereInput[]
    NOT?: PhotoTagWhereInput | PhotoTagWhereInput[]
    photoId?: StringFilter<"PhotoTag"> | string
    tagId?: StringFilter<"PhotoTag"> | string
    createdAt?: DateTimeFilter<"PhotoTag"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoTag"> | Date | string
    photo?: XOR<PhotoRelationFilter, PhotoWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }, "photoId_tagId">

  export type PhotoTagOrderByWithAggregationInput = {
    photoId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhotoTagCountOrderByAggregateInput
    _max?: PhotoTagMaxOrderByAggregateInput
    _min?: PhotoTagMinOrderByAggregateInput
  }

  export type PhotoTagScalarWhereWithAggregatesInput = {
    AND?: PhotoTagScalarWhereWithAggregatesInput | PhotoTagScalarWhereWithAggregatesInput[]
    OR?: PhotoTagScalarWhereWithAggregatesInput[]
    NOT?: PhotoTagScalarWhereWithAggregatesInput | PhotoTagScalarWhereWithAggregatesInput[]
    photoId?: StringWithAggregatesFilter<"PhotoTag"> | string
    tagId?: StringWithAggregatesFilter<"PhotoTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhotoTag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhotoTag"> | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    isStartPlayer: boolean
    isDraw: boolean
    fanCount: number
    symbolCount?: number | null
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    isStartPlayer: boolean
    isDraw: boolean
    fanCount: number
    symbolCount?: number | null
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isStartPlayer?: BoolFieldUpdateOperationsInput | boolean
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    fanCount?: IntFieldUpdateOperationsInput | number
    symbolCount?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isStartPlayer?: BoolFieldUpdateOperationsInput | boolean
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    fanCount?: IntFieldUpdateOperationsInput | number
    symbolCount?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    isStartPlayer: boolean
    isDraw: boolean
    fanCount: number
    symbolCount?: number | null
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isStartPlayer?: BoolFieldUpdateOperationsInput | boolean
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    fanCount?: IntFieldUpdateOperationsInput | number
    symbolCount?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isStartPlayer?: BoolFieldUpdateOperationsInput | boolean
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    fanCount?: IntFieldUpdateOperationsInput | number
    symbolCount?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HandCreateInput = {
    id?: string
    name: string
    nameKana: string
    fanCount: number
    fanCountForCall: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HandUncheckedCreateInput = {
    id?: string
    name: string
    nameKana: string
    fanCount: number
    fanCountForCall: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameKana?: StringFieldUpdateOperationsInput | string
    fanCount?: IntFieldUpdateOperationsInput | number
    fanCountForCall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameKana?: StringFieldUpdateOperationsInput | string
    fanCount?: IntFieldUpdateOperationsInput | number
    fanCountForCall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HandCreateManyInput = {
    id?: string
    name: string
    nameKana: string
    fanCount: number
    fanCountForCall: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameKana?: StringFieldUpdateOperationsInput | string
    fanCount?: IntFieldUpdateOperationsInput | number
    fanCountForCall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameKana?: StringFieldUpdateOperationsInput | string
    fanCount?: IntFieldUpdateOperationsInput | number
    fanCountForCall?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoCreateNestedManyWithoutAccountInput
    tags?: TagCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutAccountInput
    tags?: TagUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutAccountNestedInput
    tags?: TagUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutAccountNestedInput
    tags?: TagUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    id?: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagCreateNestedManyWithoutPhotoInput
    account: AccountCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    accountId: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUpdateManyWithoutPhotoNestedInput
    account?: AccountUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoCreateManyInput = {
    id?: string
    accountId: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagCreateNestedManyWithoutTagInput
    account: AccountCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    accountId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUpdateManyWithoutTagNestedInput
    account?: AccountUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    accountId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    photo: PhotoCreateNestedOneWithoutPhotoTagsInput
    tag: TagCreateNestedOneWithoutPhotoTagsInput
  }

  export type PhotoTagUncheckedCreateInput = {
    photoId: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: PhotoUpdateOneRequiredWithoutPhotoTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPhotoTagsNestedInput
  }

  export type PhotoTagUncheckedUpdateInput = {
    photoId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagCreateManyInput = {
    photoId: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagUncheckedUpdateManyInput = {
    photoId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    isStartPlayer?: SortOrder
    isDraw?: SortOrder
    fanCount?: SortOrder
    symbolCount?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    fanCount?: SortOrder
    symbolCount?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    isStartPlayer?: SortOrder
    isDraw?: SortOrder
    fanCount?: SortOrder
    symbolCount?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    isStartPlayer?: SortOrder
    isDraw?: SortOrder
    fanCount?: SortOrder
    symbolCount?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    fanCount?: SortOrder
    symbolCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    fanCount?: SortOrder
    fanCountForCall?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HandAvgOrderByAggregateInput = {
    fanCount?: SortOrder
    fanCountForCall?: SortOrder
  }

  export type HandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    fanCount?: SortOrder
    fanCountForCall?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    fanCount?: SortOrder
    fanCountForCall?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HandSumOrderByAggregateInput = {
    fanCount?: SortOrder
    fanCountForCall?: SortOrder
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoTagListRelationFilter = {
    every?: PhotoTagWhereInput
    some?: PhotoTagWhereInput
    none?: PhotoTagWhereInput
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type PhotoTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagAccountIdNameCompoundUniqueInput = {
    accountId: string
    name: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoRelationFilter = {
    is?: PhotoWhereInput
    isNot?: PhotoWhereInput
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PhotoTagPhotoIdTagIdCompoundUniqueInput = {
    photoId: string
    tagId: string
  }

  export type PhotoTagCountOrderByAggregateInput = {
    photoId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoTagMaxOrderByAggregateInput = {
    photoId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoTagMinOrderByAggregateInput = {
    photoId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PhotoCreateNestedManyWithoutAccountInput = {
    create?: XOR<PhotoCreateWithoutAccountInput, PhotoUncheckedCreateWithoutAccountInput> | PhotoCreateWithoutAccountInput[] | PhotoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAccountInput | PhotoCreateOrConnectWithoutAccountInput[]
    createMany?: PhotoCreateManyAccountInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutAccountInput = {
    create?: XOR<TagCreateWithoutAccountInput, TagUncheckedCreateWithoutAccountInput> | TagCreateWithoutAccountInput[] | TagUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAccountInput | TagCreateOrConnectWithoutAccountInput[]
    createMany?: TagCreateManyAccountInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PhotoCreateWithoutAccountInput, PhotoUncheckedCreateWithoutAccountInput> | PhotoCreateWithoutAccountInput[] | PhotoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAccountInput | PhotoCreateOrConnectWithoutAccountInput[]
    createMany?: PhotoCreateManyAccountInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TagCreateWithoutAccountInput, TagUncheckedCreateWithoutAccountInput> | TagCreateWithoutAccountInput[] | TagUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAccountInput | TagCreateOrConnectWithoutAccountInput[]
    createMany?: TagCreateManyAccountInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type PhotoUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PhotoCreateWithoutAccountInput, PhotoUncheckedCreateWithoutAccountInput> | PhotoCreateWithoutAccountInput[] | PhotoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAccountInput | PhotoCreateOrConnectWithoutAccountInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAccountInput | PhotoUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PhotoCreateManyAccountInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAccountInput | PhotoUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAccountInput | PhotoUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type TagUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TagCreateWithoutAccountInput, TagUncheckedCreateWithoutAccountInput> | TagCreateWithoutAccountInput[] | TagUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAccountInput | TagCreateOrConnectWithoutAccountInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutAccountInput | TagUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TagCreateManyAccountInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutAccountInput | TagUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TagUpdateManyWithWhereWithoutAccountInput | TagUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PhotoCreateWithoutAccountInput, PhotoUncheckedCreateWithoutAccountInput> | PhotoCreateWithoutAccountInput[] | PhotoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAccountInput | PhotoCreateOrConnectWithoutAccountInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAccountInput | PhotoUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PhotoCreateManyAccountInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAccountInput | PhotoUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAccountInput | PhotoUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TagCreateWithoutAccountInput, TagUncheckedCreateWithoutAccountInput> | TagCreateWithoutAccountInput[] | TagUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TagCreateOrConnectWithoutAccountInput | TagCreateOrConnectWithoutAccountInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutAccountInput | TagUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TagCreateManyAccountInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutAccountInput | TagUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TagUpdateManyWithWhereWithoutAccountInput | TagUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type PhotoTagCreateNestedManyWithoutPhotoInput = {
    create?: XOR<PhotoTagCreateWithoutPhotoInput, PhotoTagUncheckedCreateWithoutPhotoInput> | PhotoTagCreateWithoutPhotoInput[] | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutPhotoInput | PhotoTagCreateOrConnectWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutPhotosInput = {
    create?: XOR<AccountCreateWithoutPhotosInput, AccountUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPhotosInput
    connect?: AccountWhereUniqueInput
  }

  export type PhotoTagUncheckedCreateNestedManyWithoutPhotoInput = {
    create?: XOR<PhotoTagCreateWithoutPhotoInput, PhotoTagUncheckedCreateWithoutPhotoInput> | PhotoTagCreateWithoutPhotoInput[] | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutPhotoInput | PhotoTagCreateOrConnectWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type PhotoTagUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<PhotoTagCreateWithoutPhotoInput, PhotoTagUncheckedCreateWithoutPhotoInput> | PhotoTagCreateWithoutPhotoInput[] | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutPhotoInput | PhotoTagCreateOrConnectWithoutPhotoInput[]
    upsert?: PhotoTagUpsertWithWhereUniqueWithoutPhotoInput | PhotoTagUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?: PhotoTagUpdateWithWhereUniqueWithoutPhotoInput | PhotoTagUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?: PhotoTagUpdateManyWithWhereWithoutPhotoInput | PhotoTagUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type AccountUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<AccountCreateWithoutPhotosInput, AccountUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPhotosInput
    upsert?: AccountUpsertWithoutPhotosInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPhotosInput, AccountUpdateWithoutPhotosInput>, AccountUncheckedUpdateWithoutPhotosInput>
  }

  export type PhotoTagUncheckedUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<PhotoTagCreateWithoutPhotoInput, PhotoTagUncheckedCreateWithoutPhotoInput> | PhotoTagCreateWithoutPhotoInput[] | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutPhotoInput | PhotoTagCreateOrConnectWithoutPhotoInput[]
    upsert?: PhotoTagUpsertWithWhereUniqueWithoutPhotoInput | PhotoTagUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?: PhotoTagUpdateWithWhereUniqueWithoutPhotoInput | PhotoTagUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?: PhotoTagUpdateManyWithWhereWithoutPhotoInput | PhotoTagUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type PhotoTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PhotoTagCreateWithoutTagInput, PhotoTagUncheckedCreateWithoutTagInput> | PhotoTagCreateWithoutTagInput[] | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutTagInput | PhotoTagCreateOrConnectWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutTagsInput = {
    create?: XOR<AccountCreateWithoutTagsInput, AccountUncheckedCreateWithoutTagsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTagsInput
    connect?: AccountWhereUniqueInput
  }

  export type PhotoTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PhotoTagCreateWithoutTagInput, PhotoTagUncheckedCreateWithoutTagInput> | PhotoTagCreateWithoutTagInput[] | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutTagInput | PhotoTagCreateOrConnectWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type PhotoTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PhotoTagCreateWithoutTagInput, PhotoTagUncheckedCreateWithoutTagInput> | PhotoTagCreateWithoutTagInput[] | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutTagInput | PhotoTagCreateOrConnectWithoutTagInput[]
    upsert?: PhotoTagUpsertWithWhereUniqueWithoutTagInput | PhotoTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?: PhotoTagUpdateWithWhereUniqueWithoutTagInput | PhotoTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PhotoTagUpdateManyWithWhereWithoutTagInput | PhotoTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type AccountUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<AccountCreateWithoutTagsInput, AccountUncheckedCreateWithoutTagsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTagsInput
    upsert?: AccountUpsertWithoutTagsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTagsInput, AccountUpdateWithoutTagsInput>, AccountUncheckedUpdateWithoutTagsInput>
  }

  export type PhotoTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PhotoTagCreateWithoutTagInput, PhotoTagUncheckedCreateWithoutTagInput> | PhotoTagCreateWithoutTagInput[] | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PhotoTagCreateOrConnectWithoutTagInput | PhotoTagCreateOrConnectWithoutTagInput[]
    upsert?: PhotoTagUpsertWithWhereUniqueWithoutTagInput | PhotoTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?: PhotoTagUpdateWithWhereUniqueWithoutTagInput | PhotoTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PhotoTagUpdateManyWithWhereWithoutTagInput | PhotoTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type PhotoCreateNestedOneWithoutPhotoTagsInput = {
    create?: XOR<PhotoCreateWithoutPhotoTagsInput, PhotoUncheckedCreateWithoutPhotoTagsInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPhotoTagsInput
    connect?: PhotoWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPhotoTagsInput = {
    create?: XOR<TagCreateWithoutPhotoTagsInput, TagUncheckedCreateWithoutPhotoTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPhotoTagsInput
    connect?: TagWhereUniqueInput
  }

  export type PhotoUpdateOneRequiredWithoutPhotoTagsNestedInput = {
    create?: XOR<PhotoCreateWithoutPhotoTagsInput, PhotoUncheckedCreateWithoutPhotoTagsInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPhotoTagsInput
    upsert?: PhotoUpsertWithoutPhotoTagsInput
    connect?: PhotoWhereUniqueInput
    update?: XOR<XOR<PhotoUpdateToOneWithWhereWithoutPhotoTagsInput, PhotoUpdateWithoutPhotoTagsInput>, PhotoUncheckedUpdateWithoutPhotoTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPhotoTagsNestedInput = {
    create?: XOR<TagCreateWithoutPhotoTagsInput, TagUncheckedCreateWithoutPhotoTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPhotoTagsInput
    upsert?: TagUpsertWithoutPhotoTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPhotoTagsInput, TagUpdateWithoutPhotoTagsInput>, TagUncheckedUpdateWithoutPhotoTagsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PhotoCreateWithoutAccountInput = {
    id?: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateWithoutAccountInput = {
    id?: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoCreateOrConnectWithoutAccountInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutAccountInput, PhotoUncheckedCreateWithoutAccountInput>
  }

  export type PhotoCreateManyAccountInputEnvelope = {
    data: PhotoCreateManyAccountInput | PhotoCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutAccountInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photoTags?: PhotoTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutAccountInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutAccountInput, TagUncheckedCreateWithoutAccountInput>
  }

  export type TagCreateManyAccountInputEnvelope = {
    data: TagCreateManyAccountInput | TagCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type PhotoUpsertWithWhereUniqueWithoutAccountInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutAccountInput, PhotoUncheckedUpdateWithoutAccountInput>
    create: XOR<PhotoCreateWithoutAccountInput, PhotoUncheckedCreateWithoutAccountInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutAccountInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutAccountInput, PhotoUncheckedUpdateWithoutAccountInput>
  }

  export type PhotoUpdateManyWithWhereWithoutAccountInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutAccountInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    accountId?: StringFilter<"Photo"> | string
    fileName?: StringFilter<"Photo"> | string
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    updatedAt?: DateTimeFilter<"Photo"> | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutAccountInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutAccountInput, TagUncheckedUpdateWithoutAccountInput>
    create: XOR<TagCreateWithoutAccountInput, TagUncheckedCreateWithoutAccountInput>
  }

  export type TagUpdateWithWhereUniqueWithoutAccountInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutAccountInput, TagUncheckedUpdateWithoutAccountInput>
  }

  export type TagUpdateManyWithWhereWithoutAccountInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutAccountInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    accountId?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type PhotoTagCreateWithoutPhotoInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tag: TagCreateNestedOneWithoutPhotoTagsInput
  }

  export type PhotoTagUncheckedCreateWithoutPhotoInput = {
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoTagCreateOrConnectWithoutPhotoInput = {
    where: PhotoTagWhereUniqueInput
    create: XOR<PhotoTagCreateWithoutPhotoInput, PhotoTagUncheckedCreateWithoutPhotoInput>
  }

  export type PhotoTagCreateManyPhotoInputEnvelope = {
    data: PhotoTagCreateManyPhotoInput | PhotoTagCreateManyPhotoInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutPhotosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPhotosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutPhotosInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPhotosInput, AccountUncheckedCreateWithoutPhotosInput>
  }

  export type PhotoTagUpsertWithWhereUniqueWithoutPhotoInput = {
    where: PhotoTagWhereUniqueInput
    update: XOR<PhotoTagUpdateWithoutPhotoInput, PhotoTagUncheckedUpdateWithoutPhotoInput>
    create: XOR<PhotoTagCreateWithoutPhotoInput, PhotoTagUncheckedCreateWithoutPhotoInput>
  }

  export type PhotoTagUpdateWithWhereUniqueWithoutPhotoInput = {
    where: PhotoTagWhereUniqueInput
    data: XOR<PhotoTagUpdateWithoutPhotoInput, PhotoTagUncheckedUpdateWithoutPhotoInput>
  }

  export type PhotoTagUpdateManyWithWhereWithoutPhotoInput = {
    where: PhotoTagScalarWhereInput
    data: XOR<PhotoTagUpdateManyMutationInput, PhotoTagUncheckedUpdateManyWithoutPhotoInput>
  }

  export type PhotoTagScalarWhereInput = {
    AND?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
    OR?: PhotoTagScalarWhereInput[]
    NOT?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
    photoId?: StringFilter<"PhotoTag"> | string
    tagId?: StringFilter<"PhotoTag"> | string
    createdAt?: DateTimeFilter<"PhotoTag"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoTag"> | Date | string
  }

  export type AccountUpsertWithoutPhotosInput = {
    update: XOR<AccountUpdateWithoutPhotosInput, AccountUncheckedUpdateWithoutPhotosInput>
    create: XOR<AccountCreateWithoutPhotosInput, AccountUncheckedCreateWithoutPhotosInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPhotosInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPhotosInput, AccountUncheckedUpdateWithoutPhotosInput>
  }

  export type AccountUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type PhotoTagCreateWithoutTagInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    photo: PhotoCreateNestedOneWithoutPhotoTagsInput
  }

  export type PhotoTagUncheckedCreateWithoutTagInput = {
    photoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoTagCreateOrConnectWithoutTagInput = {
    where: PhotoTagWhereUniqueInput
    create: XOR<PhotoTagCreateWithoutTagInput, PhotoTagUncheckedCreateWithoutTagInput>
  }

  export type PhotoTagCreateManyTagInputEnvelope = {
    data: PhotoTagCreateManyTagInput | PhotoTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutTagsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTagsInput, AccountUncheckedCreateWithoutTagsInput>
  }

  export type PhotoTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PhotoTagWhereUniqueInput
    update: XOR<PhotoTagUpdateWithoutTagInput, PhotoTagUncheckedUpdateWithoutTagInput>
    create: XOR<PhotoTagCreateWithoutTagInput, PhotoTagUncheckedCreateWithoutTagInput>
  }

  export type PhotoTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PhotoTagWhereUniqueInput
    data: XOR<PhotoTagUpdateWithoutTagInput, PhotoTagUncheckedUpdateWithoutTagInput>
  }

  export type PhotoTagUpdateManyWithWhereWithoutTagInput = {
    where: PhotoTagScalarWhereInput
    data: XOR<PhotoTagUpdateManyMutationInput, PhotoTagUncheckedUpdateManyWithoutTagInput>
  }

  export type AccountUpsertWithoutTagsInput = {
    update: XOR<AccountUpdateWithoutTagsInput, AccountUncheckedUpdateWithoutTagsInput>
    create: XOR<AccountCreateWithoutTagsInput, AccountUncheckedCreateWithoutTagsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTagsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTagsInput, AccountUncheckedUpdateWithoutTagsInput>
  }

  export type AccountUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type PhotoCreateWithoutPhotoTagsInput = {
    id?: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutPhotoTagsInput = {
    id?: string
    accountId: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutPhotoTagsInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutPhotoTagsInput, PhotoUncheckedCreateWithoutPhotoTagsInput>
  }

  export type TagCreateWithoutPhotoTagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutPhotoTagsInput = {
    id?: string
    accountId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutPhotoTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPhotoTagsInput, TagUncheckedCreateWithoutPhotoTagsInput>
  }

  export type PhotoUpsertWithoutPhotoTagsInput = {
    update: XOR<PhotoUpdateWithoutPhotoTagsInput, PhotoUncheckedUpdateWithoutPhotoTagsInput>
    create: XOR<PhotoCreateWithoutPhotoTagsInput, PhotoUncheckedCreateWithoutPhotoTagsInput>
    where?: PhotoWhereInput
  }

  export type PhotoUpdateToOneWithWhereWithoutPhotoTagsInput = {
    where?: PhotoWhereInput
    data: XOR<PhotoUpdateWithoutPhotoTagsInput, PhotoUncheckedUpdateWithoutPhotoTagsInput>
  }

  export type PhotoUpdateWithoutPhotoTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutPhotoTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpsertWithoutPhotoTagsInput = {
    update: XOR<TagUpdateWithoutPhotoTagsInput, TagUncheckedUpdateWithoutPhotoTagsInput>
    create: XOR<TagCreateWithoutPhotoTagsInput, TagUncheckedCreateWithoutPhotoTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPhotoTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPhotoTagsInput, TagUncheckedUpdateWithoutPhotoTagsInput>
  }

  export type TagUpdateWithoutPhotoTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutPhotoTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyAccountInput = {
    id?: string
    fileName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateManyAccountInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoTags?: PhotoTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagCreateManyPhotoInput = {
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoTagUpdateWithoutPhotoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutPhotoTagsNestedInput
  }

  export type PhotoTagUncheckedUpdateWithoutPhotoInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagUncheckedUpdateManyWithoutPhotoInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagCreateManyTagInput = {
    photoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photo?: PhotoUpdateOneRequiredWithoutPhotoTagsNestedInput
  }

  export type PhotoTagUncheckedUpdateWithoutTagInput = {
    photoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagUncheckedUpdateManyWithoutTagInput = {
    photoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoCountOutputTypeDefaultArgs instead
     */
    export type PhotoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnswerDefaultArgs instead
     */
    export type AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HandDefaultArgs instead
     */
    export type HandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoDefaultArgs instead
     */
    export type PhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoTagDefaultArgs instead
     */
    export type PhotoTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoTagDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}