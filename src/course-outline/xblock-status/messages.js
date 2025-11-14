import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  unscheduledLabel: {
    id: 'course-authoring.course-outline.xblock-status.unscheduled.label',
    defaultMessage: 'Chưa lên lịch',
  },
  releasedLabel: {
    id: 'course-authoring.course-outline.xblock-status.released.label',
    defaultMessage: 'Đã phát hành: ',
  },
  scheduledLabel: {
    id: 'course-authoring.course-outline.xblock-status.scheduled.label',
    defaultMessage: 'Đã lên lịch: ',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.xblock-status.onboardingExam.value',
    defaultMessage: 'Bài kiểm tra làm quen',
  },
  practiceProctoredExam: {
    id: 'course-authoring.course-outline.xblock-status.practiceProctoredExam.value',
    defaultMessage: 'Bài thi thử có giám sát',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.xblock-status.proctoredExam.value',
    defaultMessage: 'Bài thi có giám sát',
  },
  timedExam: {
    id: 'course-authoring.course-outline.xblock-status.timedExam.value',
    defaultMessage: 'Bài thi giới hạn thời gian',
  },
  releaseStatusScreenReaderTitle: {
    id: 'course-authoring.course-outline.xblock-status.releaseStatusScreenReader.title',
    defaultMessage: 'Trạng thái phát hành: ',
  },
  gradedAsScreenReaderLabel: {
    id: 'course-authoring.course-outline.xblock-status.gradedAsScreenReader.label',
    defaultMessage: 'Được chấm điểm như: ',
  },
  ungradedText: {
    id: 'course-authoring.course-outline.xblock-status.ungraded.text',
    defaultMessage: 'Không chấm điểm',
  },
  dueLabel: {
    id: 'course-authoring.course-outline.xblock-status.due.label',
    defaultMessage: 'Hạn:',
  },
  customDueDateLabel: {
    id: 'course-authoring.course-outline.xblock-status.custom-due-date.label',
    defaultMessage: 'Hạn tùy chỉnh: {relativeWeeksDue, plural, one {# tuần} other {# tuần}} kể từ khi ghi danh',
  },
  prerequisiteLabel: {
    id: 'course-authoring.course-outline.xblock-status.prerequisite.label',
    defaultMessage: 'Điều kiện tiên quyết: {prereqDisplayName}',
  },
  restrictedUnitAccess: {
    id: 'course-authoring.course-outline.xblock-status.restrictedUnitAccess.text',
    defaultMessage: 'Quyền truy cập đơn vị học này chỉ dành cho: {selectedGroupsLabel}',
  },
  restrictedUnitAccessToSomeContent: {
    id: 'course-authoring.course-outline.xblock-status.restrictedUnitAccessToSomeContent.text',
    defaultMessage: 'Quyền truy cập một số nội dung trong đơn vị học này bị giới hạn cho một số nhóm học viên',
  },
  gradingPolicyMismatchText: {
    id: 'course-authoring.course-outline.xblock-status.gradingPolicyMismatch.text',
    defaultMessage: 'Phân đoạn này được cấu hình là "{gradingType}", nhưng kiểu này không tồn tại trong chính sách chấm điểm hiện tại.',
  },
  hiddenAfterEndDate: {
    id: 'course-authoring.course-outline.xblock-status.hiddenAfterEndDate.text',
    defaultMessage: 'Phân đoạn bị ẩn sau ngày kết thúc khóa học',
  },
  hiddenAfterDueDate: {
    id: 'course-authoring.course-outline.xblock-status.hiddenAfterDueDate.text',
    defaultMessage: 'Phân đoạn bị ẩn sau hạn nộp',
  },
});

export default messages;
