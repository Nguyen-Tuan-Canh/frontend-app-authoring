import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  openCollectionButton: {
    id: 'course-authoring.library-authoring.collections-sidebbar.open-button',
    defaultMessage: 'Mở',
    description: 'Nội dung nút để mở bộ sưu tập',
  },
  manageTabTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.manage-tab.title',
    defaultMessage: 'Quản lý',
    description: 'Tiêu đề tab Quản lý',
  },
  detailsTabTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.title',
    defaultMessage: 'Chi tiết',
    description: 'Tiêu đề tab Chi tiết',
  },
  detailsTabDescriptionTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.description-title',
    defaultMessage: 'Mô tả / Văn bản xem trước trên thẻ',
    description: 'Tiêu đề vùng Mô tả trong tab Chi tiết',
  },
  detailsTabDescriptionPlaceholder: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.description-placeholder',
    defaultMessage: 'Thêm mô tả',
    description: 'Placeholder cho vùng Mô tả trong tab Chi tiết',
  },
  detailsTabStatsTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-title',
    defaultMessage: 'Thống kê bộ sưu tập',
    description: 'Tiêu đề vùng Thống kê bộ sưu tập trong tab Chi tiết',
  },
  detailsTabStatsNoComponents: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-no-components',
    defaultMessage: 'Bộ sưu tập này hiện đang trống.',
    description: 'Thông báo khi không có thành phần nào trong Thống kê bộ sưu tập',
  },
  detailsTabStatsTotalComponents: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-total-components',
    defaultMessage: 'Tổng ',
    description: 'Nhãn cho tổng số thành phần trong Thống kê bộ sưu tập',
  },
  detailsTabStatsOtherComponents: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.stats-other-components',
    defaultMessage: 'Khác',
    description: 'Nhãn cho các thành phần khác trong Thống kê bộ sưu tập',
  },
  detailsTabHistoryTitle: {
    id: 'course-authoring.library-authoring.collections-sidebar.details-tab.history-title',
    defaultMessage: 'Lịch sử bộ sưu tập',
    description: 'Tiêu đề vùng Lịch sử bộ sưu tập trong tab Chi tiết',
  },
  noComponentsInCollection: {
    id: 'course-authoring.library-authoring.collections-pag.no-components.text',
    defaultMessage: 'Bộ sưu tập này hiện đang trống.',
    description: 'Văn bản hiển thị khi bộ sưu tập không có thành phần nào',
  },
  addComponentsInCollection: {
    id: 'course-authoring.library-authoring.collections-pag.add-components.btn-text',
    defaultMessage: 'Tạo mới',
    description: 'Văn bản trên nút Tạo mới khi bộ sưu tập chưa có thành phần',
  },
  noSearchResultsInCollection: {
    id: 'course-authoring.library-authoring.collections-pag.no-search-results.text',
    defaultMessage: 'Không tìm thấy thành phần phù hợp trong bộ sưu tập này.',
    description: 'Thông báo khi không tìm thấy thành phần phù hợp trong bộ sưu tập',
  },
  newContentButton: {
    id: 'course-authoring.library-authoring.collections.buttons.new-content.text',
    defaultMessage: 'Tạo mới',
    description: 'Văn bản của nút mở “Ngăn thêm nội dung” ở trang bộ sưu tập',
  },
  collectionInfoButton: {
    id: 'course-authoring.library-authoring.buttons.collection-info.alt-text',
    defaultMessage: 'Thông tin bộ sưu tập',
    description: 'Alt text cho nút xem thông tin bộ sưu tập bên cạnh tiêu đề bộ sưu tập',
  },
  allCollections: {
    id: 'course-authoring.library-authoring.all-collections.text',
    defaultMessage: 'Tất cả bộ sưu tập',
    description: 'Văn bản breadcrumb để quay lại danh sách tất cả bộ sưu tập',
  },
  breadcrumbsAriaLabel: {
    id: 'course-authoring.library-authoring.breadcrumbs.label.text',
    defaultMessage: 'Đường dẫn điều hướng',
    description: 'Nhãn ARIA cho breadcrumb điều hướng',
  },
  noSearchResultsCollections: {
    id: 'course-authoring.library-authoring.no-search-results-collections',
    defaultMessage: 'Không tìm thấy bộ sưu tập phù hợp trong thư viện này.',
    description: 'Thông báo khi không tìm thấy bộ sưu tập phù hợp',
  },
  noCollections: {
    id: 'course-authoring.library-authoring.no-collections',
    defaultMessage: 'Bạn chưa thêm bộ sưu tập nào vào thư viện này.',
    description: 'Thông báo khi thư viện chưa có bộ sưu tập nào',
  },
  addCollection: {
    id: 'course-authoring.library-authoring.add-collection',
    defaultMessage: 'Thêm bộ sưu tập',
    description: 'Văn bản nút để thêm bộ sưu tập mới',
  },
  updateCollectionSuccessMsg: {
    id: 'course-authoring.library-authoring.update-collection-success-msg',
    defaultMessage: 'Cập nhật bộ sưu tập thành công.',
    description: 'Thông báo khi cập nhật bộ sưu tập thành công',
  },
  updateCollectionErrorMsg: {
    id: 'course-authoring.library-authoring.update-collection-error-msg',
    defaultMessage: 'Cập nhật bộ sưu tập thất bại.',
    description: 'Thông báo khi cập nhật bộ sưu tập không thành công',
  },
  returnToLibrary: {
    id: 'course-authoring.library-authoring.collection.component-picker.return-to-library',
    defaultMessage: 'Quay lại Thư viện',
    description: 'Breadcrumb để quay lại thư viện',
  },
});

export default messages;
