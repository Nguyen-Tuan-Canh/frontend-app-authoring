import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.discussions.heading',
    defaultMessage: 'Chọn công cụ thảo luận cho khóa học này',
  },
  supportedFeatures: {
    id: 'authoring.discussions.supportedFeatures',
    defaultMessage: 'Tính năng được hỗ trợ',
  },
  'supportedFeatureList-mobile-show': {
    id: 'authoring.discussions.supportedFeatureList-mobile-show',
    defaultMessage: 'Hiện danh sách tính năng',
    description: 'This is used in mobile view as supported feature list heading when close',
  },
  'supportedFeatureList-mobile-hide': {
    id: 'authoring.discussions.supportedFeatureList-mobile-hide',
    defaultMessage: 'Ẩn danh sách tính năng',
    description: 'This is used in mobile view as supported feature list heading when opened',
  },
  noApps: {
    id: 'authoring.discussions.noApps',
    defaultMessage: 'Hiện không có nhà cung cấp diễn đàn thảo luận nào cho khóa học của bạn.',
    description: 'A message shown when there are no discussions providers available to be displayed.',
  },
  nextButton: {
    id: 'authoring.discussions.nextButton',
    defaultMessage: 'Tiếp tục',
    description: 'Button allowing the user to advance to the second step of discussion configuration.',
  },
  appFullSupport: {
    id: 'authoring.discussions.appFullSupport',
    defaultMessage: 'Hỗ trợ đầy đủ',
    description: 'A label indicating that an app supports the full set of possible features for a discussions app.',
  },
  appBasicSupport: {
    id: 'authoring.discussions.appBasicSupport',
    defaultMessage: 'Hỗ trợ cơ bản',
    description: 'A label indicating that an app only supports a subset of the possible features of a discussions app.',
  },
  selectApp: {
    id: 'authoring.discussions.selectApp',
    defaultMessage: 'Chọn {appName}',
    description: 'A label for the checkbox that allows a user to select the discussions app they want to configure.',
  },

  // Legacy
  'appName-legacy': {
    id: 'authoring.discussions.appList.appName-legacy',
    defaultMessage: 'edX (cũ)',
    description: 'The name of the Legacy edX Discussions app.',
  },
  'appDescription-legacy': {
    id: 'authoring.discussions.appList.appDescription-legacy',
    defaultMessage: 'Bắt đầu trao đổi với người học khác, đặt câu hỏi và tương tác với cộng đồng trong khóa học.',
    description: 'A description of the Legacy edX Discussions app.',
  },
  // New provider
  'appName-openedx': {
    id: 'authoring.discussions.appList.appName-openedx',
    defaultMessage: 'edX',
    description: 'The name of the new edX Discussions app.',
  },
  'appDescription-openedx': {
    id: 'authoring.discussions.appList.appDescription-openedx',
    defaultMessage: 'Cho phép người học tham gia thảo luận theo từng chủ đề song song với nội dung khóa học.',
    description: 'A description of the new edX Discussions app.',
  },
  // Piazza
  'appName-piazza': {
    id: 'authoring.discussions.appList.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'The name of the Piazza app.',
  },
  'appDescription-piazza': {
    id: 'authoring.discussions.appList.appDescription-piazza',
    defaultMessage: 'Piazza được thiết kế để kết nối sinh viên, trợ giảng và giảng viên, giúp mọi sinh viên nhận được hỗ trợ đúng lúc.',
    description: 'A description of the Piazza app.',
  },
  'appDescription-yellowdig': {
    id: 'authoring.discussions.appList.appDescription-yellowdig',
    defaultMessage: 'Yellowdig cung cấp giải pháp học tập dạng “game hóa” giúp xây dựng cộng đồng học tập và tăng tương tác trong mọi hình thức khóa học.',
    description: 'A description of the Yellowdig app.',
  },
  'appDescription-inscribe': {
    id: 'authoring.discussions.appList.appDescription-inscribe',
    defaultMessage: 'InScribe tận dụng sức mạnh cộng đồng và trí tuệ nhân tạo để kết nối người học với câu trả lời, tài nguyên và những người họ cần để thành công.',
    description: 'A description of the inscibe app.',
  },
  'appDescription-discourse': {
    id: 'authoring.discussions.appList.appDescription-discourse',
    defaultMessage: 'Discourse là phần mềm diễn đàn hiện đại cho cộng đồng của bạn. Có thể dùng như mailing list, diễn đàn thảo luận, phòng chat dài hạn và nhiều hơn thế.',
    description: 'A description of the discourse app.',
  },
  'appDescription-ed-discuss': {
    id: 'authoring.discussions.appList.appDescription-ed-discus',
    defaultMessage: 'Ed Discussion giúp mở rộng giao tiếp lớp học trong một giao diện trực quan, đẹp mắt. Câu hỏi được lan tỏa và mang lại lợi ích cho cả lớp. Ít email hơn, tiết kiệm nhiều thời gian hơn.',
    description: 'A description of the Ed discus app.',
  },
  // Features
  'featureName-discussion-page': {
    id: 'authoring.discussions.featureName-discussion-page',
    defaultMessage: 'Trang thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-embedded-course-sections': {
    id: 'authoring.discussions.featureName-embedded-course-sections',
    defaultMessage: 'Thảo luận nhúng theo phần học',
    description: 'The name of a discussions feature.',
  },
  'featureName-advanced-in-context-discussion': {
    id: 'authoring.discussions.featureName-advanced-in-context-discussion',
    defaultMessage: 'Thảo luận nâng cao trong ngữ cảnh',
    description: 'The name of a discussions feature.',
  },
  'featureName-anonymous-posting': {
    id: 'authoring.discussions.featureName-anonymous-posting',
    defaultMessage: 'Đăng bài ẩn danh',
    description: 'The name of a discussions feature.',
  },
  'featureName-automatic-learner-enrollment': {
    id: 'authoring.discussions.featureName-automatic-learner-enrollment',
    defaultMessage: 'Tự động ghi danh người học',
    description: 'The name of a discussions feature.',
  },
  'featureName-blackout-discussion-dates': {
    id: 'authoring.discussions.featureName-blackout-discussion-dates',
    defaultMessage: 'Khoảng ngày tạm ngừng thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-community-ta-support': {
    id: 'authoring.discussions.featureName-community-ta-support',
    defaultMessage: 'Hỗ trợ Trợ giảng cộng đồng',
    description: 'The name of a discussions feature.',
  },
  'featureName-course-cohort-support': {
    id: 'authoring.discussions.featureName-course-cohort-support',
    defaultMessage: 'Hỗ trợ nhóm học (cohort) theo khóa',
    description: 'The name of a discussions feature.',
  },
  'featureName-direct-messages-from-instructors': {
    id: 'authoring.discussions.featureName-direct-messages-from-instructors',
    defaultMessage: 'Tin nhắn trực tiếp từ giảng viên',
    description: 'The name of a discussions feature.',
  },
  'featureName-discussion-content-prompts': {
    id: 'authoring.discussions.featureName-discussion-content-prompts',
    defaultMessage: 'Gợi ý nội dung thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-email-notifications': {
    id: 'authoring.discussions.featureName-email-notifications',
    defaultMessage: 'Thông báo qua email',
    description: 'The name of a discussions feature.',
  },
  'featureName-graded-discussions': {
    id: 'authoring.discussions.featureName-graded-discussions',
    defaultMessage: 'Thảo luận có chấm điểm',
    description: 'The name of a discussions feature.',
  },
  'featureName-in-platform-notifications': {
    id: 'authoring.discussions.featureName-in-platform-notifications',
    defaultMessage: 'Thông báo trong nền tảng',
    description: 'The name of a discussions feature.',
  },
  'featureName-internationalization-support': {
    id: 'authoring.discussions.featureName-internationalization-support',
    defaultMessage: 'Hỗ trợ đa ngôn ngữ',
    description: 'The name of a discussions feature.',
  },
  'featureName-lti-advanced-sharing-mode': {
    id: 'authoring.discussions.featureName-lti-advanced-sharing-mode',
    defaultMessage: 'Chia sẻ nâng cao qua LTI',
    description: 'The name of a discussions feature.',
  },
  'featureName-basic-configuration': {
    id: 'authoring.discussions.featureName-basic-configuration',
    defaultMessage: 'Cấu hình cơ bản',
    description: 'The name of a discussions feature.',
  },
  'featureName-primary-discussion-app-experience': {
    id: 'authoring.discussions.featureName-primary-discussion-app-experience',
    defaultMessage: 'Trải nghiệm ứng dụng thảo luận chính',
    description: 'The name of a discussions feature.',
  },
  'featureName-question-discussion-support': {
    id: 'authoring.discussions.featureName-question-&-discussion-support',
    defaultMessage: 'Hỗ trợ hỏi đáp & thảo luận',
    description: 'The name of a discussions feature.',
  },
  'featureName-report/flag-content-to-moderators': {
    id: 'authoring.discussions.featureName-report/flag-content-to-moderators',
    defaultMessage: 'Báo cáo nội dung cho người kiểm duyệt',
    description: 'The name of a discussions feature.',
  },
  'featureName-research-data-events': {
    id: 'authoring.discussions.featureName-research-data-events',
    defaultMessage: 'Sự kiện dữ liệu nghiên cứu',
    description: 'The name of a discussions feature.',
  },
  'featureName-simplified-in-context-discussion': {
    id: 'authoring.discussions.featureName-simplified-in-context-discussion',
    defaultMessage: 'Thảo luận trong ngữ cảnh (đơn giản)',
    description: 'The name of a discussions feature.',
  },
  'featureName-user-mentions': {
    id: 'authoring.discussions.featureName-user-mentions',
    defaultMessage: 'Nhắc đến người dùng (@mention)',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.1': {
    id: 'authoring.discussions.featureName-wcag-2.1',
    defaultMessage: 'Hỗ trợ WCAG 2.1',
    description: 'The name of a discussions feature.',
  },
  'featureName-wcag-2.0-support': {
    id: 'authoring.discussions.wcag-2.0-support',
    defaultMessage: 'Hỗ trợ WCAG 2.0',
    description: 'The name of a discussions feature.',
  },
  'featureType-basic': {
    id: 'authoring.discussions.basic-support',
    defaultMessage: 'Hỗ trợ cơ bản',
    description: 'The type of a discussions feature.',
  },
  'featureType-partial': {
    id: 'authoring.discussions.partial-support',
    defaultMessage: 'Hỗ trợ một phần',
    description: 'The type of a discussions feature.',
  },
  'featureType-full': {
    id: 'authoring.discussions.full-support',
    defaultMessage: 'Hỗ trợ đầy đủ',
    description: 'The type of a discussions feature.',
  },
  'featureType-common': {
    id: 'authoring.discussions.common-support',
    defaultMessage: 'Thường được yêu cầu',
    description: 'The type of a discussions feature.',
  },
  hideDiscussionTab: {
    id: 'authoring.discussions.hide-discussion-tab',
    defaultMessage: 'Ẩn tab Thảo luận',
    description: 'Title message to hide discussion tab',
  },
  hideDiscussionTabTitle: {
    id: 'authoring.discussions.hide-tab-title',
    defaultMessage: 'Ẩn tab Thảo luận?',
    description: 'Title message to hide discussion tab',
  },
  hideDiscussionTabMessage: {
    id: 'authoring.discussions.hide-tab-message',
    defaultMessage: 'Tab Thảo luận sẽ không còn hiển thị với người học trong LMS. Đồng thời, việc đăng bài lên diễn đàn thảo luận cũng sẽ bị tắt. Bạn có chắc chắn muốn tiếp tục?',
    description: 'Help message to hide discussion tab',
  },
  hideDiscussionOkButton: {
    id: 'authoring.discussions.hide-ok-button',
    defaultMessage: 'Đồng ý',
    description: 'Ok button title',
  },
  hideDiscussionCancelButton: {
    id: 'authoring.discussions.hide-cancel-button',
    defaultMessage: 'Hủy',
    description: 'Cancel button title',
  },
});

export default messages;
