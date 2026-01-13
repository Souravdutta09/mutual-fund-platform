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