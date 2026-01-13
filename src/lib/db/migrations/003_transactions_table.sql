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