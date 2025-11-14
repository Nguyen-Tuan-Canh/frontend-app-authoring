import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.course-optimizer.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  noDataCard: {
    id: 'course-authoring.course-optimizer.noDataCard',
    defaultMessage: 'Không có dữ liệu quét nào',
  },
  linkToPrevCourseRun: {
    id: 'course-authoring.course-optimizer.linkToPrevCourseRun',
    defaultMessage: 'Liên kết tới lần chạy khóa học trước',
  },
  noResultsFound: {
    id: 'course-authoring.course-optimizer.noResultsFound',
    defaultMessage: 'Không tìm thấy kết quả nào',
  },
  brokenLinksHeader: {
    id: 'course-authoring.course-optimizer.brokenLinksHeader',
    defaultMessage: 'Liên kết hỏng',
  },
  filterButtonLabel: {
    id: 'course-authoring.course-optimizer.filterButtonLabel',
    defaultMessage: 'Bộ lọc',
  },
  lockedCheckboxLabel: {
    id: 'course-authoring.course-optimizer.lockedCheckboxLabel',
    defaultMessage: 'Hiển thị tệp khóa học bị khóa',
  },
  lockedLabel: {
    id: 'course-authoring.course-optimizer.lockedLabel',
    defaultMessage: 'Đã khóa',
  },
  lockedInfoTooltip: {
    id: 'course-authoring.course-optimizer.lockedInfoTooltip',
    defaultMessage: 'Các tệp khóa học này không thể truy cập đối với người học chưa ghi danh, vì vậy chúng tôi không thể kiểm tra được liên kết có truy cập được tệp hay không.',
  },
  brokenLabel: {
    id: 'course-authoring.course-optimizer.brokenLabel',
    defaultMessage: 'Hỏng',
  },
  brokenInfoTooltip: {
    id: 'course-authoring.course-optimizer.brokenInfoTooltip',
    defaultMessage: `Các liên kết trỏ đến trang web, hình ảnh hoặc video bên ngoài không tồn tại hoặc không còn khả dụng.
      Những liên kết này có thể gây lỗi cho người học khi họ cố gắng truy cập nội dung.`,
  },
  manualLabel: {
    id: 'course-authoring.course-optimizer.manualLabel',
    defaultMessage: 'Thủ công',
  },
  manualInfoTooltip: {
    id: 'course-authoring.course-optimizer.manualInfoTooltip',
    defaultMessage: 'Chúng tôi không thể kiểm tra liên kết này. Vui lòng tự kiểm tra thủ công.',
  },
  clearFilters: {
    id: 'course-authoring.course-optimizer.clearFilters',
    defaultMessage: 'Xóa bộ lọc',
  },
  customPagesHeader: {
    id: 'course-authoring.course-optimizer.customPagesHeader',
    defaultMessage: 'Trang tùy chỉnh',
  },
  courseUpdatesHeader: {
    id: 'course-authoring.course-optimizer.courseUpdatesHeader',
    defaultMessage: 'Cập nhật khóa học',
  },
  updateLinkError: {
    id: 'course-authoring.course-optimizer.updateLinkError',
    defaultMessage: 'Không thể cập nhật liên kết.',
  },
  updateLinksError: {
    id: 'course-authoring.course-optimizer.updateLinksError',
    defaultMessage: 'Một số liên kết không thể cập nhật.',
  },
  updateButton: {
    id: 'course-authoring.scanResults.updateButton',
    defaultMessage: 'Cập nhật',
  },
  updated: {
    id: 'course-authoring.scanResults.updated',
    defaultMessage: 'Đã cập nhật',
  },
  updateAllButtonText: {
    id: 'course-authoring.scanResults.updateAllButtonText',
    defaultMessage: 'Cập nhật tất cả',
  },
});

export default messages;
