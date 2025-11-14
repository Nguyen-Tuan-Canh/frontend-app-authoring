import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentTypeNameTitle: {
    id: 'course-authoring.grading-settings.assignment.type-name.title',
    defaultMessage: 'Tên loại bài tập',
  },
  assignmentTypeNameDescription: {
    id: 'course-authoring.grading-settings.assignment.type-name.description',
    defaultMessage: 'Nhóm phân loại chung cho loại bài tập này, ví dụ: Bài tập về nhà hoặc Thi giữa kỳ. Tên này sẽ hiển thị với người học.',
  },
  assignmentTypeNameErrorMessage1: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-1',
    defaultMessage: 'Loại bài tập phải có tên.',
  },
  assignmentTypeNameErrorMessage2: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-2',
    defaultMessage: 'Để việc chấm điểm hoạt động, bạn phải đổi tất cả các mục {initialAssignmentName} sang {value}.',
  },
  assignmentTypeNameErrorMessage3: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-3',
    defaultMessage: 'Đã tồn tại một loại bài tập khác dùng tên này.',
  },
  abbreviationTitle: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.title',
    defaultMessage: 'Viết tắt',
  },
  abbreviationDescription: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.description',
    defaultMessage: 'Tên viết tắt cho loại bài tập (ví dụ: HW hoặc Midterm) sẽ xuất hiện bên cạnh các bài tập trên trang Tiến độ của người học.',
  },
  weightOfTotalGradeTitle: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.title',
    defaultMessage: 'Tỷ trọng trong tổng điểm',
  },
  weightOfTotalGradeDescription: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.description',
    defaultMessage: 'Tỷ trọng của tất cả bài tập thuộc loại này tính theo phần trăm tổng điểm, ví dụ: 40. Không nhập ký hiệu phần trăm.',
  },
  weightOfTotalGradeErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.error.message',
    defaultMessage: 'Vui lòng nhập một số nguyên từ 0 đến 100.',
  },
  totalNumberTitle: {
    id: 'course-authoring.grading-settings.assignment.total-number.title',
    defaultMessage: 'Tổng số',
  },
  totalNumberDescription: {
    id: 'course-authoring.grading-settings.assignment.total-number.description',
    defaultMessage: 'Số lượng mục con (subsection) trong khóa học có chứa bài tập thuộc loại này.',
  },
  totalNumberErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.total-number.error.message',
    defaultMessage: 'Vui lòng nhập một số nguyên lớn hơn 0.',
  },
  numberOfDroppableTitle: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.title',
    defaultMessage: 'Số bài được bỏ',
  },
  numberOfDroppableDescription: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.description',
    defaultMessage: 'Số lượng bài tập thuộc loại này sẽ được bỏ. Các bài có điểm thấp nhất sẽ được bỏ trước.',
  },
  numberOfDroppableErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.error.message',
    defaultMessage: 'Vui lòng nhập một số nguyên không âm.',
  },
  numberOfDroppableSecondErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.second.error.message',
    defaultMessage: 'Không thể bỏ nhiều bài {type} hơn số bài đã giao.',
  },
  assignmentAlertWarningTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.title',
    defaultMessage: 'Cảnh báo: Số lượng bài {type} được định nghĩa tại đây không khớp với số bài {type} hiện có trong khóa học:',
  },
  assignmentAlertWarningDescription: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.description',
    defaultMessage: 'Hiện không có bài tập nào thuộc loại này trong khóa học.',
  },
  assignmentAlertWarningUsageTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.usage.title',
    defaultMessage: 'Cảnh báo: Số lượng bài {type} được định nghĩa tại đây không khớp với số bài {type} hiện có trong khóa học:',
  },
  assignmentAlertWarningSuccess: {
    id: 'course-authoring.grading-settings.assignment.alert.success.title',
    defaultMessage: 'Số lượng bài {type} trong khóa học đã khớp với số lượng được định nghĩa tại đây.',
  },
  assignmentDeleteButton: {
    id: 'course-authoring.grading-settings.assignment.delete.button',
    defaultMessage: 'Xóa',
  },
});

export default messages;
