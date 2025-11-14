import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  certificateBehaviorLabel: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.label',
    defaultMessage: 'Cách hiển thị chứng chỉ',
  },
  certificateBehaviorHelpText: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.help-text',
    defaultMessage: 'Chứng chỉ được cấp vào cuối mỗi đợt mở khóa học.',
  },
  certificateAvailableDateLabel: {
    id: 'course-authoring.schedule.schedule-section.certificate-available-date.label',
    defaultMessage: 'Ngày chứng chỉ khả dụng',
  },
  certificateDisplayBehaviorToggleTitle: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.title',
    defaultMessage: 'Tìm hiểu thêm về thiết lập này',
  },
  certificateDisplayBehaviorToggleParagraph: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.paragraph',
    defaultMessage:
      'Trong mọi cấu hình của thiết lập này, chứng chỉ sẽ được tạo cho người học ngay khi họ đạt ngưỡng điểm đạt của khóa học (có thể xảy ra trước khi làm bài kiểm tra cuối cùng tùy theo cách thiết kế khóa học).',
  },
  certificateDisplayBehaviorToggleHeading1: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.heading-1',
    defaultMessage: 'Ngay khi đạt yêu cầu',
  },
  certificateDisplayBehaviorToggleParagraph1: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.paragraph-1',
    defaultMessage:
      'Người học có thể truy cập chứng chỉ ngay khi đạt điểm qua môn cao hơn ngưỡng điểm yêu cầu của khóa học. Lưu ý: trong một số cấu hình khóa học, người học có thể đạt điểm qua môn trước khi hoàn thành tất cả bài đánh giá.',
  },
  certificateDisplayBehaviorToggleHeading2: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.heading-2',
    defaultMessage: 'Vào ngày kết thúc khóa học',
  },
  certificateDisplayBehaviorToggleParagraph2: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.paragraph-2',
    defaultMessage:
      'Người học đạt yêu cầu sẽ có thể truy cập chứng chỉ sau khi ngày kết thúc khóa học đã trôi qua.',
  },
  certificateDisplayBehaviorToggleHeading3: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.heading-3',
    defaultMessage: 'Một ngày sau ngày kết thúc khóa học',
  },
  certificateDisplayBehaviorToggleParagraph3: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.toggle.paragraph-3',
    defaultMessage:
      'Người học đạt yêu cầu sẽ có thể truy cập chứng chỉ sau khi ngày bạn thiết lập đã trôi qua.',
  },
  certificateBehaviorDropdownOption1: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.dropdown.option-1',
    defaultMessage: 'Ngay khi đạt yêu cầu',
  },
  certificateBehaviorDropdownOption2: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.dropdown.option-2',
    defaultMessage: 'Vào ngày kết thúc khóa học',
  },
  certificateBehaviorDropdownOption3: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.dropdown.option-3',
    defaultMessage: 'Một ngày sau ngày kết thúc khóa học',
  },
  certificateBehaviorDropdownEmpty: {
    id: 'course-authoring.schedule.schedule-section.certificate-behavior.dropdown.empty',
    defaultMessage: 'Chọn cách hiển thị chứng chỉ',
  },
});

export default messages;
