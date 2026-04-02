# Expense Tracker (Next.js)

A simple authenticated personal finance app built with Next.js 14 App Router, TypeScript, Clerk, and Prisma (PostgreSQL). Track income, expenses, balance, and manage transactions in a user-specific store.

## ✅ Features

- User auth (Clerk): sign up, sign in, sign out
- Add a transaction with title + amount
- Income and expense totals
- Current balance
- Transaction list with delete action
- Server actions + edge revalidation via `revalidatePath('/')`
- Prisma PostgreSQL data persistence (user & transactions)

## 📁 App Structure

- `app/page.tsx` - main dashboard with guard for authenticated users
- `components/Balance.tsx`, `IncomeExpense.tsx`, `TransactionList.tsx`, `TransactionItem.tsx`, `AddTransaction.tsx`, `Guest.tsx`
- `app/actions/` - server actions:
  - `getUserBalance.ts`
  - `getIncomeExpense.ts`
  - `getTransactions.ts`
  - `addTransaction.ts`
  - `deleteTransaction.ts`
- `lib/db.ts` - Prisma client setup with PostgreSQL adapter
- `prisma/schema.prisma` - `User` and `Transaction` models

## 🔧 Prerequisites

- Node.js 20+ (recommended)
- PostgreSQL database
- Clerk project (frontend + backend keys)
- `DATABASE_URL` and Clerk env vars set

## 🧩 Environment Variables

Create `.env` with:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
NEXT_PUBLIC_CLERK_FRONTEND_API="<your-clerk-frontend-api>"
CLERK_API_KEY="<your-clerk-api-key>"
CLERK_JWT_KEY="<your-clerk-jwt-key>"
CLERK_SECRET_KEY="<your-clerk-secret-key>"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```

(Names may vary depending on Clerk SDK version; adjust to your existing project config.)

## 🛠️ Setup & Run

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Open `http://localhost:3000`, authenticate and use the app.

## 📦 Database Schema

`prisma/schema.prisma` contains:

- `User` (id, clerkUserId, email, name, imageurl, transactions)
- `Transaction` (id, text, amount, userId, createdAt)

## 🧪 App Behavior

- `Balance` shows net sum of all transactions.
- `IncomeExpense` shows positive and negative totals (expense as absolute value).
- `AddTransaction` posts to `addTransaction` action and revalidates `/`.
- `TransactionList` loads descending by `createdAt` and supports deletion.

## 🖼️ Screenshot

![Expense Tracker UI](./Screenshot.png)

## 🚀 Deploy

- Vercel: connect repo and add required env vars
- Ensure `DATABASE_URL` is set in project settings
- Clerk settings include production URL and OAuth redirect paths

## 💡 Notes

- User is required (`currentUser()` check), otherwise `Guest` component shown.
- Transactions are scoped to the authenticated user (`where: { userId }`).
- Delete uses `db.transaction.delete({ where: { id: transactionId, userId } })` for security.

---

Built by the developer team using Next.js, Prisma, and Clerk.
