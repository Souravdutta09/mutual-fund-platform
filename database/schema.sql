CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE,
    pan VARCHAR(10) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    date_of_birth DATE,
    gender VARCHAR(10),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(6),
    country VARCHAR(50) DEFAULT 'India',
    is_active BOOLEAN DEFAULT true,
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_pan ON users(pan);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_is_active ON users(is_active);
CREATE INDEX idx_users_created_at ON users(created_at);

CREATE TABLE kyc_status (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    kyc_level VARCHAR(20) NOT NULL CHECK (kyc_level IN ('PENDING', 'VERIFIED', 'REJECTED', 'DOCUMENTS_REQUIRED')),
    aadhaar_verified BOOLEAN DEFAULT false,
    pan_verified BOOLEAN DEFAULT false,
    bank_verified BOOLEAN DEFAULT false,
    video_kyc_completed BOOLEAN DEFAULT false,
    rejection_reason TEXT,
    verified_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_kyc_status_user_id ON kyc_status(user_id);
CREATE INDEX idx_kyc_status_level ON kyc_status(kyc_level);
CREATE INDEX idx_kyc_status_verified_at ON kyc_status(verified_at);

CREATE TABLE mutual_funds (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fund_code VARCHAR(10) UNIQUE NOT NULL,
    fund_name VARCHAR(255) NOT NULL,
    fund_house VARCHAR(100) NOT NULL,
    fund_type VARCHAR(50) NOT NULL,
    fund_category VARCHAR(50),
    risk_level VARCHAR(20) CHECK (risk_level IN ('LOW', 'MODERATE', 'HIGH', 'VERY_HIGH')),
    min_investment_amount DECIMAL(15,2) NOT NULL DEFAULT 500.00,
    min_sip_amount DECIMAL(15,2) NOT NULL DEFAULT 100.00,
    expense_ratio DECIMAL(5,4),
    exit_load DECIMAL(5,4),
    lock_in_period_months INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    launch_date DATE,
    aum DECIMAL(20,2),
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_mutual_funds_fund_code ON mutual_funds(fund_code);
CREATE INDEX idx_mutual_funds_fund_house ON mutual_funds(fund_house);
CREATE INDEX idx_mutual_funds_fund_type ON mutual_funds(fund_type);
CREATE INDEX idx_mutual_funds_fund_category ON mutual_funds(fund_category);
CREATE INDEX idx_mutual_funds_risk_level ON mutual_funds(risk_level);
CREATE INDEX idx_mutual_funds_is_active ON mutual_funds(is_active);
CREATE INDEX idx_mutual_funds_aum ON mutual_funds(aum);

CREATE TABLE nav_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fund_id UUID NOT NULL REFERENCES mutual_funds(id) ON DELETE CASCADE,
    nav_date DATE NOT NULL,
    nav_value DECIMAL(15,4) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_nav_history_fund_date ON nav_history(fund_id, nav_date);
CREATE INDEX idx_nav_history_fund_id ON nav_history(fund_id);
CREATE INDEX idx_nav_history_nav_date ON nav_history(nav_date);
CREATE INDEX idx_nav_history_nav_value ON nav_history(nav_value);

CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    fund_id UUID NOT NULL REFERENCES mutual_funds(id) ON DELETE RESTRICT,
    transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('PURCHASE', 'REDEMPTION', 'SIP')),
    amount DECIMAL(15,2) NOT NULL,
    units DECIMAL(15,4) NOT NULL,
    nav_at_transaction DECIMAL(15,4) NOT NULL,
    transaction_date DATE NOT NULL,
    sip_start_date DATE,
    sip_end_date DATE,
    sip_frequency VARCHAR(20),
    status VARCHAR(20) NOT NULL CHECK (status IN ('PENDING', 'COMPLETED', 'FAILED', 'CANCELLED')),
    payment_reference VARCHAR(100),
    folio_number VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_fund_id ON transactions(fund_id);
CREATE INDEX idx_transactions_type ON transactions(transaction_type);
CREATE INDEX idx_transactions_status ON transactions(status);
CREATE INDEX idx_transactions_date ON transactions(transaction_date);
CREATE INDEX idx_transactions_user_fund ON transactions(user_id, fund_id);
CREATE INDEX idx_transactions_user_date ON transactions(user_id, transaction_date);

CREATE TABLE portfolios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    fund_id UUID NOT NULL REFERENCES mutual_funds(id) ON DELETE RESTRICT,
    folio_number VARCHAR(20),
    total_units DECIMAL(15,4) NOT NULL DEFAULT 0,
    average_cost DECIMAL(15,4) NOT NULL DEFAULT 0,
    current_value DECIMAL(15,2) GENERATED ALWAYS AS (total_units * (
        SELECT COALESCE(nav_value, 0) 
        FROM nav_history 
        WHERE nav_history.fund_id = portfolios.fund_id 
        ORDER BY nav_date DESC 
        LIMIT 1
    )) STORED,
    investment_amount DECIMAL(15,2) NOT NULL DEFAULT 0,
    last_transaction_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, fund_id, folio_number)
);

CREATE INDEX idx_portfolios_user_id ON portfolios(user_id);
CREATE INDEX idx_portfolios_fund_id ON portfolios(fund_id);
CREATE INDEX idx_portfolios_folio_number ON portfolios(folio_number);
CREATE INDEX idx_portfolios_current_value ON portfolios(current_value);
CREATE INDEX idx_portfolios_investment_amount ON portfolios(investment_amount);
CREATE INDEX idx_portfolios_user_fund ON portfolios(user_id, fund_id);