# SEBI-Compliant Mutual Fund Platform - Folder Structure

```
mutual-fund-platform/
├── README.md
├── package.json
├── package-lock.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── .env.local
├── .env.example
├── .gitignoreYou previously generated a folder structure in Markdown.

Convert it into:
- Exact directories
- Empty placeholder files only

Rules:
- Do NOT generate business logic
- Do NOT generate configs
- Use README.md only where explanation is required
- Use index.ts / route.ts as empty placeholders
- Keep structure production-ready

Output as a directory tree.

├── .eslintrc.json
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── funds/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── portfolio/
│   │   │   │   └── page.tsx
│   │   │   ├── transactions/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── api/                      # API Routes
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   ├── logout/route.ts
│   │   │   │   ├── register/route.ts
│   │   │   │   └── refresh/route.ts
│   │   │   ├── users/
│   │   │   │   ├── profile/route.ts
│   │   │   │   └── kyc/route.ts
│   │   │   ├── funds/
│   │   │   │   ├── route.ts
│   │   │   │   ├── [id]/route.ts
│   │   │   │   └── nav/route.ts
│   │   │   ├── transactions/
│   │   │   │   ├── route.ts
│   │   │   │   ├── purchase/route.ts
│   │   │   │   ├── redemption/route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   └── health/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── error.tsx
│   │
│   ├── components/                   # UI Components
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── table.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── navigation.tsx
│   │   ├── auth/
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   └── protected-route.tsx
│   │   ├── funds/
│   │   │   ├── fund-card.tsx
│   │   │   ├── fund-list.tsx
│   │   │   ├── fund-details.tsx
│   │   │   └── nav-chart.tsx
│   │   ├── transactions/
│   │   │   ├── transaction-list.tsx
│   │   │   ├── transaction-form.tsx
│   │   │   └── transaction-summary.tsx
│   │   └── common/
│   │       ├── loading.tsx
│   │       ├── error-boundary.tsx
│   │       └── sebi-disclaimer.tsx
│   │
│   ├── lib/                          # Core libraries and utilities
│   │   ├── auth/                     # Authentication logic
│   │   │   ├── config.ts
│   │   │   ├── middleware.ts
│   │   │   ├── session.ts
│   │   │   └── validators.ts
│   │   ├── db/                       # Database connection
│   │   │   ├── connection.ts
│   │   │   ├── migrations/
│   │   │   │   ├── 001_initial_schema.sql
│   │   │   │   ├── 002_funds_table.sql
│   │   │   │   ├── 003_transactions_table.sql
│   │   │   │   └── 004_kyc_table.sql
│   │   │   └── seeds/
│   │   │       └── sample_data.sql
│   │   ├── validations/              # Input validation schemas
│   │   │   ├── auth.ts
│   │   │   ├── user.ts
│   │   │   ├── fund.ts
│   │   │   └── transaction.ts
│   │   ├── utils/                    # Utility functions
│   │   │   ├── logger.ts
│   │   │   ├── encryption.ts
│   │   │   ├── date-formatter.ts
│   │   │   ├── currency-formatter.ts
│   │   │   └── error-handler.ts
│   │   ├── constants/                # Application constants
│   │   │   ├── api-endpoints.ts
│   │   │   ├── error-codes.ts
│   │   │   ├── fund-types.ts
│   │   │   └── sebi-compliance.ts
│   │   └── middleware/               # Express/Next.js middleware
│   │       ├── auth-middleware.ts
│   │       ├── rate-limiting.ts
│   │       ├── cors-middleware.ts
│   │       └── security-headers.ts
│   │
│   ├── services/                     # Business logic layer
│   │   ├── auth/
│   │   │   ├── auth-service.ts
│   │   │   ├── user-service.ts
│   │   │   └── kyc-service.ts
│   │   ├── funds/
│   │   │   ├── fund-service.ts
│   │   │   ├── nav-service.ts
│   │   │   └── fund-analysis-service.ts
│   │   ├── transactions/
│   │   │   ├── transaction-service.ts
│   │   │   ├── purchase-service.ts
│   │   │   └── redemption-service.ts
│   │   ├── notifications/
│   │   │   ├── email-service.ts
│   │   │   └── sms-service.ts
│   │   ├── compliance/
│   │   │   ├── sebi-service.ts
│   │   │   ├── audit-service.ts
│   │   │   └── risk-service.ts
│   │   └── reports/
│   │       ├── portfolio-service.ts
│   │       ├── tax-service.ts
│   │       └── statement-service.ts
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── fund.ts
│   │   ├── transaction.ts
│   │   ├── api.ts
│   │   └── common.ts
│   │
│   └── hooks/                        # Custom React hooks
│       ├── use-auth.ts
│       ├── use-funds.ts
│       ├── use-transactions.ts
│       ├── use-portfolio.ts
│       └── use-kyc.ts
│
├── database/                         # Database related files
│   ├── schema.sql
│   ├── migrations/
│   │   └── *.sql
│   └── backups/
│
├── docs/                            # Documentation
│   ├── api/
│   │   ├── auth.md
│   │   ├── funds.md
│   │   └── transactions.md
│   ├── deployment/
│   │   ├── docker.md
│   │   └── production.md
│   ├── sebi-compliance/
│   │   ├── guidelines.md
│   │   └── audit-requirements.md
│   └── architecture/
│       ├── system-design.md
│       └── security.md
│
├── scripts/                         # Utility scripts
│   ├── deploy.sh
│   ├── backup-db.sh
│   ├── seed-data.js
│   └── migrate.js
│
├── tests/                           # Test files
│   ├── unit/
│   │   ├── services/
│   │   ├── lib/
│   │   └── utils/
│   ├── integration/
│   │   ├── api/
│   │   └── database/
│   ├── e2e/
│   │   ├── auth.spec.ts
│   │   ├── funds.spec.ts
│   │   └── transactions.spec.ts
│   └── fixtures/
│       ├── users.json
│       ├── funds.json
│       └── transactions.json
│
└── infrastructure/                  # DevOps/Infrastructure
    ├── terraform/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── kubernetes/
    │   ├── deployment.yaml
    │   ├── service.yaml
    │   └── ingress.yaml
    └── monitoring/
        ├── prometheus.yml
        └── grafana-dashboard.json
```

## Key Architecture Principles

1. **Layer Separation**: Clear boundaries between UI, API, services, and data layers
2. **Security First**: Dedicated auth middleware, validation, and compliance services
3. **SEBI Compliance**: Separate compliance module for regulatory requirements
4. **Scalability**: Modular structure for easy scaling and maintenance
5. **Type Safety**: Comprehensive TypeScript definitions throughout
6. **Testing Ready**: Separate test structure with unit, integration, and e2e tests
