import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  gracePeriodOnDeadlineLabel: {
    id: 'course-authoring.grading-settings.deadline.label',
    defaultMessage: 'Thời gian gia hạn sau hạn chót:',
  },
  gracePeriodOnDeadlineDescription: {
    id: 'course-authoring.grading-settings.deadline.description',
    defaultMessage: 'Khoảng nới lỏng cho hạn nộp bài',
  },
  gracePeriodOnDeadlineErrorMsg: {
    id: 'course-authoring.grading-settings.deadline.error.message',
    defaultMessage: 'Thời gian gia hạn phải được nhập theo định dạng {timeFormat}.',
  },
});

export default messages;
