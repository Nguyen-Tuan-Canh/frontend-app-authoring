import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  deleteModalTitle: {
    id: 'course-authoring.course-team.member.button.remove',
    defaultMessage: 'Xóa thành viên đội ngũ khóa học',
  },
  deleteModalMessage: {
    id: 'course-authoring.course-team.delete-modal.message',
    defaultMessage: 'Bạn có chắc chắn muốn xóa {email} khỏi đội ngũ khóa học “{courseName}”?',
  },
  deleteModalDeleteButton: {
    id: 'course-authoring.course-team.delete-modal.button.delete',
    defaultMessage: 'Xóa',
  },
  deleteModalCancelButton: {
    id: 'course-authoring.course-team.delete-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  errorModalTitle: {
    id: 'course-authoring.course-team.error-modal.title',
    defaultMessage: 'Lỗi khi thêm người dùng',
  },
  errorModalOkButton: {
    id: 'course-authoring.course-team.error-modal.button.ok',
    defaultMessage: 'OK',
  },
  warningModalTitle: {
    id: 'course-authoring.course-team.warning-modal.title',
    defaultMessage: 'Đã là thành viên đội ngũ khóa học',
  },
  warningModalMessage: {
    id: 'course-authoring.course-team.warning-modal.message',
    defaultMessage: '{email} đã thuộc đội ngũ của khóa học {courseName}. Hãy kiểm tra lại địa chỉ email nếu bạn muốn thêm thành viên mới.',
  },
  warningModalReturnButton: {
    id: 'course-authoring.course-team.warning-modal.button.return',
    defaultMessage: 'Quay lại danh sách đội ngũ',
  },
});

export default messages;
