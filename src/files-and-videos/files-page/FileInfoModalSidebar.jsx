import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage, FormattedDate, useIntl } from '@edx/frontend-platform/i18n';
import {
  Stack,
  ActionRow,
  Icon,
  IconButtonWithTooltip,
  CheckboxControl,
} from '@openedx/paragon';
import { InfoOutline } from '@openedx/paragon/icons';

import { getFileSizeToClosestByte } from '../../utils';
import messages from './messages';
import './FileInfoModalSidebar.scss';

const FileInfoModalSidebar = ({
  asset,
  handleLockedAsset,
}) => {
  const intl = useIntl();
  const [lockedState, setLockedState] = useState(asset?.locked);

  const handleLock = (e) => {
    const locked = e.target.checked;
    setLockedState(locked);
    handleLockedAsset(asset?.id, locked);
  };

  const fileSize = getFileSizeToClosestByte(asset?.fileSize);

  return (
    <Stack>
      <div className="font-weight-bold">
        <FormattedMessage {...messages.dateAddedTitle} />
      </div>
      <FormattedDate
        value={asset?.dateAdded}
        year="numeric"
        month="short"
        day="2-digit"
        hour="numeric"
        minute="numeric"
      />

      <div className="font-weight-bold mt-3">
        <FormattedMessage {...messages.fileSizeTitle} />
      </div>
      {fileSize}

      {/* URL Studio */}
      <div className="font-weight-bold border-top mt-3 pt-3">
        <FormattedMessage {...messages.studioUrlTitle} />
      </div>
      <ActionRow>
        <a
          className="files-page-url-truncate files-page-url-link"
          style={{ wordBreak: 'break-word' }}
          href={asset?.portableUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {asset?.portableUrl}
        </a>
      </ActionRow>

      {/* URL web */}
      <div className="font-weight-bold mt-3">
        <FormattedMessage {...messages.webUrlTitle} />
      </div>
      <ActionRow>
        <a
          className="files-page-url-truncate files-page-url-link"
          style={{ wordBreak: 'break-word' }}
          href={asset?.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {asset?.externalUrl}
        </a>
      </ActionRow>

      {/* Khóa tệp */}
      <ActionRow className="border-top mt-3 pt-3">
        <div className="font-weight-bold">
          <FormattedMessage {...messages.lockFileTitle} />
        </div>
        <IconButtonWithTooltip
          key="lock-file-info"
          tooltipPlacement="top"
          tooltipContent={intl.formatMessage(messages.lockFileTooltipContent)}
          src={InfoOutline}
          iconAs={Icon}
          alt="Info"
          size="inline"
        />
        <ActionRow.Spacer />
        <CheckboxControl
          checked={lockedState}
          onChange={handleLock}
          aria-label="Checkbox"
        />
      </ActionRow>
    </Stack>
  );
};

FileInfoModalSidebar.propTypes = {
  asset: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    wrapperType: PropTypes.string.isRequired,
    locked: PropTypes.bool.isRequired,
    externalUrl: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    id: PropTypes.string.isRequired,
    portableUrl: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    fileSize: PropTypes.number.isRequired,
    usageLocations: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleLockedAsset: PropTypes.func.isRequired,
};

export default FileInfoModalSidebar;
