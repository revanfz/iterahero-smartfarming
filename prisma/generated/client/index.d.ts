
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Greenhouse
 * 
 */
export type Greenhouse = $Result.DefaultSelection<Prisma.$GreenhousePayload>
/**
 * Model Peracikan
 * 
 */
export type Peracikan = $Result.DefaultSelection<Prisma.$PeracikanPayload>
/**
 * Model Penjadwalan
 * 
 */
export type Penjadwalan = $Result.DefaultSelection<Prisma.$PenjadwalanPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.greenhouse`: Exposes CRUD operations for the **Greenhouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Greenhouses
    * const greenhouses = await prisma.greenhouse.findMany()
    * ```
    */
  get greenhouse(): Prisma.GreenhouseDelegate<ExtArgs>;

  /**
   * `prisma.peracikan`: Exposes CRUD operations for the **Peracikan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peracikans
    * const peracikans = await prisma.peracikan.findMany()
    * ```
    */
  get peracikan(): Prisma.PeracikanDelegate<ExtArgs>;

  /**
   * `prisma.penjadwalan`: Exposes CRUD operations for the **Penjadwalan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penjadwalans
    * const penjadwalans = await prisma.penjadwalan.findMany()
    * ```
    */
  get penjadwalan(): Prisma.PenjadwalanDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    User: 'User',
    Greenhouse: 'Greenhouse',
    Peracikan: 'Peracikan',
    Penjadwalan: 'Penjadwalan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'greenhouse' | 'peracikan' | 'penjadwalan'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Greenhouse: {
        payload: Prisma.$GreenhousePayload<ExtArgs>
        fields: Prisma.GreenhouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GreenhouseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GreenhouseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload>
          }
          findFirst: {
            args: Prisma.GreenhouseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GreenhouseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload>
          }
          findMany: {
            args: Prisma.GreenhouseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload>[]
          }
          create: {
            args: Prisma.GreenhouseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload>
          }
          createMany: {
            args: Prisma.GreenhouseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GreenhouseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload>
          }
          update: {
            args: Prisma.GreenhouseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload>
          }
          deleteMany: {
            args: Prisma.GreenhouseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GreenhouseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GreenhouseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GreenhousePayload>
          }
          aggregate: {
            args: Prisma.GreenhouseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGreenhouse>
          }
          groupBy: {
            args: Prisma.GreenhouseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GreenhouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.GreenhouseCountArgs<ExtArgs>,
            result: $Utils.Optional<GreenhouseCountAggregateOutputType> | number
          }
        }
      }
      Peracikan: {
        payload: Prisma.$PeracikanPayload<ExtArgs>
        fields: Prisma.PeracikanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeracikanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeracikanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload>
          }
          findFirst: {
            args: Prisma.PeracikanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeracikanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload>
          }
          findMany: {
            args: Prisma.PeracikanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload>[]
          }
          create: {
            args: Prisma.PeracikanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload>
          }
          createMany: {
            args: Prisma.PeracikanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PeracikanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload>
          }
          update: {
            args: Prisma.PeracikanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload>
          }
          deleteMany: {
            args: Prisma.PeracikanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PeracikanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PeracikanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeracikanPayload>
          }
          aggregate: {
            args: Prisma.PeracikanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePeracikan>
          }
          groupBy: {
            args: Prisma.PeracikanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PeracikanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeracikanCountArgs<ExtArgs>,
            result: $Utils.Optional<PeracikanCountAggregateOutputType> | number
          }
        }
      }
      Penjadwalan: {
        payload: Prisma.$PenjadwalanPayload<ExtArgs>
        fields: Prisma.PenjadwalanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenjadwalanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenjadwalanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          findFirst: {
            args: Prisma.PenjadwalanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenjadwalanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          findMany: {
            args: Prisma.PenjadwalanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>[]
          }
          create: {
            args: Prisma.PenjadwalanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          createMany: {
            args: Prisma.PenjadwalanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PenjadwalanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          update: {
            args: Prisma.PenjadwalanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          deleteMany: {
            args: Prisma.PenjadwalanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PenjadwalanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PenjadwalanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          aggregate: {
            args: Prisma.PenjadwalanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePenjadwalan>
          }
          groupBy: {
            args: Prisma.PenjadwalanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PenjadwalanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenjadwalanCountArgs<ExtArgs>,
            result: $Utils.Optional<PenjadwalanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    greenhouse: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    greenhouse?: boolean | UserCountOutputTypeCountGreenhouseArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGreenhouseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GreenhouseWhereInput
  }



  /**
   * Count Type GreenhouseCountOutputType
   */

  export type GreenhouseCountOutputType = {
    user: number
    peracikan: number
  }

  export type GreenhouseCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | GreenhouseCountOutputTypeCountUserArgs
    peracikan?: boolean | GreenhouseCountOutputTypeCountPeracikanArgs
  }

  // Custom InputTypes

  /**
   * GreenhouseCountOutputType without action
   */
  export type GreenhouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenhouseCountOutputType
     */
    select?: GreenhouseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GreenhouseCountOutputType without action
   */
  export type GreenhouseCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * GreenhouseCountOutputType without action
   */
  export type GreenhouseCountOutputTypeCountPeracikanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PeracikanWhereInput
  }



  /**
   * Count Type PeracikanCountOutputType
   */

  export type PeracikanCountOutputType = {
    penjadwalan: number
  }

  export type PeracikanCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    penjadwalan?: boolean | PeracikanCountOutputTypeCountPenjadwalanArgs
  }

  // Custom InputTypes

  /**
   * PeracikanCountOutputType without action
   */
  export type PeracikanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeracikanCountOutputType
     */
    select?: PeracikanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PeracikanCountOutputType without action
   */
  export type PeracikanCountOutputTypeCountPenjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PenjadwalanWhereInput
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
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    created_at: number
    updated_at: number
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
    username?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    username: string
    email: string
    password: string
    role: string
    created_at: Date
    updated_at: Date | null
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


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    greenhouse?: boolean | User$greenhouseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    greenhouse?: boolean | User$greenhouseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      greenhouse: Prisma.$GreenhousePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      username: string
      email: string
      password: string
      role: string
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    greenhouse<T extends User$greenhouseArgs<ExtArgs> = {}>(args?: Subset<T, User$greenhouseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.greenhouse
   */
  export type User$greenhouseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    where?: GreenhouseWhereInput
    orderBy?: GreenhouseOrderByWithRelationInput | GreenhouseOrderByWithRelationInput[]
    cursor?: GreenhouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GreenhouseScalarFieldEnum | GreenhouseScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Greenhouse
   */

  export type AggregateGreenhouse = {
    _count: GreenhouseCountAggregateOutputType | null
    _avg: GreenhouseAvgAggregateOutputType | null
    _sum: GreenhouseSumAggregateOutputType | null
    _min: GreenhouseMinAggregateOutputType | null
    _max: GreenhouseMaxAggregateOutputType | null
  }

  export type GreenhouseAvgAggregateOutputType = {
    id: number | null
  }

  export type GreenhouseSumAggregateOutputType = {
    id: number | null
  }

  export type GreenhouseMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type GreenhouseMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type GreenhouseCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type GreenhouseAvgAggregateInputType = {
    id?: true
  }

  export type GreenhouseSumAggregateInputType = {
    id?: true
  }

  export type GreenhouseMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type GreenhouseMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type GreenhouseCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type GreenhouseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Greenhouse to aggregate.
     */
    where?: GreenhouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Greenhouses to fetch.
     */
    orderBy?: GreenhouseOrderByWithRelationInput | GreenhouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GreenhouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Greenhouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Greenhouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Greenhouses
    **/
    _count?: true | GreenhouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GreenhouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GreenhouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GreenhouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GreenhouseMaxAggregateInputType
  }

  export type GetGreenhouseAggregateType<T extends GreenhouseAggregateArgs> = {
        [P in keyof T & keyof AggregateGreenhouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGreenhouse[P]>
      : GetScalarType<T[P], AggregateGreenhouse[P]>
  }




  export type GreenhouseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GreenhouseWhereInput
    orderBy?: GreenhouseOrderByWithAggregationInput | GreenhouseOrderByWithAggregationInput[]
    by: GreenhouseScalarFieldEnum[] | GreenhouseScalarFieldEnum
    having?: GreenhouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GreenhouseCountAggregateInputType | true
    _avg?: GreenhouseAvgAggregateInputType
    _sum?: GreenhouseSumAggregateInputType
    _min?: GreenhouseMinAggregateInputType
    _max?: GreenhouseMaxAggregateInputType
  }

  export type GreenhouseGroupByOutputType = {
    id: number
    nama: string
    _count: GreenhouseCountAggregateOutputType | null
    _avg: GreenhouseAvgAggregateOutputType | null
    _sum: GreenhouseSumAggregateOutputType | null
    _min: GreenhouseMinAggregateOutputType | null
    _max: GreenhouseMaxAggregateOutputType | null
  }

  type GetGreenhouseGroupByPayload<T extends GreenhouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GreenhouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GreenhouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GreenhouseGroupByOutputType[P]>
            : GetScalarType<T[P], GreenhouseGroupByOutputType[P]>
        }
      >
    >


  export type GreenhouseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    user?: boolean | Greenhouse$userArgs<ExtArgs>
    peracikan?: boolean | Greenhouse$peracikanArgs<ExtArgs>
    _count?: boolean | GreenhouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["greenhouse"]>

  export type GreenhouseSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type GreenhouseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Greenhouse$userArgs<ExtArgs>
    peracikan?: boolean | Greenhouse$peracikanArgs<ExtArgs>
    _count?: boolean | GreenhouseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GreenhousePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Greenhouse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      peracikan: Prisma.$PeracikanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nama: string
    }, ExtArgs["result"]["greenhouse"]>
    composites: {}
  }


  type GreenhouseGetPayload<S extends boolean | null | undefined | GreenhouseDefaultArgs> = $Result.GetResult<Prisma.$GreenhousePayload, S>

  type GreenhouseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GreenhouseFindManyArgs, 'select' | 'include'> & {
      select?: GreenhouseCountAggregateInputType | true
    }

  export interface GreenhouseDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Greenhouse'], meta: { name: 'Greenhouse' } }
    /**
     * Find zero or one Greenhouse that matches the filter.
     * @param {GreenhouseFindUniqueArgs} args - Arguments to find a Greenhouse
     * @example
     * // Get one Greenhouse
     * const greenhouse = await prisma.greenhouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GreenhouseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GreenhouseFindUniqueArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Greenhouse that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GreenhouseFindUniqueOrThrowArgs} args - Arguments to find a Greenhouse
     * @example
     * // Get one Greenhouse
     * const greenhouse = await prisma.greenhouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GreenhouseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenhouseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Greenhouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenhouseFindFirstArgs} args - Arguments to find a Greenhouse
     * @example
     * // Get one Greenhouse
     * const greenhouse = await prisma.greenhouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GreenhouseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenhouseFindFirstArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Greenhouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenhouseFindFirstOrThrowArgs} args - Arguments to find a Greenhouse
     * @example
     * // Get one Greenhouse
     * const greenhouse = await prisma.greenhouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GreenhouseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenhouseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Greenhouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenhouseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Greenhouses
     * const greenhouses = await prisma.greenhouse.findMany()
     * 
     * // Get first 10 Greenhouses
     * const greenhouses = await prisma.greenhouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const greenhouseWithIdOnly = await prisma.greenhouse.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GreenhouseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenhouseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Greenhouse.
     * @param {GreenhouseCreateArgs} args - Arguments to create a Greenhouse.
     * @example
     * // Create one Greenhouse
     * const Greenhouse = await prisma.greenhouse.create({
     *   data: {
     *     // ... data to create a Greenhouse
     *   }
     * })
     * 
    **/
    create<T extends GreenhouseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GreenhouseCreateArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Greenhouses.
     *     @param {GreenhouseCreateManyArgs} args - Arguments to create many Greenhouses.
     *     @example
     *     // Create many Greenhouses
     *     const greenhouse = await prisma.greenhouse.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GreenhouseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenhouseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Greenhouse.
     * @param {GreenhouseDeleteArgs} args - Arguments to delete one Greenhouse.
     * @example
     * // Delete one Greenhouse
     * const Greenhouse = await prisma.greenhouse.delete({
     *   where: {
     *     // ... filter to delete one Greenhouse
     *   }
     * })
     * 
    **/
    delete<T extends GreenhouseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GreenhouseDeleteArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Greenhouse.
     * @param {GreenhouseUpdateArgs} args - Arguments to update one Greenhouse.
     * @example
     * // Update one Greenhouse
     * const greenhouse = await prisma.greenhouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GreenhouseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GreenhouseUpdateArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Greenhouses.
     * @param {GreenhouseDeleteManyArgs} args - Arguments to filter Greenhouses to delete.
     * @example
     * // Delete a few Greenhouses
     * const { count } = await prisma.greenhouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GreenhouseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenhouseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Greenhouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenhouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Greenhouses
     * const greenhouse = await prisma.greenhouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GreenhouseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GreenhouseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Greenhouse.
     * @param {GreenhouseUpsertArgs} args - Arguments to update or create a Greenhouse.
     * @example
     * // Update or create a Greenhouse
     * const greenhouse = await prisma.greenhouse.upsert({
     *   create: {
     *     // ... data to create a Greenhouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Greenhouse we want to update
     *   }
     * })
    **/
    upsert<T extends GreenhouseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GreenhouseUpsertArgs<ExtArgs>>
    ): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Greenhouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenhouseCountArgs} args - Arguments to filter Greenhouses to count.
     * @example
     * // Count the number of Greenhouses
     * const count = await prisma.greenhouse.count({
     *   where: {
     *     // ... the filter for the Greenhouses we want to count
     *   }
     * })
    **/
    count<T extends GreenhouseCountArgs>(
      args?: Subset<T, GreenhouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GreenhouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Greenhouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenhouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GreenhouseAggregateArgs>(args: Subset<T, GreenhouseAggregateArgs>): Prisma.PrismaPromise<GetGreenhouseAggregateType<T>>

    /**
     * Group by Greenhouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenhouseGroupByArgs} args - Group by arguments.
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
      T extends GreenhouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GreenhouseGroupByArgs['orderBy'] }
        : { orderBy?: GreenhouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GreenhouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGreenhouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Greenhouse model
   */
  readonly fields: GreenhouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Greenhouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GreenhouseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Greenhouse$userArgs<ExtArgs> = {}>(args?: Subset<T, Greenhouse$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    peracikan<T extends Greenhouse$peracikanArgs<ExtArgs> = {}>(args?: Subset<T, Greenhouse$peracikanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Greenhouse model
   */ 
  interface GreenhouseFieldRefs {
    readonly id: FieldRef<"Greenhouse", 'Int'>
    readonly nama: FieldRef<"Greenhouse", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Greenhouse findUnique
   */
  export type GreenhouseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * Filter, which Greenhouse to fetch.
     */
    where: GreenhouseWhereUniqueInput
  }


  /**
   * Greenhouse findUniqueOrThrow
   */
  export type GreenhouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * Filter, which Greenhouse to fetch.
     */
    where: GreenhouseWhereUniqueInput
  }


  /**
   * Greenhouse findFirst
   */
  export type GreenhouseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * Filter, which Greenhouse to fetch.
     */
    where?: GreenhouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Greenhouses to fetch.
     */
    orderBy?: GreenhouseOrderByWithRelationInput | GreenhouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Greenhouses.
     */
    cursor?: GreenhouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Greenhouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Greenhouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Greenhouses.
     */
    distinct?: GreenhouseScalarFieldEnum | GreenhouseScalarFieldEnum[]
  }


  /**
   * Greenhouse findFirstOrThrow
   */
  export type GreenhouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * Filter, which Greenhouse to fetch.
     */
    where?: GreenhouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Greenhouses to fetch.
     */
    orderBy?: GreenhouseOrderByWithRelationInput | GreenhouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Greenhouses.
     */
    cursor?: GreenhouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Greenhouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Greenhouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Greenhouses.
     */
    distinct?: GreenhouseScalarFieldEnum | GreenhouseScalarFieldEnum[]
  }


  /**
   * Greenhouse findMany
   */
  export type GreenhouseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * Filter, which Greenhouses to fetch.
     */
    where?: GreenhouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Greenhouses to fetch.
     */
    orderBy?: GreenhouseOrderByWithRelationInput | GreenhouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Greenhouses.
     */
    cursor?: GreenhouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Greenhouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Greenhouses.
     */
    skip?: number
    distinct?: GreenhouseScalarFieldEnum | GreenhouseScalarFieldEnum[]
  }


  /**
   * Greenhouse create
   */
  export type GreenhouseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Greenhouse.
     */
    data: XOR<GreenhouseCreateInput, GreenhouseUncheckedCreateInput>
  }


  /**
   * Greenhouse createMany
   */
  export type GreenhouseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Greenhouses.
     */
    data: GreenhouseCreateManyInput | GreenhouseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Greenhouse update
   */
  export type GreenhouseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Greenhouse.
     */
    data: XOR<GreenhouseUpdateInput, GreenhouseUncheckedUpdateInput>
    /**
     * Choose, which Greenhouse to update.
     */
    where: GreenhouseWhereUniqueInput
  }


  /**
   * Greenhouse updateMany
   */
  export type GreenhouseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Greenhouses.
     */
    data: XOR<GreenhouseUpdateManyMutationInput, GreenhouseUncheckedUpdateManyInput>
    /**
     * Filter which Greenhouses to update
     */
    where?: GreenhouseWhereInput
  }


  /**
   * Greenhouse upsert
   */
  export type GreenhouseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Greenhouse to update in case it exists.
     */
    where: GreenhouseWhereUniqueInput
    /**
     * In case the Greenhouse found by the `where` argument doesn't exist, create a new Greenhouse with this data.
     */
    create: XOR<GreenhouseCreateInput, GreenhouseUncheckedCreateInput>
    /**
     * In case the Greenhouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GreenhouseUpdateInput, GreenhouseUncheckedUpdateInput>
  }


  /**
   * Greenhouse delete
   */
  export type GreenhouseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
    /**
     * Filter which Greenhouse to delete.
     */
    where: GreenhouseWhereUniqueInput
  }


  /**
   * Greenhouse deleteMany
   */
  export type GreenhouseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Greenhouses to delete
     */
    where?: GreenhouseWhereInput
  }


  /**
   * Greenhouse.user
   */
  export type Greenhouse$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Greenhouse.peracikan
   */
  export type Greenhouse$peracikanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    where?: PeracikanWhereInput
    orderBy?: PeracikanOrderByWithRelationInput | PeracikanOrderByWithRelationInput[]
    cursor?: PeracikanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeracikanScalarFieldEnum | PeracikanScalarFieldEnum[]
  }


  /**
   * Greenhouse without action
   */
  export type GreenhouseDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Greenhouse
     */
    select?: GreenhouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenhouseInclude<ExtArgs> | null
  }



  /**
   * Model Peracikan
   */

  export type AggregatePeracikan = {
    _count: PeracikanCountAggregateOutputType | null
    _avg: PeracikanAvgAggregateOutputType | null
    _sum: PeracikanSumAggregateOutputType | null
    _min: PeracikanMinAggregateOutputType | null
    _max: PeracikanMaxAggregateOutputType | null
  }

  export type PeracikanAvgAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
    greenhouseId: number | null
  }

  export type PeracikanSumAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
    greenhouseId: number | null
  }

  export type PeracikanMinAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
    nama: string | null
    greenhouseId: number | null
  }

  export type PeracikanMaxAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
    nama: string | null
    greenhouseId: number | null
  }

  export type PeracikanCountAggregateOutputType = {
    id: number
    ppm: number
    ph: number
    nama: number
    greenhouseId: number
    _all: number
  }


  export type PeracikanAvgAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    greenhouseId?: true
  }

  export type PeracikanSumAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    greenhouseId?: true
  }

  export type PeracikanMinAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    nama?: true
    greenhouseId?: true
  }

  export type PeracikanMaxAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    nama?: true
    greenhouseId?: true
  }

  export type PeracikanCountAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    nama?: true
    greenhouseId?: true
    _all?: true
  }

  export type PeracikanAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peracikan to aggregate.
     */
    where?: PeracikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peracikans to fetch.
     */
    orderBy?: PeracikanOrderByWithRelationInput | PeracikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeracikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peracikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peracikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peracikans
    **/
    _count?: true | PeracikanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeracikanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeracikanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeracikanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeracikanMaxAggregateInputType
  }

  export type GetPeracikanAggregateType<T extends PeracikanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeracikan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeracikan[P]>
      : GetScalarType<T[P], AggregatePeracikan[P]>
  }




  export type PeracikanGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PeracikanWhereInput
    orderBy?: PeracikanOrderByWithAggregationInput | PeracikanOrderByWithAggregationInput[]
    by: PeracikanScalarFieldEnum[] | PeracikanScalarFieldEnum
    having?: PeracikanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeracikanCountAggregateInputType | true
    _avg?: PeracikanAvgAggregateInputType
    _sum?: PeracikanSumAggregateInputType
    _min?: PeracikanMinAggregateInputType
    _max?: PeracikanMaxAggregateInputType
  }

  export type PeracikanGroupByOutputType = {
    id: number
    ppm: number
    ph: number
    nama: string
    greenhouseId: number
    _count: PeracikanCountAggregateOutputType | null
    _avg: PeracikanAvgAggregateOutputType | null
    _sum: PeracikanSumAggregateOutputType | null
    _min: PeracikanMinAggregateOutputType | null
    _max: PeracikanMaxAggregateOutputType | null
  }

  type GetPeracikanGroupByPayload<T extends PeracikanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeracikanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeracikanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeracikanGroupByOutputType[P]>
            : GetScalarType<T[P], PeracikanGroupByOutputType[P]>
        }
      >
    >


  export type PeracikanSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ppm?: boolean
    ph?: boolean
    nama?: boolean
    greenhouseId?: boolean
    greenhouse?: boolean | GreenhouseDefaultArgs<ExtArgs>
    penjadwalan?: boolean | Peracikan$penjadwalanArgs<ExtArgs>
    _count?: boolean | PeracikanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peracikan"]>

  export type PeracikanSelectScalar = {
    id?: boolean
    ppm?: boolean
    ph?: boolean
    nama?: boolean
    greenhouseId?: boolean
  }

  export type PeracikanInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    greenhouse?: boolean | GreenhouseDefaultArgs<ExtArgs>
    penjadwalan?: boolean | Peracikan$penjadwalanArgs<ExtArgs>
    _count?: boolean | PeracikanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PeracikanPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Peracikan"
    objects: {
      greenhouse: Prisma.$GreenhousePayload<ExtArgs>
      penjadwalan: Prisma.$PenjadwalanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      ppm: number
      ph: number
      nama: string
      greenhouseId: number
    }, ExtArgs["result"]["peracikan"]>
    composites: {}
  }


  type PeracikanGetPayload<S extends boolean | null | undefined | PeracikanDefaultArgs> = $Result.GetResult<Prisma.$PeracikanPayload, S>

  type PeracikanCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PeracikanFindManyArgs, 'select' | 'include'> & {
      select?: PeracikanCountAggregateInputType | true
    }

  export interface PeracikanDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peracikan'], meta: { name: 'Peracikan' } }
    /**
     * Find zero or one Peracikan that matches the filter.
     * @param {PeracikanFindUniqueArgs} args - Arguments to find a Peracikan
     * @example
     * // Get one Peracikan
     * const peracikan = await prisma.peracikan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PeracikanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PeracikanFindUniqueArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Peracikan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PeracikanFindUniqueOrThrowArgs} args - Arguments to find a Peracikan
     * @example
     * // Get one Peracikan
     * const peracikan = await prisma.peracikan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PeracikanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeracikanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Peracikan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeracikanFindFirstArgs} args - Arguments to find a Peracikan
     * @example
     * // Get one Peracikan
     * const peracikan = await prisma.peracikan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PeracikanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PeracikanFindFirstArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Peracikan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeracikanFindFirstOrThrowArgs} args - Arguments to find a Peracikan
     * @example
     * // Get one Peracikan
     * const peracikan = await prisma.peracikan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PeracikanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeracikanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Peracikans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeracikanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peracikans
     * const peracikans = await prisma.peracikan.findMany()
     * 
     * // Get first 10 Peracikans
     * const peracikans = await prisma.peracikan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peracikanWithIdOnly = await prisma.peracikan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PeracikanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeracikanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Peracikan.
     * @param {PeracikanCreateArgs} args - Arguments to create a Peracikan.
     * @example
     * // Create one Peracikan
     * const Peracikan = await prisma.peracikan.create({
     *   data: {
     *     // ... data to create a Peracikan
     *   }
     * })
     * 
    **/
    create<T extends PeracikanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PeracikanCreateArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Peracikans.
     *     @param {PeracikanCreateManyArgs} args - Arguments to create many Peracikans.
     *     @example
     *     // Create many Peracikans
     *     const peracikan = await prisma.peracikan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PeracikanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeracikanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peracikan.
     * @param {PeracikanDeleteArgs} args - Arguments to delete one Peracikan.
     * @example
     * // Delete one Peracikan
     * const Peracikan = await prisma.peracikan.delete({
     *   where: {
     *     // ... filter to delete one Peracikan
     *   }
     * })
     * 
    **/
    delete<T extends PeracikanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PeracikanDeleteArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Peracikan.
     * @param {PeracikanUpdateArgs} args - Arguments to update one Peracikan.
     * @example
     * // Update one Peracikan
     * const peracikan = await prisma.peracikan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PeracikanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PeracikanUpdateArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Peracikans.
     * @param {PeracikanDeleteManyArgs} args - Arguments to filter Peracikans to delete.
     * @example
     * // Delete a few Peracikans
     * const { count } = await prisma.peracikan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PeracikanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeracikanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peracikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeracikanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peracikans
     * const peracikan = await prisma.peracikan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PeracikanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PeracikanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peracikan.
     * @param {PeracikanUpsertArgs} args - Arguments to update or create a Peracikan.
     * @example
     * // Update or create a Peracikan
     * const peracikan = await prisma.peracikan.upsert({
     *   create: {
     *     // ... data to create a Peracikan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peracikan we want to update
     *   }
     * })
    **/
    upsert<T extends PeracikanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PeracikanUpsertArgs<ExtArgs>>
    ): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Peracikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeracikanCountArgs} args - Arguments to filter Peracikans to count.
     * @example
     * // Count the number of Peracikans
     * const count = await prisma.peracikan.count({
     *   where: {
     *     // ... the filter for the Peracikans we want to count
     *   }
     * })
    **/
    count<T extends PeracikanCountArgs>(
      args?: Subset<T, PeracikanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeracikanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peracikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeracikanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeracikanAggregateArgs>(args: Subset<T, PeracikanAggregateArgs>): Prisma.PrismaPromise<GetPeracikanAggregateType<T>>

    /**
     * Group by Peracikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeracikanGroupByArgs} args - Group by arguments.
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
      T extends PeracikanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeracikanGroupByArgs['orderBy'] }
        : { orderBy?: PeracikanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeracikanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeracikanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peracikan model
   */
  readonly fields: PeracikanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peracikan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeracikanClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    greenhouse<T extends GreenhouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GreenhouseDefaultArgs<ExtArgs>>): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    penjadwalan<T extends Peracikan$penjadwalanArgs<ExtArgs> = {}>(args?: Subset<T, Peracikan$penjadwalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Peracikan model
   */ 
  interface PeracikanFieldRefs {
    readonly id: FieldRef<"Peracikan", 'Int'>
    readonly ppm: FieldRef<"Peracikan", 'Int'>
    readonly ph: FieldRef<"Peracikan", 'Float'>
    readonly nama: FieldRef<"Peracikan", 'String'>
    readonly greenhouseId: FieldRef<"Peracikan", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Peracikan findUnique
   */
  export type PeracikanFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * Filter, which Peracikan to fetch.
     */
    where: PeracikanWhereUniqueInput
  }


  /**
   * Peracikan findUniqueOrThrow
   */
  export type PeracikanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * Filter, which Peracikan to fetch.
     */
    where: PeracikanWhereUniqueInput
  }


  /**
   * Peracikan findFirst
   */
  export type PeracikanFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * Filter, which Peracikan to fetch.
     */
    where?: PeracikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peracikans to fetch.
     */
    orderBy?: PeracikanOrderByWithRelationInput | PeracikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peracikans.
     */
    cursor?: PeracikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peracikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peracikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peracikans.
     */
    distinct?: PeracikanScalarFieldEnum | PeracikanScalarFieldEnum[]
  }


  /**
   * Peracikan findFirstOrThrow
   */
  export type PeracikanFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * Filter, which Peracikan to fetch.
     */
    where?: PeracikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peracikans to fetch.
     */
    orderBy?: PeracikanOrderByWithRelationInput | PeracikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peracikans.
     */
    cursor?: PeracikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peracikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peracikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peracikans.
     */
    distinct?: PeracikanScalarFieldEnum | PeracikanScalarFieldEnum[]
  }


  /**
   * Peracikan findMany
   */
  export type PeracikanFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * Filter, which Peracikans to fetch.
     */
    where?: PeracikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peracikans to fetch.
     */
    orderBy?: PeracikanOrderByWithRelationInput | PeracikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peracikans.
     */
    cursor?: PeracikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peracikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peracikans.
     */
    skip?: number
    distinct?: PeracikanScalarFieldEnum | PeracikanScalarFieldEnum[]
  }


  /**
   * Peracikan create
   */
  export type PeracikanCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * The data needed to create a Peracikan.
     */
    data: XOR<PeracikanCreateInput, PeracikanUncheckedCreateInput>
  }


  /**
   * Peracikan createMany
   */
  export type PeracikanCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peracikans.
     */
    data: PeracikanCreateManyInput | PeracikanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Peracikan update
   */
  export type PeracikanUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * The data needed to update a Peracikan.
     */
    data: XOR<PeracikanUpdateInput, PeracikanUncheckedUpdateInput>
    /**
     * Choose, which Peracikan to update.
     */
    where: PeracikanWhereUniqueInput
  }


  /**
   * Peracikan updateMany
   */
  export type PeracikanUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peracikans.
     */
    data: XOR<PeracikanUpdateManyMutationInput, PeracikanUncheckedUpdateManyInput>
    /**
     * Filter which Peracikans to update
     */
    where?: PeracikanWhereInput
  }


  /**
   * Peracikan upsert
   */
  export type PeracikanUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * The filter to search for the Peracikan to update in case it exists.
     */
    where: PeracikanWhereUniqueInput
    /**
     * In case the Peracikan found by the `where` argument doesn't exist, create a new Peracikan with this data.
     */
    create: XOR<PeracikanCreateInput, PeracikanUncheckedCreateInput>
    /**
     * In case the Peracikan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeracikanUpdateInput, PeracikanUncheckedUpdateInput>
  }


  /**
   * Peracikan delete
   */
  export type PeracikanDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
    /**
     * Filter which Peracikan to delete.
     */
    where: PeracikanWhereUniqueInput
  }


  /**
   * Peracikan deleteMany
   */
  export type PeracikanDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peracikans to delete
     */
    where?: PeracikanWhereInput
  }


  /**
   * Peracikan.penjadwalan
   */
  export type Peracikan$penjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    where?: PenjadwalanWhereInput
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    cursor?: PenjadwalanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }


  /**
   * Peracikan without action
   */
  export type PeracikanDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peracikan
     */
    select?: PeracikanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeracikanInclude<ExtArgs> | null
  }



  /**
   * Model Penjadwalan
   */

  export type AggregatePenjadwalan = {
    _count: PenjadwalanCountAggregateOutputType | null
    _avg: PenjadwalanAvgAggregateOutputType | null
    _sum: PenjadwalanSumAggregateOutputType | null
    _min: PenjadwalanMinAggregateOutputType | null
    _max: PenjadwalanMaxAggregateOutputType | null
  }

  export type PenjadwalanAvgAggregateOutputType = {
    id: number | null
    peracikanId: number | null
  }

  export type PenjadwalanSumAggregateOutputType = {
    id: number | null
    peracikanId: number | null
  }

  export type PenjadwalanMinAggregateOutputType = {
    id: number | null
    waktu: string | null
    peracikanId: number | null
  }

  export type PenjadwalanMaxAggregateOutputType = {
    id: number | null
    waktu: string | null
    peracikanId: number | null
  }

  export type PenjadwalanCountAggregateOutputType = {
    id: number
    waktu: number
    peracikanId: number
    _all: number
  }


  export type PenjadwalanAvgAggregateInputType = {
    id?: true
    peracikanId?: true
  }

  export type PenjadwalanSumAggregateInputType = {
    id?: true
    peracikanId?: true
  }

  export type PenjadwalanMinAggregateInputType = {
    id?: true
    waktu?: true
    peracikanId?: true
  }

  export type PenjadwalanMaxAggregateInputType = {
    id?: true
    waktu?: true
    peracikanId?: true
  }

  export type PenjadwalanCountAggregateInputType = {
    id?: true
    waktu?: true
    peracikanId?: true
    _all?: true
  }

  export type PenjadwalanAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjadwalan to aggregate.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penjadwalans
    **/
    _count?: true | PenjadwalanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjadwalanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjadwalanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjadwalanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjadwalanMaxAggregateInputType
  }

  export type GetPenjadwalanAggregateType<T extends PenjadwalanAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjadwalan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjadwalan[P]>
      : GetScalarType<T[P], AggregatePenjadwalan[P]>
  }




  export type PenjadwalanGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PenjadwalanWhereInput
    orderBy?: PenjadwalanOrderByWithAggregationInput | PenjadwalanOrderByWithAggregationInput[]
    by: PenjadwalanScalarFieldEnum[] | PenjadwalanScalarFieldEnum
    having?: PenjadwalanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjadwalanCountAggregateInputType | true
    _avg?: PenjadwalanAvgAggregateInputType
    _sum?: PenjadwalanSumAggregateInputType
    _min?: PenjadwalanMinAggregateInputType
    _max?: PenjadwalanMaxAggregateInputType
  }

  export type PenjadwalanGroupByOutputType = {
    id: number
    waktu: string
    peracikanId: number
    _count: PenjadwalanCountAggregateOutputType | null
    _avg: PenjadwalanAvgAggregateOutputType | null
    _sum: PenjadwalanSumAggregateOutputType | null
    _min: PenjadwalanMinAggregateOutputType | null
    _max: PenjadwalanMaxAggregateOutputType | null
  }

  type GetPenjadwalanGroupByPayload<T extends PenjadwalanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjadwalanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjadwalanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjadwalanGroupByOutputType[P]>
            : GetScalarType<T[P], PenjadwalanGroupByOutputType[P]>
        }
      >
    >


  export type PenjadwalanSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waktu?: boolean
    peracikanId?: boolean
    peracikan?: boolean | PeracikanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjadwalan"]>

  export type PenjadwalanSelectScalar = {
    id?: boolean
    waktu?: boolean
    peracikanId?: boolean
  }

  export type PenjadwalanInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    peracikan?: boolean | PeracikanDefaultArgs<ExtArgs>
  }


  export type $PenjadwalanPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Penjadwalan"
    objects: {
      peracikan: Prisma.$PeracikanPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      waktu: string
      peracikanId: number
    }, ExtArgs["result"]["penjadwalan"]>
    composites: {}
  }


  type PenjadwalanGetPayload<S extends boolean | null | undefined | PenjadwalanDefaultArgs> = $Result.GetResult<Prisma.$PenjadwalanPayload, S>

  type PenjadwalanCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PenjadwalanFindManyArgs, 'select' | 'include'> & {
      select?: PenjadwalanCountAggregateInputType | true
    }

  export interface PenjadwalanDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penjadwalan'], meta: { name: 'Penjadwalan' } }
    /**
     * Find zero or one Penjadwalan that matches the filter.
     * @param {PenjadwalanFindUniqueArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PenjadwalanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PenjadwalanFindUniqueArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Penjadwalan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PenjadwalanFindUniqueOrThrowArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PenjadwalanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PenjadwalanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Penjadwalan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanFindFirstArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PenjadwalanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PenjadwalanFindFirstArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Penjadwalan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanFindFirstOrThrowArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PenjadwalanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PenjadwalanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Penjadwalans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penjadwalans
     * const penjadwalans = await prisma.penjadwalan.findMany()
     * 
     * // Get first 10 Penjadwalans
     * const penjadwalans = await prisma.penjadwalan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penjadwalanWithIdOnly = await prisma.penjadwalan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PenjadwalanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PenjadwalanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Penjadwalan.
     * @param {PenjadwalanCreateArgs} args - Arguments to create a Penjadwalan.
     * @example
     * // Create one Penjadwalan
     * const Penjadwalan = await prisma.penjadwalan.create({
     *   data: {
     *     // ... data to create a Penjadwalan
     *   }
     * })
     * 
    **/
    create<T extends PenjadwalanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PenjadwalanCreateArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Penjadwalans.
     *     @param {PenjadwalanCreateManyArgs} args - Arguments to create many Penjadwalans.
     *     @example
     *     // Create many Penjadwalans
     *     const penjadwalan = await prisma.penjadwalan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PenjadwalanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PenjadwalanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Penjadwalan.
     * @param {PenjadwalanDeleteArgs} args - Arguments to delete one Penjadwalan.
     * @example
     * // Delete one Penjadwalan
     * const Penjadwalan = await prisma.penjadwalan.delete({
     *   where: {
     *     // ... filter to delete one Penjadwalan
     *   }
     * })
     * 
    **/
    delete<T extends PenjadwalanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PenjadwalanDeleteArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Penjadwalan.
     * @param {PenjadwalanUpdateArgs} args - Arguments to update one Penjadwalan.
     * @example
     * // Update one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PenjadwalanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PenjadwalanUpdateArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Penjadwalans.
     * @param {PenjadwalanDeleteManyArgs} args - Arguments to filter Penjadwalans to delete.
     * @example
     * // Delete a few Penjadwalans
     * const { count } = await prisma.penjadwalan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PenjadwalanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PenjadwalanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjadwalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penjadwalans
     * const penjadwalan = await prisma.penjadwalan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PenjadwalanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PenjadwalanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Penjadwalan.
     * @param {PenjadwalanUpsertArgs} args - Arguments to update or create a Penjadwalan.
     * @example
     * // Update or create a Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.upsert({
     *   create: {
     *     // ... data to create a Penjadwalan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penjadwalan we want to update
     *   }
     * })
    **/
    upsert<T extends PenjadwalanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PenjadwalanUpsertArgs<ExtArgs>>
    ): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Penjadwalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanCountArgs} args - Arguments to filter Penjadwalans to count.
     * @example
     * // Count the number of Penjadwalans
     * const count = await prisma.penjadwalan.count({
     *   where: {
     *     // ... the filter for the Penjadwalans we want to count
     *   }
     * })
    **/
    count<T extends PenjadwalanCountArgs>(
      args?: Subset<T, PenjadwalanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjadwalanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penjadwalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjadwalanAggregateArgs>(args: Subset<T, PenjadwalanAggregateArgs>): Prisma.PrismaPromise<GetPenjadwalanAggregateType<T>>

    /**
     * Group by Penjadwalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanGroupByArgs} args - Group by arguments.
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
      T extends PenjadwalanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenjadwalanGroupByArgs['orderBy'] }
        : { orderBy?: PenjadwalanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenjadwalanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjadwalanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penjadwalan model
   */
  readonly fields: PenjadwalanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penjadwalan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenjadwalanClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    peracikan<T extends PeracikanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeracikanDefaultArgs<ExtArgs>>): Prisma__PeracikanClient<$Result.GetResult<Prisma.$PeracikanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Penjadwalan model
   */ 
  interface PenjadwalanFieldRefs {
    readonly id: FieldRef<"Penjadwalan", 'Int'>
    readonly waktu: FieldRef<"Penjadwalan", 'String'>
    readonly peracikanId: FieldRef<"Penjadwalan", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Penjadwalan findUnique
   */
  export type PenjadwalanFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where: PenjadwalanWhereUniqueInput
  }


  /**
   * Penjadwalan findUniqueOrThrow
   */
  export type PenjadwalanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where: PenjadwalanWhereUniqueInput
  }


  /**
   * Penjadwalan findFirst
   */
  export type PenjadwalanFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjadwalans.
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjadwalans.
     */
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }


  /**
   * Penjadwalan findFirstOrThrow
   */
  export type PenjadwalanFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjadwalans.
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjadwalans.
     */
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }


  /**
   * Penjadwalan findMany
   */
  export type PenjadwalanFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalans to fetch.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penjadwalans.
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }


  /**
   * Penjadwalan create
   */
  export type PenjadwalanCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * The data needed to create a Penjadwalan.
     */
    data: XOR<PenjadwalanCreateInput, PenjadwalanUncheckedCreateInput>
  }


  /**
   * Penjadwalan createMany
   */
  export type PenjadwalanCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penjadwalans.
     */
    data: PenjadwalanCreateManyInput | PenjadwalanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Penjadwalan update
   */
  export type PenjadwalanUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * The data needed to update a Penjadwalan.
     */
    data: XOR<PenjadwalanUpdateInput, PenjadwalanUncheckedUpdateInput>
    /**
     * Choose, which Penjadwalan to update.
     */
    where: PenjadwalanWhereUniqueInput
  }


  /**
   * Penjadwalan updateMany
   */
  export type PenjadwalanUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penjadwalans.
     */
    data: XOR<PenjadwalanUpdateManyMutationInput, PenjadwalanUncheckedUpdateManyInput>
    /**
     * Filter which Penjadwalans to update
     */
    where?: PenjadwalanWhereInput
  }


  /**
   * Penjadwalan upsert
   */
  export type PenjadwalanUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * The filter to search for the Penjadwalan to update in case it exists.
     */
    where: PenjadwalanWhereUniqueInput
    /**
     * In case the Penjadwalan found by the `where` argument doesn't exist, create a new Penjadwalan with this data.
     */
    create: XOR<PenjadwalanCreateInput, PenjadwalanUncheckedCreateInput>
    /**
     * In case the Penjadwalan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenjadwalanUpdateInput, PenjadwalanUncheckedUpdateInput>
  }


  /**
   * Penjadwalan delete
   */
  export type PenjadwalanDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter which Penjadwalan to delete.
     */
    where: PenjadwalanWhereUniqueInput
  }


  /**
   * Penjadwalan deleteMany
   */
  export type PenjadwalanDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjadwalans to delete
     */
    where?: PenjadwalanWhereInput
  }


  /**
   * Penjadwalan without action
   */
  export type PenjadwalanDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PenjadwalanInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GreenhouseScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type GreenhouseScalarFieldEnum = (typeof GreenhouseScalarFieldEnum)[keyof typeof GreenhouseScalarFieldEnum]


  export const PeracikanScalarFieldEnum: {
    id: 'id',
    ppm: 'ppm',
    ph: 'ph',
    nama: 'nama',
    greenhouseId: 'greenhouseId'
  };

  export type PeracikanScalarFieldEnum = (typeof PeracikanScalarFieldEnum)[keyof typeof PeracikanScalarFieldEnum]


  export const PenjadwalanScalarFieldEnum: {
    id: 'id',
    waktu: 'waktu',
    peracikanId: 'peracikanId'
  };

  export type PenjadwalanScalarFieldEnum = (typeof PenjadwalanScalarFieldEnum)[keyof typeof PenjadwalanScalarFieldEnum]


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
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    greenhouse?: GreenhouseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    greenhouse?: GreenhouseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    greenhouse?: GreenhouseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type GreenhouseWhereInput = {
    AND?: GreenhouseWhereInput | GreenhouseWhereInput[]
    OR?: GreenhouseWhereInput[]
    NOT?: GreenhouseWhereInput | GreenhouseWhereInput[]
    id?: IntFilter<"Greenhouse"> | number
    nama?: StringFilter<"Greenhouse"> | string
    user?: UserListRelationFilter
    peracikan?: PeracikanListRelationFilter
  }

  export type GreenhouseOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    user?: UserOrderByRelationAggregateInput
    peracikan?: PeracikanOrderByRelationAggregateInput
  }

  export type GreenhouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GreenhouseWhereInput | GreenhouseWhereInput[]
    OR?: GreenhouseWhereInput[]
    NOT?: GreenhouseWhereInput | GreenhouseWhereInput[]
    nama?: StringFilter<"Greenhouse"> | string
    user?: UserListRelationFilter
    peracikan?: PeracikanListRelationFilter
  }, "id">

  export type GreenhouseOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: GreenhouseCountOrderByAggregateInput
    _avg?: GreenhouseAvgOrderByAggregateInput
    _max?: GreenhouseMaxOrderByAggregateInput
    _min?: GreenhouseMinOrderByAggregateInput
    _sum?: GreenhouseSumOrderByAggregateInput
  }

  export type GreenhouseScalarWhereWithAggregatesInput = {
    AND?: GreenhouseScalarWhereWithAggregatesInput | GreenhouseScalarWhereWithAggregatesInput[]
    OR?: GreenhouseScalarWhereWithAggregatesInput[]
    NOT?: GreenhouseScalarWhereWithAggregatesInput | GreenhouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Greenhouse"> | number
    nama?: StringWithAggregatesFilter<"Greenhouse"> | string
  }

  export type PeracikanWhereInput = {
    AND?: PeracikanWhereInput | PeracikanWhereInput[]
    OR?: PeracikanWhereInput[]
    NOT?: PeracikanWhereInput | PeracikanWhereInput[]
    id?: IntFilter<"Peracikan"> | number
    ppm?: IntFilter<"Peracikan"> | number
    ph?: FloatFilter<"Peracikan"> | number
    nama?: StringFilter<"Peracikan"> | string
    greenhouseId?: IntFilter<"Peracikan"> | number
    greenhouse?: XOR<GreenhouseRelationFilter, GreenhouseWhereInput>
    penjadwalan?: PenjadwalanListRelationFilter
  }

  export type PeracikanOrderByWithRelationInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
    greenhouseId?: SortOrder
    greenhouse?: GreenhouseOrderByWithRelationInput
    penjadwalan?: PenjadwalanOrderByRelationAggregateInput
  }

  export type PeracikanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeracikanWhereInput | PeracikanWhereInput[]
    OR?: PeracikanWhereInput[]
    NOT?: PeracikanWhereInput | PeracikanWhereInput[]
    ppm?: IntFilter<"Peracikan"> | number
    ph?: FloatFilter<"Peracikan"> | number
    nama?: StringFilter<"Peracikan"> | string
    greenhouseId?: IntFilter<"Peracikan"> | number
    greenhouse?: XOR<GreenhouseRelationFilter, GreenhouseWhereInput>
    penjadwalan?: PenjadwalanListRelationFilter
  }, "id">

  export type PeracikanOrderByWithAggregationInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
    greenhouseId?: SortOrder
    _count?: PeracikanCountOrderByAggregateInput
    _avg?: PeracikanAvgOrderByAggregateInput
    _max?: PeracikanMaxOrderByAggregateInput
    _min?: PeracikanMinOrderByAggregateInput
    _sum?: PeracikanSumOrderByAggregateInput
  }

  export type PeracikanScalarWhereWithAggregatesInput = {
    AND?: PeracikanScalarWhereWithAggregatesInput | PeracikanScalarWhereWithAggregatesInput[]
    OR?: PeracikanScalarWhereWithAggregatesInput[]
    NOT?: PeracikanScalarWhereWithAggregatesInput | PeracikanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Peracikan"> | number
    ppm?: IntWithAggregatesFilter<"Peracikan"> | number
    ph?: FloatWithAggregatesFilter<"Peracikan"> | number
    nama?: StringWithAggregatesFilter<"Peracikan"> | string
    greenhouseId?: IntWithAggregatesFilter<"Peracikan"> | number
  }

  export type PenjadwalanWhereInput = {
    AND?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    OR?: PenjadwalanWhereInput[]
    NOT?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    id?: IntFilter<"Penjadwalan"> | number
    waktu?: StringFilter<"Penjadwalan"> | string
    peracikanId?: IntFilter<"Penjadwalan"> | number
    peracikan?: XOR<PeracikanRelationFilter, PeracikanWhereInput>
  }

  export type PenjadwalanOrderByWithRelationInput = {
    id?: SortOrder
    waktu?: SortOrder
    peracikanId?: SortOrder
    peracikan?: PeracikanOrderByWithRelationInput
  }

  export type PenjadwalanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    OR?: PenjadwalanWhereInput[]
    NOT?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    waktu?: StringFilter<"Penjadwalan"> | string
    peracikanId?: IntFilter<"Penjadwalan"> | number
    peracikan?: XOR<PeracikanRelationFilter, PeracikanWhereInput>
  }, "id">

  export type PenjadwalanOrderByWithAggregationInput = {
    id?: SortOrder
    waktu?: SortOrder
    peracikanId?: SortOrder
    _count?: PenjadwalanCountOrderByAggregateInput
    _avg?: PenjadwalanAvgOrderByAggregateInput
    _max?: PenjadwalanMaxOrderByAggregateInput
    _min?: PenjadwalanMinOrderByAggregateInput
    _sum?: PenjadwalanSumOrderByAggregateInput
  }

  export type PenjadwalanScalarWhereWithAggregatesInput = {
    AND?: PenjadwalanScalarWhereWithAggregatesInput | PenjadwalanScalarWhereWithAggregatesInput[]
    OR?: PenjadwalanScalarWhereWithAggregatesInput[]
    NOT?: PenjadwalanScalarWhereWithAggregatesInput | PenjadwalanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Penjadwalan"> | number
    waktu?: StringWithAggregatesFilter<"Penjadwalan"> | string
    peracikanId?: IntWithAggregatesFilter<"Penjadwalan"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
    greenhouse?: GreenhouseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
    greenhouse?: GreenhouseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouse?: GreenhouseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouse?: GreenhouseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GreenhouseCreateInput = {
    nama: string
    user?: UserCreateNestedManyWithoutGreenhouseInput
    peracikan?: PeracikanCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUncheckedCreateInput = {
    id?: number
    nama: string
    user?: UserUncheckedCreateNestedManyWithoutGreenhouseInput
    peracikan?: PeracikanUncheckedCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutGreenhouseNestedInput
    peracikan?: PeracikanUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutGreenhouseNestedInput
    peracikan?: PeracikanUncheckedUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseCreateManyInput = {
    id?: number
    nama: string
  }

  export type GreenhouseUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GreenhouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PeracikanCreateInput = {
    ppm: number
    ph: number
    nama: string
    greenhouse: GreenhouseCreateNestedOneWithoutPeracikanInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutPeracikanInput
  }

  export type PeracikanUncheckedCreateInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
    greenhouseId: number
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutPeracikanInput
  }

  export type PeracikanUpdateInput = {
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    greenhouse?: GreenhouseUpdateOneRequiredWithoutPeracikanNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutPeracikanNestedInput
  }

  export type PeracikanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    greenhouseId?: IntFieldUpdateOperationsInput | number
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutPeracikanNestedInput
  }

  export type PeracikanCreateManyInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
    greenhouseId: number
  }

  export type PeracikanUpdateManyMutationInput = {
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PeracikanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    greenhouseId?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanCreateInput = {
    waktu: string
    peracikan: PeracikanCreateNestedOneWithoutPenjadwalanInput
  }

  export type PenjadwalanUncheckedCreateInput = {
    id?: number
    waktu: string
    peracikanId: number
  }

  export type PenjadwalanUpdateInput = {
    waktu?: StringFieldUpdateOperationsInput | string
    peracikan?: PeracikanUpdateOneRequiredWithoutPenjadwalanNestedInput
  }

  export type PenjadwalanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    peracikanId?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanCreateManyInput = {
    id?: number
    waktu: string
    peracikanId: number
  }

  export type PenjadwalanUpdateManyMutationInput = {
    waktu?: StringFieldUpdateOperationsInput | string
  }

  export type PenjadwalanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    peracikanId?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GreenhouseListRelationFilter = {
    every?: GreenhouseWhereInput
    some?: GreenhouseWhereInput
    none?: GreenhouseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GreenhouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PeracikanListRelationFilter = {
    every?: PeracikanWhereInput
    some?: PeracikanWhereInput
    none?: PeracikanWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeracikanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GreenhouseCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type GreenhouseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GreenhouseMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type GreenhouseMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type GreenhouseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GreenhouseRelationFilter = {
    is?: GreenhouseWhereInput
    isNot?: GreenhouseWhereInput
  }

  export type PenjadwalanListRelationFilter = {
    every?: PenjadwalanWhereInput
    some?: PenjadwalanWhereInput
    none?: PenjadwalanWhereInput
  }

  export type PenjadwalanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeracikanCountOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
    greenhouseId?: SortOrder
  }

  export type PeracikanAvgOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    greenhouseId?: SortOrder
  }

  export type PeracikanMaxOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
    greenhouseId?: SortOrder
  }

  export type PeracikanMinOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
    greenhouseId?: SortOrder
  }

  export type PeracikanSumOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    greenhouseId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PeracikanRelationFilter = {
    is?: PeracikanWhereInput
    isNot?: PeracikanWhereInput
  }

  export type PenjadwalanCountOrderByAggregateInput = {
    id?: SortOrder
    waktu?: SortOrder
    peracikanId?: SortOrder
  }

  export type PenjadwalanAvgOrderByAggregateInput = {
    id?: SortOrder
    peracikanId?: SortOrder
  }

  export type PenjadwalanMaxOrderByAggregateInput = {
    id?: SortOrder
    waktu?: SortOrder
    peracikanId?: SortOrder
  }

  export type PenjadwalanMinOrderByAggregateInput = {
    id?: SortOrder
    waktu?: SortOrder
    peracikanId?: SortOrder
  }

  export type PenjadwalanSumOrderByAggregateInput = {
    id?: SortOrder
    peracikanId?: SortOrder
  }

  export type GreenhouseCreateNestedManyWithoutUserInput = {
    create?: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput> | GreenhouseCreateWithoutUserInput[] | GreenhouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GreenhouseCreateOrConnectWithoutUserInput | GreenhouseCreateOrConnectWithoutUserInput[]
    connect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
  }

  export type GreenhouseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput> | GreenhouseCreateWithoutUserInput[] | GreenhouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GreenhouseCreateOrConnectWithoutUserInput | GreenhouseCreateOrConnectWithoutUserInput[]
    connect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GreenhouseUpdateManyWithoutUserNestedInput = {
    create?: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput> | GreenhouseCreateWithoutUserInput[] | GreenhouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GreenhouseCreateOrConnectWithoutUserInput | GreenhouseCreateOrConnectWithoutUserInput[]
    upsert?: GreenhouseUpsertWithWhereUniqueWithoutUserInput | GreenhouseUpsertWithWhereUniqueWithoutUserInput[]
    set?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    disconnect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    delete?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    connect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    update?: GreenhouseUpdateWithWhereUniqueWithoutUserInput | GreenhouseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GreenhouseUpdateManyWithWhereWithoutUserInput | GreenhouseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GreenhouseScalarWhereInput | GreenhouseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GreenhouseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput> | GreenhouseCreateWithoutUserInput[] | GreenhouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GreenhouseCreateOrConnectWithoutUserInput | GreenhouseCreateOrConnectWithoutUserInput[]
    upsert?: GreenhouseUpsertWithWhereUniqueWithoutUserInput | GreenhouseUpsertWithWhereUniqueWithoutUserInput[]
    set?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    disconnect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    delete?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    connect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
    update?: GreenhouseUpdateWithWhereUniqueWithoutUserInput | GreenhouseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GreenhouseUpdateManyWithWhereWithoutUserInput | GreenhouseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GreenhouseScalarWhereInput | GreenhouseScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput> | UserCreateWithoutGreenhouseInput[] | UserUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGreenhouseInput | UserCreateOrConnectWithoutGreenhouseInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PeracikanCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<PeracikanCreateWithoutGreenhouseInput, PeracikanUncheckedCreateWithoutGreenhouseInput> | PeracikanCreateWithoutGreenhouseInput[] | PeracikanUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: PeracikanCreateOrConnectWithoutGreenhouseInput | PeracikanCreateOrConnectWithoutGreenhouseInput[]
    createMany?: PeracikanCreateManyGreenhouseInputEnvelope
    connect?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput> | UserCreateWithoutGreenhouseInput[] | UserUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGreenhouseInput | UserCreateOrConnectWithoutGreenhouseInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PeracikanUncheckedCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<PeracikanCreateWithoutGreenhouseInput, PeracikanUncheckedCreateWithoutGreenhouseInput> | PeracikanCreateWithoutGreenhouseInput[] | PeracikanUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: PeracikanCreateOrConnectWithoutGreenhouseInput | PeracikanCreateOrConnectWithoutGreenhouseInput[]
    createMany?: PeracikanCreateManyGreenhouseInputEnvelope
    connect?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutGreenhouseNestedInput = {
    create?: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput> | UserCreateWithoutGreenhouseInput[] | UserUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGreenhouseInput | UserCreateOrConnectWithoutGreenhouseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGreenhouseInput | UserUpsertWithWhereUniqueWithoutGreenhouseInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGreenhouseInput | UserUpdateWithWhereUniqueWithoutGreenhouseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGreenhouseInput | UserUpdateManyWithWhereWithoutGreenhouseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PeracikanUpdateManyWithoutGreenhouseNestedInput = {
    create?: XOR<PeracikanCreateWithoutGreenhouseInput, PeracikanUncheckedCreateWithoutGreenhouseInput> | PeracikanCreateWithoutGreenhouseInput[] | PeracikanUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: PeracikanCreateOrConnectWithoutGreenhouseInput | PeracikanCreateOrConnectWithoutGreenhouseInput[]
    upsert?: PeracikanUpsertWithWhereUniqueWithoutGreenhouseInput | PeracikanUpsertWithWhereUniqueWithoutGreenhouseInput[]
    createMany?: PeracikanCreateManyGreenhouseInputEnvelope
    set?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    disconnect?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    delete?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    connect?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    update?: PeracikanUpdateWithWhereUniqueWithoutGreenhouseInput | PeracikanUpdateWithWhereUniqueWithoutGreenhouseInput[]
    updateMany?: PeracikanUpdateManyWithWhereWithoutGreenhouseInput | PeracikanUpdateManyWithWhereWithoutGreenhouseInput[]
    deleteMany?: PeracikanScalarWhereInput | PeracikanScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGreenhouseNestedInput = {
    create?: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput> | UserCreateWithoutGreenhouseInput[] | UserUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGreenhouseInput | UserCreateOrConnectWithoutGreenhouseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGreenhouseInput | UserUpsertWithWhereUniqueWithoutGreenhouseInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGreenhouseInput | UserUpdateWithWhereUniqueWithoutGreenhouseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGreenhouseInput | UserUpdateManyWithWhereWithoutGreenhouseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PeracikanUncheckedUpdateManyWithoutGreenhouseNestedInput = {
    create?: XOR<PeracikanCreateWithoutGreenhouseInput, PeracikanUncheckedCreateWithoutGreenhouseInput> | PeracikanCreateWithoutGreenhouseInput[] | PeracikanUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: PeracikanCreateOrConnectWithoutGreenhouseInput | PeracikanCreateOrConnectWithoutGreenhouseInput[]
    upsert?: PeracikanUpsertWithWhereUniqueWithoutGreenhouseInput | PeracikanUpsertWithWhereUniqueWithoutGreenhouseInput[]
    createMany?: PeracikanCreateManyGreenhouseInputEnvelope
    set?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    disconnect?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    delete?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    connect?: PeracikanWhereUniqueInput | PeracikanWhereUniqueInput[]
    update?: PeracikanUpdateWithWhereUniqueWithoutGreenhouseInput | PeracikanUpdateWithWhereUniqueWithoutGreenhouseInput[]
    updateMany?: PeracikanUpdateManyWithWhereWithoutGreenhouseInput | PeracikanUpdateManyWithWhereWithoutGreenhouseInput[]
    deleteMany?: PeracikanScalarWhereInput | PeracikanScalarWhereInput[]
  }

  export type GreenhouseCreateNestedOneWithoutPeracikanInput = {
    create?: XOR<GreenhouseCreateWithoutPeracikanInput, GreenhouseUncheckedCreateWithoutPeracikanInput>
    connectOrCreate?: GreenhouseCreateOrConnectWithoutPeracikanInput
    connect?: GreenhouseWhereUniqueInput
  }

  export type PenjadwalanCreateNestedManyWithoutPeracikanInput = {
    create?: XOR<PenjadwalanCreateWithoutPeracikanInput, PenjadwalanUncheckedCreateWithoutPeracikanInput> | PenjadwalanCreateWithoutPeracikanInput[] | PenjadwalanUncheckedCreateWithoutPeracikanInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutPeracikanInput | PenjadwalanCreateOrConnectWithoutPeracikanInput[]
    createMany?: PenjadwalanCreateManyPeracikanInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type PenjadwalanUncheckedCreateNestedManyWithoutPeracikanInput = {
    create?: XOR<PenjadwalanCreateWithoutPeracikanInput, PenjadwalanUncheckedCreateWithoutPeracikanInput> | PenjadwalanCreateWithoutPeracikanInput[] | PenjadwalanUncheckedCreateWithoutPeracikanInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutPeracikanInput | PenjadwalanCreateOrConnectWithoutPeracikanInput[]
    createMany?: PenjadwalanCreateManyPeracikanInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GreenhouseUpdateOneRequiredWithoutPeracikanNestedInput = {
    create?: XOR<GreenhouseCreateWithoutPeracikanInput, GreenhouseUncheckedCreateWithoutPeracikanInput>
    connectOrCreate?: GreenhouseCreateOrConnectWithoutPeracikanInput
    upsert?: GreenhouseUpsertWithoutPeracikanInput
    connect?: GreenhouseWhereUniqueInput
    update?: XOR<XOR<GreenhouseUpdateToOneWithWhereWithoutPeracikanInput, GreenhouseUpdateWithoutPeracikanInput>, GreenhouseUncheckedUpdateWithoutPeracikanInput>
  }

  export type PenjadwalanUpdateManyWithoutPeracikanNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutPeracikanInput, PenjadwalanUncheckedCreateWithoutPeracikanInput> | PenjadwalanCreateWithoutPeracikanInput[] | PenjadwalanUncheckedCreateWithoutPeracikanInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutPeracikanInput | PenjadwalanCreateOrConnectWithoutPeracikanInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutPeracikanInput | PenjadwalanUpsertWithWhereUniqueWithoutPeracikanInput[]
    createMany?: PenjadwalanCreateManyPeracikanInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutPeracikanInput | PenjadwalanUpdateWithWhereUniqueWithoutPeracikanInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutPeracikanInput | PenjadwalanUpdateManyWithWhereWithoutPeracikanInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type PenjadwalanUncheckedUpdateManyWithoutPeracikanNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutPeracikanInput, PenjadwalanUncheckedCreateWithoutPeracikanInput> | PenjadwalanCreateWithoutPeracikanInput[] | PenjadwalanUncheckedCreateWithoutPeracikanInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutPeracikanInput | PenjadwalanCreateOrConnectWithoutPeracikanInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutPeracikanInput | PenjadwalanUpsertWithWhereUniqueWithoutPeracikanInput[]
    createMany?: PenjadwalanCreateManyPeracikanInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutPeracikanInput | PenjadwalanUpdateWithWhereUniqueWithoutPeracikanInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutPeracikanInput | PenjadwalanUpdateManyWithWhereWithoutPeracikanInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type PeracikanCreateNestedOneWithoutPenjadwalanInput = {
    create?: XOR<PeracikanCreateWithoutPenjadwalanInput, PeracikanUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: PeracikanCreateOrConnectWithoutPenjadwalanInput
    connect?: PeracikanWhereUniqueInput
  }

  export type PeracikanUpdateOneRequiredWithoutPenjadwalanNestedInput = {
    create?: XOR<PeracikanCreateWithoutPenjadwalanInput, PeracikanUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: PeracikanCreateOrConnectWithoutPenjadwalanInput
    upsert?: PeracikanUpsertWithoutPenjadwalanInput
    connect?: PeracikanWhereUniqueInput
    update?: XOR<XOR<PeracikanUpdateToOneWithWhereWithoutPenjadwalanInput, PeracikanUpdateWithoutPenjadwalanInput>, PeracikanUncheckedUpdateWithoutPenjadwalanInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GreenhouseCreateWithoutUserInput = {
    nama: string
    peracikan?: PeracikanCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUncheckedCreateWithoutUserInput = {
    id?: number
    nama: string
    peracikan?: PeracikanUncheckedCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseCreateOrConnectWithoutUserInput = {
    where: GreenhouseWhereUniqueInput
    create: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput>
  }

  export type GreenhouseUpsertWithWhereUniqueWithoutUserInput = {
    where: GreenhouseWhereUniqueInput
    update: XOR<GreenhouseUpdateWithoutUserInput, GreenhouseUncheckedUpdateWithoutUserInput>
    create: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput>
  }

  export type GreenhouseUpdateWithWhereUniqueWithoutUserInput = {
    where: GreenhouseWhereUniqueInput
    data: XOR<GreenhouseUpdateWithoutUserInput, GreenhouseUncheckedUpdateWithoutUserInput>
  }

  export type GreenhouseUpdateManyWithWhereWithoutUserInput = {
    where: GreenhouseScalarWhereInput
    data: XOR<GreenhouseUpdateManyMutationInput, GreenhouseUncheckedUpdateManyWithoutUserInput>
  }

  export type GreenhouseScalarWhereInput = {
    AND?: GreenhouseScalarWhereInput | GreenhouseScalarWhereInput[]
    OR?: GreenhouseScalarWhereInput[]
    NOT?: GreenhouseScalarWhereInput | GreenhouseScalarWhereInput[]
    id?: IntFilter<"Greenhouse"> | number
    nama?: StringFilter<"Greenhouse"> | string
  }

  export type UserCreateWithoutGreenhouseInput = {
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UserUncheckedCreateWithoutGreenhouseInput = {
    id?: number
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutGreenhouseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput>
  }

  export type PeracikanCreateWithoutGreenhouseInput = {
    ppm: number
    ph: number
    nama: string
    penjadwalan?: PenjadwalanCreateNestedManyWithoutPeracikanInput
  }

  export type PeracikanUncheckedCreateWithoutGreenhouseInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutPeracikanInput
  }

  export type PeracikanCreateOrConnectWithoutGreenhouseInput = {
    where: PeracikanWhereUniqueInput
    create: XOR<PeracikanCreateWithoutGreenhouseInput, PeracikanUncheckedCreateWithoutGreenhouseInput>
  }

  export type PeracikanCreateManyGreenhouseInputEnvelope = {
    data: PeracikanCreateManyGreenhouseInput | PeracikanCreateManyGreenhouseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGreenhouseInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGreenhouseInput, UserUncheckedUpdateWithoutGreenhouseInput>
    create: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGreenhouseInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGreenhouseInput, UserUncheckedUpdateWithoutGreenhouseInput>
  }

  export type UserUpdateManyWithWhereWithoutGreenhouseInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGreenhouseInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type PeracikanUpsertWithWhereUniqueWithoutGreenhouseInput = {
    where: PeracikanWhereUniqueInput
    update: XOR<PeracikanUpdateWithoutGreenhouseInput, PeracikanUncheckedUpdateWithoutGreenhouseInput>
    create: XOR<PeracikanCreateWithoutGreenhouseInput, PeracikanUncheckedCreateWithoutGreenhouseInput>
  }

  export type PeracikanUpdateWithWhereUniqueWithoutGreenhouseInput = {
    where: PeracikanWhereUniqueInput
    data: XOR<PeracikanUpdateWithoutGreenhouseInput, PeracikanUncheckedUpdateWithoutGreenhouseInput>
  }

  export type PeracikanUpdateManyWithWhereWithoutGreenhouseInput = {
    where: PeracikanScalarWhereInput
    data: XOR<PeracikanUpdateManyMutationInput, PeracikanUncheckedUpdateManyWithoutGreenhouseInput>
  }

  export type PeracikanScalarWhereInput = {
    AND?: PeracikanScalarWhereInput | PeracikanScalarWhereInput[]
    OR?: PeracikanScalarWhereInput[]
    NOT?: PeracikanScalarWhereInput | PeracikanScalarWhereInput[]
    id?: IntFilter<"Peracikan"> | number
    ppm?: IntFilter<"Peracikan"> | number
    ph?: FloatFilter<"Peracikan"> | number
    nama?: StringFilter<"Peracikan"> | string
    greenhouseId?: IntFilter<"Peracikan"> | number
  }

  export type GreenhouseCreateWithoutPeracikanInput = {
    nama: string
    user?: UserCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUncheckedCreateWithoutPeracikanInput = {
    id?: number
    nama: string
    user?: UserUncheckedCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseCreateOrConnectWithoutPeracikanInput = {
    where: GreenhouseWhereUniqueInput
    create: XOR<GreenhouseCreateWithoutPeracikanInput, GreenhouseUncheckedCreateWithoutPeracikanInput>
  }

  export type PenjadwalanCreateWithoutPeracikanInput = {
    waktu: string
  }

  export type PenjadwalanUncheckedCreateWithoutPeracikanInput = {
    id?: number
    waktu: string
  }

  export type PenjadwalanCreateOrConnectWithoutPeracikanInput = {
    where: PenjadwalanWhereUniqueInput
    create: XOR<PenjadwalanCreateWithoutPeracikanInput, PenjadwalanUncheckedCreateWithoutPeracikanInput>
  }

  export type PenjadwalanCreateManyPeracikanInputEnvelope = {
    data: PenjadwalanCreateManyPeracikanInput | PenjadwalanCreateManyPeracikanInput[]
    skipDuplicates?: boolean
  }

  export type GreenhouseUpsertWithoutPeracikanInput = {
    update: XOR<GreenhouseUpdateWithoutPeracikanInput, GreenhouseUncheckedUpdateWithoutPeracikanInput>
    create: XOR<GreenhouseCreateWithoutPeracikanInput, GreenhouseUncheckedCreateWithoutPeracikanInput>
    where?: GreenhouseWhereInput
  }

  export type GreenhouseUpdateToOneWithWhereWithoutPeracikanInput = {
    where?: GreenhouseWhereInput
    data: XOR<GreenhouseUpdateWithoutPeracikanInput, GreenhouseUncheckedUpdateWithoutPeracikanInput>
  }

  export type GreenhouseUpdateWithoutPeracikanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateWithoutPeracikanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutGreenhouseNestedInput
  }

  export type PenjadwalanUpsertWithWhereUniqueWithoutPeracikanInput = {
    where: PenjadwalanWhereUniqueInput
    update: XOR<PenjadwalanUpdateWithoutPeracikanInput, PenjadwalanUncheckedUpdateWithoutPeracikanInput>
    create: XOR<PenjadwalanCreateWithoutPeracikanInput, PenjadwalanUncheckedCreateWithoutPeracikanInput>
  }

  export type PenjadwalanUpdateWithWhereUniqueWithoutPeracikanInput = {
    where: PenjadwalanWhereUniqueInput
    data: XOR<PenjadwalanUpdateWithoutPeracikanInput, PenjadwalanUncheckedUpdateWithoutPeracikanInput>
  }

  export type PenjadwalanUpdateManyWithWhereWithoutPeracikanInput = {
    where: PenjadwalanScalarWhereInput
    data: XOR<PenjadwalanUpdateManyMutationInput, PenjadwalanUncheckedUpdateManyWithoutPeracikanInput>
  }

  export type PenjadwalanScalarWhereInput = {
    AND?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
    OR?: PenjadwalanScalarWhereInput[]
    NOT?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
    id?: IntFilter<"Penjadwalan"> | number
    waktu?: StringFilter<"Penjadwalan"> | string
    peracikanId?: IntFilter<"Penjadwalan"> | number
  }

  export type PeracikanCreateWithoutPenjadwalanInput = {
    ppm: number
    ph: number
    nama: string
    greenhouse: GreenhouseCreateNestedOneWithoutPeracikanInput
  }

  export type PeracikanUncheckedCreateWithoutPenjadwalanInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
    greenhouseId: number
  }

  export type PeracikanCreateOrConnectWithoutPenjadwalanInput = {
    where: PeracikanWhereUniqueInput
    create: XOR<PeracikanCreateWithoutPenjadwalanInput, PeracikanUncheckedCreateWithoutPenjadwalanInput>
  }

  export type PeracikanUpsertWithoutPenjadwalanInput = {
    update: XOR<PeracikanUpdateWithoutPenjadwalanInput, PeracikanUncheckedUpdateWithoutPenjadwalanInput>
    create: XOR<PeracikanCreateWithoutPenjadwalanInput, PeracikanUncheckedCreateWithoutPenjadwalanInput>
    where?: PeracikanWhereInput
  }

  export type PeracikanUpdateToOneWithWhereWithoutPenjadwalanInput = {
    where?: PeracikanWhereInput
    data: XOR<PeracikanUpdateWithoutPenjadwalanInput, PeracikanUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type PeracikanUpdateWithoutPenjadwalanInput = {
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    greenhouse?: GreenhouseUpdateOneRequiredWithoutPeracikanNestedInput
  }

  export type PeracikanUncheckedUpdateWithoutPenjadwalanInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    greenhouseId?: IntFieldUpdateOperationsInput | number
  }

  export type GreenhouseUpdateWithoutUserInput = {
    nama?: StringFieldUpdateOperationsInput | string
    peracikan?: PeracikanUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    peracikan?: PeracikanUncheckedUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PeracikanCreateManyGreenhouseInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
  }

  export type UserUpdateWithoutGreenhouseInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutGreenhouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyWithoutGreenhouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PeracikanUpdateWithoutGreenhouseInput = {
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    penjadwalan?: PenjadwalanUpdateManyWithoutPeracikanNestedInput
  }

  export type PeracikanUncheckedUpdateWithoutGreenhouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutPeracikanNestedInput
  }

  export type PeracikanUncheckedUpdateManyWithoutGreenhouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PenjadwalanCreateManyPeracikanInput = {
    id?: number
    waktu: string
  }

  export type PenjadwalanUpdateWithoutPeracikanInput = {
    waktu?: StringFieldUpdateOperationsInput | string
  }

  export type PenjadwalanUncheckedUpdateWithoutPeracikanInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
  }

  export type PenjadwalanUncheckedUpdateManyWithoutPeracikanInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GreenhouseCountOutputTypeDefaultArgs instead
     */
    export type GreenhouseCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GreenhouseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeracikanCountOutputTypeDefaultArgs instead
     */
    export type PeracikanCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PeracikanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GreenhouseDefaultArgs instead
     */
    export type GreenhouseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GreenhouseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeracikanDefaultArgs instead
     */
    export type PeracikanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PeracikanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PenjadwalanDefaultArgs instead
     */
    export type PenjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PenjadwalanDefaultArgs<ExtArgs>

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