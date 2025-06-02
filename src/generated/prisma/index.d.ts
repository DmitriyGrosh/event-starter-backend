
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventSubscription
 * 
 */
export type EventSubscription = $Result.DefaultSelection<Prisma.$EventSubscriptionPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketPurchase
 * 
 */
export type TicketPurchase = $Result.DefaultSelection<Prisma.$TicketPurchasePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventSubscription`: Exposes CRUD operations for the **EventSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventSubscriptions
    * const eventSubscriptions = await prisma.eventSubscription.findMany()
    * ```
    */
  get eventSubscription(): Prisma.EventSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketPurchase`: Exposes CRUD operations for the **TicketPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketPurchases
    * const ticketPurchases = await prisma.ticketPurchase.findMany()
    * ```
    */
  get ticketPurchase(): Prisma.TicketPurchaseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Event: 'Event',
    EventSubscription: 'EventSubscription',
    Ticket: 'Ticket',
    TicketPurchase: 'TicketPurchase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "eventSubscription" | "ticket" | "ticketPurchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventSubscription: {
        payload: Prisma.$EventSubscriptionPayload<ExtArgs>
        fields: Prisma.EventSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.EventSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>
          }
          findMany: {
            args: Prisma.EventSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>[]
          }
          create: {
            args: Prisma.EventSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>
          }
          createMany: {
            args: Prisma.EventSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.EventSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>
          }
          update: {
            args: Prisma.EventSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.EventSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.EventSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.EventSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventSubscription>
          }
          groupBy: {
            args: Prisma.EventSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<EventSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketPurchase: {
        payload: Prisma.$TicketPurchasePayload<ExtArgs>
        fields: Prisma.TicketPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          findFirst: {
            args: Prisma.TicketPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          findMany: {
            args: Prisma.TicketPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>[]
          }
          create: {
            args: Prisma.TicketPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          createMany: {
            args: Prisma.TicketPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>[]
          }
          delete: {
            args: Prisma.TicketPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          update: {
            args: Prisma.TicketPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          deleteMany: {
            args: Prisma.TicketPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>[]
          }
          upsert: {
            args: Prisma.TicketPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          aggregate: {
            args: Prisma.TicketPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketPurchase>
          }
          groupBy: {
            args: Prisma.TicketPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<TicketPurchaseCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    eventSubscription?: EventSubscriptionOmit
    ticket?: TicketOmit
    ticketPurchase?: TicketPurchaseOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedEvents: number
    eventSubscriptions: number
    ticketPurchases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedEvents?: boolean | UserCountOutputTypeCountOwnedEventsArgs
    eventSubscriptions?: boolean | UserCountOutputTypeCountEventSubscriptionsArgs
    ticketPurchases?: boolean | UserCountOutputTypeCountTicketPurchasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPurchaseWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    subscribers: number
    tickets: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscribers?: boolean | EventCountOutputTypeCountSubscribersArgs
    tickets?: boolean | EventCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountSubscribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSubscriptionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    purchases: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | TicketCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    ownedEvents?: boolean | User$ownedEventsArgs<ExtArgs>
    eventSubscriptions?: boolean | User$eventSubscriptionsArgs<ExtArgs>
    ticketPurchases?: boolean | User$ticketPurchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedEvents?: boolean | User$ownedEventsArgs<ExtArgs>
    eventSubscriptions?: boolean | User$eventSubscriptionsArgs<ExtArgs>
    ticketPurchases?: boolean | User$ticketPurchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedEvents: Prisma.$EventPayload<ExtArgs>[]
      eventSubscriptions: Prisma.$EventSubscriptionPayload<ExtArgs>[]
      ticketPurchases: Prisma.$TicketPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedEvents<T extends User$ownedEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventSubscriptions<T extends User$eventSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketPurchases<T extends User$ticketPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedEvents
   */
  export type User$ownedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.eventSubscriptions
   */
  export type User$eventSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    where?: EventSubscriptionWhereInput
    orderBy?: EventSubscriptionOrderByWithRelationInput | EventSubscriptionOrderByWithRelationInput[]
    cursor?: EventSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSubscriptionScalarFieldEnum | EventSubscriptionScalarFieldEnum[]
  }

  /**
   * User.ticketPurchases
   */
  export type User$ticketPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    where?: TicketPurchaseWhereInput
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    cursor?: TicketPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    dateStart: Date | null
    dateEnd: Date | null
    createdAt: Date | null
    ownerId: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    dateStart: Date | null
    dateEnd: Date | null
    createdAt: Date | null
    ownerId: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    location: number
    dateStart: number
    dateEnd: number
    createdAt: number
    ownerId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    dateStart?: true
    dateEnd?: true
    createdAt?: true
    ownerId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    dateStart?: true
    dateEnd?: true
    createdAt?: true
    ownerId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    dateStart?: true
    dateEnd?: true
    createdAt?: true
    ownerId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string | null
    location: string | null
    dateStart: Date
    dateEnd: Date
    createdAt: Date
    ownerId: number
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    createdAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    subscribers?: boolean | Event$subscribersArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    createdAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    createdAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    createdAt?: boolean
    ownerId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "dateStart" | "dateEnd" | "createdAt" | "ownerId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    subscribers?: boolean | Event$subscribersArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      subscribers: Prisma.$EventSubscriptionPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      location: string | null
      dateStart: Date
      dateEnd: Date
      createdAt: Date
      ownerId: number
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscribers<T extends Event$subscribersArgs<ExtArgs> = {}>(args?: Subset<T, Event$subscribersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Event$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly dateStart: FieldRef<"Event", 'DateTime'>
    readonly dateEnd: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly ownerId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.subscribers
   */
  export type Event$subscribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    where?: EventSubscriptionWhereInput
    orderBy?: EventSubscriptionOrderByWithRelationInput | EventSubscriptionOrderByWithRelationInput[]
    cursor?: EventSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSubscriptionScalarFieldEnum | EventSubscriptionScalarFieldEnum[]
  }

  /**
   * Event.tickets
   */
  export type Event$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventSubscription
   */

  export type AggregateEventSubscription = {
    _count: EventSubscriptionCountAggregateOutputType | null
    _avg: EventSubscriptionAvgAggregateOutputType | null
    _sum: EventSubscriptionSumAggregateOutputType | null
    _min: EventSubscriptionMinAggregateOutputType | null
    _max: EventSubscriptionMaxAggregateOutputType | null
  }

  export type EventSubscriptionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type EventSubscriptionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type EventSubscriptionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    createdAt: Date | null
  }

  export type EventSubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    createdAt: Date | null
  }

  export type EventSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    createdAt: number
    _all: number
  }


  export type EventSubscriptionAvgAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type EventSubscriptionSumAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type EventSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    createdAt?: true
  }

  export type EventSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    createdAt?: true
  }

  export type EventSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    createdAt?: true
    _all?: true
  }

  export type EventSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSubscription to aggregate.
     */
    where?: EventSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSubscriptions to fetch.
     */
    orderBy?: EventSubscriptionOrderByWithRelationInput | EventSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventSubscriptions
    **/
    _count?: true | EventSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventSubscriptionMaxAggregateInputType
  }

  export type GetEventSubscriptionAggregateType<T extends EventSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventSubscription[P]>
      : GetScalarType<T[P], AggregateEventSubscription[P]>
  }




  export type EventSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSubscriptionWhereInput
    orderBy?: EventSubscriptionOrderByWithAggregationInput | EventSubscriptionOrderByWithAggregationInput[]
    by: EventSubscriptionScalarFieldEnum[] | EventSubscriptionScalarFieldEnum
    having?: EventSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventSubscriptionCountAggregateInputType | true
    _avg?: EventSubscriptionAvgAggregateInputType
    _sum?: EventSubscriptionSumAggregateInputType
    _min?: EventSubscriptionMinAggregateInputType
    _max?: EventSubscriptionMaxAggregateInputType
  }

  export type EventSubscriptionGroupByOutputType = {
    id: number
    userId: number
    eventId: number
    createdAt: Date
    _count: EventSubscriptionCountAggregateOutputType | null
    _avg: EventSubscriptionAvgAggregateOutputType | null
    _sum: EventSubscriptionSumAggregateOutputType | null
    _min: EventSubscriptionMinAggregateOutputType | null
    _max: EventSubscriptionMaxAggregateOutputType | null
  }

  type GetEventSubscriptionGroupByPayload<T extends EventSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], EventSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type EventSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSubscription"]>

  export type EventSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSubscription"]>

  export type EventSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSubscription"]>

  export type EventSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
  }

  export type EventSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "createdAt", ExtArgs["result"]["eventSubscription"]>
  export type EventSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      eventId: number
      createdAt: Date
    }, ExtArgs["result"]["eventSubscription"]>
    composites: {}
  }

  type EventSubscriptionGetPayload<S extends boolean | null | undefined | EventSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$EventSubscriptionPayload, S>

  type EventSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventSubscriptionCountAggregateInputType | true
    }

  export interface EventSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventSubscription'], meta: { name: 'EventSubscription' } }
    /**
     * Find zero or one EventSubscription that matches the filter.
     * @param {EventSubscriptionFindUniqueArgs} args - Arguments to find a EventSubscription
     * @example
     * // Get one EventSubscription
     * const eventSubscription = await prisma.eventSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventSubscriptionFindUniqueArgs>(args: SelectSubset<T, EventSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a EventSubscription
     * @example
     * // Get one EventSubscription
     * const eventSubscription = await prisma.eventSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, EventSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSubscriptionFindFirstArgs} args - Arguments to find a EventSubscription
     * @example
     * // Get one EventSubscription
     * const eventSubscription = await prisma.eventSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventSubscriptionFindFirstArgs>(args?: SelectSubset<T, EventSubscriptionFindFirstArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSubscriptionFindFirstOrThrowArgs} args - Arguments to find a EventSubscription
     * @example
     * // Get one EventSubscription
     * const eventSubscription = await prisma.eventSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, EventSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventSubscriptions
     * const eventSubscriptions = await prisma.eventSubscription.findMany()
     * 
     * // Get first 10 EventSubscriptions
     * const eventSubscriptions = await prisma.eventSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventSubscriptionWithIdOnly = await prisma.eventSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventSubscriptionFindManyArgs>(args?: SelectSubset<T, EventSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventSubscription.
     * @param {EventSubscriptionCreateArgs} args - Arguments to create a EventSubscription.
     * @example
     * // Create one EventSubscription
     * const EventSubscription = await prisma.eventSubscription.create({
     *   data: {
     *     // ... data to create a EventSubscription
     *   }
     * })
     * 
     */
    create<T extends EventSubscriptionCreateArgs>(args: SelectSubset<T, EventSubscriptionCreateArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventSubscriptions.
     * @param {EventSubscriptionCreateManyArgs} args - Arguments to create many EventSubscriptions.
     * @example
     * // Create many EventSubscriptions
     * const eventSubscription = await prisma.eventSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventSubscriptionCreateManyArgs>(args?: SelectSubset<T, EventSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventSubscriptions and returns the data saved in the database.
     * @param {EventSubscriptionCreateManyAndReturnArgs} args - Arguments to create many EventSubscriptions.
     * @example
     * // Create many EventSubscriptions
     * const eventSubscription = await prisma.eventSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventSubscriptions and only return the `id`
     * const eventSubscriptionWithIdOnly = await prisma.eventSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, EventSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventSubscription.
     * @param {EventSubscriptionDeleteArgs} args - Arguments to delete one EventSubscription.
     * @example
     * // Delete one EventSubscription
     * const EventSubscription = await prisma.eventSubscription.delete({
     *   where: {
     *     // ... filter to delete one EventSubscription
     *   }
     * })
     * 
     */
    delete<T extends EventSubscriptionDeleteArgs>(args: SelectSubset<T, EventSubscriptionDeleteArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventSubscription.
     * @param {EventSubscriptionUpdateArgs} args - Arguments to update one EventSubscription.
     * @example
     * // Update one EventSubscription
     * const eventSubscription = await prisma.eventSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventSubscriptionUpdateArgs>(args: SelectSubset<T, EventSubscriptionUpdateArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventSubscriptions.
     * @param {EventSubscriptionDeleteManyArgs} args - Arguments to filter EventSubscriptions to delete.
     * @example
     * // Delete a few EventSubscriptions
     * const { count } = await prisma.eventSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventSubscriptionDeleteManyArgs>(args?: SelectSubset<T, EventSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventSubscriptions
     * const eventSubscription = await prisma.eventSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventSubscriptionUpdateManyArgs>(args: SelectSubset<T, EventSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSubscriptions and returns the data updated in the database.
     * @param {EventSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many EventSubscriptions.
     * @example
     * // Update many EventSubscriptions
     * const eventSubscription = await prisma.eventSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventSubscriptions and only return the `id`
     * const eventSubscriptionWithIdOnly = await prisma.eventSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, EventSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventSubscription.
     * @param {EventSubscriptionUpsertArgs} args - Arguments to update or create a EventSubscription.
     * @example
     * // Update or create a EventSubscription
     * const eventSubscription = await prisma.eventSubscription.upsert({
     *   create: {
     *     // ... data to create a EventSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventSubscription we want to update
     *   }
     * })
     */
    upsert<T extends EventSubscriptionUpsertArgs>(args: SelectSubset<T, EventSubscriptionUpsertArgs<ExtArgs>>): Prisma__EventSubscriptionClient<$Result.GetResult<Prisma.$EventSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSubscriptionCountArgs} args - Arguments to filter EventSubscriptions to count.
     * @example
     * // Count the number of EventSubscriptions
     * const count = await prisma.eventSubscription.count({
     *   where: {
     *     // ... the filter for the EventSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends EventSubscriptionCountArgs>(
      args?: Subset<T, EventSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventSubscriptionAggregateArgs>(args: Subset<T, EventSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetEventSubscriptionAggregateType<T>>

    /**
     * Group by EventSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends EventSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: EventSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventSubscription model
   */
  readonly fields: EventSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventSubscription model
   */
  interface EventSubscriptionFieldRefs {
    readonly id: FieldRef<"EventSubscription", 'Int'>
    readonly userId: FieldRef<"EventSubscription", 'Int'>
    readonly eventId: FieldRef<"EventSubscription", 'Int'>
    readonly createdAt: FieldRef<"EventSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventSubscription findUnique
   */
  export type EventSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which EventSubscription to fetch.
     */
    where: EventSubscriptionWhereUniqueInput
  }

  /**
   * EventSubscription findUniqueOrThrow
   */
  export type EventSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which EventSubscription to fetch.
     */
    where: EventSubscriptionWhereUniqueInput
  }

  /**
   * EventSubscription findFirst
   */
  export type EventSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which EventSubscription to fetch.
     */
    where?: EventSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSubscriptions to fetch.
     */
    orderBy?: EventSubscriptionOrderByWithRelationInput | EventSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSubscriptions.
     */
    cursor?: EventSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSubscriptions.
     */
    distinct?: EventSubscriptionScalarFieldEnum | EventSubscriptionScalarFieldEnum[]
  }

  /**
   * EventSubscription findFirstOrThrow
   */
  export type EventSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which EventSubscription to fetch.
     */
    where?: EventSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSubscriptions to fetch.
     */
    orderBy?: EventSubscriptionOrderByWithRelationInput | EventSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSubscriptions.
     */
    cursor?: EventSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSubscriptions.
     */
    distinct?: EventSubscriptionScalarFieldEnum | EventSubscriptionScalarFieldEnum[]
  }

  /**
   * EventSubscription findMany
   */
  export type EventSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which EventSubscriptions to fetch.
     */
    where?: EventSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSubscriptions to fetch.
     */
    orderBy?: EventSubscriptionOrderByWithRelationInput | EventSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventSubscriptions.
     */
    cursor?: EventSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSubscriptions.
     */
    skip?: number
    distinct?: EventSubscriptionScalarFieldEnum | EventSubscriptionScalarFieldEnum[]
  }

  /**
   * EventSubscription create
   */
  export type EventSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a EventSubscription.
     */
    data: XOR<EventSubscriptionCreateInput, EventSubscriptionUncheckedCreateInput>
  }

  /**
   * EventSubscription createMany
   */
  export type EventSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventSubscriptions.
     */
    data: EventSubscriptionCreateManyInput | EventSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventSubscription createManyAndReturn
   */
  export type EventSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many EventSubscriptions.
     */
    data: EventSubscriptionCreateManyInput | EventSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSubscription update
   */
  export type EventSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a EventSubscription.
     */
    data: XOR<EventSubscriptionUpdateInput, EventSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which EventSubscription to update.
     */
    where: EventSubscriptionWhereUniqueInput
  }

  /**
   * EventSubscription updateMany
   */
  export type EventSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventSubscriptions.
     */
    data: XOR<EventSubscriptionUpdateManyMutationInput, EventSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which EventSubscriptions to update
     */
    where?: EventSubscriptionWhereInput
    /**
     * Limit how many EventSubscriptions to update.
     */
    limit?: number
  }

  /**
   * EventSubscription updateManyAndReturn
   */
  export type EventSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update EventSubscriptions.
     */
    data: XOR<EventSubscriptionUpdateManyMutationInput, EventSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which EventSubscriptions to update
     */
    where?: EventSubscriptionWhereInput
    /**
     * Limit how many EventSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSubscription upsert
   */
  export type EventSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the EventSubscription to update in case it exists.
     */
    where: EventSubscriptionWhereUniqueInput
    /**
     * In case the EventSubscription found by the `where` argument doesn't exist, create a new EventSubscription with this data.
     */
    create: XOR<EventSubscriptionCreateInput, EventSubscriptionUncheckedCreateInput>
    /**
     * In case the EventSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventSubscriptionUpdateInput, EventSubscriptionUncheckedUpdateInput>
  }

  /**
   * EventSubscription delete
   */
  export type EventSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which EventSubscription to delete.
     */
    where: EventSubscriptionWhereUniqueInput
  }

  /**
   * EventSubscription deleteMany
   */
  export type EventSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSubscriptions to delete
     */
    where?: EventSubscriptionWhereInput
    /**
     * Limit how many EventSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * EventSubscription without action
   */
  export type EventSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSubscription
     */
    select?: EventSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSubscription
     */
    omit?: EventSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quantity: number | null
    eventId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quantity: number | null
    eventId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    quantity: number | null
    eventId: number | null
    createdAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    quantity: number | null
    eventId: number | null
    createdAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    quantity: number
    eventId: number
    createdAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    eventId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    eventId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    eventId?: true
    createdAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    eventId?: true
    createdAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    eventId?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: Decimal
    quantity: number
    eventId: number
    createdAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    eventId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    purchases?: boolean | Ticket$purchasesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    eventId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    eventId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    eventId?: boolean
    createdAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "quantity" | "eventId" | "createdAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    purchases?: boolean | Ticket$purchasesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      purchases: Prisma.$TicketPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      quantity: number
      eventId: number
      createdAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchases<T extends Ticket$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly name: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly price: FieldRef<"Ticket", 'Decimal'>
    readonly quantity: FieldRef<"Ticket", 'Int'>
    readonly eventId: FieldRef<"Ticket", 'Int'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.purchases
   */
  export type Ticket$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    where?: TicketPurchaseWhereInput
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    cursor?: TicketPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketPurchase
   */

  export type AggregateTicketPurchase = {
    _count: TicketPurchaseCountAggregateOutputType | null
    _avg: TicketPurchaseAvgAggregateOutputType | null
    _sum: TicketPurchaseSumAggregateOutputType | null
    _min: TicketPurchaseMinAggregateOutputType | null
    _max: TicketPurchaseMaxAggregateOutputType | null
  }

  export type TicketPurchaseAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    totalPaid: Decimal | null
    ticketId: number | null
    userId: number | null
  }

  export type TicketPurchaseSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    totalPaid: Decimal | null
    ticketId: number | null
    userId: number | null
  }

  export type TicketPurchaseMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    totalPaid: Decimal | null
    status: string | null
    ticketId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketPurchaseMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    totalPaid: Decimal | null
    status: string | null
    ticketId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketPurchaseCountAggregateOutputType = {
    id: number
    quantity: number
    totalPaid: number
    status: number
    ticketId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketPurchaseAvgAggregateInputType = {
    id?: true
    quantity?: true
    totalPaid?: true
    ticketId?: true
    userId?: true
  }

  export type TicketPurchaseSumAggregateInputType = {
    id?: true
    quantity?: true
    totalPaid?: true
    ticketId?: true
    userId?: true
  }

  export type TicketPurchaseMinAggregateInputType = {
    id?: true
    quantity?: true
    totalPaid?: true
    status?: true
    ticketId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketPurchaseMaxAggregateInputType = {
    id?: true
    quantity?: true
    totalPaid?: true
    status?: true
    ticketId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketPurchaseCountAggregateInputType = {
    id?: true
    quantity?: true
    totalPaid?: true
    status?: true
    ticketId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPurchase to aggregate.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketPurchases
    **/
    _count?: true | TicketPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketPurchaseMaxAggregateInputType
  }

  export type GetTicketPurchaseAggregateType<T extends TicketPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketPurchase[P]>
      : GetScalarType<T[P], AggregateTicketPurchase[P]>
  }




  export type TicketPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPurchaseWhereInput
    orderBy?: TicketPurchaseOrderByWithAggregationInput | TicketPurchaseOrderByWithAggregationInput[]
    by: TicketPurchaseScalarFieldEnum[] | TicketPurchaseScalarFieldEnum
    having?: TicketPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketPurchaseCountAggregateInputType | true
    _avg?: TicketPurchaseAvgAggregateInputType
    _sum?: TicketPurchaseSumAggregateInputType
    _min?: TicketPurchaseMinAggregateInputType
    _max?: TicketPurchaseMaxAggregateInputType
  }

  export type TicketPurchaseGroupByOutputType = {
    id: number
    quantity: number
    totalPaid: Decimal
    status: string
    ticketId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: TicketPurchaseCountAggregateOutputType | null
    _avg: TicketPurchaseAvgAggregateOutputType | null
    _sum: TicketPurchaseSumAggregateOutputType | null
    _min: TicketPurchaseMinAggregateOutputType | null
    _max: TicketPurchaseMaxAggregateOutputType | null
  }

  type GetTicketPurchaseGroupByPayload<T extends TicketPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], TicketPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type TicketPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    totalPaid?: boolean
    status?: boolean
    ticketId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPurchase"]>

  export type TicketPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    totalPaid?: boolean
    status?: boolean
    ticketId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPurchase"]>

  export type TicketPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    totalPaid?: boolean
    status?: boolean
    ticketId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPurchase"]>

  export type TicketPurchaseSelectScalar = {
    id?: boolean
    quantity?: boolean
    totalPaid?: boolean
    status?: boolean
    ticketId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "totalPaid" | "status" | "ticketId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketPurchase"]>
  export type TicketPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketPurchase"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      totalPaid: Prisma.Decimal
      status: string
      ticketId: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketPurchase"]>
    composites: {}
  }

  type TicketPurchaseGetPayload<S extends boolean | null | undefined | TicketPurchaseDefaultArgs> = $Result.GetResult<Prisma.$TicketPurchasePayload, S>

  type TicketPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketPurchaseCountAggregateInputType | true
    }

  export interface TicketPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketPurchase'], meta: { name: 'TicketPurchase' } }
    /**
     * Find zero or one TicketPurchase that matches the filter.
     * @param {TicketPurchaseFindUniqueArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketPurchaseFindUniqueArgs>(args: SelectSubset<T, TicketPurchaseFindUniqueArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketPurchaseFindUniqueOrThrowArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseFindFirstArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketPurchaseFindFirstArgs>(args?: SelectSubset<T, TicketPurchaseFindFirstArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseFindFirstOrThrowArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketPurchases
     * const ticketPurchases = await prisma.ticketPurchase.findMany()
     * 
     * // Get first 10 TicketPurchases
     * const ticketPurchases = await prisma.ticketPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketPurchaseWithIdOnly = await prisma.ticketPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketPurchaseFindManyArgs>(args?: SelectSubset<T, TicketPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketPurchase.
     * @param {TicketPurchaseCreateArgs} args - Arguments to create a TicketPurchase.
     * @example
     * // Create one TicketPurchase
     * const TicketPurchase = await prisma.ticketPurchase.create({
     *   data: {
     *     // ... data to create a TicketPurchase
     *   }
     * })
     * 
     */
    create<T extends TicketPurchaseCreateArgs>(args: SelectSubset<T, TicketPurchaseCreateArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketPurchases.
     * @param {TicketPurchaseCreateManyArgs} args - Arguments to create many TicketPurchases.
     * @example
     * // Create many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketPurchaseCreateManyArgs>(args?: SelectSubset<T, TicketPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketPurchases and returns the data saved in the database.
     * @param {TicketPurchaseCreateManyAndReturnArgs} args - Arguments to create many TicketPurchases.
     * @example
     * // Create many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketPurchases and only return the `id`
     * const ticketPurchaseWithIdOnly = await prisma.ticketPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketPurchase.
     * @param {TicketPurchaseDeleteArgs} args - Arguments to delete one TicketPurchase.
     * @example
     * // Delete one TicketPurchase
     * const TicketPurchase = await prisma.ticketPurchase.delete({
     *   where: {
     *     // ... filter to delete one TicketPurchase
     *   }
     * })
     * 
     */
    delete<T extends TicketPurchaseDeleteArgs>(args: SelectSubset<T, TicketPurchaseDeleteArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketPurchase.
     * @param {TicketPurchaseUpdateArgs} args - Arguments to update one TicketPurchase.
     * @example
     * // Update one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketPurchaseUpdateArgs>(args: SelectSubset<T, TicketPurchaseUpdateArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketPurchases.
     * @param {TicketPurchaseDeleteManyArgs} args - Arguments to filter TicketPurchases to delete.
     * @example
     * // Delete a few TicketPurchases
     * const { count } = await prisma.ticketPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketPurchaseDeleteManyArgs>(args?: SelectSubset<T, TicketPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketPurchaseUpdateManyArgs>(args: SelectSubset<T, TicketPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPurchases and returns the data updated in the database.
     * @param {TicketPurchaseUpdateManyAndReturnArgs} args - Arguments to update many TicketPurchases.
     * @example
     * // Update many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketPurchases and only return the `id`
     * const ticketPurchaseWithIdOnly = await prisma.ticketPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketPurchase.
     * @param {TicketPurchaseUpsertArgs} args - Arguments to update or create a TicketPurchase.
     * @example
     * // Update or create a TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.upsert({
     *   create: {
     *     // ... data to create a TicketPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketPurchase we want to update
     *   }
     * })
     */
    upsert<T extends TicketPurchaseUpsertArgs>(args: SelectSubset<T, TicketPurchaseUpsertArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseCountArgs} args - Arguments to filter TicketPurchases to count.
     * @example
     * // Count the number of TicketPurchases
     * const count = await prisma.ticketPurchase.count({
     *   where: {
     *     // ... the filter for the TicketPurchases we want to count
     *   }
     * })
    **/
    count<T extends TicketPurchaseCountArgs>(
      args?: Subset<T, TicketPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketPurchaseAggregateArgs>(args: Subset<T, TicketPurchaseAggregateArgs>): Prisma.PrismaPromise<GetTicketPurchaseAggregateType<T>>

    /**
     * Group by TicketPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseGroupByArgs} args - Group by arguments.
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
      T extends TicketPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: TicketPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketPurchase model
   */
  readonly fields: TicketPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketPurchase model
   */
  interface TicketPurchaseFieldRefs {
    readonly id: FieldRef<"TicketPurchase", 'Int'>
    readonly quantity: FieldRef<"TicketPurchase", 'Int'>
    readonly totalPaid: FieldRef<"TicketPurchase", 'Decimal'>
    readonly status: FieldRef<"TicketPurchase", 'String'>
    readonly ticketId: FieldRef<"TicketPurchase", 'Int'>
    readonly userId: FieldRef<"TicketPurchase", 'Int'>
    readonly createdAt: FieldRef<"TicketPurchase", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketPurchase findUnique
   */
  export type TicketPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase findUniqueOrThrow
   */
  export type TicketPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase findFirst
   */
  export type TicketPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPurchases.
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPurchases.
     */
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * TicketPurchase findFirstOrThrow
   */
  export type TicketPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPurchases.
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPurchases.
     */
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * TicketPurchase findMany
   */
  export type TicketPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchases to fetch.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketPurchases.
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * TicketPurchase create
   */
  export type TicketPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketPurchase.
     */
    data: XOR<TicketPurchaseCreateInput, TicketPurchaseUncheckedCreateInput>
  }

  /**
   * TicketPurchase createMany
   */
  export type TicketPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketPurchases.
     */
    data: TicketPurchaseCreateManyInput | TicketPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketPurchase createManyAndReturn
   */
  export type TicketPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many TicketPurchases.
     */
    data: TicketPurchaseCreateManyInput | TicketPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketPurchase update
   */
  export type TicketPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketPurchase.
     */
    data: XOR<TicketPurchaseUpdateInput, TicketPurchaseUncheckedUpdateInput>
    /**
     * Choose, which TicketPurchase to update.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase updateMany
   */
  export type TicketPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketPurchases.
     */
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which TicketPurchases to update
     */
    where?: TicketPurchaseWhereInput
    /**
     * Limit how many TicketPurchases to update.
     */
    limit?: number
  }

  /**
   * TicketPurchase updateManyAndReturn
   */
  export type TicketPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update TicketPurchases.
     */
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which TicketPurchases to update
     */
    where?: TicketPurchaseWhereInput
    /**
     * Limit how many TicketPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketPurchase upsert
   */
  export type TicketPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketPurchase to update in case it exists.
     */
    where: TicketPurchaseWhereUniqueInput
    /**
     * In case the TicketPurchase found by the `where` argument doesn't exist, create a new TicketPurchase with this data.
     */
    create: XOR<TicketPurchaseCreateInput, TicketPurchaseUncheckedCreateInput>
    /**
     * In case the TicketPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketPurchaseUpdateInput, TicketPurchaseUncheckedUpdateInput>
  }

  /**
   * TicketPurchase delete
   */
  export type TicketPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter which TicketPurchase to delete.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase deleteMany
   */
  export type TicketPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPurchases to delete
     */
    where?: TicketPurchaseWhereInput
    /**
     * Limit how many TicketPurchases to delete.
     */
    limit?: number
  }

  /**
   * TicketPurchase without action
   */
  export type TicketPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    createdAt: 'createdAt',
    ownerId: 'ownerId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    createdAt: 'createdAt'
  };

  export type EventSubscriptionScalarFieldEnum = (typeof EventSubscriptionScalarFieldEnum)[keyof typeof EventSubscriptionScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    eventId: 'eventId',
    createdAt: 'createdAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketPurchaseScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    totalPaid: 'totalPaid',
    status: 'status',
    ticketId: 'ticketId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketPurchaseScalarFieldEnum = (typeof TicketPurchaseScalarFieldEnum)[keyof typeof TicketPurchaseScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedEvents?: EventListRelationFilter
    eventSubscriptions?: EventSubscriptionListRelationFilter
    ticketPurchases?: TicketPurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    ownedEvents?: EventOrderByRelationAggregateInput
    eventSubscriptions?: EventSubscriptionOrderByRelationAggregateInput
    ticketPurchases?: TicketPurchaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedEvents?: EventListRelationFilter
    eventSubscriptions?: EventSubscriptionListRelationFilter
    ticketPurchases?: TicketPurchaseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    dateStart?: DateTimeFilter<"Event"> | Date | string
    dateEnd?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    ownerId?: IntFilter<"Event"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscribers?: EventSubscriptionListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    subscribers?: EventSubscriptionOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    dateStart?: DateTimeFilter<"Event"> | Date | string
    dateEnd?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    ownerId?: IntFilter<"Event"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscribers?: EventSubscriptionListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    dateStart?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Event"> | number
  }

  export type EventSubscriptionWhereInput = {
    AND?: EventSubscriptionWhereInput | EventSubscriptionWhereInput[]
    OR?: EventSubscriptionWhereInput[]
    NOT?: EventSubscriptionWhereInput | EventSubscriptionWhereInput[]
    id?: IntFilter<"EventSubscription"> | number
    userId?: IntFilter<"EventSubscription"> | number
    eventId?: IntFilter<"EventSubscription"> | number
    createdAt?: DateTimeFilter<"EventSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type EventSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_eventId?: EventSubscriptionUserIdEventIdCompoundUniqueInput
    AND?: EventSubscriptionWhereInput | EventSubscriptionWhereInput[]
    OR?: EventSubscriptionWhereInput[]
    NOT?: EventSubscriptionWhereInput | EventSubscriptionWhereInput[]
    userId?: IntFilter<"EventSubscription"> | number
    eventId?: IntFilter<"EventSubscription"> | number
    createdAt?: DateTimeFilter<"EventSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "userId_eventId">

  export type EventSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    _count?: EventSubscriptionCountOrderByAggregateInput
    _avg?: EventSubscriptionAvgOrderByAggregateInput
    _max?: EventSubscriptionMaxOrderByAggregateInput
    _min?: EventSubscriptionMinOrderByAggregateInput
    _sum?: EventSubscriptionSumOrderByAggregateInput
  }

  export type EventSubscriptionScalarWhereWithAggregatesInput = {
    AND?: EventSubscriptionScalarWhereWithAggregatesInput | EventSubscriptionScalarWhereWithAggregatesInput[]
    OR?: EventSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: EventSubscriptionScalarWhereWithAggregatesInput | EventSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventSubscription"> | number
    userId?: IntWithAggregatesFilter<"EventSubscription"> | number
    eventId?: IntWithAggregatesFilter<"EventSubscription"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EventSubscription"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    name?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    purchases?: TicketPurchaseListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    purchases?: TicketPurchaseOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    name?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    purchases?: TicketPurchaseListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    name?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    price?: DecimalWithAggregatesFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"Ticket"> | number
    eventId?: IntWithAggregatesFilter<"Ticket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type TicketPurchaseWhereInput = {
    AND?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    OR?: TicketPurchaseWhereInput[]
    NOT?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    id?: IntFilter<"TicketPurchase"> | number
    quantity?: IntFilter<"TicketPurchase"> | number
    totalPaid?: DecimalFilter<"TicketPurchase"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"TicketPurchase"> | string
    ticketId?: IntFilter<"TicketPurchase"> | number
    userId?: IntFilter<"TicketPurchase"> | number
    createdAt?: DateTimeFilter<"TicketPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"TicketPurchase"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TicketPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    OR?: TicketPurchaseWhereInput[]
    NOT?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    quantity?: IntFilter<"TicketPurchase"> | number
    totalPaid?: DecimalFilter<"TicketPurchase"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"TicketPurchase"> | string
    ticketId?: IntFilter<"TicketPurchase"> | number
    userId?: IntFilter<"TicketPurchase"> | number
    createdAt?: DateTimeFilter<"TicketPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"TicketPurchase"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TicketPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketPurchaseCountOrderByAggregateInput
    _avg?: TicketPurchaseAvgOrderByAggregateInput
    _max?: TicketPurchaseMaxOrderByAggregateInput
    _min?: TicketPurchaseMinOrderByAggregateInput
    _sum?: TicketPurchaseSumOrderByAggregateInput
  }

  export type TicketPurchaseScalarWhereWithAggregatesInput = {
    AND?: TicketPurchaseScalarWhereWithAggregatesInput | TicketPurchaseScalarWhereWithAggregatesInput[]
    OR?: TicketPurchaseScalarWhereWithAggregatesInput[]
    NOT?: TicketPurchaseScalarWhereWithAggregatesInput | TicketPurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketPurchase"> | number
    quantity?: IntWithAggregatesFilter<"TicketPurchase"> | number
    totalPaid?: DecimalWithAggregatesFilter<"TicketPurchase"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"TicketPurchase"> | string
    ticketId?: IntWithAggregatesFilter<"TicketPurchase"> | number
    userId?: IntWithAggregatesFilter<"TicketPurchase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TicketPurchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketPurchase"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    ownedEvents?: EventCreateNestedManyWithoutOwnerInput
    eventSubscriptions?: EventSubscriptionCreateNestedManyWithoutUserInput
    ticketPurchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    ownedEvents?: EventUncheckedCreateNestedManyWithoutOwnerInput
    eventSubscriptions?: EventSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ticketPurchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedEvents?: EventUpdateManyWithoutOwnerNestedInput
    eventSubscriptions?: EventSubscriptionUpdateManyWithoutUserNestedInput
    ticketPurchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedEvents?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    eventSubscriptions?: EventSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ticketPurchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedEventsInput
    subscribers?: EventSubscriptionCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    ownerId: number
    subscribers?: EventSubscriptionUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedEventsNestedInput
    subscribers?: EventSubscriptionUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    subscribers?: EventSubscriptionUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    ownerId: number
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type EventSubscriptionCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEventSubscriptionsInput
    event: EventCreateNestedOneWithoutSubscribersInput
  }

  export type EventSubscriptionUncheckedCreateInput = {
    id?: number
    userId: number
    eventId: number
    createdAt?: Date | string
  }

  export type EventSubscriptionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventSubscriptionsNestedInput
    event?: EventUpdateOneRequiredWithoutSubscribersNestedInput
  }

  export type EventSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSubscriptionCreateManyInput = {
    id?: number
    userId: number
    eventId: number
    createdAt?: Date | string
  }

  export type EventSubscriptionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
    purchases?: TicketPurchaseCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    eventId: number
    createdAt?: Date | string
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    eventId: number
    createdAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseCreateInput = {
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutPurchasesInput
    user: UserCreateNestedOneWithoutTicketPurchasesInput
  }

  export type TicketPurchaseUncheckedCreateInput = {
    id?: number
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    ticketId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketPurchaseUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutPurchasesNestedInput
    user?: UserUpdateOneRequiredWithoutTicketPurchasesNestedInput
  }

  export type TicketPurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseCreateManyInput = {
    id?: number
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    ticketId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketPurchaseUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventSubscriptionListRelationFilter = {
    every?: EventSubscriptionWhereInput
    some?: EventSubscriptionWhereInput
    none?: EventSubscriptionWhereInput
  }

  export type TicketPurchaseListRelationFilter = {
    every?: TicketPurchaseWhereInput
    some?: TicketPurchaseWhereInput
    none?: TicketPurchaseWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventSubscriptionUserIdEventIdCompoundUniqueInput = {
    userId: number
    eventId: number
  }

  export type EventSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EventSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    eventId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    eventId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketPurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
  }

  export type TicketPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketPurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    ticketId?: SortOrder
    userId?: SortOrder
  }

  export type EventCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<EventSubscriptionCreateWithoutUserInput, EventSubscriptionUncheckedCreateWithoutUserInput> | EventSubscriptionCreateWithoutUserInput[] | EventSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutUserInput | EventSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: EventSubscriptionCreateManyUserInputEnvelope
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
  }

  export type TicketPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventSubscriptionCreateWithoutUserInput, EventSubscriptionUncheckedCreateWithoutUserInput> | EventSubscriptionCreateWithoutUserInput[] | EventSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutUserInput | EventSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: EventSubscriptionCreateManyUserInputEnvelope
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
  }

  export type TicketPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventSubscriptionCreateWithoutUserInput, EventSubscriptionUncheckedCreateWithoutUserInput> | EventSubscriptionCreateWithoutUserInput[] | EventSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutUserInput | EventSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: EventSubscriptionUpsertWithWhereUniqueWithoutUserInput | EventSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventSubscriptionCreateManyUserInputEnvelope
    set?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    disconnect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    delete?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    update?: EventSubscriptionUpdateWithWhereUniqueWithoutUserInput | EventSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventSubscriptionUpdateManyWithWhereWithoutUserInput | EventSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventSubscriptionScalarWhereInput | EventSubscriptionScalarWhereInput[]
  }

  export type TicketPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutUserInput | TicketPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutUserInput | TicketPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutUserInput | TicketPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventSubscriptionCreateWithoutUserInput, EventSubscriptionUncheckedCreateWithoutUserInput> | EventSubscriptionCreateWithoutUserInput[] | EventSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutUserInput | EventSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: EventSubscriptionUpsertWithWhereUniqueWithoutUserInput | EventSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventSubscriptionCreateManyUserInputEnvelope
    set?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    disconnect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    delete?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    update?: EventSubscriptionUpdateWithWhereUniqueWithoutUserInput | EventSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventSubscriptionUpdateManyWithWhereWithoutUserInput | EventSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventSubscriptionScalarWhereInput | EventSubscriptionScalarWhereInput[]
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutUserInput | TicketPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutUserInput | TicketPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutUserInput | TicketPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedEventsInput = {
    create?: XOR<UserCreateWithoutOwnedEventsInput, UserUncheckedCreateWithoutOwnedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventSubscriptionCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSubscriptionCreateWithoutEventInput, EventSubscriptionUncheckedCreateWithoutEventInput> | EventSubscriptionCreateWithoutEventInput[] | EventSubscriptionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutEventInput | EventSubscriptionCreateOrConnectWithoutEventInput[]
    createMany?: EventSubscriptionCreateManyEventInputEnvelope
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EventSubscriptionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSubscriptionCreateWithoutEventInput, EventSubscriptionUncheckedCreateWithoutEventInput> | EventSubscriptionCreateWithoutEventInput[] | EventSubscriptionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutEventInput | EventSubscriptionCreateOrConnectWithoutEventInput[]
    createMany?: EventSubscriptionCreateManyEventInputEnvelope
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutOwnedEventsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedEventsInput, UserUncheckedCreateWithoutOwnedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedEventsInput
    upsert?: UserUpsertWithoutOwnedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedEventsInput, UserUpdateWithoutOwnedEventsInput>, UserUncheckedUpdateWithoutOwnedEventsInput>
  }

  export type EventSubscriptionUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSubscriptionCreateWithoutEventInput, EventSubscriptionUncheckedCreateWithoutEventInput> | EventSubscriptionCreateWithoutEventInput[] | EventSubscriptionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutEventInput | EventSubscriptionCreateOrConnectWithoutEventInput[]
    upsert?: EventSubscriptionUpsertWithWhereUniqueWithoutEventInput | EventSubscriptionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSubscriptionCreateManyEventInputEnvelope
    set?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    disconnect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    delete?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    update?: EventSubscriptionUpdateWithWhereUniqueWithoutEventInput | EventSubscriptionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSubscriptionUpdateManyWithWhereWithoutEventInput | EventSubscriptionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSubscriptionScalarWhereInput | EventSubscriptionScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventSubscriptionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSubscriptionCreateWithoutEventInput, EventSubscriptionUncheckedCreateWithoutEventInput> | EventSubscriptionCreateWithoutEventInput[] | EventSubscriptionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSubscriptionCreateOrConnectWithoutEventInput | EventSubscriptionCreateOrConnectWithoutEventInput[]
    upsert?: EventSubscriptionUpsertWithWhereUniqueWithoutEventInput | EventSubscriptionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSubscriptionCreateManyEventInputEnvelope
    set?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    disconnect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    delete?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    connect?: EventSubscriptionWhereUniqueInput | EventSubscriptionWhereUniqueInput[]
    update?: EventSubscriptionUpdateWithWhereUniqueWithoutEventInput | EventSubscriptionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSubscriptionUpdateManyWithWhereWithoutEventInput | EventSubscriptionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSubscriptionScalarWhereInput | EventSubscriptionScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventSubscriptionsInput = {
    create?: XOR<UserCreateWithoutEventSubscriptionsInput, UserUncheckedCreateWithoutEventSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutSubscribersInput = {
    create?: XOR<EventCreateWithoutSubscribersInput, EventUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: EventCreateOrConnectWithoutSubscribersInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEventSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutEventSubscriptionsInput, UserUncheckedCreateWithoutEventSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventSubscriptionsInput
    upsert?: UserUpsertWithoutEventSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventSubscriptionsInput, UserUpdateWithoutEventSubscriptionsInput>, UserUncheckedUpdateWithoutEventSubscriptionsInput>
  }

  export type EventUpdateOneRequiredWithoutSubscribersNestedInput = {
    create?: XOR<EventCreateWithoutSubscribersInput, EventUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: EventCreateOrConnectWithoutSubscribersInput
    upsert?: EventUpsertWithoutSubscribersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutSubscribersInput, EventUpdateWithoutSubscribersInput>, EventUncheckedUpdateWithoutSubscribersInput>
  }

  export type EventCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    connect?: EventWhereUniqueInput
  }

  export type TicketPurchaseCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketPurchaseCreateWithoutTicketInput, TicketPurchaseUncheckedCreateWithoutTicketInput> | TicketPurchaseCreateWithoutTicketInput[] | TicketPurchaseUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutTicketInput | TicketPurchaseCreateOrConnectWithoutTicketInput[]
    createMany?: TicketPurchaseCreateManyTicketInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type TicketPurchaseUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketPurchaseCreateWithoutTicketInput, TicketPurchaseUncheckedCreateWithoutTicketInput> | TicketPurchaseCreateWithoutTicketInput[] | TicketPurchaseUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutTicketInput | TicketPurchaseCreateOrConnectWithoutTicketInput[]
    createMany?: TicketPurchaseCreateManyTicketInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EventUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    upsert?: EventUpsertWithoutTicketsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketsInput, EventUpdateWithoutTicketsInput>, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketPurchaseUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutTicketInput, TicketPurchaseUncheckedCreateWithoutTicketInput> | TicketPurchaseCreateWithoutTicketInput[] | TicketPurchaseUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutTicketInput | TicketPurchaseCreateOrConnectWithoutTicketInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutTicketInput | TicketPurchaseUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketPurchaseCreateManyTicketInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutTicketInput | TicketPurchaseUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutTicketInput | TicketPurchaseUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutTicketInput, TicketPurchaseUncheckedCreateWithoutTicketInput> | TicketPurchaseCreateWithoutTicketInput[] | TicketPurchaseUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutTicketInput | TicketPurchaseCreateOrConnectWithoutTicketInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutTicketInput | TicketPurchaseUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketPurchaseCreateManyTicketInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutTicketInput | TicketPurchaseUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutTicketInput | TicketPurchaseUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<TicketCreateWithoutPurchasesInput, TicketUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPurchasesInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketPurchasesInput = {
    create?: XOR<UserCreateWithoutTicketPurchasesInput, UserUncheckedCreateWithoutTicketPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<TicketCreateWithoutPurchasesInput, TicketUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPurchasesInput
    upsert?: TicketUpsertWithoutPurchasesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutPurchasesInput, TicketUpdateWithoutPurchasesInput>, TicketUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateOneRequiredWithoutTicketPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutTicketPurchasesInput, UserUncheckedCreateWithoutTicketPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketPurchasesInput
    upsert?: UserUpsertWithoutTicketPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketPurchasesInput, UserUpdateWithoutTicketPurchasesInput>, UserUncheckedUpdateWithoutTicketPurchasesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EventCreateWithoutOwnerInput = {
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    subscribers?: EventSubscriptionCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOwnerInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    subscribers?: EventSubscriptionUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOwnerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventCreateManyOwnerInputEnvelope = {
    data: EventCreateManyOwnerInput | EventCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type EventSubscriptionCreateWithoutUserInput = {
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutSubscribersInput
  }

  export type EventSubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    createdAt?: Date | string
  }

  export type EventSubscriptionCreateOrConnectWithoutUserInput = {
    where: EventSubscriptionWhereUniqueInput
    create: XOR<EventSubscriptionCreateWithoutUserInput, EventSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type EventSubscriptionCreateManyUserInputEnvelope = {
    data: EventSubscriptionCreateManyUserInput | EventSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketPurchaseCreateWithoutUserInput = {
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutPurchasesInput
  }

  export type TicketPurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    ticketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketPurchaseCreateOrConnectWithoutUserInput = {
    where: TicketPurchaseWhereUniqueInput
    create: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput>
  }

  export type TicketPurchaseCreateManyUserInputEnvelope = {
    data: TicketPurchaseCreateManyUserInput | TicketPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
  }

  export type EventUpdateManyWithWhereWithoutOwnerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOwnerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    dateStart?: DateTimeFilter<"Event"> | Date | string
    dateEnd?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    ownerId?: IntFilter<"Event"> | number
  }

  export type EventSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: EventSubscriptionWhereUniqueInput
    update: XOR<EventSubscriptionUpdateWithoutUserInput, EventSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<EventSubscriptionCreateWithoutUserInput, EventSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type EventSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: EventSubscriptionWhereUniqueInput
    data: XOR<EventSubscriptionUpdateWithoutUserInput, EventSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type EventSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: EventSubscriptionScalarWhereInput
    data: XOR<EventSubscriptionUpdateManyMutationInput, EventSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type EventSubscriptionScalarWhereInput = {
    AND?: EventSubscriptionScalarWhereInput | EventSubscriptionScalarWhereInput[]
    OR?: EventSubscriptionScalarWhereInput[]
    NOT?: EventSubscriptionScalarWhereInput | EventSubscriptionScalarWhereInput[]
    id?: IntFilter<"EventSubscription"> | number
    userId?: IntFilter<"EventSubscription"> | number
    eventId?: IntFilter<"EventSubscription"> | number
    createdAt?: DateTimeFilter<"EventSubscription"> | Date | string
  }

  export type TicketPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketPurchaseWhereUniqueInput
    update: XOR<TicketPurchaseUpdateWithoutUserInput, TicketPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput>
  }

  export type TicketPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketPurchaseWhereUniqueInput
    data: XOR<TicketPurchaseUpdateWithoutUserInput, TicketPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type TicketPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: TicketPurchaseScalarWhereInput
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketPurchaseScalarWhereInput = {
    AND?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
    OR?: TicketPurchaseScalarWhereInput[]
    NOT?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
    id?: IntFilter<"TicketPurchase"> | number
    quantity?: IntFilter<"TicketPurchase"> | number
    totalPaid?: DecimalFilter<"TicketPurchase"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"TicketPurchase"> | string
    ticketId?: IntFilter<"TicketPurchase"> | number
    userId?: IntFilter<"TicketPurchase"> | number
    createdAt?: DateTimeFilter<"TicketPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"TicketPurchase"> | Date | string
  }

  export type UserCreateWithoutOwnedEventsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    eventSubscriptions?: EventSubscriptionCreateNestedManyWithoutUserInput
    ticketPurchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedEventsInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    eventSubscriptions?: EventSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ticketPurchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedEventsInput, UserUncheckedCreateWithoutOwnedEventsInput>
  }

  export type EventSubscriptionCreateWithoutEventInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEventSubscriptionsInput
  }

  export type EventSubscriptionUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type EventSubscriptionCreateOrConnectWithoutEventInput = {
    where: EventSubscriptionWhereUniqueInput
    create: XOR<EventSubscriptionCreateWithoutEventInput, EventSubscriptionUncheckedCreateWithoutEventInput>
  }

  export type EventSubscriptionCreateManyEventInputEnvelope = {
    data: EventSubscriptionCreateManyEventInput | EventSubscriptionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutEventInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
    purchases?: TicketPurchaseCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedEventsInput = {
    update: XOR<UserUpdateWithoutOwnedEventsInput, UserUncheckedUpdateWithoutOwnedEventsInput>
    create: XOR<UserCreateWithoutOwnedEventsInput, UserUncheckedCreateWithoutOwnedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedEventsInput, UserUncheckedUpdateWithoutOwnedEventsInput>
  }

  export type UserUpdateWithoutOwnedEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSubscriptions?: EventSubscriptionUpdateManyWithoutUserNestedInput
    ticketPurchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSubscriptions?: EventSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ticketPurchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventSubscriptionUpsertWithWhereUniqueWithoutEventInput = {
    where: EventSubscriptionWhereUniqueInput
    update: XOR<EventSubscriptionUpdateWithoutEventInput, EventSubscriptionUncheckedUpdateWithoutEventInput>
    create: XOR<EventSubscriptionCreateWithoutEventInput, EventSubscriptionUncheckedCreateWithoutEventInput>
  }

  export type EventSubscriptionUpdateWithWhereUniqueWithoutEventInput = {
    where: EventSubscriptionWhereUniqueInput
    data: XOR<EventSubscriptionUpdateWithoutEventInput, EventSubscriptionUncheckedUpdateWithoutEventInput>
  }

  export type EventSubscriptionUpdateManyWithWhereWithoutEventInput = {
    where: EventSubscriptionScalarWhereInput
    data: XOR<EventSubscriptionUpdateManyMutationInput, EventSubscriptionUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    name?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Ticket"> | number
    eventId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type UserCreateWithoutEventSubscriptionsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    ownedEvents?: EventCreateNestedManyWithoutOwnerInput
    ticketPurchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventSubscriptionsInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    ownedEvents?: EventUncheckedCreateNestedManyWithoutOwnerInput
    ticketPurchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventSubscriptionsInput, UserUncheckedCreateWithoutEventSubscriptionsInput>
  }

  export type EventCreateWithoutSubscribersInput = {
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedEventsInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutSubscribersInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    ownerId: number
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutSubscribersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSubscribersInput, EventUncheckedCreateWithoutSubscribersInput>
  }

  export type UserUpsertWithoutEventSubscriptionsInput = {
    update: XOR<UserUpdateWithoutEventSubscriptionsInput, UserUncheckedUpdateWithoutEventSubscriptionsInput>
    create: XOR<UserCreateWithoutEventSubscriptionsInput, UserUncheckedCreateWithoutEventSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventSubscriptionsInput, UserUncheckedUpdateWithoutEventSubscriptionsInput>
  }

  export type UserUpdateWithoutEventSubscriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedEvents?: EventUpdateManyWithoutOwnerNestedInput
    ticketPurchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedEvents?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    ticketPurchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutSubscribersInput = {
    update: XOR<EventUpdateWithoutSubscribersInput, EventUncheckedUpdateWithoutSubscribersInput>
    create: XOR<EventCreateWithoutSubscribersInput, EventUncheckedCreateWithoutSubscribersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutSubscribersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutSubscribersInput, EventUncheckedUpdateWithoutSubscribersInput>
  }

  export type EventUpdateWithoutSubscribersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedEventsNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutSubscribersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutTicketsInput = {
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedEventsInput
    subscribers?: EventSubscriptionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketsInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
    ownerId: number
    subscribers?: EventSubscriptionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
  }

  export type TicketPurchaseCreateWithoutTicketInput = {
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTicketPurchasesInput
  }

  export type TicketPurchaseUncheckedCreateWithoutTicketInput = {
    id?: number
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketPurchaseCreateOrConnectWithoutTicketInput = {
    where: TicketPurchaseWhereUniqueInput
    create: XOR<TicketPurchaseCreateWithoutTicketInput, TicketPurchaseUncheckedCreateWithoutTicketInput>
  }

  export type TicketPurchaseCreateManyTicketInputEnvelope = {
    data: TicketPurchaseCreateManyTicketInput | TicketPurchaseCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTicketsInput = {
    update: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type EventUpdateWithoutTicketsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedEventsNestedInput
    subscribers?: EventSubscriptionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    subscribers?: EventSubscriptionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TicketPurchaseUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketPurchaseWhereUniqueInput
    update: XOR<TicketPurchaseUpdateWithoutTicketInput, TicketPurchaseUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketPurchaseCreateWithoutTicketInput, TicketPurchaseUncheckedCreateWithoutTicketInput>
  }

  export type TicketPurchaseUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketPurchaseWhereUniqueInput
    data: XOR<TicketPurchaseUpdateWithoutTicketInput, TicketPurchaseUncheckedUpdateWithoutTicketInput>
  }

  export type TicketPurchaseUpdateManyWithWhereWithoutTicketInput = {
    where: TicketPurchaseScalarWhereInput
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateWithoutPurchasesInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutPurchasesInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    eventId: number
    createdAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutPurchasesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPurchasesInput, TicketUncheckedCreateWithoutPurchasesInput>
  }

  export type UserCreateWithoutTicketPurchasesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    ownedEvents?: EventCreateNestedManyWithoutOwnerInput
    eventSubscriptions?: EventSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketPurchasesInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    ownedEvents?: EventUncheckedCreateNestedManyWithoutOwnerInput
    eventSubscriptions?: EventSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketPurchasesInput, UserUncheckedCreateWithoutTicketPurchasesInput>
  }

  export type TicketUpsertWithoutPurchasesInput = {
    update: XOR<TicketUpdateWithoutPurchasesInput, TicketUncheckedUpdateWithoutPurchasesInput>
    create: XOR<TicketCreateWithoutPurchasesInput, TicketUncheckedCreateWithoutPurchasesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutPurchasesInput, TicketUncheckedUpdateWithoutPurchasesInput>
  }

  export type TicketUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTicketPurchasesInput = {
    update: XOR<UserUpdateWithoutTicketPurchasesInput, UserUncheckedUpdateWithoutTicketPurchasesInput>
    create: XOR<UserCreateWithoutTicketPurchasesInput, UserUncheckedCreateWithoutTicketPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketPurchasesInput, UserUncheckedUpdateWithoutTicketPurchasesInput>
  }

  export type UserUpdateWithoutTicketPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedEvents?: EventUpdateManyWithoutOwnerNestedInput
    eventSubscriptions?: EventSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedEvents?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    eventSubscriptions?: EventSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateManyOwnerInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    dateStart: Date | string
    dateEnd: Date | string
    createdAt?: Date | string
  }

  export type EventSubscriptionCreateManyUserInput = {
    id?: number
    eventId: number
    createdAt?: Date | string
  }

  export type TicketPurchaseCreateManyUserInput = {
    id?: number
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    ticketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribers?: EventSubscriptionUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribers?: EventSubscriptionUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSubscriptionUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutSubscribersNestedInput
  }

  export type EventSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TicketPurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSubscriptionCreateManyEventInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type TicketCreateManyEventInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    createdAt?: Date | string
  }

  export type EventSubscriptionUpdateWithoutEventInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventSubscriptionsNestedInput
  }

  export type EventSubscriptionUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSubscriptionUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TicketPurchaseUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseCreateManyTicketInput = {
    id?: number
    quantity: number
    totalPaid: Decimal | DecimalJsLike | number | string
    status: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketPurchaseUpdateWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketPurchasesNestedInput
  }

  export type TicketPurchaseUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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