import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationChangeConsequence: {
    id: 'authoring.discussions.configurationChangeConsequences',
    defaultMessage:
      'Người học sẽ mất quyền truy cập vào mọi bài thảo luận đang hoạt động hoặc trước đây trong khóa học của bạn.',
    description:
      'Describes that, as a consequence of changing configuration,'
      + ' students will lose access posts on the course.',
  },
  configureApp: {
    id: 'authoring.discussions.configure.app',
    defaultMessage: 'Cấu hình {name}',
  },
  configure: {
    id: 'authoring.discussions.configure',
    defaultMessage: 'Cấu hình thảo luận',
  },
  ok: {
    id: 'authoring.discussions.ok',
    defaultMessage: 'OK',
    description: 'Button allowing the user to acknowledge the provider change.',
  },
  cancel: {
    id: 'authoring.discussions.cancel',
    defaultMessage: 'Hủy',
    description: 'Button allowing the user to return to discussion provider configurations.',
  },
  confirm: {
    id: 'authoring.discussions.confirm',
    defaultMessage: 'Xác nhận',
    description: 'Button allowing the user to confirm Confirmation.',
  },
  confirmConfigurationChange: {
    id: 'authoring.discussions.confirmConfigurationChange',
    defaultMessage: 'Bạn có chắc chắn muốn thay đổi thiết lập thảo luận không?',
    description: 'Asks the user whether he/she really wants to change settings.',
  },
  confirmEnableDiscussionsLabel: {
    id: 'authoring.discussions.confirmEnableDiscussionsLabel',
    defaultMessage: 'Bật thảo luận cho các đơn vị học trong tiểu mục có chấm điểm?',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussionsLabel: {
    id: 'authoring.discussions.cancelEnableDiscussionsLabel',
    defaultMessage: 'Tắt thảo luận cho các đơn vị học trong tiểu mục có chấm điểm?',
    description: 'Asks the user whether he/she really wants to disable discussions on units in graded subsections.',
  },
  confirmEnableDiscussions: {
    id: 'authoring.discussions.confirmEnableDiscussions',
    defaultMessage: 'Bật công tắc này sẽ tự động bật thảo luận cho tất cả các đơn vị học trong các tiểu mục có chấm điểm, trừ các bài thi giới hạn thời gian.',
    description: 'Asks the user whether he/she really wants to enable discussions on units in graded subsections.',
  },
  cancelEnableDiscussions: {
    id: 'authoring.discussions.cancelEnableDiscussions',
    defaultMessage: 'Tắt công tắc này sẽ tự động tắt thảo luận cho tất cả các đơn vị học trong các tiểu mục có chấm điểm. Các chủ đề thảo luận có ít nhất 1 chuỗi (thread) sẽ được liệt kê và truy cập được trong mục “Đã lưu trữ” (Archived) ở tab Chủ đề trên trang Thảo luận.',
    description: 'Asks the user whether he/she really wants to disable discussions on units in graded subsections.',
  },
  backButton: {
    id: 'authoring.discussions.backButton',
    defaultMessage: 'Quay lại',
    description: 'Button allowing the user to return to discussion app selection.',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Lưu',
    description: 'Button allowing the user to submit their discussion configuration.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Đang lưu',
    description: 'Button label when the discussion configuration is being submitted.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Đã lưu',
    description: 'Button label when the discussion configuration has been successfully submitted.',
  },

  // App names
  'appName-piazza': {
    id: 'authoring.discussions.appConfigForm.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'The name of the Piazza app.',
  },
  'appName-yellowdig': {
    id: 'authoring.discussions.appConfigForm.appName-yellowdig',
    defaultMessage: 'Yellowdig',
    description: 'The name of the yellowdig app.',
  },
  'appName-inscribe': {
    id: 'authoring.discussions.appConfigForm.appName-inscribe',
    defaultMessage: 'InScribe',
    description: 'The name of the inscribe app.',
  },
  'appName-discourse': {
    id: 'authoring.discussions.appConfigForm.appName-discourse',
    defaultMessage: 'Discourse',
    description: 'The name of the discourse app.',
  },
  'appName-ed-discuss': {
    id: 'authoring.discussions.appConfigForm.appName-ed-discuss',
    defaultMessage: 'Ed Discussion',
    description: 'The name of the Ed Discussion app.',
  },
  'appName-legacy': {
    id: 'authoring.discussions.appConfigForm.appName-legacy',
    defaultMessage: 'edX',
    description: 'The name of the Legacy edX Discussions app.',
  },
  'appName-openedx': {
    id: 'authoring.discussions.appConfigForm.appName-openedx',
    defaultMessage: 'edX (mới)',
    description: 'The name of the new edX Discussions app.',
  },
  divisionByGroup: {
    id: 'authoring.discussions.builtIn.divisionByGroup',
    defaultMessage: 'Nhóm học (Cohorts)',
  },
  divideByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideByCohorts.label',
    defaultMessage: 'Chia thảo luận theo nhóm học (cohort)',
    description: 'Label for a switch that enables dividing discussions by cohorts.  allowDivisionByUnit, divideCourseWideTopics, divideGeneralTopic, and divideQuestionsForTAs are only used if this setting is true.',
  },
  divideByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideByCohorts.help',
    defaultMessage: 'Người học chỉ có thể xem và phản hồi các bài thảo luận của những thành viên trong cùng nhóm học của họ.',
    description: 'Help text for a switch that enables dividing discussions by cohorts.',
  },
  divideCourseTopicsByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.label',
    defaultMessage: 'Chia chủ đề thảo luận toàn khóa theo nhóm học',
    description: 'Label for a switch that enables dividing course wide topics by cohorts.',
  },
  divideCourseTopicsByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.help',
    defaultMessage: 'Chọn những chủ đề thảo luận chung toàn khóa mà bạn muốn chia theo nhóm học.',
    description: 'Help text asking the user to pick course-wide topics that should be divided by cohort.',
  },
  divideGeneralTopic: {
    id: 'authoring.discussions.builtIn.divideGeneralTopic.label',
    defaultMessage: 'Chung',
    description: 'Label for a checkbox allowing a user to divide the General course wide topic by cohorts.',
  },
  divideQuestionsForTAsTopic: {
    id: 'authoring.discussions.builtIn.divideQuestionsForTAsTopic.label',
    defaultMessage: 'Câu hỏi cho trợ giảng',
    description: 'Label for a checkbox allowing a user to divide the Questions for the TAs (TA stands for "teaching assistant") course wide topic by cohorts.',
  },
  cohortsEnabled: {
    id: 'authoring.discussions.builtIn.cohortsEnabled.label',
    defaultMessage: 'Để điều chỉnh các thiết lập này, hãy bật nhóm học (cohort) trong ',
    description: 'Label text informing the user to enable cohort',
  },
  instructorDashboard: {
    id: 'authoring.discussions.builtIn.instructorDashboard.label',
    defaultMessage: 'bảng điều khiển giảng viên',
    description: 'Label text for instructor dashboard',
  },
  // In-context discussion fields
  visibilityInContext: {
    id: 'authoring.discussions.builtIn.visibilityInContext',
    defaultMessage: 'Hiển thị thảo luận trong ngữ cảnh',
  },
  gradedUnitPagesLabel: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.label',
    defaultMessage: 'Bật thảo luận cho các đơn vị học trong tiểu mục có chấm điểm',
  },
  gradedUnitPagesHelp: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.help',
    defaultMessage: 'Cho phép người học tham gia thảo luận trên tất cả các trang đơn vị học có chấm điểm, trừ các bài thi giới hạn thời gian.',
  },
  groupInContextSubsectionLabel: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.label',
    defaultMessage: 'Gom thảo luận theo tiểu mục trong ngữ cảnh',
  },
  groupInContextSubsectionHelp: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.help',
    defaultMessage: 'Người học sẽ có thể xem mọi bài đăng trong cùng tiểu mục, bất kể họ đang xem trang đơn vị học nào. Thiết lập này không được khuyến nghị, nhưng nếu khóa học của bạn có các chuỗi học ngắn hoặc số lượng người học thấp thì gom nhóm có thể tăng mức độ tương tác.',
  },

  // Anonymous posting fields
  anonymousPosting: {
    id: 'authoring.discussions.builtIn.anonymousPosting',
    defaultMessage: 'Đăng ẩn danh',
  },
  allowAnonymousPostsLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymous.label',
    defaultMessage: 'Cho phép bài đăng thảo luận ẩn danh',
  },
  allowAnonymousPostsHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymous.help',
    defaultMessage: 'Nếu bật, người học có thể tạo bài đăng ẩn danh với tất cả người dùng.',
  },
  allowAnonymousPostsPeersLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.label',
    defaultMessage: 'Cho phép bài đăng thảo luận ẩn danh với bạn học',
  },
  allowAnonymousPostsPeersHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.help',
    defaultMessage: 'Người học có thể đăng ẩn danh với các bạn học khác, nhưng tất cả các bài đăng vẫn hiển thị với đội ngũ phụ trách khóa học.',
  },

  // Reported Email Notifications
  reportedContentEmailNotifications: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications',
    defaultMessage: 'Thông báo',
  },
  reportedContentEmailNotificationsLabel: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.label',
    defaultMessage: 'Email thông báo khi có nội dung bị báo cáo',
  },
  reportedContentEmailNotificationsHelp: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.help',
    defaultMessage: 'Quản trị viên thảo luận, Người kiểm duyệt, Trợ giảng cộng đồng và Trợ giảng cộng đồng theo nhóm (chỉ trong nhóm của họ) sẽ nhận email khi có nội dung bị báo cáo.',
  },

  // Discussion Topics
  discussionTopics: {
    id: 'authoring.discussions.discussionTopics',
    defaultMessage: 'Chủ đề thảo luận',
  },
  discussionTopicsLabel: {
    id: 'authoring.discussions.discussionTopics.label',
    defaultMessage: 'Chủ đề thảo luận chung',
    description: 'Label for a discussion topic section allowing a user to add new topic.',
  },
  discussionTopicsHelp: {
    id: 'authoring.discussions.discussionTopics.help',
    defaultMessage: 'Thảo luận có thể bao gồm các chủ đề chung không gắn với cấu trúc khóa học. Mỗi khóa học đều có một chủ đề chung mặc định.',
    description: 'Help text for adding new discussion topics that in general discussion topic section.',
  },
  discussionTopicRequired: {
    id: 'authoring.discussions.discussionTopic.required',
    defaultMessage: 'Tên chủ đề là bắt buộc',
    description: 'Tells the user that the discussion topic field is required and must have a value.',
  },
  discussionTopicNameAlreadyExist: {
    id: 'authoring.discussions.discussionTopic.alreadyExistError',
    defaultMessage: 'Có vẻ như tên này đã được sử dụng',
    description: 'Tells the user that the discussion topic name already in use and must have a unique name.',
  },
  addTopicButton: {
    id: 'authoring.discussions.addTopicButton',
    defaultMessage: 'Thêm chủ đề',
    description: 'Button label when Add a new discussion topic.',
  },
  deleteButton: {
    id: 'authoring.discussions.deleteButton',
    defaultMessage: 'Xóa',
    description: 'Button label when delete discussion topic from conformation card.',
  },
  cancelButton: {
    id: 'authoring.discussions.cancelButton',
    defaultMessage: 'Hủy',
    description: 'Button label when cancel discussion topic deletion conformation.',
  },
  discussionTopicDeletionHelp: {
    id: 'authoring.discussions.discussionTopicDeletion.help',
    defaultMessage: 'edX khuyến nghị bạn không xóa các chủ đề thảo luận khi khóa học đang chạy.',
    description: 'Help text for delete a discussion topic from discussion topic section.',
  },
  discussionTopicDeletionLabel: {
    id: 'authoring.discussions.discussionTopicDeletion.label',
    defaultMessage: 'Xóa chủ đề này?',
    description: 'Label for discussion topic delete popup allowing a user to delete a topic.',
  },
  renameGeneralTopic: {
    id: 'authoring.discussions.builtIn.renameGeneralTopic.label',
    defaultMessage: 'Đổi tên chủ đề chung',
    description: 'Label for default topic allowing user to rename default general topic',
  },
  generalTopicHelp: {
    id: 'authoring.discussions.generalTopicHelp.help',
    defaultMessage: 'Đây là chủ đề thảo luận mặc định cho khóa học của bạn.',
    description: 'Help text for general discussion topic collapsible card.',
  },
  configureAdditionalTopic: {
    id: 'authoring.discussions.builtIn.configureAdditionalTopic.label',
    defaultMessage: 'Cấu hình chủ đề',
    description: 'Label for Additional topic allowing user to configure additional topic name',
  },
  addTopicHelpText: {
    id: 'authoring.discussions.addTopicHelpText',
    defaultMessage: 'Chọn một tên duy nhất cho chủ đề của bạn',
    description: 'Help text for input field in adding a discussion topic',
  },
  // Restricted dates
  restrictedStartDateHelp: {
    id: 'authoring.discussions.restrictedStartDate.help',
    defaultMessage: 'Nhập ngày bắt đầu, ví dụ: 12/10/2023',
  },
  restrictedEndDateHelp: {
    id: 'authoring.discussions.restrictedEndDate.help',
    defaultMessage: 'Nhập ngày kết thúc, ví dụ: 12/17/2023',
  },
  restrictedStartTimeHelp: {
    id: 'authoring.discussions.restrictedStartTime.help',
    defaultMessage: 'Nhập giờ bắt đầu, ví dụ: 09:00 AM',
  },
  restrictedEndTimeHelp: {
    id: 'authoring.discussions.restrictedEndTime.help',
    defaultMessage: 'Nhập giờ kết thúc, ví dụ: 05:00 PM',
  },
  restrictedDatesStatus: {
    id: 'authoring.restrictedDates.status',
    defaultMessage: '{status}',
  },
  restrictedStartDateRequired: {
    id: 'authoring.restrictedDates.startDate.required',
    defaultMessage: 'Ngày bắt đầu là trường bắt buộc',
    description: 'Tells the user that the restricted dates must have start date and it is required.',
  },
  restrictedEndDateRequired: {
    id: 'authoring.restrictedDates.endDate.required',
    defaultMessage: 'Ngày kết thúc là trường bắt buộc',
    description: 'Tells the user that the restricted dates must have end date and it is required.',
  },
  restrictedStartDateInPast: {
    id: 'authoring.restrictedDates.startDate.inPast',
    defaultMessage: 'Ngày bắt đầu không được sau ngày kết thúc',
    description: 'Tells the user that the restricted start date cannot be in past and cannot be after end date',
  },
  restrictedEndDateInPast: {
    id: 'authoring.restrictedDates.endDate.inPast',
    defaultMessage: 'Ngày kết thúc không được trước ngày bắt đầu',
    description: 'Tells the user that the restricted end date cannot be in past and cannot be before start date',
  },
  restrictedStartTimeInPast: {
    id: 'authoring.restrictedDates.startTime.inPast',
    defaultMessage: 'Giờ bắt đầu không được sau giờ kết thúc',
    description: 'Tells the user that the restricted start time cannot be in past and cannot be after end time',
  },
  restrictedEndTimeInPast: {
    id: 'authoring.restrictedDates.endTime.inPast',
    defaultMessage: 'Giờ kết thúc không được trước giờ bắt đầu',
    description: 'Tells the user that the restricted end time cannot be in past and cannot be before start time',
  },
  restrictedStartTimeInValidFormat: {
    id: 'authoring.restrictedDates.startTime.inValidFormat',
    defaultMessage: 'Nhập giờ bắt đầu hợp lệ',
    description: 'Tells the user that the restricted start time format is in valid',
  },
  restrictedEndTimeInValidFormat: {
    id: 'authoring.restrictedDates.endTime.inValidFormat',
    defaultMessage: 'Nhập giờ kết thúc hợp lệ',
    description: 'Tells the user that the restricted end time format is in valid',
  },
  restrictedStartDateInValidFormat: {
    id: 'authoring.restrictedDates.startDate.inValidFormat',
    defaultMessage: 'Nhập ngày bắt đầu hợp lệ',
    description: 'Tells the user that the restricted start date format is in valid',
  },
  restrictedEndDateInValidFormat: {
    id: 'authoring.restrictedDates.endDate.inValidFormat',
    defaultMessage: 'Nhập ngày kết thúc hợp lệ',
    description: 'Tells the user that the restricted end date format is in valid',
  },
  discussionRestrictionLabel: {
    id: 'authoring.discussions.builtIn.discussionRestriction.label',
    defaultMessage: 'Giới hạn thảo luận',
  },
  discussionRestrictionHelp: {
    id: 'authoring.discussions.discussionRestriction.help',
    defaultMessage: 'Nếu bật, người học sẽ không thể đăng bài trong thảo luận.',
  },
  discussionRestrictionDatesHelp: {
    id: 'authoring.discussions.discussionRestrictionDates.help',
    defaultMessage: 'Nếu thêm, người học sẽ không thể đăng bài trong thảo luận trong khoảng ngày này.',
  },
  addRestrictedDatesButton: {
    id: 'authoring.discussions.addRestrictedDatesButton',
    defaultMessage: 'Thêm khoảng ngày giới hạn',
  },
  configureRestrictedDates: {
    id: 'authoring.discussions.builtIn.configureRestrictedDates.label',
    defaultMessage: 'Cấu hình khoảng ngày giới hạn',
  },
  activeRestrictedDatesDeletionLabel: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.label',
    defaultMessage: 'Xóa khoảng ngày giới hạn đang hoạt động?',
    description: 'Label for active restricted dates delete popup allowing a user to delete a restricted date range.',
  },
  activeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.help',
    defaultMessage: 'Khoảng ngày giới hạn này hiện đang hoạt động. Nếu xóa, người học sẽ có thể đăng bài trong thảo luận trong các ngày đó. Bạn có chắc chắn muốn tiếp tục?',
    description: 'Help text for delete a active restricted dates from restricted dates section.',
  },
  completeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.completeRestrictedDatesDeletion.help',
    defaultMessage: 'Bạn có chắc chắn muốn xóa khoảng ngày giới hạn này không?',
    description: 'Help text for delete a complete restricted dates from restricted dates section.',
  },
  restrictedDatesDeletionLabel: {
    id: 'authoring.discussions.restrictedDatesDeletion.label',
    defaultMessage: 'Xóa khoảng ngày giới hạn?',
    description: 'Label for restricted dates delete popup allowing a user to delete a restricted date range.',
  },
  restrictedDatesDeletionHelp: {
    id: 'authoring.discussions.restrictedDatesDeletion.help',
    defaultMessage: 'Nếu xóa, người học sẽ có thể đăng bài trong thảo luận trong các ngày đó.',
    description: 'Help text for delete a upcoming restricted dates from restricted dates section.',
  },
  discussionRestrictionOffLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOff.label',
    defaultMessage: 'Nếu bật, người học sẽ có thể đăng bài trong thảo luận',
  },
  discussionRestrictionOnLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOn.label',
    defaultMessage: 'Nếu bật, người học sẽ không thể đăng bài trong thảo luận',
  },
  discussionRestrictionScheduledLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionScheduled.label',
    defaultMessage: 'Nếu thêm, người học sẽ không thể đăng bài trong thảo luận trong khoảng ngày này.',
  },
  enableRestrictedDatesConfirmationLabel: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.label',
    defaultMessage: 'Bật khoảng ngày giới hạn?',
  },
  enableRestrictedDatesConfirmationHelp: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.help',
    defaultMessage: 'Người học sẽ không thể đăng bài trong thảo luận.',
  },
  deleteAltText: {
    id: 'authoring.topics.delete',
    defaultMessage: 'Xóa chủ đề',
  },
  expandAltText: {
    id: 'authoring.topics.expand',
    defaultMessage: 'Mở rộng',
  },
  collapseAltText: {
    id: 'authoring.topics.collapse',
    defaultMessage: 'Thu gọn',
  },
  startDateLabel: {
    id: 'authoring.restrictedDates.start.date',
    defaultMessage: 'Ngày bắt đầu',
    description: 'Label for start date field',
  },
  startTimeLabel: {
    id: 'authoring.restrictedDates.start.time',
    defaultMessage: 'Giờ bắt đầu (không bắt buộc)',
    description: 'label for start time field',
  },
  endDateLabel: {
    id: 'authoring.restrictedDates.end.date',
    defaultMessage: 'Ngày kết thúc',
    description: 'label for end date field',
  },
  endTimeLabel: {
    id: 'authoring.restrictedDates.end.time',
    defaultMessage: 'Giờ kết thúc (không bắt buộc)',
    description: 'label for end time field',
  },
});

export default messages;
