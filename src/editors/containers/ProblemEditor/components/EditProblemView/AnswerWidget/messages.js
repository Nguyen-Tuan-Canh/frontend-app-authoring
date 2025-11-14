import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  answerWidgetTitle: {
    id: 'authoring.answerwidget.answer.answerWidgetTitle',
    defaultMessage: 'Đáp án',
    description: 'Tiêu đề chính cho vùng Đáp án',
  },
  answerHelperText: {
    id: 'authoring.problemEditor.answerWidget.answer.answerHelperText',
    defaultMessage: '{helperText}',
    description: 'Văn bản hướng dẫn mô tả cách người dùng nhập đáp án',
  },
  addAnswerButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerButton',
    defaultMessage: 'Thêm đáp án',
    description: 'Nút để thêm đáp án',
  },
  answerTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.placeholder',
    defaultMessage: 'Nhập một đáp án',
    description: 'Placeholder cho ô nhập đáp án',
  },
  feedbackPlaceholder: {
    id: 'authoring.answerwidget.feedback.placeholder',
    defaultMessage: 'Thông điệp phản hồi',
    description: 'Placeholder cho nội dung phản hồi',
  },
  feedbackToggleIconAriaLabel: {
    id: 'authoring.answerwidget.feedback.icon.aria-label',
    defaultMessage: 'Bật/tắt phản hồi',
    description: 'Nhãn cho trình đọc màn hình của nút/bbiểu tượng "Bật/tắt phản hồi"',
  },
  feedbackToggleIconAltText: {
    id: 'authoring.answerwidget.feedback.icon.alt',
    defaultMessage: 'Bật/tắt phản hồi',
    description: 'Văn bản thay thế cho biểu tượng bật/tắt phản hồi',
  },
  answerDeleteIconAltText: {
    id: 'authoring.answerwidget.answer.delete.icon.alt',
    defaultMessage: 'Xóa đáp án',
    description: 'Văn bản thay thế cho biểu tượng xóa đáp án',
  },
  selectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.selected.label',
    defaultMessage: 'Hiển thị phản hồi sau khi {answerId} {boldunderline}:',
    description: 'Nhãn cho phản hồi khi phương án được chọn',
  },
  selectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.selected.label.boldunderline',
    defaultMessage: 'được chọn',
    description: 'Chữ in đậm và gạch chân khi phương án được chọn',
  },
  unSelectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.unselected.label',
    defaultMessage: 'Hiển thị phản hồi sau khi {answerId} {boldunderline}:',
    description: 'Nhãn cho phản hồi khi phương án không được chọn',
  },
  unSelectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.unselected.label.boldunderline',
    defaultMessage: 'không được chọn',
    description: 'Chữ in đậm và gạch chân khi phương án không được chọn',
  },

  addAnswerRangeButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerRangeButton',
    defaultMessage: 'Thêm khoảng đáp án',
    description: 'Nút để thêm một khoảng đáp án',
  },
  answerRangeTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.answerRangeTextboxPlaceholder',
    defaultMessage: 'Nhập một khoảng đáp án',
    description: 'Văn bản nhắc người dùng thêm một khoảng đáp án vào ô nhập',
  },
  answerRangeHelperText: {
    id: 'authoring.answerwidget.answer.answerRangeHelperText',
    defaultMessage: 'Nhập giá trị nhỏ nhất và lớn nhất, phân tách bằng dấu phẩy. Dùng ngoặc vuông để bao gồm số đứng cạnh trong khoảng hoặc ngoặc tròn để loại trừ số đó. Ví dụ, để xác định các đáp án đúng là 5, 6 hoặc 7 nhưng không bao gồm 8, hãy nhập [5,8).',
    description: 'Văn bản hướng dẫn cách dùng khoảng đáp án',
  },
  answerRangeErrorText: {
    id: 'authoring.answerwidget.answer.answerRangeErrorText',
    defaultMessage: 'Lỗi: Định dạng khoảng không hợp lệ. Hãy dùng ngoặc vuông hoặc ngoặc tròn với các giá trị được phân tách bằng dấu phẩy.',
    description: 'Thông báo lỗi khi người dùng nhập sai định dạng khoảng đáp án',
  },
});

export default messages;
