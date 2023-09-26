
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
 * Model Resep
 * 
 */
export type Resep = $Result.DefaultSelection<Prisma.$ResepPayload>
/**
 * Model Penjadwalan
 * 
 */
export type Penjadwalan = $Result.DefaultSelection<Prisma.$PenjadwalanPayload>
/**
 * Model Sensor
 * 
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>
/**
 * Model Selenoid
 * 
 */
export type Selenoid = $Result.DefaultSelection<Prisma.$SelenoidPayload>
/**
 * Model TandonBahan
 * 
 */
export type TandonBahan = $Result.DefaultSelection<Prisma.$TandonBahanPayload>
/**
 * Model Tandon
 * 
 */
export type Tandon = $Result.DefaultSelection<Prisma.$TandonPayload>

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
   * `prisma.resep`: Exposes CRUD operations for the **Resep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reseps
    * const reseps = await prisma.resep.findMany()
    * ```
    */
  get resep(): Prisma.ResepDelegate<ExtArgs>;

  /**
   * `prisma.penjadwalan`: Exposes CRUD operations for the **Penjadwalan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penjadwalans
    * const penjadwalans = await prisma.penjadwalan.findMany()
    * ```
    */
  get penjadwalan(): Prisma.PenjadwalanDelegate<ExtArgs>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensor.findMany()
    * ```
    */
  get sensor(): Prisma.SensorDelegate<ExtArgs>;

  /**
   * `prisma.selenoid`: Exposes CRUD operations for the **Selenoid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Selenoids
    * const selenoids = await prisma.selenoid.findMany()
    * ```
    */
  get selenoid(): Prisma.SelenoidDelegate<ExtArgs>;

  /**
   * `prisma.tandonBahan`: Exposes CRUD operations for the **TandonBahan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TandonBahans
    * const tandonBahans = await prisma.tandonBahan.findMany()
    * ```
    */
  get tandonBahan(): Prisma.TandonBahanDelegate<ExtArgs>;

  /**
   * `prisma.tandon`: Exposes CRUD operations for the **Tandon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tandons
    * const tandons = await prisma.tandon.findMany()
    * ```
    */
  get tandon(): Prisma.TandonDelegate<ExtArgs>;
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
    Resep: 'Resep',
    Penjadwalan: 'Penjadwalan',
    Sensor: 'Sensor',
    Selenoid: 'Selenoid',
    TandonBahan: 'TandonBahan',
    Tandon: 'Tandon'
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
      modelProps: 'user' | 'greenhouse' | 'resep' | 'penjadwalan' | 'sensor' | 'selenoid' | 'tandonBahan' | 'tandon'
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
      Resep: {
        payload: Prisma.$ResepPayload<ExtArgs>
        fields: Prisma.ResepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResepFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResepFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          findFirst: {
            args: Prisma.ResepFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResepFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          findMany: {
            args: Prisma.ResepFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>[]
          }
          create: {
            args: Prisma.ResepCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          createMany: {
            args: Prisma.ResepCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResepDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          update: {
            args: Prisma.ResepUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          deleteMany: {
            args: Prisma.ResepDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResepUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResepUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          aggregate: {
            args: Prisma.ResepAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResep>
          }
          groupBy: {
            args: Prisma.ResepGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResepGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResepCountArgs<ExtArgs>,
            result: $Utils.Optional<ResepCountAggregateOutputType> | number
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
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>
        fields: Prisma.SensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSensor>
          }
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>,
            result: $Utils.Optional<SensorCountAggregateOutputType> | number
          }
        }
      }
      Selenoid: {
        payload: Prisma.$SelenoidPayload<ExtArgs>
        fields: Prisma.SelenoidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SelenoidFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SelenoidFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload>
          }
          findFirst: {
            args: Prisma.SelenoidFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SelenoidFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload>
          }
          findMany: {
            args: Prisma.SelenoidFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload>[]
          }
          create: {
            args: Prisma.SelenoidCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload>
          }
          createMany: {
            args: Prisma.SelenoidCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SelenoidDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload>
          }
          update: {
            args: Prisma.SelenoidUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload>
          }
          deleteMany: {
            args: Prisma.SelenoidDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SelenoidUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SelenoidUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelenoidPayload>
          }
          aggregate: {
            args: Prisma.SelenoidAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSelenoid>
          }
          groupBy: {
            args: Prisma.SelenoidGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SelenoidGroupByOutputType>[]
          }
          count: {
            args: Prisma.SelenoidCountArgs<ExtArgs>,
            result: $Utils.Optional<SelenoidCountAggregateOutputType> | number
          }
        }
      }
      TandonBahan: {
        payload: Prisma.$TandonBahanPayload<ExtArgs>
        fields: Prisma.TandonBahanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TandonBahanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TandonBahanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload>
          }
          findFirst: {
            args: Prisma.TandonBahanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TandonBahanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload>
          }
          findMany: {
            args: Prisma.TandonBahanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload>[]
          }
          create: {
            args: Prisma.TandonBahanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload>
          }
          createMany: {
            args: Prisma.TandonBahanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TandonBahanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload>
          }
          update: {
            args: Prisma.TandonBahanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload>
          }
          deleteMany: {
            args: Prisma.TandonBahanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TandonBahanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TandonBahanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonBahanPayload>
          }
          aggregate: {
            args: Prisma.TandonBahanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTandonBahan>
          }
          groupBy: {
            args: Prisma.TandonBahanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TandonBahanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TandonBahanCountArgs<ExtArgs>,
            result: $Utils.Optional<TandonBahanCountAggregateOutputType> | number
          }
        }
      }
      Tandon: {
        payload: Prisma.$TandonPayload<ExtArgs>
        fields: Prisma.TandonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TandonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TandonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload>
          }
          findFirst: {
            args: Prisma.TandonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TandonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload>
          }
          findMany: {
            args: Prisma.TandonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload>[]
          }
          create: {
            args: Prisma.TandonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload>
          }
          createMany: {
            args: Prisma.TandonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TandonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload>
          }
          update: {
            args: Prisma.TandonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload>
          }
          deleteMany: {
            args: Prisma.TandonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TandonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TandonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TandonPayload>
          }
          aggregate: {
            args: Prisma.TandonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTandon>
          }
          groupBy: {
            args: Prisma.TandonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TandonGroupByOutputType>[]
          }
          count: {
            args: Prisma.TandonCountArgs<ExtArgs>,
            result: $Utils.Optional<TandonCountAggregateOutputType> | number
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
    tandon: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    greenhouse?: boolean | UserCountOutputTypeCountGreenhouseArgs
    tandon?: boolean | UserCountOutputTypeCountTandonArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTandonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TandonWhereInput
  }



  /**
   * Count Type GreenhouseCountOutputType
   */

  export type GreenhouseCountOutputType = {
    user: number
    selenoid: number
  }

  export type GreenhouseCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | GreenhouseCountOutputTypeCountUserArgs
    selenoid?: boolean | GreenhouseCountOutputTypeCountSelenoidArgs
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
  export type GreenhouseCountOutputTypeCountSelenoidArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SelenoidWhereInput
  }



  /**
   * Count Type ResepCountOutputType
   */

  export type ResepCountOutputType = {
    penjadwalan: number
  }

  export type ResepCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    penjadwalan?: boolean | ResepCountOutputTypeCountPenjadwalanArgs
  }

  // Custom InputTypes

  /**
   * ResepCountOutputType without action
   */
  export type ResepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResepCountOutputType
     */
    select?: ResepCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ResepCountOutputType without action
   */
  export type ResepCountOutputTypeCountPenjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PenjadwalanWhereInput
  }



  /**
   * Count Type TandonBahanCountOutputType
   */

  export type TandonBahanCountOutputType = {
    sensor: number
  }

  export type TandonBahanCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sensor?: boolean | TandonBahanCountOutputTypeCountSensorArgs
  }

  // Custom InputTypes

  /**
   * TandonBahanCountOutputType without action
   */
  export type TandonBahanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahanCountOutputType
     */
    select?: TandonBahanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TandonBahanCountOutputType without action
   */
  export type TandonBahanCountOutputTypeCountSensorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }



  /**
   * Count Type TandonCountOutputType
   */

  export type TandonCountOutputType = {
    sensor: number
    selenoid: number
    tandonBahan: number
    penjadwalan: number
  }

  export type TandonCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sensor?: boolean | TandonCountOutputTypeCountSensorArgs
    selenoid?: boolean | TandonCountOutputTypeCountSelenoidArgs
    tandonBahan?: boolean | TandonCountOutputTypeCountTandonBahanArgs
    penjadwalan?: boolean | TandonCountOutputTypeCountPenjadwalanArgs
  }

  // Custom InputTypes

  /**
   * TandonCountOutputType without action
   */
  export type TandonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonCountOutputType
     */
    select?: TandonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TandonCountOutputType without action
   */
  export type TandonCountOutputTypeCountSensorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }


  /**
   * TandonCountOutputType without action
   */
  export type TandonCountOutputTypeCountSelenoidArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SelenoidWhereInput
  }


  /**
   * TandonCountOutputType without action
   */
  export type TandonCountOutputTypeCountTandonBahanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TandonBahanWhereInput
  }


  /**
   * TandonCountOutputType without action
   */
  export type TandonCountOutputTypeCountPenjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    tandon?: boolean | User$tandonArgs<ExtArgs>
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
    tandon?: boolean | User$tandonArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      greenhouse: Prisma.$GreenhousePayload<ExtArgs>[]
      tandon: Prisma.$TandonPayload<ExtArgs>[]
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

    tandon<T extends User$tandonArgs<ExtArgs> = {}>(args?: Subset<T, User$tandonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * User.tandon
   */
  export type User$tandonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    where?: TandonWhereInput
    orderBy?: TandonOrderByWithRelationInput | TandonOrderByWithRelationInput[]
    cursor?: TandonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TandonScalarFieldEnum | TandonScalarFieldEnum[]
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
    selenoid?: boolean | Greenhouse$selenoidArgs<ExtArgs>
    _count?: boolean | GreenhouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["greenhouse"]>

  export type GreenhouseSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type GreenhouseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Greenhouse$userArgs<ExtArgs>
    selenoid?: boolean | Greenhouse$selenoidArgs<ExtArgs>
    _count?: boolean | GreenhouseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GreenhousePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Greenhouse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      selenoid: Prisma.$SelenoidPayload<ExtArgs>[]
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

    selenoid<T extends Greenhouse$selenoidArgs<ExtArgs> = {}>(args?: Subset<T, Greenhouse$selenoidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Greenhouse.selenoid
   */
  export type Greenhouse$selenoidArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    where?: SelenoidWhereInput
    orderBy?: SelenoidOrderByWithRelationInput | SelenoidOrderByWithRelationInput[]
    cursor?: SelenoidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelenoidScalarFieldEnum | SelenoidScalarFieldEnum[]
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
   * Model Resep
   */

  export type AggregateResep = {
    _count: ResepCountAggregateOutputType | null
    _avg: ResepAvgAggregateOutputType | null
    _sum: ResepSumAggregateOutputType | null
    _min: ResepMinAggregateOutputType | null
    _max: ResepMaxAggregateOutputType | null
  }

  export type ResepAvgAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
  }

  export type ResepSumAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
  }

  export type ResepMinAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
    nama: string | null
  }

  export type ResepMaxAggregateOutputType = {
    id: number | null
    ppm: number | null
    ph: number | null
    nama: string | null
  }

  export type ResepCountAggregateOutputType = {
    id: number
    ppm: number
    ph: number
    nama: number
    _all: number
  }


  export type ResepAvgAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
  }

  export type ResepSumAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
  }

  export type ResepMinAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    nama?: true
  }

  export type ResepMaxAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    nama?: true
  }

  export type ResepCountAggregateInputType = {
    id?: true
    ppm?: true
    ph?: true
    nama?: true
    _all?: true
  }

  export type ResepAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resep to aggregate.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reseps
    **/
    _count?: true | ResepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResepMaxAggregateInputType
  }

  export type GetResepAggregateType<T extends ResepAggregateArgs> = {
        [P in keyof T & keyof AggregateResep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResep[P]>
      : GetScalarType<T[P], AggregateResep[P]>
  }




  export type ResepGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResepWhereInput
    orderBy?: ResepOrderByWithAggregationInput | ResepOrderByWithAggregationInput[]
    by: ResepScalarFieldEnum[] | ResepScalarFieldEnum
    having?: ResepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResepCountAggregateInputType | true
    _avg?: ResepAvgAggregateInputType
    _sum?: ResepSumAggregateInputType
    _min?: ResepMinAggregateInputType
    _max?: ResepMaxAggregateInputType
  }

  export type ResepGroupByOutputType = {
    id: number
    ppm: number
    ph: number
    nama: string
    _count: ResepCountAggregateOutputType | null
    _avg: ResepAvgAggregateOutputType | null
    _sum: ResepSumAggregateOutputType | null
    _min: ResepMinAggregateOutputType | null
    _max: ResepMaxAggregateOutputType | null
  }

  type GetResepGroupByPayload<T extends ResepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResepGroupByOutputType[P]>
            : GetScalarType<T[P], ResepGroupByOutputType[P]>
        }
      >
    >


  export type ResepSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ppm?: boolean
    ph?: boolean
    nama?: boolean
    penjadwalan?: boolean | Resep$penjadwalanArgs<ExtArgs>
    _count?: boolean | ResepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resep"]>

  export type ResepSelectScalar = {
    id?: boolean
    ppm?: boolean
    ph?: boolean
    nama?: boolean
  }

  export type ResepInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    penjadwalan?: boolean | Resep$penjadwalanArgs<ExtArgs>
    _count?: boolean | ResepCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResepPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Resep"
    objects: {
      penjadwalan: Prisma.$PenjadwalanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      ppm: number
      ph: number
      nama: string
    }, ExtArgs["result"]["resep"]>
    composites: {}
  }


  type ResepGetPayload<S extends boolean | null | undefined | ResepDefaultArgs> = $Result.GetResult<Prisma.$ResepPayload, S>

  type ResepCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ResepFindManyArgs, 'select' | 'include'> & {
      select?: ResepCountAggregateInputType | true
    }

  export interface ResepDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resep'], meta: { name: 'Resep' } }
    /**
     * Find zero or one Resep that matches the filter.
     * @param {ResepFindUniqueArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResepFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResepFindUniqueArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Resep that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResepFindUniqueOrThrowArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResepFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResepFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Resep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepFindFirstArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResepFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResepFindFirstArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Resep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepFindFirstOrThrowArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResepFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResepFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reseps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reseps
     * const reseps = await prisma.resep.findMany()
     * 
     * // Get first 10 Reseps
     * const reseps = await prisma.resep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resepWithIdOnly = await prisma.resep.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResepFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResepFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Resep.
     * @param {ResepCreateArgs} args - Arguments to create a Resep.
     * @example
     * // Create one Resep
     * const Resep = await prisma.resep.create({
     *   data: {
     *     // ... data to create a Resep
     *   }
     * })
     * 
    **/
    create<T extends ResepCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResepCreateArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reseps.
     *     @param {ResepCreateManyArgs} args - Arguments to create many Reseps.
     *     @example
     *     // Create many Reseps
     *     const resep = await prisma.resep.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResepCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResepCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resep.
     * @param {ResepDeleteArgs} args - Arguments to delete one Resep.
     * @example
     * // Delete one Resep
     * const Resep = await prisma.resep.delete({
     *   where: {
     *     // ... filter to delete one Resep
     *   }
     * })
     * 
    **/
    delete<T extends ResepDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResepDeleteArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Resep.
     * @param {ResepUpdateArgs} args - Arguments to update one Resep.
     * @example
     * // Update one Resep
     * const resep = await prisma.resep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResepUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResepUpdateArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reseps.
     * @param {ResepDeleteManyArgs} args - Arguments to filter Reseps to delete.
     * @example
     * // Delete a few Reseps
     * const { count } = await prisma.resep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResepDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResepDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reseps
     * const resep = await prisma.resep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResepUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResepUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resep.
     * @param {ResepUpsertArgs} args - Arguments to update or create a Resep.
     * @example
     * // Update or create a Resep
     * const resep = await prisma.resep.upsert({
     *   create: {
     *     // ... data to create a Resep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resep we want to update
     *   }
     * })
    **/
    upsert<T extends ResepUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResepUpsertArgs<ExtArgs>>
    ): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reseps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepCountArgs} args - Arguments to filter Reseps to count.
     * @example
     * // Count the number of Reseps
     * const count = await prisma.resep.count({
     *   where: {
     *     // ... the filter for the Reseps we want to count
     *   }
     * })
    **/
    count<T extends ResepCountArgs>(
      args?: Subset<T, ResepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResepAggregateArgs>(args: Subset<T, ResepAggregateArgs>): Prisma.PrismaPromise<GetResepAggregateType<T>>

    /**
     * Group by Resep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepGroupByArgs} args - Group by arguments.
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
      T extends ResepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResepGroupByArgs['orderBy'] }
        : { orderBy?: ResepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resep model
   */
  readonly fields: ResepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResepClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    penjadwalan<T extends Resep$penjadwalanArgs<ExtArgs> = {}>(args?: Subset<T, Resep$penjadwalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Resep model
   */ 
  interface ResepFieldRefs {
    readonly id: FieldRef<"Resep", 'Int'>
    readonly ppm: FieldRef<"Resep", 'Int'>
    readonly ph: FieldRef<"Resep", 'Float'>
    readonly nama: FieldRef<"Resep", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Resep findUnique
   */
  export type ResepFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where: ResepWhereUniqueInput
  }


  /**
   * Resep findUniqueOrThrow
   */
  export type ResepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where: ResepWhereUniqueInput
  }


  /**
   * Resep findFirst
   */
  export type ResepFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseps.
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseps.
     */
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }


  /**
   * Resep findFirstOrThrow
   */
  export type ResepFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseps.
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseps.
     */
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }


  /**
   * Resep findMany
   */
  export type ResepFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Reseps to fetch.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reseps.
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }


  /**
   * Resep create
   */
  export type ResepCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * The data needed to create a Resep.
     */
    data: XOR<ResepCreateInput, ResepUncheckedCreateInput>
  }


  /**
   * Resep createMany
   */
  export type ResepCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reseps.
     */
    data: ResepCreateManyInput | ResepCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Resep update
   */
  export type ResepUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * The data needed to update a Resep.
     */
    data: XOR<ResepUpdateInput, ResepUncheckedUpdateInput>
    /**
     * Choose, which Resep to update.
     */
    where: ResepWhereUniqueInput
  }


  /**
   * Resep updateMany
   */
  export type ResepUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reseps.
     */
    data: XOR<ResepUpdateManyMutationInput, ResepUncheckedUpdateManyInput>
    /**
     * Filter which Reseps to update
     */
    where?: ResepWhereInput
  }


  /**
   * Resep upsert
   */
  export type ResepUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * The filter to search for the Resep to update in case it exists.
     */
    where: ResepWhereUniqueInput
    /**
     * In case the Resep found by the `where` argument doesn't exist, create a new Resep with this data.
     */
    create: XOR<ResepCreateInput, ResepUncheckedCreateInput>
    /**
     * In case the Resep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResepUpdateInput, ResepUncheckedUpdateInput>
  }


  /**
   * Resep delete
   */
  export type ResepDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter which Resep to delete.
     */
    where: ResepWhereUniqueInput
  }


  /**
   * Resep deleteMany
   */
  export type ResepDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reseps to delete
     */
    where?: ResepWhereInput
  }


  /**
   * Resep.penjadwalan
   */
  export type Resep$penjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Resep without action
   */
  export type ResepDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResepInclude<ExtArgs> | null
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
    resepId: number | null
    tandonId: number | null
  }

  export type PenjadwalanSumAggregateOutputType = {
    id: number | null
    resepId: number | null
    tandonId: number | null
  }

  export type PenjadwalanMinAggregateOutputType = {
    id: number | null
    waktu: string | null
    resepId: number | null
    tandonId: number | null
  }

  export type PenjadwalanMaxAggregateOutputType = {
    id: number | null
    waktu: string | null
    resepId: number | null
    tandonId: number | null
  }

  export type PenjadwalanCountAggregateOutputType = {
    id: number
    waktu: number
    resepId: number
    tandonId: number
    _all: number
  }


  export type PenjadwalanAvgAggregateInputType = {
    id?: true
    resepId?: true
    tandonId?: true
  }

  export type PenjadwalanSumAggregateInputType = {
    id?: true
    resepId?: true
    tandonId?: true
  }

  export type PenjadwalanMinAggregateInputType = {
    id?: true
    waktu?: true
    resepId?: true
    tandonId?: true
  }

  export type PenjadwalanMaxAggregateInputType = {
    id?: true
    waktu?: true
    resepId?: true
    tandonId?: true
  }

  export type PenjadwalanCountAggregateInputType = {
    id?: true
    waktu?: true
    resepId?: true
    tandonId?: true
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
    resepId: number
    tandonId: number
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
    resepId?: boolean
    tandonId?: boolean
    resep?: boolean | ResepDefaultArgs<ExtArgs>
    tandon?: boolean | TandonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjadwalan"]>

  export type PenjadwalanSelectScalar = {
    id?: boolean
    waktu?: boolean
    resepId?: boolean
    tandonId?: boolean
  }

  export type PenjadwalanInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    resep?: boolean | ResepDefaultArgs<ExtArgs>
    tandon?: boolean | TandonDefaultArgs<ExtArgs>
  }


  export type $PenjadwalanPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Penjadwalan"
    objects: {
      resep: Prisma.$ResepPayload<ExtArgs>
      tandon: Prisma.$TandonPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      waktu: string
      resepId: number
      tandonId: number
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

    resep<T extends ResepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResepDefaultArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tandon<T extends TandonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TandonDefaultArgs<ExtArgs>>): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly resepId: FieldRef<"Penjadwalan", 'Int'>
    readonly tandonId: FieldRef<"Penjadwalan", 'Int'>
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
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null
    _avg: SensorAvgAggregateOutputType | null
    _sum: SensorSumAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  export type SensorAvgAggregateOutputType = {
    id: number | null
    nilai: number | null
    tandonId: number | null
    tandonBahanId: number | null
  }

  export type SensorSumAggregateOutputType = {
    id: number | null
    nilai: number | null
    tandonId: number | null
    tandonBahanId: number | null
  }

  export type SensorMinAggregateOutputType = {
    id: number | null
    nama: string | null
    persamaan: string | null
    merek: string | null
    satuan: string | null
    status: boolean | null
    nilai: number | null
    tandonId: number | null
    tandonBahanId: number | null
  }

  export type SensorMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    persamaan: string | null
    merek: string | null
    satuan: string | null
    status: boolean | null
    nilai: number | null
    tandonId: number | null
    tandonBahanId: number | null
  }

  export type SensorCountAggregateOutputType = {
    id: number
    nama: number
    persamaan: number
    merek: number
    satuan: number
    status: number
    nilai: number
    tandonId: number
    tandonBahanId: number
    _all: number
  }


  export type SensorAvgAggregateInputType = {
    id?: true
    nilai?: true
    tandonId?: true
    tandonBahanId?: true
  }

  export type SensorSumAggregateInputType = {
    id?: true
    nilai?: true
    tandonId?: true
    tandonBahanId?: true
  }

  export type SensorMinAggregateInputType = {
    id?: true
    nama?: true
    persamaan?: true
    merek?: true
    satuan?: true
    status?: true
    nilai?: true
    tandonId?: true
    tandonBahanId?: true
  }

  export type SensorMaxAggregateInputType = {
    id?: true
    nama?: true
    persamaan?: true
    merek?: true
    satuan?: true
    status?: true
    nilai?: true
    tandonId?: true
    tandonBahanId?: true
  }

  export type SensorCountAggregateInputType = {
    id?: true
    nama?: true
    persamaan?: true
    merek?: true
    satuan?: true
    status?: true
    nilai?: true
    tandonId?: true
    tandonBahanId?: true
    _all?: true
  }

  export type SensorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sensors
    **/
    _count?: true | SensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMaxAggregateInputType
  }

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
        [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>
  }




  export type SensorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithAggregationInput | SensorOrderByWithAggregationInput[]
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum
    having?: SensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorCountAggregateInputType | true
    _avg?: SensorAvgAggregateInputType
    _sum?: SensorSumAggregateInputType
    _min?: SensorMinAggregateInputType
    _max?: SensorMaxAggregateInputType
  }

  export type SensorGroupByOutputType = {
    id: number
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonId: number | null
    tandonBahanId: number | null
    _count: SensorCountAggregateOutputType | null
    _avg: SensorAvgAggregateOutputType | null
    _sum: SensorSumAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>
        }
      >
    >


  export type SensorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    persamaan?: boolean
    merek?: boolean
    satuan?: boolean
    status?: boolean
    nilai?: boolean
    tandonId?: boolean
    tandonBahanId?: boolean
    tandon?: boolean | Sensor$tandonArgs<ExtArgs>
    tandonBahan?: boolean | Sensor$tandonBahanArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>

  export type SensorSelectScalar = {
    id?: boolean
    nama?: boolean
    persamaan?: boolean
    merek?: boolean
    satuan?: boolean
    status?: boolean
    nilai?: boolean
    tandonId?: boolean
    tandonBahanId?: boolean
  }

  export type SensorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tandon?: boolean | Sensor$tandonArgs<ExtArgs>
    tandonBahan?: boolean | Sensor$tandonBahanArgs<ExtArgs>
  }


  export type $SensorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Sensor"
    objects: {
      tandon: Prisma.$TandonPayload<ExtArgs> | null
      tandonBahan: Prisma.$TandonBahanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      nama: string
      persamaan: string
      merek: string
      satuan: string
      status: boolean
      nilai: number
      tandonId: number | null
      tandonBahanId: number | null
    }, ExtArgs["result"]["sensor"]>
    composites: {}
  }


  type SensorGetPayload<S extends boolean | null | undefined | SensorDefaultArgs> = $Result.GetResult<Prisma.$SensorPayload, S>

  type SensorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SensorFindManyArgs, 'select' | 'include'> & {
      select?: SensorCountAggregateInputType | true
    }

  export interface SensorDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sensor'], meta: { name: 'Sensor' } }
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SensorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sensor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SensorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SensorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     * 
    **/
    create<T extends SensorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SensorCreateArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sensors.
     *     @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     *     @example
     *     // Create many Sensors
     *     const sensor = await prisma.sensor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SensorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     * 
    **/
    delete<T extends SensorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SensorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SensorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SensorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
    **/
    upsert<T extends SensorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>
    ): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorAggregateArgs>(args: Subset<T, SensorAggregateArgs>): Prisma.PrismaPromise<GetSensorAggregateType<T>>

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
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
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sensor model
   */
  readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tandon<T extends Sensor$tandonArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$tandonArgs<ExtArgs>>): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tandonBahan<T extends Sensor$tandonBahanArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$tandonBahanArgs<ExtArgs>>): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Sensor model
   */ 
  interface SensorFieldRefs {
    readonly id: FieldRef<"Sensor", 'Int'>
    readonly nama: FieldRef<"Sensor", 'String'>
    readonly persamaan: FieldRef<"Sensor", 'String'>
    readonly merek: FieldRef<"Sensor", 'String'>
    readonly satuan: FieldRef<"Sensor", 'String'>
    readonly status: FieldRef<"Sensor", 'Boolean'>
    readonly nilai: FieldRef<"Sensor", 'Int'>
    readonly tandonId: FieldRef<"Sensor", 'Int'>
    readonly tandonBahanId: FieldRef<"Sensor", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }


  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }


  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }


  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }


  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }


  /**
   * Sensor create
   */
  export type SensorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>
  }


  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sensor update
   */
  export type SensorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput
  }


  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
  }


  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
  }


  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput
  }


  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput
  }


  /**
   * Sensor.tandon
   */
  export type Sensor$tandonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    where?: TandonWhereInput
  }


  /**
   * Sensor.tandonBahan
   */
  export type Sensor$tandonBahanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    where?: TandonBahanWhereInput
  }


  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
  }



  /**
   * Model Selenoid
   */

  export type AggregateSelenoid = {
    _count: SelenoidCountAggregateOutputType | null
    _avg: SelenoidAvgAggregateOutputType | null
    _sum: SelenoidSumAggregateOutputType | null
    _min: SelenoidMinAggregateOutputType | null
    _max: SelenoidMaxAggregateOutputType | null
  }

  export type SelenoidAvgAggregateOutputType = {
    id: number | null
    tandonId: number | null
    greenhouseId: number | null
  }

  export type SelenoidSumAggregateOutputType = {
    id: number | null
    tandonId: number | null
    greenhouseId: number | null
  }

  export type SelenoidMinAggregateOutputType = {
    id: number | null
    nama: string | null
    merek: string | null
    status: boolean | null
    tandonId: number | null
    greenhouseId: number | null
  }

  export type SelenoidMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    merek: string | null
    status: boolean | null
    tandonId: number | null
    greenhouseId: number | null
  }

  export type SelenoidCountAggregateOutputType = {
    id: number
    nama: number
    merek: number
    status: number
    tandonId: number
    greenhouseId: number
    _all: number
  }


  export type SelenoidAvgAggregateInputType = {
    id?: true
    tandonId?: true
    greenhouseId?: true
  }

  export type SelenoidSumAggregateInputType = {
    id?: true
    tandonId?: true
    greenhouseId?: true
  }

  export type SelenoidMinAggregateInputType = {
    id?: true
    nama?: true
    merek?: true
    status?: true
    tandonId?: true
    greenhouseId?: true
  }

  export type SelenoidMaxAggregateInputType = {
    id?: true
    nama?: true
    merek?: true
    status?: true
    tandonId?: true
    greenhouseId?: true
  }

  export type SelenoidCountAggregateInputType = {
    id?: true
    nama?: true
    merek?: true
    status?: true
    tandonId?: true
    greenhouseId?: true
    _all?: true
  }

  export type SelenoidAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Selenoid to aggregate.
     */
    where?: SelenoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selenoids to fetch.
     */
    orderBy?: SelenoidOrderByWithRelationInput | SelenoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SelenoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selenoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selenoids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Selenoids
    **/
    _count?: true | SelenoidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SelenoidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SelenoidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelenoidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelenoidMaxAggregateInputType
  }

  export type GetSelenoidAggregateType<T extends SelenoidAggregateArgs> = {
        [P in keyof T & keyof AggregateSelenoid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelenoid[P]>
      : GetScalarType<T[P], AggregateSelenoid[P]>
  }




  export type SelenoidGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SelenoidWhereInput
    orderBy?: SelenoidOrderByWithAggregationInput | SelenoidOrderByWithAggregationInput[]
    by: SelenoidScalarFieldEnum[] | SelenoidScalarFieldEnum
    having?: SelenoidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelenoidCountAggregateInputType | true
    _avg?: SelenoidAvgAggregateInputType
    _sum?: SelenoidSumAggregateInputType
    _min?: SelenoidMinAggregateInputType
    _max?: SelenoidMaxAggregateInputType
  }

  export type SelenoidGroupByOutputType = {
    id: number
    nama: string
    merek: string
    status: boolean
    tandonId: number
    greenhouseId: number
    _count: SelenoidCountAggregateOutputType | null
    _avg: SelenoidAvgAggregateOutputType | null
    _sum: SelenoidSumAggregateOutputType | null
    _min: SelenoidMinAggregateOutputType | null
    _max: SelenoidMaxAggregateOutputType | null
  }

  type GetSelenoidGroupByPayload<T extends SelenoidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelenoidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelenoidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelenoidGroupByOutputType[P]>
            : GetScalarType<T[P], SelenoidGroupByOutputType[P]>
        }
      >
    >


  export type SelenoidSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    merek?: boolean
    status?: boolean
    tandonId?: boolean
    greenhouseId?: boolean
    tandon?: boolean | TandonDefaultArgs<ExtArgs>
    greenhouse?: boolean | GreenhouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selenoid"]>

  export type SelenoidSelectScalar = {
    id?: boolean
    nama?: boolean
    merek?: boolean
    status?: boolean
    tandonId?: boolean
    greenhouseId?: boolean
  }

  export type SelenoidInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tandon?: boolean | TandonDefaultArgs<ExtArgs>
    greenhouse?: boolean | GreenhouseDefaultArgs<ExtArgs>
  }


  export type $SelenoidPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Selenoid"
    objects: {
      tandon: Prisma.$TandonPayload<ExtArgs>
      greenhouse: Prisma.$GreenhousePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      nama: string
      merek: string
      status: boolean
      tandonId: number
      greenhouseId: number
    }, ExtArgs["result"]["selenoid"]>
    composites: {}
  }


  type SelenoidGetPayload<S extends boolean | null | undefined | SelenoidDefaultArgs> = $Result.GetResult<Prisma.$SelenoidPayload, S>

  type SelenoidCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SelenoidFindManyArgs, 'select' | 'include'> & {
      select?: SelenoidCountAggregateInputType | true
    }

  export interface SelenoidDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Selenoid'], meta: { name: 'Selenoid' } }
    /**
     * Find zero or one Selenoid that matches the filter.
     * @param {SelenoidFindUniqueArgs} args - Arguments to find a Selenoid
     * @example
     * // Get one Selenoid
     * const selenoid = await prisma.selenoid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SelenoidFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SelenoidFindUniqueArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Selenoid that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SelenoidFindUniqueOrThrowArgs} args - Arguments to find a Selenoid
     * @example
     * // Get one Selenoid
     * const selenoid = await prisma.selenoid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SelenoidFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SelenoidFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Selenoid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelenoidFindFirstArgs} args - Arguments to find a Selenoid
     * @example
     * // Get one Selenoid
     * const selenoid = await prisma.selenoid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SelenoidFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SelenoidFindFirstArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Selenoid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelenoidFindFirstOrThrowArgs} args - Arguments to find a Selenoid
     * @example
     * // Get one Selenoid
     * const selenoid = await prisma.selenoid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SelenoidFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SelenoidFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Selenoids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelenoidFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Selenoids
     * const selenoids = await prisma.selenoid.findMany()
     * 
     * // Get first 10 Selenoids
     * const selenoids = await prisma.selenoid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selenoidWithIdOnly = await prisma.selenoid.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SelenoidFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SelenoidFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Selenoid.
     * @param {SelenoidCreateArgs} args - Arguments to create a Selenoid.
     * @example
     * // Create one Selenoid
     * const Selenoid = await prisma.selenoid.create({
     *   data: {
     *     // ... data to create a Selenoid
     *   }
     * })
     * 
    **/
    create<T extends SelenoidCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SelenoidCreateArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Selenoids.
     *     @param {SelenoidCreateManyArgs} args - Arguments to create many Selenoids.
     *     @example
     *     // Create many Selenoids
     *     const selenoid = await prisma.selenoid.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SelenoidCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SelenoidCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Selenoid.
     * @param {SelenoidDeleteArgs} args - Arguments to delete one Selenoid.
     * @example
     * // Delete one Selenoid
     * const Selenoid = await prisma.selenoid.delete({
     *   where: {
     *     // ... filter to delete one Selenoid
     *   }
     * })
     * 
    **/
    delete<T extends SelenoidDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SelenoidDeleteArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Selenoid.
     * @param {SelenoidUpdateArgs} args - Arguments to update one Selenoid.
     * @example
     * // Update one Selenoid
     * const selenoid = await prisma.selenoid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SelenoidUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SelenoidUpdateArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Selenoids.
     * @param {SelenoidDeleteManyArgs} args - Arguments to filter Selenoids to delete.
     * @example
     * // Delete a few Selenoids
     * const { count } = await prisma.selenoid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SelenoidDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SelenoidDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Selenoids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelenoidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Selenoids
     * const selenoid = await prisma.selenoid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SelenoidUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SelenoidUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Selenoid.
     * @param {SelenoidUpsertArgs} args - Arguments to update or create a Selenoid.
     * @example
     * // Update or create a Selenoid
     * const selenoid = await prisma.selenoid.upsert({
     *   create: {
     *     // ... data to create a Selenoid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Selenoid we want to update
     *   }
     * })
    **/
    upsert<T extends SelenoidUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SelenoidUpsertArgs<ExtArgs>>
    ): Prisma__SelenoidClient<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Selenoids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelenoidCountArgs} args - Arguments to filter Selenoids to count.
     * @example
     * // Count the number of Selenoids
     * const count = await prisma.selenoid.count({
     *   where: {
     *     // ... the filter for the Selenoids we want to count
     *   }
     * })
    **/
    count<T extends SelenoidCountArgs>(
      args?: Subset<T, SelenoidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelenoidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Selenoid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelenoidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SelenoidAggregateArgs>(args: Subset<T, SelenoidAggregateArgs>): Prisma.PrismaPromise<GetSelenoidAggregateType<T>>

    /**
     * Group by Selenoid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelenoidGroupByArgs} args - Group by arguments.
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
      T extends SelenoidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SelenoidGroupByArgs['orderBy'] }
        : { orderBy?: SelenoidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SelenoidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelenoidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Selenoid model
   */
  readonly fields: SelenoidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Selenoid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SelenoidClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tandon<T extends TandonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TandonDefaultArgs<ExtArgs>>): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    greenhouse<T extends GreenhouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GreenhouseDefaultArgs<ExtArgs>>): Prisma__GreenhouseClient<$Result.GetResult<Prisma.$GreenhousePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Selenoid model
   */ 
  interface SelenoidFieldRefs {
    readonly id: FieldRef<"Selenoid", 'Int'>
    readonly nama: FieldRef<"Selenoid", 'String'>
    readonly merek: FieldRef<"Selenoid", 'String'>
    readonly status: FieldRef<"Selenoid", 'Boolean'>
    readonly tandonId: FieldRef<"Selenoid", 'Int'>
    readonly greenhouseId: FieldRef<"Selenoid", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Selenoid findUnique
   */
  export type SelenoidFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * Filter, which Selenoid to fetch.
     */
    where: SelenoidWhereUniqueInput
  }


  /**
   * Selenoid findUniqueOrThrow
   */
  export type SelenoidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * Filter, which Selenoid to fetch.
     */
    where: SelenoidWhereUniqueInput
  }


  /**
   * Selenoid findFirst
   */
  export type SelenoidFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * Filter, which Selenoid to fetch.
     */
    where?: SelenoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selenoids to fetch.
     */
    orderBy?: SelenoidOrderByWithRelationInput | SelenoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Selenoids.
     */
    cursor?: SelenoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selenoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selenoids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Selenoids.
     */
    distinct?: SelenoidScalarFieldEnum | SelenoidScalarFieldEnum[]
  }


  /**
   * Selenoid findFirstOrThrow
   */
  export type SelenoidFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * Filter, which Selenoid to fetch.
     */
    where?: SelenoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selenoids to fetch.
     */
    orderBy?: SelenoidOrderByWithRelationInput | SelenoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Selenoids.
     */
    cursor?: SelenoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selenoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selenoids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Selenoids.
     */
    distinct?: SelenoidScalarFieldEnum | SelenoidScalarFieldEnum[]
  }


  /**
   * Selenoid findMany
   */
  export type SelenoidFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * Filter, which Selenoids to fetch.
     */
    where?: SelenoidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selenoids to fetch.
     */
    orderBy?: SelenoidOrderByWithRelationInput | SelenoidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Selenoids.
     */
    cursor?: SelenoidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selenoids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selenoids.
     */
    skip?: number
    distinct?: SelenoidScalarFieldEnum | SelenoidScalarFieldEnum[]
  }


  /**
   * Selenoid create
   */
  export type SelenoidCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * The data needed to create a Selenoid.
     */
    data: XOR<SelenoidCreateInput, SelenoidUncheckedCreateInput>
  }


  /**
   * Selenoid createMany
   */
  export type SelenoidCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Selenoids.
     */
    data: SelenoidCreateManyInput | SelenoidCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Selenoid update
   */
  export type SelenoidUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * The data needed to update a Selenoid.
     */
    data: XOR<SelenoidUpdateInput, SelenoidUncheckedUpdateInput>
    /**
     * Choose, which Selenoid to update.
     */
    where: SelenoidWhereUniqueInput
  }


  /**
   * Selenoid updateMany
   */
  export type SelenoidUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Selenoids.
     */
    data: XOR<SelenoidUpdateManyMutationInput, SelenoidUncheckedUpdateManyInput>
    /**
     * Filter which Selenoids to update
     */
    where?: SelenoidWhereInput
  }


  /**
   * Selenoid upsert
   */
  export type SelenoidUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * The filter to search for the Selenoid to update in case it exists.
     */
    where: SelenoidWhereUniqueInput
    /**
     * In case the Selenoid found by the `where` argument doesn't exist, create a new Selenoid with this data.
     */
    create: XOR<SelenoidCreateInput, SelenoidUncheckedCreateInput>
    /**
     * In case the Selenoid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SelenoidUpdateInput, SelenoidUncheckedUpdateInput>
  }


  /**
   * Selenoid delete
   */
  export type SelenoidDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    /**
     * Filter which Selenoid to delete.
     */
    where: SelenoidWhereUniqueInput
  }


  /**
   * Selenoid deleteMany
   */
  export type SelenoidDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Selenoids to delete
     */
    where?: SelenoidWhereInput
  }


  /**
   * Selenoid without action
   */
  export type SelenoidDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
  }



  /**
   * Model TandonBahan
   */

  export type AggregateTandonBahan = {
    _count: TandonBahanCountAggregateOutputType | null
    _avg: TandonBahanAvgAggregateOutputType | null
    _sum: TandonBahanSumAggregateOutputType | null
    _min: TandonBahanMinAggregateOutputType | null
    _max: TandonBahanMaxAggregateOutputType | null
  }

  export type TandonBahanAvgAggregateOutputType = {
    id: number | null
    tandonId: number | null
  }

  export type TandonBahanSumAggregateOutputType = {
    id: number | null
    tandonId: number | null
  }

  export type TandonBahanMinAggregateOutputType = {
    id: number | null
    nama: string | null
    tandonId: number | null
  }

  export type TandonBahanMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    tandonId: number | null
  }

  export type TandonBahanCountAggregateOutputType = {
    id: number
    nama: number
    tandonId: number
    _all: number
  }


  export type TandonBahanAvgAggregateInputType = {
    id?: true
    tandonId?: true
  }

  export type TandonBahanSumAggregateInputType = {
    id?: true
    tandonId?: true
  }

  export type TandonBahanMinAggregateInputType = {
    id?: true
    nama?: true
    tandonId?: true
  }

  export type TandonBahanMaxAggregateInputType = {
    id?: true
    nama?: true
    tandonId?: true
  }

  export type TandonBahanCountAggregateInputType = {
    id?: true
    nama?: true
    tandonId?: true
    _all?: true
  }

  export type TandonBahanAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TandonBahan to aggregate.
     */
    where?: TandonBahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TandonBahans to fetch.
     */
    orderBy?: TandonBahanOrderByWithRelationInput | TandonBahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TandonBahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TandonBahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TandonBahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TandonBahans
    **/
    _count?: true | TandonBahanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TandonBahanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TandonBahanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TandonBahanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TandonBahanMaxAggregateInputType
  }

  export type GetTandonBahanAggregateType<T extends TandonBahanAggregateArgs> = {
        [P in keyof T & keyof AggregateTandonBahan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTandonBahan[P]>
      : GetScalarType<T[P], AggregateTandonBahan[P]>
  }




  export type TandonBahanGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TandonBahanWhereInput
    orderBy?: TandonBahanOrderByWithAggregationInput | TandonBahanOrderByWithAggregationInput[]
    by: TandonBahanScalarFieldEnum[] | TandonBahanScalarFieldEnum
    having?: TandonBahanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TandonBahanCountAggregateInputType | true
    _avg?: TandonBahanAvgAggregateInputType
    _sum?: TandonBahanSumAggregateInputType
    _min?: TandonBahanMinAggregateInputType
    _max?: TandonBahanMaxAggregateInputType
  }

  export type TandonBahanGroupByOutputType = {
    id: number
    nama: string
    tandonId: number
    _count: TandonBahanCountAggregateOutputType | null
    _avg: TandonBahanAvgAggregateOutputType | null
    _sum: TandonBahanSumAggregateOutputType | null
    _min: TandonBahanMinAggregateOutputType | null
    _max: TandonBahanMaxAggregateOutputType | null
  }

  type GetTandonBahanGroupByPayload<T extends TandonBahanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TandonBahanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TandonBahanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TandonBahanGroupByOutputType[P]>
            : GetScalarType<T[P], TandonBahanGroupByOutputType[P]>
        }
      >
    >


  export type TandonBahanSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    tandonId?: boolean
    sensor?: boolean | TandonBahan$sensorArgs<ExtArgs>
    tandon?: boolean | TandonDefaultArgs<ExtArgs>
    _count?: boolean | TandonBahanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tandonBahan"]>

  export type TandonBahanSelectScalar = {
    id?: boolean
    nama?: boolean
    tandonId?: boolean
  }

  export type TandonBahanInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sensor?: boolean | TandonBahan$sensorArgs<ExtArgs>
    tandon?: boolean | TandonDefaultArgs<ExtArgs>
    _count?: boolean | TandonBahanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TandonBahanPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "TandonBahan"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>[]
      tandon: Prisma.$TandonPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      nama: string
      tandonId: number
    }, ExtArgs["result"]["tandonBahan"]>
    composites: {}
  }


  type TandonBahanGetPayload<S extends boolean | null | undefined | TandonBahanDefaultArgs> = $Result.GetResult<Prisma.$TandonBahanPayload, S>

  type TandonBahanCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TandonBahanFindManyArgs, 'select' | 'include'> & {
      select?: TandonBahanCountAggregateInputType | true
    }

  export interface TandonBahanDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TandonBahan'], meta: { name: 'TandonBahan' } }
    /**
     * Find zero or one TandonBahan that matches the filter.
     * @param {TandonBahanFindUniqueArgs} args - Arguments to find a TandonBahan
     * @example
     * // Get one TandonBahan
     * const tandonBahan = await prisma.tandonBahan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TandonBahanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TandonBahanFindUniqueArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TandonBahan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TandonBahanFindUniqueOrThrowArgs} args - Arguments to find a TandonBahan
     * @example
     * // Get one TandonBahan
     * const tandonBahan = await prisma.tandonBahan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TandonBahanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonBahanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TandonBahan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonBahanFindFirstArgs} args - Arguments to find a TandonBahan
     * @example
     * // Get one TandonBahan
     * const tandonBahan = await prisma.tandonBahan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TandonBahanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonBahanFindFirstArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TandonBahan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonBahanFindFirstOrThrowArgs} args - Arguments to find a TandonBahan
     * @example
     * // Get one TandonBahan
     * const tandonBahan = await prisma.tandonBahan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TandonBahanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonBahanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TandonBahans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonBahanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TandonBahans
     * const tandonBahans = await prisma.tandonBahan.findMany()
     * 
     * // Get first 10 TandonBahans
     * const tandonBahans = await prisma.tandonBahan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tandonBahanWithIdOnly = await prisma.tandonBahan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TandonBahanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonBahanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TandonBahan.
     * @param {TandonBahanCreateArgs} args - Arguments to create a TandonBahan.
     * @example
     * // Create one TandonBahan
     * const TandonBahan = await prisma.tandonBahan.create({
     *   data: {
     *     // ... data to create a TandonBahan
     *   }
     * })
     * 
    **/
    create<T extends TandonBahanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TandonBahanCreateArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TandonBahans.
     *     @param {TandonBahanCreateManyArgs} args - Arguments to create many TandonBahans.
     *     @example
     *     // Create many TandonBahans
     *     const tandonBahan = await prisma.tandonBahan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TandonBahanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonBahanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TandonBahan.
     * @param {TandonBahanDeleteArgs} args - Arguments to delete one TandonBahan.
     * @example
     * // Delete one TandonBahan
     * const TandonBahan = await prisma.tandonBahan.delete({
     *   where: {
     *     // ... filter to delete one TandonBahan
     *   }
     * })
     * 
    **/
    delete<T extends TandonBahanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TandonBahanDeleteArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TandonBahan.
     * @param {TandonBahanUpdateArgs} args - Arguments to update one TandonBahan.
     * @example
     * // Update one TandonBahan
     * const tandonBahan = await prisma.tandonBahan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TandonBahanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TandonBahanUpdateArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TandonBahans.
     * @param {TandonBahanDeleteManyArgs} args - Arguments to filter TandonBahans to delete.
     * @example
     * // Delete a few TandonBahans
     * const { count } = await prisma.tandonBahan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TandonBahanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonBahanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TandonBahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonBahanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TandonBahans
     * const tandonBahan = await prisma.tandonBahan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TandonBahanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TandonBahanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TandonBahan.
     * @param {TandonBahanUpsertArgs} args - Arguments to update or create a TandonBahan.
     * @example
     * // Update or create a TandonBahan
     * const tandonBahan = await prisma.tandonBahan.upsert({
     *   create: {
     *     // ... data to create a TandonBahan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TandonBahan we want to update
     *   }
     * })
    **/
    upsert<T extends TandonBahanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TandonBahanUpsertArgs<ExtArgs>>
    ): Prisma__TandonBahanClient<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TandonBahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonBahanCountArgs} args - Arguments to filter TandonBahans to count.
     * @example
     * // Count the number of TandonBahans
     * const count = await prisma.tandonBahan.count({
     *   where: {
     *     // ... the filter for the TandonBahans we want to count
     *   }
     * })
    **/
    count<T extends TandonBahanCountArgs>(
      args?: Subset<T, TandonBahanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TandonBahanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TandonBahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonBahanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TandonBahanAggregateArgs>(args: Subset<T, TandonBahanAggregateArgs>): Prisma.PrismaPromise<GetTandonBahanAggregateType<T>>

    /**
     * Group by TandonBahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonBahanGroupByArgs} args - Group by arguments.
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
      T extends TandonBahanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TandonBahanGroupByArgs['orderBy'] }
        : { orderBy?: TandonBahanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TandonBahanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTandonBahanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TandonBahan model
   */
  readonly fields: TandonBahanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TandonBahan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TandonBahanClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sensor<T extends TandonBahan$sensorArgs<ExtArgs> = {}>(args?: Subset<T, TandonBahan$sensorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'findMany'> | Null>;

    tandon<T extends TandonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TandonDefaultArgs<ExtArgs>>): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the TandonBahan model
   */ 
  interface TandonBahanFieldRefs {
    readonly id: FieldRef<"TandonBahan", 'Int'>
    readonly nama: FieldRef<"TandonBahan", 'String'>
    readonly tandonId: FieldRef<"TandonBahan", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * TandonBahan findUnique
   */
  export type TandonBahanFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * Filter, which TandonBahan to fetch.
     */
    where: TandonBahanWhereUniqueInput
  }


  /**
   * TandonBahan findUniqueOrThrow
   */
  export type TandonBahanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * Filter, which TandonBahan to fetch.
     */
    where: TandonBahanWhereUniqueInput
  }


  /**
   * TandonBahan findFirst
   */
  export type TandonBahanFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * Filter, which TandonBahan to fetch.
     */
    where?: TandonBahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TandonBahans to fetch.
     */
    orderBy?: TandonBahanOrderByWithRelationInput | TandonBahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TandonBahans.
     */
    cursor?: TandonBahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TandonBahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TandonBahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TandonBahans.
     */
    distinct?: TandonBahanScalarFieldEnum | TandonBahanScalarFieldEnum[]
  }


  /**
   * TandonBahan findFirstOrThrow
   */
  export type TandonBahanFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * Filter, which TandonBahan to fetch.
     */
    where?: TandonBahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TandonBahans to fetch.
     */
    orderBy?: TandonBahanOrderByWithRelationInput | TandonBahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TandonBahans.
     */
    cursor?: TandonBahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TandonBahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TandonBahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TandonBahans.
     */
    distinct?: TandonBahanScalarFieldEnum | TandonBahanScalarFieldEnum[]
  }


  /**
   * TandonBahan findMany
   */
  export type TandonBahanFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * Filter, which TandonBahans to fetch.
     */
    where?: TandonBahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TandonBahans to fetch.
     */
    orderBy?: TandonBahanOrderByWithRelationInput | TandonBahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TandonBahans.
     */
    cursor?: TandonBahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TandonBahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TandonBahans.
     */
    skip?: number
    distinct?: TandonBahanScalarFieldEnum | TandonBahanScalarFieldEnum[]
  }


  /**
   * TandonBahan create
   */
  export type TandonBahanCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * The data needed to create a TandonBahan.
     */
    data: XOR<TandonBahanCreateInput, TandonBahanUncheckedCreateInput>
  }


  /**
   * TandonBahan createMany
   */
  export type TandonBahanCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TandonBahans.
     */
    data: TandonBahanCreateManyInput | TandonBahanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TandonBahan update
   */
  export type TandonBahanUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * The data needed to update a TandonBahan.
     */
    data: XOR<TandonBahanUpdateInput, TandonBahanUncheckedUpdateInput>
    /**
     * Choose, which TandonBahan to update.
     */
    where: TandonBahanWhereUniqueInput
  }


  /**
   * TandonBahan updateMany
   */
  export type TandonBahanUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TandonBahans.
     */
    data: XOR<TandonBahanUpdateManyMutationInput, TandonBahanUncheckedUpdateManyInput>
    /**
     * Filter which TandonBahans to update
     */
    where?: TandonBahanWhereInput
  }


  /**
   * TandonBahan upsert
   */
  export type TandonBahanUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * The filter to search for the TandonBahan to update in case it exists.
     */
    where: TandonBahanWhereUniqueInput
    /**
     * In case the TandonBahan found by the `where` argument doesn't exist, create a new TandonBahan with this data.
     */
    create: XOR<TandonBahanCreateInput, TandonBahanUncheckedCreateInput>
    /**
     * In case the TandonBahan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TandonBahanUpdateInput, TandonBahanUncheckedUpdateInput>
  }


  /**
   * TandonBahan delete
   */
  export type TandonBahanDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    /**
     * Filter which TandonBahan to delete.
     */
    where: TandonBahanWhereUniqueInput
  }


  /**
   * TandonBahan deleteMany
   */
  export type TandonBahanDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TandonBahans to delete
     */
    where?: TandonBahanWhereInput
  }


  /**
   * TandonBahan.sensor
   */
  export type TandonBahan$sensorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }


  /**
   * TandonBahan without action
   */
  export type TandonBahanDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
  }



  /**
   * Model Tandon
   */

  export type AggregateTandon = {
    _count: TandonCountAggregateOutputType | null
    _avg: TandonAvgAggregateOutputType | null
    _sum: TandonSumAggregateOutputType | null
    _min: TandonMinAggregateOutputType | null
    _max: TandonMaxAggregateOutputType | null
  }

  export type TandonAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TandonSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TandonMinAggregateOutputType = {
    id: number | null
    nama: string | null
    userId: number | null
  }

  export type TandonMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    userId: number | null
  }

  export type TandonCountAggregateOutputType = {
    id: number
    nama: number
    userId: number
    _all: number
  }


  export type TandonAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TandonSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TandonMinAggregateInputType = {
    id?: true
    nama?: true
    userId?: true
  }

  export type TandonMaxAggregateInputType = {
    id?: true
    nama?: true
    userId?: true
  }

  export type TandonCountAggregateInputType = {
    id?: true
    nama?: true
    userId?: true
    _all?: true
  }

  export type TandonAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tandon to aggregate.
     */
    where?: TandonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tandons to fetch.
     */
    orderBy?: TandonOrderByWithRelationInput | TandonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TandonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tandons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tandons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tandons
    **/
    _count?: true | TandonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TandonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TandonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TandonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TandonMaxAggregateInputType
  }

  export type GetTandonAggregateType<T extends TandonAggregateArgs> = {
        [P in keyof T & keyof AggregateTandon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTandon[P]>
      : GetScalarType<T[P], AggregateTandon[P]>
  }




  export type TandonGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TandonWhereInput
    orderBy?: TandonOrderByWithAggregationInput | TandonOrderByWithAggregationInput[]
    by: TandonScalarFieldEnum[] | TandonScalarFieldEnum
    having?: TandonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TandonCountAggregateInputType | true
    _avg?: TandonAvgAggregateInputType
    _sum?: TandonSumAggregateInputType
    _min?: TandonMinAggregateInputType
    _max?: TandonMaxAggregateInputType
  }

  export type TandonGroupByOutputType = {
    id: number
    nama: string
    userId: number
    _count: TandonCountAggregateOutputType | null
    _avg: TandonAvgAggregateOutputType | null
    _sum: TandonSumAggregateOutputType | null
    _min: TandonMinAggregateOutputType | null
    _max: TandonMaxAggregateOutputType | null
  }

  type GetTandonGroupByPayload<T extends TandonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TandonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TandonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TandonGroupByOutputType[P]>
            : GetScalarType<T[P], TandonGroupByOutputType[P]>
        }
      >
    >


  export type TandonSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sensor?: boolean | Tandon$sensorArgs<ExtArgs>
    selenoid?: boolean | Tandon$selenoidArgs<ExtArgs>
    tandonBahan?: boolean | Tandon$tandonBahanArgs<ExtArgs>
    penjadwalan?: boolean | Tandon$penjadwalanArgs<ExtArgs>
    _count?: boolean | TandonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tandon"]>

  export type TandonSelectScalar = {
    id?: boolean
    nama?: boolean
    userId?: boolean
  }

  export type TandonInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sensor?: boolean | Tandon$sensorArgs<ExtArgs>
    selenoid?: boolean | Tandon$selenoidArgs<ExtArgs>
    tandonBahan?: boolean | Tandon$tandonBahanArgs<ExtArgs>
    penjadwalan?: boolean | Tandon$penjadwalanArgs<ExtArgs>
    _count?: boolean | TandonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TandonPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Tandon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sensor: Prisma.$SensorPayload<ExtArgs>[]
      selenoid: Prisma.$SelenoidPayload<ExtArgs>[]
      tandonBahan: Prisma.$TandonBahanPayload<ExtArgs>[]
      penjadwalan: Prisma.$PenjadwalanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nama: string
      userId: number
    }, ExtArgs["result"]["tandon"]>
    composites: {}
  }


  type TandonGetPayload<S extends boolean | null | undefined | TandonDefaultArgs> = $Result.GetResult<Prisma.$TandonPayload, S>

  type TandonCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TandonFindManyArgs, 'select' | 'include'> & {
      select?: TandonCountAggregateInputType | true
    }

  export interface TandonDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tandon'], meta: { name: 'Tandon' } }
    /**
     * Find zero or one Tandon that matches the filter.
     * @param {TandonFindUniqueArgs} args - Arguments to find a Tandon
     * @example
     * // Get one Tandon
     * const tandon = await prisma.tandon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TandonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TandonFindUniqueArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tandon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TandonFindUniqueOrThrowArgs} args - Arguments to find a Tandon
     * @example
     * // Get one Tandon
     * const tandon = await prisma.tandon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TandonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tandon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonFindFirstArgs} args - Arguments to find a Tandon
     * @example
     * // Get one Tandon
     * const tandon = await prisma.tandon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TandonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonFindFirstArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tandon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonFindFirstOrThrowArgs} args - Arguments to find a Tandon
     * @example
     * // Get one Tandon
     * const tandon = await prisma.tandon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TandonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tandons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tandons
     * const tandons = await prisma.tandon.findMany()
     * 
     * // Get first 10 Tandons
     * const tandons = await prisma.tandon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tandonWithIdOnly = await prisma.tandon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TandonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tandon.
     * @param {TandonCreateArgs} args - Arguments to create a Tandon.
     * @example
     * // Create one Tandon
     * const Tandon = await prisma.tandon.create({
     *   data: {
     *     // ... data to create a Tandon
     *   }
     * })
     * 
    **/
    create<T extends TandonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TandonCreateArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tandons.
     *     @param {TandonCreateManyArgs} args - Arguments to create many Tandons.
     *     @example
     *     // Create many Tandons
     *     const tandon = await prisma.tandon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TandonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tandon.
     * @param {TandonDeleteArgs} args - Arguments to delete one Tandon.
     * @example
     * // Delete one Tandon
     * const Tandon = await prisma.tandon.delete({
     *   where: {
     *     // ... filter to delete one Tandon
     *   }
     * })
     * 
    **/
    delete<T extends TandonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TandonDeleteArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tandon.
     * @param {TandonUpdateArgs} args - Arguments to update one Tandon.
     * @example
     * // Update one Tandon
     * const tandon = await prisma.tandon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TandonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TandonUpdateArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tandons.
     * @param {TandonDeleteManyArgs} args - Arguments to filter Tandons to delete.
     * @example
     * // Delete a few Tandons
     * const { count } = await prisma.tandon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TandonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TandonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tandons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tandons
     * const tandon = await prisma.tandon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TandonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TandonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tandon.
     * @param {TandonUpsertArgs} args - Arguments to update or create a Tandon.
     * @example
     * // Update or create a Tandon
     * const tandon = await prisma.tandon.upsert({
     *   create: {
     *     // ... data to create a Tandon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tandon we want to update
     *   }
     * })
    **/
    upsert<T extends TandonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TandonUpsertArgs<ExtArgs>>
    ): Prisma__TandonClient<$Result.GetResult<Prisma.$TandonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tandons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonCountArgs} args - Arguments to filter Tandons to count.
     * @example
     * // Count the number of Tandons
     * const count = await prisma.tandon.count({
     *   where: {
     *     // ... the filter for the Tandons we want to count
     *   }
     * })
    **/
    count<T extends TandonCountArgs>(
      args?: Subset<T, TandonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TandonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tandon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TandonAggregateArgs>(args: Subset<T, TandonAggregateArgs>): Prisma.PrismaPromise<GetTandonAggregateType<T>>

    /**
     * Group by Tandon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TandonGroupByArgs} args - Group by arguments.
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
      T extends TandonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TandonGroupByArgs['orderBy'] }
        : { orderBy?: TandonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TandonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTandonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tandon model
   */
  readonly fields: TandonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tandon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TandonClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sensor<T extends Tandon$sensorArgs<ExtArgs> = {}>(args?: Subset<T, Tandon$sensorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, 'findMany'> | Null>;

    selenoid<T extends Tandon$selenoidArgs<ExtArgs> = {}>(args?: Subset<T, Tandon$selenoidArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelenoidPayload<ExtArgs>, T, 'findMany'> | Null>;

    tandonBahan<T extends Tandon$tandonBahanArgs<ExtArgs> = {}>(args?: Subset<T, Tandon$tandonBahanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TandonBahanPayload<ExtArgs>, T, 'findMany'> | Null>;

    penjadwalan<T extends Tandon$penjadwalanArgs<ExtArgs> = {}>(args?: Subset<T, Tandon$penjadwalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Tandon model
   */ 
  interface TandonFieldRefs {
    readonly id: FieldRef<"Tandon", 'Int'>
    readonly nama: FieldRef<"Tandon", 'String'>
    readonly userId: FieldRef<"Tandon", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Tandon findUnique
   */
  export type TandonFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * Filter, which Tandon to fetch.
     */
    where: TandonWhereUniqueInput
  }


  /**
   * Tandon findUniqueOrThrow
   */
  export type TandonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * Filter, which Tandon to fetch.
     */
    where: TandonWhereUniqueInput
  }


  /**
   * Tandon findFirst
   */
  export type TandonFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * Filter, which Tandon to fetch.
     */
    where?: TandonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tandons to fetch.
     */
    orderBy?: TandonOrderByWithRelationInput | TandonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tandons.
     */
    cursor?: TandonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tandons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tandons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tandons.
     */
    distinct?: TandonScalarFieldEnum | TandonScalarFieldEnum[]
  }


  /**
   * Tandon findFirstOrThrow
   */
  export type TandonFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * Filter, which Tandon to fetch.
     */
    where?: TandonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tandons to fetch.
     */
    orderBy?: TandonOrderByWithRelationInput | TandonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tandons.
     */
    cursor?: TandonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tandons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tandons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tandons.
     */
    distinct?: TandonScalarFieldEnum | TandonScalarFieldEnum[]
  }


  /**
   * Tandon findMany
   */
  export type TandonFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * Filter, which Tandons to fetch.
     */
    where?: TandonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tandons to fetch.
     */
    orderBy?: TandonOrderByWithRelationInput | TandonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tandons.
     */
    cursor?: TandonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tandons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tandons.
     */
    skip?: number
    distinct?: TandonScalarFieldEnum | TandonScalarFieldEnum[]
  }


  /**
   * Tandon create
   */
  export type TandonCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * The data needed to create a Tandon.
     */
    data: XOR<TandonCreateInput, TandonUncheckedCreateInput>
  }


  /**
   * Tandon createMany
   */
  export type TandonCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tandons.
     */
    data: TandonCreateManyInput | TandonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tandon update
   */
  export type TandonUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * The data needed to update a Tandon.
     */
    data: XOR<TandonUpdateInput, TandonUncheckedUpdateInput>
    /**
     * Choose, which Tandon to update.
     */
    where: TandonWhereUniqueInput
  }


  /**
   * Tandon updateMany
   */
  export type TandonUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tandons.
     */
    data: XOR<TandonUpdateManyMutationInput, TandonUncheckedUpdateManyInput>
    /**
     * Filter which Tandons to update
     */
    where?: TandonWhereInput
  }


  /**
   * Tandon upsert
   */
  export type TandonUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * The filter to search for the Tandon to update in case it exists.
     */
    where: TandonWhereUniqueInput
    /**
     * In case the Tandon found by the `where` argument doesn't exist, create a new Tandon with this data.
     */
    create: XOR<TandonCreateInput, TandonUncheckedCreateInput>
    /**
     * In case the Tandon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TandonUpdateInput, TandonUncheckedUpdateInput>
  }


  /**
   * Tandon delete
   */
  export type TandonDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
    /**
     * Filter which Tandon to delete.
     */
    where: TandonWhereUniqueInput
  }


  /**
   * Tandon deleteMany
   */
  export type TandonDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tandons to delete
     */
    where?: TandonWhereInput
  }


  /**
   * Tandon.sensor
   */
  export type Tandon$sensorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }


  /**
   * Tandon.selenoid
   */
  export type Tandon$selenoidArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selenoid
     */
    select?: SelenoidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelenoidInclude<ExtArgs> | null
    where?: SelenoidWhereInput
    orderBy?: SelenoidOrderByWithRelationInput | SelenoidOrderByWithRelationInput[]
    cursor?: SelenoidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelenoidScalarFieldEnum | SelenoidScalarFieldEnum[]
  }


  /**
   * Tandon.tandonBahan
   */
  export type Tandon$tandonBahanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TandonBahan
     */
    select?: TandonBahanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonBahanInclude<ExtArgs> | null
    where?: TandonBahanWhereInput
    orderBy?: TandonBahanOrderByWithRelationInput | TandonBahanOrderByWithRelationInput[]
    cursor?: TandonBahanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TandonBahanScalarFieldEnum | TandonBahanScalarFieldEnum[]
  }


  /**
   * Tandon.penjadwalan
   */
  export type Tandon$penjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Tandon without action
   */
  export type TandonDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tandon
     */
    select?: TandonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TandonInclude<ExtArgs> | null
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


  export const ResepScalarFieldEnum: {
    id: 'id',
    ppm: 'ppm',
    ph: 'ph',
    nama: 'nama'
  };

  export type ResepScalarFieldEnum = (typeof ResepScalarFieldEnum)[keyof typeof ResepScalarFieldEnum]


  export const PenjadwalanScalarFieldEnum: {
    id: 'id',
    waktu: 'waktu',
    resepId: 'resepId',
    tandonId: 'tandonId'
  };

  export type PenjadwalanScalarFieldEnum = (typeof PenjadwalanScalarFieldEnum)[keyof typeof PenjadwalanScalarFieldEnum]


  export const SensorScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    persamaan: 'persamaan',
    merek: 'merek',
    satuan: 'satuan',
    status: 'status',
    nilai: 'nilai',
    tandonId: 'tandonId',
    tandonBahanId: 'tandonBahanId'
  };

  export type SensorScalarFieldEnum = (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum]


  export const SelenoidScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    merek: 'merek',
    status: 'status',
    tandonId: 'tandonId',
    greenhouseId: 'greenhouseId'
  };

  export type SelenoidScalarFieldEnum = (typeof SelenoidScalarFieldEnum)[keyof typeof SelenoidScalarFieldEnum]


  export const TandonBahanScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    tandonId: 'tandonId'
  };

  export type TandonBahanScalarFieldEnum = (typeof TandonBahanScalarFieldEnum)[keyof typeof TandonBahanScalarFieldEnum]


  export const TandonScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    userId: 'userId'
  };

  export type TandonScalarFieldEnum = (typeof TandonScalarFieldEnum)[keyof typeof TandonScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
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
    tandon?: TandonListRelationFilter
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
    tandon?: TandonOrderByRelationAggregateInput
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
    tandon?: TandonListRelationFilter
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
    selenoid?: SelenoidListRelationFilter
  }

  export type GreenhouseOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    user?: UserOrderByRelationAggregateInput
    selenoid?: SelenoidOrderByRelationAggregateInput
  }

  export type GreenhouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GreenhouseWhereInput | GreenhouseWhereInput[]
    OR?: GreenhouseWhereInput[]
    NOT?: GreenhouseWhereInput | GreenhouseWhereInput[]
    nama?: StringFilter<"Greenhouse"> | string
    user?: UserListRelationFilter
    selenoid?: SelenoidListRelationFilter
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

  export type ResepWhereInput = {
    AND?: ResepWhereInput | ResepWhereInput[]
    OR?: ResepWhereInput[]
    NOT?: ResepWhereInput | ResepWhereInput[]
    id?: IntFilter<"Resep"> | number
    ppm?: IntFilter<"Resep"> | number
    ph?: FloatFilter<"Resep"> | number
    nama?: StringFilter<"Resep"> | string
    penjadwalan?: PenjadwalanListRelationFilter
  }

  export type ResepOrderByWithRelationInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
    penjadwalan?: PenjadwalanOrderByRelationAggregateInput
  }

  export type ResepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResepWhereInput | ResepWhereInput[]
    OR?: ResepWhereInput[]
    NOT?: ResepWhereInput | ResepWhereInput[]
    ppm?: IntFilter<"Resep"> | number
    ph?: FloatFilter<"Resep"> | number
    nama?: StringFilter<"Resep"> | string
    penjadwalan?: PenjadwalanListRelationFilter
  }, "id">

  export type ResepOrderByWithAggregationInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
    _count?: ResepCountOrderByAggregateInput
    _avg?: ResepAvgOrderByAggregateInput
    _max?: ResepMaxOrderByAggregateInput
    _min?: ResepMinOrderByAggregateInput
    _sum?: ResepSumOrderByAggregateInput
  }

  export type ResepScalarWhereWithAggregatesInput = {
    AND?: ResepScalarWhereWithAggregatesInput | ResepScalarWhereWithAggregatesInput[]
    OR?: ResepScalarWhereWithAggregatesInput[]
    NOT?: ResepScalarWhereWithAggregatesInput | ResepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resep"> | number
    ppm?: IntWithAggregatesFilter<"Resep"> | number
    ph?: FloatWithAggregatesFilter<"Resep"> | number
    nama?: StringWithAggregatesFilter<"Resep"> | string
  }

  export type PenjadwalanWhereInput = {
    AND?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    OR?: PenjadwalanWhereInput[]
    NOT?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    id?: IntFilter<"Penjadwalan"> | number
    waktu?: StringFilter<"Penjadwalan"> | string
    resepId?: IntFilter<"Penjadwalan"> | number
    tandonId?: IntFilter<"Penjadwalan"> | number
    resep?: XOR<ResepRelationFilter, ResepWhereInput>
    tandon?: XOR<TandonRelationFilter, TandonWhereInput>
  }

  export type PenjadwalanOrderByWithRelationInput = {
    id?: SortOrder
    waktu?: SortOrder
    resepId?: SortOrder
    tandonId?: SortOrder
    resep?: ResepOrderByWithRelationInput
    tandon?: TandonOrderByWithRelationInput
  }

  export type PenjadwalanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    waktu?: string
    AND?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    OR?: PenjadwalanWhereInput[]
    NOT?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    resepId?: IntFilter<"Penjadwalan"> | number
    tandonId?: IntFilter<"Penjadwalan"> | number
    resep?: XOR<ResepRelationFilter, ResepWhereInput>
    tandon?: XOR<TandonRelationFilter, TandonWhereInput>
  }, "id" | "waktu">

  export type PenjadwalanOrderByWithAggregationInput = {
    id?: SortOrder
    waktu?: SortOrder
    resepId?: SortOrder
    tandonId?: SortOrder
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
    resepId?: IntWithAggregatesFilter<"Penjadwalan"> | number
    tandonId?: IntWithAggregatesFilter<"Penjadwalan"> | number
  }

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    id?: IntFilter<"Sensor"> | number
    nama?: StringFilter<"Sensor"> | string
    persamaan?: StringFilter<"Sensor"> | string
    merek?: StringFilter<"Sensor"> | string
    satuan?: StringFilter<"Sensor"> | string
    status?: BoolFilter<"Sensor"> | boolean
    nilai?: IntFilter<"Sensor"> | number
    tandonId?: IntNullableFilter<"Sensor"> | number | null
    tandonBahanId?: IntNullableFilter<"Sensor"> | number | null
    tandon?: XOR<TandonNullableRelationFilter, TandonWhereInput> | null
    tandonBahan?: XOR<TandonBahanNullableRelationFilter, TandonBahanWhereInput> | null
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    persamaan?: SortOrder
    merek?: SortOrder
    satuan?: SortOrder
    status?: SortOrder
    nilai?: SortOrder
    tandonId?: SortOrderInput | SortOrder
    tandonBahanId?: SortOrderInput | SortOrder
    tandon?: TandonOrderByWithRelationInput
    tandonBahan?: TandonBahanOrderByWithRelationInput
  }

  export type SensorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    nama?: StringFilter<"Sensor"> | string
    persamaan?: StringFilter<"Sensor"> | string
    merek?: StringFilter<"Sensor"> | string
    satuan?: StringFilter<"Sensor"> | string
    status?: BoolFilter<"Sensor"> | boolean
    nilai?: IntFilter<"Sensor"> | number
    tandonId?: IntNullableFilter<"Sensor"> | number | null
    tandonBahanId?: IntNullableFilter<"Sensor"> | number | null
    tandon?: XOR<TandonNullableRelationFilter, TandonWhereInput> | null
    tandonBahan?: XOR<TandonBahanNullableRelationFilter, TandonBahanWhereInput> | null
  }, "id">

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    persamaan?: SortOrder
    merek?: SortOrder
    satuan?: SortOrder
    status?: SortOrder
    nilai?: SortOrder
    tandonId?: SortOrderInput | SortOrder
    tandonBahanId?: SortOrderInput | SortOrder
    _count?: SensorCountOrderByAggregateInput
    _avg?: SensorAvgOrderByAggregateInput
    _max?: SensorMaxOrderByAggregateInput
    _min?: SensorMinOrderByAggregateInput
    _sum?: SensorSumOrderByAggregateInput
  }

  export type SensorScalarWhereWithAggregatesInput = {
    AND?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    OR?: SensorScalarWhereWithAggregatesInput[]
    NOT?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sensor"> | number
    nama?: StringWithAggregatesFilter<"Sensor"> | string
    persamaan?: StringWithAggregatesFilter<"Sensor"> | string
    merek?: StringWithAggregatesFilter<"Sensor"> | string
    satuan?: StringWithAggregatesFilter<"Sensor"> | string
    status?: BoolWithAggregatesFilter<"Sensor"> | boolean
    nilai?: IntWithAggregatesFilter<"Sensor"> | number
    tandonId?: IntNullableWithAggregatesFilter<"Sensor"> | number | null
    tandonBahanId?: IntNullableWithAggregatesFilter<"Sensor"> | number | null
  }

  export type SelenoidWhereInput = {
    AND?: SelenoidWhereInput | SelenoidWhereInput[]
    OR?: SelenoidWhereInput[]
    NOT?: SelenoidWhereInput | SelenoidWhereInput[]
    id?: IntFilter<"Selenoid"> | number
    nama?: StringFilter<"Selenoid"> | string
    merek?: StringFilter<"Selenoid"> | string
    status?: BoolFilter<"Selenoid"> | boolean
    tandonId?: IntFilter<"Selenoid"> | number
    greenhouseId?: IntFilter<"Selenoid"> | number
    tandon?: XOR<TandonRelationFilter, TandonWhereInput>
    greenhouse?: XOR<GreenhouseRelationFilter, GreenhouseWhereInput>
  }

  export type SelenoidOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    merek?: SortOrder
    status?: SortOrder
    tandonId?: SortOrder
    greenhouseId?: SortOrder
    tandon?: TandonOrderByWithRelationInput
    greenhouse?: GreenhouseOrderByWithRelationInput
  }

  export type SelenoidWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SelenoidWhereInput | SelenoidWhereInput[]
    OR?: SelenoidWhereInput[]
    NOT?: SelenoidWhereInput | SelenoidWhereInput[]
    nama?: StringFilter<"Selenoid"> | string
    merek?: StringFilter<"Selenoid"> | string
    status?: BoolFilter<"Selenoid"> | boolean
    tandonId?: IntFilter<"Selenoid"> | number
    greenhouseId?: IntFilter<"Selenoid"> | number
    tandon?: XOR<TandonRelationFilter, TandonWhereInput>
    greenhouse?: XOR<GreenhouseRelationFilter, GreenhouseWhereInput>
  }, "id">

  export type SelenoidOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    merek?: SortOrder
    status?: SortOrder
    tandonId?: SortOrder
    greenhouseId?: SortOrder
    _count?: SelenoidCountOrderByAggregateInput
    _avg?: SelenoidAvgOrderByAggregateInput
    _max?: SelenoidMaxOrderByAggregateInput
    _min?: SelenoidMinOrderByAggregateInput
    _sum?: SelenoidSumOrderByAggregateInput
  }

  export type SelenoidScalarWhereWithAggregatesInput = {
    AND?: SelenoidScalarWhereWithAggregatesInput | SelenoidScalarWhereWithAggregatesInput[]
    OR?: SelenoidScalarWhereWithAggregatesInput[]
    NOT?: SelenoidScalarWhereWithAggregatesInput | SelenoidScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Selenoid"> | number
    nama?: StringWithAggregatesFilter<"Selenoid"> | string
    merek?: StringWithAggregatesFilter<"Selenoid"> | string
    status?: BoolWithAggregatesFilter<"Selenoid"> | boolean
    tandonId?: IntWithAggregatesFilter<"Selenoid"> | number
    greenhouseId?: IntWithAggregatesFilter<"Selenoid"> | number
  }

  export type TandonBahanWhereInput = {
    AND?: TandonBahanWhereInput | TandonBahanWhereInput[]
    OR?: TandonBahanWhereInput[]
    NOT?: TandonBahanWhereInput | TandonBahanWhereInput[]
    id?: IntFilter<"TandonBahan"> | number
    nama?: StringFilter<"TandonBahan"> | string
    tandonId?: IntFilter<"TandonBahan"> | number
    sensor?: SensorListRelationFilter
    tandon?: XOR<TandonRelationFilter, TandonWhereInput>
  }

  export type TandonBahanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    tandonId?: SortOrder
    sensor?: SensorOrderByRelationAggregateInput
    tandon?: TandonOrderByWithRelationInput
  }

  export type TandonBahanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TandonBahanWhereInput | TandonBahanWhereInput[]
    OR?: TandonBahanWhereInput[]
    NOT?: TandonBahanWhereInput | TandonBahanWhereInput[]
    nama?: StringFilter<"TandonBahan"> | string
    tandonId?: IntFilter<"TandonBahan"> | number
    sensor?: SensorListRelationFilter
    tandon?: XOR<TandonRelationFilter, TandonWhereInput>
  }, "id">

  export type TandonBahanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    tandonId?: SortOrder
    _count?: TandonBahanCountOrderByAggregateInput
    _avg?: TandonBahanAvgOrderByAggregateInput
    _max?: TandonBahanMaxOrderByAggregateInput
    _min?: TandonBahanMinOrderByAggregateInput
    _sum?: TandonBahanSumOrderByAggregateInput
  }

  export type TandonBahanScalarWhereWithAggregatesInput = {
    AND?: TandonBahanScalarWhereWithAggregatesInput | TandonBahanScalarWhereWithAggregatesInput[]
    OR?: TandonBahanScalarWhereWithAggregatesInput[]
    NOT?: TandonBahanScalarWhereWithAggregatesInput | TandonBahanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TandonBahan"> | number
    nama?: StringWithAggregatesFilter<"TandonBahan"> | string
    tandonId?: IntWithAggregatesFilter<"TandonBahan"> | number
  }

  export type TandonWhereInput = {
    AND?: TandonWhereInput | TandonWhereInput[]
    OR?: TandonWhereInput[]
    NOT?: TandonWhereInput | TandonWhereInput[]
    id?: IntFilter<"Tandon"> | number
    nama?: StringFilter<"Tandon"> | string
    userId?: IntFilter<"Tandon"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    sensor?: SensorListRelationFilter
    selenoid?: SelenoidListRelationFilter
    tandonBahan?: TandonBahanListRelationFilter
    penjadwalan?: PenjadwalanListRelationFilter
  }

  export type TandonOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    sensor?: SensorOrderByRelationAggregateInput
    selenoid?: SelenoidOrderByRelationAggregateInput
    tandonBahan?: TandonBahanOrderByRelationAggregateInput
    penjadwalan?: PenjadwalanOrderByRelationAggregateInput
  }

  export type TandonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TandonWhereInput | TandonWhereInput[]
    OR?: TandonWhereInput[]
    NOT?: TandonWhereInput | TandonWhereInput[]
    nama?: StringFilter<"Tandon"> | string
    userId?: IntFilter<"Tandon"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    sensor?: SensorListRelationFilter
    selenoid?: SelenoidListRelationFilter
    tandonBahan?: TandonBahanListRelationFilter
    penjadwalan?: PenjadwalanListRelationFilter
  }, "id">

  export type TandonOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    userId?: SortOrder
    _count?: TandonCountOrderByAggregateInput
    _avg?: TandonAvgOrderByAggregateInput
    _max?: TandonMaxOrderByAggregateInput
    _min?: TandonMinOrderByAggregateInput
    _sum?: TandonSumOrderByAggregateInput
  }

  export type TandonScalarWhereWithAggregatesInput = {
    AND?: TandonScalarWhereWithAggregatesInput | TandonScalarWhereWithAggregatesInput[]
    OR?: TandonScalarWhereWithAggregatesInput[]
    NOT?: TandonScalarWhereWithAggregatesInput | TandonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tandon"> | number
    nama?: StringWithAggregatesFilter<"Tandon"> | string
    userId?: IntWithAggregatesFilter<"Tandon"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
    greenhouse?: GreenhouseCreateNestedManyWithoutUserInput
    tandon?: TandonCreateNestedManyWithoutUserInput
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
    tandon?: TandonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouse?: GreenhouseUpdateManyWithoutUserNestedInput
    tandon?: TandonUpdateManyWithoutUserNestedInput
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
    tandon?: TandonUncheckedUpdateManyWithoutUserNestedInput
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
    selenoid?: SelenoidCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUncheckedCreateInput = {
    id?: number
    nama: string
    user?: UserUncheckedCreateNestedManyWithoutGreenhouseInput
    selenoid?: SelenoidUncheckedCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutGreenhouseNestedInput
    selenoid?: SelenoidUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutGreenhouseNestedInput
    selenoid?: SelenoidUncheckedUpdateManyWithoutGreenhouseNestedInput
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

  export type ResepCreateInput = {
    ppm: number
    ph: number
    nama: string
    penjadwalan?: PenjadwalanCreateNestedManyWithoutResepInput
  }

  export type ResepUncheckedCreateInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutResepInput
  }

  export type ResepUpdateInput = {
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    penjadwalan?: PenjadwalanUpdateManyWithoutResepNestedInput
  }

  export type ResepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutResepNestedInput
  }

  export type ResepCreateManyInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
  }

  export type ResepUpdateManyMutationInput = {
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ResepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PenjadwalanCreateInput = {
    waktu: string
    resep: ResepCreateNestedOneWithoutPenjadwalanInput
    tandon: TandonCreateNestedOneWithoutPenjadwalanInput
  }

  export type PenjadwalanUncheckedCreateInput = {
    id?: number
    waktu: string
    resepId: number
    tandonId: number
  }

  export type PenjadwalanUpdateInput = {
    waktu?: StringFieldUpdateOperationsInput | string
    resep?: ResepUpdateOneRequiredWithoutPenjadwalanNestedInput
    tandon?: TandonUpdateOneRequiredWithoutPenjadwalanNestedInput
  }

  export type PenjadwalanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    resepId?: IntFieldUpdateOperationsInput | number
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanCreateManyInput = {
    id?: number
    waktu: string
    resepId: number
    tandonId: number
  }

  export type PenjadwalanUpdateManyMutationInput = {
    waktu?: StringFieldUpdateOperationsInput | string
  }

  export type PenjadwalanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    resepId?: IntFieldUpdateOperationsInput | number
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type SensorCreateInput = {
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandon?: TandonCreateNestedOneWithoutSensorInput
    tandonBahan?: TandonBahanCreateNestedOneWithoutSensorInput
  }

  export type SensorUncheckedCreateInput = {
    id?: number
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonId?: number | null
    tandonBahanId?: number | null
  }

  export type SensorUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandon?: TandonUpdateOneWithoutSensorNestedInput
    tandonBahan?: TandonBahanUpdateOneWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandonId?: NullableIntFieldUpdateOperationsInput | number | null
    tandonBahanId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SensorCreateManyInput = {
    id?: number
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonId?: number | null
    tandonBahanId?: number | null
  }

  export type SensorUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
  }

  export type SensorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandonId?: NullableIntFieldUpdateOperationsInput | number | null
    tandonBahanId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SelenoidCreateInput = {
    nama: string
    merek: string
    status: boolean
    tandon: TandonCreateNestedOneWithoutSelenoidInput
    greenhouse: GreenhouseCreateNestedOneWithoutSelenoidInput
  }

  export type SelenoidUncheckedCreateInput = {
    id?: number
    nama: string
    merek: string
    status: boolean
    tandonId: number
    greenhouseId: number
  }

  export type SelenoidUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    tandon?: TandonUpdateOneRequiredWithoutSelenoidNestedInput
    greenhouse?: GreenhouseUpdateOneRequiredWithoutSelenoidNestedInput
  }

  export type SelenoidUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    tandonId?: IntFieldUpdateOperationsInput | number
    greenhouseId?: IntFieldUpdateOperationsInput | number
  }

  export type SelenoidCreateManyInput = {
    id?: number
    nama: string
    merek: string
    status: boolean
    tandonId: number
    greenhouseId: number
  }

  export type SelenoidUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SelenoidUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    tandonId?: IntFieldUpdateOperationsInput | number
    greenhouseId?: IntFieldUpdateOperationsInput | number
  }

  export type TandonBahanCreateInput = {
    nama: string
    sensor?: SensorCreateNestedManyWithoutTandonBahanInput
    tandon: TandonCreateNestedOneWithoutTandonBahanInput
  }

  export type TandonBahanUncheckedCreateInput = {
    id?: number
    nama: string
    tandonId: number
    sensor?: SensorUncheckedCreateNestedManyWithoutTandonBahanInput
  }

  export type TandonBahanUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    sensor?: SensorUpdateManyWithoutTandonBahanNestedInput
    tandon?: TandonUpdateOneRequiredWithoutTandonBahanNestedInput
  }

  export type TandonBahanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    tandonId?: IntFieldUpdateOperationsInput | number
    sensor?: SensorUncheckedUpdateManyWithoutTandonBahanNestedInput
  }

  export type TandonBahanCreateManyInput = {
    id?: number
    nama: string
    tandonId: number
  }

  export type TandonBahanUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type TandonBahanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type TandonCreateInput = {
    nama: string
    user: UserCreateNestedOneWithoutTandonInput
    sensor?: SensorCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutTandonInput
  }

  export type TandonUncheckedCreateInput = {
    id?: number
    nama: string
    userId: number
    sensor?: SensorUncheckedCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidUncheckedCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanUncheckedCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutTandonInput
  }

  export type TandonUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTandonNestedInput
    sensor?: SensorUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutTandonNestedInput
  }

  export type TandonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sensor?: SensorUncheckedUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUncheckedUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUncheckedUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutTandonNestedInput
  }

  export type TandonCreateManyInput = {
    id?: number
    nama: string
    userId: number
  }

  export type TandonUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type TandonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
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

  export type TandonListRelationFilter = {
    every?: TandonWhereInput
    some?: TandonWhereInput
    none?: TandonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GreenhouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TandonOrderByRelationAggregateInput = {
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

  export type SelenoidListRelationFilter = {
    every?: SelenoidWhereInput
    some?: SelenoidWhereInput
    none?: SelenoidWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SelenoidOrderByRelationAggregateInput = {
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

  export type PenjadwalanListRelationFilter = {
    every?: PenjadwalanWhereInput
    some?: PenjadwalanWhereInput
    none?: PenjadwalanWhereInput
  }

  export type PenjadwalanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResepCountOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
  }

  export type ResepAvgOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
  }

  export type ResepMaxOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
  }

  export type ResepMinOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
    nama?: SortOrder
  }

  export type ResepSumOrderByAggregateInput = {
    id?: SortOrder
    ppm?: SortOrder
    ph?: SortOrder
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

  export type ResepRelationFilter = {
    is?: ResepWhereInput
    isNot?: ResepWhereInput
  }

  export type TandonRelationFilter = {
    is?: TandonWhereInput
    isNot?: TandonWhereInput
  }

  export type PenjadwalanCountOrderByAggregateInput = {
    id?: SortOrder
    waktu?: SortOrder
    resepId?: SortOrder
    tandonId?: SortOrder
  }

  export type PenjadwalanAvgOrderByAggregateInput = {
    id?: SortOrder
    resepId?: SortOrder
    tandonId?: SortOrder
  }

  export type PenjadwalanMaxOrderByAggregateInput = {
    id?: SortOrder
    waktu?: SortOrder
    resepId?: SortOrder
    tandonId?: SortOrder
  }

  export type PenjadwalanMinOrderByAggregateInput = {
    id?: SortOrder
    waktu?: SortOrder
    resepId?: SortOrder
    tandonId?: SortOrder
  }

  export type PenjadwalanSumOrderByAggregateInput = {
    id?: SortOrder
    resepId?: SortOrder
    tandonId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TandonNullableRelationFilter = {
    is?: TandonWhereInput | null
    isNot?: TandonWhereInput | null
  }

  export type TandonBahanNullableRelationFilter = {
    is?: TandonBahanWhereInput | null
    isNot?: TandonBahanWhereInput | null
  }

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    persamaan?: SortOrder
    merek?: SortOrder
    satuan?: SortOrder
    status?: SortOrder
    nilai?: SortOrder
    tandonId?: SortOrder
    tandonBahanId?: SortOrder
  }

  export type SensorAvgOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    tandonId?: SortOrder
    tandonBahanId?: SortOrder
  }

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    persamaan?: SortOrder
    merek?: SortOrder
    satuan?: SortOrder
    status?: SortOrder
    nilai?: SortOrder
    tandonId?: SortOrder
    tandonBahanId?: SortOrder
  }

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    persamaan?: SortOrder
    merek?: SortOrder
    satuan?: SortOrder
    status?: SortOrder
    nilai?: SortOrder
    tandonId?: SortOrder
    tandonBahanId?: SortOrder
  }

  export type SensorSumOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    tandonId?: SortOrder
    tandonBahanId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type GreenhouseRelationFilter = {
    is?: GreenhouseWhereInput
    isNot?: GreenhouseWhereInput
  }

  export type SelenoidCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    merek?: SortOrder
    status?: SortOrder
    tandonId?: SortOrder
    greenhouseId?: SortOrder
  }

  export type SelenoidAvgOrderByAggregateInput = {
    id?: SortOrder
    tandonId?: SortOrder
    greenhouseId?: SortOrder
  }

  export type SelenoidMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    merek?: SortOrder
    status?: SortOrder
    tandonId?: SortOrder
    greenhouseId?: SortOrder
  }

  export type SelenoidMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    merek?: SortOrder
    status?: SortOrder
    tandonId?: SortOrder
    greenhouseId?: SortOrder
  }

  export type SelenoidSumOrderByAggregateInput = {
    id?: SortOrder
    tandonId?: SortOrder
    greenhouseId?: SortOrder
  }

  export type SensorListRelationFilter = {
    every?: SensorWhereInput
    some?: SensorWhereInput
    none?: SensorWhereInput
  }

  export type SensorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TandonBahanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tandonId?: SortOrder
  }

  export type TandonBahanAvgOrderByAggregateInput = {
    id?: SortOrder
    tandonId?: SortOrder
  }

  export type TandonBahanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tandonId?: SortOrder
  }

  export type TandonBahanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tandonId?: SortOrder
  }

  export type TandonBahanSumOrderByAggregateInput = {
    id?: SortOrder
    tandonId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TandonBahanListRelationFilter = {
    every?: TandonBahanWhereInput
    some?: TandonBahanWhereInput
    none?: TandonBahanWhereInput
  }

  export type TandonBahanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TandonCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    userId?: SortOrder
  }

  export type TandonAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TandonMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    userId?: SortOrder
  }

  export type TandonMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    userId?: SortOrder
  }

  export type TandonSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GreenhouseCreateNestedManyWithoutUserInput = {
    create?: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput> | GreenhouseCreateWithoutUserInput[] | GreenhouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GreenhouseCreateOrConnectWithoutUserInput | GreenhouseCreateOrConnectWithoutUserInput[]
    connect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
  }

  export type TandonCreateNestedManyWithoutUserInput = {
    create?: XOR<TandonCreateWithoutUserInput, TandonUncheckedCreateWithoutUserInput> | TandonCreateWithoutUserInput[] | TandonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TandonCreateOrConnectWithoutUserInput | TandonCreateOrConnectWithoutUserInput[]
    createMany?: TandonCreateManyUserInputEnvelope
    connect?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
  }

  export type GreenhouseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput> | GreenhouseCreateWithoutUserInput[] | GreenhouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GreenhouseCreateOrConnectWithoutUserInput | GreenhouseCreateOrConnectWithoutUserInput[]
    connect?: GreenhouseWhereUniqueInput | GreenhouseWhereUniqueInput[]
  }

  export type TandonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TandonCreateWithoutUserInput, TandonUncheckedCreateWithoutUserInput> | TandonCreateWithoutUserInput[] | TandonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TandonCreateOrConnectWithoutUserInput | TandonCreateOrConnectWithoutUserInput[]
    createMany?: TandonCreateManyUserInputEnvelope
    connect?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
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

  export type TandonUpdateManyWithoutUserNestedInput = {
    create?: XOR<TandonCreateWithoutUserInput, TandonUncheckedCreateWithoutUserInput> | TandonCreateWithoutUserInput[] | TandonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TandonCreateOrConnectWithoutUserInput | TandonCreateOrConnectWithoutUserInput[]
    upsert?: TandonUpsertWithWhereUniqueWithoutUserInput | TandonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TandonCreateManyUserInputEnvelope
    set?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    disconnect?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    delete?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    connect?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    update?: TandonUpdateWithWhereUniqueWithoutUserInput | TandonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TandonUpdateManyWithWhereWithoutUserInput | TandonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TandonScalarWhereInput | TandonScalarWhereInput[]
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

  export type TandonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TandonCreateWithoutUserInput, TandonUncheckedCreateWithoutUserInput> | TandonCreateWithoutUserInput[] | TandonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TandonCreateOrConnectWithoutUserInput | TandonCreateOrConnectWithoutUserInput[]
    upsert?: TandonUpsertWithWhereUniqueWithoutUserInput | TandonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TandonCreateManyUserInputEnvelope
    set?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    disconnect?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    delete?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    connect?: TandonWhereUniqueInput | TandonWhereUniqueInput[]
    update?: TandonUpdateWithWhereUniqueWithoutUserInput | TandonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TandonUpdateManyWithWhereWithoutUserInput | TandonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TandonScalarWhereInput | TandonScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput> | UserCreateWithoutGreenhouseInput[] | UserUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGreenhouseInput | UserCreateOrConnectWithoutGreenhouseInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SelenoidCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<SelenoidCreateWithoutGreenhouseInput, SelenoidUncheckedCreateWithoutGreenhouseInput> | SelenoidCreateWithoutGreenhouseInput[] | SelenoidUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutGreenhouseInput | SelenoidCreateOrConnectWithoutGreenhouseInput[]
    createMany?: SelenoidCreateManyGreenhouseInputEnvelope
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput> | UserCreateWithoutGreenhouseInput[] | UserUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGreenhouseInput | UserCreateOrConnectWithoutGreenhouseInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SelenoidUncheckedCreateNestedManyWithoutGreenhouseInput = {
    create?: XOR<SelenoidCreateWithoutGreenhouseInput, SelenoidUncheckedCreateWithoutGreenhouseInput> | SelenoidCreateWithoutGreenhouseInput[] | SelenoidUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutGreenhouseInput | SelenoidCreateOrConnectWithoutGreenhouseInput[]
    createMany?: SelenoidCreateManyGreenhouseInputEnvelope
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
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

  export type SelenoidUpdateManyWithoutGreenhouseNestedInput = {
    create?: XOR<SelenoidCreateWithoutGreenhouseInput, SelenoidUncheckedCreateWithoutGreenhouseInput> | SelenoidCreateWithoutGreenhouseInput[] | SelenoidUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutGreenhouseInput | SelenoidCreateOrConnectWithoutGreenhouseInput[]
    upsert?: SelenoidUpsertWithWhereUniqueWithoutGreenhouseInput | SelenoidUpsertWithWhereUniqueWithoutGreenhouseInput[]
    createMany?: SelenoidCreateManyGreenhouseInputEnvelope
    set?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    disconnect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    delete?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    update?: SelenoidUpdateWithWhereUniqueWithoutGreenhouseInput | SelenoidUpdateWithWhereUniqueWithoutGreenhouseInput[]
    updateMany?: SelenoidUpdateManyWithWhereWithoutGreenhouseInput | SelenoidUpdateManyWithWhereWithoutGreenhouseInput[]
    deleteMany?: SelenoidScalarWhereInput | SelenoidScalarWhereInput[]
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

  export type SelenoidUncheckedUpdateManyWithoutGreenhouseNestedInput = {
    create?: XOR<SelenoidCreateWithoutGreenhouseInput, SelenoidUncheckedCreateWithoutGreenhouseInput> | SelenoidCreateWithoutGreenhouseInput[] | SelenoidUncheckedCreateWithoutGreenhouseInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutGreenhouseInput | SelenoidCreateOrConnectWithoutGreenhouseInput[]
    upsert?: SelenoidUpsertWithWhereUniqueWithoutGreenhouseInput | SelenoidUpsertWithWhereUniqueWithoutGreenhouseInput[]
    createMany?: SelenoidCreateManyGreenhouseInputEnvelope
    set?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    disconnect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    delete?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    update?: SelenoidUpdateWithWhereUniqueWithoutGreenhouseInput | SelenoidUpdateWithWhereUniqueWithoutGreenhouseInput[]
    updateMany?: SelenoidUpdateManyWithWhereWithoutGreenhouseInput | SelenoidUpdateManyWithWhereWithoutGreenhouseInput[]
    deleteMany?: SelenoidScalarWhereInput | SelenoidScalarWhereInput[]
  }

  export type PenjadwalanCreateNestedManyWithoutResepInput = {
    create?: XOR<PenjadwalanCreateWithoutResepInput, PenjadwalanUncheckedCreateWithoutResepInput> | PenjadwalanCreateWithoutResepInput[] | PenjadwalanUncheckedCreateWithoutResepInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutResepInput | PenjadwalanCreateOrConnectWithoutResepInput[]
    createMany?: PenjadwalanCreateManyResepInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type PenjadwalanUncheckedCreateNestedManyWithoutResepInput = {
    create?: XOR<PenjadwalanCreateWithoutResepInput, PenjadwalanUncheckedCreateWithoutResepInput> | PenjadwalanCreateWithoutResepInput[] | PenjadwalanUncheckedCreateWithoutResepInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutResepInput | PenjadwalanCreateOrConnectWithoutResepInput[]
    createMany?: PenjadwalanCreateManyResepInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PenjadwalanUpdateManyWithoutResepNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutResepInput, PenjadwalanUncheckedCreateWithoutResepInput> | PenjadwalanCreateWithoutResepInput[] | PenjadwalanUncheckedCreateWithoutResepInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutResepInput | PenjadwalanCreateOrConnectWithoutResepInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutResepInput | PenjadwalanUpsertWithWhereUniqueWithoutResepInput[]
    createMany?: PenjadwalanCreateManyResepInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutResepInput | PenjadwalanUpdateWithWhereUniqueWithoutResepInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutResepInput | PenjadwalanUpdateManyWithWhereWithoutResepInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type PenjadwalanUncheckedUpdateManyWithoutResepNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutResepInput, PenjadwalanUncheckedCreateWithoutResepInput> | PenjadwalanCreateWithoutResepInput[] | PenjadwalanUncheckedCreateWithoutResepInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutResepInput | PenjadwalanCreateOrConnectWithoutResepInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutResepInput | PenjadwalanUpsertWithWhereUniqueWithoutResepInput[]
    createMany?: PenjadwalanCreateManyResepInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutResepInput | PenjadwalanUpdateWithWhereUniqueWithoutResepInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutResepInput | PenjadwalanUpdateManyWithWhereWithoutResepInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type ResepCreateNestedOneWithoutPenjadwalanInput = {
    create?: XOR<ResepCreateWithoutPenjadwalanInput, ResepUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: ResepCreateOrConnectWithoutPenjadwalanInput
    connect?: ResepWhereUniqueInput
  }

  export type TandonCreateNestedOneWithoutPenjadwalanInput = {
    create?: XOR<TandonCreateWithoutPenjadwalanInput, TandonUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: TandonCreateOrConnectWithoutPenjadwalanInput
    connect?: TandonWhereUniqueInput
  }

  export type ResepUpdateOneRequiredWithoutPenjadwalanNestedInput = {
    create?: XOR<ResepCreateWithoutPenjadwalanInput, ResepUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: ResepCreateOrConnectWithoutPenjadwalanInput
    upsert?: ResepUpsertWithoutPenjadwalanInput
    connect?: ResepWhereUniqueInput
    update?: XOR<XOR<ResepUpdateToOneWithWhereWithoutPenjadwalanInput, ResepUpdateWithoutPenjadwalanInput>, ResepUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type TandonUpdateOneRequiredWithoutPenjadwalanNestedInput = {
    create?: XOR<TandonCreateWithoutPenjadwalanInput, TandonUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: TandonCreateOrConnectWithoutPenjadwalanInput
    upsert?: TandonUpsertWithoutPenjadwalanInput
    connect?: TandonWhereUniqueInput
    update?: XOR<XOR<TandonUpdateToOneWithWhereWithoutPenjadwalanInput, TandonUpdateWithoutPenjadwalanInput>, TandonUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type TandonCreateNestedOneWithoutSensorInput = {
    create?: XOR<TandonCreateWithoutSensorInput, TandonUncheckedCreateWithoutSensorInput>
    connectOrCreate?: TandonCreateOrConnectWithoutSensorInput
    connect?: TandonWhereUniqueInput
  }

  export type TandonBahanCreateNestedOneWithoutSensorInput = {
    create?: XOR<TandonBahanCreateWithoutSensorInput, TandonBahanUncheckedCreateWithoutSensorInput>
    connectOrCreate?: TandonBahanCreateOrConnectWithoutSensorInput
    connect?: TandonBahanWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TandonUpdateOneWithoutSensorNestedInput = {
    create?: XOR<TandonCreateWithoutSensorInput, TandonUncheckedCreateWithoutSensorInput>
    connectOrCreate?: TandonCreateOrConnectWithoutSensorInput
    upsert?: TandonUpsertWithoutSensorInput
    disconnect?: TandonWhereInput | boolean
    delete?: TandonWhereInput | boolean
    connect?: TandonWhereUniqueInput
    update?: XOR<XOR<TandonUpdateToOneWithWhereWithoutSensorInput, TandonUpdateWithoutSensorInput>, TandonUncheckedUpdateWithoutSensorInput>
  }

  export type TandonBahanUpdateOneWithoutSensorNestedInput = {
    create?: XOR<TandonBahanCreateWithoutSensorInput, TandonBahanUncheckedCreateWithoutSensorInput>
    connectOrCreate?: TandonBahanCreateOrConnectWithoutSensorInput
    upsert?: TandonBahanUpsertWithoutSensorInput
    disconnect?: TandonBahanWhereInput | boolean
    delete?: TandonBahanWhereInput | boolean
    connect?: TandonBahanWhereUniqueInput
    update?: XOR<XOR<TandonBahanUpdateToOneWithWhereWithoutSensorInput, TandonBahanUpdateWithoutSensorInput>, TandonBahanUncheckedUpdateWithoutSensorInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TandonCreateNestedOneWithoutSelenoidInput = {
    create?: XOR<TandonCreateWithoutSelenoidInput, TandonUncheckedCreateWithoutSelenoidInput>
    connectOrCreate?: TandonCreateOrConnectWithoutSelenoidInput
    connect?: TandonWhereUniqueInput
  }

  export type GreenhouseCreateNestedOneWithoutSelenoidInput = {
    create?: XOR<GreenhouseCreateWithoutSelenoidInput, GreenhouseUncheckedCreateWithoutSelenoidInput>
    connectOrCreate?: GreenhouseCreateOrConnectWithoutSelenoidInput
    connect?: GreenhouseWhereUniqueInput
  }

  export type TandonUpdateOneRequiredWithoutSelenoidNestedInput = {
    create?: XOR<TandonCreateWithoutSelenoidInput, TandonUncheckedCreateWithoutSelenoidInput>
    connectOrCreate?: TandonCreateOrConnectWithoutSelenoidInput
    upsert?: TandonUpsertWithoutSelenoidInput
    connect?: TandonWhereUniqueInput
    update?: XOR<XOR<TandonUpdateToOneWithWhereWithoutSelenoidInput, TandonUpdateWithoutSelenoidInput>, TandonUncheckedUpdateWithoutSelenoidInput>
  }

  export type GreenhouseUpdateOneRequiredWithoutSelenoidNestedInput = {
    create?: XOR<GreenhouseCreateWithoutSelenoidInput, GreenhouseUncheckedCreateWithoutSelenoidInput>
    connectOrCreate?: GreenhouseCreateOrConnectWithoutSelenoidInput
    upsert?: GreenhouseUpsertWithoutSelenoidInput
    connect?: GreenhouseWhereUniqueInput
    update?: XOR<XOR<GreenhouseUpdateToOneWithWhereWithoutSelenoidInput, GreenhouseUpdateWithoutSelenoidInput>, GreenhouseUncheckedUpdateWithoutSelenoidInput>
  }

  export type SensorCreateNestedManyWithoutTandonBahanInput = {
    create?: XOR<SensorCreateWithoutTandonBahanInput, SensorUncheckedCreateWithoutTandonBahanInput> | SensorCreateWithoutTandonBahanInput[] | SensorUncheckedCreateWithoutTandonBahanInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonBahanInput | SensorCreateOrConnectWithoutTandonBahanInput[]
    createMany?: SensorCreateManyTandonBahanInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type TandonCreateNestedOneWithoutTandonBahanInput = {
    create?: XOR<TandonCreateWithoutTandonBahanInput, TandonUncheckedCreateWithoutTandonBahanInput>
    connectOrCreate?: TandonCreateOrConnectWithoutTandonBahanInput
    connect?: TandonWhereUniqueInput
  }

  export type SensorUncheckedCreateNestedManyWithoutTandonBahanInput = {
    create?: XOR<SensorCreateWithoutTandonBahanInput, SensorUncheckedCreateWithoutTandonBahanInput> | SensorCreateWithoutTandonBahanInput[] | SensorUncheckedCreateWithoutTandonBahanInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonBahanInput | SensorCreateOrConnectWithoutTandonBahanInput[]
    createMany?: SensorCreateManyTandonBahanInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SensorUpdateManyWithoutTandonBahanNestedInput = {
    create?: XOR<SensorCreateWithoutTandonBahanInput, SensorUncheckedCreateWithoutTandonBahanInput> | SensorCreateWithoutTandonBahanInput[] | SensorUncheckedCreateWithoutTandonBahanInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonBahanInput | SensorCreateOrConnectWithoutTandonBahanInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutTandonBahanInput | SensorUpsertWithWhereUniqueWithoutTandonBahanInput[]
    createMany?: SensorCreateManyTandonBahanInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutTandonBahanInput | SensorUpdateWithWhereUniqueWithoutTandonBahanInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutTandonBahanInput | SensorUpdateManyWithWhereWithoutTandonBahanInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type TandonUpdateOneRequiredWithoutTandonBahanNestedInput = {
    create?: XOR<TandonCreateWithoutTandonBahanInput, TandonUncheckedCreateWithoutTandonBahanInput>
    connectOrCreate?: TandonCreateOrConnectWithoutTandonBahanInput
    upsert?: TandonUpsertWithoutTandonBahanInput
    connect?: TandonWhereUniqueInput
    update?: XOR<XOR<TandonUpdateToOneWithWhereWithoutTandonBahanInput, TandonUpdateWithoutTandonBahanInput>, TandonUncheckedUpdateWithoutTandonBahanInput>
  }

  export type SensorUncheckedUpdateManyWithoutTandonBahanNestedInput = {
    create?: XOR<SensorCreateWithoutTandonBahanInput, SensorUncheckedCreateWithoutTandonBahanInput> | SensorCreateWithoutTandonBahanInput[] | SensorUncheckedCreateWithoutTandonBahanInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonBahanInput | SensorCreateOrConnectWithoutTandonBahanInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutTandonBahanInput | SensorUpsertWithWhereUniqueWithoutTandonBahanInput[]
    createMany?: SensorCreateManyTandonBahanInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutTandonBahanInput | SensorUpdateWithWhereUniqueWithoutTandonBahanInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutTandonBahanInput | SensorUpdateManyWithWhereWithoutTandonBahanInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTandonInput = {
    create?: XOR<UserCreateWithoutTandonInput, UserUncheckedCreateWithoutTandonInput>
    connectOrCreate?: UserCreateOrConnectWithoutTandonInput
    connect?: UserWhereUniqueInput
  }

  export type SensorCreateNestedManyWithoutTandonInput = {
    create?: XOR<SensorCreateWithoutTandonInput, SensorUncheckedCreateWithoutTandonInput> | SensorCreateWithoutTandonInput[] | SensorUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonInput | SensorCreateOrConnectWithoutTandonInput[]
    createMany?: SensorCreateManyTandonInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SelenoidCreateNestedManyWithoutTandonInput = {
    create?: XOR<SelenoidCreateWithoutTandonInput, SelenoidUncheckedCreateWithoutTandonInput> | SelenoidCreateWithoutTandonInput[] | SelenoidUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutTandonInput | SelenoidCreateOrConnectWithoutTandonInput[]
    createMany?: SelenoidCreateManyTandonInputEnvelope
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
  }

  export type TandonBahanCreateNestedManyWithoutTandonInput = {
    create?: XOR<TandonBahanCreateWithoutTandonInput, TandonBahanUncheckedCreateWithoutTandonInput> | TandonBahanCreateWithoutTandonInput[] | TandonBahanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: TandonBahanCreateOrConnectWithoutTandonInput | TandonBahanCreateOrConnectWithoutTandonInput[]
    createMany?: TandonBahanCreateManyTandonInputEnvelope
    connect?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
  }

  export type PenjadwalanCreateNestedManyWithoutTandonInput = {
    create?: XOR<PenjadwalanCreateWithoutTandonInput, PenjadwalanUncheckedCreateWithoutTandonInput> | PenjadwalanCreateWithoutTandonInput[] | PenjadwalanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutTandonInput | PenjadwalanCreateOrConnectWithoutTandonInput[]
    createMany?: PenjadwalanCreateManyTandonInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type SensorUncheckedCreateNestedManyWithoutTandonInput = {
    create?: XOR<SensorCreateWithoutTandonInput, SensorUncheckedCreateWithoutTandonInput> | SensorCreateWithoutTandonInput[] | SensorUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonInput | SensorCreateOrConnectWithoutTandonInput[]
    createMany?: SensorCreateManyTandonInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SelenoidUncheckedCreateNestedManyWithoutTandonInput = {
    create?: XOR<SelenoidCreateWithoutTandonInput, SelenoidUncheckedCreateWithoutTandonInput> | SelenoidCreateWithoutTandonInput[] | SelenoidUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutTandonInput | SelenoidCreateOrConnectWithoutTandonInput[]
    createMany?: SelenoidCreateManyTandonInputEnvelope
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
  }

  export type TandonBahanUncheckedCreateNestedManyWithoutTandonInput = {
    create?: XOR<TandonBahanCreateWithoutTandonInput, TandonBahanUncheckedCreateWithoutTandonInput> | TandonBahanCreateWithoutTandonInput[] | TandonBahanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: TandonBahanCreateOrConnectWithoutTandonInput | TandonBahanCreateOrConnectWithoutTandonInput[]
    createMany?: TandonBahanCreateManyTandonInputEnvelope
    connect?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
  }

  export type PenjadwalanUncheckedCreateNestedManyWithoutTandonInput = {
    create?: XOR<PenjadwalanCreateWithoutTandonInput, PenjadwalanUncheckedCreateWithoutTandonInput> | PenjadwalanCreateWithoutTandonInput[] | PenjadwalanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutTandonInput | PenjadwalanCreateOrConnectWithoutTandonInput[]
    createMany?: PenjadwalanCreateManyTandonInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTandonNestedInput = {
    create?: XOR<UserCreateWithoutTandonInput, UserUncheckedCreateWithoutTandonInput>
    connectOrCreate?: UserCreateOrConnectWithoutTandonInput
    upsert?: UserUpsertWithoutTandonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTandonInput, UserUpdateWithoutTandonInput>, UserUncheckedUpdateWithoutTandonInput>
  }

  export type SensorUpdateManyWithoutTandonNestedInput = {
    create?: XOR<SensorCreateWithoutTandonInput, SensorUncheckedCreateWithoutTandonInput> | SensorCreateWithoutTandonInput[] | SensorUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonInput | SensorCreateOrConnectWithoutTandonInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutTandonInput | SensorUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: SensorCreateManyTandonInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutTandonInput | SensorUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutTandonInput | SensorUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SelenoidUpdateManyWithoutTandonNestedInput = {
    create?: XOR<SelenoidCreateWithoutTandonInput, SelenoidUncheckedCreateWithoutTandonInput> | SelenoidCreateWithoutTandonInput[] | SelenoidUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutTandonInput | SelenoidCreateOrConnectWithoutTandonInput[]
    upsert?: SelenoidUpsertWithWhereUniqueWithoutTandonInput | SelenoidUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: SelenoidCreateManyTandonInputEnvelope
    set?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    disconnect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    delete?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    update?: SelenoidUpdateWithWhereUniqueWithoutTandonInput | SelenoidUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: SelenoidUpdateManyWithWhereWithoutTandonInput | SelenoidUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: SelenoidScalarWhereInput | SelenoidScalarWhereInput[]
  }

  export type TandonBahanUpdateManyWithoutTandonNestedInput = {
    create?: XOR<TandonBahanCreateWithoutTandonInput, TandonBahanUncheckedCreateWithoutTandonInput> | TandonBahanCreateWithoutTandonInput[] | TandonBahanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: TandonBahanCreateOrConnectWithoutTandonInput | TandonBahanCreateOrConnectWithoutTandonInput[]
    upsert?: TandonBahanUpsertWithWhereUniqueWithoutTandonInput | TandonBahanUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: TandonBahanCreateManyTandonInputEnvelope
    set?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    disconnect?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    delete?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    connect?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    update?: TandonBahanUpdateWithWhereUniqueWithoutTandonInput | TandonBahanUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: TandonBahanUpdateManyWithWhereWithoutTandonInput | TandonBahanUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: TandonBahanScalarWhereInput | TandonBahanScalarWhereInput[]
  }

  export type PenjadwalanUpdateManyWithoutTandonNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutTandonInput, PenjadwalanUncheckedCreateWithoutTandonInput> | PenjadwalanCreateWithoutTandonInput[] | PenjadwalanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutTandonInput | PenjadwalanCreateOrConnectWithoutTandonInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutTandonInput | PenjadwalanUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: PenjadwalanCreateManyTandonInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutTandonInput | PenjadwalanUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutTandonInput | PenjadwalanUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type SensorUncheckedUpdateManyWithoutTandonNestedInput = {
    create?: XOR<SensorCreateWithoutTandonInput, SensorUncheckedCreateWithoutTandonInput> | SensorCreateWithoutTandonInput[] | SensorUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutTandonInput | SensorCreateOrConnectWithoutTandonInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutTandonInput | SensorUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: SensorCreateManyTandonInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutTandonInput | SensorUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutTandonInput | SensorUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SelenoidUncheckedUpdateManyWithoutTandonNestedInput = {
    create?: XOR<SelenoidCreateWithoutTandonInput, SelenoidUncheckedCreateWithoutTandonInput> | SelenoidCreateWithoutTandonInput[] | SelenoidUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: SelenoidCreateOrConnectWithoutTandonInput | SelenoidCreateOrConnectWithoutTandonInput[]
    upsert?: SelenoidUpsertWithWhereUniqueWithoutTandonInput | SelenoidUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: SelenoidCreateManyTandonInputEnvelope
    set?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    disconnect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    delete?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    connect?: SelenoidWhereUniqueInput | SelenoidWhereUniqueInput[]
    update?: SelenoidUpdateWithWhereUniqueWithoutTandonInput | SelenoidUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: SelenoidUpdateManyWithWhereWithoutTandonInput | SelenoidUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: SelenoidScalarWhereInput | SelenoidScalarWhereInput[]
  }

  export type TandonBahanUncheckedUpdateManyWithoutTandonNestedInput = {
    create?: XOR<TandonBahanCreateWithoutTandonInput, TandonBahanUncheckedCreateWithoutTandonInput> | TandonBahanCreateWithoutTandonInput[] | TandonBahanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: TandonBahanCreateOrConnectWithoutTandonInput | TandonBahanCreateOrConnectWithoutTandonInput[]
    upsert?: TandonBahanUpsertWithWhereUniqueWithoutTandonInput | TandonBahanUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: TandonBahanCreateManyTandonInputEnvelope
    set?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    disconnect?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    delete?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    connect?: TandonBahanWhereUniqueInput | TandonBahanWhereUniqueInput[]
    update?: TandonBahanUpdateWithWhereUniqueWithoutTandonInput | TandonBahanUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: TandonBahanUpdateManyWithWhereWithoutTandonInput | TandonBahanUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: TandonBahanScalarWhereInput | TandonBahanScalarWhereInput[]
  }

  export type PenjadwalanUncheckedUpdateManyWithoutTandonNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutTandonInput, PenjadwalanUncheckedCreateWithoutTandonInput> | PenjadwalanCreateWithoutTandonInput[] | PenjadwalanUncheckedCreateWithoutTandonInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutTandonInput | PenjadwalanCreateOrConnectWithoutTandonInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutTandonInput | PenjadwalanUpsertWithWhereUniqueWithoutTandonInput[]
    createMany?: PenjadwalanCreateManyTandonInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutTandonInput | PenjadwalanUpdateWithWhereUniqueWithoutTandonInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutTandonInput | PenjadwalanUpdateManyWithWhereWithoutTandonInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type GreenhouseCreateWithoutUserInput = {
    nama: string
    selenoid?: SelenoidCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUncheckedCreateWithoutUserInput = {
    id?: number
    nama: string
    selenoid?: SelenoidUncheckedCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseCreateOrConnectWithoutUserInput = {
    where: GreenhouseWhereUniqueInput
    create: XOR<GreenhouseCreateWithoutUserInput, GreenhouseUncheckedCreateWithoutUserInput>
  }

  export type TandonCreateWithoutUserInput = {
    nama: string
    sensor?: SensorCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutTandonInput
  }

  export type TandonUncheckedCreateWithoutUserInput = {
    id?: number
    nama: string
    sensor?: SensorUncheckedCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidUncheckedCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanUncheckedCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutTandonInput
  }

  export type TandonCreateOrConnectWithoutUserInput = {
    where: TandonWhereUniqueInput
    create: XOR<TandonCreateWithoutUserInput, TandonUncheckedCreateWithoutUserInput>
  }

  export type TandonCreateManyUserInputEnvelope = {
    data: TandonCreateManyUserInput | TandonCreateManyUserInput[]
    skipDuplicates?: boolean
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

  export type TandonUpsertWithWhereUniqueWithoutUserInput = {
    where: TandonWhereUniqueInput
    update: XOR<TandonUpdateWithoutUserInput, TandonUncheckedUpdateWithoutUserInput>
    create: XOR<TandonCreateWithoutUserInput, TandonUncheckedCreateWithoutUserInput>
  }

  export type TandonUpdateWithWhereUniqueWithoutUserInput = {
    where: TandonWhereUniqueInput
    data: XOR<TandonUpdateWithoutUserInput, TandonUncheckedUpdateWithoutUserInput>
  }

  export type TandonUpdateManyWithWhereWithoutUserInput = {
    where: TandonScalarWhereInput
    data: XOR<TandonUpdateManyMutationInput, TandonUncheckedUpdateManyWithoutUserInput>
  }

  export type TandonScalarWhereInput = {
    AND?: TandonScalarWhereInput | TandonScalarWhereInput[]
    OR?: TandonScalarWhereInput[]
    NOT?: TandonScalarWhereInput | TandonScalarWhereInput[]
    id?: IntFilter<"Tandon"> | number
    nama?: StringFilter<"Tandon"> | string
    userId?: IntFilter<"Tandon"> | number
  }

  export type UserCreateWithoutGreenhouseInput = {
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
    tandon?: TandonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGreenhouseInput = {
    id?: number
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
    tandon?: TandonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGreenhouseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGreenhouseInput, UserUncheckedCreateWithoutGreenhouseInput>
  }

  export type SelenoidCreateWithoutGreenhouseInput = {
    nama: string
    merek: string
    status: boolean
    tandon: TandonCreateNestedOneWithoutSelenoidInput
  }

  export type SelenoidUncheckedCreateWithoutGreenhouseInput = {
    id?: number
    nama: string
    merek: string
    status: boolean
    tandonId: number
  }

  export type SelenoidCreateOrConnectWithoutGreenhouseInput = {
    where: SelenoidWhereUniqueInput
    create: XOR<SelenoidCreateWithoutGreenhouseInput, SelenoidUncheckedCreateWithoutGreenhouseInput>
  }

  export type SelenoidCreateManyGreenhouseInputEnvelope = {
    data: SelenoidCreateManyGreenhouseInput | SelenoidCreateManyGreenhouseInput[]
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

  export type SelenoidUpsertWithWhereUniqueWithoutGreenhouseInput = {
    where: SelenoidWhereUniqueInput
    update: XOR<SelenoidUpdateWithoutGreenhouseInput, SelenoidUncheckedUpdateWithoutGreenhouseInput>
    create: XOR<SelenoidCreateWithoutGreenhouseInput, SelenoidUncheckedCreateWithoutGreenhouseInput>
  }

  export type SelenoidUpdateWithWhereUniqueWithoutGreenhouseInput = {
    where: SelenoidWhereUniqueInput
    data: XOR<SelenoidUpdateWithoutGreenhouseInput, SelenoidUncheckedUpdateWithoutGreenhouseInput>
  }

  export type SelenoidUpdateManyWithWhereWithoutGreenhouseInput = {
    where: SelenoidScalarWhereInput
    data: XOR<SelenoidUpdateManyMutationInput, SelenoidUncheckedUpdateManyWithoutGreenhouseInput>
  }

  export type SelenoidScalarWhereInput = {
    AND?: SelenoidScalarWhereInput | SelenoidScalarWhereInput[]
    OR?: SelenoidScalarWhereInput[]
    NOT?: SelenoidScalarWhereInput | SelenoidScalarWhereInput[]
    id?: IntFilter<"Selenoid"> | number
    nama?: StringFilter<"Selenoid"> | string
    merek?: StringFilter<"Selenoid"> | string
    status?: BoolFilter<"Selenoid"> | boolean
    tandonId?: IntFilter<"Selenoid"> | number
    greenhouseId?: IntFilter<"Selenoid"> | number
  }

  export type PenjadwalanCreateWithoutResepInput = {
    waktu: string
    tandon: TandonCreateNestedOneWithoutPenjadwalanInput
  }

  export type PenjadwalanUncheckedCreateWithoutResepInput = {
    id?: number
    waktu: string
    tandonId: number
  }

  export type PenjadwalanCreateOrConnectWithoutResepInput = {
    where: PenjadwalanWhereUniqueInput
    create: XOR<PenjadwalanCreateWithoutResepInput, PenjadwalanUncheckedCreateWithoutResepInput>
  }

  export type PenjadwalanCreateManyResepInputEnvelope = {
    data: PenjadwalanCreateManyResepInput | PenjadwalanCreateManyResepInput[]
    skipDuplicates?: boolean
  }

  export type PenjadwalanUpsertWithWhereUniqueWithoutResepInput = {
    where: PenjadwalanWhereUniqueInput
    update: XOR<PenjadwalanUpdateWithoutResepInput, PenjadwalanUncheckedUpdateWithoutResepInput>
    create: XOR<PenjadwalanCreateWithoutResepInput, PenjadwalanUncheckedCreateWithoutResepInput>
  }

  export type PenjadwalanUpdateWithWhereUniqueWithoutResepInput = {
    where: PenjadwalanWhereUniqueInput
    data: XOR<PenjadwalanUpdateWithoutResepInput, PenjadwalanUncheckedUpdateWithoutResepInput>
  }

  export type PenjadwalanUpdateManyWithWhereWithoutResepInput = {
    where: PenjadwalanScalarWhereInput
    data: XOR<PenjadwalanUpdateManyMutationInput, PenjadwalanUncheckedUpdateManyWithoutResepInput>
  }

  export type PenjadwalanScalarWhereInput = {
    AND?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
    OR?: PenjadwalanScalarWhereInput[]
    NOT?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
    id?: IntFilter<"Penjadwalan"> | number
    waktu?: StringFilter<"Penjadwalan"> | string
    resepId?: IntFilter<"Penjadwalan"> | number
    tandonId?: IntFilter<"Penjadwalan"> | number
  }

  export type ResepCreateWithoutPenjadwalanInput = {
    ppm: number
    ph: number
    nama: string
  }

  export type ResepUncheckedCreateWithoutPenjadwalanInput = {
    id?: number
    ppm: number
    ph: number
    nama: string
  }

  export type ResepCreateOrConnectWithoutPenjadwalanInput = {
    where: ResepWhereUniqueInput
    create: XOR<ResepCreateWithoutPenjadwalanInput, ResepUncheckedCreateWithoutPenjadwalanInput>
  }

  export type TandonCreateWithoutPenjadwalanInput = {
    nama: string
    user: UserCreateNestedOneWithoutTandonInput
    sensor?: SensorCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanCreateNestedManyWithoutTandonInput
  }

  export type TandonUncheckedCreateWithoutPenjadwalanInput = {
    id?: number
    nama: string
    userId: number
    sensor?: SensorUncheckedCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidUncheckedCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanUncheckedCreateNestedManyWithoutTandonInput
  }

  export type TandonCreateOrConnectWithoutPenjadwalanInput = {
    where: TandonWhereUniqueInput
    create: XOR<TandonCreateWithoutPenjadwalanInput, TandonUncheckedCreateWithoutPenjadwalanInput>
  }

  export type ResepUpsertWithoutPenjadwalanInput = {
    update: XOR<ResepUpdateWithoutPenjadwalanInput, ResepUncheckedUpdateWithoutPenjadwalanInput>
    create: XOR<ResepCreateWithoutPenjadwalanInput, ResepUncheckedCreateWithoutPenjadwalanInput>
    where?: ResepWhereInput
  }

  export type ResepUpdateToOneWithWhereWithoutPenjadwalanInput = {
    where?: ResepWhereInput
    data: XOR<ResepUpdateWithoutPenjadwalanInput, ResepUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type ResepUpdateWithoutPenjadwalanInput = {
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ResepUncheckedUpdateWithoutPenjadwalanInput = {
    id?: IntFieldUpdateOperationsInput | number
    ppm?: IntFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type TandonUpsertWithoutPenjadwalanInput = {
    update: XOR<TandonUpdateWithoutPenjadwalanInput, TandonUncheckedUpdateWithoutPenjadwalanInput>
    create: XOR<TandonCreateWithoutPenjadwalanInput, TandonUncheckedCreateWithoutPenjadwalanInput>
    where?: TandonWhereInput
  }

  export type TandonUpdateToOneWithWhereWithoutPenjadwalanInput = {
    where?: TandonWhereInput
    data: XOR<TandonUpdateWithoutPenjadwalanInput, TandonUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type TandonUpdateWithoutPenjadwalanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTandonNestedInput
    sensor?: SensorUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUpdateManyWithoutTandonNestedInput
  }

  export type TandonUncheckedUpdateWithoutPenjadwalanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sensor?: SensorUncheckedUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUncheckedUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUncheckedUpdateManyWithoutTandonNestedInput
  }

  export type TandonCreateWithoutSensorInput = {
    nama: string
    user: UserCreateNestedOneWithoutTandonInput
    selenoid?: SelenoidCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutTandonInput
  }

  export type TandonUncheckedCreateWithoutSensorInput = {
    id?: number
    nama: string
    userId: number
    selenoid?: SelenoidUncheckedCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanUncheckedCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutTandonInput
  }

  export type TandonCreateOrConnectWithoutSensorInput = {
    where: TandonWhereUniqueInput
    create: XOR<TandonCreateWithoutSensorInput, TandonUncheckedCreateWithoutSensorInput>
  }

  export type TandonBahanCreateWithoutSensorInput = {
    nama: string
    tandon: TandonCreateNestedOneWithoutTandonBahanInput
  }

  export type TandonBahanUncheckedCreateWithoutSensorInput = {
    id?: number
    nama: string
    tandonId: number
  }

  export type TandonBahanCreateOrConnectWithoutSensorInput = {
    where: TandonBahanWhereUniqueInput
    create: XOR<TandonBahanCreateWithoutSensorInput, TandonBahanUncheckedCreateWithoutSensorInput>
  }

  export type TandonUpsertWithoutSensorInput = {
    update: XOR<TandonUpdateWithoutSensorInput, TandonUncheckedUpdateWithoutSensorInput>
    create: XOR<TandonCreateWithoutSensorInput, TandonUncheckedCreateWithoutSensorInput>
    where?: TandonWhereInput
  }

  export type TandonUpdateToOneWithWhereWithoutSensorInput = {
    where?: TandonWhereInput
    data: XOR<TandonUpdateWithoutSensorInput, TandonUncheckedUpdateWithoutSensorInput>
  }

  export type TandonUpdateWithoutSensorInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTandonNestedInput
    selenoid?: SelenoidUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutTandonNestedInput
  }

  export type TandonUncheckedUpdateWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    selenoid?: SelenoidUncheckedUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUncheckedUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutTandonNestedInput
  }

  export type TandonBahanUpsertWithoutSensorInput = {
    update: XOR<TandonBahanUpdateWithoutSensorInput, TandonBahanUncheckedUpdateWithoutSensorInput>
    create: XOR<TandonBahanCreateWithoutSensorInput, TandonBahanUncheckedCreateWithoutSensorInput>
    where?: TandonBahanWhereInput
  }

  export type TandonBahanUpdateToOneWithWhereWithoutSensorInput = {
    where?: TandonBahanWhereInput
    data: XOR<TandonBahanUpdateWithoutSensorInput, TandonBahanUncheckedUpdateWithoutSensorInput>
  }

  export type TandonBahanUpdateWithoutSensorInput = {
    nama?: StringFieldUpdateOperationsInput | string
    tandon?: TandonUpdateOneRequiredWithoutTandonBahanNestedInput
  }

  export type TandonBahanUncheckedUpdateWithoutSensorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type TandonCreateWithoutSelenoidInput = {
    nama: string
    user: UserCreateNestedOneWithoutTandonInput
    sensor?: SensorCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutTandonInput
  }

  export type TandonUncheckedCreateWithoutSelenoidInput = {
    id?: number
    nama: string
    userId: number
    sensor?: SensorUncheckedCreateNestedManyWithoutTandonInput
    tandonBahan?: TandonBahanUncheckedCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutTandonInput
  }

  export type TandonCreateOrConnectWithoutSelenoidInput = {
    where: TandonWhereUniqueInput
    create: XOR<TandonCreateWithoutSelenoidInput, TandonUncheckedCreateWithoutSelenoidInput>
  }

  export type GreenhouseCreateWithoutSelenoidInput = {
    nama: string
    user?: UserCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseUncheckedCreateWithoutSelenoidInput = {
    id?: number
    nama: string
    user?: UserUncheckedCreateNestedManyWithoutGreenhouseInput
  }

  export type GreenhouseCreateOrConnectWithoutSelenoidInput = {
    where: GreenhouseWhereUniqueInput
    create: XOR<GreenhouseCreateWithoutSelenoidInput, GreenhouseUncheckedCreateWithoutSelenoidInput>
  }

  export type TandonUpsertWithoutSelenoidInput = {
    update: XOR<TandonUpdateWithoutSelenoidInput, TandonUncheckedUpdateWithoutSelenoidInput>
    create: XOR<TandonCreateWithoutSelenoidInput, TandonUncheckedCreateWithoutSelenoidInput>
    where?: TandonWhereInput
  }

  export type TandonUpdateToOneWithWhereWithoutSelenoidInput = {
    where?: TandonWhereInput
    data: XOR<TandonUpdateWithoutSelenoidInput, TandonUncheckedUpdateWithoutSelenoidInput>
  }

  export type TandonUpdateWithoutSelenoidInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTandonNestedInput
    sensor?: SensorUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutTandonNestedInput
  }

  export type TandonUncheckedUpdateWithoutSelenoidInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sensor?: SensorUncheckedUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUncheckedUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutTandonNestedInput
  }

  export type GreenhouseUpsertWithoutSelenoidInput = {
    update: XOR<GreenhouseUpdateWithoutSelenoidInput, GreenhouseUncheckedUpdateWithoutSelenoidInput>
    create: XOR<GreenhouseCreateWithoutSelenoidInput, GreenhouseUncheckedCreateWithoutSelenoidInput>
    where?: GreenhouseWhereInput
  }

  export type GreenhouseUpdateToOneWithWhereWithoutSelenoidInput = {
    where?: GreenhouseWhereInput
    data: XOR<GreenhouseUpdateWithoutSelenoidInput, GreenhouseUncheckedUpdateWithoutSelenoidInput>
  }

  export type GreenhouseUpdateWithoutSelenoidInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateWithoutSelenoidInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutGreenhouseNestedInput
  }

  export type SensorCreateWithoutTandonBahanInput = {
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandon?: TandonCreateNestedOneWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutTandonBahanInput = {
    id?: number
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonId?: number | null
  }

  export type SensorCreateOrConnectWithoutTandonBahanInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutTandonBahanInput, SensorUncheckedCreateWithoutTandonBahanInput>
  }

  export type SensorCreateManyTandonBahanInputEnvelope = {
    data: SensorCreateManyTandonBahanInput | SensorCreateManyTandonBahanInput[]
    skipDuplicates?: boolean
  }

  export type TandonCreateWithoutTandonBahanInput = {
    nama: string
    user: UserCreateNestedOneWithoutTandonInput
    sensor?: SensorCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutTandonInput
  }

  export type TandonUncheckedCreateWithoutTandonBahanInput = {
    id?: number
    nama: string
    userId: number
    sensor?: SensorUncheckedCreateNestedManyWithoutTandonInput
    selenoid?: SelenoidUncheckedCreateNestedManyWithoutTandonInput
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutTandonInput
  }

  export type TandonCreateOrConnectWithoutTandonBahanInput = {
    where: TandonWhereUniqueInput
    create: XOR<TandonCreateWithoutTandonBahanInput, TandonUncheckedCreateWithoutTandonBahanInput>
  }

  export type SensorUpsertWithWhereUniqueWithoutTandonBahanInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutTandonBahanInput, SensorUncheckedUpdateWithoutTandonBahanInput>
    create: XOR<SensorCreateWithoutTandonBahanInput, SensorUncheckedCreateWithoutTandonBahanInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutTandonBahanInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutTandonBahanInput, SensorUncheckedUpdateWithoutTandonBahanInput>
  }

  export type SensorUpdateManyWithWhereWithoutTandonBahanInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutTandonBahanInput>
  }

  export type SensorScalarWhereInput = {
    AND?: SensorScalarWhereInput | SensorScalarWhereInput[]
    OR?: SensorScalarWhereInput[]
    NOT?: SensorScalarWhereInput | SensorScalarWhereInput[]
    id?: IntFilter<"Sensor"> | number
    nama?: StringFilter<"Sensor"> | string
    persamaan?: StringFilter<"Sensor"> | string
    merek?: StringFilter<"Sensor"> | string
    satuan?: StringFilter<"Sensor"> | string
    status?: BoolFilter<"Sensor"> | boolean
    nilai?: IntFilter<"Sensor"> | number
    tandonId?: IntNullableFilter<"Sensor"> | number | null
    tandonBahanId?: IntNullableFilter<"Sensor"> | number | null
  }

  export type TandonUpsertWithoutTandonBahanInput = {
    update: XOR<TandonUpdateWithoutTandonBahanInput, TandonUncheckedUpdateWithoutTandonBahanInput>
    create: XOR<TandonCreateWithoutTandonBahanInput, TandonUncheckedCreateWithoutTandonBahanInput>
    where?: TandonWhereInput
  }

  export type TandonUpdateToOneWithWhereWithoutTandonBahanInput = {
    where?: TandonWhereInput
    data: XOR<TandonUpdateWithoutTandonBahanInput, TandonUncheckedUpdateWithoutTandonBahanInput>
  }

  export type TandonUpdateWithoutTandonBahanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTandonNestedInput
    sensor?: SensorUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutTandonNestedInput
  }

  export type TandonUncheckedUpdateWithoutTandonBahanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    sensor?: SensorUncheckedUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUncheckedUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutTandonNestedInput
  }

  export type UserCreateWithoutTandonInput = {
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
    greenhouse?: GreenhouseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTandonInput = {
    id?: number
    username: string
    email: string
    password: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string | null
    greenhouse?: GreenhouseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTandonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTandonInput, UserUncheckedCreateWithoutTandonInput>
  }

  export type SensorCreateWithoutTandonInput = {
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonBahan?: TandonBahanCreateNestedOneWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutTandonInput = {
    id?: number
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonBahanId?: number | null
  }

  export type SensorCreateOrConnectWithoutTandonInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutTandonInput, SensorUncheckedCreateWithoutTandonInput>
  }

  export type SensorCreateManyTandonInputEnvelope = {
    data: SensorCreateManyTandonInput | SensorCreateManyTandonInput[]
    skipDuplicates?: boolean
  }

  export type SelenoidCreateWithoutTandonInput = {
    nama: string
    merek: string
    status: boolean
    greenhouse: GreenhouseCreateNestedOneWithoutSelenoidInput
  }

  export type SelenoidUncheckedCreateWithoutTandonInput = {
    id?: number
    nama: string
    merek: string
    status: boolean
    greenhouseId: number
  }

  export type SelenoidCreateOrConnectWithoutTandonInput = {
    where: SelenoidWhereUniqueInput
    create: XOR<SelenoidCreateWithoutTandonInput, SelenoidUncheckedCreateWithoutTandonInput>
  }

  export type SelenoidCreateManyTandonInputEnvelope = {
    data: SelenoidCreateManyTandonInput | SelenoidCreateManyTandonInput[]
    skipDuplicates?: boolean
  }

  export type TandonBahanCreateWithoutTandonInput = {
    nama: string
    sensor?: SensorCreateNestedManyWithoutTandonBahanInput
  }

  export type TandonBahanUncheckedCreateWithoutTandonInput = {
    id?: number
    nama: string
    sensor?: SensorUncheckedCreateNestedManyWithoutTandonBahanInput
  }

  export type TandonBahanCreateOrConnectWithoutTandonInput = {
    where: TandonBahanWhereUniqueInput
    create: XOR<TandonBahanCreateWithoutTandonInput, TandonBahanUncheckedCreateWithoutTandonInput>
  }

  export type TandonBahanCreateManyTandonInputEnvelope = {
    data: TandonBahanCreateManyTandonInput | TandonBahanCreateManyTandonInput[]
    skipDuplicates?: boolean
  }

  export type PenjadwalanCreateWithoutTandonInput = {
    waktu: string
    resep: ResepCreateNestedOneWithoutPenjadwalanInput
  }

  export type PenjadwalanUncheckedCreateWithoutTandonInput = {
    id?: number
    waktu: string
    resepId: number
  }

  export type PenjadwalanCreateOrConnectWithoutTandonInput = {
    where: PenjadwalanWhereUniqueInput
    create: XOR<PenjadwalanCreateWithoutTandonInput, PenjadwalanUncheckedCreateWithoutTandonInput>
  }

  export type PenjadwalanCreateManyTandonInputEnvelope = {
    data: PenjadwalanCreateManyTandonInput | PenjadwalanCreateManyTandonInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTandonInput = {
    update: XOR<UserUpdateWithoutTandonInput, UserUncheckedUpdateWithoutTandonInput>
    create: XOR<UserCreateWithoutTandonInput, UserUncheckedCreateWithoutTandonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTandonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTandonInput, UserUncheckedUpdateWithoutTandonInput>
  }

  export type UserUpdateWithoutTandonInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouse?: GreenhouseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    greenhouse?: GreenhouseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SensorUpsertWithWhereUniqueWithoutTandonInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutTandonInput, SensorUncheckedUpdateWithoutTandonInput>
    create: XOR<SensorCreateWithoutTandonInput, SensorUncheckedCreateWithoutTandonInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutTandonInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutTandonInput, SensorUncheckedUpdateWithoutTandonInput>
  }

  export type SensorUpdateManyWithWhereWithoutTandonInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutTandonInput>
  }

  export type SelenoidUpsertWithWhereUniqueWithoutTandonInput = {
    where: SelenoidWhereUniqueInput
    update: XOR<SelenoidUpdateWithoutTandonInput, SelenoidUncheckedUpdateWithoutTandonInput>
    create: XOR<SelenoidCreateWithoutTandonInput, SelenoidUncheckedCreateWithoutTandonInput>
  }

  export type SelenoidUpdateWithWhereUniqueWithoutTandonInput = {
    where: SelenoidWhereUniqueInput
    data: XOR<SelenoidUpdateWithoutTandonInput, SelenoidUncheckedUpdateWithoutTandonInput>
  }

  export type SelenoidUpdateManyWithWhereWithoutTandonInput = {
    where: SelenoidScalarWhereInput
    data: XOR<SelenoidUpdateManyMutationInput, SelenoidUncheckedUpdateManyWithoutTandonInput>
  }

  export type TandonBahanUpsertWithWhereUniqueWithoutTandonInput = {
    where: TandonBahanWhereUniqueInput
    update: XOR<TandonBahanUpdateWithoutTandonInput, TandonBahanUncheckedUpdateWithoutTandonInput>
    create: XOR<TandonBahanCreateWithoutTandonInput, TandonBahanUncheckedCreateWithoutTandonInput>
  }

  export type TandonBahanUpdateWithWhereUniqueWithoutTandonInput = {
    where: TandonBahanWhereUniqueInput
    data: XOR<TandonBahanUpdateWithoutTandonInput, TandonBahanUncheckedUpdateWithoutTandonInput>
  }

  export type TandonBahanUpdateManyWithWhereWithoutTandonInput = {
    where: TandonBahanScalarWhereInput
    data: XOR<TandonBahanUpdateManyMutationInput, TandonBahanUncheckedUpdateManyWithoutTandonInput>
  }

  export type TandonBahanScalarWhereInput = {
    AND?: TandonBahanScalarWhereInput | TandonBahanScalarWhereInput[]
    OR?: TandonBahanScalarWhereInput[]
    NOT?: TandonBahanScalarWhereInput | TandonBahanScalarWhereInput[]
    id?: IntFilter<"TandonBahan"> | number
    nama?: StringFilter<"TandonBahan"> | string
    tandonId?: IntFilter<"TandonBahan"> | number
  }

  export type PenjadwalanUpsertWithWhereUniqueWithoutTandonInput = {
    where: PenjadwalanWhereUniqueInput
    update: XOR<PenjadwalanUpdateWithoutTandonInput, PenjadwalanUncheckedUpdateWithoutTandonInput>
    create: XOR<PenjadwalanCreateWithoutTandonInput, PenjadwalanUncheckedCreateWithoutTandonInput>
  }

  export type PenjadwalanUpdateWithWhereUniqueWithoutTandonInput = {
    where: PenjadwalanWhereUniqueInput
    data: XOR<PenjadwalanUpdateWithoutTandonInput, PenjadwalanUncheckedUpdateWithoutTandonInput>
  }

  export type PenjadwalanUpdateManyWithWhereWithoutTandonInput = {
    where: PenjadwalanScalarWhereInput
    data: XOR<PenjadwalanUpdateManyMutationInput, PenjadwalanUncheckedUpdateManyWithoutTandonInput>
  }

  export type TandonCreateManyUserInput = {
    id?: number
    nama: string
  }

  export type GreenhouseUpdateWithoutUserInput = {
    nama?: StringFieldUpdateOperationsInput | string
    selenoid?: SelenoidUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    selenoid?: SelenoidUncheckedUpdateManyWithoutGreenhouseNestedInput
  }

  export type GreenhouseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type TandonUpdateWithoutUserInput = {
    nama?: StringFieldUpdateOperationsInput | string
    sensor?: SensorUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutTandonNestedInput
  }

  export type TandonUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    sensor?: SensorUncheckedUpdateManyWithoutTandonNestedInput
    selenoid?: SelenoidUncheckedUpdateManyWithoutTandonNestedInput
    tandonBahan?: TandonBahanUncheckedUpdateManyWithoutTandonNestedInput
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutTandonNestedInput
  }

  export type TandonUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SelenoidCreateManyGreenhouseInput = {
    id?: number
    nama: string
    merek: string
    status: boolean
    tandonId: number
  }

  export type UserUpdateWithoutGreenhouseInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tandon?: TandonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGreenhouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tandon?: TandonUncheckedUpdateManyWithoutUserNestedInput
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

  export type SelenoidUpdateWithoutGreenhouseInput = {
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    tandon?: TandonUpdateOneRequiredWithoutSelenoidNestedInput
  }

  export type SelenoidUncheckedUpdateWithoutGreenhouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type SelenoidUncheckedUpdateManyWithoutGreenhouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanCreateManyResepInput = {
    id?: number
    waktu: string
    tandonId: number
  }

  export type PenjadwalanUpdateWithoutResepInput = {
    waktu?: StringFieldUpdateOperationsInput | string
    tandon?: TandonUpdateOneRequiredWithoutPenjadwalanNestedInput
  }

  export type PenjadwalanUncheckedUpdateWithoutResepInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanUncheckedUpdateManyWithoutResepInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    tandonId?: IntFieldUpdateOperationsInput | number
  }

  export type SensorCreateManyTandonBahanInput = {
    id?: number
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonId?: number | null
  }

  export type SensorUpdateWithoutTandonBahanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandon?: TandonUpdateOneWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutTandonBahanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SensorUncheckedUpdateManyWithoutTandonBahanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SensorCreateManyTandonInput = {
    id?: number
    nama: string
    persamaan: string
    merek: string
    satuan: string
    status: boolean
    nilai: number
    tandonBahanId?: number | null
  }

  export type SelenoidCreateManyTandonInput = {
    id?: number
    nama: string
    merek: string
    status: boolean
    greenhouseId: number
  }

  export type TandonBahanCreateManyTandonInput = {
    id?: number
    nama: string
  }

  export type PenjadwalanCreateManyTandonInput = {
    id?: number
    waktu: string
    resepId: number
  }

  export type SensorUpdateWithoutTandonInput = {
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandonBahan?: TandonBahanUpdateOneWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandonBahanId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SensorUncheckedUpdateManyWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    persamaan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    satuan?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    nilai?: IntFieldUpdateOperationsInput | number
    tandonBahanId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SelenoidUpdateWithoutTandonInput = {
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    greenhouse?: GreenhouseUpdateOneRequiredWithoutSelenoidNestedInput
  }

  export type SelenoidUncheckedUpdateWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    greenhouseId?: IntFieldUpdateOperationsInput | number
  }

  export type SelenoidUncheckedUpdateManyWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    greenhouseId?: IntFieldUpdateOperationsInput | number
  }

  export type TandonBahanUpdateWithoutTandonInput = {
    nama?: StringFieldUpdateOperationsInput | string
    sensor?: SensorUpdateManyWithoutTandonBahanNestedInput
  }

  export type TandonBahanUncheckedUpdateWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    sensor?: SensorUncheckedUpdateManyWithoutTandonBahanNestedInput
  }

  export type TandonBahanUncheckedUpdateManyWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PenjadwalanUpdateWithoutTandonInput = {
    waktu?: StringFieldUpdateOperationsInput | string
    resep?: ResepUpdateOneRequiredWithoutPenjadwalanNestedInput
  }

  export type PenjadwalanUncheckedUpdateWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    resepId?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanUncheckedUpdateManyWithoutTandonInput = {
    id?: IntFieldUpdateOperationsInput | number
    waktu?: StringFieldUpdateOperationsInput | string
    resepId?: IntFieldUpdateOperationsInput | number
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
     * @deprecated Use ResepCountOutputTypeDefaultArgs instead
     */
    export type ResepCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ResepCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TandonBahanCountOutputTypeDefaultArgs instead
     */
    export type TandonBahanCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TandonBahanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TandonCountOutputTypeDefaultArgs instead
     */
    export type TandonCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TandonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GreenhouseDefaultArgs instead
     */
    export type GreenhouseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GreenhouseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResepDefaultArgs instead
     */
    export type ResepArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ResepDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PenjadwalanDefaultArgs instead
     */
    export type PenjadwalanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PenjadwalanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SensorDefaultArgs instead
     */
    export type SensorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SensorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SelenoidDefaultArgs instead
     */
    export type SelenoidArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SelenoidDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TandonBahanDefaultArgs instead
     */
    export type TandonBahanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TandonBahanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TandonDefaultArgs instead
     */
    export type TandonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TandonDefaultArgs<ExtArgs>

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