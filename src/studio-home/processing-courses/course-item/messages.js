import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  itemInProgressFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress',
    defaultMessage:
      'Khóa học mới sẽ được thêm vào danh sách khóa học của bạn trong khoảng 5–10 phút. Quay lại trang này hoặc {refresh} để cập nhật danh sách khóa học. Khóa học mới sẽ cần được cấu hình thủ công.',
  },
  itemInProgressFooterHyperlink: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress.hyperlink',
    defaultMessage: 'tải lại trang',
  },
  itemInProgressActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.in-progress',
    defaultMessage: 'Đang cấu hình như một đợt mở lại',
  },
  itemIsFailedActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.failed',
    defaultMessage: 'Lỗi cấu hình',
  },
  itemFailedFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed',
    defaultMessage:
      'Đã xảy ra lỗi hệ thống trong khi khóa học của bạn đang được xử lý. Vui lòng quay lại khóa học gốc để thử tạo đợt mở lại lần nữa hoặc liên hệ PM của bạn để được hỗ trợ.',
  },
  itemFailedFooterButton: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed.button',
    defaultMessage: 'Đóng',
  },
});

export default messages;
