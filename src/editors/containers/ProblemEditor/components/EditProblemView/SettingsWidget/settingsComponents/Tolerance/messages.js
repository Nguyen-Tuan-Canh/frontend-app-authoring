import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  toleranceSettingTitle: {
    id: 'problemEditor.settings.tolerance.title',
    defaultMessage: 'Sai số cho phép',
    description: 'Tiêu đề cho menu thiết lập sai số',
  },
  noneToleranceSummary: {
    id: 'problemEditor.settings.tolerance.summary.none',
    defaultMessage: 'Không có',
    description: 'Thông báo khi bài tập chưa thiết lập sai số',
  },
  toleranceSettingText: {
    id: 'problemEditor.settings.tolerance.description.text',
    defaultMessage: 'Biên độ sai số được chấp nhận ở hai phía của đáp án đúng.',
    description: 'Mô tả chức năng thiết lập sai số cho một bài tập',
  },
  toleranceValueInputLabel: {
    id: 'problemEditor.settings.tolerance.valueinput',
    defaultMessage: 'Sai số cho phép',
    description: 'Nhãn nổi cho ô nhập giá trị sai số',
  },
  toleranceAnswerRangeWarning: {
    id: 'problemEditor.settings.tolerance.answerrangewarning',
    defaultMessage: 'Không thể áp dụng sai số cho một khoảng đáp án.',
    description: 'Cảnh báo rằng sai số không áp dụng được cho khoảng đáp án',
  },
  toleranceMultipleAnswersWarning: {
    id: 'problemEditor.settings.tolerance.toleranceMultipleAnswersWarning',
    defaultMessage: 'Không thể áp dụng sai số cho nhiều đáp án đúng.',
    description: 'Cảnh báo rằng sai số không áp dụng được khi có nhiều đáp án đúng',
  },
  typesPercentage: {
    id: 'problemEditor.settings.tolerance.type.percent',
    defaultMessage: 'Phần trăm',
    description: 'Một kiểu giá trị có thể dùng cho sai số',
  },
  typesNumber: {
    id: 'problemEditor.settings.tolerance.type.number',
    defaultMessage: 'Giá trị số',
    description: 'Một kiểu giá trị có thể dùng cho sai số',
  },
  typesNone: {
    id: 'problemEditor.settings.tolerance.type.none',
    defaultMessage: 'Không có',
    description: 'Một kiểu giá trị có thể dùng cho sai số',
  },
});

export default messages;
