import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  settingsWidgetTitle: {
    id: 'authoring.problemeditor.settings.settingsWidgetTitle',
    defaultMessage: 'Cài đặt',
    description: 'Settings Title',
  },
  showAdvanceSettingsButtonText: {
    id: 'authoring.problemeditor.settings.showAdvancedButton',
    defaultMessage: 'Hiển thị cài đặt nâng cao',
    description: 'Button text to show advanced settings',
  },
  settingsDeleteIconAltText: {
    id: 'authoring.problemeditor.settings.delete.icon.alt',
    defaultMessage: 'Xóa đáp án',
    description: 'Alt text for delete icon',
  },
  advancedSettingsLinkText: {
    id: 'authoring.problemeditor.settings.advancedSettingLink.text',
    defaultMessage: 'Thiết lập giá trị mặc định trong phần cài đặt nâng cao',
    description: 'Advanced settings link text',
  },

  hintSettingTitle: {
    id: 'authoring.problemeditor.settings.hint.title',
    defaultMessage: 'Gợi ý',
    description: 'Hint settings card title',
  },
  hintInputLabel: {
    id: 'authoring.problemeditor.settings.hint.inputLabel',
    defaultMessage: 'Gợi ý',
    description: 'Hint text input label',
  },
  addHintButtonText: {
    id: 'authoring.problemeditor.settings.hint.addHintButton',
    defaultMessage: 'Thêm gợi ý',
    description: 'Add hint button text',
  },
  noHintSummary: {
    id: 'authoring.problemeditor.settings.hint.noHintSummary',
    defaultMessage: 'Không có',
    description: 'Summary text for no hints',
  },
  hintSummary: {
    id: 'authoring.problemeditor.settings.hint.summary',
    defaultMessage: '{hint} {count, plural, =0 {} other {(+# gợi ý nữa)}}',
    description: 'Summary text for hint settings',
  },

  resetSettingsTitle: {
    id: 'authoring.problemeditor.settings.reset.title',
    defaultMessage: 'Hiện tùy chọn đặt lại',
    description: 'Reset settings card title',
  },
  resetSettingsTrue: {
    id: 'authoring.problemeditor.settings.reset.true',
    defaultMessage: 'Bật',
    description: 'True option for reset',
  },
  resetSettingsFalse: {
    id: 'authoring.problemeditor.settings.reset.false',
    defaultMessage: 'Tắt',
    description: 'False option for reset',
  },
  resetSettingText: {
    id: 'authoring.problemeditor.settings.reset.text',
    defaultMessage: 'Xác định việc có hiển thị nút "Đặt lại" để người học có thể đặt lại câu trả lời hay không, thường dùng cho bài luyện tập hoặc đánh giá dạng hình thành (formative).',
    description: 'Reset settings card text',
  },

  scoringSettingsTitle: {
    id: 'authoring.problemeditor.settings.scoring.title',
    defaultMessage: 'Chấm điểm',
    description: 'Scoring settings card title',
  },
  scoringAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.inputLabel',
    defaultMessage: 'Số lượt làm bài',
    description: 'Scoring attempts text input label',
  },
  scoringWeightInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.weight.inputLabel',
    defaultMessage: 'Điểm',
    description: 'Scoring weight input label',
  },
  unlimitedAttemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.unlimited',
    defaultMessage: 'Không giới hạn lượt làm bài',
    description: 'Summary text for unlimited attempts',
  },
  attemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.attempts',
    defaultMessage: '{attempts, plural, =1 {# lượt làm bài} other {# lượt làm bài}}',
    description: 'Summary text for number of attempts',
  },
  unlimitedAttemptsCheckboxLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.unlimitedCheckbox',
    defaultMessage: 'Không giới hạn lượt làm bài',
    description: 'Label for unlimited attempts checkbox',
  },
  weightSummary: {
    id: 'authoring.problemeditor.settings.scoring.weight',
    defaultMessage: '{weight, plural, =0 {Không tính điểm} other {# điểm}}',
    description: 'Summary text for scoring weight',
  },
  scoringSettingsLabel: {
    id: 'authoring.problemeditor.settings.scoring.label',
    defaultMessage: 'Thiết lập số điểm và số lượt làm bài được phép',
    description: 'Descriptive text for scoring settings',
  },
  attemptsHint: {
    id: 'authoring.problemeditor.settings.scoring.attempts.hint',
    defaultMessage: 'Nếu không có giá trị mặc định trong cài đặt nâng cao, hệ thống sẽ cho phép không giới hạn lượt làm bài.',
    description: 'Summary text for scoring weight',
  },
  weightHint: {
    id: 'authoring.problemeditor.settings.scoring.weight.hint',
    defaultMessage: 'Nếu không đặt giá trị, bài tập sẽ có giá trị mặc định là 1 điểm.',
    description: 'Summary text for scoring weight',
  },

  showAnswerSettingsTitle: {
    id: 'authoring.problemeditor.settings.showAnswer.title',
    defaultMessage: 'Hiển thị đáp án',
    description: 'Show Answer settings card title',
  },
  showAnswerAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.attempts.inputLabel',
    defaultMessage: 'Số lượt làm bài',
    description: 'Show Answer attempts text input label',
  },
  showAnswerSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.text',
    defaultMessage: 'Xác định thời điểm người học có thể xem đáp án đúng.',
    description: 'Show Answer settings card text',
  },

  timerSettingsTitle: {
    id: 'authoring.problemeditor.settings.timer.title',
    defaultMessage: 'Thời gian giữa các lần nộp bài',
    description: 'Timer settings card title',
  },
  timerSummary: {
    id: 'authoring.problemeditor.settings.timer.summary',
    defaultMessage: '{time} giây',
    description: 'Summary text for timer settings',
  },
  timerSettingText: {
    id: 'authoring.problemeditor.settings.timer.text',
    defaultMessage: 'Số giây học viên phải chờ giữa các lần nộp bài đối với bài tập cho phép nhiều lượt làm.',
    description: 'Timer settings card text',
  },
  timerInputLabel: {
    id: 'authoring.problemeditor.settings.timer.inputLabel',
    defaultMessage: 'Giây',
    description: 'Timer text input label',
  },

  typeSettingTitle: {
    id: 'authoring.problemeditor.settings.type.title',
    defaultMessage: 'Kiểu',
    description: 'Type settings card title',
  },

  'SwitchButtonLabel-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.label.advanced',
    defaultMessage: 'Chuyển sang trình soạn thảo nâng cao',
    description: 'button to switch to the advanced mode of the editor',
  },
  'SwitchButtonLabel-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.label.markdown',
    defaultMessage: 'Chuyển sang trình soạn thảo Markdown',
    description: 'button to switch to the markdown editor',
  },
  'ConfirmSwitchMessage-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessage.advanced',
    defaultMessage: 'Nếu bạn dùng trình soạn thảo nâng cao, bài tập này sẽ được chuyển sang định dạng OLX. Tùy vào những chỉnh sửa bạn thực hiện với OLX, có thể bạn sẽ không thể quay lại trình soạn thảo đơn giản.',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessage-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessage.markdown',
    defaultMessage: 'Một số chỉnh sửa khả dụng trong trình soạn thảo Markdown không được hỗ trợ bởi trình soạn thảo đơn giản, vì vậy có thể bạn sẽ không thể quay lại dùng trình soạn thảo đơn giản.',
    description: 'message to confirm that a user wants to use the markdown editor',
  },
  'ConfirmSwitchMessageTitle-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessageTitle.advanced',
    defaultMessage: 'Chuyển sang OLX?',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessageTitle-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessageTitle.markdown',
    defaultMessage: 'Chuyển sang Markdown?',
    description: 'message to confirm that a user wants to use the markdown editor',
  },
  'ConfirmSwitchButtonLabel-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchButtonLabel.advanced',
    defaultMessage: 'Chuyển sang trình soạn thảo nâng cao',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchButtonLabel-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchButtonLabel.markdown',
    defaultMessage: 'Chuyển sang trình soạn thảo Markdown',
    description: 'message to confirm that a user wants to use the markdown editor',
  },

  explanationInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.inputLabel',
    defaultMessage: 'Giải thích',
    description: 'answer explanation input label',
  },
  explanationSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.text',
    defaultMessage: 'Cung cấp phần giải thích cho đáp án đúng.',
    description: 'Solution Explanation text',
  },
});

export default messages;
