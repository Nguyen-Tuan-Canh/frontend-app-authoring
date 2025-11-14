import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.group-configurations.empty-placeholder.title',
    defaultMessage: 'Bạn chưa tạo nhóm nội dung nào.',
    description: 'Tiêu đề hiển thị khi chưa có nhóm nội dung nào được tạo.',
  },
  experimentalTitle: {
    id: 'course-authoring.group-configurations.experimental-empty-placeholder.title',
    defaultMessage: 'Bạn chưa tạo cấu hình nhóm nào.',
    description: 'Tiêu đề hiển thị khi chưa có cấu hình nhóm thử nghiệm nào được tạo.',
  },
  button: {
    id: 'course-authoring.group-configurations.empty-placeholder.button',
    defaultMessage: 'Thêm nhóm nội dung đầu tiên của bạn',
    description: 'Nhãn cho nút thêm nhóm nội dung đầu tiên khi chưa có nhóm nào.',
  },
  experimentalButton: {
    id: 'course-authoring.group-configurations.experimental-empty-placeholder.button',
    defaultMessage: 'Thêm cấu hình nhóm đầu tiên của bạn',
    description: 'Nhãn cho nút thêm cấu hình nhóm thử nghiệm đầu tiên khi chưa có.',
  },
});

export default messages;
