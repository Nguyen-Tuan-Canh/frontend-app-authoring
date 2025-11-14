import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  lastPublishedTitle: {
    id: 'course-authoring.library-authoring.generic.history-widget.last-published',
    defaultMessage: 'Lần xuất bản gần nhất',
    description: 'Title of the last published section in the library authoring sidebar.',
  },
  lastModifiedTitle: {
    id: 'course-authoring.library-authoring.generic.history-widget.last-modified',
    defaultMessage: 'Lần chỉnh sửa gần nhất',
    description: 'Title of the last modified section in the library authoring sidebar.',
  },
  createdTitle: {
    id: 'course-authoring.library-authoring.generic.history-widget.created',
    defaultMessage: 'Ngày tạo',
    description: 'Title of the created section in the library authoring sidebar.',
  },
});

export default messages;
