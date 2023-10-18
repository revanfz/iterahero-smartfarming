
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GreenhouseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  thumbnail: 'thumbnail',
  location: 'location',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TandonPenyimpananScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  distributable: 'distributable',
  tandonId: 'tandonId'
};

exports.Prisma.ResepScalarFieldEnum = {
  id: 'id',
  ppm: 'ppm',
  ph: 'ph',
  volume: 'volume',
  nama: 'nama',
  interval: 'interval',
  nutrisiA: 'nutrisiA',
  nutrisiB: 'nutrisiB',
  air: 'air',
  tipe: 'tipe',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PenjadwalanScalarFieldEnum = {
  id: 'id',
  waktu: 'waktu',
  isActive: 'isActive',
  hari: 'hari',
  resepId: 'resepId',
  tandonId: 'tandonId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SensorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  persamaan: 'persamaan',
  brand: 'brand',
  unit_measurement: 'unit_measurement',
  status: 'status',
  nilai: 'nilai',
  icon: 'icon',
  tandonId: 'tandonId',
  tandonBahanId: 'tandonBahanId',
  greenhouseId: 'greenhouseId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AktuatorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  merek: 'merek',
  icon: 'icon',
  color: 'color',
  status: 'status',
  portPlc: 'portPlc',
  tandonId: 'tandonId',
  greenhouseId: 'greenhouseId',
  tandonPenyimpananId: 'tandonPenyimpananId',
  tandonBahanId: 'tandonBahanId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TandonBahanScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  tandonId: 'tandonId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TandonScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  userId: 'userId',
  status: 'status',
  isOnline: 'isOnline',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Greenhouse: 'Greenhouse',
  TandonPenyimpanan: 'TandonPenyimpanan',
  Resep: 'Resep',
  Penjadwalan: 'Penjadwalan',
  Sensor: 'Sensor',
  Aktuator: 'Aktuator',
  TandonBahan: 'TandonBahan',
  Tandon: 'Tandon'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
