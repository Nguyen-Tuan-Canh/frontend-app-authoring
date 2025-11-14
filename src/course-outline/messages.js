import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-outline.headingTitle',
    defaultMessage: 'Khung khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.course-outline.subTitle',
    defaultMessage: 'Nội dung',
  },
  alertSuccessTitle: {
    id: 'course-authoring.course-outline.reindex.alert.success.title',
    defaultMessage: 'Lập chỉ mục khóa học',
  },
  alertSuccessDescription: {
    id: 'course-authoring.course-outline.reindex.alert.success.description',
    defaultMessage: 'Khóa học đã được lập chỉ mục lại thành công.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  newSectionButton: {
    id: 'course-authoring.course-outline.section-list.button.new-section',
    defaultMessage: 'Phần mới',
    description: 'Văn bản của nút tạo phần (section) mới trong khung khóa học',
  },
  useSectionFromLibraryButton: {
    id: 'course-authoring.course-outline.button.use-section-from-library',
    defaultMessage: 'Dùng phần từ thư viện',
    description: 'Văn bản của nút thêm một phần từ thư viện vào khóa học.',
  },
  exportTagsCreatingToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.creating.message',
    defaultMessage: 'Vui lòng chờ. Đang tạo tệp xuất cho thẻ của khóa học...',
    description: 'Thông báo đang xử lý trong toast khi xuất thẻ của khóa học',
  },
  exportTagsSuccessToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.success.message',
    defaultMessage: 'Xuất thẻ khóa học thành công',
    description: 'Thông báo thành công trong toast khi xuất thẻ của khóa học',
  },
  exportTagsErrorToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.error.message',
    defaultMessage: 'Đã xảy ra lỗi khi tạo tệp',
    description: 'Thông báo lỗi trong toast khi xuất thẻ của khóa học',
  },
  newUnitButton: {
    id: 'course-authoring.course-outline.button.new-unit',
    defaultMessage: 'Đơn vị học mới',
    description: 'Văn bản của nút tạo đơn vị học (unit) mới trong một phân đoạn.',
  },
  useUnitFromLibraryButton: {
    id: 'course-authoring.course-outline.button.use-unit-from-library',
    defaultMessage: 'Dùng đơn vị học từ thư viện',
    description: 'Văn bản của nút thêm đơn vị học từ thư viện vào một phân đoạn.',
  },
  newSubsectionButton: {
    id: 'course-authoring.course-outline.button.new-subsection',
    defaultMessage: 'Phân đoạn mới',
    description: 'Văn bản của nút tạo phân đoạn (subsection) mới trong một phần.',
  },
  useSubsectionFromLibraryButton: {
    id: 'course-authoring.course-outline.button.use-subsection-from-library',
    defaultMessage: 'Dùng phân đoạn từ thư viện',
    description: 'Văn bản của nút thêm phân đoạn mới từ thư viện vào một phần.',
  },
  sectionPickerModalTitle: {
    id: 'course-authoring.course-outline.button.section-modal.title',
    defaultMessage: 'Chọn phần',
    description: 'Tiêu đề của hộp thoại chọn phần (section) trong khung khóa học',
  },
});

export default messages;
