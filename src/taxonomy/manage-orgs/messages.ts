import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.header.title',
    defaultMessage: 'Gán cho các tổ chức',
  },
  bodyText: {
    id: 'course-authoring.taxonomy-manage-orgs.body.text',
    defaultMessage:
      'Quản lý các tổ chức có thể truy cập taxonomy bằng cách gán họ trong menu bên dưới. Bạn cũng có thể chọn gán taxonomy cho tất cả các tổ chức.',
  },
  assignOrgs: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-orgs',
    defaultMessage: 'Gán tổ chức',
  },
  currentAssignments: {
    id: 'course-authoring.taxonomy-manage-orgs.current-assignments',
    defaultMessage: 'Đang được gán cho:',
  },
  addOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.add-orgs',
    defaultMessage: 'Thêm tổ chức khác:',
  },
  searchOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.search-orgs',
    defaultMessage: 'Tìm kiếm tổ chức',
  },
  noOrganizationAssigned: {
    id: 'course-authoring.taxonomy-manage-orgs.no-orgs',
    defaultMessage: 'Chưa gán tổ chức nào',
  },
  assignAll: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-all',
    defaultMessage: 'Gán cho tất cả các tổ chức',
  },
  cancelButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.cancel',
    defaultMessage: 'Hủy',
  },
  saveButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.save',
    defaultMessage: 'Lưu',
  },
  confirmUnassignTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.title',
    defaultMessage: 'Hủy gán taxonomy',
  },
  confirmUnassignText: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.text',
    defaultMessage:
      'Các tác giả nội dung thuộc những tổ chức bị hủy gán sẽ không thể gắn thẻ nội dung khóa học với {taxonomyName}. Bạn có chắc chắn muốn tiếp tục không?',
  },
  continueButton: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.button.continue',
    defaultMessage: 'Tiếp tục',
  },
  assignOrgsSuccess: {
    id: 'course-authoring.taxonomy-manage-orgs.toast.assign-orgs-success',
    defaultMessage: 'Đã cập nhật các tổ chức được gán',
  },
  removeOrg: {
    id: 'course-authoring.taxonomy-manage-orgs.remove-org',
    defaultMessage: 'Bỏ gán {org}',
    description: 'button to remove a specific organization from a taxonomy',
  },
});

export default messages;
