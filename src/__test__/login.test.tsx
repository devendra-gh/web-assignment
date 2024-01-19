import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import mockAxios from 'jest-mock-axios';
import Login from '../views/login';

const messages = {
  "sign_in": "Login",
  "email": "Email",
  "password": "Password",
  "dashboard": "Dashboard",
  "orders": "Orders",
  "customers": "Customers",
  "reports": "Reports",
  "integrations": "integrations",
  "current_month": "Current month",
  "last_quarter": "Last quarter",
  "year_end_sale": "Year-end sale",
  "saved_reports": "Saved reports",
  "recent_orders": "Recent Orders",
  "date": "Date",
  "name": "Name",
  "ship_to": "Ship To",
  "payment_method": "Payment Method",
  "sale_amount": "Sale Amount",
  "see_more_orders": "See more orders",
  "recent_deposits": "Recent Deposits",
  "view_balance": "View balance",
  "today": "Today",
  "no_ac_sign_up": "Don't have an account? Sign Up",
  "sign_up": "Sign Up",
  "first_name": "First Name",
  "last_name": "Last Name",
  "user_info": "User Information"
}

export const renderWithReactIntl = (component: any) => {
  return render(<IntlProvider locale={"en"} messages={messages}>
    {component}
  </IntlProvider>
  );
};

describe('Login', () => {
  afterEach(() => {
    mockAxios.reset();
  });


  it('should match snapshot', async () => {
    const { asFragment } = renderWithReactIntl(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });
})