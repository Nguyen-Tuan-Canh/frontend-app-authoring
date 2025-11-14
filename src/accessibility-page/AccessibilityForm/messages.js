import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  accessibilityPolicyFormEmailLabel: {
    id: 'accessibilityPolicyFormEmailLabel',
    defaultMessage: 'Địa chỉ email',
    description: 'Nhãn cho trường nhập email',
  },
  accessibilityPolicyFormErrorHighVolume: {
    id: 'accessibilityPolicyFormErrorHighVolume',
    defaultMessage: 'Hiện tại hệ thống đang xử lý quá nhiều yêu cầu. Vui lòng thử lại sau trong ngày hoặc gửi email đến {emailLink}.',
    description: 'Thông báo lỗi khi hệ thống đang quá tải, kèm đường dẫn email',
  },
  accessibilityPolicyFormErrorMissingFields: {
    id: 'accessibilityPolicyFormErrorMissingFields',
    defaultMessage: 'Vui lòng điền đầy đủ tất cả các trường.',
    description: 'Thông báo lỗi hướng dẫn người dùng điền tất cả các trường',
  },
  accessibilityPolicyFormHeader: {
    id: 'accessibilityPolicyFormHeader',
    defaultMessage: 'Góp ý về khả năng truy cập của Studio',
    description: 'Tiêu đề của biểu mẫu',
  },
  accessibilityPolicyFormMessageLabel: {
    id: 'accessibilityPolicyFormMessageLabel',
    defaultMessage: 'Nội dung',
    description: 'Nhãn cho trường nhập nội dung góp ý/tin nhắn',
  },
  accessibilityPolicyFormNameLabel: {
    id: 'accessibilityPolicyFormNameLabel',
    defaultMessage: 'Họ và tên',
    description: 'Nhãn cho trường nhập họ tên',
  },
  accessibilityPolicyFormSubmitAria: {
    id: 'accessibilityPolicyFormSubmitAria',
    defaultMessage: 'Gửi biểu mẫu góp ý về khả năng truy cập',
    description: 'aria-label chi tiết cho nút gửi biểu mẫu',
  },
  accessibilityPolicyFormSubmitLabel: {
    id: 'accessibilityPolicyFormSubmitLabel',
    defaultMessage: 'Gửi',
    description: 'Nhãn chung cho nút gửi',
  },
  accessibilityPolicyFormSubmittingFeedbackLabel: {
    id: 'accessibilityPolicyFormSubmittingFeedbackLabel',
    defaultMessage: 'Đang gửi…',
    description: 'Thông báo hiển thị trong lúc biểu mẫu đang được gửi',
  },
  accessibilityPolicyFormSuccess: {
    id: 'accessibilityPolicyFormSuccess',
    defaultMessage: 'Cảm ơn bạn đã liên hệ với edX!',
    description: 'Lời cảm ơn đơn giản khi gửi biểu mẫu thành công',
  },
  accessibilityPolicyFormSuccessDetails: {
    id: 'accessibilityPolicyFormSuccessDetails',
    defaultMessage: 'Cảm ơn bạn đã góp ý về khả năng truy cập của Studio. Thông thường chúng tôi sẽ phản hồi trong vòng một ngày làm việc (từ {day_start} đến {day_end}, {time_start} đến {time_end}).',
    description: 'Lời cảm ơn chi tiết khi gửi biểu mẫu thành công',
  },
  accessibilityPolicyFormValidEmail: {
    id: 'accessibilityPolicyFormValidEmail',
    defaultMessage: 'Vui lòng nhập một địa chỉ email hợp lệ.',
    description: 'Thông báo lỗi khi email không hợp lệ',
  },
  accessibilityPolicyFormValidMessage: {
    id: 'accessibilityPolicyFormValidMessage',
    defaultMessage: 'Vui lòng nhập nội dung.',
    description: 'Thông báo lỗi khi nội dung không hợp lệ hoặc để trống',
  },
  accessibilityPolicyFormValidName: {
    id: 'accessibilityPolicyFormValidName',
    defaultMessage: 'Vui lòng nhập họ tên.',
    description: 'Thông báo lỗi khi tên không hợp lệ hoặc để trống',
  },
});

export default messages;
