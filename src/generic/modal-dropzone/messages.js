import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  uploadImageDropzoneText: {
    id: 'course-authoring.certificates.modal-dropzone.text',
    defaultMessage: 'Kéo và thả ảnh của bạn vào đây hoặc nhấp để tải lên',
    description: 'Mô tả cho khối kéo và thả',
  },
  uploadImageDropzoneAlt: {
    id: 'course-authoring.certificates.modal-dropzone.dropzone-alt',
    defaultMessage: 'Ảnh đã tải lên cho chứng chỉ khóa học',
    description: 'Mô tả cho ảnh đã tải lên',
  },
  uploadImageValidationText: {
    id: 'course-authoring.certificates.modal-dropzone.validation.text',
    defaultMessage: 'Chỉ có thể tải lên tệp {types}. Vui lòng chọn tệp có phần mở rộng {extensions} để tải lên.',
    description: 'Thông báo lỗi khi chọn sai loại tệp',
  },
  cancelModal: {
    id: 'course-authoring.certificates.modal-dropzone.cancel.modal',
    defaultMessage: 'Hủy',
    description: 'Văn bản cho nút Hủy trong modal',
  },
  uploadModal: {
    id: 'course-authoring.certificates.modal-dropzone.upload.modal',
    defaultMessage: 'Tải lên',
    description: 'Văn bản cho nút Tải lên trong modal',
  },
  uploadImageDropzoneInvalidSizeMore: {
    id: 'course-authoring.certificates.modal-dropzone.validation.invalid-size-more',
    defaultMessage: 'Kích thước ảnh phải nhỏ hơn {maxSize}MB.',
    description: 'Thông báo lỗi khi ảnh tải lên vượt quá giới hạn kích thước',
  },
});

export default messages;
