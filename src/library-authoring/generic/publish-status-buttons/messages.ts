import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  publishedChipText: {
    id: 'course-authoring.library-authoring.publish-status-buttons.publish-chip.text',
    defaultMessage: 'Đã xuất bản',
    description: 'Text shown when a unit/section/subsection/component is published.',
  },
  publishContainerButton: {
    id: 'course-authoring.library-authoring.publish-status-buttons.publish-draft-button.text',
    defaultMessage: 'Xuất bản các thay đổi {publishStatus}',
    description: 'Button text to initiate publish the unit/subsection/section/component, showing current publish status',
  },
  draftChipText: {
    id: 'course-authoring.library-authoring.publish-status.publish-draft-button.draft-chip.text',
    defaultMessage: 'Bản nháp',
    description: 'Chip in publish draft button',
  },
});

export default messages;
