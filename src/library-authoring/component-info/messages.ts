import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  advancedDetailsTitle: {
    id: 'course-authoring.library-authoring.component.advanced.title',
    defaultMessage: 'Chi tiết nâng cao',
    description: 'Tiêu đề cho phần chi tiết kỹ thuật nâng cao của một thành phần',
  },
  advancedDetailsAssets: {
    id: 'course-authoring.library-authoring.component.advanced.assets',
    defaultMessage: 'Tài nguyên (Tệp)',
    description: 'Tiêu đề cho phần các tệp đính kèm với thành phần',
  },
  advancedDetailsAssetsDeleteFileTitle: {
    id: 'course-authoring.library-authoring.component.advanced.assets.delete-file-title',
    defaultMessage: 'Xóa tệp',
    description: 'Tiêu đề hộp thoại xác nhận xóa tệp',
  },
  advancedDetailsAssetsDeleteButton: {
    id: 'course-authoring.library-authoring.component.advanced.assets.delete-btn',
    defaultMessage: 'Xóa tệp này',
    description: 'Mô tả cho trình đọc màn hình của nút xóa mỗi tệp tĩnh',
  },
  advancedDetailsOLX: {
    id: 'course-authoring.library-authoring.component.advanced.olx',
    defaultMessage: 'Mã nguồn OLX',
    description: 'Tiêu đề cho phần mã nguồn OLX của thành phần',
  },
  advancedDetailsOLXEditButton: {
    id: 'course-authoring.library-authoring.component.advanced.olx-edit',
    defaultMessage: 'Chỉnh sửa OLX',
    description: 'Nhãn nút để bật chế độ chỉnh sửa OLX',
  },
  advancedDetailsOLXSaveButton: {
    id: 'course-authoring.library-authoring.component.advanced.olx-save',
    defaultMessage: 'Lưu',
    description: 'Nút lưu các thay đổi OLX',
  },
  advancedDetailsOLXCancelButton: {
    id: 'course-authoring.library-authoring.component.advanced.olx-cancel',
    defaultMessage: 'Hủy',
    description: 'Nút hủy các thay đổi OLX',
  },
  advancedDetailsOLXEditWarning: {
    id: 'course-authoring.library-authoring.component.advanced.olx-warning',
    defaultMessage: 'Hãy cẩn thận! Đây là tính năng nâng cao, lỗi có thể làm hỏng thành phần.',
    description: 'Cảnh báo khi người dùng chỉnh sửa trực tiếp OLX.',
  },
  advancedDetailsOLXEditFailed: {
    id: 'course-authoring.library-authoring.component.advanced.olx-failed',
    defaultMessage: 'Đã xảy ra lỗi và không thể lưu OLX.',
    description: 'Thông báo lỗi khi lưu OLX thất bại.',
  },
  advancedDetailsOLXError: {
    id: 'course-authoring.library-authoring.component.advanced.olx-error',
    defaultMessage: 'Không thể tải OLX',
    description: 'Thông báo lỗi khi không truy cập được OLX',
  },
  advancedDetailsUsageKey: {
    id: 'course-authoring.library-authoring.component.advanced.usage-key',
    defaultMessage: 'ID (Usage key)',
    description: 'Tiêu đề cho ID của thành phần',
  },
  updateComponentSuccessMsg: {
    id: 'course-authoring.library-authoring.component.update.success',
    defaultMessage: 'Cập nhật thành phần thành công.',
    description: 'Thông báo khi cập nhật thành phần thành công',
  },
  updateComponentErrorMsg: {
    id: 'course-authoring.library-authoring.component.update.error',
    defaultMessage: 'Đã xảy ra lỗi khi cập nhật thành phần.',
    description: 'Thông báo khi cập nhật thành phần bị lỗi',
  },
  editComponentButtonTitle: {
    id: 'course-authoring.library-authoring.component.edit.title',
    defaultMessage: 'Chỉnh sửa thành phần',
    description: 'Tiêu đề cho nút chỉnh sửa thành phần',
  },
  previewTabTitle: {
    id: 'course-authoring.library-authoring.component.preview-tab.title',
    defaultMessage: 'Xem trước',
    description: 'Tiêu đề tab xem trước',
  },
  manageTabTitle: {
    id: 'course-authoring.library-authoring.component.manage-tab.title',
    defaultMessage: 'Quản lý',
    description: 'Tiêu đề tab quản lý',
  },
  usageTabTitle: {
    id: 'course-authoring.library-authoring.component.usage-tab.title',
    defaultMessage: 'Sử dụng',
    description: 'Tiêu đề tab sử dụng',
  },
  manageTabTagsTitle: {
    id: 'course-authoring.library-authoring.component.manage-tab.tags-title',
    defaultMessage: 'Thẻ ({count})',
    description: 'Tiêu đề vùng Thẻ trong tab Quản lý',
  },
  manageTabCollectionsTitle: {
    id: 'course-authoring.library-authoring.component.manage-tab.collections-title',
    defaultMessage: 'Bộ sưu tập ({count})',
    description: 'Tiêu đề vùng Bộ sưu tập trong tab Quản lý',
  },
  detailsTabTitle: {
    id: 'course-authoring.library-authoring.component.details-tab.title',
    defaultMessage: 'Chi tiết',
    description: 'Tiêu đề tab Chi tiết',
  },
  detailsTabUsageTitle: {
    id: 'course-authoring.library-authoring.component.details-tab.usage-title',
    defaultMessage: 'Mức độ sử dụng thành phần',
    description: 'Tiêu đề vùng Mức độ sử dụng thành phần trong tab Chi tiết',
  },
  detailsTabUsageEmpty: {
    id: 'course-authoring.library-authoring.component.details-tab.usage-empty',
    defaultMessage: 'Thành phần này chưa được sử dụng trong khóa học nào.',
    description: 'Thông báo khi thành phần chưa được dùng trong bất kỳ khóa học nào',
  },
  detailsTabHistoryTitle: {
    id: 'course-authoring.library-authoring.component.details-tab.history-title',
    defaultMessage: 'Lịch sử thành phần',
    description: 'Tiêu đề vùng Lịch sử thành phần trong tab Chi tiết',
  },
  previewExpandButtonTitle: {
    id: 'course-authoring.library-authoring.component.preview.expand.title',
    defaultMessage: 'Mở rộng',
    description: 'Tiêu đề nút mở rộng vùng xem trước',
  },
  previewModalTitle: {
    id: 'course-authoring.library-authoring.component.preview.modal.title',
    defaultMessage: 'Xem trước thành phần',
    description: 'Tiêu đề cho hộp thoại xem trước thành phần',
  },
  componentPickerSingleSelect: {
    id: 'course-authoring.library-authoring.component-picker.single-select',
    defaultMessage: 'Thêm vào khóa học', // TODO: Change this message to a generic one?
    description: 'Nút để thêm thành phần vào khóa học',
  },
  componentPickerMultipleSelect: {
    id: 'course-authoring.library-authoring.component-picker.multiple-select',
    defaultMessage: 'Chọn',
    description: 'Nút để chọn thành phần',
  },
  publishSuccessMsg: {
    id: 'course-authoring.component-authoring.component.publish.success',
    defaultMessage: 'Xuất bản thành phần thành công.',
    description: 'Thông báo khi xuất bản thành phần thành công.',
  },
  publishErrorMsg: {
    id: 'course-authoring.component-authoring.component.publish.error',
    defaultMessage: 'Đã xảy ra lỗi khi xuất bản thành phần.',
    description: 'Thông báo khi xuất bản thành phần bị lỗi.',
  },
  usageTabHierarchyHeading: {
    id: 'course-authoring.library-authoring.component-sidebar.usage-tab.hierarchy-heading',
    defaultMessage: 'Cấu trúc nội dung',
    description: 'Tiêu đề cho phần cấu trúc nội dung trong tab Sử dụng',
  },
});

export default messages;
