import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.configure-modal.title',
    defaultMessage: 'Cài đặt {title}',
  },
  componentTitle: {
    id: 'course-authoring.course-outline.configure-modal.component.title',
    defaultMessage: 'Chỉnh sửa quyền truy cập cho: {title}',
    description: 'The visibility modal title for unit',
  },
  basicTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.title',
    defaultMessage: 'Cơ bản',
  },
  notGradedTypeOption: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.notGradedTypeOption',
    defaultMessage: 'Không chấm điểm',
  },
  releaseDateAndTime: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date-and-time',
    defaultMessage: 'Ngày và giờ phát hành',
  },
  releaseDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date',
    defaultMessage: 'Ngày phát hành:',
  },
  releaseTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-time-UTC',
    defaultMessage: 'Giờ phát hành theo UTC:',
  },
  visibilityTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.title',
    defaultMessage: 'Hiển thị',
  },
  visibilitySectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility',
    defaultMessage: 'Hiển thị của {visibilityTitle}',
  },
  unitVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-visibility',
    defaultMessage: 'Hiển thị đơn vị học',
  },
  unitAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-access',
    defaultMessage: 'Quyền truy cập đơn vị học',
  },
  libraryContentAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.library-content-access',
    defaultMessage: 'Quyền truy cập nội dung thư viện',
  },
  splitTestAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.split-test-access',
    defaultMessage: 'Quyền truy cập Split Test',
  },
  discussionEnabledSectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.section-title',
    defaultMessage: 'Thảo luận',
  },
  discussionEnabledCheckbox: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.checkbox',
    defaultMessage: 'Bật thảo luận',
  },
  discussionEnabledDescription: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.description',
    defaultMessage: 'Chủ đề cho các đơn vị học chưa xuất bản sẽ không được tạo.',
  },
  hideFromLearners: {
    id: 'course-authoring.course-outline.configure-modal.visibility.hide-from-learners',
    defaultMessage: 'Ẩn với người học',
  },
  restrictAccessTo: {
    id: 'course-authoring.course-outline.configure-modal.visibility.restrict-access-to',
    defaultMessage: 'Giới hạn truy cập cho',
  },
  sectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility-warning',
    defaultMessage:
      'Nếu bạn đặt phần này hiển thị với người học, họ sẽ có thể xem nội dung sau khi ngày phát hành đã qua và bạn đã xuất bản phần đó. '
      + 'Chỉ những đơn vị học được đặt ẩn rõ ràng với người học mới tiếp tục bị ẩn sau khi bạn bỏ chọn tùy chọn này cho phần.',
  },
  unitVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-visibility-warning',
    defaultMessage:
      'Nếu đơn vị học trước đó đã được xuất bản và phát hành cho người học, mọi thay đổi bạn thực hiện đối với đơn vị học trong lúc nó bị ẩn giờ sẽ hiển thị với người học.',
  },
  subsectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.subsection-visibility-warning',
    defaultMessage:
      'Nếu bạn chọn tùy chọn khác với "Ẩn toàn bộ tiểu mục", các đơn vị đã xuất bản trong tiểu mục này sẽ trở nên khả dụng với người học, '
      + 'trừ khi chúng được đặt ẩn riêng.',
  },
  unitSelectGroup: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group',
    defaultMessage: 'Chọn một hoặc nhiều nhóm:',
  },
  unitSelectGroupType: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-type',
    defaultMessage: 'Chọn loại nhóm',
  },
  unitSelectDeletedGroupErrorMessage: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-deleted-error-message',
    defaultMessage: 'Nhóm này không còn tồn tại. Hãy chọn nhóm khác hoặc bỏ giới hạn truy cập.',
    description: 'The alert text of no longer available group',
  },
  unitAllLearnersAndStaff: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-all-learners-staff',
    defaultMessage: 'Tất cả người học và giảng viên',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.configure-modal.button.cancel',
    defaultMessage: 'Hủy',
  },
  saveButton: {
    id: 'course-authoring.course-outline.configure-modal.button.label',
    defaultMessage: 'Lưu',
  },
  grading: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grading',
    defaultMessage: 'Chấm điểm',
  },
  gradeAs: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grade-as',
    defaultMessage: 'Chấm điểm như:',
  },
  dueDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-date',
    defaultMessage: 'Hạn nộp:',
  },
  dueTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-time-UTC',
    defaultMessage: 'Giờ hết hạn theo UTC:',
  },
  subsectionVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.subsection-visibility',
    defaultMessage: 'Hiển thị tiểu mục',
  },
  showEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection',
    defaultMessage: 'Hiển thị toàn bộ tiểu mục',
  },
  showEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection-description',
    defaultMessage: 'Người học nhìn thấy tiểu mục đã xuất bản và có thể truy cập nội dung của nó.',
  },
  hideContentAfterDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due',
    defaultMessage: 'Ẩn nội dung sau hạn nộp',
  },
  hideContentAfterDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due-description',
    defaultMessage:
      'Sau khi hạn nộp của tiểu mục đã qua, người học sẽ không còn truy cập được nội dung của tiểu mục. '
      + 'Tiểu mục này sẽ không được tính trong điểm số.',
  },
  hideContentAfterEnd: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end',
    defaultMessage: 'Ẩn nội dung sau ngày kết thúc',
  },
  hideContentAfterEndDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-end-description',
    defaultMessage:
      'Sau khi ngày kết thúc khóa học đã qua, người học sẽ không còn truy cập được nội dung của tiểu mục. '
      + 'Tiểu mục này sẽ không được tính trong điểm số.',
  },
  hideEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection',
    defaultMessage: 'Ẩn toàn bộ tiểu mục',
  },
  hideEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection-description',
    defaultMessage:
      'Người học không nhìn thấy tiểu mục trong mục lục khóa học. Tiểu mục này sẽ không được tính trong điểm số.',
  },
  assessmentResultsVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.assessment-results-visibility',
    defaultMessage: 'Hiển thị kết quả đánh giá',
  },
  alwaysShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results',
    defaultMessage: 'Luôn hiển thị kết quả đánh giá',
    description: 'Always show assessment results option in visibility tab',
  },
  alwaysShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results-description',
    defaultMessage:
      'Khi người học nộp câu trả lời cho một bài đánh giá, họ sẽ ngay lập tức thấy câu trả lời đúng/sai và số điểm nhận được.',
    description: 'Always show assessment results option description in visibility tab',
  },
  neverShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results',
    defaultMessage: 'Không bao giờ hiển thị kết quả đánh giá',
    description: 'Never show assessment results option in visibility tab',
  },
  neverShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-description',
    defaultMessage:
      'Người học sẽ không bao giờ thấy câu trả lời đúng/sai cho bài đánh giá, cũng như số điểm nhận được.',
    description: 'Never show assessment results option description in visibility tab',
  },
  showAssessmentResultsPastDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due',
    defaultMessage: 'Hiển thị kết quả đánh giá khi tiểu mục đã quá hạn',
    description: 'Show assessment results past due option in visibility tab',
  },
  showAssessmentResultsPastDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due-description',
    defaultMessage:
      'Người học sẽ không thấy câu trả lời đúng/sai hay số điểm nhận được cho đến sau khi hạn nộp của tiểu mục đã qua. '
      + 'Nếu tiểu mục không có hạn nộp, người học luôn thấy điểm của mình khi nộp bài.',
    description: 'Show assessment results past due option description in visibility tab',
  },
  neverShowAssessmentResultsButIncludeGrade: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-but-include-grade',
    defaultMessage:
      'Không bao giờ hiển thị kết quả chi tiết, chỉ hiển thị kết quả tổng sau khi hết hạn nộp',
    description: 'Never show assessment results but include in grade calculations option in visibility tab',
  },
  neverShowAssessmentResultsButIncludeGradeDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-but-include-grade-description',
    defaultMessage:
      'Người học không thấy mức đúng/sai ở từng câu hỏi hay điểm số trước hoặc sau hạn nộp. '
      + 'Tuy nhiên, sau khi hạn nộp đã qua, họ có thể xem điểm tổng cho tiểu mục này trên trang Tiến độ.',
    description:
      'Never show assessment results but include in grade calculations option description in visibility tab',
  },
  setSpecialExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.set-special-exam',
    defaultMessage: 'Đặt là bài kiểm tra đặc biệt',
  },
  none: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.none',
    defaultMessage: 'Không',
  },
  timed: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed',
    defaultMessage: 'Giới hạn thời gian',
  },
  timedDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed-description',
    defaultMessage:
      'Sử dụng bài kiểm tra giới hạn thời gian để giới hạn thời gian người học có thể làm các câu hỏi trong tiểu mục này. '
      + 'Người học phải nộp bài trước khi hết thời gian. Bạn có thể cho phép thêm thời gian cho từng người học trong bảng điều khiển Giảng viên.',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExam',
    defaultMessage: 'Có giám sát',
  },
  proctoredExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctored-exam-description',
    defaultMessage:
      'Các bài kiểm tra có giám sát đều giới hạn thời gian và ghi lại video từng người học khi làm bài. '
      + 'Các video này sẽ được xem lại để đảm bảo người học tuân theo tất cả quy định thi. '
      + 'Lưu ý: đặt bài kiểm tra này là bài có giám sát sẽ tự động chuyển tùy chọn hiển thị sang "Ẩn nội dung sau hạn nộp".',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboardingExam',
    defaultMessage: 'Làm quen (Onboarding)',
  },
  onboardingExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboarding-exam-description',
    defaultMessage:
      'Dùng Onboarding để giới thiệu người học với việc giám sát, xác minh danh tính và tạo hồ sơ onboarding. '
      + 'Người học phải hoàn thành bước tạo hồ sơ onboarding trước khi làm bài kiểm tra có giám sát. '
      + 'Việc xét duyệt hồ sơ mất từ 2 ngày làm việc trở lên.',
  },
  practiceExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practiceExam',
    defaultMessage: 'Kiểm tra thử có giám sát',
  },
  practiceExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practice-exam-description',
    defaultMessage:
      'Dùng bài kiểm tra thử có giám sát để giới thiệu cho người học các công cụ và quy trình giám sát. '
      + 'Kết quả của bài kiểm tra thử không ảnh hưởng đến điểm số của người học.',
  },
  timedExamsDisabledTooltip: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed-exams-disabled-tooltip',
    defaultMessage: 'Bài kiểm tra giới hạn thời gian chưa được bật trên hệ thống Open edX này',
  },
  advancedTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.title',
    defaultMessage: 'Nâng cao',
  },
  timeAllotted: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-allotted',
    defaultMessage: 'Thời gian làm bài (HH:MM):',
  },
  timeLimitPlaceholder: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-limit-placeholder',
    defaultMessage: 'HH:MM',
    description:
      'The placeholder for the time limit input field, two digits for hours and two digits for minutes colons in between',
  },
  timeLimitDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-limit-description',
    defaultMessage:
      'Chọn thời lượng cho bài kiểm tra. Nếu thời lượng hơn 24 giờ, hãy tự nhập số giờ. '
      + 'Bạn có thể cấp thêm thời gian cho từng người học thông qua bảng điều khiển Giảng viên.',
  },
  prereqTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqTitle',
    defaultMessage: 'Dùng làm điều kiện tiên quyết',
  },
  prereqCheckboxLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqCheckboxLabel',
    defaultMessage: 'Cho phép tiểu mục này được dùng làm điều kiện tiên quyết cho nội dung khác',
  },
  limitAccessTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessTitle',
    defaultMessage: 'Giới hạn truy cập',
  },
  limitAccessDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessDescription',
    defaultMessage:
      'Chọn một tiểu mục điều kiện tiên quyết và nhập phần trăm điểm tối thiểu cùng phần trăm hoàn thành tối thiểu để giới hạn quyền truy cập vào tiểu mục này. '
      + 'Giá trị hợp lệ nằm trong khoảng 0–100.',
  },
  noPrerequisiteOption: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.noPrerequisiteOption',
    defaultMessage: 'Không có điều kiện tiên quyết',
  },
  prerequisiteSelectLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prerequisiteSelectLabel',
    defaultMessage: 'Điều kiện tiên quyết:',
  },
  minScoreLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreLabel',
    defaultMessage: 'Điểm tối thiểu:',
  },
  minCompletionLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionLabel',
    defaultMessage: 'Tỷ lệ hoàn thành tối thiểu:',
  },
  minScoreError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreError',
    defaultMessage: 'Phần trăm điểm tối thiểu phải là một số nguyên từ 0 đến 100.',
  },
  minCompletionError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionError',
    defaultMessage: 'Phần trăm hoàn thành tối thiểu phải là một số nguyên từ 0 đến 100.',
  },
  proctoredExamLockedAndisNotProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisNotProctoredExamAlert',
    defaultMessage:
      'Tiểu mục này đã từng được phát hành cho người học dưới dạng bài kiểm tra có giám sát, '
      + 'nhưng sau đó đã được chuyển lại thành bài kiểm tra cơ bản hoặc giới hạn thời gian. '
      + 'Hiện bạn không thể cấu hình lại nó thành bài kiểm tra có giám sát. Hãy liên hệ bộ phận hỗ trợ edX để được trợ giúp.',
  },
  proctoredExamLockedAndisProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisProctoredExamAlert',
    defaultMessage:
      'Bài kiểm tra có giám sát này đã được phát hành cho người học. Bạn không thể chuyển nó sang loại bài kiểm tra đặc biệt khác. '
      + 'Bạn có thể chuyển tiểu mục này về bài kiểm tra cơ bản bằng cách chọn "Không", hoặc bài kiểm tra giới hạn thời gian, '
      + 'nhưng sau đó bạn SẼ KHÔNG thể cấu hình lại nó thành bài kiểm tra có giám sát trong tương lai.',
  },
  reviewRulesLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesLabel',
    defaultMessage: 'Xem lại quy tắc',
  },
  reviewRulesDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescription',
    defaultMessage:
      'Chỉ định các quy tắc hoặc ngoại lệ mà đội ngũ xem xét giám sát cần áp dụng khi xem video. '
      + 'Ví dụ, bạn có thể chỉ rõ rằng người học được phép dùng máy tính. '
      + 'Các quy tắc này sẽ hiển thị cho người học trước khi họ bắt đầu làm bài kiểm tra có giám sát.',
  },
  reviewRulesDescriptionWithLink: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionWithLink',
    defaultMessage:
      'Chỉ định các quy tắc hoặc ngoại lệ mà đội ngũ xem xét giám sát cần áp dụng khi xem video. '
      + 'Ví dụ, bạn có thể chỉ rõ rằng người học được phép dùng máy tính. '
      + 'Các quy tắc này sẽ hiển thị cho người học trước khi họ bắt đầu làm bài, cùng với {hyperlink}.',
  },
  reviewRulesDescriptionLinkText: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionLinkText',
    defaultMessage: 'các quy tắc chung cho kỳ thi có giám sát',
  },
});

export default messages;
