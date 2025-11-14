import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  advanceProblemButtonLabel: {
    id: 'authoring.problemEditor.problemSelect.advanceButton.label',
    defaultMessage: 'Các loại bài tập nâng cao',
    description: 'Button label for advance problem types option',
  },
  advanceMenuTitle: {
    id: 'authoring.problemEditor.advanceProblem.menu.title',
    defaultMessage: 'Bài tập nâng cao',
    description: 'Title for advanced problem menu',
  },
  advanceMenuGoBack: {
    id: 'authoring.problemEditor.advanceProblem.menu.goBack',
    defaultMessage: 'Quay lại',
    description: 'Return to the previous menu that shows basic problem types',
  },

  // Direct problem type message pattern - replacing redundant advanceProblemTypeLabel
  'problemType.blankadvanced.title': {
    id: 'authoring.problemeditor.advancedproblemtype.blank.title',
    defaultMessage: 'Bài tập trống',
    description: 'Title for blank advanced problem type',
  },
  'problemType.circuitschematic.title': {
    id: 'authoring.problemeditor.advancedproblemtype.circuitschematic.title',
    defaultMessage: 'Trình tạo sơ đồ mạch điện',
    description: 'Title for circuit schematic builder advanced problem type',
  },
  'problemType.jsinputresponse.title': {
    id: 'authoring.problemeditor.advancedproblemtype.jsinput.title',
    defaultMessage: 'Hiển thị và chấm điểm tùy chỉnh bằng JavaScript',
    description: 'Title for custom JavaScript display and grading advanced problem type',
  },
  'problemType.customgrader.title': {
    id: 'authoring.problemeditor.advancedproblemtype.customgrader.title',
    defaultMessage: 'Nhập liệu được chấm bằng Python tùy chỉnh',
    description: 'Title for custom Python-evaluated input advanced problem type',
  },
  'problemType.imageresponse.title': {
    id: 'authoring.problemeditor.advancedproblemtype.image.title',
    defaultMessage: 'Nhập liệu trên ảnh',
    description: 'Title for image mapped input advanced problem type',
  },
  'problemType.formularesponse.title': {
    id: 'authoring.problemeditor.advancedproblemtype.formula.title',
    defaultMessage: 'Nhập biểu thức toán học',
    description: 'Title for math expression input advanced problem type',
  },
  'problemType.problemwithhint.title': {
    id: 'authoring.problemeditor.advancedproblemtype.problemwithhint.title',
    defaultMessage: 'Bài tập với gợi ý thích ứng',
    description: 'Title for problem with adaptive hint advanced problem type',
  },

  // Basic Problem Type Messages by Key
  'problemType.multiplechoiceresponse.title': {
    id: 'authoring.problemeditor.problemtype.singleselect.title',
    defaultMessage: 'Chọn một đáp án',
    description: 'Title for single select problem type',
  },
  'problemType.multiplechoiceresponse.description': {
    id: 'authoring.problemeditor.problemtype.singleselect.description',
    defaultMessage: 'Người học phải chọn đáp án đúng từ danh sách các lựa chọn.',
    description: 'Preview description for single select problem type',
  },
  'problemType.choiceresponse.title': {
    id: 'authoring.problemeditor.problemtype.multiselect.title',
    defaultMessage: 'Chọn nhiều đáp án',
    description: 'Title for multi-select problem type',
  },
  'problemType.choiceresponse.description': {
    id: 'authoring.problemeditor.problemtype.multiselect.description',
    defaultMessage: 'Người học phải chọn tất cả các đáp án đúng từ danh sách các lựa chọn.',
    description: 'Preview description for multi-select problem type',
  },
  'problemType.optionresponse.title': {
    id: 'authoring.problemeditor.problemtype.dropdown.title',
    defaultMessage: 'Danh sách thả xuống',
    description: 'Title for dropdown problem type',
  },
  'problemType.optionresponse.description': {
    id: 'authoring.problemeditor.problemtype.dropdown.description',
    defaultMessage: 'Người học phải chọn đáp án đúng từ danh sách các lựa chọn trong danh sách thả xuống.',
    description: 'Preview description for dropdown problem type',
  },
  'problemType.numericalresponse.title': {
    id: 'authoring.problemeditor.problemtype.numeric.title',
    defaultMessage: 'Nhập số',
    description: 'Title for numerical input problem type',
  },
  'problemType.numericalresponse.description': {
    id: 'authoring.problemeditor.problemtype.numeric.description',
    defaultMessage: 'Xác định một hoặc nhiều đáp án số đúng, được nhập vào trong ô trả lời.',
    description: 'Preview description for numerical input problem type',
  },
  'problemType.stringresponse.title': {
    id: 'authoring.problemeditor.problemtype.textinput.title',
    defaultMessage: 'Nhập văn bản',
    description: 'Title for text input problem type',
  },
  'problemType.stringresponse.description': {
    id: 'authoring.problemeditor.problemtype.textinput.description',
    defaultMessage: 'Xác định một hoặc nhiều đáp án dạng văn bản (có thể bao gồm số và ký tự đặc biệt), được nhập vào trong ô trả lời.',
    description: 'Preview description for text input problem type',
  },
  'problemType.advanced.title': {
    id: 'authoring.problemeditor.problemtype.advanced.title',
    defaultMessage: 'Bài tập nâng cao',
    description: 'Title for advanced problem type',
  },
  'problemType.advanced.description': {
    id: 'authoring.problemeditor.problemtype.advanced.description',
    defaultMessage: 'Một loại bài tập nâng cao.',
    description: 'Description for advanced problem type',
  },

  problemSupportStatus: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus',
    defaultMessage: '{supportStatus}',
    description: "Text for advance problem type's support status",
  },

  supportStatusTooltipMessage: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus.tooltipMessage',
    defaultMessage: `{supportStatus,  select,
      Provisional {Các công cụ được hỗ trợ tạm thời có thể chưa đủ ổn định hoặc chưa đầy đủ chức năng
        mà khóa học của bạn yêu cầu. edX không kiểm soát chất lượng phần mềm
        hoặc nội dung được cung cấp thông qua các công cụ này.
        \n \n
        Hãy kiểm thử kỹ các công cụ này trước khi sử dụng trong khóa học, đặc biệt là trong
        các phần có tính điểm. Tài liệu hướng dẫn đầy đủ có thể chưa có sẵn cho các công cụ
        được hỗ trợ tạm thời, hoặc tài liệu có thể đến từ các nguồn ngoài edX.}
      Not_supported {Các công cụ không được hỗ trợ không do edX bảo trì và có thể bị ngừng sử dụng
        trong tương lai. Không khuyến khích dùng trong khóa học vì chúng không đáp ứng
        một hoặc nhiều yêu cầu cơ bản như kiểm thử, khả năng truy cập, quốc tế hóa
        và tài liệu hướng dẫn.}
      other { }
    }`,
    description: 'Message for support status tooltip',
  },

  problemTextInPreviewTitle: {
    id: 'authoring.problemEditor.preview.problemTextInPreviewTitle',
    defaultMessage: 'bài tập',
    description: 'Problem text in title for the problem preview column',
  },
  previewTitle: {
    id: 'authoring.problemEditor.preview.title',
    defaultMessage: 'Bài tập {previewTitle}',
    description: 'Title for the problem preview column',
  },
  previewAltText: {
    id: 'authoring.problemEditor.preview.altText',
    defaultMessage: `Minh họa xem trước của một bài tập {problemType, select,
      multiplechoiceresponse {chọn một đáp án}
      stringreponse {nhập văn bản}
      numericalresponse {nhập số}
      optionresponse {danh sách thả xuống}
      choiceresponse {chọn nhiều đáp án}
      other {null}
    }`,
    description: 'Alt text for the illustration of the problem preview',
  },
  previewDescription: {
    id: 'authoring.problemEditor.preview.description',
    defaultMessage: '{previewDescription}',
    description: 'Description of the selected problem type',
  },

  learnMoreButtonLabel: {
    id: 'authoring.problemEditor.learnMoreButtonLabel.label',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Label for Learn more button',
  },
  learnMoreAdvancedButtonLabel: {
    id: 'authoring.problemEditor.advanceProblem.learnMoreButtonLabel.label',
    defaultMessage: 'Tìm hiểu thêm về các loại bài tập nâng cao',
    description: 'Label for Learn more about advanced problem types button',
  },
});

export default messages;
