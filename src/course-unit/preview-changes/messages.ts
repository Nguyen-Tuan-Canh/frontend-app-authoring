import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'authoring.course-unit.preview-changes.modal-title',
    defaultMessage: 'Xem trước thay đổi: {blockIcon} {blockTitle}',
    description: 'Preview changes modal title text',
  },
  defaultContainerTitle: {
    id: 'authoring.course-unit.preview-changes.modal-default-unit-title',
    defaultMessage: 'Xem trước thay đổi: {itemIcon} Vùng chứa',
    description: 'Preview changes modal default title text for containers',
  },
  defaultComponentTitle: {
    id: 'authoring.course-unit.preview-changes.modal-default-component-title',
    defaultMessage: 'Xem trước thay đổi: {itemIcon} Thành phần',
    description: 'Preview changes modal default title text for components',
  },
  acceptChangesBtn: {
    id: 'authoring.course-unit.preview-changes.accept-changes-btn',
    defaultMessage: 'Chấp nhận thay đổi',
    description: 'Preview changes modal accept button text.',
  },
  acceptChangesFailure: {
    id: 'authoring.course-unit.preview-changes.accept-changes-failure',
    defaultMessage: 'Không thể cập nhật thành phần',
    description: 'Toast message to display when accepting changes call fails',
  },
  ignoreChangesBtn: {
    id: 'authoring.course-unit.preview-changes.accept-ignore-btn',
    defaultMessage: 'Bỏ qua thay đổi',
    description: 'Preview changes modal ignore button text.',
  },
  ignoreChangesFailure: {
    id: 'authoring.course-unit.preview-changes.ignore-changes-failure',
    defaultMessage: 'Không thể bỏ qua thay đổi',
    description: 'Toast message to display when ignore changes call fails',
  },
  confirmationTitle: {
    id: 'authoring.course-unit.preview-changes.confirmation-dialog-title',
    defaultMessage: 'Bỏ qua các thay đổi này?',
    description: 'Preview changes confirmation dialog title when user clicks on ignore changes.',
  },
  confirmationDescription: {
    id: 'authoring.course-unit.preview-changes.confirmation-dialog-description',
    defaultMessage: 'Bạn có muốn bỏ qua vĩnh viễn phiên bản đã cập nhật này không? Nếu đồng ý, bạn sẽ không thể cập nhật cho đến khi có phiên bản mới hơn được xuất bản trong thư viện.',
    description: 'Preview changes confirmation dialog description text when user clicks on ignore changes.',
  },
  confirmationConfirmBtn: {
    id: 'authoring.course-unit.preview-changes.confirmation-dialog-confirm-btn',
    defaultMessage: 'Bỏ qua',
    description: 'Preview changes confirmation dialog confirm button text when user clicks on ignore changes.',
  },
  localEditsAlert: {
    id: 'course-authoring.review-tab.preview.loal-edits-alert',
    defaultMessage: 'Nội dung thư viện này đã được chỉnh sửa cục bộ.',
    description: 'Alert message stating that the content has local edits',
  },
  updateToPublishedLibraryContentButton: {
    id: 'course-authoring.review-tab.preview.update-to-published.button.text',
    defaultMessage: 'Cập nhật theo nội dung đã xuất bản trong thư viện',
    description: 'Label of the button to update a content to the published library content',
  },
  updateToPublishedLibraryContentTitle: {
    id: 'course-authoring.review-tab.preview.update-to-published.modal.title',
    defaultMessage: 'Cập nhật theo nội dung đã xuất bản trong thư viện?',
    description: 'Title of the modal to update a content to the published library content',
  },
  updateToPublishedLibraryContentBody: {
    id: 'course-authoring.review-tab.preview.update-to-published.modal.body',
    defaultMessage: 'Việc cập nhật khối này sẽ hủy bỏ mọi chỉnh sửa cục bộ. Tất cả chỉnh sửa được thực hiện trong khóa học sẽ bị mất và không thể khôi phục.',
    description: 'Body of the modal to update a content to the published library content',
  },
  updateToPublishedLibraryContentConfirm: {
    id: 'course-authoring.review-tab.preview.update-to-published.modal.confirm',
    defaultMessage: 'Hủy chỉnh sửa cục bộ và cập nhật',
    description: 'Label of the button in the modal to update a content to the published library content',
  },
  keepCourseContentButton: {
    id: 'course-authoring.review-tab.preview.keep-course-content.button.text',
    defaultMessage: 'Giữ nội dung khóa học hiện tại',
    description: 'Label of the button to keep the content of a course component',
  },
  keepCourseContentTitle: {
    id: 'course-authoring.review-tab.preview.keep-course-content.modal.title',
    defaultMessage: 'Giữ nội dung khóa học?',
    description: 'Title of the modal to keep the content of a course component',
  },
  keepCourseContentBody: {
    id: 'course-authoring.review-tab.preview.keep-course-content.modal.body',
    defaultMessage: 'Tùy chọn này sẽ giữ lại nội dung đã chỉnh sửa trong khóa học. Nếu thành phần được xuất bản lại trong thư viện, bạn vẫn có thể chọn cập nhật theo nội dung đã xuất bản trong thư viện sau.',
    description: 'Body of the modal to keep the content of a course component',
  },
});

export default messages;
