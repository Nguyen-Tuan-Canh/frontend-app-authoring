import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  deleteDialogTitle: {
    id: 'course-authoring.taxonomy-list.dialog.delete.title',
    defaultMessage: 'Xóa "{taxonomyName}"',
  },
  deleteDialogBody: {
    id: 'course-authoring.taxonomy-list.dialog.delete.body',
    defaultMessage:
      'Cảnh báo! Bạn sắp xóa một taxonomy chứa {tagsCount} thẻ. Các tổ chức được gán sẽ không còn quyền truy cập taxonomy này và mọi thẻ đã áp dụng cho nội dung khóa học sẽ bị xóa.',
  },
  deleteDialogConfirmLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.confirm.label',
    defaultMessage: 'Nhập {deleteLabel} để xác nhận',
  },
  deleteDialogConfirmDeleteLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.confirmDelete.label',
    defaultMessage: 'DELETE',
  },
  deleteDialogCancelLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.cancel.label',
    defaultMessage: 'Hủy',
  },
  deleteDialogDeleteLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.delete.label',
    defaultMessage: 'Xóa',
  },
});

export default messages;
