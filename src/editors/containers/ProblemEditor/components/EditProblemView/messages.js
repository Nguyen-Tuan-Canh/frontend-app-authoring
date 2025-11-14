import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  saveWarningModalCancelButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.cancelButton.label',
    defaultMessage: 'Hủy',
    description: 'Nhãn cho nút Hủy trong hộp thoại cảnh báo khi lưu',
  },
  saveWarningModalSaveButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.saveButton.label',
    defaultMessage: 'Đồng ý',
    description: 'Nhãn cho nút lưu/xác nhận trong hộp thoại cảnh báo khi lưu',
  },
  saveWarningModalBodyQuestion: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.body.question',
    defaultMessage: 'Bạn có chắc chắn muốn thoát khỏi trình chỉnh sửa không?',
    description: 'Câu hỏi trong nội dung hộp thoại cảnh báo khi lưu',
  },
  noAnswerTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.title',
    defaultMessage: 'Chưa thiết lập đáp án',
    description: 'Tiêu đề cho hộp thoại khi chưa có đáp án',
  },
  noAnswerBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.body.explanation',
    defaultMessage: 'Chưa có đáp án đúng nào được thiết lập.',
    description: 'Giải thích trong nội dung hộp thoại khi chưa có đáp án',
  },
  olxSettingDiscrepancyTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.title',
    defaultMessage: 'Không khớp cài đặt OLX',
    description: 'Tiêu đề cho hộp thoại khi cài đặt không khớp',
  },
  olxSettingDiscrepancyBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.body.explanation',
    defaultMessage: `Phát hiện có sự không khớp giữa các cài đặt được định nghĩa trong thẻ problem của OLX
      và các cài đặt được chọn ở thanh bên. Các cài đặt trong thẻ problem của OLX sẽ được lưu
      và các giá trị tương ứng ở thanh bên sẽ bị bỏ qua.`,
    description: 'Giải thích trong nội dung hộp thoại khi cài đặt không khớp',
  },
});

export default messages;
