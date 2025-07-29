import * as React from 'react';

import { useCancelSearch, UseCancelSearchParams } from './useCancelSearch.controller';

import { SecondaryButton } from '@/ui/components/SecondaryButton';

interface Props extends UseCancelSearchParams {}

export const CancelSearch: React.FC<Props> = ({
  onCancelled
}) => {
  const { onCancel } = useCancelSearch({ onCancelled });

  return (
    <SecondaryButton onPress={onCancel}>
      Cancel
    </SecondaryButton>
  );
};
