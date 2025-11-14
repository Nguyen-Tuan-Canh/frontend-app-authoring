import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  offlineWarningTitle: {
    id: 'course-authoring.generic.alert.warning.offline.title',
    defaultMessage: 'Studio đang gặp sự cố khi lưu công việc của bạn',
  },
  offlineWarningDescription: {
    id: 'course-authoring.generic.alert.warning.offline.description',
    defaultMessage: 'Sự cố này có thể do lỗi từ máy chủ của chúng tôi hoặc do kết nối internet của bạn. Hãy thử tải lại trang hoặc kiểm tra lại việc kết nối mạng.',
  },
  offlineWarningTitleAriaLabelledBy: {
    id: 'course-authoring.generic.alert.warning.offline.title.aria.labelled-by',
    defaultMessage: 'alert-internet-error-title',
  },
  offlineWarningDescriptionAriaDescribedBy: {
    id: 'course-authoring.generic.alert.warning.offline.subtitle.aria.described-by',
    defaultMessage: 'alert-internet-error-description',
  },
});

export default messages;
