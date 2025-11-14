import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  warningTitle: {
    id: 'course-authoring.generic.saving-error-alert.title',
    defaultMessage: 'Studio đang gặp sự cố khi lưu công việc của bạn',
    description: 'Tiêu đề cho cảnh báo lỗi khi lưu trong môi trường Studio',
  },
  warningDescription: {
    id: 'course-authoring.generic.saving-error-alert.description',
    defaultMessage: 'Sự cố này có thể do lỗi từ máy chủ của chúng tôi hoặc do kết nối internet của bạn. Hãy thử tải lại trang hoặc kiểm tra lại việc kết nối mạng.',
    description: 'Mô tả các nguyên nhân có thể xảy ra và gợi ý cách xử lý khi lỗi lưu trong Studio',
  },
  warningTitleAriaLabelledBy: {
    id: 'course-authoring.generic.saving-error-alert.title.aria.labelled-by',
    defaultMessage: 'saving-error-alert-title',
    description: 'ID ARIA cho tiêu đề của cảnh báo lỗi lưu',
  },
  warningDescriptionAriaDescribedBy: {
    id: 'course-authoring.generic.saving-error-alert.aria.described-by',
    defaultMessage: 'saving-error-alert-description',
    description: 'ID ARIA cho mô tả của cảnh báo lỗi lưu',
  },
});

export default messages;
