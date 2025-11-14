import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  feedbackPlaceholder: {
    id: 'authoring.answerwidget.feedback.placeholder',
    defaultMessage: 'Thông điệp phản hồi',
    description: 'Placeholder cho nội dung phản hồi',
  },
  feedbackToggleIconAltText: {
    id: 'authoring.answerwidget.feedback.icon.alt',
    defaultMessage: 'Bật/tắt phản hồi',
    description: 'Văn bản thay thế cho biểu tượng bật/tắt phản hồi',
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
});

export default messages;
