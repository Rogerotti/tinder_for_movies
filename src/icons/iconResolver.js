
import CheckIcon from './check-icon';
import InfoIcon from './info-icon';
import RejectIcon from './reject-icon';
import RefreshIcon from './refresh-icon';

export const getIcon = (name) => {
  const icons = [];
  icons.checkIcon = CheckIcon;
  icons.infoIcon = InfoIcon;
  icons.rejectIcon = RejectIcon;
  icons.refreshIcon = RefreshIcon;
  return icons[name];
};
