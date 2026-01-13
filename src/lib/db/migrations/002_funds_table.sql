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