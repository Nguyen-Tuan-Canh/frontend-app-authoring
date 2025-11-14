import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-updates.header.title',
    defaultMessage: 'Cập nhật khóa học',
    description: 'Tiêu đề cho trang Cập nhật khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.course-updates.header.subtitle',
    defaultMessage: 'Nội dung',
    description: 'Phụ đề cho trang',
  },
  sectionInfo: {
    id: 'course-authoring.course-updates.section-info',
    defaultMessage: 'Sử dụng phần cập nhật khóa học để thông báo cho học viên về các mốc thời gian hoặc kỳ thi quan trọng, làm nổi bật các thảo luận trong diễn đàn, thông báo thay đổi lịch học và phản hồi các câu hỏi của học viên.',
    description: 'Thông điệp mô tả cách sử dụng cập nhật khóa học trong một khóa học',
  },
  newUpdateButton: {
    id: 'course-authoring.course-updates.actions.new-update',
    defaultMessage: 'Cập nhật mới',
    description: 'Nhãn nút trên header để thêm một cập nhật khóa học mới',
  },
  firstUpdateButton: {
    id: 'course-authoring.course-updates.actions.first-update',
    defaultMessage: 'Thêm cập nhật đầu tiên',
    description: 'Nhãn nút để thêm cập nhật khóa học đầu tiên',
  },
  noCourseUpdates: {
    id: 'course-authoring.course-updates.actions.first-update-message',
    defaultMessage: 'Bạn chưa thêm bất kỳ cập nhật nào cho khóa học này.',
    description: 'Thông báo cho người dùng khi chưa có cập nhật khóa học nào',
  },
  loadingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.loading-updates.title',
    defaultMessage: 'Không thể tải các cập nhật khóa học',
    description: 'Tiêu đề thông báo lỗi khi tải danh sách cập nhật khóa học',
  },
  loadingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.loading-updates.description',
    defaultMessage: 'Không thể tải các cập nhật khóa học cho {courseId}. Vui lòng thử lại sau.',
    description: 'Nội dung thông báo lỗi khi tải các cập nhật khóa học',
  },
  loadingHandoutsErrorTitle: {
    id: 'course-authoring.course-updates.error.loading-handouts.title',
    defaultMessage: 'Không thể tải tài liệu khóa học (handouts)',
    description: 'Tiêu đề thông báo lỗi khi tải tài liệu khóa học',
  },
  loadingHandoutsErrorDescription: {
    id: 'course-authoring.course-updates.error.loading-handouts.description',
    defaultMessage: 'Không thể tải tài liệu khóa học cho {courseId}. Vui lòng thử lại sau.',
    description: 'Nội dung thông báo lỗi khi tải tài liệu khóa học',
  },
  savingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.saving-updates.title',
    defaultMessage: 'Không thể lưu cập nhật khóa học',
    description: 'Tiêu đề thông báo lỗi khi lưu cập nhật khóa học',
  },
  savingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.saving-updates.description',
    defaultMessage: 'Không thể lưu các thay đổi gần đây cho cập nhật khóa học. Vui lòng thử lại sau.',
    description: 'Nội dung thông báo lỗi khi lưu chỉnh sửa cập nhật khóa học',
  },
  savingNewUpdateErrorAlertDescription: {
    id: 'course-authoring.course-updates.error.saving-new-updates.description',
    defaultMessage: 'Không thể lưu cập nhật khóa học mới. Vui lòng thử lại sau.',
    description: 'Nội dung thông báo lỗi khi lưu một cập nhật khóa học mới',
  },
  savingHandoutsErrorTitle: {
    id: 'course-authoring.course-updates.error.saving-handouts.title',
    defaultMessage: 'Không thể lưu tài liệu khóa học (handouts)',
    description: 'Tiêu đề thông báo lỗi khi lưu tài liệu khóa học',
  },
  savingHandoutsErrorDescription: {
    id: 'course-authoring.course-updates.error.saving-handouts.description',
    defaultMessage: 'Không thể lưu các thay đổi gần đây cho tài liệu khóa học. Vui lòng thử lại sau.',
    description: 'Nội dung thông báo lỗi khi lưu tài liệu khóa học',
  },
  deletingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.deleting-updates.title',
    defaultMessage: 'Không thể xóa cập nhật khóa học',
    description: 'Tiêu đề thông báo lỗi khi xóa một cập nhật khóa học',
  },
  deletingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.deleting-updates.description',
    defaultMessage: 'Không thể xóa cập nhật khóa học đã chọn. Vui lòng thử lại sau.',
    description: 'Nội dung thông báo lỗi khi xóa cập nhật khóa học',
  },
});

export default messages;
