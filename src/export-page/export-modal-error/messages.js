import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  errorTitle: {
    id: 'course-authoring.export.modal.error.title',
    defaultMessage: 'Đã xảy ra lỗi trong quá trình xuất.',
  },
  errorDescriptionNotUnit: {
    id: 'course-authoring.export.modal.error.description.not.unit',
    defaultMessage: 'Không thể xuất khóa học của bạn sang XML. Không có đủ thông tin để xác định thành phần bị lỗi. Hãy kiểm tra lại khóa học để tìm các thành phần có vấn đề rồi thử lại. Thông báo lỗi chi tiết là: {errorMessage}',
  },
  errorDescriptionUnit: {
    id: 'course-authoring.export.modal.error.description.unit',
    defaultMessage: 'Đã xảy ra lỗi khi xuất sang XML ở ít nhất một thành phần. Bạn nên mở trang chỉnh sửa và khắc phục lỗi trước khi thử xuất lại. Vui lòng kiểm tra rằng tất cả các thành phần trên trang đều hợp lệ và không hiển thị thông báo lỗi. Thông báo lỗi chi tiết là: {errorMessage}',
  },
  errorCancelButtonUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.unit',
    defaultMessage: 'Quay lại bước xuất',
  },
  errorCancelButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.not.unit',
    defaultMessage: 'Hủy',
  },
  errorActionButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.action.not.unit',
    defaultMessage: 'Đưa tôi đến trang chính của khóa học',
  },
  errorActionButtonUnit: {
    id: 'course-authoring.export.modal.error.button.action.unit',
    defaultMessage: 'Sửa thành phần bị lỗi',
  },
});

export default messages;