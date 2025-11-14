import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  backupPageTitle: {
    id: 'course-authoring.library-authoring.backup-page.title',
    defaultMessage: 'Sao lưu thư viện',
    description: 'Tiêu đề cho trang sao lưu thư viện',
  },
  backupPageSubtitle: {
    id: 'course-authoring.library-authoring.backup-page.subtitle',
    defaultMessage: 'Công cụ',
    description: 'Phụ đề cho trang sao lưu thư viện',
  },
  backupFailedError: {
    id: 'course-authoring.library-authoring.backup-page.error.backup-failed',
    defaultMessage: 'Đã xảy ra lỗi khi tạo bản sao lưu. Vui lòng thử lại sau.',
    description: 'Thông báo lỗi khi việc tạo bản sao lưu thất bại',
  },
  mutationError: {
    id: 'course-authoring.library-authoring.backup-page.error.mutation-failed',
    defaultMessage: 'Không thể bắt đầu sao lưu: {error}',
    description: 'Thông báo lỗi khi mutation bắt đầu sao lưu thất bại',
  },
  backupPending: {
    id: 'course-authoring.library-authoring.backup-page.status.pending',
    defaultMessage: 'Đang chuẩn bị tải xuống...',
    description: 'Thông báo khi bản sao lưu đang ở trạng thái chờ',
  },
  backupExporting: {
    id: 'course-authoring.library-authoring.backup-page.status.exporting',
    defaultMessage: 'Bản sao lưu của bạn đang được xuất...',
    description: 'Thông báo khi bản sao lưu đang được xuất',
  },
  backupDescription: {
    id: 'course-authoring.library-authoring.backup-page.description',
    defaultMessage:
      'Các bản sao lưu cục bộ được lưu trên máy của bạn và không được đồng bộ tự động. '
      + 'Chúng không chứa lịch sử chỉnh sửa. Bạn có thể khôi phục một bản sao lưu cục bộ như một thư viện mới '
      + 'trên trang học tập này hoặc một trang khác. Bất kỳ ai có quyền truy cập vào tệp sao lưu cục bộ '
      + 'đều có thể xem toàn bộ nội dung trong đó.',
    description: 'Mô tả về bản sao lưu thư viện và cách chúng hoạt động',
  },
  createBackupButton: {
    id: 'course-authoring.library-authoring.backup-page.button.create',
    defaultMessage: 'Tải bản sao lưu thư viện',
    description: 'Nội dung nút để tạo và tải xuống bản sao lưu mới',
  },
  downloadReadyButton: {
    id: 'course-authoring.library-authoring.backup-page.button.download-ready',
    defaultMessage: 'Tải bản sao lưu thư viện',
    description: 'Nội dung nút khi bản sao lưu đã sẵn sàng để tải xuống',
  },
  creatingBackupButton: {
    id: 'course-authoring.library-authoring.backup-page.button.creating',
    defaultMessage: 'Đang tạo bản sao lưu...',
    description: 'Nội dung nút khi bản sao lưu đang được tạo',
  },
  exportingBackupButton: {
    id: 'course-authoring.library-authoring.backup-page.button.exporting',
    defaultMessage: 'Đang xuất...',
    description: 'Nội dung nút khi bản sao lưu đang được xuất',
  },
  downloadAriaLabel: {
    id: 'course-authoring.library-authoring.backup-page.button.aria-label',
    defaultMessage: '{buttonText} cho {libraryTitle}',
    description: 'Nhãn ARIA cho nút tải bản sao lưu',
  },
});

export default messages;
