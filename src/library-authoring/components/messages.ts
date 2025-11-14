import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  componentCardMenuAlt: {
    id: 'course-authoring.library-authoring.component.menu',
    defaultMessage: 'Menu thao tác thành phần',
    description: 'Alt/title cho nút menu thao tác của thẻ thành phần.',
  },
  collectionCardMenuAlt: {
    id: 'course-authoring.library-authoring.collection.menu',
    defaultMessage: 'Menu thao tác bộ sưu tập',
    description: 'Alt/title cho nút menu thao tác của thẻ bộ sưu tập.',
  },
  menuOpen: {
    id: 'course-authoring.library-authoring.menu.open',
    defaultMessage: 'Mở',
    description: 'Mục menu để mở một bộ sưu tập/container.',
  },
  menuEdit: {
    id: 'course-authoring.library-authoring.component.menu.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'Mục menu để chỉnh sửa một thành phần.',
  },
  menuCopyToClipboard: {
    id: 'course-authoring.library-authoring.component.menu.copy',
    defaultMessage: 'Sao chép vào bộ nhớ tạm',
    description: 'Mục menu để sao chép một thành phần.',
  },
  menuDelete: {
    id: 'course-authoring.library-authoring.component.menu.delete',
    defaultMessage: 'Xóa',
    description: 'Mục menu để xóa một thành phần.',
  },
  menuAddToCollection: {
    id: 'course-authoring.library-authoring.component.menu.add',
    defaultMessage: 'Thêm vào bộ sưu tập',
    description: 'Mục menu để thêm thành phần vào bộ sưu tập.',
  },
  menuRemoveFromCollection: {
    id: 'course-authoring.library-authoring.component.menu.remove-from-collection',
    defaultMessage: 'Gỡ khỏi bộ sưu tập',
    description: 'Mục menu để gỡ thành phần khỏi bộ sưu tập.',
  },
  removeComponentFromCollectionSuccess: {
    id: 'course-authoring.library-authoring.component.remove-from-collection-success',
    defaultMessage: 'Gỡ mục thành công',
    description: 'Thông báo khi gỡ một mục khỏi bộ sưu tập thành công.',
  },
  removeComponentFromCollectionFailure: {
    id: 'course-authoring.library-authoring.component.remove-from-collection-failure',
    defaultMessage: 'Gỡ mục không thành công',
    description: 'Thông báo khi gỡ một mục khỏi bộ sưu tập thất bại.',
  },
  deleteComponentWarningTitle: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-title',
    defaultMessage: 'Xóa thành phần',
    description: 'Tiêu đề cảnh báo trước khi xóa một thành phần.',
  },
  componentNamePlaceholder: {
    id: 'course-authoring.library-authoring.component.name-confirmation-placeholder',
    defaultMessage: 'thành phần này',
    description: 'Văn bản hiển thị tạm thay cho tiêu đề thành phần khi đang tải.',
  },
  deleteComponentConfirm: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-text',
    defaultMessage: 'Bạn có chắc chắn muốn xóa vĩnh viễn {componentName}? Thao tác này không thể hoàn tác và sẽ gỡ nó khỏi thư viện của bạn. {message}',
    description: 'Văn bản xác nhận hiển thị trước khi xóa một thành phần.',
  },
  deleteComponentConfirmCourse: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-msg-1',
    defaultMessage: 'Thành phần này đang được dùng {courseCount, plural, one {{courseCountText} lần} other {{courseCountText} lần}} trong các khóa học và sẽ ngừng nhận cập nhật tại đó.',
    description: 'Phần đầu của thông điệp xác nhận trước khi xóa một thành phần.',
  },
  deleteComponentConfirmUnits: {
    id: 'course-authoring.library-authoring.component.delete-confirmation-text.units',
    defaultMessage: 'Khi xóa thành phần này, bạn cũng sẽ xóa nó khỏi {unit} trong thư viện này.',
    description: 'Thông điệp về các đơn vị khi xóa một thành phần.',
  },
  deleteComponentCancelButton: {
    id: 'course-authoring.library-authoring.component.cancel-delete-button',
    defaultMessage: 'Hủy',
    description: 'Nút để hủy thao tác xóa thành phần.',
  },
  deleteComponentButton: {
    id: 'course-authoring.library-authoring.component.confirm-delete-button',
    defaultMessage: 'Xóa',
    description: 'Nút để xác nhận xóa thành phần.',
  },
  deleteComponentSuccess: {
    id: 'course-authoring.library-authoring.component.delete-error-success',
    defaultMessage: 'Đã xóa thành phần',
    description: 'Thông báo hiển thị khi xóa thành phần thành công.',
  },
  undoDeleteComponentToastAction: {
    id: 'course-authoring.library-authoring.component.undo-delete-component-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Nút toast để hoàn tác thao tác xóa thành phần.',
  },
  undoDeleteComponentToastSuccess: {
    id: 'course-authoring.library-authoring.component.undo-delete-component-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Thông báo hiển thị khi hoàn tác xóa thành phần thành công.',
  },
  undoDeleteComponentToastFailed: {
    id: 'course-authoring.library-authoring.component.undo-delete-component-failed',
    defaultMessage: 'Không thể hoàn tác thao tác xóa thành phần',
    description: 'Thông báo hiển thị khi hoàn tác xóa thành phần thất bại.',
  },
  deleteCollection: {
    id: 'course-authoring.library-authoring.collection.delete-menu-text',
    defaultMessage: 'Xóa',
    description: 'Mục menu để xóa một bộ sưu tập.',
  },
  deleteCollectionConfirm: {
    id: 'course-authoring.library-authoring.collection.delete-confirmation-text',
    defaultMessage: 'Bạn có chắc chắn muốn xóa bộ sưu tập: {collectionTitle}?',
    description: 'Văn bản xác nhận hiển thị trước khi xóa bộ sưu tập.',
  },
  deleteCollectionFailed: {
    id: 'course-authoring.library-authoring.collection.delete-failed-error',
    defaultMessage: 'Xóa bộ sưu tập không thành công',
    description: 'Thông báo hiển thị khi xóa bộ sưu tập thất bại.',
  },
  deleteCollectionSuccess: {
    id: 'course-authoring.library-authoring.collection.delete-error-success',
    defaultMessage: 'Đã xóa bộ sưu tập',
    description: 'Thông báo hiển thị khi xóa bộ sưu tập thành công.',
  },
  undoDeleteCollectionToastAction: {
    id: 'course-authoring.library-authoring.collection.undo-delete-collection-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Nút toast để hoàn tác thao tác xóa bộ sưu tập.',
  },
  undoDeleteCollectionToastMessage: {
    id: 'course-authoring.library-authoring.collection.undo-delete-collection-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Thông báo hiển thị khi hoàn tác xóa bộ sưu tập thành công.',
  },
  undoDeleteCollectionToastFailed: {
    id: 'course-authoring.library-authoring.collection.undo-delete-collection-failed',
    defaultMessage: 'Không thể hoàn tác thao tác xóa bộ sưu tập',
    description: 'Thông báo hiển thị khi hoàn tác xóa bộ sưu tập thất bại.',
  },
  componentPickerSingleSelectTitle: {
    id: 'course-authoring.library-authoring.component-picker.single.title',
    defaultMessage: 'Thêm',
    description: 'Tiêu đề nút khi chọn một thành phần.',
  },
  componentPickerMultipleSelectTitle: {
    id: 'course-authoring.library-authoring.component-picker.multiple.title',
    defaultMessage: 'Chọn',
    description: 'Tiêu đề nút khi chọn nhiều thành phần.',
  },
  unpublishedChanges: {
    id: 'course-authoring.library-authoring.component.unpublished-changes',
    defaultMessage: 'Thay đổi chưa xuất bản',
    description: 'Nhãn hiển thị khi một thành phần có thay đổi chưa xuất bản.',
  },
  publishConfirmationTitle: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.title',
    defaultMessage: 'Xuất bản {displayName}',
    description: 'Tiêu đề hộp thoại xác nhận xuất bản thành phần trong thư viện.',
  },
  publishConfirmationButton: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.confirm',
    defaultMessage: 'Xuất bản',
    description: 'Văn bản nút xác nhận trong hộp thoại xuất bản thành phần.',
  },
  publishConfirmationBody: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.body',
    defaultMessage: 'Xuất bản tất cả thay đổi chưa xuất bản cho thành phần này?',
    description: 'Nội dung hộp thoại xác nhận xuất bản thành phần trong thư viện.',
  },
  publishConfimrationDownstreamsBody: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.downsteams-body',
    defaultMessage: 'Nội dung này hiện đang được sử dụng trong:',
    description: 'Nội dung liệt kê nơi đang dùng thành phần trong hộp thoại xác nhận xuất bản.',
  },
  publishConfirmationDownstreamsAlert: {
    id: 'course-authoring.library-authoring.component.publish-confirmation.downsteams-alert',
    defaultMessage: 'Thành phần này có thể được đồng bộ trong các khóa học sau khi xuất bản.',
    description: 'Thông báo trong hộp thoại xác nhận xuất bản thành phần.',
  },
  removeComponentFromUnitMenu: {
    id: 'course-authoring.library-authoring.unit.component.remove.button',
    defaultMessage: 'Gỡ khỏi đơn vị',
    description: 'Văn bản mục menu để gỡ thành phần khỏi một đơn vị.',
  },
  removeComponentWarningTitle: {
    id: 'course-authoring.library-authoring.component.remove-confirmation-title',
    defaultMessage: 'Gỡ thành phần',
    description: 'Tiêu đề cảnh báo trước khi gỡ thành phần khỏi container.',
  },
  removeComponentConfirm: {
    id: 'course-authoring.library-authoring.component.remove-confirmation-text',
    defaultMessage: 'Bạn có chắc chắn muốn gỡ {componentName} khỏi {parentContainerName}? Gỡ thành phần sẽ không xóa nó khỏi thư viện.',
    description: 'Văn bản xác nhận hiển thị trước khi gỡ thành phần khỏi container cha.',
  },
  removeComponentFromContainerSuccess: {
    id: 'course-authoring.library-authoring.component.remove-from-container-success',
    defaultMessage: 'Gỡ thành phần thành công',
    description: 'Thông báo khi gỡ thành phần khỏi container thành công.',
  },
  removeComponentFromContainerFailure: {
    id: 'course-authoring.library-authoring.component.remove-from-container-failure',
    defaultMessage: 'Gỡ thành phần không thành công',
    description: 'Thông báo khi gỡ thành phần khỏi container thất bại.',
  },
  undoRemoveComponentFromContainerToastAction: {
    id: 'course-authoring.library-authoring.component.undo-remove-from-container-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Nút toast để hoàn tác thao tác gỡ thành phần khỏi container.',
  },
  undoRemoveComponentFromContainerToastSuccess: {
    id: 'course-authoring.library-authoring.component.undo-remove-component-from-container-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Thông báo hiển thị khi hoàn tác gỡ thành phần khỏi container thành công.',
  },
  undoRemoveComponentFromContainerToastFailed: {
    id: 'course-authoring.library-authoring.component.undo-remove-component-from-container-failed',
    defaultMessage: 'Không thể hoàn tác thao tác gỡ thành phần',
    description: 'Thông báo hiển thị khi hoàn tác gỡ thành phần khỏi container thất bại.',
  },
  componentRemoveButtonLabel: {
    id: 'course-authoring.library-authoring.component.remove-button-label',
    defaultMessage: 'Gỡ',
    description: 'Nút xác nhận gỡ thành phần khỏi container cha.',
  },
  containerPreviewText: {
    id: 'course-authoring.library-authoring.container.preview.text',
    defaultMessage: 'Chứa {children}.',
    description: 'Văn bản xem trước cho section/subsection với tên các phần con được phân tách bằng dấu phẩy.',
  },
  removeContainerWarningTitle: {
    id: 'course-authoring.library-authoring.container.remove-confirmation-title',
    defaultMessage: 'Gỡ {containerType}',
    description: 'Tiêu đề cảnh báo trước khi gỡ một container khỏi container cha.',
  },
  removeContainerConfirm: {
    id: 'course-authoring.library-authoring.container.remove-confirmation-text',
    defaultMessage: 'Bạn có chắc chắn muốn gỡ {containerName} khỏi {parentContainerName}? Thao tác này sẽ không xóa {containerType} khỏi thư viện của bạn.',
    description: 'Văn bản xác nhận hiển thị trước khi gỡ một container khỏi container cha.',
  },
  removeContainerButton: {
    id: 'course-authoring.library-authoring.container.confirm-remove-button',
    defaultMessage: 'Gỡ',
    description: 'Nút xác nhận gỡ một container khỏi container cha.',
  },
});

export default messages;
