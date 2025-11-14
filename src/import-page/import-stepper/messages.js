import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  stepperUploadingTitle: {
    id: 'course-authoring.import.stepper.title.uploading',
    defaultMessage: 'Đang tải lên',
  },
  stepperUnpackingTitle: {
    id: 'course-authoring.import.stepper.title.unpacking',
    defaultMessage: 'Đang giải nén',
  },
  stepperVerifyingTitle: {
    id: 'course-authoring.import.stepper.title.verifying',
    defaultMessage: 'Đang kiểm tra',
  },
  stepperUpdatingTitle: {
    id: 'course-authoring.import.stepper.title.updating',
    defaultMessage: 'Đang cập nhật khóa học',
  },
  stepperSuccessTitle: {
    id: 'course-authoring.import.stepper.title.success',
    defaultMessage: 'Hoàn tất',
  },
  stepperUploadingDescription: {
    id: 'course-authoring.import.stepper.description.uploading',
    defaultMessage: 'Đang chuyển tệp của bạn lên máy chủ',
  },
  stepperUnpackingDescription: {
    id: 'course-authoring.import.stepper.description.unpacking',
    defaultMessage:
      'Đang giải nén và chuẩn bị cấu trúc thư mục/tệp (Bây giờ bạn có thể rời khỏi trang này an toàn, nhưng tránh thay đổi lớn đối với nội dung cho đến khi việc nhập hoàn tất).',
  },
  stepperVerifyingDescription: {
    id: 'course-authoring.import.stepper.description.verifying',
    defaultMessage: 'Đang kiểm tra ngữ nghĩa, cú pháp và dữ liệu bắt buộc',
  },
  stepperUpdatingDescription: {
    id: 'course-authoring.import.stepper.description.updating',
    defaultMessage:
      'Đang tích hợp nội dung đã nhập vào khóa học này. Quá trình này có thể lâu hơn đối với các khóa học có dung lượng lớn.',
  },
  stepperSuccessDescription: {
    id: 'course-authoring.import.stepper.description.success',
    defaultMessage: 'Nội dung đã nhập của bạn đã được tích hợp vào khóa học này',
  },
  viewOutlineButton: {
    id: 'course-authoring.import.stepper.button.outline',
    defaultMessage: 'Xem dàn ý đã cập nhật',
  },
  defaultErrorMessage: {
    id: 'course-authoring.import.stepper.error.default',
    defaultMessage: 'Lỗi khi nhập khóa học',
  },
  stepperHeaderTitle: {
    id: 'course-authoring.import.stepper.header.title',
    defaultMessage: 'Trạng thái nhập khóa học',
  },
});

export default messages;
