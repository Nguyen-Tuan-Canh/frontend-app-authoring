import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  detailsTitle: {
    id: 'course-authoring.schedule-section.details.title',
    defaultMessage: 'Thông tin khóa học',
  },
  detailsDescription: {
    id: 'course-authoring.schedule-section.details.description',
    defaultMessage: 'Cung cấp các thông tin hữu ích về khóa học của bạn',
  },
  dropdownLabel: {
    id: 'course-authoring.schedule-section.details.dropdown.label',
    defaultMessage: 'Ngôn ngữ khóa học',
  },
  dropdownHelpText: {
    id: 'course-authoring.schedule-section.details.dropdown.help-text',
    defaultMessage:
      'Xác định ngôn ngữ của khóa học tại đây. Thông tin này giúp người học tìm các khóa học được giảng dạy bằng một ngôn ngữ cụ thể. Nó cũng được dùng để bản địa hóa trường "Người gửi (From:)" trong các email gửi hàng loạt.',
  },
  dropdownEmpty: {
    id: 'course-authoring.schedule-section.details.dropdown.empty',
    defaultMessage: 'Chọn ngôn ngữ',
  },
});

export default messages;
