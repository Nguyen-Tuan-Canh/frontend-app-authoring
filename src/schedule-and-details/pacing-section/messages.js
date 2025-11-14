import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pacingTitle: {
    id: 'course-authoring.schedule.pacing.title',
    defaultMessage: 'Tiến độ khóa học',
  },
  pacingDescription: {
    id: 'course-authoring.schedule.pacing.description',
    defaultMessage: 'Thiết lập tiến độ cho khóa học này',
  },
  pacingRestriction: {
    id: 'course-authoring.schedule.pacing.restriction',
    defaultMessage: 'Không thể thay đổi tiến độ khóa học sau khi khóa học đã bắt đầu',
  },
  pacingTypeInstructorLabel: {
    id: 'course-authoring.schedule.pacing.radio.instructor.label',
    defaultMessage: 'Theo tiến độ giảng viên',
  },
  pacingTypeInstructorDescription: {
    id: 'course-authoring.schedule.pacing.radio.instructor.description',
    defaultMessage:
      'Các khóa học theo tiến độ giảng viên sẽ được triển khai theo nhịp độ do tác giả/giảng viên khóa học thiết lập. Bạn có thể cấu hình ngày mở nội dung và hạn nộp cho các bài tập.',
  },
  pacingTypeSelfLabel: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.label',
    defaultMessage: 'Tự học theo nhịp độ cá nhân',
  },
  pacingTypeSelfDescription: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.description',
    defaultMessage:
      'Các khóa học tự học theo nhịp độ cá nhân đưa ra gợi ý hạn nộp cho bài tập hoặc bài thi dựa trên ngày ghi danh và thời lượng khóa học dự kiến. Người học có thể linh hoạt điều chỉnh hạn nộp bài nếu cần.',
  },
});

export default messages;
