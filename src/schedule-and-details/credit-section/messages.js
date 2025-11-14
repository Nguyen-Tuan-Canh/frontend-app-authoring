import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  creditTitle: {
    id: 'course-authoring.schedule.credit.title',
    defaultMessage: 'Điều kiện nhận tín chỉ khóa học',
  },
  creditDescription: {
    id: 'course-authoring.schedule.credit.description',
    defaultMessage: 'Các bước cần để đạt được tín chỉ của khóa học',
  },
  creditHelp: {
    id: 'course-authoring.schedule.credit.help',
    defaultMessage:
      'Một điều kiện sẽ xuất hiện trong danh sách này khi bạn xuất bản đơn vị học (unit) chứa điều kiện đó.',
  },
  creditMinimumGrade: {
    id: 'course-authoring.schedule.credit.minimum-grade',
    defaultMessage: 'Điểm tối thiểu',
  },
  creditProctoredExam: {
    id: 'course-authoring.schedule.credit.proctored-exam',
    defaultMessage: 'Hoàn thành bài thi có giám sát',
  },
  creditVerification: {
    id: 'course-authoring.schedule.credit.verification',
    defaultMessage: 'Xác minh danh tính',
  },
  creditNotFound: {
    id: 'course-authoring.schedule.credit.not-found',
    defaultMessage: 'Không tìm thấy điều kiện tín chỉ nào.',
  },
});

export default messages;
