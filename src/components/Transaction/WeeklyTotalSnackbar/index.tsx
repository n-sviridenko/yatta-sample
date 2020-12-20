import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Snackbar } from 'react-native-paper';
import { Transaction } from '../../../common/types';
import messages from './messages';
import sumTransactions from './sumTransactions';

interface WeeklyTotalSnackbarProps {
  transactions: Transaction[];
};

const WeeklyTotalSnackbar: React.FC<WeeklyTotalSnackbarProps> = ({ transactions: allTransactions }) => {
  const intl = useIntl();
  const [showTotal, setShowTotal] = useState(true);
  const weeklyTotalFmt = intl.formatNumber(
    sumTransactions(allTransactions) as any,
    { style: 'currency', currency: allTransactions[0].currency },
  );

  return (
    <Snackbar
      visible={showTotal}
      onDismiss={() => setShowTotal(false)}
      action={{
        label: intl.formatMessage(messages.closeButton),
        onPress: () => setShowTotal(false),
      }}
    >
      <FormattedMessage {...messages.weeklyTotal} values={{ amount: weeklyTotalFmt }} />
    </Snackbar>
  )
};

export default WeeklyTotalSnackbar;
