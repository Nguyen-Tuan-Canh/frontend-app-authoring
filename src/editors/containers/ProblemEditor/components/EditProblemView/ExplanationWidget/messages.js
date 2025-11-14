import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  solutionWidgetTitle: {
    id: 'authoring.problemEditor.explanationwidget.explanationWidgetTitle',
    defaultMessage: 'Giải thích',
    description: 'Tiêu đề phần giải thích',
  },
  solutionDescriptionText: {
    id: 'authoring.problemEditor.explanationwidget.solutionDescriptionText',
    defaultMessage: 'Cung cấp phần giải thích cho đáp án đúng',
    description: 'Mô tả cho widget giải thích',
  },
  placeholder: {
    id: 'authoring.problemEditor.explanationwidget.placeholder',
    defaultMessage: 'Nhập phần giải thích của bạn',
    description: 'Placeholder cho trình soạn thảo tinyMCE',
  },
});

export default messages;
