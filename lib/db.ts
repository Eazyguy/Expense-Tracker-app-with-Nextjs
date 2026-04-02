import { PrismaClient } from '@/app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

declare global {
    var prisma: PrismaClient | undefined;
}

// 1. Create your database connection pool
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

// 2. Wrap it in the Prisma adapter
const adapter = new PrismaPg(pool)

export const db = globalThis.prisma || new PrismaClient({adapter});

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
}