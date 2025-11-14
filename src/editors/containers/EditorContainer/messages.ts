import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  cancelConfirmTitle: {
    id: 'authoring.editorContainer.cancelConfirm.title',
    defaultMessage: 'Thoát khỏi trình chỉnh sửa?',
    description: 'Tiêu đề hộp thoại xác nhận khi thoát trình chỉnh sửa',
  },
  cancelConfirmDescription: {
    id: 'authoring.editorContainer.cancelConfirm.description',
    defaultMessage: 'Bạn có chắc chắn muốn thoát khỏi trình chỉnh sửa không? Mọi thay đổi chưa được lưu sẽ bị mất.',
    description: 'Mô tả trong hộp thoại xác nhận khi thoát trình chỉnh sửa',
  },
  exitButtonAlt: {
    id: 'authoring.editorContainer.exitButton.alt',
    defaultMessage: 'Thoát khỏi trình chỉnh sửa',
    description: 'Văn bản thay thế cho nút Thoát',
  },
  keepEditingButtonLabel: {
    id: 'authoring.editorContainer.keepEditing.label',
    defaultMessage: 'Tiếp tục chỉnh sửa',
    description: 'Nhãn nút tiếp tục chỉnh sửa trong hộp thoại xác nhận',
  },
  discardChangesButtonlabel: {
    id: 'authoring.editorContainer.discardChanges.label',
    defaultMessage: 'Hủy thay đổi và thoát',
    description: 'Nhãn nút hủy thay đổi và thoát trong hộp thoại xác nhận',
  },
  modalTitle: {
    id: 'authoring.editorContainer.accessibleTitle',
    defaultMessage: 'Hộp thoại trình chỉnh sửa',
    description: 'Văn bản nhãn cho hộp thoại trình chỉnh sửa dành cho người dùng không nhìn',
  },
  contentSaveFailed: {
    id: 'authoring.editorfooter.save.error',
    defaultMessage: 'Lỗi: Không thể lưu nội dung. Vui lòng kiểm tra các thay đổi gần đây và thử lại sau.',
    description: 'Thông báo lỗi hiển thị khi không lưu được nội dung',
  },
  cancelButtonAriaLabel: {
    id: 'authoring.editorfooter.cancelButton.ariaLabel',
    defaultMessage: 'Hủy các thay đổi và quay lại màn hình học tập',
    description: 'Nhãn trình đọc màn hình cho nút Hủy',
  },
  cancelButtonLabel: {
    id: 'authoring.editorfooter.cancelButton.label',
    defaultMessage: 'Hủy',
    description: 'Nhãn cho nút Hủy',
  },
  saveButtonAriaLabel: {
    id: 'authoring.editorfooter.savebutton.ariaLabel',
    defaultMessage: 'Lưu các thay đổi và quay lại màn hình học tập',
    description: 'Nhãn trình đọc màn hình cho nút Lưu',
  },
  saveButtonLabel: {
    id: 'authoring.editorfooter.savebutton.label',
    defaultMessage: 'Lưu',
    description: 'Nhãn cho nút Lưu',
  },
});

export default messages;
