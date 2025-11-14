import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  openButton: {
    id: 'course-authoring.library-authoring.container-sidebar.open-button',
    defaultMessage: 'Mở',
    description: 'Văn bản nút để mở container',
  },
  previewTabTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.preview-tab.title',
    defaultMessage: 'Xem trước',
    description: 'Tiêu đề tab Xem trước',
  },
  manageTabTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.manage-tab.title',
    defaultMessage: 'Quản lý',
    description: 'Tiêu đề tab Quản lý',
  },
  manageTabTagsTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.manage-tab.tags.title',
    defaultMessage: 'Thẻ ({count})',
    description: 'Tiêu đề phần thẻ trong tab Quản lý',
  },
  manageTabCollectionsTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.manage-tab.collections.title',
    defaultMessage: 'Bộ sưu tập ({count})',
    description: 'Tiêu đề phần bộ sưu tập trong tab Quản lý',
  },
  usageTabTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.usage-tab.title',
    defaultMessage: 'Sử dụng',
    description: 'Tiêu đề tab Sử dụng',
  },
  usageTabHierarchyHeading: {
    id: 'course-authoring.library-authoring.container-sidebar.usage-tab.hierarchy-heading',
    defaultMessage: 'Cấu trúc nội dung',
    description: 'Tiêu đề cho phần cấu trúc nội dung trong tab Sử dụng',
  },
  settingsTabTitle: {
    id: 'course-authoring.library-authoring.container-sidebar.settings-tab.title',
    defaultMessage: 'Cài đặt',
    description: 'Tiêu đề tab Cài đặt',
  },
  updateContainerSuccessMsg: {
    id: 'course-authoring.library-authoring.update-container-success-msg',
    defaultMessage: 'Cập nhật container thành công.',
    description: 'Thông báo khi cập nhật container thành công',
  },
  updateContainerErrorMsg: {
    id: 'course-authoring.library-authoring.update-container-error-msg',
    defaultMessage: 'Cập nhật container không thành công.',
    description: 'Thông báo khi cập nhật container thất bại',
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
  containerCardMenuAlt: {
    id: 'course-authoring.library-authoring.container.menu',
    defaultMessage: 'Menu thao tác container',
    description: 'Alt/title cho nút menu thao tác của thẻ container.',
  },
  menuOpen: {
    id: 'course-authoring.library-authoring.menu.open',
    defaultMessage: 'Mở',
    description: 'Mục menu để mở một bộ sưu tập/container.',
  },
  menuCopyContainer: {
    id: 'course-authoring.library-authoring.container.copy-menu-text',
    defaultMessage: 'Sao chép vào bộ nhớ tạm',
    description: 'Mục menu để sao chép một container.',
  },
  menuDeleteContainer: {
    id: 'course-authoring.library-authoring.container.delete-menu-text',
    defaultMessage: 'Xóa',
    description: 'Mục menu để xóa một container.',
  },
  menuRemoveFromContainer: {
    id: 'course-authoring.library-authoring.component.menu.remove',
    defaultMessage: 'Gỡ khỏi {containerType}',
    description: 'Mục menu để gỡ một mục khỏi container.',
  },
  menuAddToCollection: {
    id: 'course-authoring.library-authoring.component.menu.add',
    defaultMessage: 'Thêm vào bộ sưu tập',
    description: 'Mục menu để thêm một thành phần vào bộ sưu tập.',
  },
  containerPreviewMoreBlocks: {
    id: 'course-authoring.library-authoring.component.container-card-preview.more-blocks',
    defaultMessage: '+{count}',
    description: 'Số lượng hiển thị khi container có nhiều block hơn số hiển thị trong bản xem trước.',
  },
  containerPreviewText: {
    id: 'course-authoring.library-authoring.container.preview.text',
    defaultMessage: 'Chứa {children}.',
    description: 'Văn bản xem trước cho section/subsection với tên các phần con được phân tách bằng dấu phẩy',
  },
  deleteSectionWarningTitle: {
    id: 'course-authoring.library-authoring.section.delete-confirmation-title',
    defaultMessage: 'Xóa phần',
    description: 'Tiêu đề cảnh báo hiển thị trước khi xóa một Phần',
  },
  deleteSectionCourseMessage: {
    id: 'course-authoring.library-authoring.section.delete-parent-message',
    defaultMessage: 'Phần này đang được dùng {courseCount, plural, one {{courseCountText} lần} other {{courseCountText} lần}} trong các khóa học và sẽ ngừng nhận cập nhật tại đó.',
    description: 'Thông tin sử dụng trong khóa học hiển thị trước khi xóa một phần',
  },
  deleteSubsectionParentMessage: {
    id: 'course-authoring.library-authoring.subsection.delete-parent-message',
    defaultMessage: 'Khi xóa mục con này, bạn cũng sẽ xóa nó khỏi {parentName} trong thư viện này.',
    description: 'Thông tin sử dụng trong thư viện hiển thị trước khi xóa một mục con',
  },
  deleteSubsectionMultipleParentMessage: {
    id: 'course-authoring.library-authoring.subsection.delete-multiple-parent-message',
    defaultMessage: 'Khi xóa mục con này, bạn cũng sẽ xóa nó khỏi {parentCount} Phần trong thư viện này.',
    description: 'Thông tin sử dụng hiển thị trước khi xóa một mục con thuộc nhiều phần',
  },
  deleteSubsectionWarningTitle: {
    id: 'course-authoring.library-authoring.subsection.delete-confirmation-title',
    defaultMessage: 'Xóa mục con',
    description: 'Tiêu đề cảnh báo hiển thị trước khi xóa một Mục con',
  },
  deleteSubsectionCourseMessage: {
    id: 'course-authoring.library-authoring.subsection.delete-course-message',
    defaultMessage: 'Mục con này đang được dùng {courseCount, plural, one {{courseCountText} lần} other {{courseCountText} lần}} trong các khóa học và sẽ ngừng nhận cập nhật tại đó.',
    description: 'Thông tin sử dụng trong khóa học hiển thị trước khi xóa một mục con',
  },
  deleteUnitParentMessage: {
    id: 'course-authoring.library-authoring.unit.delete-parent-message',
    defaultMessage: 'Khi xóa đơn vị này, bạn cũng sẽ xóa nó khỏi {parentName} trong thư viện này.',
    description: 'Thông tin sử dụng trong thư viện hiển thị trước khi xóa một đơn vị',
  },
  deleteUnitMultipleParentMessage: {
    id: 'course-authoring.library-authoring.unit.delete-multiple-parent-message',
    defaultMessage: 'Khi xóa đơn vị này, bạn cũng sẽ xóa nó khỏi {parentCount} Mục con trong thư viện này.',
    description: 'Thông tin sử dụng hiển thị trước khi xóa một đơn vị thuộc nhiều mục con',
  },
  deleteUnitWarningTitle: {
    id: 'course-authoring.library-authoring.unit.delete-confirmation-title',
    defaultMessage: 'Xóa đơn vị',
    description: 'Tiêu đề cảnh báo hiển thị trước khi xóa một Đơn vị',
  },
  deleteUnitCourseMessage: {
    id: 'course-authoring.library-authoring.unit.delete-course-usage-message',
    defaultMessage: 'Đơn vị này đang được dùng {courseCount, plural, one {{courseCountText} lần} other {{courseCountText} lần}} trong các khóa học và sẽ ngừng nhận cập nhật tại đó.',
    description: 'Thông tin sử dụng trong khóa học hiển thị trước khi xóa một đơn vị',
  },
  deleteContainerConfirm: {
    id: 'course-authoring.library-authoring.container.delete-confirmation-text',
    defaultMessage: 'Bạn có chắc chắn muốn xóa vĩnh viễn {containerName}? Thao tác này không thể hoàn tác và sẽ gỡ nó khỏi thư viện của bạn. {message}',
    description: 'Văn bản xác nhận hiển thị trước khi xóa một container',
  },
  deleteUnitSuccess: {
    id: 'course-authoring.library-authoring.unit.delete.success',
    defaultMessage: 'Đã xóa đơn vị',
    description: 'Thông báo hiển thị khi xóa đơn vị thành công',
  },
  deleteUnitFailed: {
    id: 'course-authoring.library-authoring.unit.delete-failed-error',
    defaultMessage: 'Xóa đơn vị không thành công',
    description: 'Thông báo hiển thị khi xóa đơn vị thất bại',
  },
  undoDeleteUnitToastFailed: {
    id: 'course-authoring.library-authoring.unit.undo-delete-unit-failed',
    defaultMessage: 'Không thể hoàn tác thao tác xóa đơn vị',
    description: 'Thông báo hiển thị khi hoàn tác xóa đơn vị thất bại',
  },
  deleteSectionSuccess: {
    id: 'course-authoring.library-authoring.section.delete.success',
    defaultMessage: 'Đã xóa phần',
    description: 'Thông báo hiển thị khi xóa phần thành công',
  },
  deleteSectionFailed: {
    id: 'course-authoring.library-authoring.section.delete-failed-error',
    defaultMessage: 'Xóa phần không thành công',
    description: 'Thông báo hiển thị khi xóa phần thất bại',
  },
  undoDeleteSectionToastFailed: {
    id: 'course-authoring.library-authoring.section.undo-delete-section-failed',
    defaultMessage: 'Không thể hoàn tác thao tác xóa phần',
    description: 'Thông báo hiển thị khi hoàn tác xóa phần thất bại',
  },
  deleteSubsectionSuccess: {
    id: 'course-authoring.library-authoring.subsection.delete.success',
    defaultMessage: 'Đã xóa mục con',
    description: 'Thông báo hiển thị khi xóa mục con thành công',
  },
  deleteSubsectionFailed: {
    id: 'course-authoring.library-authoring.subsection.delete-failed-error',
    defaultMessage: 'Xóa mục con không thành công',
    description: 'Thông báo hiển thị khi xóa mục con thất bại',
  },
  undoDeleteSubsectionToastFailed: {
    id: 'course-authoring.library-authoring.subsection.undo-delete-subsection-failed',
    defaultMessage: 'Không thể hoàn tác thao tác xóa mục con',
    description: 'Thông báo hiển thị khi hoàn tác xóa mục con thất bại',
  },
  undoDeleteContainerToastMessage: {
    id: 'course-authoring.library-authoring.container.undo-delete-container-toast-text',
    defaultMessage: 'Hoàn tác thành công',
    description: 'Thông báo hiển thị khi hoàn tác xóa container thành công',
  },
  undoDeleteContainerToastAction: {
    id: 'course-authoring.library-authoring.container.undo-delete-container-toast-button',
    defaultMessage: 'Hoàn tác',
    description: 'Nút toast để hoàn tác thao tác xóa container',
  },
  publishContainerSuccess: {
    id: 'course-authoring.library-authoring.container-sidebar.publisher.publish-success',
    defaultMessage: 'Đã xuất bản tất cả thay đổi',
    description: 'Thông báo sau khi xuất bản container thành công',
  },
  publishContainerFailed: {
    id: 'course-authoring.library-authoring.container-sidebar.publisher.publish-failure',
    defaultMessage: 'Xuất bản thay đổi không thành công',
    description: 'Thông báo hiển thị khi xuất bản container thất bại',
  },
});

export default messages;
