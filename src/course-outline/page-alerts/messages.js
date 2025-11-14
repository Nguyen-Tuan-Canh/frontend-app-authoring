import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorTitle',
    defaultMessage: 'Khóa học này được tạo từ một lần chạy (re-run) trước. Cần cấu hình thủ công một số thiết lập.',
    description: 'Configuration error alert title in course outline.',
  },
  configurationErrorText: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorText',
    defaultMessage: 'Hãy nhớ rà soát và đặt lại tất cả các mốc thời gian, bao gồm Ngày bắt đầu khóa học; thiết lập đội ngũ giảng dạy; kiểm tra lại các thông báo khóa học và nội dung có thông tin ngày tháng; và khởi tạo (seed) mục thảo luận và wiki.',
    description: 'Configuration error alert body in course outline.',
  },
  discussionNotificationText: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationText',
    defaultMessage: 'Lần chạy khóa học này đang sử dụng phiên bản nâng cấp của diễn đàn thảo luận {platformName}. Để hiển thị thanh bên thảo luận, các xBlock thảo luận sẽ không còn hiển thị với học viên.',
    description: 'Alert text for informing users about upgraded version of discussions forum.',
  },
  discussionNotificationLearnMore: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationLearnMore',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Learn more link in upgraded discussion notification alert',
  },
  discussionNotificationFeedback: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationFeedback',
    defaultMessage: 'Góp ý',
    description: 'Share feedback link in upgraded discussion notification alert',
  },
  deprecationWarningTitle: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningTitle',
    defaultMessage: 'Khóa học này đang sử dụng các tính năng không còn được hỗ trợ.',
    description: 'Alert title informing users about deprecated features being used in course that are not supported.',
  },
  deprecationWarningBlocksText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningBlocksText',
    defaultMessage: 'Bạn cần xóa hoặc thay thế các thành phần sau.',
    description: 'Alert body text informing users about deprecated components which needs to be removed or replaced.',
  },
  deprecationWarningDeprecatedBlockText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningDeprecatedBlockText',
    defaultMessage: 'Để tránh lỗi, {platformName} khuyến nghị bạn nên xóa các tính năng không được hỗ trợ khỏi phần Cài đặt nâng cao của khóa học. Để thực hiện, hãy truy cập {hyperlink}, tìm thiết lập "Advanced Module List", rồi xóa các mô-đun sau khỏi danh sách.',
    description: 'Alert body text informing users about how to remove deprecated components/modules.',
  },
  advancedSettingLinkText: {
    id: 'course-authoring.course-outline.page-alerts.advancedSettingLinkText',
    defaultMessage: 'Trang Cài đặt nâng cao',
    description: 'Advanced settings page link text',
  },
  deprecatedComponentName: {
    id: 'course-authoring.course-outline.page-alerts.deprecatedComponentName',
    defaultMessage: 'Thành phần đã ngưng hỗ trợ',
    description: 'Default name for a deprecated component.',
  },
  proctoringErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorTitle',
    defaultMessage: 'Khóa học này có các thiết lập kỳ thi được giám sát chưa đầy đủ hoặc không hợp lệ.',
    description: 'Proctoring settings errors alert title.',
  },
  proctoringErrorText: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorText',
    defaultMessage: 'Để cập nhật các thiết lập này, hãy truy cập {hyperlink}.',
    description: 'Proctoring settings errors alert body text.',
  },
  proctoredSettingsLinkText: {
    id: 'course-authoring.course-outline.page-alerts.proctoredSettingsLinkText',
    defaultMessage: 'Trang Cài đặt kỳ thi được giám sát',
    description: 'Proctoring settings page link text.',
  },
  alertFailedGeneric: {
    id: 'course-authoring.course-outline.page-alert.generic-error.description',
    defaultMessage: 'Không thể {actionName} {type}. Vui lòng thử lại.',
    description: 'Generic alert text.',
  },
  newFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.title',
    defaultMessage: 'Đã thêm {newFilesLen, plural, one {tệp mới} other {các tệp mới}} vào mục Files.',
    description: 'This title is displayed when new files are successfully imported into the course after pasting an unit.',
  },
  newFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.description',
    defaultMessage: 'Các {newFilesLen, plural, one {tệp} other {tệp}} bắt buộc sau đã được nhập vào khóa học này: {newFilesStr}',
    description: 'This description is displayed when new files are successfully imported into the course after pasting an unit',
  },
  newFileAlertAction: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.action',
    defaultMessage: 'Xem tệp',
    description: 'This label is used as the text for a button that allows the user to view the imported files.',
  },
  errorFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.title',
    defaultMessage: 'Đã xảy ra một số lỗi',
    description: 'This title is displayed when there are errors during the import of files while pasting an unit.',
  },
  errorFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.description',
    defaultMessage: 'Không thể thêm {errorFilesLen, plural, one {tệp bắt buộc sau} other {các tệp bắt buộc sau}} vào khóa học: {errorFilesStr}',
    description: 'This description is displayed when there are errors during the import of files and lists the files that could not be imported.',
  },
  conflictingFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.conflicting-files.title',
    defaultMessage: 'Bạn có thể cần cập nhật thủ công {conflictingFilesLen, plural, one {một tệp} other {các tệp}}',
    description: 'This alert title is displayed when files being imported conflict with existing files in the course.',
  },
  conflictingFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-conflicting.description',
    defaultMessage: 'Các {conflictingFilesLen, plural, one {tệp} other {tệp}} sau đã tồn tại trong khóa học này nhưng không khớp với phiên bản được dùng bởi thành phần mà bạn vừa dán: {conflictingFilesStr}',
    description: 'This alert description is displayed when files being imported conflict with existing files in the course and advises the user to update the conflicting files manually.',
  },
  serverErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.server-error.title',
    defaultMessage: 'Máy chủ Studio gặp lỗi',
    description: 'Generic server error alert title.',
  },
  serverErrorAlertBody: {
    id: 'course-authoring.course-outline.page-alert.server-error.body',
    defaultMessage: 'Đã xảy ra lỗi trong Studio và trang không thể tải được. Vui lòng thử lại sau ít phút. Chúng tôi đã ghi nhận lỗi này và đội ngũ kỹ thuật đang làm việc để khắc phục sớm nhất có thể.',
    description: 'Generic server error alert body.',
  },
  networkErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.network-error.title',
    defaultMessage: 'Lỗi mạng',
    description: 'Generic network error alert.',
  },
  forbiddenAlert: {
    id: 'course-authoring.course-outline.page-alert.forbidden.title',
    defaultMessage: 'Truy cập bị hạn chế',
    description: 'Forbidden(403) alert title',
  },
  forbiddenAlertBody: {
    id: 'course-authoring.course-outline.page-alert.forbidden.body',
    defaultMessage: 'Có vẻ như bạn đang cố truy cập một trang mà bạn không có quyền xem. Hãy liên hệ quản trị viên nếu bạn cho rằng đây là nhầm lẫn, hoặc quay lại {LMS}.',
    description: 'Forbidden(403) alert body',
  },
  forbiddenAlertLmsUrl: {
    id: 'course-authoring.course-outline.page-alert.lms',
    defaultMessage: 'LMS',
    description: 'LMS base redirection url',
  },
});

export default messages;
